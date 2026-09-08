import type { Metadata } from "next";
import Blob from "@/components/ui/Blob";
import Fill from "@/components/ui/Fill";
import Portrait from "@/components/ui/Portrait";
import SectionHead from "@/components/ui/SectionHead";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.about.metaTitle, description: c.about.metaDescription };
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const a = c.about;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro
        tone="light"
        kicker={a.kicker}
        title={a.title}
        body={a.lead}
        visual={
          <Blob className="h-full w-full">
            <Portrait alt={a.portraitAlt} />
          </Blob>
        }
        crumbs={[{ label: c.ui.home, href: localeHome }, { label: a.kicker }]}
      >
        <p className="mt-6 text-[14px] text-muted">
          {c.brand.person} · {c.brand.role} · {c.brand.office}
        </p>
      </PageIntro>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title={a.timelineTitle} />
          </div>
          <ol className="space-y-5 lg:col-span-8">
            {a.timeline.map((t, i) => (
              <li key={i} className="rv flex gap-5 rounded-card bg-fog p-7">
                <span className="flex size-8 flex-none items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <div>
                  <p className="num text-[13px] text-muted">
                    <Fill text={t.year} />
                  </p>
                  <h3 className="mt-1 text-[19px]">
                    <Fill text={t.title} />
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-6 text-body">
                    <Fill text={t.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-hero text-white">
        <div className="container-x">
          <SectionHead title={a.principlesTitle} dark />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.principles.map((p, i) => (
              <li key={p.title} className="rv rounded-card bg-navy p-7 text-white ring-1 ring-white/10">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-[19px] text-white">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-fog">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead title={a.focusTitle} />
            <ul className="mt-8 flex flex-wrap gap-2">
              {a.focus.map((f) => (
                <li key={f} className="rounded-pill bg-white px-4 py-1.5 text-[14px] font-semibold text-ink ring-1 ring-black/5">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead title={a.speakingTitle} />
            <ul className="mt-8 divide-y divide-black/5 rounded-card bg-white px-7 py-2 shadow-card ring-1 ring-black/5">
              {a.speaking.map((s, i) => (
                <li key={i} className="py-3.5 text-[15px] text-body">
                  <Fill text={s} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
