/**
 * Mum yardimcilari. DOM yok; tarayicida ve Node altinda calisir.
 *
 * @typedef {{ t: number, o: number, h: number, l: number, c: number, v: number }} Candle
 */

/** Bir mumun icindeki fiyat yolu uc dogrusal parcadan olusur. */
const PATH_SEGMENTS = 3;

/**
 * [t, o, h, l, c, v] satirlarini dogrulayip mum nesnelerine cevirir.
 * @param {unknown} rows
 * @returns {Candle[]}
 */
export function toCandles(rows) {
  if (!Array.isArray(rows)) throw new Error('Mum verisi bir dizi olmalı');
  return rows.map((row, index) => {
    const [t, o, h, l, c, v] = Array.isArray(row) ? row : [];
    const ok = [t, o, h, l, c, v].every(Number.isFinite) && l > 0 && h >= Math.max(o, c) && l <= Math.min(o, c);
    if (!ok) throw new Error(`Geçersiz mum (satır ${index})`);
    return { t, o, h, l, c, v };
  });
}

/**
 * Mumun icinde fiyatin izledigi dort nokta. Yukselen mum once dibini,
 * dusen mum once tepesini gorur.
 * @param {Candle} candle
 * @returns {number[]}
 */
export function barPath(candle) {
  const { o, h, l, c } = candle;
  return c >= o ? [o, l, h, c] : [o, h, l, c];
}

/**
 * Kesirli mum konumundaki fiyat. k = 12.5, 12. mumun ortasi demektir.
 * @param {Candle[]} candles
 * @param {number} k
 * @returns {number}
 */
export function priceAt(candles, k) {
  const i = Math.min(candles.length - 1, Math.max(0, Math.floor(k)));
  const f = Math.min(1, Math.max(0, k - i));
  const path = barPath(candles[i]);
  const s = Math.min(PATH_SEGMENTS - 1, Math.floor(f * PATH_SEGMENTS));
  const t = f * PATH_SEGMENTS - s;
  return path[s] + (path[s + 1] - path[s]) * t;
}

/**
 * Olusmakta olan mum: f (0..1) anina kadar gorulen en yuksek, en dusuk ve son fiyat.
 * @param {Candle} candle
 * @param {number} f
 * @returns {Candle}
 */
export function partialCandle(candle, f) {
  const frac = Math.min(1, Math.max(0, f));
  const path = barPath(candle);
  const s = Math.min(PATH_SEGMENTS - 1, Math.floor(frac * PATH_SEGMENTS));
  const last = path[s] + (path[s + 1] - path[s]) * (frac * PATH_SEGMENTS - s);
  const seen = [...path.slice(0, s + 1), last];
  return { ...candle, h: Math.max(...seen), l: Math.min(...seen), c: last };
}

/**
 * i. mumda biten ortalama gercek aralik. Az veride eldeki mumlarla calisir.
 * @param {Candle[]} candles
 * @param {number} i
 * @param {number} period
 * @returns {number}
 */
export function atr(candles, i, period) {
  const end = Math.min(candles.length - 1, Math.max(0, i));
  if (end < 1) return candles[0].h - candles[0].l;
  const from = Math.max(1, end - period + 1);
  let sum = 0;
  for (let j = from; j <= end; j++) {
    const cur = candles[j];
    const prevClose = candles[j - 1].c;
    sum += Math.max(cur.h - cur.l, Math.abs(cur.h - prevClose), Math.abs(cur.l - prevClose));
  }
  return sum / (end - from + 1);
}
