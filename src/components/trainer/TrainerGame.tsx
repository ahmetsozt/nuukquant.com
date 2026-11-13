"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";
import TrainerBoard from "@/components/trainer/TrainerBoard";
import TrainerResults from "@/components/trainer/TrainerResults";
import { useHold } from "@/components/trainer/useHold";
import { formatR } from "@/lib/trainer/engine";
import { runRound } from "@/lib/trainer/loop";
import { buildResult, createGame, dailyLabel, parseDaily, readDailyRaw, todayUtc, warmDailyGame, type Game, type RoundResult } from "@/lib/trainer/session";
import { getStrings, type GameLang } from "@/lib/trainer/strings";
import { idleView } from "@/lib/trainer/view";
import type { HudView } from "@/lib/trainer/types";

type Phase = "idle" | "loading" | "playing" | "done" | "error";

const noSubscription = () => () => {};
const readToday = () => todayUtc();
const readSaved = () => readDailyRaw(todayUtc());

function Overlay({ children }: { children: React.ReactNode }) {
  return <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-hero/85 p-6 text-center backdrop-blur-sm">{children}</div>;
}

/**
 * NUUK Game: a 60-second rule drill on recorded candles. Hold LONG or SHORT
 * to ride, let go to close; the stop and the 2R target close the ride on their own.
 */
export default function TrainerGame({ lang }: { lang: GameLang }) {
  const t = getStrings(lang);
  // The date and the saved result exist only in the browser; the static HTML renders without them.
  const today = useSyncExternalStore(noSubscription, readToday, () => "");
  const saved = parseDaily(useSyncExternalStore(noSubscription, readSaved, () => null));

  const [phase, setPhase] = useState<Phase>("idle");
  const [view, setView] = useState<HudView>(idleView(lang));
  const [game, setGame] = useState<Game | null>(null);
  const [result, setResult] = useState<RoundResult | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const hasPlayed = useRef(false);
  const { getHold, bind } = useHold(phase === "playing");

  const begin = useCallback(
    (next: Game) => {
      hasPlayed.current = true;
      setResult(null);
      setView(idleView(lang));
      setGame(next);
      setPhase("playing");
      // Bring the whole board (score, chart, keys) into view so a phone shows all of it.
      const isCalm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => boardRef.current?.scrollIntoView({ block: "start", behavior: isCalm ? "auto" : "smooth" }));
    },
    [lang],
  );

  const startNew = useCallback(
    async (daily: boolean) => {
      setPhase("loading");
      try {
        begin(await createGame(daily, lang));
      } catch (error) {
        console.error("Trainer data failed to load", error);
        setPhase("error");
      }
    },
    [begin, lang],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (phase !== "playing" || !game || !canvas) return;
    return runRound({
      game,
      lang,
      canvas,
      getHold,
      onView: setView,
      onDone: (state) => {
        setResult(buildResult(game, state, lang));
        setPhase("done");
      },
    });
  }, [phase, game, getHold, lang]);

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
    setView(idleView(lang));
  }, [lang]);

  const isDone = phase === "done" && result !== null;

  return (
    <div>
      <div ref={boardRef} className={`scroll-mt-[calc(var(--header-h)+0.75rem)] ${isDone ? "hidden" : ""}`}>
        <TrainerBoard view={view} canvasRef={canvasRef} bind={bind} isPlaying={phase === "playing"} label={game && phase === "playing" ? game.label : t.board.idleLabel} lang={lang} onQuit={quit}>
          {phase === "idle" && (
            <Overlay>
              <p className="max-w-[420px] text-[16px] leading-6 text-soft">{t.game.intro}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button onClick={() => startNew(true)} event="trainer_action" eventLabel="start_daily">
                  {dailyLabel(lang, today)}
                </Button>
                <Button onClick={() => startNew(false)} variant="outline" event="trainer_action" eventLabel="start_free">
                  {t.session.freeLabel}
                </Button>
              </div>
              {saved && <p className="text-[13px] text-soft/80">{t.game.saved(formatR(saved.totalR), String(saved.discipline ?? "—"))}</p>}
            </Overlay>
          )}
          {phase === "loading" && (
            <Overlay>
              <p role="status" className="text-[16px] text-soft">
                {t.game.loading}
              </p>
            </Overlay>
          )}
          {phase === "error" && (
            <Overlay>
              <p role="alert" className="max-w-[420px] text-[16px] leading-6 text-soft">
                {t.game.error}
              </p>
              <Button onClick={() => startNew(false)}>{t.game.retry}</Button>
            </Overlay>
          )}
        </TrainerBoard>
      </div>
      {isDone && game && <TrainerResults result={result} lang={lang} onReplay={() => begin(game)} onNew={() => startNew(false)} />}
    </div>
  );
}
