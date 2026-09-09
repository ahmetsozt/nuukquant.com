import type { MetadataRoute } from "next";
import { en } from "@/content/en";
import { locales } from "@/i18n";

export const dynamic = "force-static";

const BASE = "https://www.nuukquant.com";
const PAGES = [
  "",
  "about/",
  "ai-trading/",
  "brokers/",
  ...en.brokers.list.map((b) => `brokers/${b.slug}/`),
  "contact-us/",
  "economic-calendar/",
  "education/",
  "how-we-make-money/",
  "insights/",
  "legal/risk-disclosure/",
  "legal/ib-disclosure/",
  "legal/privacy/",
  "legal/terms/",
  "portfolio-management/",
  "signals/",
  "track-record/",
];

/** One entry per page and locale; English lives at / for the home page and /en/ elsewhere. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (locale: string, page: string) => (locale === "en" && page === "" ? `${BASE}/` : `${BASE}/${locale}/${page}`);
  return PAGES.flatMap((page) =>
    locales.map((locale) => ({
      url: url(locale, page),
      lastModified: now,
      changeFrequency: page === "" || page === "insights/" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1 : page.startsWith("legal/") ? 0.3 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, url(l, page)])) },
    })),
  );
}
