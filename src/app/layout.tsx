import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuukquant.com"),
  title: {
    default: "NUUK Prime Broker: Multi-Asset Trading Platform | 50+ Markets",
    template: "%s | NUUK",
  },
  description:
    "Trade global stocks, ETFs, bonds, futures, options, FX, metals and digital assets across 50+ markets. Fast onboarding, transparent pricing, free API and dedicated support.",
  openGraph: {
    siteName: "NUUK",
    type: "website",
    url: "https://www.nuukquant.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable}`}>
      <body>
        <Header />
        <main className="pt-14 lg:pt-18">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
