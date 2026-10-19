import type { JournalCopy } from "@/content/journal";
import { journalMonths, monthCells, type JournalDay, type JournalFormat } from "@/lib/deskJournal";

const WEEK = 7;

/** Background for a trading day, deeper green/red the larger that day's return. */
function cellTone(day: JournalDay, peak: number): string {
  const strength = Math.min(1, Math.abs(day.retPct) / peak);
  const alpha = (0.1 + strength * 0.32).toFixed(2);
  return day.net >= 0 ? `rgba(18, 163, 127, ${alpha})` : `rgba(229, 72, 77, ${alpha})`;
}

function weeks<T>(cells: T[]): T[][] {
  return Array.from({ length: cells.length / WEEK }, (_, w) => cells.slice(w * WEEK, w * WEEK + WEEK));
}

const CELL = "block min-h-[54px] min-w-0 rounded-lg p-1 text-start sm:p-1.5 md:min-h-[64px]";

export default function JournalCalendar({
  days,
  t,
  f,
  period,
  compact = false,
}: {
  days: JournalDay[];
  t: JournalCopy;
  f: JournalFormat;
  /** Journal period; days inside it without a trade read "no trading", days outside stay blank. */
  period: { from: string; to: string };
  compact?: boolean;
}) {
  const byDate = new Map(days.map((d) => [d.date, d]));
  const peak = Math.max(...days.map((d) => Math.abs(d.retPct)), 0.01);
  const months = journalMonths(days);
  return (
    <div className={`grid gap-6 ${months.length > 1 && !compact ? "lg:grid-cols-2" : ""}`}>
      {months.map(([year, month]) => {
        const title = f.monthTitle(year, month);
        const inMonth = days.filter((d) => d.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`));
        const monthNet = inMonth.reduce((s, d) => s + d.net, 0);
        const monthPct = (inMonth.reduce((p, d) => p * (1 + d.retPct / 100), 1) - 1) * 100;
        return (
          <figure key={`${year}-${month}`} className="rv rounded-card bg-white p-5 ring-1 ring-black/5 md:p-6">
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <span className="text-[17px] font-bold capitalize text-ink">{title}</span>
              <span className={`num text-[14px] font-bold tabular-nums ${monthNet >= 0 ? "text-up" : "text-down"}`}>
                {f.money(monthNet)} · {f.pct(monthPct, 1)}
              </span>
            </figcaption>
            <table className="mt-4 w-full table-fixed border-separate border-spacing-1 sm:border-spacing-1.5" aria-label={`${t.calendarTitle} — ${title}`}>
              <thead>
                <tr>
                  {t.weekdays.map((w) => (
                    <th key={w} scope="col" className="pb-1 text-center text-[11px] font-semibold uppercase tracking-wide text-muted">
                      {w}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeks(monthCells(year, month)).map((week, wi) => (
                  <tr key={wi}>
                    {week.map((iso, di) => {
                      if (!iso) return <td key={`pad-${di}`} aria-hidden="true" />;
                      const dom = Number(iso.slice(8));
                      const day = byDate.get(iso);
                      if (!day) {
                        const inPeriod = iso >= period.from && iso <= period.to;
                        return (
                          <td key={iso} className="p-0 align-top">
                            <span className={`${CELL} bg-fog-2 text-[11px] text-muted/70`} aria-label={inPeriod ? `${f.date(iso)}: ${t.noTradeDay}` : undefined}>
                              {dom}
                            </span>
                          </td>
                        );
                      }
                      const label = `${f.date(iso)}: ${f.money(day.net)}, ${f.pct(day.retPct, 2)}, ${day.trades} ${t.tradesWord}`;
                      return (
                        <td key={iso} className="p-0 align-top">
                          <span
                            title={label}
                            aria-label={label}
                            role="img"
                            className={`${CELL} flex flex-col justify-between overflow-hidden transition-transform duration-150 hover:-translate-y-0.5`}
                            style={{ background: cellTone(day, peak) }}
                          >
                            <span className="text-[11px] font-semibold text-ink/70">{dom}</span>
                            <span dir="ltr" className="num truncate text-[10.5px] font-bold leading-tight tabular-nums text-ink sm:hidden">{f.tiny(day.net)}</span>
                            <span dir="ltr" className="num hidden truncate text-[11.5px] font-bold leading-tight tabular-nums text-ink sm:block md:text-[12.5px]">{f.cellMoney(day.net)}</span>
                            {!compact && (
                              <span dir="ltr" className={`num hidden truncate text-[10.5px] tabular-nums sm:block ${day.net >= 0 ? "text-up" : "text-down"}`}>{f.pct(day.retPct, 1)}</span>
                            )}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        );
      })}
    </div>
  );
}
