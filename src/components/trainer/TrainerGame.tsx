"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";
import TrainerBoard from "@/components/trainer/TrainerBoard";
import TrainerResults from "@/components/trainer/TrainerResults";
import { useHold } from "@/components/trainer/useHold";
import { formatR } from "@/lib/trainer/engine";
import { runRound } from "@/lib/trainer/loop";
import { buildResult, createGame, dailyNumber, parseDaily, readDailyRaw, todayUtc, warmDailyGame, type Game, type RoundResult } from "@/lib/trainer/session";
import { IDLE_VIEW } from "@/lib/trainer/view";
import type { HudView } from "@/lib/trainer/types";

type Phase = "idle" | "loading" | "playing" | "done" | "error";

const noSubscription = () => () => {};
const readToday = () => todayUtc();
const readSaved = () => readDailyRaw(todayUtc());

function Overlay({ children }: { children: React.ReactNode }) {
  return <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-hero/85 p-6 text-center backdrop-blur-sm">{children}</div>;
}

/**
 * NUUK Antrenman: a 60-second rule drill on recorded candles. Hold LONG or SHORT
 * to ride, let go to close; the stop and the 2R target close the ride on their own.
 */
export default function TrainerGame() {
  // The date and the saved result exist only in the browser; the static HTML renders without them.
  const today = useSyncExternalStore(noSubscription, readToday, () => "");
  const saved = parseDaily(useSyncExternalStore(noSubscription, readSaved, () => null));

  const [phase, setPhase] = useState<Phase>("idle");
  const [view, setView] = useState<HudView>(IDLE_VIEW);
  const [game, setGame] = useState<Game | null>(null);
  const [result, setResult] = useState<RoundResult | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const hasPlayed = useRef(false);
  const { getHold, bind } = useHold(phase === "playing");

  const begin = useCallback((next: Game) => {
    hasPlayed.current = true;
    setResult(null);
    setView(IDLE_VIEW);
    setGame(next);
    setPhase("playing");
    // Bring the whole board (score, chart, keys) into view so a phone shows all of it.
    const isCalm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => boardRef.current?.scrollIntoView({ block: "start", behavior: isCalm ? "auto" : "smooth" }));
  }, []);

  const startNew = useCallback(
    async (daily: boolean) => {
      setPhase("loading");
      try {
        begin(await createGame(daily));
      } catch (error) {
        console.error("Trainer data failed to load", error);
        setPhase("error");
      }
    },
    [begin],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (phase !== "playing" || !game || !canvas) return;
    return runRound({
      game,
      canvas,
      getHold,
      onView: setView,
      onDone: (state) => {
        setResult(buildResult(game, state));
        setPhase("done");
      },
    });
  }, [phase, game, getHold]);

  useEffect(warmDailyGame, []);

  // Keyboard focus follows the round: the LONG key while playing, the result heading afterwards,
  // and the first start button after quitting (never on first load, which would steal focus).
  useEffect(() => {
    const focusIn = (selector: string) => boardRef.current?.querySelector<HTMLElement>(selector)?.focus({ preventScroll: true });
    if (phase === "done") document.getElementById("trainer-result")?.focus();
    if (phase === "playing") focusIn("[data-hold='1']");
    if (phase === "idle" && hasPlayed.current) focusIn("button:not([disabled])");
  }, [phase, game]);

  const quit = useCallback(() => {
    setPhase("idle");
    setView(IDLE_VIEW);
  }, []);

  const dailyLabel = today ? `Günün grafiği #${dailyNumber(today)}` : "Günün grafiği";
  const isDone = phase === "done" && result !== null;

  return (
    <div>
      <div ref={boardRef} className={`scroll-mt-[calc(var(--header-h)+0.75rem)] ${isDone ? "hidden" : ""}`}>
        <TrainerBoard view={view} canvasRef={canvasRef} bind={bind} isPlaying={phase === "playing"} label={game && phase === "playing" ? game.label : "60 saniyelik tur"} onQuit={quit}>
          {phase === "idle" && (
            <Overlay>
              <p className="max-w-[420px] text-[16px] leading-6 text-soft">Herkes aynı grafiği oynar ya da rastgele bir grafikte serbest çalışırsın. Piyasa ve tarih tur bitince açıklanır.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button onClick={() => startNew(true)} event="trainer_action" eventLabel="start_daily">
                  {dailyLabel}
                </Button>
                <Button onClick={() => startNew(false)} variant="outline" event="trainer_action" eventLabel="start_free">
                  Serbest antrenman
                </Button>
              </div>
              {saved && (
                <p className="text-[13px] text-soft/80">
                  Bugünkü sonucun: {formatR(saved.totalR)} · disiplin {saved.discipline ?? "—"}. Tekrar oynayabilirsin, ilk sonuç kayıtlı kalır.
                </p>
              )}
            </Overlay>
          )}
          {phase === "loading" && (
            <Overlay>
              <p role="status" className="text-[16px] text-soft">
                Grafik yükleniyor…
              </p>
            </Overlay>
          )}
          {phase === "error" && (
            <Overlay>
              <p role="alert" className="max-w-[420px] text-[16px] leading-6 text-soft">
                Grafik verisi yüklenemedi. Bağlantını kontrol edip tekrar dene.
              </p>
              <Button onClick={() => startNew(false)}>Tekrar dene</Button>
            </Overlay>
          )}
        </TrainerBoard>
      </div>
      {isDone && game && <TrainerResults result={result} onReplay={() => begin(game)} onNew={() => startNew(false)} />}
    </div>
  );
}
