import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageIntro from "@/components/sections/PageIntro";
import CoreValues from "@/components/home/CoreValues";
import Broker from "@/components/home/Broker";
import Network from "@/components/home/Network";
import CtaBand from "@/components/sections/CtaBand";
import { en } from "@/content/en";
import { locales } from "@/i18n";
import { resolve } from "@/lib/page";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(en.audiences).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { c } = await resolve(params);
  const { slug } = await params;
  const a = c.audiences[slug as keyof typeof c.audiences];
  return a ? { title: a.title, description: a.intro } : {};
}

export default async function AudiencePage({ params }: { params: Params }) {
  const { c } = await resolve(params);
  const { slug } = await params;
  const a = c.audiences[slug as keyof typeof c.audiences];
  if (!a) notFound();
  const p = c.pages.audience;

  return (
    <>
      <PageIntro title={a.title} kicker={p.kicker} body={a.intro} cta={c.pages.ctaBand.cta} />
      <div className="pt-20 lg:pt-22 2xl:pt-30">
        <CoreValues c={c} />
      </div>
      <Broker c={c} />
      <Network c={c} />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {a.highlights.map((h) => (
            <div key={h.title} className="rv">
              <h2 className="h2-section">{h.title}</h2>
              <p className="mt-4 text-[15px] leading-6">{h.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand c={c} title={p.supportTitle} body={p.supportBody} />
    </>
  );
}
