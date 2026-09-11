import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import ApplyLoader from "@/app/[locale]/apply/ApplyLoader";
import { resolve, type LocaleParams } from "@/lib/page";
import { seo } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, c } = await resolve(params);
  return { ...seo(locale, "apply/"), title: c.apply.metaTitle, description: c.apply.lead };
}

export default async function ApplyPage({ params }: { params: LocaleParams }) {
  const { locale, c } = await resolve(params);
  const p = c.apply;
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} crumbs={[{ label: c.ui.home, href: localeHome }, { label: p.kicker }]} />
      <section className="section-pad bg-fog" aria-label={p.kicker}>
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ApplyLoader c={c} locale={locale} />
          </div>
          <aside className="lg:col-span-4">
            <ol className="space-y-3">
              {p.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 rounded-card-sm bg-white px-5 py-4 text-[15px] font-semibold text-ink shadow-card">
                  <span className="flex size-8 flex-none items-center justify-center rounded-full bg-primary text-[13px] text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
