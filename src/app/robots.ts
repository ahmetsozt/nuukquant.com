import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Everything is open to everyone, including AI crawlers: the site is a
 * marketing surface and being quoted by an assistant is worth as much as a
 * classic search listing. Named groups exist so the intent is explicit rather
 * than inherited from the wildcard.
 */
const SEARCH_BOTS = ["Googlebot", "Googlebot-Image", "Googlebot-News", "Bingbot", "Slurp", "DuckDuckBot", "YandexBot", "Baiduspider", "Naver", "Yeti", "Sogou", "Applebot", "SeznamBot", "Qwantify", "PetalBot", "facebookexternalhit", "Twitterbot", "LinkedInBot", "WhatsApp", "TelegramBot", "Pinterestbot"];
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Amazonbot", "Bytespider", "CCBot", "Meta-ExternalAgent", "meta-externalagent", "cohere-ai", "YouBot", "DuckAssistBot", "Diffbot", "omgili", "Timpibot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: SEARCH_BOTS, allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
