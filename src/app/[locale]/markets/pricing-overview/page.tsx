import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { toneBg } from "@/content/en";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.pages.pricing.metaTitle, description: c.pages.pricing.metaDescription };
}

export default async function PricingPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.pages.pricing;
  return (
    <>
      <PageIntro title={p.title} kicker={p.kicker} body={p.intro} cta={p.cta} />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">{p.assetsTitle}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.assetClasses.map((a) => (
              <li key={a.id} className="rounded-md border border-fog p-6 rv">
                <span className={`block h-1.5 w-12 rounded-full ${toneBg[a.tone]}`} />
                <h3 className="mt-4 text-[20px] font-normal text-ink">{a.label}</h3>
                <p className="mt-2 text-[15px] leading-6">{a.body}</p>
                <p className="mt-4 text-[13px] text-muted">{p.assetNote}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="rates" className="scroll-mt-20 bg-fog py-20 lg:py-22">
        <div className="container-x">
          <h2 className="h2-section rv">{p.ratesTitle}</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.rateCategories.map((r) => (
              <li key={r.title} className="rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand c={c} title={p.ctaTitle} body={p.ctaBody} />
    </>
  );
}
