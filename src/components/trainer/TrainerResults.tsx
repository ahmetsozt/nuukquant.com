"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { formatR, PATTERNS, summarizeOutcomes } from "@/lib/trainer/engine";
import { DISCLAIMER, type RoundResult } from "@/lib/trainer/session";
import { dirLabel, REASON_LABELS, signOf } from "@/lib/trainer/view";
import type { Outcome, PatternKind, Ride, Sign, Summary } from "@/lib/trainer/types";

const SIGN_CLASS: Readonly<Record<Sign, string>> = { "1": "text-up", "-1": "text-down", "0": "text-white" };

const DATE_FORMAT = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "UTC" });

const cardClass = "rounded-card bg-navy p-7 ring-1 ring-white/10";
const cardTitleClass = "text-[13px] font-semibold uppercase tracking-[0.08em] text-soft/70";

function DisciplineCard({ summary }: { summary: Summary }) {
  const score = summary.discipline;
  const caption = score === null ? "Hiç giriş yapmadın, puan hesaplanmadı." : `${summary.count} girişin ${summary.ruleBased} tanesi kilitlenen formasyonun yönündeydi.`;
  return (
    <article className={`${cardClass} lg:col-span-4`}>
      <h3 className={cardTitleClass}>Disiplin</h3>
      <p className="num mt-4 text-[48px] font-bold leading-none text-white">{score === null ? "—" : score}</p>
      <div className="mt-5 h-1.5 overflow-hidden rounded-pill bg-white/10" aria-hidden="true">
        <div className="h-full origin-left rounded-pill bg-cyan" style={{ transform: `scaleX(${(score ?? 0) / 100})` }} />
      </div>
      <p className="mt-4 text-[14.5px] leading-6 text-soft">{caption}</p>
    </article>
  );
}

function MechanicalCard({ outcomes }: { outcomes: Outcome[] }) {
  const counts = summarizeOutcomes(outcomes);
  const total = outcomes.reduce((sum, outcome) => sum + (outcome.r ?? 0), 0);
  const open = (counts.open > 0 ? `, ${counts.open} sonuçlanmadı` : "") + (counts.invalid > 0 ? `, ${counts.invalid} boşluk nedeniyle geçersiz` : "");
  return (
    <article className={`${cardClass} lg:col-span-4`}>
      <h3 className={cardTitleClass}>Kural mekanik uygulansaydı</h3>
      <p className={`num mt-4 text-[48px] font-bold leading-none ${SIGN_CLASS[signOf(total)]}`}>{formatR(total)}</p>
      <p className="mt-5 text-[14.5px] leading-6 text-soft">
        {counts.total} setup: {counts.target} hedef, {counts.stop} stop{open}.
      </p>
      <p className="mt-2 text-[12.5px] leading-5 text-soft/70">Her setup sonraki mumun açılışından oynatıldı, maliyet dahil. Tek grafik istatistik değildir.</p>
    </article>
  );
}

function RideRow({ ride }: { ride: Ride }) {
  return (
    <li className="grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-white/10 py-3 first:border-t-0">
      <span className={`text-[12px] font-bold tracking-[0.08em] ${ride.dir > 0 ? "text-up" : "text-down"}`}>{dirLabel(ride.dir)}</span>
      <span className={`text-[15px] font-semibold ${ride.ruleBased ? "text-white" : "text-beige"}`}>{ride.ruleBased ? ride.setupName : "Kural dışı giriş"}</span>
      <span className={`num row-span-2 self-center text-[17px] font-bold ${SIGN_CLASS[signOf(ride.r)]}`}>{formatR(ride.r)}</span>
      <span className="col-start-2 text-[12.5px] text-soft/70">
        {REASON_LABELS[ride.reason]} · maliyet {ride.costR.toFixed(2)}R
      </span>
    </li>
  );
}

