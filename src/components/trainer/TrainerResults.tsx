"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { formatR, summarizeOutcomes } from "@/lib/trainer/engine";
import type { RoundResult } from "@/lib/trainer/session";
import { dirLabel, getStrings, patternName, type GameLang, type TrainerStrings } from "@/lib/trainer/strings";
import { signOf } from "@/lib/trainer/view";
import type { Outcome, PatternKind, Ride, Sign, Summary } from "@/lib/trainer/types";

const SIGN_CLASS: Readonly<Record<Sign, string>> = { "1": "text-up", "-1": "text-down", "0": "text-white" };

const DATE_OPTIONS: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "UTC" };

/** The chart's time span in the player's language; candle times are in seconds. */
function formatRange(t: TrainerStrings, fromT: number, toT: number): string {
  const format = new Intl.DateTimeFormat(t.dateLocale, DATE_OPTIONS);
  return `${format.format(fromT * 1000)} – ${format.format(toT * 1000)} UTC`;
}

const cardClass = "rounded-card bg-navy p-7 ring-1 ring-white/10";
const cardTitleClass = "text-[13px] font-semibold uppercase tracking-[0.08em] text-soft/70";

function DisciplineCard({ summary, t }: { summary: Summary; t: TrainerStrings }) {
  const score = summary.discipline;
  const caption = score === null ? t.results.disciplineNone : t.results.disciplineCaption(summary.count, summary.ruleBased);
  return (
    <article className={`${cardClass} lg:col-span-4`}>
      <h3 className={cardTitleClass}>{t.results.disciplineTitle}</h3>
      <p className="num mt-4 text-[48px] font-bold leading-none text-white">{score === null ? "—" : score}</p>
      <div className="mt-5 h-1.5 overflow-hidden rounded-pill bg-white/10" aria-hidden="true">
        <div className="h-full origin-left rounded-pill bg-cyan" style={{ transform: `scaleX(${(score ?? 0) / 100})` }} />
      </div>
      <p className="mt-4 text-[14.5px] leading-6 text-soft">{caption}</p>
    </article>
  );
}

function MechanicalCard({ outcomes, t }: { outcomes: Outcome[]; t: TrainerStrings }) {
  const total = outcomes.reduce((sum, outcome) => sum + (outcome.r ?? 0), 0);
  return (
    <article className={`${cardClass} lg:col-span-4`}>
      <h3 className={cardTitleClass}>{t.results.mechanicalTitle}</h3>
      <p className={`num mt-4 text-[48px] font-bold leading-none ${SIGN_CLASS[signOf(total)]}`}>{formatR(total)}</p>
      <p className="mt-5 text-[14.5px] leading-6 text-soft">{t.results.mechanicalLine(summarizeOutcomes(outcomes))}</p>
      <p className="mt-2 text-[12.5px] leading-5 text-soft/70">{t.results.mechanicalNote}</p>
    </article>
  );
}

function RideRow({ ride, t }: { ride: Ride; t: TrainerStrings }) {
  const name = ride.ruleBased && ride.kind ? patternName(t, ride.kind, ride.dir) : t.results.offRule;
  return (
    <li className="grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-white/10 py-3 first:border-t-0">
      <span className={`text-[12px] font-bold tracking-[0.08em] ${ride.dir > 0 ? "text-up" : "text-down"}`}>{dirLabel(t, ride.dir)}</span>
      <span className={`text-[15px] font-semibold ${ride.ruleBased ? "text-white" : "text-beige"}`}>{name}</span>
      <span className={`num row-span-2 self-center text-[17px] font-bold ${SIGN_CLASS[signOf(ride.r)]}`}>{formatR(ride.r)}</span>
      <span className="col-start-2 text-[12.5px] text-soft/70">{t.results.rideDetail(t.reasons[ride.reason], ride.costR.toFixed(2))}</span>
    </li>
  );
}

