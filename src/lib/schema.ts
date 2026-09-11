import { SITE } from "@/lib/seo";
import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";

const ORG_ID = `${SITE}/#organization`;

/** The company itself: used once per page so search engines can merge the entity. */
export function organizationSchema(c: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "NUUK",
    legalName: c.brand.legalName,
    alternateName: "NUUK Quant",
    url: `${SITE}/`,
    logo: { "@type": "ImageObject", url: `${SITE}/og.png`, width: 1200, height: 630 },
    image: `${SITE}/og.png`,
    description: c.meta.description,
    foundingDate: "2025",
    slogan: c.home.hero.title,
    email: c.brand.email,
    telephone: c.brand.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dubai International Financial Centre",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: ["AE", "TR", "SA", "QA", "KW", "GB", "DE", "FR", "ES", "RU"],
    knowsLanguage: ["en", "tr", "ar", "ru", "fr", "es"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: c.brand.email,
        telephone: c.brand.phone,
        availableLanguage: ["English", "Turkish", "Arabic", "Russian", "French", "Spanish"],
      },
    ],
    sameAs: [c.brand.telegram, c.brand.whatsapp, ...c.socials.map((s) => s.href)].filter(Boolean),
  };
}

/** The website, tied to the organization entity. */
export function websiteSchema(c: SiteContent, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: `${SITE}/`,
    name: "NUUK",
    description: c.meta.description,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Breadcrumb trail mirroring the visible crumbs on inner pages. The final crumb
 * has no link, and Google allows that last item to omit its URL.
 */
export function breadcrumbSchema(crumbs: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((cr, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cr.label.replace(/\[FILL:[^\]]*\]/g, "").trim(),
      ...(cr.href ? { item: `${SITE}${cr.href}` } : {}),
    })),
  };
}

/** Question-and-answer blocks already published on the page. */
export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** A published subscription plan or managed-account service. */
export function serviceSchema(name: string, description: string, offers: { name: string; price: string; currency: string; unit: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    offers: offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price,
      priceCurrency: o.currency,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: o.price,
        priceCurrency: o.currency,
        unitText: o.unit,
      },
    })),
  };
}

/** An ordered list of published items, e.g. the desk notes on the insights page. */
export function itemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${SITE}${item.url}`,
    })),
  };
}
