import type { Metadata } from "next";
import HomeSections from "@/components/home/HomeSections";
import { getContent, isLocale } from "@/i18n";
import { seo } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);
  return { ...seo(locale, ""), title: { absolute: c.meta.title }, description: c.meta.description };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomeSections c={getContent(locale)} locale={locale} />;
}
