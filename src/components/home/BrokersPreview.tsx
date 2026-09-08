import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import { BrokerCardCompact } from "@/components/home/BrokerCard";
import type { SiteContent } from "@/content/en";

export default function BrokersPreview({ c }: { c: SiteContent }) {
  const b = c.home.brokers;
  return (
    <section className="section-pad bg-fog" aria-labelledby="brokers-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={b.kicker} title={b.title} lead={b.lead} />
          <Button href={b.cta.href} variant="outline-dark">
            {b.cta.label}
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {c.brokers.list.slice(0, 3).map((broker) => (
            <BrokerCardCompact key={broker.slug} b={broker} c={c} />
          ))}
        </div>
        <p className="mt-6 text-[12.5px] text-muted">{c.brokers.disclosure}</p>
      </div>
    </section>
  );
}
