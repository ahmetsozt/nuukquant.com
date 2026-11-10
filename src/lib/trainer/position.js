/**
 * Pozisyon: giris, stop, hedef ve R hesabi. Stop ve hedef gercekten calisir:
 * fiyat seviyeye degdigi an pozisyon o seviyeden kapanir.
 *
 * @typedef {import('./candles.js').Candle} Candle
 * @typedef {import('./patterns.js').Setup} Setup
 * @typedef {{ dir: 1 | -1, entry: number, entryK: number, stop: number, risk: number, target: number, setup: Setup | null, ruleBased: boolean }} Position
 * @typedef {{ k: number, price: number, reason: 'stop' | 'target' | 'manual' | 'time' }} Exit
 */
import { barPath } from './candles.js';

const PATH_SEGMENTS = 3;
const EPS = 1e-9;

/**
 * `minRisk` verilirse R birimi ondan kucuk olmaz: stop'a cok yakin bir giris
 * stop'u yerinde birakir ama zarari 1R'den kucuk, hedefi 2 birim uzakta sayar.
 * Boylece dar bir mesafe R sonucunu ve maliyeti sisirmez.
 * @param {{ dir: 1 | -1, entry: number, entryK: number, stop: number, setup?: Setup | null, ruleBased?: boolean, minRisk?: number }} input
 * @param {{ TARGET_R: number }} cfg
 * @returns {Position | null} stop yanlis taraftaysa null
 */
export function openPosition(input, cfg) {
  const { dir, entry, entryK, stop, setup = null, ruleBased = false, minRisk = 0 } = input;
  const distance = dir * (entry - stop);
  if (!(distance > 0) || !Number.isFinite(distance)) return null;
  const risk = Math.max(distance, minRisk);
  return Object.freeze({ dir, entry, entryK, stop, risk, target: entry + dir * cfg.TARGET_R * risk, setup, ruleBased });
}

/**
 * @param {Position} pos
 * @param {number} price
 * @returns {number} maliyet haric anlik sonuc, R cinsinden
 */
export function rAt(pos, price) {
  return (pos.dir * (price - pos.entry)) / pos.risk;
}

/** Dogrusal pa -> pb parcasinda ilk gecilen seviye. Stop once kontrol edilir. */
function crossing(pos, pa, pb) {
  const levels = [
    { level: pos.stop, reason: 'stop', side: -pos.dir },
    { level: pos.target, reason: 'target', side: pos.dir },
  ];
  const beyond = (p, { level, side }) => side * (p - level) >= 0;
  // Parca zaten bir seviyenin otesinde basliyorsa (bosluklu acilis) o an kapanir;
  // parcanin sonunda baska bir seviyeye degmesi bunu degistirmez.
  const gapped = levels.find((entry) => beyond(pa, entry));
  if (gapped) return { t: 0, price: pa, reason: gapped.reason };
  const hit = levels.find((entry) => beyond(pb, entry));
  return hit ? { t: (hit.level - pa) / (pb - pa), price: hit.level, reason: hit.reason } : null;
}

/**
 * [fromK, toK] araliginda stop ya da hedefin ilk gecildigi an.
 * Mum kapanisi ile sonraki acilis arasindaki bosluk seviyeyi atlarsa
 * pozisyon acilis fiyatindan kapanir.
 * @param {Candle[]} candles
 * @param {Position} pos
 * @param {number} fromK
 * @param {number} toK
 * @returns {Exit | null}
 */
export function firstExit(candles, pos, fromK, toK) {
  let k = fromK;
  while (k < toK - EPS) {
    const i = Math.floor(k + EPS);
    if (i >= candles.length) break;
    const path = barPath(candles[i]);
    const s = Math.min(PATH_SEGMENTS - 1, Math.floor((k - i) * PATH_SEGMENTS + EPS));
    const segStart = i + s / PATH_SEGMENTS;
    const kb = Math.min(toK, i + (s + 1) / PATH_SEGMENTS);
    const priceOn = (x) => path[s] + (path[s + 1] - path[s]) * Math.min(1, Math.max(0, (x - segStart) * PATH_SEGMENTS));
    const hit = crossing(pos, priceOn(k), priceOn(kb));
    if (hit) return { k: k + (kb - k) * hit.t, price: hit.price, reason: hit.reason };
    k = kb;
  }
  return null;
}

/**
 * Pozisyonu kapatip surus kaydini uretir. Islem maliyeti R sonucundan duser.
 * @param {Position} pos
 * @param {Exit} exit
 * @param {{ FEE_BPS_ROUND_TRIP: number }} cfg
 */
export function closePosition(pos, exit, cfg) {
  const grossR = rAt(pos, exit.price);
  const costR = ((cfg.FEE_BPS_ROUND_TRIP / 1e4) * pos.entry) / pos.risk;
  return Object.freeze({
    dir: pos.dir,
    entry: pos.entry,
    exit: exit.price,
    entryK: pos.entryK,
    exitK: exit.k,
    stop: pos.stop,
    target: pos.target,
    grossR,
    costR,
    r: grossR - costR,
    reason: exit.reason,
    setupAt: pos.setup ? pos.setup.at : null,
    setupName: pos.setup ? pos.setup.name : null,
    kind: pos.setup ? pos.setup.kind : null,
    ruleBased: pos.ruleBased,
  });
}
