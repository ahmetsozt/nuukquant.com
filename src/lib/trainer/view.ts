import { formatR, priceAt, rAt, summarize, type RoundContext } from "./engine";
import type { Dir, ExitReason, HudView, RoundState, Setup, Sign } from "./types";

export const REASON_LABELS: Readonly<Record<ExitReason, string>> = {
  stop: "Stop çalıştı",
  target: "Hedef alındı",
  manual: "Elle kapatıldı",
  time: "Süre bitti",
};

export const dirLabel = (dir: Dir): string => (dir > 0 ? "LONG" : "SHORT");

/** Sign of a value once rounded to one decimal, so "0.0R" never shows as a win or a loss. */
export function signOf(value: number): Sign {
  const rounded = Math.round(value * 10);
  return rounded > 0 ? "1" : rounded < 0 ? "-1" : "0";
}

function formatClock(seconds: number): string {
  const whole = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

function statusText(state: RoundState, setup: Setup | null): string {
  const { pos } = state;
  if (pos?.setup) return `${pos.setup.name} · ${dirLabel(pos.dir)}. Stop ve hedef çalışıyor, bırakınca kapanır.`;
  if (pos) return `Kural dışı giriş · ${dirLabel(pos.dir)}. Formasyon yoktu, bırakınca kapanır.`;
  const last = state.rides.at(-1);
  if (state.needRelease && last) return `${REASON_LABELS[last.reason]}: ${formatR(last.r)}. Elini bırak, sonraki setup'ı bekle.`;
  if (setup) return `${setup.name} kilitlendi. ${dirLabel(setup.dir)} için basılı tut.`;
  return "Setup bekleniyor. Formasyon yokken girmek kural dışıdır.";
}

export const IDLE_VIEW: HudView = {
  totalText: "0.0R",
  totalSign: "0",
  openText: "—",
  openSign: "0",
  ruleText: "—",
  timeText: "1:00",
  status: "Tur başlayınca formasyonlar burada duyurulur.",
  held: 0,
  cue: 0,
};

/** Turns engine state into the text the board shows. `setup` is the setup open for entry, if any. */
export function describe(ctx: RoundContext, state: RoundState, setup: Setup | null): HudView {
  const sum = summarize(state.rides);
  const openR = state.pos ? rAt(state.pos, priceAt(ctx.candles, state.k)) : null;
  return {
    totalText: formatR(sum.totalR),
    totalSign: signOf(sum.totalR),
    openText: formatR(openR),
    openSign: openR === null ? "0" : signOf(openR),
    ruleText: sum.count > 0 ? `${sum.ruleBased}/${sum.count}` : "—",
    timeText: formatClock((state.endK - state.k) / ctx.cfg.BARS_PER_SECOND),
    status: statusText(state, setup),
    held: state.pos ? state.pos.dir : 0,
    cue: setup && !state.needRelease ? setup.dir : 0,
  };
}
