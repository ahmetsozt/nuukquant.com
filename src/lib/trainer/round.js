/**
 * Tur durumu. `advance` saf bir fonksiyondur: eski durumu degistirmez, yenisini dondurur.
 *
 * @typedef {import('./candles.js').Candle} Candle
 * @typedef {import('./patterns.js').Setup} Setup
 * @typedef {{ candles: Candle[], setups: Setup[], cfg: typeof import('./config.js').CONFIG }} RoundContext
 * @typedef {{ k: number, startK: number, endK: number, pos: import('./position.js').Position | null, rides: ReadonlyArray<object>, needRelease: boolean, done: boolean }} RoundState
 */
import { atr, partialCandle, priceAt } from './candles.js';
import { openPosition, firstExit, closePosition } from './position.js';

/**
 * @param {{ startK: number, endK: number }} range
 * @returns {RoundState}
 */
export function createRound({ startK, endK }) {
  return Object.freeze({ k: startK, startK, endK, pos: null, rides: Object.freeze([]), needRelease: false, done: false });
}

/**
 * k aninda girise acik setup: mumu kapanmis ve giris penceresi dolmamis olan.
 * @param {Setup[]} setups olusma sirasina gore
 * @param {number} k
 * @param {{ ENTRY_WINDOW_BARS: number }} cfg
 * @returns {Setup | null}
 */
export function activeSetup(setups, k, cfg) {
  const bar = Math.floor(k);
  for (let n = setups.length - 1; n >= 0; n--) {
    const setup = setups[n];
    if (setup.at >= bar) continue;
    return bar - setup.at <= cfg.ENTRY_WINDOW_BARS ? setup : null;
  }
  return null;
}

const entryUnit = (ctx, k) => atr(ctx.candles, Math.floor(k) - 1, ctx.cfg.ATR_PERIOD);

/** Setup olustuktan sonra fiyat stop'a degdi mi? Degdiyse setup gecersizdir ve geri gelmez. */
function isInvalidated(candles, setup, k) {
  const bar = Math.min(candles.length - 1, Math.floor(k));
  const touched = (candle) => (setup.dir > 0 ? candle.l <= setup.stop : candle.h >= setup.stop);
  for (let i = setup.at + 1; i < bar; i++) if (touched(candles[i])) return true;
  return touched(partialCandle(candles[bar], k - bar));
}

/**
 * Su an kendi yonunde girilirse kurala uygun sayilacak setup. Setup zaten
 * kullanildiysa (bir setup tek giris hakki verir) ya da fiyat stop'a degdiyse
 * null. Kilit yalnizca bir kez kalkar; fiyat stop'un cevresinde gezerken uyari
 * yanip sonmez.
 * @param {RoundContext} ctx
 * @param {RoundState} state
 * @returns {Setup | null}
 */
export function enterableSetup(ctx, state) {
  const setup = activeSetup(ctx.setups, state.k, ctx.cfg);
  if (!setup || state.rides.some((ride) => ride.setupAt === setup.at)) return null;
  return isInvalidated(ctx.candles, setup, state.k) ? null : setup;
}

function buildEntry(ctx, state, dir) {
  const entry = priceAt(ctx.candles, state.k);
  const unit = entryUnit(ctx, state.k);
  const candidate = enterableSetup(ctx, state);
  const setup = candidate && candidate.dir === dir ? candidate : null;
  const stop = setup ? setup.stop : entry - dir * ctx.cfg.FALLBACK_STOP_ATR * unit;
  const minRisk = setup ? ctx.cfg.MIN_RISK_ATR * unit : 0;
  return openPosition({ dir, entry, entryK: state.k, stop, setup, ruleBased: Boolean(setup), minRisk }, ctx.cfg);
}

function withRide(ctx, state, exit, needRelease) {
  const ride = closePosition(state.pos, exit, ctx.cfg);
  return { ...state, pos: null, rides: Object.freeze([...state.rides, ride]), needRelease };
}

function closeNow(ctx, state, reason, needRelease) {
  return withRide(ctx, state, { k: state.k, price: priceAt(ctx.candles, state.k), reason }, needRelease);
}

function applyInput(ctx, state, holdDir) {
  if (!holdDir) return state.pos ? closeNow(ctx, state, 'manual', false) : { ...state, needRelease: false };
  if (state.pos) return state.pos.dir === holdDir ? state : closeNow(ctx, state, 'manual', true);
  if (state.needRelease) return state;
  const pos = buildEntry(ctx, state, holdDir);
  return pos ? { ...state, pos } : state;
}

function applyTime(ctx, state, toK) {
  if (!state.pos) return { ...state, k: toK };
  const exit = firstExit(ctx.candles, state.pos, state.k, toK);
  return exit ? { ...withRide(ctx, state, exit, true), k: toK } : { ...state, k: toK };
}

function finish(ctx, state) {
  const exit = { k: state.endK, price: priceAt(ctx.candles, state.endK), reason: 'time' };
  const closed = state.pos ? withRide(ctx, state, exit, false) : state;
  return { ...closed, done: true };
}

/**
 * Turu dk mum kadar ilerletir. Once girdi islenir (ac / kapat), sonra zaman akar.
 * @param {RoundContext} ctx
 * @param {RoundState} state
 * @param {number} dk ilerlenecek mum (kesirli)
 * @param {1 | -1 | 0} holdDir basili tutulan yon, yoksa 0
 * @returns {RoundState}
 */
export function advance(ctx, state, dk, holdDir) {
  if (state.done) return state;
  const toK = Math.min(state.endK, state.k + Math.max(0, dk));
  const moved = applyTime(ctx, applyInput(ctx, state, holdDir), toK);
  return Object.freeze(toK >= state.endK ? finish(ctx, moved) : moved);
}

function playMechanically(ctx, setup, limitK) {
  const { candles, cfg } = ctx;
  const entryK = setup.at + 1;
  const pos = openPosition({ dir: setup.dir, entry: candles[entryK].o, entryK, stop: setup.stop, setup, ruleBased: true }, cfg);
  if (!pos) return { setup, reason: 'invalid', r: null };
  const exit = firstExit(candles, pos, entryK, limitK);
  if (!exit) return { setup, reason: 'open', r: null };
  return { setup, reason: exit.reason, r: closePosition(pos, exit, cfg).r };
}

/**
 * Oyuncunun turda girebildigi her setup, kural mekanik uygulansaydi ne olurdu:
 * sonraki mumun acilisindan gir, stop ya da hedefe kadar bekle. Tur basinda
 * giris penceresi hala acik olan isinma setuplari da dahildir.
 * @param {RoundContext} ctx
 * @param {number} startK
 * @param {number} endK
 */
export function mechanicalOutcomes(ctx, startK, endK) {
  const limitK = Math.min(ctx.candles.length, endK + ctx.cfg.RESOLVE_LOOKAHEAD_BARS);
  const firstAt = startK - ctx.cfg.ENTRY_WINDOW_BARS;
  return ctx.setups
    .filter((setup) => setup.at >= firstAt && setup.at + 1 < endK)
    .map((setup) => playMechanically(ctx, setup, limitK));
}
