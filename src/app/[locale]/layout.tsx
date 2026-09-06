import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Shell from "@/components/layout/Shell";
import { getContent, isLocale, locales } from "@/i18n";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);
  return {
    title: { default: c.meta.title, template: "%s | NUUK" },
    description: c.meta.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: Object.fromEntries([...locales.map((l) => [l, `/${l}/`]), ["x-default", "/"]]),
    },
    openGraph: { locale },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Shell locale={locale}>{children}</Shell>;
}
