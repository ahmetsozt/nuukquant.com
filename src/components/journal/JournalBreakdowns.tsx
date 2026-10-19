import type { JournalCopy } from "@/content/journal";
import type { DeskJournal, JournalFormat } from "@/lib/deskJournal";

const HOUR_CHART_HEIGHT = 120;

function BySymbol({ j, t, f }: { j: DeskJournal; t: JournalCopy; f: JournalFormat }) {
  const c = t.symbolCols;
  return (
    <figure className="rv rounded-card bg-white p-5 ring-1 ring-black/5 md:p-6">
      <figcaption className="text-[17px] font-bold text-ink">{t.bySymbolTitle}</figcaption>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px] text-[14px]">
          <thead>
            <tr className="border-b border-black/5 text-[11.5px] uppercase tracking-wide text-muted">
              <th className="py-2 text-start font-semibold">{c.symbol}</th>
              <th className="py-2 text-end font-semibold">{c.trades}</th>
              <th className="py-2 text-end font-semibold">{c.net}</th>
              <th className="py-2 text-end font-semibold">{c.winRate}</th>
              <th className="py-2 text-end font-semibold">{c.median}</th>
            </tr>
          </thead>
          <tbody>
            {j.bySymbol.map((s) => (
              <tr key={s.symbol} className="border-b border-black/5 last:border-0 hover:bg-fog-2">
                <td className="py-2.5 font-bold text-ink">{s.symbol}</td>
                <td className="num py-2.5 text-end tabular-nums">{f.int(s.trades)}</td>
                <td className={`num py-2.5 text-end font-semibold tabular-nums ${s.net >= 0 ? "text-up" : "text-down"}`}>{f.money(s.net)}</td>
                <td className="num py-2.5 text-end tabular-nums">{f.pct(s.winRate * 100, 1, false)}</td>
                <td className="num py-2.5 text-end tabular-nums text-body">
                  {f.oneDecimal(s.medianMinutes)} {t.minutes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function ByHour({ j, t, f }: { j: DeskJournal; t: JournalCopy; f: JournalFormat }) {
  const peak = Math.max(...j.byHour.map((h) => Math.abs(h.net)), 1);
  return (
    <figure className="rv rounded-card bg-white p-5 ring-1 ring-black/5 md:p-6">
      <figcaption className="text-[17px] font-bold text-ink">{t.byHourTitle}</figcaption>
      <div dir="ltr" className="mt-5 flex items-end gap-[3px]" style={{ height: HOUR_CHART_HEIGHT }} aria-hidden="true">
        {j.byHour.map((h) => (
          <span
            key={h.hour}
            title={`${String(h.hour).padStart(2, "0")}:00 · ${f.money(h.net)} · ${h.trades} ${t.tradesWord}`}
            className={`flex-1 rounded-t-[3px] transition-opacity hover:opacity-70 ${h.trades === 0 ? "bg-black/5" : h.net >= 0 ? "bg-primary" : "bg-down"}`}
            style={{ height: `${Math.max(3, (Math.abs(h.net) / peak) * HOUR_CHART_HEIGHT)}px` }}
          />
        ))}
      </div>
      <div dir="ltr" className="mt-1.5 flex justify-between text-[11px] tabular-nums text-muted" aria-hidden="true">
        {[0, 6, 12, 18, 23].map((h) => (
          <span key={h}>{String(h).padStart(2, "0")}</span>
        ))}
      </div>
      <p className="mt-3 text-[12.5px] leading-5 text-muted">{t.byHourNote}</p>
    </figure>
  );
}

function ByDuration({ j, t, f }: { j: DeskJournal; t: JournalCopy; f: JournalFormat }) {
  const peak = Math.max(...j.byDuration.map((d) => Math.abs(d.net)), 1);
  return (
    <figure className="rv rounded-card bg-white p-5 ring-1 ring-black/5 md:p-6">
      <figcaption className="text-[17px] font-bold text-ink">{t.byDurationTitle}</figcaption>
      <ul className="mt-4 space-y-3">
        {j.byDuration.map((d) => (
          <li key={d.bucket}>
            <div className="flex items-baseline justify-between gap-3 text-[13.5px]">
              <span className="font-semibold text-ink">{t.durations[d.bucket] ?? d.bucket}</span>
              <span className="num tabular-nums text-body">
                <span className={`font-bold ${d.net >= 0 ? "text-up" : "text-down"}`}>{f.money(d.net)}</span> · {f.pct(d.winRate * 100, 0, false)} · {f.int(d.trades)} {t.tradesWord}
              </span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-fog">
              <div className={`h-2 rounded-full ${d.net >= 0 ? "bg-up" : "bg-down"}`} style={{ width: `${(Math.abs(d.net) / peak) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export default function JournalBreakdowns({ j, t, f }: { j: DeskJournal; t: JournalCopy; f: JournalFormat }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
      <BySymbol j={j} t={t} f={f} />
      <div className="grid gap-6">
        <ByHour j={j} t={t} f={f} />
        <ByDuration j={j} t={t} f={f} />
      </div>
    </div>
  );
}
