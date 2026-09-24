import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Faq from "@/components/sections/Faq";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import InstrumentCloud from "@/components/free-signals/InstrumentCloud";
import SignalCard from "@/components/free-signals/SignalCard";
import CommunityPromise from "@/components/free-signals/CommunityPromise";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "free-signals/", "/og/free-signals.png"), title: { absolute: c.freeSignals.metaTitle }, description: c.freeSignals.metaDescription };
}

export default async function FreeSignalsPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.freeSignals;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  const channel = c.brand.whatsappChannel;

  return (
    <>
      <PageIntro
        tone="dark"
        kicker={p.brandLine}
        title={p.title}
        body={p.lead}
        cta={{ label: p.cta.label, href: channel }}
        secondary={p.secondary}
        visual={<InstrumentCloud instruments={p.instruments} />}
        crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]}
      />

      {/* Getting started: chat card + what arrives each day */}
      <section className="section-pad bg-white" aria-labelledby="start-heading">
        <div className="container-x">
          <SectionHead title={p.startTitle} />
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="rv rounded-card bg-ink p-8 text-white lg:col-span-5">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="send" size={20} />
              </span>
              <h3 className="mt-6 text-[24px] text-white">{p.chatTitle}</h3>
              <a href={channel} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan hover:underline">
                {p.chatLink}
                <Icon name="arrow-up-right" size={14} />
              </a>
              <p className="mt-4 text-[15px] leading-6 text-soft">{p.chatBody}</p>
              <div className="mt-8">
                <Button href={channel} variant="cyan" event="cta_click" eventLabel="free_signals_chat">
                  {p.chatCta}
                </Button>
              </div>
            </div>
            <div className="rv rounded-card bg-fog p-8 lg:col-span-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="signal" size={20} />
              </span>
              <h3 className="mt-6 text-[24px]">{p.dailyTitle}</h3>
              <ul className="mt-5 space-y-3">
                {p.daily.map((d) => (
                  <li key={d} className="flex gap-3 text-[15.5px] leading-6 text-body">
                    <Icon name="check" size={18} className="mt-1 flex-none text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-black/10 pt-5 text-[12.5px] leading-5 text-muted">{p.riskLine}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Access free signals: copy + three sample messages */}
      <section className="section-pad bg-fog" aria-labelledby="access-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead title={p.accessTitle} />
            <p className="mt-6 text-[16px] leading-7 text-body">{p.accessBody1}</p>
            <p className="mt-4 text-[16px] leading-7 text-body">{p.accessBody2}</p>
            <div className="mt-8">
              <Button href={channel} event="cta_click" eventLabel="free_signals_access">
                {p.accessCta}
              </Button>
            </div>
            <p className="mt-6 text-[12.5px] leading-5 text-muted">{p.riskLine}</p>
          </div>
          <div className="lg:col-span-7">
            <p className="kicker mb-4">{p.sampleLabel}</p>
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {p.samples.map((s) => (
                <SignalCard key={s.instrument} s={s} labels={p.labels} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How the AI produces a signal */}
      <section className="section-pad bg-white" aria-labelledby="how-heading">
        <div className="container-x">
          <SectionHead title={p.howTitle} lead={p.howLead} split />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {p.how.map((h, i) => (
              <li key={h.title} className="rv rounded-card bg-fog p-7">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-[19px]">{h.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CommunityPromise title={p.communityTitle} lead={p.communityLead} items={p.commitments} note={p.communityNote} />

      {/* Our aim */}
      <section className="section-pad bg-hero text-white" aria-labelledby="aim-heading">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title={p.aimTitle} dark />
          </div>
          <div className="space-y-5 text-[16.5px] leading-7 text-soft lg:col-span-8">
            {p.aim.map((para) => (
              <p key={para} className="rv">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* About NUUK */}
      <section className="section-pad bg-white" aria-labelledby="about-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHead title={p.aboutTitle} lead={p.aboutLead} />
            <p className="mt-6 text-[16px] leading-7 text-body">{p.aboutClose}</p>
            <div className="mt-8">
              <Button href={p.aboutCta.href} variant="outline-dark">
                {p.aboutCta.label}
              </Button>
            </div>
          </div>
          <div className="rounded-card bg-fog p-8 lg:col-span-6">
            <p className="kicker mb-5">{p.servicesTitle}</p>
            <ul className="space-y-4">
              {p.services.map((s) => (
                <li key={s} className="flex gap-3 text-[16px] leading-6 text-ink">
                  <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-primary text-white">
                    <Icon name="check" size={13} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq title={p.faqTitle} items={p.faq} tone="fog" />

      {/* Closing band + risk warning */}
      <section className="bg-primary py-12 lg:py-16" aria-labelledby="closing-heading">
        <div className="container-x">
          <div className="rounded-card bg-white px-6 py-10 text-center shadow-card lg:px-16 lg:py-14">
            <h2 id="closing-heading" className="h2-section mx-auto max-w-[720px]">
              <Fill text={p.closingTitle} />
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-6 text-body">{p.closingBody}</p>
            <div className="mt-8">
              <Button href={channel} event="cta_click" eventLabel="free_signals_closing">
                {p.closingCta}
              </Button>
            </div>
          </div>
          <div className="mt-8 flex gap-3 text-white/85">
            <Icon name="warning" size={18} className="mt-0.5 flex-none" />
            <p className="text-[13px] leading-5">
              <strong className="text-white">{p.riskTitle}.</strong> {p.riskBody}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
