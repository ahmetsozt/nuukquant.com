import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import EquityChart from "@/components/ui/EquityChart";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import PerformanceCards from "@/components/home/PerformanceCards";
import type { SiteContent } from "@/content/en";

const toneClass = { up: "text-primary", down: "text-down", neutral: "text-ink" } as const;

export default function RecordStrip({ c }: { c: SiteContent }) {
  const r = c.home.record;
  const featured = c.performance[0];
  return (
    <section className="bg-paper py-20 lg:py-24" aria-labelledby="record-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={r.kicker} title={r.title} lead={r.lead} />
          <Button href={r.cta.href} variant="outline-dark">
            {r.cta.label}
          </Button>
        </div>

        {/* Featured full-width equity curve */}
        <article className="rv mt-10 grid overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-card lg:grid-cols-12">
          <div className="p-6 lg:col-span-9 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="kicker">{r.featuredLabel}</p>
                <h3 className="mt-2 text-[20px]">
                  <Fill text={featured.name} />
                </h3>
              </div>
              <Badge status={featured.status} c={c} />
            </div>
            <div className="mt-6 h-[220px] lg:h-[300px]">
              <EquityChart data={featured.series} className="h-full w-full" />
            </div>
            <p className="mt-3 text-[12px] text-muted">{r.featuredNote}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-black/5 bg-paper p-6 lg:col-span-3 lg:grid-cols-1 lg:border-t-0 lg:border-s lg:p-8">
            {featured.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-[12px] text-muted">{s.label}</dt>
                <dd className={`num mt-1 text-[26px] ${toneClass[s.tone ?? "neutral"]}`}>
                  <Fill text={s.value} />
                </dd>
              </div>
            ))}
            <div className="col-span-2 border-t border-black/5 pt-4 text-[12px] text-muted lg:col-span-1">
              {c.ui.since} <Fill text={featured.since} /> · {c.ui.source}: {featured.source}
              <br />
              <a href={featured.verifiedHref} className="mt-1 inline-flex items-center gap-1 text-primary hover:underline">
                {c.ui.verified} <Icon name="arrow-up-right" size={13} />
              </a>
            </div>
          </dl>
        </article>

        <div className="mt-6">
          <PerformanceCards c={c} limit={3} />
        </div>
        <p className="mt-6 text-[12px] text-muted">{c.trackRecord.disclaimer}</p>
      </div>
    </section>
  );
}
