import type { Locale } from "@/i18n";
import { journalCopy, type JournalCopy } from "@/content/journal";
import { deskJournal, journalFormat, type DeskJournal as Journal, type JournalFormat } from "@/lib/deskJournal";
import EquityChart from "@/components/ui/EquityChart";
import JournalCards, { journalCards } from "@/components/journal/JournalCards";
import JournalCalendar from "@/components/journal/JournalCalendar";
import JournalBreakdowns from "@/components/journal/JournalBreakdowns";

const CURVE_BASE = 100;

/** Equity index (start = 100) at the period start and after each trading day. */
export function curvePoints(j: Journal): number[] {
  return [CURVE_BASE, ...j.daily.map((d) => CURVE_BASE * (1 + d.cumPct / 100))];
}

export function JournalLabel({ t, f, j, dark = false }: { t: JournalCopy; f: JournalFormat; j: Journal; dark?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] ${dark ? "text-white/70" : "text-muted"}`}>
      <span className="inline-flex items-center gap-1.5 rounded-pill bg-[#fff4d6] px-3 py-1 text-[12px] font-semibold text-[#8a5a00] ring-1 ring-[#f0d48a]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d69e00]" aria-hidden="true" />
        {t.label}
      </span>
      <span>{t.source}</span>
      <span>
        {t.period}: {f.date(j.period.from)} – {f.date(j.period.to)}
      </span>
    </div>
  );
}

/** Full public desk journal: cards, cumulative curve, daily calendar and breakdowns. */
export default function DeskJournal({ locale }: { locale: Locale }) {
  const t = journalCopy(locale);
  const f = journalFormat(locale);
  const j = deskJournal;
  return (
    <section className="section-pad bg-fog" aria-labelledby="desk-journal-title">
      <div className="container-x">
        <p className="kicker">{t.kicker}</p>
        <h2 id="desk-journal-title" className="mt-3 max-w-[760px] text-[32px] leading-tight md:text-[42px]">
          {t.title}
        </h2>
        <p className="mt-4 max-w-[760px] text-[16.5px] leading-[1.6] text-body">{t.lead}</p>
        <div className="mt-5">
          <JournalLabel t={t} f={f} j={j} />
        </div>

        <div className="mt-10">
          <JournalCards cards={journalCards(j, t, f)} />
        </div>

        <figure className="rv mt-6 rounded-card bg-white p-5 ring-1 ring-black/5 md:p-7">
          <figcaption className="flex flex-wrap items-baseline justify-between gap-3">
            <span className="text-[17px] font-bold text-ink">{t.curveTitle}</span>
            <span className="num text-[14px] font-bold tabular-nums text-up">{f.pct(j.summary.twrPct, 2)}</span>
          </figcaption>
          <div dir="ltr">
            <EquityChart data={curvePoints(j)} endLabel={f.pct(j.summary.twrPct, 1)} className="mt-4 h-[220px] w-full md:h-[300px]" />
          </div>
          <div dir="ltr" className="mt-2 flex justify-between text-[12px] text-muted">
            <span>{f.date(j.period.from)}</span>
            <span>{f.date(j.period.to)}</span>
          </div>
        </figure>

        <div className="mt-12">
          <h3 className="text-[22px] text-ink">{t.calendarTitle}</h3>
          <p className="mt-1.5 text-[13.5px] text-muted">{t.calendarLegend}</p>
          <div className="mt-5">
            <JournalCalendar days={j.daily} t={t} f={f} period={j.period} />
          </div>
        </div>

        <div className="mt-12">
          <JournalBreakdowns j={j} t={t} f={f} />
        </div>

        <p className="mt-8 text-[12.5px] leading-5 text-muted">
          {t.updated}: {f.date(j.period.to)} · {t.tradeListNote}
        </p>
      </div>
    </section>
  );
}
