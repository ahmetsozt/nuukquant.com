import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n";

export const SITE = "https://www.nuukquant.com";

/** Open Graph locale codes, one per site language. */
const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  tr: "tr_TR",
  ar: "ar_AE",
  ru: "ru_RU",
  fr: "fr_FR",
  es: "es_ES",
};

/** Absolute URL of one page in one language. English home lives at the root. */
export function pageUrl(locale: Locale, path: string): string {
  return locale === "en" && path === "" ? `${SITE}/` : `${SITE}/${locale}/${path}`;
}

/**
 * Canonical URL, hreflang alternates (plus x-default) and Open Graph locale
 * for a single page. Spread into every page's generateMetadata, otherwise the
 * page inherits the locale layout's canonical and points at the home page.
 */
export function seo(locale: Locale, path: string, image = "/og.png"): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, pageUrl(l, path)]));
  languages["x-default"] = pageUrl("en", path);
  return {
    alternates: {
      canonical: pageUrl(locale, path),
      languages,
      types: { "application/rss+xml": `${SITE}/feed.xml` },
    },
    openGraph: {
      // A page-level openGraph replaces the layout's wholesale, so site name,
      // type and image have to be repeated here or social cards lose them.
      type: "website",
      siteName: "NUUK",
      url: pageUrl(locale, path),
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      images: [{ url: `${SITE}${image}`, width: 1200, height: 630, alt: "NUUK — algorithmic trading and portfolio management, DIFC Dubai" }],
    },
  };
}
