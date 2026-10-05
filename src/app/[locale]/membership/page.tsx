import type { Metadata } from "next";
import MembershipPage, { membershipMetadata } from "@/components/membership/MembershipPage";
import { resolve, type LocaleParams } from "@/lib/page";

/** /{locale}/membership/. Turkish visitors are linked to /uyelik/ instead (canonical points there). */
export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale } = await resolve(params);
  return membershipMetadata(locale);
}

export default async function LocaleMembershipPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  return <MembershipPage c={c} locale={locale} />;
}
