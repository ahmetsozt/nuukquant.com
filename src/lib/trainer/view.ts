import { formatR, priceAt, rAt, summarize, type RoundContext } from "./engine";
import { dirLabel, getStrings, patternName, type GameLang, type TrainerStrings } from "./strings";
import type { HudView, RoundState, Setup, Sign } from "./types";

/** Sign of a value once rounded to one decimal, so "0.0R" never shows as a win or a loss. */
export function signOf(value: number): Sign {
  const rounded = Math.round(value * 10);
  return rounded > 0 ? "1" : rounded < 0 ? "-1" : "0";
}

function formatClock(seconds: number): string {
  const whole = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

function statusText(t: TrainerStrings, state: RoundState, setup: Setup | null): string {
  const { pos } = state;
  if (pos?.setup) return t.status.riding(patternName(t, pos.setup.kind, pos.setup.dir), dirLabel(t, pos.dir));
  if (pos) return t.status.offRule(dirLabel(t, pos.dir));
  const last = state.rides.at(-1);
  if (state.needRelease && last) return t.status.afterExit(t.reasons[last.reason], formatR(last.r));
  if (setup) return t.status.locked(patternName(t, setup.kind, setup.dir), dirLabel(t, setup.dir));
  return t.status.waiting;
}

const buildIdleView = (lang: GameLang): HudView => ({
  totalText: "0.0R",
  totalSign: "0",
  openText: "—",
  openSign: "0",
  ruleText: "—",
  timeText: "1:00",
  status: getStrings(lang).status.idle,
  held: 0,
  cue: 0,
});

const IDLE_VIEWS: Readonly<Record<GameLang, HudView>> = { en: buildIdleView("en"), tr: buildIdleView("tr") };

/** The board before a round starts. One object per language, so it is safe as React state. */
export function idleView(lang: GameLang): HudView {
  return IDLE_VIEWS[lang];
}

/** Turns engine state into the text the board shows. `setup` is the setup open for entry, if any. */
export function describe(ctx: RoundContext, state: RoundState, setup: Setup | null, lang: GameLang): HudView {
  const sum = summarize(state.rides);
  const openR = state.pos ? rAt(state.pos, priceAt(ctx.candles, state.k)) : null;
  return {
    totalText: formatR(sum.totalR),
    totalSign: signOf(sum.totalR),
    openText: formatR(openR),
    openSign: openR === null ? "0" : signOf(openR),
    ruleText: sum.count > 0 ? `${sum.ruleBased}/${sum.count}` : "—",
    timeText: formatClock((state.endK - state.k) / ctx.cfg.BARS_PER_SECOND),
    status: statusText(getStrings(lang), state, setup),
    held: state.pos ? state.pos.dir : 0,
    cue: setup && !state.needRelease ? setup.dir : 0,
  };
}
