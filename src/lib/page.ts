import { notFound } from "next/navigation";
import { getContent, isLocale, type Locale } from "@/i18n";
import type { SiteContent } from "@/content/en";

export type LocaleParams = Promise<{ locale: string }>;

/** Resolve the locale param into content, 404-ing on unknown locales. */
export async function resolve(params: LocaleParams): Promise<{ locale: Locale; c: SiteContent }> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, c: getContent(locale) };
}
