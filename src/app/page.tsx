import Hero from "@/components/home/Hero";
import AudienceCards from "@/components/home/AudienceCards";
import CoreValues from "@/components/home/CoreValues";
import Servicing from "@/components/home/Servicing";
import Network from "@/components/home/Network";
import Experts from "@/components/home/Experts";
import ExchangesMap from "@/components/home/ExchangesMap";
import Broker from "@/components/home/Broker";
import Pulse from "@/components/home/Pulse";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceCards />
      <CoreValues />
      <Servicing />
      <Network />
      <Experts />
      <ExchangesMap />
      <Broker />
      <Pulse />
    </>
  );
}
