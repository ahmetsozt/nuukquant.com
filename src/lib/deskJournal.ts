import data from "@/data/desk-journal.json";
import type { Locale } from "@/i18n";

/** Shape of src/data/desk-journal.json (built by scripts/journal/build-desk-journal.mjs). */
export type JournalDay = { date: string; net: number; retPct: number; cumPct: number; trades: number; winRate: number };
export type DeskJournal = {
  schema: string;
  source: { kind: "demo" | "live"; platform: string; broker: string; statement: string; serverUtcOffsetHours: number };
  period: { from: string; to: string };
  summary: {
    trades: number;
    days: number;
    greenDays: number;
    redDays: number;
    net: number;
    twrPct: number;
    winRate: number;
    profitFactor: number;
    maxDrawdownUsd: number | null;
    bestDayNet: number;
    avgTradesPerDay: number;
  };
  daily: JournalDay[];
  bySymbol: { symbol: string; trades: number; net: number; winRate: number; medianMinutes: number }[];
  byHour: { hour: number; trades: number; net: number }[];
  byDuration: { bucket: string; trades: number; net: number; winRate: number }[];
};

export const deskJournal = data as DeskJournal;

const NUMBER_LOCALES: Record<Locale, string> = {
  en: "en-US",
  tr: "tr-TR",
  ar: "ar-u-nu-latn",
  ru: "ru-RU",
  fr: "fr-FR",
  es: "es-ES",
};

export type JournalFormat = {
  money: (n: number, signed?: boolean) => string;
  /**
   * Calendar-cell amount with a fixed "K" so it fits every locale ("+$3.1K", "-$544");
   * Intl compact notation is too long in ru/ar/es ("3,1 тыс.").
   */
  cellMoney: (n: number) => string;
  /** Same without currency or plus sign, for the narrowest cells ("3.1K", "-544"). */
  tiny: (n: number) => string;
  pct: (pct: number, digits?: number, signed?: boolean) => string;
  ratio: (n: number) => string;
  oneDecimal: (n: number) => string;
  int: (n: number) => string;
  date: (iso: string) => string;
  monthTitle: (year: number, month: number) => string;
};

const THOUSAND = 1000;
const WIDE_CELL = 10_000;

export function journalFormat(locale: Locale): JournalFormat {
  const tag = NUMBER_LOCALES[locale];
  // signDisplay "exceptZero" decides the sign after rounding, so nothing prints as "+0.0%" or "-0.0%".
  const money = (signed: boolean) =>
    new Intl.NumberFormat(tag, { style: "currency", currency: "USD", maximumFractionDigits: 0, signDisplay: signed ? "exceptZero" : "auto" });
  const moneySigned = money(true);
  const moneyPlain = money(false);
  const pctFormats = new Map<string, Intl.NumberFormat>();
  const pctFormat = (digits: number, signed: boolean) => {
    const key = `${digits}:${signed}`;
    if (!pctFormats.has(key))
      pctFormats.set(key, new Intl.NumberFormat(tag, { style: "percent", minimumFractionDigits: digits, maximumFractionDigits: digits, signDisplay: signed ? "exceptZero" : "auto" }));
    return pctFormats.get(key) as Intl.NumberFormat;
  };
  const kilo = (n: number, digits: number) => new Intl.NumberFormat(tag, { maximumFractionDigits: digits }).format(n / THOUSAND);
  const ratio = new Intl.NumberFormat(tag, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const oneDecimal = new Intl.NumberFormat(tag, { maximumFractionDigits: 1 });
  const int = new Intl.NumberFormat(tag);
  const date = new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  const month = new Intl.DateTimeFormat(tag, { month: "long", year: "numeric", timeZone: "UTC" });
  const tiny = (n: number) => {
    const abs = Math.abs(n);
    if (abs < THOUSAND) return int.format(Math.round(n));
    return `${kilo(n, abs < WIDE_CELL ? 1 : 0)}K`;
  };
  return {
    money: (n, signed = true) => (signed ? moneySigned : moneyPlain).format(n),
    cellMoney: (n) => {
      if (Math.abs(n) < THOUSAND) return moneySigned.format(n);
      return `${n < 0 ? "-" : "+"}$${tiny(Math.abs(n))}`;
    },
    tiny,
    pct: (pct, digits = 1, signed = true) => pctFormat(digits, signed).format(pct / 100),
    ratio: (n) => ratio.format(n),
    oneDecimal: (n) => oneDecimal.format(n),
    int: (n) => int.format(n),
    date: (iso) => date.format(new Date(`${iso}T00:00:00Z`)),
    monthTitle: (year, m) => month.format(new Date(Date.UTC(year, m, 1))),
  };
}

/** Months (UTC) covered by the journal, oldest first, as [year, monthIndex]. */
export function journalMonths(days: readonly JournalDay[]): [number, number][] {
  const keys = [...new Set(days.map((d) => d.date.slice(0, 7)))].sort();
  return keys.map((k) => [Number(k.slice(0, 4)), Number(k.slice(5, 7)) - 1]);
}

/** Calendar cells for one month, Monday first; null pads the leading days. */
export function monthCells(year: number, month: number): (string | null)[] {
  const first = new Date(Date.UTC(year, month, 1));
  const lead = (first.getUTCDay() + 6) % 7;
  const count = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells: (string | null)[] = Array.from({ length: lead }, () => null);
  for (let d = 1; d <= count; d += 1) cells.push(`${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
