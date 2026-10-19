import { localePath, type Locale } from "@/i18n";
import { journalCopy } from "@/content/journal";
import { deskJournal, journalFormat } from "@/lib/deskJournal";
import Button from "@/components/ui/Button";
import EquityChart from "@/components/ui/EquityChart";
import JournalCards, { journalCards } from "@/components/journal/JournalCards";
import JournalCalendar from "@/components/journal/JournalCalendar";
import { curvePoints, JournalLabel } from "@/components/journal/DeskJournal";

const TEASER_CARDS = 4;

/** Home-page slice of the desk journal; links to the full journal on the track record page. */
export default function DeskJournalTeaser({ locale }: { locale: Locale }) {
  const t = journalCopy(locale);
  const f = journalFormat(locale);
  const j = deskJournal;
  const lastMonth = j.daily.filter((d) => d.date.slice(0, 7) === j.period.to.slice(0, 7));
  return (
    <section className="section-pad bg-white" aria-labelledby="desk-journal-teaser-title">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[680px]">
            <p className="kicker">{t.kicker}</p>
            <h2 id="desk-journal-teaser-title" className="mt-3 text-[30px] leading-tight md:text-[40px]">
              {t.title}
            </h2>
          </div>
          <Button href={localePath(locale, "/track-record/")} variant="outline-dark" size="sm">
            {t.teaserCta}
          </Button>
        </div>
        <div className="mt-5">
          <JournalLabel t={t} f={f} j={j} />
        </div>
        <div className="mt-8">
          <JournalCards cards={journalCards(j, t, f)} limit={TEASER_CARDS} />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <figure className="rv rounded-card bg-fog-2 p-5 ring-1 ring-black/5 md:p-6">
            <figcaption className="text-[17px] font-bold text-ink">{t.curveTitle}</figcaption>
            <div dir="ltr">
              <EquityChart data={curvePoints(j)} endLabel={f.pct(j.summary.twrPct, 1)} className="mt-4 h-[200px] w-full md:h-[260px]" />
            </div>
          </figure>
          <JournalCalendar days={lastMonth} t={t} f={f} period={j.period} compact />
        </div>
      </div>
    </section>
  );
}
