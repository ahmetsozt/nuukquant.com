/** Tohumlu secim: ayni tohum herkeste ayni grafigi verir. */

const DAY_MS = 86400000;

/**
 * @param {string} text
 * @returns {number} 32 bit isaretsiz ozet (FNV-1a)
 */
export function hashString(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/**
 * @param {number} seed
 * @returns {() => number} [0, 1) araliginda tekrarlanabilir sayi ureteci (xorshift32)
 */
export function createRng(seed) {
  let x = seed >>> 0 || 0x9e3779b9;
  return () => {
    x ^= x << 13;
    x >>>= 0;
    x ^= x >>> 17;
    x ^= x << 5;
    x >>>= 0;
    return x / 4294967296;
  };
}

/**
 * @param {string} dateStr YYYY-AA-GG (UTC)
 * @param {string} epoch sayacin 1 oldugu gun
 * @returns {number}
 */
export function dayNumber(dateStr, epoch) {
  const at = (s) => Date.parse(`${s}T00:00:00Z`);
  return Math.round((at(dateStr) - at(epoch)) / DAY_MS) + 1;
}

function countSetups(setups, startK, cfg) {
  const lastAt = startK + cfg.PLAY_BARS - cfg.ENTRY_WINDOW_BARS;
  return setups.filter((setup) => setup.at >= startK && setup.at < lastAt).length;
}

/**
 * Tohuma gore bir piyasa ve tur penceresi secer. Aday pencereler arasindan
 * en cok setup iceren kazanir (esitlikte ilki).
 * @param {ReadonlyArray<{ candles: object[], setups: { at: number }[] }>} sets
 * @param {number} seed
 * @param {{ WARMUP_BARS: number, PLAY_BARS: number, ENTRY_WINDOW_BARS: number, WINDOW_CANDIDATES: number }} cfg
 * @returns {{ setIndex: number, startK: number, endK: number, setupCount: number }}
 */
export function pickRound(sets, seed, cfg) {
  if (sets.length === 0) throw new Error('Yetersiz veri: hiç piyasa yüklenmedi');
  const rnd = createRng(seed);
  const setIndex = Math.floor(rnd() * sets.length);
  const { candles, setups } = sets[setIndex];
  const minStart = cfg.WARMUP_BARS;
  const maxStart = candles.length - cfg.PLAY_BARS - 1;
  if (maxStart < minStart) throw new Error('Yetersiz veri: mum sayısı bir tur için az');
  let best = null;
  for (let n = 0; n < cfg.WINDOW_CANDIDATES; n++) {
    const startK = minStart + Math.floor(rnd() * (maxStart - minStart + 1));
    const setupCount = countSetups(setups, startK, cfg);
    if (!best || setupCount > best.setupCount) best = { startK, setupCount };
  }
  return { setIndex, startK: best.startK, endK: best.startK + cfg.PLAY_BARS, setupCount: best.setupCount };
}
