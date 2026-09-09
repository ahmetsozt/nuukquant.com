import type { Broker, SiteContent } from "@/content/en";

/** Link to the broker's own landing page under /brokers/{slug}/. */
export function brokerHref(c: SiteContent, b: Broker) {
  return `${c.nav[1].href}${b.slug}/`;
}

/** Primary call to action: referral link, or the contact page when accounts are opened through NUUK. */
export function brokerCta(c: SiteContent, b: Broker) {
  return b.contactToOpen ? { href: c.ctaBand.cta.href, label: c.ui.contactToOpen, external: false } : { href: b.referralHref, label: c.ui.openAccount, external: true };
}
