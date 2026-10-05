import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import MembershipPage, { membershipMetadata } from "@/components/membership/MembershipPage";
import { getContent } from "@/i18n";

export const metadata: Metadata = membershipMetadata("tr");

/**
 * Turkish membership page at the short URL the NUUK app opens:
 * /uyelik/?plan=<pro|premium>&t=<checkout token>. Do not move or rename.
 */
export default function UyelikPage() {
  return (
    <Shell locale="tr">
      <MembershipPage c={getContent("tr")} locale="tr" />
    </Shell>
  );
}
