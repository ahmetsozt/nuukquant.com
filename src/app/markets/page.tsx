import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Broker from "@/components/home/Broker";
import Network from "@/components/home/Network";
import CtaBand from "@/components/sections/CtaBand";
import { toneBg, assetClasses } from "@/content/site";

export const metadata: Metadata = {
  title: "Markets: Multi-Asset Coverage Across 50+ Venues",
  description: "FX, commodities, equity indices, equities, fixed income, metals and digital assets from one multi-currency account.",
};

const kpis = [
  ["50+", "regulated venues"],
  ["150+", "active AI models"],
  ["<5ms", "average execution latency"],
];

const features = [
  { title: "Global Venue Access", body: "One account for venues in the Americas, Europe, the Middle East and Asia." },
  { title: "Safe Asset Custody", body: "Segregated client assets with established custodians." },
  { title: "Cross-Margining", body: "Portfolio-level margin across asset classes." },
  { title: "Proprietary Technology", body: "Web platform, FIX/HTTP API and AI-driven analytics." },
];

export default function MarketsPage() {
  return (
    <>
      <PageIntro
        title="Markets"
        kicker="Markets"
        body="Trade the world's most liquid markets from a single, multi-currency account."
        cta={{ label: "Get Started", href: "/contact-us/" }}
      >
        <ul className="mt-12 grid max-w-[720px] grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {kpis.map(([n, l]) => (
            <li key={l}>
              <h2 className="font-display text-[40px] leading-none font-extralight text-mint lg:text-[56px]">{n}</h2>
              <p className="mt-2 text-[14px] text-white/70">{l}</p>
            </li>
          ))}
        </ul>
      </PageIntro>

      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">Asset Classes</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {assetClasses.map((a) => (
              <li key={a.id} id={a.id} className="scroll-mt-24 rounded-md bg-white p-6 shadow-card ring-1 ring-black/5 rv">
                <span className={`block h-1.5 w-12 rounded-full ${toneBg[a.tone]}`} />
                <h3 className="mt-4 text-[20px] font-normal text-ink">{a.label}</h3>
                <p className="mt-2 text-[15px] leading-6">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-fog py-20 lg:py-22">
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rv">
              <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-6">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="h2-section rv">Multi-Currency Deposits</h2>
          <p className="text-[15px] leading-6 rv">
            Fund your account in USD, EUR, GBP, AED and other major currencies. Hold balances in multiple
            currencies simultaneously and settle trades without forced conversion.
          </p>
        </div>
      </section>

      <Broker />
      <Network />
      <CtaBand />
    </>
  );
}
