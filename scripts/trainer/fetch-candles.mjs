/*
 * Hyperliquid'in acik "candleSnapshot" ucundan 1 saatlik mumlari ceker ve
 * public/trainer/ altina statik JSON olarak yazar. Oyun yalnizca bu dosyalari okur;
 * boylece "gunun grafigi" herkes icin ayni kalir.
 *
 * Kullanim: node scripts/trainer/fetch-candles.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENDPOINT = 'https://api.hyperliquid.xyz/info';
const INTERVAL = '1h';
const INTERVAL_MS = 60 * 60 * 1000;
const BARS = 4900;
const COINS = ['BTC', 'ETH', 'SOL'];
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'trainer');

async function fetchCandles(coin, startTime, endTime) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'candleSnapshot', req: { coin, interval: INTERVAL, startTime, endTime } }),
  });
  if (!res.ok) throw new Error(`${coin}: HTTP ${res.status}`);
  const raw = await res.json();
  if (!Array.isArray(raw) || raw.length === 0) throw new Error(`${coin}: bos yanit`);
  return raw;
}

function toRow(c) {
  const row = [Math.round(c.t / 1000), Number(c.o), Number(c.h), Number(c.l), Number(c.c), Number(c.v)];
  if (!row.every(Number.isFinite)) throw new Error('Gecersiz mum: ' + JSON.stringify(c));
  return row;
}

function countGaps(rows) {
  let gaps = 0;
  for (let i = 1; i < rows.length; i++) if (rows[i][0] - rows[i - 1][0] !== INTERVAL_MS / 1000) gaps++;
  return gaps;
}

async function main() {
  // Son (henuz kapanmamis) mumu disarida birak.
  const endTime = Math.floor(Date.now() / INTERVAL_MS) * INTERVAL_MS - 1;
  const startTime = endTime - BARS * INTERVAL_MS + 1;
  await mkdir(OUT_DIR, { recursive: true });
  const sets = [];
  for (const coin of COINS) {
    const rows = (await fetchCandles(coin, startTime, endTime)).map(toRow);
    const file = `${coin.toLowerCase()}-${INTERVAL}.json`;
    const doc = { sym: coin, quote: 'USD', tf: INTERVAL, source: 'Hyperliquid', rows };
    await writeFile(join(OUT_DIR, file), JSON.stringify(doc));
    sets.push({ sym: coin, tf: INTERVAL, file, bars: rows.length, from: rows[0][0], to: rows.at(-1)[0], gaps: countGaps(rows) });
    console.log(`${coin}: ${rows.length} mum, ${sets.at(-1).gaps} bosluk`);
  }
  const manifest = { version: 1, createdAt: new Date().toISOString(), source: 'Hyperliquid candleSnapshot', sets };
  await writeFile(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
}

main().catch((err) => {
  console.error('Veri cekilemedi:', err.message);
  process.exitCode = 1;
});
