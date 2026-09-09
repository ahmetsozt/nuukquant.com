import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import Icon from "@/components/ui/Icon";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.caseStudies.metaTitle, description: c.caseStudies.metaDescription };
}

export default async function CaseStudiesPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.caseStudies;
  const L = p.labels;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="light" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <section className="section-pad bg-white" aria-label={p.kicker}>
        <div className="container-x space-y-8">
          {p.items.map((it, i) => (
            <article key={it.name} className="rv overflow-hidden rounded-card border border-black/10">
              <header className="flex flex-wrap items-center justify-between gap-4 bg-ink px-7 py-6 text-white lg:px-10">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary text-[14px] font-bold">0{i + 1}</span>
                  <h2 className="text-[22px] font-bold leading-tight text-white lg:text-[26px]">{it.name}</h2>
                </div>
                <span className="rounded-pill border border-cyan/60 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-wide text-cyan">{p.badge}</span>
              </header>
              <div className="grid gap-10 px-7 py-8 lg:grid-cols-12 lg:px-10 lg:py-10">
                <div className="space-y-6 lg:col-span-7">
                  {(
                    [
                      [L.profile, it.profile],
                      [L.objective, it.objective],
                      [L.structure, it.structure],
                      [L.fees, it.fees],
                    ] as const
                  ).map(([label, body]) => (
                    <div key={label}>
                      <p className="kicker text-primary">{label}</p>
                      <p className="mt-1.5 text-[15.5px] leading-7 text-body">{body}</p>
                    </div>
                  ))}
                  <div>
                    <p className="kicker text-primary">{L.mandate}</p>
                    <ul className="mt-2 space-y-2">
                      {it.mandate.map((m) => (
                        <li key={m} className="flex gap-3 text-[15px] leading-6 text-body">
                          <Icon name="check" size={16} className="mt-1 flex-none text-primary" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <aside className="lg:col-span-5">
                  {it.rows.length > 0 && (
                    <div className="overflow-hidden rounded-card-sm border border-black/10">
                      <p className="bg-fog px-6 py-3.5 text-[13px] font-semibold text-ink">{L.year}</p>
                      <table className="w-full text-[14px]">
                        <tbody>
                          {it.rows.map(([label, value], j) => (
                            <tr key={label} className={`border-t border-black/5 ${j === it.rows.length - 1 ? "bg-tint font-bold text-ink" : "text-body"}`}>
                              <td className="px-6 py-3">{label}</td>
                              <td className="px-6 py-3 text-end tabular-nums font-semibold text-ink">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className={`rounded-card-sm bg-fog p-6 ${it.rows.length > 0 ? "mt-4" : ""}`}>
                    <p className="kicker">{L.note}</p>
                    <p className="mt-2 text-[14.5px] leading-6 text-body">{it.note}</p>
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
