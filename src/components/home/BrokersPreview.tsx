import brokerHub from "@/components/brokers/brokerHub";
import { BrokerCardCompact } from "@/components/home/BrokerCard";
import type { SiteContent } from "@/content/en";

export default function BrokersPreview({ c }: { c: SiteContent }) {
  const broker = c.brokers.list[0];
  return (
    <section className="section-pad bg-fog" aria-label={c.home.brokers.kicker}>
      <div className="container-x">
        <brokerHub c={c} headingId="brokers-heading" />
        {broker && (
          <div className="mx-auto mt-12 max-w-[560px]">
            <BrokerCardCompact b={broker} c={c} />
          </div>
        )}
        <p className="mt-6 text-[12.5px] text-muted">{c.brokers.disclosure}</p>
      </div>
    </section>
  );
}
