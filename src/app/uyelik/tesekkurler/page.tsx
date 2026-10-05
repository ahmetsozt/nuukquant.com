import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import ThankYouPage, { thankYouMetadata } from "@/components/membership/ThankYouPage";
import { getContent } from "@/i18n";

export const metadata: Metadata = thankYouMetadata("tr");

/** Payment provider success URL (Stripe success_url): https://www.nuukquant.com/uyelik/tesekkurler/. Do not move. */
export default function UyelikTesekkurlerPage() {
  return (
    <Shell locale="tr">
      <ThankYouPage c={getContent("tr")} locale="tr" />
    </Shell>
  );
}
