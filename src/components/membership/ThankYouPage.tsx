import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import SectionHead from "@/components/ui/SectionHead";
import StoreBadges from "@/components/ui/StoreBadges";
import Button from "@/components/ui/Button";
import { MembershipSteps } from "@/components/membership/MembershipPage";
import { getContent, type Locale } from "@/i18n";
import { seo } from "@/lib/seo";
import type { SiteContent } from "@/content/en";

/** The payment provider's success page: never indexed, but keeps hreflang/canonical for the language switcher. */
export function thankYouMetadata(locale: Locale): Metadata {
  const t = getContent(locale).membership.thanks;
  const base = seo(locale, "membership/thank-you/");
  return {
    ...base,
    title: t.metaTitle,
    description: t.lead,
    robots: { index: false, follow: true },
    openGraph: { ...base.openGraph, title: t.metaTitle, description: t.lead },
  };
}

/** Post-checkout confirmation (/uyelik/tesekkurler/, /{locale}/membership/thank-you/). */
export default function ThankYouPage({ c, locale }: { c: SiteContent; locale: Locale }) {
  const m = c.membership;
  const t = m.thanks;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={t.kicker} title={t.title} body={t.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: m.kicker, href: t.back.href }, { label: t.title }]}>
        <StoreBadges labels={c.ui.store} className="mt-8" />
      </PageIntro>
      <section className="section-pad bg-white" aria-label={t.stepsTitle}>
        <div className="container-x">
          <SectionHead title={t.stepsTitle} />
          <MembershipSteps steps={t.steps} />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-card bg-tint px-7 py-6">
            <p className="max-w-[640px] text-[15px] leading-6 text-ink">{t.help}</p>
            <Button href={t.back.href} variant="outline-dark" size="sm">
              {t.back.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
