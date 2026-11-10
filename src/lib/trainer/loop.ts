import { advance, createChart, createRound, enterableSetup, readTheme } from "./engine";
import { describe } from "./view";
import type { Game } from "./session";
import type { Hold, HudView, RoundState } from "./types";

/** Longest step a single frame may take, so a tab coming back from the background does not skip the round. */
const MAX_FRAME_SECONDS = 0.1;

const sameView = (a: HudView | null, b: HudView): boolean => a !== null && (Object.keys(b) as (keyof HudView)[]).every((key) => a[key] === b[key]);

/**
 * Runs one round on the canvas: reads the held direction, advances the engine and redraws.
 * `onView` fires only when the board text changes. Returns the cleanup function.
 */
export function runRound(options: {
  game: Game;
  canvas: HTMLCanvasElement;
  getHold: () => Hold;
  onView: (view: HudView) => void;
  onDone: (state: RoundState) => void;
}): () => void {
  const { game, canvas, getHold, onView, onDone } = options;
  const chart = createChart(canvas, readTheme());
  let state = createRound(game.range);
  let lastTime: number | null = null;
  let lastView: HudView | null = null;
  let frameId = 0;

  const tick = (now: number) => {
    const dt = lastTime === null ? 0 : Math.min(MAX_FRAME_SECONDS, (now - lastTime) / 1000);
    lastTime = now;
    state = advance(game.ctx, state, dt * game.ctx.cfg.BARS_PER_SECOND, getHold());
    const active = state.pos ? null : enterableSetup(game.ctx, state);
    const view = describe(game.ctx, state, active);
    if (!sameView(lastView, view)) {
      lastView = view;
      onView(view);
    }
    chart.draw({ candles: game.ctx.candles, setups: game.ctx.setups, state, active });
    if (state.done) {
      onDone(state);
      return;
    }
    frameId = requestAnimationFrame(tick);
  };

  frameId = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frameId);
    chart.destroy();
  };
}
