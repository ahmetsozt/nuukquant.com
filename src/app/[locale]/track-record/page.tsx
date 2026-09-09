import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import DailyPnl from "@/components/market/DailyPnl";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import PerformanceCards from "@/components/home/PerformanceCards";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.trackRecord.metaTitle, description: c.trackRecord.metaDescription };
}

export default async function TrackRecordPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.trackRecord;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="light" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <DailyPnl c={c} />
      <section className="section-pad bg-white">
        <div className="container-x">
          <PerformanceCards c={c} />
          <p className="mt-6 max-w-[760px] text-[12.5px] leading-5 text-muted">{p.disclaimer}</p>
        </div>
      </section>
      <section className="section-pad bg-fog">
        <div className="container-x">
          <SectionHead title={p.methodologyTitle} />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {p.methodology.map((m) => (
              <li key={m.title} className="rv rounded-card bg-white p-7 shadow-card ring-1 ring-black/5">
                <h3 className="text-[18px]">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{m.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-card bg-white p-6 text-[13.5px] leading-6 text-body ring-1 ring-black/5">{p.pending}</p>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