function Lessons({ outcomes, t }: { outcomes: Outcome[]; t: TrainerStrings }) {
  const kinds = [...new Set(outcomes.map((outcome) => outcome.setup.kind))].filter((kind): kind is PatternKind => kind in t.patterns);
  if (kinds.length === 0) return null;
  return (
    <dl className="mt-6 space-y-4 border-t border-white/10 pt-6">
      {kinds.map((kind) => (
        <div key={kind}>
          <dt className="text-[15px] font-semibold text-cyan">{t.patterns[kind].names.join(" / ")}</dt>
          <dd className="mt-1 text-[14.5px] leading-6 text-soft">{t.patterns[kind].lesson}</dd>
        </div>
      ))}
    </dl>
  );
}

async function share(text: string, t: TrainerStrings): Promise<string> {
  try {
    if (navigator.share) {
      await navigator.share({ text });
      return t.results.shareOpened;
    }
    await navigator.clipboard.writeText(text);
    return t.results.shareCopied;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") return t.results.shareCancelled;
    console.error("Trainer share failed", error);
    return t.results.shareFailed;
  }
}

/** End-of-round report: net R, discipline, what the rule did mechanically, each ride and the chart reveal. */
export default function TrainerResults({ result, lang, onReplay, onNew }: { result: RoundResult; lang: GameLang; onReplay: () => void; onNew: () => void }) {
  const [shareStatus, setShareStatus] = useState("");
  const t = getStrings(lang);
  const { summary, chart } = result;

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-12">
        <article className="rounded-card bg-primary p-7 text-white lg:col-span-4">
          <h3 id="trainer-result" tabIndex={-1} className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80 focus-visible:outline-none">
            {t.results.heading(result.label)}
          </h3>
          <p className="num mt-4 text-[64px] font-bold leading-none text-white">{formatR(summary.totalR)}</p>
          <p className="mt-5 text-[14.5px] leading-6 text-white/85">{t.results.summary(summary.count, summary.wins)}</p>
        </article>
        <DisciplineCard summary={summary} t={t} />
        <MechanicalCard outcomes={result.outcomes} t={t} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <article className={`${cardClass} lg:col-span-7`}>
          <h3 className={cardTitleClass}>{t.results.ridesTitle}</h3>
          {result.rides.length > 0 ? (
            <ol className="mt-3">
              {result.rides.map((ride) => (
                <RideRow key={ride.entryK} ride={ride} t={t} />
              ))}
            </ol>
          ) : (
            <p className="mt-4 text-[14.5px] leading-6 text-soft">{t.results.ridesNone}</p>
          )}
        </article>
        <article className={`${cardClass} lg:col-span-5`}>
          <h3 className={cardTitleClass}>{t.results.chartTitle}</h3>
          <p className="mt-4 text-[30px] font-bold leading-none text-white">{chart.sym}</p>
          <p className="mt-3 text-[14.5px] leading-6 text-soft">{t.results.chartLine(t.timeframes[chart.tf])}</p>
          <p className="text-[12.5px] leading-5 text-soft/70">{formatRange(t, chart.fromT, chart.toT)}</p>
          <Lessons outcomes={result.outcomes} t={t} />
        </article>
      </div>

      {result.note && <p className="mt-5 text-[14px] text-soft">{result.note}</p>}

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={onReplay} event="trainer_action" eventLabel="replay">
          {t.results.replay}
        </Button>
        <Button onClick={onNew} variant="outline" event="trainer_action" eventLabel="new_chart">
          {t.results.newChart}
        </Button>
        <Button onClick={async () => setShareStatus(await share(result.shareText, t))} variant="outline" event="trainer_action" eventLabel="share">
          {t.results.share}
        </Button>
      </div>
      <p role="status" className="mt-3 min-h-[1.5rem] text-[13px] text-soft">
        {shareStatus}
      </p>
      <p className="mt-2 text-[12.5px] leading-5 text-soft/70">{`${t.session.disclaimer} ${t.results.pastResults}`}</p>
    </div>
  );
}
