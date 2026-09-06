import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HtmlLang from "@/components/layout/HtmlLang";
import { dir, getContent, type Locale } from "@/i18n";

/** Locale-aware page frame: header, footer and text direction. */
export default function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const c = getContent(locale);
  const direction = dir(locale);
  return (
    <div dir={direction} className={direction === "rtl" ? "font-sans" : undefined}>
      <HtmlLang lang={locale} dir={direction} />
      <Header c={c} locale={locale} />
      <main className="pt-14 lg:pt-18">{children}</main>
      <Footer c={c} locale={locale} />
    </div>
  );
}
