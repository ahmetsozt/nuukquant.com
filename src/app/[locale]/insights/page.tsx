import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import InsightsList from "@/app/[locale]/insights/InsightsList";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.insights.metaTitle, description: c.insights.metaDescription };
}

export default async function InsightsPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.insights;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="light" kicker={p.kicker} title={p.title} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <section className="section-pad bg-white">
        <div className="container-x">
          <InsightsList c={c} />
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
