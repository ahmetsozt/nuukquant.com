import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { SignalSample } from "@/components/home/SignalPreview";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.signals.metaTitle, description: c.signals.metaDescription };
}

export default async function SignalsPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.signals;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead title={p.whatTitle} />
            <ul className="mt-8 space-y-4">
              {p.what.map((w) => (
                <li key={w.title} className="rv rounded-card bg-fog p-6">
                  <h3 className="text-[18px]">{w.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-6 text-body">
                    <Fill text={w.body} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <p className="kicker mb-4">{p.formatTitle}</p>
            <SignalSample c={c} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-fog">
        <div className="container-x">
          <SectionHead title={p.plansTitle} align="center" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {p.plans.map((plan) => (
              <li key={plan.name} className={`rv flex flex-col rounded-card p-7 ${plan.highlight ? "bg-ink text-white ring-0" : "bg-white text-ink shadow-card ring-1 ring-black/5"}`}>
                <h3 className={`text-[20px] ${plan.highlight ? "text-white" : ""}`}>{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className={`num text-[36px] font-bold ${plan.highlight ? "text-white" : "text-ink"}`}>
                    <Fill text={plan.price} />
                  </span>
                  <span className={`text-[13px] ${plan.highlight ? "text-soft" : "text-muted"}`}>{plan.period}</span>
                </p>
                <ul className={`mt-6 flex-1 space-y-2 text-[14px] ${plan.highlight ? "text-soft" : "text-body"}`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Icon name="check" size={16} className={`mt-0.5 flex-none ${plan.highlight ? "text-cyan" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={c.contact.channels[2].href} variant={plan.highlight ? "primary" : "outline-dark"} className="w-full" event="plan_cta_click" eventLabel={plan.name}>
                    {plan.cta}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHead title={p.performanceTitle} />
          <div className="rounded-card bg-fog p-7">
            <p className="text-[15px] leading-6 text-body">
              <Fill text={p.performanceNote} />
            </p>
            <p className="mt-4 text-[12.5px] leading-5 text-muted">{p.disclaimer}</p>
          </div>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
