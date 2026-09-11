import { en } from "@/content/en";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

const clean = (value: string) => value.replace(/\[FILL:[^\]]*\]/g, "").trim();

/**
 * llms-full.txt — the substance of the site in one plain-text file, so an
 * assistant can answer about NUUK without crawling every page.
 */
export function GET() {
  const out: string[] = [
    "# NUUK — full reference for language models",
    "",
    `Source: ${SITE}/ · Generated at build time · All figures carry the source stated next to them.`,
    "",
    "## What NUUK is",
    "",
    clean(en.about.lead),
    "",
    "## Services",
    "",
    ...en.about.activities.map((a) => `### ${clean(a.title)}\n\n${clean(a.body)}\n`),
    "## Company timeline",
    "",
    ...en.about.timeline.map((t) => `- ${clean(t.year)} — ${clean(t.title)}: ${clean(t.body)}`),
    "",
    "## Operating principles",
    "",
    ...en.about.principles.map((p) => `- ${clean(p.title)}: ${clean(p.body)}`),
    "",
    "## Track record",
    "",
    clean(en.trackRecord.lead),
    "",
    ...en.performance.flatMap((card) => [
      `### ${clean(card.name)}`,
      "",
      `Source: ${clean(card.source)} · Status: ${card.status} · Since ${card.since} · Updated ${card.updated}`,
      "",
      ...card.stats.map((s) => `- ${clean(s.label)}: ${clean(s.value)}`),
      "",
    ]),
    "## Managed accounts",
    "",
    clean(en.managed.lead),
    "",
    ...en.managed.how.map((h) => `- ${clean(h.title)}: ${clean(h.body)}`),
    "",
    "## How NUUK makes money",
    "",
    clean(en.money.lead),
    "",
    ...en.money.streams.map((s) => `- ${clean(s.title)}: ${clean(s.body)}`),
    "",
    "## Plans and prices",
    "",
    ...en.signals.plans.map((p) => `- ${clean(p.name)}: ${clean(p.price)} ${clean(p.period)} — ${p.features.map(clean).join("; ")}`),
    "",
    "## Partner brokers",
    "",
    ...en.brokers.list.map((b) => `- ${clean(b.name)} (${b.slug}): ${clean(b.tagline)} · Regulation: ${clean(b.regulator)}`),
    "",
    "## Frequently asked",
    "",
    ...en.aiTrading.faq.map((f) => `**${clean(f.q)}**\n\n${clean(f.a)}\n`),
    "## Limits on what may be claimed",
    "",
    "- NUUK is not a broker, holds no DFSA licence and never takes custody of client money; the partner brokers are the regulated parties.",
    "- Published performance is either a live broker statement, paper trading or a walk-forward backtest, and the label sits next to every figure.",
    "- Nothing on the site is personal investment advice.",
    "",
  ];
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
