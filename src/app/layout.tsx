import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import Reveal from "@/components/ui/Reveal";
import Analytics from "@/components/Analytics";
import { en } from "@/content/en";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["200", "300"],
  variable: "--font-plex",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuukquant.com"),
  title: { default: en.meta.title, template: "%s | NUUK" },
  description: en.meta.description,
  openGraph: { siteName: "NUUK", type: "website", url: "https://www.nuukquant.com/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable} ${arabic.variable}`}>
      <body>
        {children}
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
