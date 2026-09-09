import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icon";
import { resolve, type LocaleParams } from "@/lib/page";

const PRINCIPLE_ICONS = ["briefcase", "chart", "shield", "warning"] as const;
const STREAM_ICONS = ["chart", "briefcase", "handshake", "signal"] as const;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.money.metaTitle, description: c.money.metaDescription };
}

export default async function HowWeMakeMoneyPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.money;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} cta={p.cta} secondary={p.feesLink} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />

      {/* Principles */}
      <section className="section-pad bg-white" aria-label={p.principlesTitle}>
        <div className="container-x">
          <SectionHead title={p.principlesTitle} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.principles.map((it, i) => (
              <li key={it.title} className="rv rounded-card bg-fog p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white">
                  <Icon name={PRINCIPLE_ICONS[i] ?? "check"} size={20} />
                </span>
                <h3 className="mt-5 text-[18px] font-bold text-ink">{it.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Revenue streams */}
      <section className="section-pad bg-fog" aria-label={p.streamsTitle}>
        <div className="container-x">
          <SectionHead title={p.streamsTitle} lead={p.streamsLead} />
          <ol className="mt-10 grid gap-5 lg:grid-cols-2">
            {p.streams.map((s, i) => (
              <li key={s.title} className="rv flex flex-col rounded-card bg-white p-7 shadow-card lg:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 flex-none items-center justify-center rounded-full bg-tint text-primary">
                      <Icon name={STREAM_ICONS[i] ?? "check"} size={20} />
                    </span>
                    <div>
                      <p className="kicker text-primary">0{i + 1}</p>
                      <h3 className="text-[20px] font-bold text-ink">{s.title}</h3>
                    </div>
                  </div>
                  <span className="hidden rounded-pill bg-ink px-3 py-1 text-[11.5px] font-semibold text-white sm:inline-block">{s.share}</span>
                </div>
                <p className="mt-5 text-[15px] leading-7 text-body">{s.body}</p>
                <p className="mt-auto border-t border-black/10 pt-4 text-[13px] text-muted">
                  <Icon name="check" size={13} className="me-1.5 inline text-primary" />
                  {s.how}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link href={p.ibLink.href} className="inline-flex items-center gap-1 text-[14px] font-semibold text-primary hover:underline">
              {p.ibLink.label} <Icon name="arrow-up-right" size={14} />
            </Link>
          </p>
        </div>
      </section>

      {/* Worked example */}
      <section className="section-pad bg-white" aria-label={p.exampleTitle}>
        <div className="container-x">
          <SectionHead title={p.exampleTitle} lead={p.exampleLead} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {p.examples.map((ex) => (
              <div key={ex.name} className="rv overflow-hidden rounded-card border border-black/10">
                <div className="bg-ink px-7 py-5 text-white">
                  <p className="text-[18px] font-bold">{ex.name}</p>
                  <p className="mt-0.5 text-[13px] text-white/70">{ex.basis}</p>
                </div>
                <table className="w-full text-[14.5px]">
                  <tbody>
                    {ex.rows.map(([label, value], i) => {
                      const last = i >= ex.rows.length - 2;
                      return (
                        <tr key={label} className={`border-t border-black/5 ${i === ex.rows.length - 2 ? "bg-tint" : ""}`}>
                          <td className={`px-7 py-3.5 ${last ? "font-semibold text-ink" : "text-body"}`}>{label}</td>
                          <td className={`px-7 py-3.5 text-end tabular-nums ${last ? "font-bold text-ink" : "font-semibold text-ink"}`}>{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[900px] text-[13.5px] leading-6 text-muted">{p.exampleNote}</p>
        </div>
      </section>

      {/* Never + risk */}
      <section className="section-pad bg-hero text-white" aria-label={p.riskTitle}>
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2-section text-white">{p.neverTitle}</h2>
            <ul className="mt-8 space-y-4">
              {p.never.map((n) => (
                <li key={n} className="flex gap-3 text-[15.5px] leading-7 text-white/85">
                  <Icon name="close" size={18} className="mt-1 flex-none text-cyan" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h2 className="h2-section text-white">{p.riskTitle}</h2>
            <p className="mt-4 max-w-[560px] text-[15.5px] leading-7 text-white/75">{p.riskLead}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {p.risk.map((r) => (
                <li key={r.title} className="rounded-card-sm border border-white/10 bg-white/5 p-6">
                  <h3 className="text-[16px] font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/75">{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq title={p.faqTitle} items={p.faq} />
      <CtaBand c={c} />
    </>
  );
}
