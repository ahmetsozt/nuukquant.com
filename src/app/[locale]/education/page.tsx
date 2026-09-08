import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import Button from "@/components/ui/Button";
import EventCard from "@/components/home/EventCard";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.education.metaTitle, description: c.education.metaDescription };
}

export default async function EducationPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.education;
  return (
    <>
      <PageIntro kicker={p.kicker} title={p.title} body={p.lead} />

      <section className="section-pad">
        <div className="container-x">
          <SectionHead title={p.upcomingTitle} />
          <div className="mt-8 space-y-4">
            {p.events.map((e, i) => (
              <EventCard key={i} e={e} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="container-x">
          <SectionHead title={p.curriculumTitle} dark />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {p.curriculum.map((lvl, i) => (
              <li key={lvl.level} className="rv rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="num text-[12px] text-mint">
                  0{i + 1} · {lvl.level}
                </p>
                <h3 className="mt-3 text-[20px] text-white">{lvl.title}</h3>
                <ul className="mt-4 space-y-1.5 text-[14px] text-soft">
                  {lvl.topics.map((t) => (
                    <li key={t}>· {t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead title={p.corporateTitle} />
            <p className="mt-6 text-[15px] leading-6 text-body">
              <Fill text={p.corporateBody} />
            </p>
            <div className="mt-6">
              <Button href={p.corporateCta.href} variant="outline-dark">
                {p.corporateCta.label}
              </Button>
            </div>
          </div>
          <div>
            <SectionHead title={p.archiveTitle} />
            <ul className="mt-6 divide-y divide-black/5">
              {p.archive.map((a, i) => (
                <li key={i} className="flex items-center justify-between gap-4 py-3 text-[14.5px]">
                  <span>
                    <span className="num me-3 text-muted">
                      <Fill text={a.date} />
                    </span>
                    <Fill text={a.title} />
                  </span>
                  <a href={a.href} className="text-primary hover:underline">
                    {c.ui.readMore}
                  </a>
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
