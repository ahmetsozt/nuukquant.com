import type { Metadata } from "next";
import ThankYouPage, { thankYouMetadata } from "@/components/membership/ThankYouPage";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale } = await resolve(params);
  return thankYouMetadata(locale);
}

export default async function LocaleThankYouPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  return <ThankYouPage c={c} locale={locale} />;
}
