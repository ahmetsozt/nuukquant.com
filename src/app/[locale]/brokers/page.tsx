import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import Button from "@/components/ui/Button";
import brokerHub from "@/components/brokers/brokerHub";
import { BrokerCardFull } from "@/components/home/BrokerCard";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "brokers/", "/og/brokers.png"), title: c.brokers.metaTitle, description: c.brokers.metaDescription };
}

export default async function BrokersPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.brokers;
  const home = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: home }, { label: p.kicker }]}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={p.hub.openAccountHref} event="broker_cta_click" eventLabel="broker">
            {p.hub.openAccount}
          </Button>
          <Button href={p.hub.lpHref} variant="outline" event="broker_cta_click" eventLabel="broker_lp">
            {p.hub.lp}
          </Button>
        </div>
        <p className="mt-8 max-w-[560px] rounded-card-sm bg-white/10 p-4 text-[13px] leading-5 text-white/80 ring-1 ring-white/10">{p.disclosure}</p>
      </PageIntro>

      <section className="section-pad bg-white" aria-labelledby="hub-heading">
        <div className="container-x">
          <brokerHub c={c} headingId="hub-heading" />
        </div>
      </section>

      <section className="section-pad bg-fog">
        <div className="container-x space-y-8">
          {p.list.map((b) => (
            <BrokerCardFull key={b.slug} b={b} c={c} />
          ))}
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="partner-heading">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="kicker">{p.partner.kicker}</p>
            <h2 id="partner-heading" className="h2-section mt-4">
              {p.partner.title}
            </h2>
            <p className="mt-5 max-w-[560px] text-[16px] leading-7 text-body">{p.partner.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={p.hub.lpHref} event="broker_cta_click" eventLabel="broker_lp">
                {p.hub.lp}
              </Button>
              <Button href={p.partner.cta.href} variant="outline-dark" event="cta_click" eventLabel="partner_programme">
                {p.partner.cta.label}
              </Button>
            </div>
          </div>
          <ul className="grid gap-4 lg:col-span-6">
            {p.partner.points.map((pt, i) => (
              <li key={pt} className="rv flex items-start gap-4 rounded-card bg-fog p-6">
                <span className="flex size-8 flex-none items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <span className="text-[15px] leading-6 text-ink">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
