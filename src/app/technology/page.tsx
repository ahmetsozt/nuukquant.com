import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Experts from "@/components/home/Experts";
import CtaBand from "@/components/sections/CtaBand";
import Button from "@/components/ui/Button";
import { technologyFeatures } from "@/content/site";

export const metadata: Metadata = {
  title: "Trading Technology: Platforms, APIs & AI",
  description: "Proprietary web platform, FIX and HTTP APIs, white label and AI-driven market intelligence.",
};

const ai = [
  { title: "Deep Learning Networks", body: "Multi-layered neural networks trained on billions of data points, combining LSTM, transformer models and reinforcement learning." },
  { title: "Predictive Analytics Engine", body: "Forecasting models that analyse sentiment, order flow, volatility and macro indicators, continuously validated against real outcomes." },
  { title: "Risk Governance", body: "Real-time exposure limits, circuit breakers and stress tests guard capital around the clock." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        title="Proprietary Technology"
        kicker="Technology"
        body="Enterprise-grade systems engineered for speed, reliability and performance: machine learning, low-latency execution and risk control in one stack."
        cta={{ label: "Request Demo", href: "/contact-us/" }}
      />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">Advanced technology stack</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {technologyFeatures.map((f) => (
              <li key={f.title} className="rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Experts />
      <section id="api" className="scroll-mt-20 section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="rv">
            <h2 className="h2-section">HTTP API</h2>
            <p className="mt-4 text-[15px] leading-6">
              REST endpoints for market data, orders, positions and reporting. Ideal for portfolio tooling,
              dashboards and automated strategies. No minimum commitment required.
            </p>
          </div>
          <div className="rv">
            <h2 className="h2-section">FIX API</h2>
            <p className="mt-4 text-[15px] leading-6">
              Low-latency FIX 4.4 sessions for order routing and drop-copy, co-located across global trading
              hubs for institutional execution quality.
            </p>
          </div>
        </div>
      </section>
      <section id="ai" className="scroll-mt-20 bg-fog py-20 lg:py-22">
        <div className="container-x">
          <h2 className="h2-section rv">Next-generation AI intelligence</h2>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {ai.map((a) => (
              <li key={a.title} className="rounded-md bg-white p-6 shadow-card ring-1 ring-black/5 rv">
                <h3 className="text-[20px] font-normal text-ink">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="infrastructure" className="scroll-mt-20 section-pad">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rv">
            <h2 className="h2-section">Global Trading Infrastructure</h2>
            <p className="mt-4 text-[15px] leading-6">
              Direct connections to 50+ regulated venues and liquidity providers with redundant network architecture,
              real-time data aggregation and bank-grade security. White-label deployments available for partners.
            </p>
          </div>
          <div className="rv lg:justify-self-end">
            <Button href="/contact-us/">Talk to our engineers</Button>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
