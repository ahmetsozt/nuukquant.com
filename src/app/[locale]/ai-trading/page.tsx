import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import SectionHead from "@/components/ui/SectionHead";
import SystemCard from "@/components/home/SystemCard";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "ai-trading/", "/og/ai-trading.png"), title: c.aiTrading.metaTitle, description: c.aiTrading.metaDescription };
}

export default async function AiTradingPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.aiTrading;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} cta={p.cta} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <section className="section-pad bg-hero text-white">
        <div className="container-x">
          <h2 className="sr-only">{p.systemsTitle}</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {c.systems.map((s) => (
              <SystemCard key={s.slug} s={s} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionHead title={p.methodTitle} />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {p.method.map((m, i) => (
              <li key={m.step} className="rv rounded-card bg-fog p-7">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-[18px]">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-body">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq title={p.faqTitle} items={p.faq} tone="fog" />
      <CtaBand c={c} />
    </>
  );
}
