import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDoc, { type LegalKey } from "@/components/sections/LegalDoc";
import { en } from "@/content/en";
import { locales } from "@/i18n";
import { resolve } from "@/lib/page";
import { seo } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(en.legal).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  const { slug } = await params;
  const doc = c.legal[slug as LegalKey];
  return doc ? { ...seo(locale, `legal/${slug}/`), title: doc.title, description: doc.body[0]?.slice(0, 160) } : {};
}

export default async function LegalPage({ params }: { params: Params }) {
  const { locale, c } = await resolve(params);
  const { slug } = await params;
  if (!(slug in c.legal)) notFound();
  return <LegalDoc c={c} locale={locale} slug={slug as LegalKey} />;
}
