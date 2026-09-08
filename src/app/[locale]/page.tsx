import HomeSections from "@/components/home/HomeSections";
import { getContent, isLocale } from "@/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomeSections c={getContent(locale)} locale={locale} />;
}
