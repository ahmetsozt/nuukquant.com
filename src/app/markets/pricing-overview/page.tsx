import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { toneBg, assetClasses, rateCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing Overview: Transparent Commissions, Zero Custody Fees",
  description: "Customisable rates, zero custody fees on stocks and ETFs, flat trading and data feed charges.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro
        title="Pricing Overview"
        kicker="Trading"
        body="Customisable rates. Zero custody fees on stocks and ETFs. Flat trading, withdrawal and data feed charges. Clear shorting and overnight commissions."
        cta={{ label: "Open Account", href: "/contact-us/" }}
      />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">Transparent Pricing</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assetClasses.map((a) => (
              <li key={a.id} className="rounded-md border border-fog p-6 rv">
                <span className={`block h-1.5 w-12 rounded-full ${toneBg[a.tone]}`} />
                <h3 className="mt-4 text-[20px] font-normal text-ink">{a.label}</h3>
                <p className="mt-2 text-[15px] leading-6">{a.body}</p>
                <p className="mt-4 text-[13px] text-muted">Commission: on request · Custody: none</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="rates" className="scroll-mt-20 bg-fog py-20 lg:py-22">
        <div className="container-x">
          <h2 className="h2-section rv">Rates and Commissions</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rateCategories.map((r) => (
              <li key={r.title} className="rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Request your rate card" body="Institutional and professional clients receive a tailored schedule of rates and commissions." />
    </>
  );
}
