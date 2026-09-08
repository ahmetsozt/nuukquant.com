import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import PerformanceCards from "@/components/home/PerformanceCards";
import type { SiteContent } from "@/content/en";

export default function RecordStrip({ c }: { c: SiteContent }) {
  const r = c.home.record;
  return (
    <section className="bg-paper py-20 lg:py-24" aria-labelledby="record-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={r.kicker} title={r.title} lead={r.lead} />
          <Button href={r.cta.href} variant="outline-dark">
            {r.cta.label}
          </Button>
        </div>
        <div className="mt-10">
          <PerformanceCards c={c} limit={3} />
        </div>
        <p className="mt-6 text-[12px] text-muted">{c.trackRecord.disclaimer}</p>
      </div>
    </section>
  );
}
