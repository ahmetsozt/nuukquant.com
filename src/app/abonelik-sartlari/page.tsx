import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import LegalDoc from "@/components/sections/LegalDoc";
import { getContent } from "@/i18n";
import { seo } from "@/lib/seo";

const doc = getContent("tr").legal["subscription-terms"];

export const metadata: Metadata = { ...seo("tr", "legal/subscription-terms/"), title: doc.title, description: doc.body[0]?.slice(0, 160) };

/** Turkish subscription terms at a short root URL (linked from the app and checkout). Same document as /{locale}/legal/subscription-terms/. */
export default function AbonelikSartlariPage() {
  return (
    <Shell locale="tr">
      <LegalDoc c={getContent("tr")} locale="tr" slug="subscription-terms" />
    </Shell>
  );
}
