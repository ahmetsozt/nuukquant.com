import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import PaymentPage, { paymentMetadata } from "@/components/membership/PaymentPage";
import { getContent } from "@/i18n";

export const metadata: Metadata = paymentMetadata("tr");

/** Turkish Premium payment page; the hub e-mails and the application form link here with ?k=<private key>. Do not move. */
export default function UyelikOdemePage() {
  return (
    <Shell locale="tr">
      <PaymentPage c={getContent("tr")} locale="tr" />
    </Shell>
  );
}