function Lessons({ outcomes }: { outcomes: Outcome[] }) {
  const kinds = [...new Set(outcomes.map((outcome) => outcome.setup.kind))].filter((kind): kind is PatternKind => kind in PATTERNS);
  if (kinds.length === 0) return null;
  return (
    <dl className="mt-6 space-y-4 border-t border-white/10 pt-6">
      {kinds.map((kind) => (
        <div key={kind}>
          <dt className="text-[15px] font-semibold text-cyan">{PATTERNS[kind].names.join(" / ")}</dt>
          <dd className="mt-1 text-[14.5px] leading-6 text-soft">{PATTERNS[kind].lesson}</dd>
        </div>
      ))}
    </dl>
  );
}

async function share(text: string): Promise<string> {
  try {
    if (navigator.share) {
      await navigator.share({ text });
      return "Paylaşım açıldı.";
    }
    await navigator.clipboard.writeText(text);
    return "Sonuç panoya kopyalandı.";
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") return "Paylaşım iptal edildi.";
    console.error("Trainer share failed", error);
    return "Paylaşılamadı. Tarayıcın panoya erişime izin vermiyor olabilir.";
  }
}

/** End-of-round report: net R, discipline, what the rule did mechanically, each ride and the chart reveal. */
export default function TrainerResults({ result, onReplay, onNew }: { result: RoundResult; onReplay: () => void; onNew: () => void }) {
  const [shareStatus, setShareStatus] = useState("");
  const { summary, chart } = result;
  const range = `${DATE_FORMAT.format(chart.fromT * 1000)} – ${DATE_FORMAT.format(chart.toT * 1000)} UTC`;

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-12">
        <article className="rounded-card bg-primary p-7 text-white lg:col-span-4">
          <h3 id="trainer-result" tabIndex={-1} className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80 focus-visible:outline-none">
            {result.label} · sonuç
          </h3>
          <p className="num mt-4 text-[64px] font-bold leading-none text-white">{formatR(summary.totalR)}</p>
          <p className="mt-5 text-[14.5px] leading-6 text-white/85">
            {summary.count} işlem · {summary.wins} kazanç · maliyet dahil net sonuç
          </p>
        </article>
        <DisciplineCard summary={summary} />
        <MechanicalCard outcomes={result.outcomes} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <article className={`${cardClass} lg:col-span-7`}>
          <h3 className={cardTitleClass}>İşlemlerin</h3>
          {result.rides.length > 0 ? (
            <ol className="mt-3">
              {result.rides.map((ride) => (
                <RideRow key={ride.entryK} ride={ride} />
              ))}
            </ol>
          ) : (
            <p className="mt-4 text-[14.5px] leading-6 text-soft">Hiç işlem açmadın. Beklemek de bir karardır; formasyon kilitlendiğinde denemek için tekrar oyna.</p>
          )}
        </article>
        <article className={`${cardClass} lg:col-span-5`}>
          <h3 className={cardTitleClass}>Grafik</h3>
          <p className="mt-4 text-[30px] font-bold leading-none text-white">{chart.sym}</p>
          <p className="mt-3 text-[14.5px] leading-6 text-soft">{chart.tfLabel} mumlar · kaynak: Hyperliquid</p>
          <p className="text-[12.5px] leading-5 text-soft/70">{range}</p>
          <Lessons outcomes={result.outcomes} />
        </article>
      </div>

      {result.note && <p className="mt-5 text-[14px] text-soft">{result.note}</p>}

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={onReplay} event="trainer_action" eventLabel="replay">
          Aynı grafiği tekrar oyna
        </Button>
        <Button onClick={onNew} variant="outline" event="trainer_action" eventLabel="new_chart">
          Yeni grafik
        </Button>
        <Button onClick={async () => setShareStatus(await share(result.shareText))} variant="outline" event="trainer_action" eventLabel="share">
          Sonucu paylaş
        </Button>
      </div>
      <p role="status" className="mt-3 min-h-[1.5rem] text-[13px] text-soft">
        {shareStatus}
      </p>
      <p className="mt-2 text-[12.5px] leading-5 text-soft/70">{DISCLAIMER} Geçmiş sonuçlar geleceği göstermez.</p>
    </div>
  );
}
