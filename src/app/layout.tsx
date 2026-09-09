import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import Reveal from "@/components/ui/Reveal";
import AuthRedirect from "@/components/layout/AuthRedirect";
import Analytics from "@/components/Analytics";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuukquant.com"),
  title: { default: en.meta.title, template: "%s | NUUK" },
  description: en.meta.description,
  openGraph: { siteName: "NUUK", type: "website", url: "https://www.nuukquant.com/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "NUUK" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${arabic.variable}`}>
      <body>
        {children}
        <Reveal />
        <Analytics />
        <AuthRedirect />
      </body>
    </html>
  );
}
