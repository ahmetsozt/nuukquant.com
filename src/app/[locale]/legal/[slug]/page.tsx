import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageIntro from "@/components/sections/PageIntro";
import Fill from "@/components/ui/Fill";
import { en } from "@/content/en";
import { locales } from "@/i18n";
import { resolve } from "@/lib/page";
import { seo } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;
type LegalKey = keyof typeof en.legal;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(en.legal).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  const { slug } = await params;
  const doc = c.legal[slug as LegalKey];
  return doc ? { ...seo(locale, `legal/${slug}/`), title: doc.title, description: doc.body[0]?.slice(0, 160) } : {};
}

export default async function LegalPage({ params }: { params: Params }) {
  const { locale, c } = await resolve(params);
  const { slug } = await params;
  const doc = c.legal[slug as LegalKey];
  if (!doc) notFound();
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="light" kicker={c.ui.legal} title={doc.title} crumbs={[{ label: c.ui.home, href: localeHome }, { label: doc.title }]} />
      <section className="section-pad bg-white">
        <div className="container-x max-w-[820px]">
          <div className="space-y-5 rounded-card bg-fog p-8 lg:p-10">
            {doc.body.map((p, i) => (
              <p key={i} className="text-[15.5px] leading-7 text-body">
                <Fill text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
