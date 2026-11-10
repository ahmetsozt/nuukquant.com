/**
 * Typed door to the trainer engine. The engine modules are dependency-free JS so
 * they run under `node --test tests/trainer/*.test.mjs`; everything else imports
 * them through here.
 */
import { CONFIG } from "./config.js";
import { priceAt as priceAtJs, toCandles } from "./candles.js";
import { detectSetups, PATTERNS as PATTERNS_JS } from "./patterns.js";
import { rAt as rAtJs } from "./position.js";
import { advance as advanceJs, createRound as createRoundJs, enterableSetup as enterableSetupJs, mechanicalOutcomes as mechanicalOutcomesJs } from "./round.js";
import { formatR as formatRJs, summarize as summarizeJs, summarizeOutcomes as summarizeOutcomesJs } from "./scoring.js";
import { dayNumber as dayNumberJs, hashString as hashStringJs, pickRound as pickRoundJs } from "./daily.js";
import { createChart as createChartJs, readTheme as readThemeJs } from "./chart.js";
import type { Candle, ChartScene, Hold, Outcome, OutcomeCounts, PatternKind, Position, Ride, RoundState, Setup, Summary } from "./types";

export { CONFIG };
export type TrainerConfig = typeof CONFIG;

export interface RoundContext {
  candles: Candle[];
  setups: Setup[];
  cfg: TrainerConfig;
}

export interface RoundPick {
  setIndex: number;
  startK: number;
  endK: number;
  setupCount: number;
}

export interface Chart {
  draw: (scene: ChartScene) => void;
  destroy: () => void;
}

export const PATTERNS = PATTERNS_JS as Readonly<Record<PatternKind, { names: string[]; lesson: string }>>;

export const parseCandles = toCandles as (rows: unknown) => Candle[];
export const priceAt = priceAtJs as (candles: Candle[], k: number) => number;
export const findSetups = detectSetups as (candles: Candle[], cfg: TrainerConfig) => Setup[];
export const rAt = rAtJs as (pos: Position, price: number) => number;

export const createRound = createRoundJs as (range: { startK: number; endK: number }) => RoundState;
export const advance = advanceJs as (ctx: RoundContext, state: RoundState, dk: number, hold: Hold) => RoundState;
export const enterableSetup = enterableSetupJs as (ctx: RoundContext, state: RoundState) => Setup | null;
export const mechanicalOutcomes = mechanicalOutcomesJs as (ctx: RoundContext, startK: number, endK: number) => Outcome[];

export const summarize = summarizeJs as (rides: readonly Ride[]) => Summary;
export const summarizeOutcomes = summarizeOutcomesJs as (outcomes: readonly Outcome[]) => OutcomeCounts;
export const formatR = formatRJs as (r: number | null | undefined) => string;

export const hashString = hashStringJs as (text: string) => number;
export const dayNumber = dayNumberJs as (date: string, epoch: string) => number;
export const pickRound = pickRoundJs as (sets: ReadonlyArray<{ candles: Candle[]; setups: Setup[] }>, seed: number, cfg: TrainerConfig) => RoundPick;

export const readTheme = readThemeJs as () => Readonly<Record<string, string>>;
export const createChart = createChartJs as (canvas: HTMLCanvasElement, theme: Readonly<Record<string, string>>) => Chart;
