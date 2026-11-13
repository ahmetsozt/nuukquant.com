import Button from "@/components/ui/Button";
import RuleLadder from "@/components/trainer/RuleLadder";
import { gamePaths } from "@/i18n";
import { getStrings, type GameLang } from "@/lib/trainer/strings";

/**
 * Home-page band that sends English and Turkish visitors to NUUK Game
 * (src/app/game/ and src/app/antrenman/). The game exists in these two
 * languages only, so the copy lives with the game's strings and not in the
 * per-locale content files.
 */
export default function GameTeaser({ lang }: { lang: GameLang }) {
  const { teaser } = getStrings(lang);
  return (
    <section className="section-pad bg-hero text-white" aria-labelledby="game-teaser-heading">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="kicker text-cyan">{teaser.kicker}</p>
          <h2 id="game-teaser-heading" className="h2-section mt-4 text-white">
            {teaser.heading}
          </h2>
          <p className="mt-5 max-w-[540px] text-[17px] leading-[1.55] text-soft">{teaser.body}</p>
          <ul className="mt-6 space-y-2 text-[15px] text-white/85">
            {teaser.points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="size-1.5 flex-none rounded-full bg-cyan" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={gamePaths[lang]} event="cta_click" eventLabel="game_teaser">
              {teaser.cta}
            </Button>
          </div>
          <p className="mt-6 max-w-[540px] text-[12.5px] leading-5 text-soft/70">{teaser.disclaimer}</p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="rv mx-auto aspect-[5/4] w-full max-w-[400px] lg:max-w-[520px]">
            <RuleLadder lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
