import freeSignals from "./free-signals.json";

/**
 * Single source for figures quoted in site copy. Content files in all six
 * locales read from here, so a number changes in one place. Prices are prose
 * in each locale; `scripts/check-facts.mjs` checks the copy against them.
 */

const s = freeSignals.summary;

/** Public free-signals log (src/data/free-signals.json): the only hit rate the site quotes. */
export const signalLog = {
  hitRate: s.hitRate,
  triggered: s.triggered,
  published: s.published,
  /** First signal in the public log, YYYY-MM. */
  since: s.since.slice(0, 7),
  /** Last log update, YYYY-MM-DD. */
  updated: freeSignals.updatedAt.slice(0, 10),
} as const;

/** Long date of the log's first signal in a locale, e.g. "21 October 2026". */
export function logSince(locale: string): string {
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(s.since));
}

/** Prices and fees as of 2026-11-25. Every locale's copy must match these. */
export const prices = {
  whatsappGroupUsd: 0,
  premium: { minimumUsd: 1000, monthlyUsd: 99, performanceFee: "25% of weekly net profit" },
  dedicated: { minimumUsd: 250000, monthlyUsd: 1000, performanceFee: "25% of profits above the high-water mark" },
  researchPlansMonthlyUsd: { reports: 750, signals: 1000, mentorship: 5000 },
} as const;
