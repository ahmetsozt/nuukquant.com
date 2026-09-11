import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import HtmlLang from "@/components/layout/HtmlLang";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { dir, getContent, type Locale } from "@/i18n";

/** Locale-aware page frame: risk bar, header, footer and text direction. */
export default function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const c = getContent(locale);
  const direction = dir(locale);
  return (
    <div dir={direction} className={direction === "rtl" ? "font-sans" : undefined}>
      <HtmlLang lang={locale} dir={direction} />
      <Header c={c} locale={locale} />
      <main>{children}</main>
      <Footer c={c} locale={locale} />
      <WhatsAppFloat c={c} />
      <JsonLd data={organizationSchema(c)} />
      <JsonLd data={websiteSchema(c, locale)} />
    </div>
  );
}
