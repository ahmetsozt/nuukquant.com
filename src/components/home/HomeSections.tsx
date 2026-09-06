import type { SiteContent } from "@/content/en";
import Hero from "@/components/home/Hero";
import AudienceCards from "@/components/home/AudienceCards";
import CoreValues from "@/components/home/CoreValues";
import Servicing from "@/components/home/Servicing";
import Network from "@/components/home/Network";
import Experts from "@/components/home/Experts";
import ExchangesMap from "@/components/home/ExchangesMap";
import Broker from "@/components/home/Broker";
import Pulse from "@/components/home/Pulse";

export default function HomeSections({ c }: { c: SiteContent }) {
  return (
    <>
      <Hero c={c} />
      <AudienceCards c={c} />
      <CoreValues c={c} />
      <Servicing c={c} />
      <Network c={c} />
      <Experts c={c} />
      <ExchangesMap c={c} />
      <Broker c={c} />
      <Pulse c={c} />
    </>
  );
}
