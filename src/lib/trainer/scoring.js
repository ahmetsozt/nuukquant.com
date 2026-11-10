/** Tur ozeti ve yazim yardimcilari. */

const MINUS = '−';

/**
 * @param {ReadonlyArray<{ r: number, ruleBased: boolean }>} rides
 * @returns {{ totalR: number, count: number, wins: number, ruleBased: number, discipline: number | null }}
 */
export function summarize(rides) {
  const count = rides.length;
  const ruleBased = rides.filter((ride) => ride.ruleBased).length;
  return {
    totalR: rides.reduce((sum, ride) => sum + ride.r, 0),
    count,
    wins: rides.filter((ride) => ride.r > 0).length,
    ruleBased,
    discipline: count > 0 ? Math.round((100 * ruleBased) / count) : null,
  };
}

/**
 * @param {ReadonlyArray<{ reason: string }>} outcomes
 */
export function summarizeOutcomes(outcomes) {
  const count = (reason) => outcomes.filter((outcome) => outcome.reason === reason).length;
  return { total: outcomes.length, target: count('target'), stop: count('stop'), open: count('open'), invalid: count('invalid') };
}

/**
 * @param {number | null | undefined} r
 * @returns {string} ornek: "+1.9R", "−1.1R"
 */
export function formatR(r) {
  if (r === null || r === undefined || !Number.isFinite(r)) return '—';
  const rounded = Math.round(r * 10) / 10;
  const sign = rounded > 0 ? '+' : rounded < 0 ? MINUS : '';
  return `${sign}${Math.abs(rounded).toFixed(1)}R`;
}
