import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Broker from "@/components/home/Broker";
import Network from "@/components/home/Network";
import CtaBand from "@/components/sections/CtaBand";
import { toneBg } from "@/content/en";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.pages.markets.metaTitle, description: c.pages.markets.metaDescription };
}

export default async function MarketsPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.pages.markets;
  return (
    <>
      <PageIntro title={p.title} kicker={p.kicker} body={p.intro} cta={p.cta}>
        <ul className="mt-12 grid max-w-[720px] grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {p.kpis.map(([n, l]) => (
            <li key={l}>
              <h2 className="font-display text-[40px] leading-none font-extralight text-mint lg:text-[56px]" dir="ltr">
                {n}
              </h2>
              <p className="mt-2 text-[14px] text-white/70">{l}</p>
            </li>
          ))}
        </ul>
      </PageIntro>

      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">{p.assetsTitle}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {c.assetClasses.map((a) => (
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
          {p.features.map((f) => (
            <div key={f.title} className="rv">
              <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-6">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="h2-section rv">{p.depositsTitle}</h2>
          <p className="text-[15px] leading-6 rv">{p.depositsBody}</p>
        </div>
      </section>

      <Broker c={c} />
      <Network c={c} />
      <CtaBand c={c} />
    </>
  );
}
