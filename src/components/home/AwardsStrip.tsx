import Link from "next/link";
import BrokerLogo from "@/components/ui/BrokerLogo";
import { brokerHref } from "@/components/home/BrokerCard";
import type { SiteContent } from "@/content/en";

/** Partner-broker logo strip under the hero; each logo links to the broker's page. */
export default function AwardsStrip({ c }: { c: SiteContent }) {
  return (
    <section className="border-b border-black/5 bg-white" aria-label={c.home.hero.pressTitle}>
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-5 py-7 lg:justify-between">
        <span className="text-[12px] font-semibold tracking-wider text-muted uppercase">{c.home.hero.pressTitle}</span>
        {c.brokers.list.map((b) => (
          <Link key={b.slug} href={brokerHref(c, b)} aria-label={b.name} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
            <BrokerLogo slug={b.slug} name={b.name} height={26} className="max-w-[120px]" />
          </Link>
        ))}
      </div>
    </section>
  );
}
