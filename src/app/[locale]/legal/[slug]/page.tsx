import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageIntro from "@/components/sections/PageIntro";
import Fill from "@/components/ui/Fill";
import { en } from "@/content/en";
import { locales } from "@/i18n";
import { resolve } from "@/lib/page";

type Params = Promise<{ locale: string; slug: string }>;
type LegalKey = keyof typeof en.legal;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(en.legal).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { c } = await resolve(params);
  const { slug } = await params;
  const doc = c.legal[slug as LegalKey];
  return doc ? { title: doc.title } : {};
}

export default async function LegalPage({ params }: { params: Params }) {
  const { c } = await resolve(params);
  const { slug } = await params;
  const doc = c.legal[slug as LegalKey];
  if (!doc) notFound();
  return (
    <>
      <PageIntro title={doc.title} />
      <section className="section-pad">
        <div className="container-x max-w-[820px] space-y-5 text-[15.5px] leading-7 text-body">
          {doc.body.map((p, i) => (
            <p key={i}>
              <Fill text={p} />
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
