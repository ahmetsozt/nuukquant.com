import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { toneBg, assetClasses, rateCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "Fee Structure",
  description: "Clear execution, financing, data and custody charges, agreed up front.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro
        title="Fee Structure"
        kicker="Markets"
        body="Clear execution, financing, data and custody charges, agreed up front. No hidden mark-ups."
        cta={{ label: "Request a Schedule", href: "/contact-us/" }}
      />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">Asset Classes</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assetClasses.map((a) => (
              <li key={a.id} className="rounded-md border border-fog p-6 rv">
                <span className={`block h-1.5 w-12 rounded-full ${toneBg[a.tone]}`} />
                <h3 className="mt-4 text-[20px] font-normal text-ink">{a.label}</h3>
                <p className="mt-2 text-[15px] leading-6">{a.body}</p>
                <p className="mt-4 text-[13px] text-muted">Commission and financing: per your fee schedule</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="rates" className="scroll-mt-20 bg-fog py-20 lg:py-22">
        <div className="container-x">
          <h2 className="h2-section rv">What You Pay For</h2>
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
      <CtaBand title="Request your fee schedule" body="Institutional and professional clients receive a tailored schedule before onboarding." />
    </>
  );
}
