import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import PerformanceCards from "@/components/home/PerformanceCards";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.trackRecord.metaTitle, description: c.trackRecord.metaDescription };
}

export default async function TrackRecordPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.trackRecord;
  return (
    <>
      <PageIntro kicker={p.kicker} title={p.title} body={p.lead} />
      <section className="section-pad">
        <div className="container-x">
          <PerformanceCards c={c} />
          <p className="mt-6 max-w-[760px] text-[12.5px] leading-5 text-muted">{p.disclaimer}</p>
        </div>
      </section>
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-x">
          <SectionHead title={p.methodologyTitle} />
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {p.methodology.map((m) => (
              <li key={m.title} className="rv">
                <h3 className="text-[18px]">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{m.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 rounded-md border border-dashed border-black/15 bg-white p-4 text-[13.5px] text-body">{p.pending}</p>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
