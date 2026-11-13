import type { ReactNode, RefObject } from "react";
import type { HoldHandlers } from "@/components/trainer/useHold";
import { dirLabel, getStrings, type GameLang, type TrainerStrings } from "@/lib/trainer/strings";
import type { Dir, HudView, Sign } from "@/lib/trainer/types";

const SIGN_CLASS: Readonly<Record<Sign, string>> = { "1": "text-up", "-1": "text-down", "0": "text-white" };

const KEY_STYLES: Readonly<Record<Dir, { rest: string; held: string }>> = {
  1: { rest: "border-up text-up hover:bg-up/10", held: "border-up bg-up text-white translate-y-0.5" },
  [-1]: { rest: "border-down text-down hover:bg-down/10", held: "border-down bg-down text-white translate-y-0.5" },
};

/** One score cell. On phones the four cells share a single row, so the short label is shown. */
function Stat({ label, short, value, sign = "0" }: { label: string; short: string; value: string; sign?: Sign }) {
  return (
    <div className="rounded-2xl bg-navy-2 px-3 py-2.5 md:rounded-card-sm md:px-5 md:py-4">
      <dt className="truncate text-[10.5px] font-semibold uppercase tracking-[0.08em] text-soft/70 md:text-[12px]">
        <span className="md:hidden">{short}</span>
        <span className="hidden md:inline">{label}</span>
      </dt>
      <dd className={`num mt-0.5 text-[18px] font-bold leading-tight md:mt-1 md:text-[26px] ${SIGN_CLASS[sign]}`}>{value}</dd>
    </div>
  );
}

function HoldKey({ dir, view, handlers, disabled, t }: { dir: Dir; view: HudView; handlers: HoldHandlers; disabled: boolean; t: TrainerStrings }) {
  const style = KEY_STYLES[dir];
  const label = dirLabel(t, dir);
  const hint = dir > 0 ? t.board.hints.long : t.board.hints.short;
  const isHeld = view.held === dir;
  const isCued = view.cue === dir && view.held === 0;
  return (
    <button
      type="button"
      disabled={disabled}
      data-hold={dir}
      aria-label={t.board.holdLabel(label)}
      className={`touch-none select-none rounded-card-sm border-[1.5px] px-4 py-5 text-center transition-[background-color,color,transform,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan disabled:cursor-not-allowed disabled:opacity-40 ${isHeld ? style.held : style.rest} ${isCued ? "shadow-[0_0_0_3px_rgba(0,211,243,0.55)]" : ""}`}
      {...handlers}
    >
      <span className="block text-[22px] font-extrabold tracking-[0.02em]">{label}</span>
      <span className={`mt-1 block text-[12.5px] ${isHeld ? "text-white/85" : "text-soft/70"}`}>{isCued ? t.board.cued : hint}</span>
    </button>
  );
}

/** The playing surface: score strip, chart canvas, status line and the two hold keys. */
export default function TrainerBoard({
  view,
  canvasRef,
  bind,
  isPlaying,
  label,
  lang,
  onQuit,
  children,
}: {
  view: HudView;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  bind: (dir: Dir) => HoldHandlers;
  isPlaying: boolean;
  label: string;
  lang: GameLang;
  onQuit: () => void;
  /** Overlay drawn on top of the chart (start menu, loading, error). */
  children?: ReactNode;
}) {
  const t = getStrings(lang);
  const { stats } = t.board;
  return (
    <div className="rounded-card bg-navy p-4 ring-1 ring-white/10 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="kicker text-cyan">{label}</p>
        {isPlaying && (
          <button type="button" onClick={onQuit} className="rounded-pill px-3 py-1.5 text-[13px] font-semibold text-soft/80 hover:bg-white/10 hover:text-white">
            {t.board.quit}
          </button>
        )}
      </div>

      <dl className="grid grid-cols-4 gap-2 md:gap-3">
        <Stat label={stats.total.label} short={stats.total.short} value={view.totalText} sign={view.totalSign} />
        <Stat label={stats.open.label} short={stats.open.short} value={view.openText} sign={view.openSign} />
        <Stat label={stats.rule.label} short={stats.rule.short} value={view.ruleText} />
        <Stat label={stats.time.label} short={stats.time.short} value={view.timeText} />
      </dl>

      <div className="relative mt-3 h-[44vh] max-h-[520px] min-h-[260px] overflow-hidden rounded-card-sm bg-hero ring-1 ring-white/10 md:mt-4">
        <canvas ref={canvasRef} className="absolute inset-0 size-full" role="img" aria-label={t.board.canvasLabel} />
        {children}
      </div>

      <p role="status" aria-live="polite" className="mt-4 flex min-h-[3rem] items-start gap-3 text-[15px] leading-6 text-soft">
        <span className="mt-2 size-2 flex-none rounded-full bg-cyan" aria-hidden="true" />
        {view.status}
      </p>

      <div className="mt-2 grid grid-cols-2 gap-3">
        <HoldKey dir={1} view={view} handlers={bind(1)} disabled={!isPlaying} t={t} />
        <HoldKey dir={-1} view={view} handlers={bind(-1)} disabled={!isPlaying} t={t} />
      </div>
    </div>
  );
}
