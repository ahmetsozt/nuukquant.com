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
  const { c } = await resolve(params);
  const p = c.insights;
  return (
    <>
      <PageIntro kicker={p.kicker} title={p.title} />
      <section className="section-pad">
        <div className="container-x">
          <InsightsList c={c} />
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
