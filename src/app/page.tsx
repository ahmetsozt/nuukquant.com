import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import HomeSections from "@/components/home/HomeSections";
import { getContent } from "@/i18n";
import { seo } from "@/lib/seo";

const c = getContent("en");

export const metadata: Metadata = {
  ...seo("en", ""),
  title: { absolute: c.meta.title },
  description: c.meta.description,
};

/** English home served at the site root. Other locales live under /{locale}/. */
export default function RootHomePage() {
  return (
    <Shell locale="en">
      <HomeSections c={c} locale="en" />
    </Shell>
  );
}
