import type { Metadata } from "next";
import Fill from "@/components/ui/Fill";
import Portrait from "@/components/ui/Portrait";
import SectionHead from "@/components/ui/SectionHead";
import CtaBand from "@/components/sections/CtaBand";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.about.metaTitle, description: c.about.metaDescription };
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const a = c.about;
  return (
    <>
      <section className="border-b border-black/5 bg-paper">
        <div className="container-x grid gap-10 pt-16 pb-14 lg:grid-cols-12 lg:items-center lg:pt-24 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="kicker mb-4">{a.kicker}</p>
            <h1 className="h1-display">
              <Fill text={a.title} />
            </h1>
            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.65] text-body">
              <Fill text={a.lead} />
            </p>
            <p className="mt-6 text-[14px] text-muted">
              {c.brand.person} · {c.brand.role} · {c.brand.office}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-2xl">
              <Portrait alt={a.portraitAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title={a.timelineTitle} />
          </div>
          <ol className="relative space-y-8 border-s border-black/10 ps-8 lg:col-span-8">
            {a.timeline.map((t, i) => (
              <li key={i} className="rv relative">
                <span className="absolute -start-[37px] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-white" />
                <p className="num text-[13px] text-muted">
                  <Fill text={t.year} />
                </p>
                <h3 className="mt-1 text-[19px]">
                  <Fill text={t.title} />
                </h3>
                <p className="mt-1 text-[14.5px] leading-6 text-body">
                  <Fill text={t.body} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="container-x">
          <SectionHead title={a.principlesTitle} dark />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {a.principles.map((p, i) => (
              <li key={p.title} className="rv border-t border-white/10 pt-5">
                <p className="num text-[12px] text-mint">0{i + 1}</p>
                <h3 className="mt-3 text-[19px] text-white">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead title={a.focusTitle} />
            <ul className="mt-8 flex flex-wrap gap-2">
              {a.focus.map((f) => (
                <li key={f} className="rounded-full border border-black/10 px-4 py-1.5 text-[14px] text-ink">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead title={a.speakingTitle} />
            <ul className="mt-8 divide-y divide-black/5">
              {a.speaking.map((s, i) => (
                <li key={i} className="py-3 text-[15px] text-body">
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
