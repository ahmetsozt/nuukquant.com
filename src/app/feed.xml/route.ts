import { en } from "@/content/en";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of desk notes so aggregators and readers can follow the site. */
export function GET() {
  const posts = en.insights.posts;
  const items = posts
    .map((p) => {
      const link = p.href.startsWith("http") ? p.href : `${SITE}${p.href}`;
      return [
        "    <item>",
        `      <title>${escape(p.title)}</title>`,
        `      <link>${escape(link)}</link>`,
        `      <guid isPermaLink="false">${escape(`${p.date}-${p.title}`)}</guid>`,
        `      <pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
        `      <category>${escape(p.category)}</category>`,
        `      <description>${escape(p.excerpt)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NUUK — Market notes</title>
    <link>${SITE}/insights/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escape(en.insights.metaDescription)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
