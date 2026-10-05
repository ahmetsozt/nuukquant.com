import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import Reveal from "@/components/ui/Reveal";
import AuthRedirect from "@/components/layout/AuthRedirect";
import Consent from "@/components/Consent";
import { getContent, locales, trRootAliases } from "@/i18n";
import { en } from "@/content/en";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
});

/**
 * Search-engine ownership codes. Each is a public verification string; set the
 * ones you have in .env.local and the meta tag appears on every page.
 * Google → search.google.com/search-console, Bing (also powers Yahoo and
 * DuckDuckGo) → bing.com/webmasters, Yandex → webmaster.yandex.com,
 * Naver → searchadvisor.naver.com, Baidu → ziyuan.baidu.com,
 * Pinterest → pinterest.com/settings/claim.
 */
const verificationMeta = Object.fromEntries(
  Object.entries({
    "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
    "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_VERIFICATION,
    "baidu-site-verification": process.env.NEXT_PUBLIC_BAIDU_VERIFICATION,
    "p:domain_verify": process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION,
    "facebook-domain-verification": process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION,
  }).filter(([, value]) => Boolean(value)),
) as Record<string, string>;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuukquant.com"),
  title: { default: en.meta.title, template: "%s | NUUK" },
  description: en.meta.description,
  applicationName: "NUUK",
  category: "finance",
  keywords: [
    "algorithmic trading",
    "AI trading systems",
    "portfolio management",
    "managed accounts",
    "MAM PAMM",
    "forex broker comparison",
    "trading signals",
    "investor education",
    "DIFC Dubai",
    "NUUK Quant",
  ],
  authors: [{ name: "NUUK", url: "https://www.nuukquant.com/" }],
  creator: "NUUK",
  publisher: "NUUK Quant",
  formatDetection: { telephone: true, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: { siteName: "NUUK", type: "website", url: "https://www.nuukquant.com/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "NUUK" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: verificationMeta,
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai International Financial Centre",
    "geo.position": "25.2110;55.2796",
    ICBM: "25.2110, 55.2796",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light dark" as const,
};

/** Root-level segments of the Turkish alias pages (/uyelik/, /abonelik-sartlari/). */
const TR_ROOTS = [...new Set(Object.values(trRootAliases).map((a) => a.split("/")[1]))].join("|");

/** Sets <html lang> from the URL before first paint; the static export shares one root layout across locales. */
// "\\/" keeps the backslash in the emitted script; a bare "\/" collapses to "/" and breaks the regex.
const LANG_BOOT = `(function(){var p=location.pathname;var m=p.match(/^\\/(${locales.join("|")})(\\/|$)/);var l=m?m[1]:/^\\/(${TR_ROOTS})(\\/|$)/.test(p)?"tr":"en";document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieLabels = Object.fromEntries(locales.map((l) => [l, { ...getContent(l).ui.cookie, href: getContent(l).legalLinks.find((x) => x.href.includes("privacy"))?.href ?? "/legal/privacy/" }]));
  return (
    // LANG_BOOT rewrites lang/dir before hydration, so the server's "en" is expected to differ.
    <html lang="en" className={`${manrope.variable} ${arabic.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOT }} />
        {children}
        <Reveal />
        <Consent labels={cookieLabels} />
        <AuthRedirect />
      </body>
    </html>
  );
}
