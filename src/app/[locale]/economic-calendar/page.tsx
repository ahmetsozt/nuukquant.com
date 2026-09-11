import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import TvWidget from "@/components/market/TvWidget";
import Icon from "@/components/ui/Icon";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

const EVENTS_WIDGET = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
const COUNTRIES = "us,eu,gb,jp,ch,ca,au,nz,cn,tr,ae,sa,de,fr,it,in,br,mx,za,kr";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "economic-calendar/"), title: c.calendar.metaTitle, description: c.calendar.metaDescription };
}

export default async function EconomicCalendarPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.calendar;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="light" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <section className="section-pad bg-white" aria-label={p.kicker}>
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="h-[760px] overflow-hidden rounded-card border border-black/10 bg-white shadow-card" dir="ltr">
              <TvWidget
                src={EVENTS_WIDGET}
                locale={locale}
                className="h-full"
                config={{ colorTheme: "light", isTransparent: true, width: "100%", height: "100%", importanceFilter: "-1,0,1", countryFilter: COUNTRIES }}
              />
            </div>
            <p className="mt-4 text-[13px] leading-6 text-muted">{p.note}</p>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-card bg-fog p-7 lg:p-8">
              <h2 className="text-[20px] font-bold text-ink">{p.tipsTitle}</h2>
              <ul className="mt-5 space-y-4">
                {p.tips.map((t) => (
                  <li key={t} className="flex gap-3 text-[14.5px] leading-6 text-body">
                    <Icon name="check" size={16} className="mt-1 flex-none text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
