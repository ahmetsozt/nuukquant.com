import type { Metadata } from "next";
import PaymentPage, { paymentMetadata } from "@/components/membership/PaymentPage";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale } = await resolve(params);
  return paymentMetadata(locale);
}

export default async function LocalePaymentPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  return <PaymentPage c={c} locale={locale} />;
}
