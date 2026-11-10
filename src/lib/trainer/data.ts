import { CONFIG, findSetups, parseCandles } from "./engine";
import type { Candle, Setup } from "./types";

/** Static candle packs live in public/trainer/ (rebuilt by scripts/trainer/fetch-candles.mjs). */
const BASE = "/trainer/";
const FILE_PATTERN = /^[a-z0-9-]+\.json$/;
const SYMBOL_PATTERN = /^[A-Z0-9]{1,12}$/;

const TF_LABELS = { "5m": "5 dakikalık", "15m": "15 dakikalık", "1h": "1 saatlik" } as const;
type Timeframe = keyof typeof TF_LABELS;

export interface ManifestEntry {
  sym: string;
  tf: Timeframe;
  file: string;
}

export interface MarketSet {
  sym: string;
  tfLabel: string;
  candles: Candle[];
  setups: Setup[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function getJson(url: string): Promise<unknown> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}

function parseEntry(raw: unknown): ManifestEntry {
  if (!isRecord(raw)) throw new Error("Trainer manifest: entry is not an object");
  const { sym, tf, file } = raw;
  const ok =
    typeof sym === "string" && SYMBOL_PATTERN.test(sym) && typeof file === "string" && FILE_PATTERN.test(file) && typeof tf === "string" && tf in TF_LABELS;
  if (!ok) throw new Error("Trainer manifest: invalid entry");
  return { sym, file, tf: tf as Timeframe };
}

async function fetchManifest(): Promise<ManifestEntry[]> {
  const raw = await getJson(`${BASE}manifest.json`);
  if (!isRecord(raw) || !Array.isArray(raw.sets) || raw.sets.length === 0) throw new Error("Trainer manifest: empty or invalid");
  return raw.sets.map(parseEntry);
}

async function fetchSet(entry: ManifestEntry): Promise<MarketSet> {
  const raw = await getJson(`${BASE}${entry.file}`);
  const candles = parseCandles(isRecord(raw) ? raw.rows : null);
  return { sym: entry.sym, tfLabel: TF_LABELS[entry.tf], candles, setups: findSetups(candles, CONFIG) };
}

let manifest: Promise<ManifestEntry[]> | null = null;
const sets = new Map<string, Promise<MarketSet>>();

/** Manifest of available markets. A failed request is not cached, so a retry fetches again. */
export function loadManifest(): Promise<ManifestEntry[]> {
  manifest ??= fetchManifest().catch((error: unknown) => {
    manifest = null;
    throw error;
  });
  return manifest;
}

/** One market's candles with its setups detected, cached per file. */
export function loadSet(entry: ManifestEntry): Promise<MarketSet> {
  const cached = sets.get(entry.file);
  if (cached) return cached;
  const pending = fetchSet(entry).catch((error: unknown) => {
    sets.delete(entry.file);
    throw error;
  });
  sets.set(entry.file, pending);
  return pending;
}
