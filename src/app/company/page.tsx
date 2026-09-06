import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Network from "@/components/home/Network";
import Broker from "@/components/home/Broker";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About NUUK: AI-Engineered Trading Infrastructure",
  description: "NUUK is an AI-engineered quantitative trading and infrastructure company headquartered in DIFC, Dubai.",
};

const principles = [
  { title: "Discipline", body: "Every decision is systematic, risk-controlled and auditable." },
  { title: "Transparency", body: "Clear pricing, clear reporting and clear communication." },
  { title: "Engineering", body: "We build our own platforms, models and connectivity." },
  { title: "Partnership", body: "A relationship manager who knows your business." },
];

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        title="Our Story"
        kicker="About Us"
        body="NUUK is an AI-engineered quantitative trading and infrastructure company. We combine proprietary algorithms, institutional execution systems and a global venue network to give professionals disciplined access to world markets."
      />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">Guiding Principles</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title} className="rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-fog py-20 lg:py-22">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="h2-section rv">You drive the change, we deliver</h2>
          <p className="text-[15px] leading-6 rv">
            Our infrastructure connects to a diversified network of regulated global venues and liquidity
            providers, enabling automated, multi-venue execution with data integrity, latency efficiency and
            complete systematic governance.
          </p>
        </div>
      </section>
      <Broker />
      <Network />
      <CtaBand title="International team, local presence" body="Headquartered in DIFC, Dubai, serving clients across time zones." />
    </>
  );
}
