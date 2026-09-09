import Blob from "@/components/ui/Blob";
import EquityChart from "@/components/ui/EquityChart";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

const STAT_COUNT = 3;

/**
 * Hero artwork: the decorative blob with a floating performance card on top,
 * showing the only equity curve backed by real data (the featured track-record card).
 * Replaces the portrait so the hero leads with the work, not the person.
 */
export default function HeroVisual({ c }: { c: SiteContent }) {
  const featured = c.performance.find((x) => x.chartLabel) ?? c.performance[0];
  const stats = featured.stats.slice(0, STAT_COUNT);
  return (
    <div className="relative mx-auto w-full max-w-[440px] pt-6 pb-10 lg:aspect-[5/4] lg:max-w-[640px] lg:p-0">
      <div className="absolute inset-0">
        <Blob className="h-full w-full" alt />
      </div>
      <div className="relative mx-[4%] rounded-card-sm bg-white p-4 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] sm:p-5 lg:absolute lg:inset-x-[8%] lg:top-[9%] lg:mx-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="kicker text-primary">{c.home.record.featuredLabel}</p>
            <p className="mt-1 text-[14px] font-bold leading-tight sm:text-[15px]">
              <Fill text={featured.name} />
            </p>
          </div>
          <span className="shrink-0 rounded-pill bg-tint px-3 py-1 text-[11.5px] font-semibold text-primary-dark">
            {c.ui.since} <Fill text={featured.since} />
          </span>
        </div>
        <div className="mt-3 h-[150px] sm:h-[180px] lg:h-[210px]">
          <EquityChart data={featured.series} className="h-full w-full" endLabel={featured.chartLabel} textScale={1.6} />
        </div>
        <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-ink/10 pt-3">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-[10.5px] uppercase tracking-wide text-muted">{s.label}</dt>
              <dd className={`mt-0.5 text-[15px] font-extrabold sm:text-[17px] ${s.tone === "up" ? "text-primary" : ""}`}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative -mt-4 ms-2 w-fit rounded-card-sm bg-white/95 px-5 py-3.5 text-ink shadow-card backdrop-blur lg:absolute lg:bottom-6 lg:-start-4 lg:m-0">
        <p className="text-[16px] font-bold">{c.brand.person}</p>
        <p className="mt-0.5 text-[12.5px] text-body">{c.brand.role} · DIFC, Dubai</p>
      </div>
    </div>
  );
}
