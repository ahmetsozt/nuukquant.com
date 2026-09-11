import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import Badge from "@/components/ui/Badge";
import BrokerLogo from "@/components/ui/BrokerLogo";
import Button from "@/components/ui/Button";
import { BrokerCardFull, brokerCta, brokerHref } from "@/components/home/BrokerCard";
import BrokerWizard from "@/components/brokers/BrokerWizard";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "brokers/"), title: c.brokers.metaTitle, description: c.brokers.metaDescription };
}

export default async function BrokersPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.brokers;
  const L = p.cardLabels;
  const home = locale === "en" ? "/" : `/${locale}/`;
  const cols: [string, (b: (typeof p.list)[number]) => string][] = [
    [L.regulator, (b) => b.regulator],
    [L.minDeposit, (b) => b.minDeposit],
    ["EUR/USD", (b) => b.spreads[0]?.value ?? ""],
    ["XAU/USD", (b) => b.spreads[1]?.value ?? ""],
    [L.commission, (b) => b.commission],
    [L.leverage, (b) => b.leverage],
    [L.platforms, (b) => b.platforms.join(", ")],
    [L.withdrawal, (b) => b.withdrawalTime],
    [L.islamic, (b) => (b.islamic ? L.yes : L.no)],
  ];
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: home }, { label: p.kicker }]}>
        <p className="mt-8 max-w-[560px] rounded-card-sm bg-white/10 p-4 text-[13px] leading-5 text-white/80 ring-1 ring-white/10">{p.disclosure}</p>
      </PageIntro>

      <section className="section-pad bg-white" aria-label={p.wizard.title}>
        <div className="container-x">
          <BrokerWizard c={c} />
        </div>
      </section>

      <section className="section-pad bg-white pt-0">
        <div className="container-x">
          <SectionHead title={p.compareTitle} />
          <div className="mt-8 overflow-x-auto rounded-card shadow-card ring-1 ring-black/5 scroll-row">
            <table className="w-full min-w-[1360px] border-collapse text-[13px]">
              <thead>
                <tr className="bg-fog">
                  <th className="px-5 py-4 text-start font-medium text-muted"></th>
                  {p.list.map((b) => (
                    <th key={b.slug} className="px-5 py-4 text-start font-medium">
                      <div className="flex min-w-[180px] flex-col items-start gap-2">
                        <BrokerLogo slug={b.slug} name={b.name} height={28} className="max-w-[140px]" />
                        <Link href={brokerHref(c, b)} className="text-[14px] font-bold text-ink hover:text-primary">
                          <Fill text={b.name} />
                        </Link>
                        <Badge status={b.status} c={c} />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {cols.map(([label, get]) => (
                  <tr key={label}>
                    <th className="px-5 py-3.5 text-start font-normal text-muted">{label}</th>
                    {p.list.map((b) => (
                      <td key={b.slug} className="num px-5 py-3.5 font-medium text-ink">
                        <Fill text={get(b)} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th className="px-5 py-4"></th>
                  {p.list.map((b) => (
                    <td key={b.slug} className="px-5 py-4">
                      <a
                        href={brokerCta(c, b).href}
                        target={brokerCta(c, b).external ? "_blank" : undefined}
                        rel={brokerCta(c, b).external ? "noopener noreferrer" : undefined}
                        data-event="broker_cta_click"
                        data-label={b.slug}
                        className="inline-flex rounded-pill bg-primary px-5 py-3 text-[14px] font-semibold text-white hover:bg-primary-dark"
                      >
                        {brokerCta(c, b).label}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
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
            <div className="mt-8">
              <Button href={p.partner.cta.href} event="cta_click" eventLabel="partner_programme">
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
