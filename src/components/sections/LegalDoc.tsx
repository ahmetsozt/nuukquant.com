import PageIntro from "@/components/sections/PageIntro";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

export type LegalKey = keyof SiteContent["legal"];

/** Shown on documents flagged `draft` in dev builds only; production never renders it. */
const DRAFT_LABEL: Record<string, string> = { tr: "Taslak: hukuki inceleme bekliyor (yalnızca geliştirmede görünür)", en: "Draft: awaiting legal review (visible in development only)" };

/** One legal document: intro, breadcrumb and body paragraphs. */
export default function LegalDoc({ c, locale, slug }: { c: SiteContent; locale: string; slug: LegalKey }) {
  const doc = c.legal[slug];
  const localeHome = locale === "en" ? "/" : `/${locale}/`;
  const isDraft = "draft" in doc && doc.draft === true && process.env.NODE_ENV !== "production";
  return (
    <>
      <PageIntro tone="light" kicker={c.ui.legal} title={doc.title} crumbs={[{ label: c.ui.home, href: localeHome }, { label: doc.title }]} />
      <section className="section-pad bg-white">
        <div className="container-x max-w-[820px]">
          {isDraft && (
            <p role="note" className="mb-5 inline-flex rounded-pill bg-[#fff4d6] px-3 py-1 text-[12px] font-semibold text-[#8a5b00]">
              {DRAFT_LABEL[locale] ?? DRAFT_LABEL.en}
            </p>
          )}
          <div className="space-y-5 rounded-card bg-fog p-8 lg:p-10">
            {doc.body.map((p, i) => (
              <p key={i} className="text-[15.5px] leading-7 text-body">
                <Fill text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
