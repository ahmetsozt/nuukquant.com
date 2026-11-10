/**
 * Mum formasyonu dedektoru. Her dedektor formasyonun boga halini tanir;
 * ayi hali, fiyatlar ters cevrilmis seride ayni dedektorle bulunur.
 * Bir setup yalnizca kendi mumuna kadar olan veriye bakar (ileriye bakmaz).
 *
 * @typedef {import('./candles.js').Candle} Candle
 * @typedef {{ at: number, kind: string, name: string, dir: 1 | -1, stop: number, ref: number }} Setup
 */
import { atr } from './candles.js';

/** Dedektorun ilk bakabildigi mum (trend ve ATR icin gecmis gerekir). */
const MIN_INDEX = 20;
/** Formasyon oncesi yone bakilan mum sayisi. */
const TREND_BARS = 6;
/** Stop, formasyonun ucundan ATR'nin bu kati kadar uzaga konur. */
const STOP_BUFFER_ATR = 0.1;
/** Kabul edilen risk araligi (kapanis ile stop arasi), ATR kati. */
const RISK_MIN_ATR = 0.5;
const RISK_MAX_ATR = 3.5;

const ENGULF_MIN_BODY_ATR = 0.6;
const ENGULF_TREND_ATR = -1;
const HAMMER_MIN_RANGE_ATR = 0.8;
const HAMMER_MIN_LOWER_WICK = 0.6;
const HAMMER_MAX_UPPER_WICK = 0.15;
const HAMMER_TREND_ATR = -1;
const STAR_MIN_FIRST_BODY_ATR = 0.7;
const STAR_MAX_MIDDLE_BODY = 0.35;
const STAR_MIDDLE_DRIFT = 0.1;
const STAR_TREND_ATR = -0.5;

export const PATTERNS = Object.freeze({
  star: {
    names: ['Sabah Yıldızı', 'Akşam Yıldızı'],
    lesson: 'Güçlü bir mumun ardından kararsız küçük bir mum, sonra ters yönde güçlü bir kapanış gelir. Momentumun el değiştirdiğini anlatır.',
  },
  engulfing: {
    names: ['Yutan Boğa', 'Yutan Ayı'],
    lesson: 'İkinci mumun gövdesi bir önceki mumun gövdesini tamamen kaplar. Önceki hareketin reddedildiğini gösterir.',
  },
  hammer: {
    names: ['Çekiç', 'Kayan Yıldız'],
    lesson: 'Uzun fitil, fiyatın o bölgeden sert biçimde geri çevrildiğini gösterir. Fitilin ucu doğal stop seviyesidir.',
  },
});

const body = (c) => Math.abs(c.c - c.o);
const isUp = (c) => c.c > c.o;
const isDown = (c) => c.c < c.o;
const mirror = (c) => ({ t: c.t, o: -c.o, h: -c.l, l: -c.h, c: -c.c, v: c.v });
const trendInto = (cs, i, unit) => (cs[i].c - cs[i - TREND_BARS].c) / unit;

function star(cs, i, unit) {
  const a = cs[i - 2];
  const b = cs[i - 1];
  const c = cs[i];
  if (!isDown(a) || body(a) < STAR_MIN_FIRST_BODY_ATR * unit) return null;
  if (body(b) > STAR_MAX_MIDDLE_BODY * body(a)) return null;
  if (Math.max(b.o, b.c) > a.c + STAR_MIDDLE_DRIFT * body(a)) return null;
  if (!isUp(c) || c.c < (a.o + a.c) / 2) return null;
  if (trendInto(cs, i - 2, unit) > STAR_TREND_ATR) return null;
  return Math.min(a.l, b.l, c.l) - STOP_BUFFER_ATR * unit;
}

function engulfing(cs, i, unit) {
  const p = cs[i - 1];
  const c = cs[i];
  if (!isDown(p) || !isUp(c)) return null;
  if (c.o > p.c || c.c < p.o) return null;
  if (body(c) < ENGULF_MIN_BODY_ATR * unit) return null;
  if (trendInto(cs, i - 1, unit) > ENGULF_TREND_ATR) return null;
  return Math.min(p.l, c.l) - STOP_BUFFER_ATR * unit;
}

function hammer(cs, i, unit) {
  const c = cs[i];
  const range = c.h - c.l;
  if (range < HAMMER_MIN_RANGE_ATR * unit) return null;
  const lower = Math.min(c.o, c.c) - c.l;
  const upper = c.h - Math.max(c.o, c.c);
  if (lower < HAMMER_MIN_LOWER_WICK * range || upper > HAMMER_MAX_UPPER_WICK * range) return null;
  if (trendInto(cs, i - 1, unit) > HAMMER_TREND_ATR) return null;
  return c.l - STOP_BUFFER_ATR * unit;
}

/** Oncelik sirasi: daha cok mum isteyen formasyon once gelir. */
const DETECTORS = [
  ['star', star],
  ['engulfing', engulfing],
  ['hammer', hammer],
];

function detectAt(cs, i, period) {
  const unit = atr(cs, i, period);
  if (!(unit > 0)) return null;
  for (const [kind, detect] of DETECTORS) {
    const stop = detect(cs, i, unit);
    if (stop === null) continue;
    const risk = cs[i].c - stop;
    if (risk >= RISK_MIN_ATR * unit && risk <= RISK_MAX_ATR * unit) return { kind, stop };
  }
  return null;
}

/**
 * Serideki tum setuplari, olustuklari mum sirasina gore dondurur.
 * @param {Candle[]} candles
 * @param {{ ATR_PERIOD: number, SETUP_SPACING_BARS: number }} cfg
 * @returns {Setup[]}
 */
export function detectSetups(candles, cfg) {
  const mirrored = candles.map(mirror);
  const setups = [];
  let lastAt = -Infinity;
  for (let i = MIN_INDEX; i < candles.length; i++) {
    if (i - lastAt < cfg.SETUP_SPACING_BARS) continue;
    const bull = detectAt(candles, i, cfg.ATR_PERIOD);
    const bear = bull ? null : detectAt(mirrored, i, cfg.ATR_PERIOD);
    const hit = bull || bear;
    if (!hit) continue;
    const dir = bull ? 1 : -1;
    const name = PATTERNS[hit.kind].names[bull ? 0 : 1];
    setups.push({ at: i, kind: hit.kind, name, dir, stop: bull ? hit.stop : -hit.stop, ref: candles[i].c });
    lastAt = i;
  }
  return setups;
}
