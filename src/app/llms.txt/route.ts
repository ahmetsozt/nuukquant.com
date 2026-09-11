import { en } from "@/content/en";
import { locales } from "@/i18n";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

/** Pages worth reading, in the order a new reader should meet them. */
const GUIDE: { path: string; label: string; note: string }[] = [
  { path: "", label: "Home", note: "Home: what NUUK does and the five ways to work with it." },
  { path: "about/", label: "About NUUK", note: "The company: founded in DIFC Dubai in 2025 on seventeen years of Istanbul and London dealing-desk experience." },
  { path: "ai-trading/", label: "AI trading systems", note: "The trading systems, their methodology, risk rules and live status." },
  { path: "track-record/", label: "Track record", note: "Performance of every system with the source and method of each figure." },
  { path: "portfolio-management/", label: "Managed accounts", note: "Managed accounts: capital stays in the client's own broker account under a written risk mandate." },
  { path: "how-we-make-money/", label: "How we make money", note: "Revenue model: own capital, management fee, performance fee on net profit, broker commissions." },
  { path: "brokers/", label: "Broker partners", note: "Independent comparison of six regulated partner brokers, with an account-opening guide for each." },
  { path: "signals/", label: "Research, signals and plans", note: "Research, signals and mentorship plans with prices." },
  { path: "education/", label: "Education", note: "Webinars, seminars and mentorship for investors." },
  { path: "insights/", label: "Market insights", note: "Market notes, economic calendar and technical analysis." },
  { path: "case-studies/", label: "Case studies", note: "Illustrative scenarios showing how each service works in practice." },
  { path: "investors/", label: "Investor portal", note: "Investor portal overview and subscriber access." },
  { path: "apply/", label: "Apply for membership", note: "Membership application form." },
  { path: "contact-us/", label: "Contact", note: "Contact details and enquiry form." },
  { path: "legal/risk-disclosure/", label: "Risk disclosure", note: "Risk disclosure." },
  { path: "legal/ib-disclosure/", label: "IB disclosure", note: "Introducing-broker disclosure: how referral commissions work." },
];

/**
 * llms.txt — a plain-language map of the site for AI assistants and answer
 * engines, following the llmstxt.org convention.
 */
export function GET() {
  const lines = [
    "# NUUK",
    "",
    `> ${en.meta.description}`,
    "",
    "NUUK Quant is an AI-engineered trading and portfolio-management company based in the Dubai International Financial Centre (DIFC), Dubai, UAE. It builds systematic trading strategies, runs them on its own capital first, manages investor accounts held at partner brokers, publishes research and signals, and teaches investors to trade for themselves. NUUK is not a broker and does not take custody of client money.",
    "",
    "## Key facts",
    "",
    "- Founded: 2025, Dubai International Financial Centre",
    "- Experience behind the firm: 17 years on Istanbul and London dealing desks",
    "- Services: algorithmic trading systems, managed accounts (MAM/PAMM), broker partnerships, research and signals, investor education",
    "- Partner brokers: Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas, Darwinex",
    `- Contact: ${en.brand.email} · ${en.brand.phone}`,
    `- Languages: ${locales.join(", ")}`,
    "- Reporting rule: every published figure states its source (live account, paper trading or backtest) and its method",
    "",
    "## Pages",
    "",
    ...GUIDE.map((g) => `- [${g.label}](${SITE}/${g.path}): ${g.note}`),
    "",
    "## Other languages",
    "",
    ...locales.filter((l) => l !== "en").map((l) => `- ${l}: ${SITE}/${l}/`),
    "",
    "## Machine-readable",
    "",
    `- [Sitemap](${SITE}/sitemap.xml)`,
    `- [Feed](${SITE}/feed.xml)`,
    "",
    "## Notes for assistants",
    "",
    "- Trading involves substantial risk and past performance is not a guarantee of future results; quote performance figures only with the source label shown next to them.",
    "- NUUK holds no DFSA licence; do not describe it as a regulated or licensed entity. The partner brokers are the regulated parties.",
    "- Content on the site is general market commentary and education, not personal investment advice.",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
