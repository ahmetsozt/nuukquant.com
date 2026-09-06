import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { audiences } from "@/content/site";

export const metadata: Metadata = {
  title: "Clients: Institutions, Family Offices & Traders",
  description: "Why banks, brokerages, asset managers, family offices and professional traders choose NUUK.",
};

const reasons = [
  { title: "Institutional discipline", body: "Systematic governance across execution, risk and reporting." },
  { title: "Trusted by professionals", body: "Built for institutions and professional investors, from DIFC to the world." },
  { title: "Access across 50+ venues", body: "One multi-currency account, all major asset classes." },
  { title: "Institutional technology", body: "Proprietary platform, FIX/HTTP APIs and AI-driven analytics." },
  { title: "Always available", body: "A global team and execution desk in your time zone." },
];

export default function ClientsPage() {
  return (
    <>
      <PageIntro
        title="Our clients"
        kicker="Clients"
        body="From banks to individual investors, NUUK provides one platform, one account and one point of contact."
        cta={{ label: "Contact Us", href: "/contact-us/" }}
      />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">Why professionals choose NUUK</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <li key={r.title} className="rounded-md border border-fog p-6 rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{r.body}</p>
              </li>
            ))}
          </ul>
          <h2 className="h2-section mt-20 rv">Who we serve</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(audiences).map(([slug, a]) => (
              <li key={slug} className="rv">
                <Link
                  href={`/clients/${slug}/`}
                  className="group block rounded-md bg-white p-6 shadow-card ring-1 ring-black/5 transition hover:-translate-y-0.5"
                >
                  <h3 className="text-[20px] font-normal text-ink group-hover:text-primary">{a.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[15px] leading-6">{a.intro}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Start the right conversation" />
    </>
  );
}
