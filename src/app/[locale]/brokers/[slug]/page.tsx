import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/sections/PageIntro";
import Faq from "@/components/sections/Faq";
import SectionHead from "@/components/ui/SectionHead";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import BrokerLogo from "@/components/ui/BrokerLogo";
import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import { en } from "@/content/en";
import { locales } from "@/i18n";
import { resolve } from "@/lib/page";

type Params = Promise<{ locale: string; slug: string }>;

/**
 * One landing page per partner broker: single offer, single CTA, conditions
 * summary, FAQ and the account-opening steps.
 */
export function generateStaticParams() {
  return locales.flatMap((locale) => en.brokers.list.map((b) => ({ locale, slug: b.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { c } = await resolve(params);
  const { slug } = await params;
  const b = c.brokers.list.find((x) => x.slug === slug);
  return b ? { title: `${b.name} — ${c.brokers.kicker}`, description: b.tagline } : {};
}

export default async function BrokerLandingPage({ params }: { params: Params }) {
  const { locale, c } = await resolve(params);
  const { slug } = await params;
  const b = c.brokers.list.find((x) => x.slug === slug);
  if (!b) notFound();
  const L = c.brokers.cardLabels;
  const home = locale === "en" ? "/" : `/${locale}/`;
  const glance: [string, string][] = [
    [L.minDeposit, b.minDeposit],
    ["EUR/USD", b.spreads[0]?.value ?? ""],
    [L.leverage, b.leverage],
    [L.withdrawal, b.withdrawalTime],
  ];
  const rows: [string, string][] = [
    [L.regulator, b.regulator],
    [L.licence, b.licence],
    [L.founded, b.founded],
    [L.platforms, b.platforms.join(" · ")],
    [L.commission, b.commission],
    [L.funding, b.funding.join(" · ")],
    [L.islamic, b.islamic ? L.yes : L.no],
    [L.languages, b.languages],
  ];
  const cta = (
    <Button href={b.referralHref} event="broker_cta_click" eventLabel={b.slug}>
      {c.ui.openAccount}
    </Button>
  );
  return (
    <>
      <PageIntro
        tone="dark"
        kicker={c.brokers.kicker}
        title={b.name}
        body={b.tagline}
        crumbs={[
          { label: c.ui.home, href: home },
          { label: L.allBrokers, href: c.nav[1].href },
          { label: b.name },
        ]}
        visual={
          <Blob className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="rounded-card bg-white px-10 py-8 shadow-card">
                <BrokerLogo slug={b.slug} name={b.name} height={56} />
              </div>
            </div>
          </Blob>
        }
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {cta}
          <Badge status={b.status} c={c} className="bg-white/10 text-white" />
        </div>
        <p className="mt-6 text-[13px] text-white/60">
          {L.bestFor}: <Fill text={b.bestFor} />
        </p>
      </PageIntro>

      {/* At a glance */}
      <section className="bg-white py-12 lg:py-16" aria-label={L.atAGlance}>
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {glance.map(([k, v]) => (
              <li key={k} className="rv rounded-card bg-fog p-6">
                <p className="text-[12.5px] text-muted">{k}</p>
                <p className="num mt-2 text-[20px] leading-snug font-bold text-ink">
                  <Fill text={v} />
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] text-muted">
            <Fill text={L.verifyNote} />
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section-pad bg-fog" aria-label={L.about}>
        <div className="container-x">
          <SectionHead title={L.about} lead={b.summary} split />
          <a href={b.website.startsWith("[") ? "#" : b.website} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-primary hover:underline">
            {L.website} <Icon name="arrow-up-right" size={14} />
          </a>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-pad bg-white" aria-label={L.conditions}>
        <div className="container-x">
          <SectionHead title={L.conditions} />
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="rounded-card bg-white p-7 shadow-card ring-1 ring-black/5 lg:col-span-7">
              <dl className="divide-y divide-black/5 text-[14px]">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3">
                    <dt className="text-muted">{k}</dt>
                    <dd className="max-w-[60%] text-end font-medium text-ink">
                      <Fill text={v} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[12px] font-semibold tracking-wide text-muted uppercase">{L.spreads}</p>
              <ul className="mt-2 grid grid-cols-3 gap-3">
                {b.spreads.map((s) => (
                  <li key={s.pair} className="rounded-2xl bg-fog px-4 py-3">
                    <p className="text-[12px] text-muted">{s.pair}</p>
                    <p className="num text-[16px] font-bold text-ink">
                      <Fill text={s.value} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 lg:col-span-5">
              <div className="rounded-card bg-fog p-7">
                <p className="text-[12px] font-semibold tracking-wide text-muted uppercase">{L.pros}</p>
                <ul className="mt-3 space-y-2 text-[14px] text-body">
                  {b.pros.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <Icon name="check" size={16} className="mt-0.5 flex-none text-primary" />
                      <Fill text={p} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card bg-fog p-7">
                <p className="text-[12px] font-semibold tracking-wide text-muted uppercase">{L.cons}</p>
                <ul className="mt-3 space-y-2 text-[14px] text-body">
                  {b.cons.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <Icon name="warning" size={16} className="mt-0.5 flex-none text-beige" />
                      <Fill text={p} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq title={L.faq} items={b.faq} tone="fog" />

      {/* Steps + final CTA */}
      <section className="bg-primary py-12 lg:py-16" aria-label={L.steps}>
        <div className="container-x">
          <div className="rounded-card bg-white px-6 py-10 shadow-card lg:px-16 lg:py-14">
            <div className="text-center">
              <h2 className="h2-section">{L.steps}</h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[15px] text-body">
                {L.openWith} <Fill text={b.name} />
              </p>
            </div>
            <ol className="mx-auto mt-10 grid max-w-[1100px] gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {b.steps.map((s, i) => (
                <li key={i} className="rv">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                  <p className="mt-4 text-[14px] leading-6 text-body">
                    <Fill text={s} />
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col items-center gap-4">
              {cta}
              <p className="max-w-[640px] text-center text-[12px] leading-5 text-muted">{c.brokers.disclosure}</p>
              <Link href={c.nav[1].href} className="text-[13px] font-semibold text-ink hover:text-primary">
                ← {L.allBrokers}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
