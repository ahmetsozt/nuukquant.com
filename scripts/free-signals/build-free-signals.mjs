#!/usr/bin/env node
/**
 * Builds src/data/free-signals.json (the public free-signals record at /free-signals/)
 * from the signal tracker in telegram-market-bot:
 *
 *   node scripts/free-signals/build-free-signals.mjs ~/Quant/telegram-market-bot/data
 *
 * Reads acik-sinyaller.json (every signal published to the NUUK. | Signals group) and
 * canli-sinyal-durum.json (what happened to it: TP, SL, never triggered). Every
 * published signal is listed, losses included; internal notes and sources are dropped.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const dataDir = args.find((a) => !a.startsWith("--"));
if (!dataDir) {
  console.error("usage: build-free-signals.mjs <telegram-market-bot/data> [--out src/data/free-signals.json]");
  process.exit(2);
}
const out = resolve(opt("--out", "src/data/free-signals.json"));

// The tracker writes naive timestamps in the Mac's local time (Dubai, GMT+4).
const TRACKER_UTC_OFFSET_HOURS = 4;
const SIDE = { AL: "LONG", SAT: "SHORT", LONG: "LONG", SHORT: "SHORT" };
const STATUS = { TP: "tp", SL: "sl", girissiz_iptal: "cancelled" };

const fail = (msg) => {
  console.error(`build-free-signals: ${msg} — nothing written`);
  process.exit(1);
};
const read = (name) => {
  try {
    return JSON.parse(readFileSync(join(dataDir, name), "utf8"));
  } catch (e) {
    fail(`cannot read ${name}: ${e.message}`);
  }
};

/** 1 pip in price units: gold 0.10 (NUUK's own definition), JPY pairs 0.01, other pairs 0.0001. */
function pipUnit(symbol, digits) {
  if (symbol.toUpperCase().startsWith("XAU")) return 0.1;
  if (symbol.toUpperCase().startsWith("XAG")) return 0.01;
  return digits <= 3 ? 0.01 : 0.0001;
}

/** ISO timestamp → UTC ISO string; naive tracker stamps are read as GMT+4. */
function toUtc(stamp) {
  if (!stamp) return null;
  const hasZone = /([+-]\d{2}:?\d{2}|Z)$/.test(stamp);
  const d = new Date(hasZone ? stamp : `${stamp}+0${TRACKER_UTC_OFFSET_HOURS}:00`);
  if (Number.isNaN(d.getTime())) fail(`bad timestamp ${stamp}`);
  return d.toISOString();
}

const round = (n, d) => Math.round(n * 10 ** d) / 10 ** d;

const published = read("acik-sinyaller.json");
const outcomes = read("canli-sinyal-durum.json");
if (!Array.isArray(published)) fail("acik-sinyaller.json is not a list");

const signals = published.map((s) => {
  const side = SIDE[s.yon];
  if (!side) fail(`${s.id}: unknown direction ${s.yon}`);
  const risk = Math.abs(s.giris - s.stop);
  const reward = Math.abs(s.hedef - s.giris);
  if (!(risk > 0 && reward > 0)) fail(`${s.id}: entry, stop and target do not form a trade`);
  const longOk = side === "LONG" ? s.stop < s.giris && s.giris < s.hedef : s.hedef < s.giris && s.giris < s.stop;
  if (!longOk) fail(`${s.id}: levels are on the wrong side for ${side}`);

  const o = outcomes[s.id];
  const status = o ? STATUS[o.hal] : s.giris_bekleniyor ? "waiting" : "open";
  if (!status) fail(`${s.id}: unknown outcome ${o.hal}`);
  const unit = pipUnit(s.sembol, s.basamak);
  const pips = status === "tp" ? reward / unit : status === "sl" ? -risk / unit : null;
  const r = status === "tp" ? reward / risk : status === "sl" ? -1 : null;
  return {
    id: s.id,
    symbol: s.sembol,
    side,
    digits: s.basamak,
    entry: s.giris,
    stop: s.stop,
    target: s.hedef,
    rr: round(reward / risk, 2),
    publishedAt: toUtc(s.acilis_broker),
    filledAt: toUtc(o?.giris_an),
    closedAt: toUtc(o?.cikis_an),
    status,
    pips: pips === null ? null : round(pips, 1),
    r: r === null ? null : round(r, 2),
  };
});

signals.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

const closed = signals.filter((s) => s.status === "tp" || s.status === "sl");
const wins = closed.filter((s) => s.status === "tp").length;
const summary = {
  published: signals.length,
  triggered: closed.length + signals.filter((s) => s.status === "open").length,
  tp: wins,
  sl: closed.length - wins,
  cancelled: signals.filter((s) => s.status === "cancelled").length,
  live: signals.filter((s) => s.status === "open" || s.status === "waiting").length,
  hitRate: closed.length ? round((wins / closed.length) * 100, 1) : null,
  netR: round(closed.reduce((t, s) => t + s.r, 0), 2),
  since: signals.at(-1)?.publishedAt ?? null,
};

const doc = { updatedAt: new Date().toISOString(), summary, signals };
writeFileSync(out, `${JSON.stringify(doc, null, 2)}\n`);
console.log(
  `free-signals: ${summary.published} published, ${summary.tp} TP / ${summary.sl} SL / ${summary.cancelled} not triggered, ` +
    `hit rate ${summary.hitRate}%, net ${summary.netR}R → ${out}`,
);
