import { CONFIG, dayNumber, formatR, hashString, mechanicalOutcomes, pickRound, summarize, type RoundContext } from "./engine";
import { loadManifest, loadSet, type MarketSet } from "./data";
import { getStrings, type GameLang, type TrainerStrings } from "./strings";
import type { Outcome, Ride, RoundState, Summary, Timeframe } from "./types";
import { gamePaths } from "@/i18n";
import { SITE } from "@/lib/seo";

/** One key per day for every language: the daily result is the same game on both pages. */
const STORAGE_PREFIX = "nuuk-trainer:daily:";

/** The chart of a round, before it is labelled for a language. */
interface Round {
  daily: boolean;
  date: string;
  set: MarketSet;
  ctx: RoundContext;
  range: { startK: number; endK: number };
}

export interface Game extends Round {
  label: string;
}

export interface RoundResult {
  label: string;
  note: string;
  chart: { sym: string; tf: Timeframe; fromT: number; toT: number };
  summary: Summary;
  rides: readonly Ride[];
  outcomes: Outcome[];
  shareText: string;
}

export interface DailyRecord {
  totalR: number;
  discipline: number | null;
}

export const todayUtc = (): string => new Date().toISOString().slice(0, 10);
export const dailyNumber = (date: string): number => dayNumber(date, CONFIG.DAILY_EPOCH);

function randomSeed(): number {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}

/** Picks a market and a 150-bar window. The daily seed gives everyone the same chart. */
async function loadRound(daily: boolean): Promise<Round> {
  const date = todayUtc();
  const seed = daily ? hashString(date) : randomSeed();
  const manifest = await loadManifest();
  const set = await loadSet(manifest[seed % manifest.length]);
  const pick = pickRound([{ candles: set.candles, setups: set.setups }], seed, CONFIG);
  return {
    daily,
    date,
    set,
    ctx: { candles: set.candles, setups: set.setups, cfg: CONFIG },
    range: { startK: pick.startK, endK: pick.endK },
  };
}

/** Name of the daily round; without a date (static HTML) the number is left out. */
export function dailyLabel(lang: GameLang, date: string): string {
  const { session } = getStrings(lang);
  return date ? session.dailyLabel(dailyNumber(date)) : session.dailyLabelPlain;
}

/** A round ready to play, named in the player's language. The chart itself does not depend on it. */
export async function createGame(daily: boolean, lang: GameLang): Promise<Game> {
  const round = await loadRound(daily);
  return { ...round, label: daily ? dailyLabel(lang, round.date) : getStrings(lang).session.freeLabel };
}

/**
 * Starts downloading today's chart while the visitor is still reading the page, so the
 * first round does not wait behind the site's link prefetches. A failure is deliberately
 * left for the start button: failed requests are not cached, so starting a round retries
 * and shows the error there.
 */
export function warmDailyGame(): void {
  loadRound(true).catch(() => undefined);
}

/** Raw stored value for the day, or null. Storage can be blocked; the game still runs. */
export function readDailyRaw(date: string): string | null {
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + date);
  } catch {
    return null;
  }
}

export function parseDaily(raw: string | null): DailyRecord | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== "object" || value === null) return null;
    const { totalR, discipline } = value as Record<string, unknown>;
    const okDiscipline = discipline === null || (typeof discipline === "number" && Number.isFinite(discipline));
    if (typeof totalR !== "number" || !Number.isFinite(totalR) || !okDiscipline) return null;
    return { totalR, discipline: discipline as number | null };
  } catch {
    return null;
  }
}

type SaveStatus = "saved" | "exists" | "unavailable";

function dailyNote(t: TrainerStrings, status: SaveStatus): string {
  if (status === "exists") return t.session.replayNote;
  return status === "unavailable" ? t.session.unsavedNote : "";
}

/** Keeps only the first result of the day; storage may be blocked (private browsing). */
function saveDailyOnce(date: string, summary: Summary): SaveStatus {
  if (parseDaily(readDailyRaw(date))) return "exists";
  try {
    window.localStorage.setItem(STORAGE_PREFIX + date, JSON.stringify({ totalR: summary.totalR, discipline: summary.discipline }));
    return "saved";
  } catch {
    return "unavailable";
  }
}

export function buildResult(game: Game, state: RoundState, lang: GameLang): RoundResult {
  const t = getStrings(lang);
  const summary = summarize(state.rides);
  const note = game.daily ? dailyNote(t, saveDailyOnce(game.date, summary)) : "";
  const discipline = summary.discipline === null ? "—" : `${summary.discipline}/100`;
  return {
    label: game.label,
    note,
    chart: {
      sym: `${game.set.sym}/USD`,
      tf: game.set.tf,
      fromT: game.ctx.candles[game.range.startK].t,
      toT: game.ctx.candles[game.range.endK].t,
    },
    summary,
    rides: state.rides,
    outcomes: mechanicalOutcomes(game.ctx, game.range.startK, game.range.endK),
    shareText: t.session.shareText({ label: game.label, total: formatR(summary.totalR), discipline, url: `${SITE}${gamePaths[lang]}` }),
  };
}
