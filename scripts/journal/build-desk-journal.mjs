#!/usr/bin/env node
/**
 * Builds src/data/desk-journal.json (the public desk trading journal) from the
 * verified statement analysis written by telegram-market-bot/scripts/ekstre_analiz.py.
 *
 *   node scripts/journal/build-desk-journal.mjs ~/Quant/telegram-market-bot/data/ekstre_analiz.json
 *
 * Every headline number is rebuilt a second way and must agree with the analysis,
 * otherwise nothing is written: compounding the daily returns must reproduce the
 * time-weighted return, and the daily rows must sum to the total net and trade count.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const input = args.find((a) => !a.startsWith("--"));
if (!input) {
  console.error("usage: build-desk-journal.mjs <ekstre_analiz.json> [--out src/data/desk-journal.json]");
  process.exit(2);
}
const out = resolve(opt("--out", "src/data/desk-journal.json"));

const SERVER_UTC_OFFSET_HOURS = 3; // Tickmill server time (GMT+3) in the statement
const RETURN_TOLERANCE_PCT = 0.01;
const MONEY_TOLERANCE = 0.05;
const DURATION_KEYS = { "0-5 dk": "0-5m", "5-30 dk": "5-30m", "30 dk-2 sa": "30m-2h", "2-8 sa": "2-8h", "8 sa+": "8h+" };

const round = (n, d = 2) => Math.round(n * 10 ** d) / 10 ** d;
const fail = (msg) => {
  console.error(`build-desk-journal: ${msg} — nothing written`);
  process.exit(1);
};

let a;
try {
  a = JSON.parse(readFileSync(input, "utf8"));
} catch (err) {
  // Python writes a bare `Infinity` when a custom-period statement has no opening balance.
  fail(`cannot read ${input} (${err.message}); export the statement with "All History"`);
}
const k = a.kapsam;
if (!k || !Array.isArray(a.gunluk) || a.gunluk.length === 0) fail("analysis has no kapsam/gunluk");
if (!Number.isFinite(k.zaman_agirlikli)) fail("time-weighted return is not finite (custom-period statement without opening balance?)");

const days = [...a.gunluk].sort((x, y) => x.gun.localeCompare(y.gun));
let index = 1;
const daily = days.map((d) => {
  index *= 1 + d.getiri;
  return { date: d.gun, net: round(d.net), retPct: round(d.getiri * 100, 3), cumPct: round((index - 1) * 100, 3), trades: d.islem, winRate: round(d.isabet, 4) };
});

const twrPct = k.zaman_agirlikli * 100;
const compoundedPct = (index - 1) * 100;
if (Math.abs(compoundedPct - twrPct) > RETURN_TOLERANCE_PCT) fail(`compounded daily returns ${compoundedPct.toFixed(3)}% ≠ time-weighted ${twrPct.toFixed(3)}%`);
const netSum = days.reduce((s, d) => s + d.net, 0);
if (Math.abs(netSum - k.net) > MONEY_TOLERANCE) fail(`daily net ${netSum.toFixed(2)} ≠ total ${k.net.toFixed(2)}`);
const tradeSum = days.reduce((s, d) => s + d.islem, 0);
if (tradeSum !== k.islem) fail(`daily trades ${tradeSum} ≠ total ${k.islem}`);
if (k.gun !== days.length) fail(`summary days ${k.gun} ≠ ${days.length} daily rows`);
const green = days.filter((d) => d.net > 0).length;
const red = days.filter((d) => d.net < 0).length;
if (k.yesil_gun !== green || k.kirmizi_gun !== red) fail(`green/red days ${k.yesil_gun}/${k.kirmizi_gun} ≠ ${green}/${red} from daily net`);
if (k.ilk.slice(0, 10) !== days[0].gun || k.son.slice(0, 10) !== days[days.length - 1].gun) fail("period does not match the first/last trading day");
for (const key of ["sembol", "saat", "sure"]) if (!Array.isArray(a[key])) fail(`analysis has no "${key}" breakdown`);

const byHour = Array.from({ length: 24 }, (_, hour) => {
  const h = a.saat.find((s) => s.saat === hour);
  return { hour, trades: h ? h.islem : 0, net: h ? round(h.net) : 0 };
});

const journal = {
  schema: "nuuk.desk-journal.v1",
  source: { kind: "demo", platform: "MT4", broker: "Tickmill", statement: "MT4 detailed statement, all history", serverUtcOffsetHours: SERVER_UTC_OFFSET_HOURS },
  period: { from: k.ilk.slice(0, 10), to: k.son.slice(0, 10) },
  summary: {
    trades: k.islem,
    days: k.gun,
    greenDays: k.yesil_gun,
    redDays: k.kirmizi_gun,
    net: round(k.net),
    twrPct: round(twrPct, 2),
    winRate: round(k.isabet, 4),
    profitFactor: round(k.kar_faktoru, 2),
    maxDrawdownUsd: a.dusus ? round(a.dusus.en_derin_usd) : null,
    bestDayNet: round(Math.max(...days.map((d) => d.net))),
    avgTradesPerDay: Math.round(k.islem / k.gun),
  },
  daily,
  bySymbol: [...a.sembol]
    .sort((x, y) => y.islem - x.islem)
    .map((s) => ({ symbol: s.sembol, trades: s.islem, net: round(s.net), winRate: round(s.isabet, 4), medianMinutes: s.medyan_sure })),
  byHour,
  byDuration: a.sure.map((s) => {
    const key = DURATION_KEYS[s.kova];
    if (!key) fail(`unknown duration bucket "${s.kova}"`);
    return { bucket: key, trades: s.islem, net: round(s.net), winRate: round(s.isabet, 4) };
  }),
};

writeFileSync(out, `${JSON.stringify(journal, null, 2)}\n`);
console.log(`desk journal: ${daily.length} days, ${k.islem} trades, +${journal.summary.twrPct}% → ${out}`);
