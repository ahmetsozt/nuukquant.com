#!/usr/bin/env node
/**
 * Builds public/data/daily-pnl.json from a MetaTrader 4/5 statement export.
 *
 * Accepts either the HTML "Detailed Statement" / "Report" or a CSV export of
 * closed deals. Aggregates realised profit (profit + commission + swap) by
 * close date. Never invents data: with no deals the feed stays empty and the
 * site shows nothing.
 *
 *   node scripts/pnl/import-mt-statement.mjs path/to/Statement.html
 *   node scripts/pnl/import-mt-statement.mjs path/to/deals.csv --currency USD
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [, , input, ...rest] = process.argv;
if (!input) {
  console.error("usage: import-mt-statement.mjs <statement.html|deals.csv> [--currency USD] [--out public/data/daily-pnl.json]");
  process.exit(1);
}
const opt = (name, def) => {
  const i = rest.indexOf(name);
  return i >= 0 ? rest[i + 1] : def;
};
const currency = opt("--currency", "USD");
const out = resolve(opt("--out", "public/data/daily-pnl.json"));
const raw = readFileSync(input, "utf8");

/** @type {{date: string, profit: number}[]} */
let deals = [];
if (/<table|<tr/i.test(raw)) {
  // HTML statement: rows whose first cells are ticket, open time, type, size, symbol, ..., close time, ..., commission, swap, profit
  const rows = raw.split(/<tr[^>]*>/i).slice(1);
  for (const row of rows) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => m[1].replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim());
    if (cells.length < 10) continue;
    const type = cells[2]?.toLowerCase();
    if (!/^(buy|sell)/.test(type ?? "")) continue;
    const closeTime = cells.find((c, i) => i > 4 && /^\d{4}[.\-/]\d{2}[.\-/]\d{2}/.test(c));
    if (!closeTime) continue;
    const nums = cells.slice(-3).map((c) => Number(c.replace(/[^0-9.\-]/g, "")));
    if (nums.some((n) => Number.isNaN(n))) continue;
    deals.push({ date: closeTime.slice(0, 10).replace(/[./]/g, "-"), profit: nums[0] + nums[1] + nums[2] });
  }
} else {
  // CSV: needs columns matching /close ?time/i, /profit/i; optional /commission/i and /swap/i
  const lines = raw.split(/\r?\n/).filter(Boolean);
  const sep = lines[0].includes(";") ? ";" : lines[0].includes("\t") ? "\t" : ",";
  const head = lines[0].split(sep).map((h) => h.trim().toLowerCase());
  const col = (re) => head.findIndex((h) => re.test(h));
  const iClose = col(/close ?time|time close|closed/), iProfit = col(/^profit/), iComm = col(/commission/), iSwap = col(/swap/);
  if (iClose < 0 || iProfit < 0) {
    console.error("CSV must contain close time and profit columns");
    process.exit(1);
  }
  for (const line of lines.slice(1)) {
    const f = line.split(sep);
    const num = (i) => (i >= 0 ? Number(String(f[i]).replace(/[^0-9.\-]/g, "")) || 0 : 0);
    const date = String(f[iClose]).trim().slice(0, 10).replace(/[./]/g, "-");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    deals.push({ date, profit: num(iProfit) + num(iComm) + num(iSwap) });
  }
}

const byDay = new Map();
for (const d of deals) {
  const day = byDay.get(d.date) ?? { date: d.date, closedPnl: 0, trades: 0, wins: 0 };
  day.closedPnl += d.profit;
  day.trades += 1;
  if (d.profit > 0) day.wins += 1;
  byDay.set(d.date, day);
}
const days = [...byDay.values()].sort((a, b) => a.date.localeCompare(b.date)).map((d) => ({ ...d, closedPnl: Math.round(d.closedPnl * 100) / 100 }));
const feed = { schema: "nuuk.daily-pnl.v1", currency, account: "NUUK proprietary desk (MT5)", updated: days.length ? new Date().toISOString() : null, days };
writeFileSync(out, JSON.stringify(feed, null, 2) + "\n");
console.log(`${deals.length} deals → ${days.length} days → ${out}`);
