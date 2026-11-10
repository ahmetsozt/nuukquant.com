import { CONFIG, dayNumber, formatR, hashString, mechanicalOutcomes, pickRound, summarize, type RoundContext } from "./engine";
import { loadManifest, loadSet, type MarketSet } from "./data";
import type { Outcome, Ride, RoundState, Summary } from "./types";

const STORAGE_PREFIX = "nuuk-trainer:daily:";
export const DISCLAIMER = "Eğitim simülasyonudur, yatırım tavsiyesi değildir.";

export interface Game {
  daily: boolean;
  date: string;
  label: string;
  set: MarketSet;
  ctx: RoundContext;
  range: { startK: number; endK: number };
}

export interface RoundResult {
  label: string;
  note: string;
  chart: { sym: string; tfLabel: string; fromT: number; toT: number };
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
export async function createGame(daily: boolean): Promise<Game> {
  const date = todayUtc();
  const seed = daily ? hashString(date) : randomSeed();
  const manifest = await loadManifest();
  const set = await loadSet(manifest[seed % manifest.length]);
  const pick = pickRound([{ candles: set.candles, setups: set.setups }], seed, CONFIG);
  return {
    daily,
    date,
    label: daily ? `Günün grafiği #${dailyNumber(date)}` : "Serbest antrenman",
    set,
    ctx: { candles: set.candles, setups: set.setups, cfg: CONFIG },
    range: { startK: pick.startK, endK: pick.endK },
  };
}

/**
 * Starts downloading today's chart while the visitor is still reading the page, so the
 * first round does not wait behind the site's link prefetches. A failure is deliberately
 * left for the start button: failed requests are not cached, so starting a round retries
 * and shows the error there.
 */
export function warmDailyGame(): void {
  createGame(true).catch(() => undefined);
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

const DAILY_NOTES: Readonly<Record<SaveStatus, string>> = {
  saved: "",
  exists: "Bu tur tekrar oyunuydu. Günün kayıtlı sonucu ilk oynadığın turdur.",
  unavailable: "Tarayıcın kayıt tutmaya izin vermediği için bu sonuç saklanmadı.",
};

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

export function buildResult(game: Game, state: RoundState): RoundResult {
  const summary = summarize(state.rides);
  const note = game.daily ? DAILY_NOTES[saveDailyOnce(game.date, summary)] : "";
  const discipline = summary.discipline === null ? "—" : `${summary.discipline}/100`;
  return {
    label: game.label,
    note,
    chart: {
      sym: `${game.set.sym}/USD`,
      tfLabel: game.set.tfLabel,
      fromT: game.ctx.candles[game.range.startK].t,
      toT: game.ctx.candles[game.range.endK].t,
    },
    summary,
    rides: state.rides,
    outcomes: mechanicalOutcomes(game.ctx, game.range.startK, game.range.endK),
    shareText: `NUUK Antrenman · ${game.label}\nToplam: ${formatR(summary.totalR)} · Disiplin: ${discipline}\n${DISCLAIMER}\nhttps://www.nuukquant.com/antrenman/`,
  };
}
