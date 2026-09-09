import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import SectionHead from "@/components/ui/SectionHead";
import BrokerLogo from "@/components/ui/BrokerLogo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { resolve, type LocaleParams } from "@/lib/page";

const REPORT_ICONS = ["chart", "calendar", "phone", "briefcase"] as const;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.investors.metaTitle, description: c.investors.metaDescription };
}

export default async function InvestorsPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.investors;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />

      <section className="section-pad bg-white" aria-label={p.portalsTitle}>
        <div className="container-x">
          <SectionHead title={p.portalsTitle} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.portals.map((b) => (
              <li key={b.slug} className="rv">
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="portal_login_click"
                  data-label={b.slug}
                  className="group flex items-center justify-between gap-4 rounded-card border border-black/10 bg-white p-6 transition-colors duration-200 hover:border-primary"
                >
                  <div className="flex items-center gap-4">
                    <BrokerLogo slug={b.slug} name={b.name} height={26} className="max-w-[120px]" />
                    <div>
                      <p className="text-[16px] font-bold text-ink">{b.name}</p>
                      <p className="text-[13px] text-muted">{p.portalLabel}</p>
                    </div>
                  </div>
                  <span className="flex size-10 flex-none items-center justify-center rounded-full bg-tint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name="arrow-up-right" size={16} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-fog" aria-label={p.reportsTitle}>
        <div className="container-x">
          <SectionHead title={p.reportsTitle} />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.reports.map((r, i) => (
              <li key={r.title} className="rv rounded-card bg-white p-7 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white">
                  <Icon name={REPORT_ICONS[i] ?? "check"} size={20} />
                </span>
                <h3 className="mt-5 text-[18px] font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20" aria-label={p.accessTitle}>
        <div className="container-x">
          <div className="grid items-center gap-8 rounded-card bg-ink p-8 text-white lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-8">
              <h2 className="text-[26px] font-bold leading-tight lg:text-[32px]">{p.accessTitle}</h2>
              <p className="mt-3 text-[15.5px] leading-7 text-white/75">{p.accessBody}</p>
            </div>
            <div className="lg:col-span-4 lg:text-end">
              <Button href={p.accessCta.href} event="cta_click" eventLabel="investors_access">
                {p.accessCta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Faq title={p.faqTitle} items={p.faq} tone="fog" />
      <CtaBand c={c} />
    </>
  );
}
