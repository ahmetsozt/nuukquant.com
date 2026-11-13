import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import PageIntro from "@/components/sections/PageIntro";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import RuleLadder from "@/components/trainer/RuleLadder";
import TrainerGame from "@/components/trainer/TrainerGame";
import { gamePaths, getContent, localePath } from "@/i18n";
import { SITE } from "@/lib/seo";
import { getStrings, type GameLang } from "@/lib/trainer/strings";

const OG_LOCALE: Readonly<Record<GameLang, string>> = { en: "en_US", tr: "tr_TR" };

const gameUrl = (lang: GameLang): string => `${SITE}${gamePaths[lang]}`;

/** Metadata of one language's page: its own canonical URL, with both languages as hreflang alternates. */
export function trainerMetadata(lang: GameLang): Metadata {
  const { title, description } = getStrings(lang).page.meta;
  const url = gameUrl(lang);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: { en: gameUrl("en"), tr: gameUrl("tr"), "x-default": gameUrl("en") } },
    openGraph: { type: "website", siteName: "NUUK", url, locale: OG_LOCALE[lang], title, description },
  };
}

/**
 * NUUK Game: English at nuukquant.com/game/, Turkish at nuukquant.com/antrenman/.
 * Same game, only the language differs. The game is a client component; candles are
 * static files in public/trainer/, rebuilt by scripts/trainer/fetch-candles.mjs.
 */
export default function TrainerPageView({ lang }: { lang: GameLang }) {
  const c = getContent(lang);
  const { page } = getStrings(lang);
  return (
    <Shell locale={lang}>
      <PageIntro
        tone="dark"
        kicker={page.kicker}
        title={page.title}
        body={page.body}
        cta={{ label: page.cta, href: `#${page.anchors.game}` }}
        secondary={{ label: page.secondary, href: `#${page.anchors.how}` }}
        visual={<RuleLadder lang={lang} />}
        crumbs={[{ label: c.ui.home, href: localePath(lang, "/") }, { label: page.crumb }]}
      />

      <section id={page.anchors.game} className="section-pad scroll-mt-[var(--header-h)] bg-hero text-white" aria-labelledby="trainer-heading">
        <div className="container-x">
          <SectionHead title={page.play.title} lead={page.play.lead} dark split />
          <h2 id="trainer-heading" className="sr-only">
            {page.play.heading}
          </h2>
          <div className="mt-10">
            <TrainerGame lang={lang} />
          </div>
        </div>
      </section>

      <section id={page.anchors.how} className="section-pad scroll-mt-[var(--header-h)] bg-white" aria-labelledby="how-heading">
        <div className="container-x">
          <SectionHead title={page.how.title} />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.how.steps.map((step, i) => (
              <li key={step.title} className="rv rounded-card bg-fog p-7">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-[19px]">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-fog" aria-labelledby="measures-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHead title={page.measures.title} lead={page.measures.lead} />
            <p className="mt-6 text-[16px] leading-7 text-body">{page.measures.note}</p>
            <div className="mt-8">
              <Button href={localePath(lang, "/education/")} variant="outline-dark">
                {page.measures.educationCta}
              </Button>
            </div>
          </div>
          <div className="rounded-card bg-white p-8 shadow-card lg:col-span-6">
            <p className="kicker mb-5">{page.measures.kicker}</p>
            <ul className="space-y-4">
              {page.measures.items.map((measure) => (
                <li key={measure} className="flex gap-3 text-[16px] leading-6 text-ink">
                  <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-primary text-white">
                    <Icon name="check" size={13} />
                  </span>
                  {measure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 lg:py-12" aria-label={page.risk.label}>
        <div className="container-x flex gap-3 text-white/85">
          <Icon name="warning" size={18} className="mt-0.5 flex-none" />
          <p className="text-[13px] leading-5">
            <strong className="text-white">{page.risk.lead}</strong>
            {` ${page.risk.body}`}
          </p>
        </div>
      </section>
    </Shell>
  );
}
