import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
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

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
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
    <html lang="en" className={`${inter.variable} ${plex.variable} ${serif.variable} ${mono.variable} ${arabic.variable}`}>
      <body>
        {children}
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
