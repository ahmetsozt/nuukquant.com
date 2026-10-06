import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import Faq from "@/components/sections/Faq";
import SectionHead from "@/components/ui/SectionHead";
import StoreBadges from "@/components/ui/StoreBadges";
import JsonLd from "@/components/seo/JsonLd";
import MembershipPlans from "@/components/membership/MembershipPlans";
import { getContent, type Locale } from "@/i18n";
import { hubBaseUrl, PREMIUM_FEATURES, PREMIUM_PRICE_USD } from "@/lib/membership";
import { membershipProductsSchema } from "@/lib/schema";
import { pageUrl, seo } from "@/lib/seo";
import type { SiteContent } from "@/content/en";

const PATH = "membership/";

/** Title, description, canonical/hreflang and Open Graph for the membership page in one language. */
export function membershipMetadata(locale: Locale): Metadata {
  const m = getContent(locale).membership;
  const base = seo(locale, PATH);
  return {
    ...base,
    title: m.metaTitle,
    description: m.metaDescription,
    openGraph: { ...base.openGraph, title: m.metaTitle, description: m.metaDescription },
    twitter: { card: "summary_large_image", title: m.metaTitle, description: m.metaDescription, images: ["/og.png"] },
  };
}

/** Numbered step list shared by the membership and thank-you pages. */
export function MembershipSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="mt-10 grid gap-5 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="rv rounded-card-sm bg-fog p-7">
          <span className="num flex size-10 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-white">{i + 1}</span>
          <h3 className="mt-5 text-[19px]">{s.title}</h3>
          <p className="mt-2 text-[15px] leading-6 text-body">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Dark download band with the store buttons; anchor target of the free plan's CTA. */
export function AppBand({ c }: { c: SiteContent }) {
  const m = c.membership;
  return (
    <section id="app" className="section-pad bg-hero text-white" aria-labelledby="app-heading">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="kicker mb-4 text-cyan">{c.ui.store.appLabel}</p>
          <h2 id="app-heading" className="h2-section text-white">
            {m.appTitle}
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-soft">{m.appLead}</p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <StoreBadges labels={c.ui.store} />
        </div>
      </div>
    </section>
  );
}

/**
 * NUUK app membership page (/uyelik/ in Turkish, /{locale}/membership/ elsewhere).
 * Free WhatsApp group + Premium; the application form and crypto payment flow live in MembershipPlans.
 */
export default function MembershipPage({ c, locale }: { c: SiteContent; locale: Locale }) {
  const m = c.membership;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  const paid = [{ name: m.plans.premium.name, priceUsd: PREMIUM_PRICE_USD, tagline: m.plans.premium.tagline, features: PREMIUM_FEATURES.map((f) => m.features[f]) }];
  return (
    <>
      <PageIntro
        tone="dark"
        kicker={m.kicker}
        title={m.title}
        body={m.lead}
        cta={{ label: m.heroCta.label, href: m.heroCta.target }}
        secondary={{ label: m.freeCta, href: "#plans" }}
        crumbs={[{ label: c.ui.home, href: localeHome }, { label: m.kicker }]}
      />
      <JsonLd data={membershipProductsSchema(pageUrl(locale, PATH), paid)} />

      <MembershipPlans m={m} locale={locale} hub={hubBaseUrl()} />

      <section className="section-pad bg-white" aria-label={m.stepsTitle}>
        <div className="container-x">
          <SectionHead title={m.stepsTitle} />
          <MembershipSteps steps={m.steps} />
        </div>
      </section>

      <AppBand c={c} />

      <Faq title={m.faqTitle} items={m.faq} tone="fog" />

      <section className="bg-white py-12 lg:py-16" aria-label={m.legalTitle}>
        <div className="container-x">
          <p className="kicker mb-4">{m.legalTitle}</p>
          <ul className="flex flex-wrap gap-2.5">
            {m.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex rounded-pill border-[1.5px] border-line px-4 py-2 text-[14px] font-semibold text-ink transition-colors hover:border-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
