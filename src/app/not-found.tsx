import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import NotFoundBody from "@/components/NotFoundBody";
import { getContent, locales } from "@/i18n";

export const metadata: Metadata = { title: "404", robots: { index: false, follow: true } };

/** Branded 404 (exported as /404.html, which GitHub Pages serves for unknown paths). */
export default function NotFound() {
  const labels = Object.fromEntries(
    locales.map((l) => {
      const c = getContent(l);
      const links = c.nav.flatMap((g) => (g.items.length ? g.items : [{ label: g.label, href: g.href }])).slice(0, 8);
      return [l, { ...c.ui.notFound, homeHref: l === "en" ? "/" : `/${l}/`, links }];
    }),
  );
  return (
    <Shell locale="en">
      <NotFoundBody labels={labels} />
    </Shell>
  );
}
