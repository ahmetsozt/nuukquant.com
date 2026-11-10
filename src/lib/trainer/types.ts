/** Shared shapes for the NUUK trainer (the engine itself is plain JS, tested with node --test). */

export type Dir = 1 | -1;
/** Direction the player is holding, or 0 when nothing is held. */
export type Hold = Dir | 0;
export type Sign = "1" | "-1" | "0";
export type PatternKind = "star" | "engulfing" | "hammer";
export type ExitReason = "stop" | "target" | "manual" | "time";

export interface Candle {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
}

export interface Setup {
  at: number;
  kind: PatternKind;
  name: string;
  dir: Dir;
  stop: number;
  ref: number;
}

export interface Position {
  dir: Dir;
  entry: number;
  entryK: number;
  stop: number;
  risk: number;
  target: number;
  setup: Setup | null;
  ruleBased: boolean;
}

export interface Ride {
  dir: Dir;
  entry: number;
  exit: number;
  entryK: number;
  exitK: number;
  stop: number;
  target: number;
  grossR: number;
  costR: number;
  r: number;
  reason: ExitReason;
  setupAt: number | null;
  setupName: string | null;
  kind: PatternKind | null;
  ruleBased: boolean;
}

export interface RoundState {
  k: number;
  startK: number;
  endK: number;
  pos: Position | null;
  rides: readonly Ride[];
  needRelease: boolean;
  done: boolean;
}

export interface Outcome {
  setup: Setup;
  reason: ExitReason | "open" | "invalid";
  r: number | null;
}

export interface Summary {
  totalR: number;
  count: number;
  wins: number;
  ruleBased: number;
  discipline: number | null;
}

export interface OutcomeCounts {
  total: number;
  target: number;
  stop: number;
  open: number;
  invalid: number;
}

/** One frame of the board, as text ready to render. */
export interface HudView {
  totalText: string;
  totalSign: Sign;
  openText: string;
  openSign: Sign;
  ruleText: string;
  timeText: string;
  status: string;
  held: Hold;
  cue: Hold;
}

export interface ChartScene {
  candles: Candle[];
  setups: Setup[];
  state: RoundState;
  active: Setup | null;
}
