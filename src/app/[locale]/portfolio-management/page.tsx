import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.managed.metaTitle, description: c.managed.metaDescription };
}

export default async function ManagedPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.managed;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} cta={p.cta} />

      <section className="section-pad">
        <div className="container-x">
          <SectionHead title={p.howTitle} />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {p.how.map((h) => (
              <li key={h.step} className="rv rounded-xl border border-black/5 p-6">
                <p className="num text-[12px] text-primary">{h.step}</p>
                <h3 className="mt-3 text-[18px]">{h.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead title={p.termsTitle} />
            <dl className="mt-8 divide-y divide-black/10 rounded-xl bg-white ring-1 ring-black/5">
              {p.terms.map((t) => (
                <div key={t.label} className="flex justify-between gap-4 px-5 py-3.5 text-[14px]">
                  <dt className="text-muted">{t.label}</dt>
                  <dd className="text-end text-ink">
                    <Fill text={t.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-10 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h3 className="text-[18px]">{p.fitTitle}</h3>
              <ul className="mt-4 space-y-2 text-[14.5px] text-body">
                {p.fit.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Icon name="check" size={16} className="mt-1 flex-none text-primary" />
                    <Fill text={f} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[18px]">{p.notFitTitle}</h3>
              <ul className="mt-4 space-y-2 text-[14.5px] text-body">
                {p.notFit.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Icon name="close" size={16} className="mt-1 flex-none text-down" />
                    <Fill text={f} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-x">
          <p className="rounded-md border border-dashed border-black/15 p-4 text-[13px] leading-6 text-body">
            <Fill text={p.compliance} />
          </p>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
