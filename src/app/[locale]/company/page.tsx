import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Network from "@/components/home/Network";
import Broker from "@/components/home/Broker";
import CtaBand from "@/components/sections/CtaBand";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.pages.company.metaTitle, description: c.pages.company.metaDescription };
}

export default async function CompanyPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.pages.company;
  return (
    <>
      <PageIntro title={p.title} kicker={p.kicker} body={p.intro} />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">{p.principlesTitle}</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {p.principles.map((x) => (
              <li key={x.title} className="rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{x.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{x.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-fog py-20 lg:py-22">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="h2-section rv">{p.deliverTitle}</h2>
          <p className="text-[15px] leading-6 rv">{p.deliverBody}</p>
        </div>
      </section>
      <Broker c={c} />
      <Network c={c} />
      <CtaBand c={c} title={p.ctaTitle} body={p.ctaBody} />
    </>
  );
}
