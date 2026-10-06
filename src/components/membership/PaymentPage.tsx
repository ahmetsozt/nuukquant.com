import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import PaymentView from "@/components/membership/PaymentView";
import { localePath, type Locale } from "@/i18n";
import { hubBaseUrl } from "@/lib/membership";
import type { SiteContent } from "@/content/en";
import { getContent } from "@/i18n";

/** "Hi {name}, send…" → "Send…": the static page cannot know the name. */
function withoutGreeting(lead: string): string {
  const rest = lead.split("{name}, ")[1];
  return rest ? rest.charAt(0).toLocaleUpperCase() + rest.slice(1) : lead;
}

/** Private per-applicant page (opened with ?k=): never indexed, no canonical alternates. */
export function paymentMetadata(locale: Locale): Metadata {
  const p = getContent(locale).membership.payment;
  return { title: p.metaTitle, robots: { index: false, follow: false } };
}

export default function PaymentPage({ c, locale }: { c: SiteContent; locale: Locale }) {
  const m = c.membership;
  const p = m.payment;
  const membershipHref = localePath(locale, "/membership/");
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={withoutGreeting(p.lead)} />
      <section className="section-pad bg-fog">
        <div className="container-x max-w-[1080px]">
          <PaymentView m={m} hub={hubBaseUrl()} membershipHref={membershipHref} />
        </div>
      </section>
    </>
  );
}
