import { test } from 'node:test';
import assert from 'node:assert/strict';
import { summarize, summarizeOutcomes, formatR } from '../../src/lib/trainer/scoring.js';
import { hashString, createRng, dayNumber, pickRound } from '../../src/lib/trainer/daily.js';
import { CONFIG } from '../../src/lib/trainer/config.js';
import { randomWalk } from './helpers.mjs';

test('summarize toplam R, kazanan ve disiplin puanini hesaplar', () => {
  const rides = [
    { r: 1.94, ruleBased: true },
    { r: -1.06, ruleBased: true },
    { r: -0.4, ruleBased: false },
    { r: 0.2, ruleBased: false },
  ];
  const sum = summarize(rides);
  assert.ok(Math.abs(sum.totalR - 0.68) < 1e-9);
  assert.equal(sum.count, 4);
  assert.equal(sum.wins, 2);
  assert.equal(sum.ruleBased, 2);
  assert.equal(sum.discipline, 50);
});

test('summarize islem yoksa disiplin puani vermez', () => {
  assert.deepEqual(summarize([]), { totalR: 0, count: 0, wins: 0, ruleBased: 0, discipline: null });
});

test('summarizeOutcomes mekanik sonuclari sayar', () => {
  const sum = summarizeOutcomes([{ reason: 'target' }, { reason: 'stop' }, { reason: 'stop' }, { reason: 'open' }, { reason: 'invalid' }]);
  assert.deepEqual(sum, { total: 5, target: 1, stop: 2, open: 1, invalid: 1 });
});

test('formatR isaretli ve tek ondalikli yazar', () => {
  assert.equal(formatR(1.94), '+1.9R');
  assert.equal(formatR(-1.06), '−1.1R');
  assert.equal(formatR(0), '0.0R');
  assert.equal(formatR(null), '—');
});

test('hashString ve createRng tekrarlanabilirdir', () => {
  assert.equal(hashString('2026-11-10'), hashString('2026-11-10'));
  assert.notEqual(hashString('2026-11-10'), hashString('2026-11-11'));
  const a = createRng(42);
  const b = createRng(42);
  for (let i = 0; i < 20; i++) {
    const v = a();
    assert.equal(v, b());
    assert.ok(v >= 0 && v < 1);
  }
});

test('dayNumber baslangic gununde 1 verir', () => {
  assert.equal(dayNumber('2026-11-10', '2026-11-10'), 1);
  assert.equal(dayNumber('2026-11-13', '2026-11-10'), 4);
});

test('pickRound ayni tohumla ayni pencereyi secer ve sinirlar icinde kalir', () => {
  const candles = randomWalk(600);
  const setups = [{ at: 200 }, { at: 210 }, { at: 220 }, { at: 400 }];
  const sets = [{ candles, setups }];
  const a = pickRound(sets, 123, CONFIG);
  assert.deepEqual(a, pickRound(sets, 123, CONFIG));
  assert.equal(a.setIndex, 0);
  assert.ok(a.startK >= CONFIG.WARMUP_BARS);
  assert.equal(a.endK, a.startK + CONFIG.PLAY_BARS);
  assert.ok(a.endK <= candles.length - 1);
});

test('pickRound veri yetersizse acik bir hata verir', () => {
  assert.throws(() => pickRound([{ candles: randomWalk(50), setups: [] }], 1, CONFIG), /Yetersiz veri/);
  assert.throws(() => pickRound([], 1, CONFIG), /Yetersiz veri/);
});
