import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Experts from "@/components/home/Experts";
import CtaBand from "@/components/sections/CtaBand";
import Button from "@/components/ui/Button";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.pages.technology.metaTitle, description: c.pages.technology.metaDescription };
}

export default async function TechnologyPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.pages.technology;
  return (
    <>
      <PageIntro title={p.title} kicker={p.kicker} body={p.intro} cta={p.cta} />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">{p.stackTitle}</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {c.technologyFeatures.map((f) => (
              <li key={f.title} className="rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Experts c={c} />
      <section id="api" className="scroll-mt-20 section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="rv">
            <h2 className="h2-section">{p.httpTitle}</h2>
            <p className="mt-4 text-[15px] leading-6">{p.httpBody}</p>
          </div>
          <div className="rv">
            <h2 className="h2-section">{p.fixTitle}</h2>
            <p className="mt-4 text-[15px] leading-6">{p.fixBody}</p>
          </div>
        </div>
      </section>
      <section id="ai" className="scroll-mt-20 bg-fog py-20 lg:py-22">
        <div className="container-x">
          <h2 className="h2-section rv">{p.aiTitle}</h2>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {p.ai.map((a) => (
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
            <h2 className="h2-section">{p.infraTitle}</h2>
            <p className="mt-4 text-[15px] leading-6">{p.infraBody}</p>
          </div>
          <div className="rv lg:justify-self-end">
            <Button href={p.infraCta.href}>{p.infraCta.label}</Button>
          </div>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
