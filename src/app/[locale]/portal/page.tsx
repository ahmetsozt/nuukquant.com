import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import PortalLoader from "@/app/[locale]/portal/PortalLoader";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "portal/"), title: c.portal.metaTitle, description: c.portal.lead, robots: { index: false } };
}

export default async function PortalPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.portal;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <section className="section-pad bg-fog" aria-label={p.kicker}>
        <div className="container-x">
          <PortalLoader c={c} />
        </div>
      </section>
    </>
  );
}
