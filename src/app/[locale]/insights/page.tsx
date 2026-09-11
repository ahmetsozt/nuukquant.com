import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import InsightsList from "@/app/[locale]/insights/InsightsList";
import SectionHead from "@/components/ui/SectionHead";
import TvWidget from "@/components/market/TvWidget";

const TIMELINE = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
const TECH = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
const TECH_SYMBOLS = ["OANDA:XAUUSD", "FX:EURUSD", "CAPITALCOM:US500", "BITSTAMP:BTCUSD"];
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "insights/", "/og/insights.png"), title: c.insights.metaTitle, description: c.insights.metaDescription };
}

export default async function InsightsPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.insights;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="light" kicker={p.kicker} title={p.title} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <JsonLd data={itemListSchema(c.insights.metaTitle, c.insights.posts.map((post) => ({ name: post.title, url: post.href })))} />
      <section className="section-pad bg-white" aria-label={p.newsTitle}>
        <div className="container-x">
          <SectionHead title={p.newsTitle} lead={p.newsLead} />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {(["forex", "all_symbols"] as const).map((mode) => (
              <div key={mode} className="h-[560px] overflow-hidden rounded-card border border-black/10 bg-white" dir="ltr">
                <TvWidget
                  src={TIMELINE}
                  locale={locale}
                  className="h-full"
                  config={mode === "forex" ? { feedMode: "market", market: "forex", isTransparent: true, displayMode: "regular", width: "100%", height: "100%", colorTheme: "light" } : { feedMode: "all_symbols", isTransparent: true, displayMode: "regular", width: "100%", height: "100%", colorTheme: "light" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-fog" aria-label={p.techTitle}>
        <div className="container-x">
          <SectionHead title={p.techTitle} lead={p.techLead} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {TECH_SYMBOLS.map((symbol) => (
              <div key={symbol} className="h-[420px] overflow-hidden rounded-card bg-white shadow-card" dir="ltr">
                <TvWidget src={TECH} locale={locale} className="h-full" config={{ interval: "1D", width: "100%", height: "100%", isTransparent: true, symbol, showIntervalTabs: true, displayMode: "single", colorTheme: "light" }} />
              </div>
            ))}
          </div>
          <p className="mt-5 text-[12.5px] text-muted">{p.feedNote}</p>
        </div>
      </section>
      <section className="section-pad bg-white" aria-label={p.notesTitle}>
        <div className="container-x">
          <SectionHead title={p.notesTitle} />
          <div className="mt-8">
            <InsightsList c={c} />
          </div>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
