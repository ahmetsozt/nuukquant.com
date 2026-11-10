import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRound, activeSetup, enterableSetup, advance, mechanicalOutcomes } from '../../src/lib/trainer/round.js';
import { CONFIG } from '../../src/lib/trainer/config.js';
import { mk, flat } from './helpers.mjs';

const ctxOf = (candles, setups = []) => ({ candles, setups, cfg: CONFIG });
const calm = () => flat(60);

test('activeSetup yalnizca mumu kapanmis ve penceresi dolmamis setupi verir', () => {
  const setups = [{ at: 10, dir: 1, stop: 99 }];
  assert.equal(activeSetup(setups, 10.9, CONFIG), null);
  assert.equal(activeSetup(setups, 11, CONFIG), setups[0]);
  assert.equal(activeSetup(setups, 10 + CONFIG.ENTRY_WINDOW_BARS + 0.99, CONFIG), setups[0]);
  assert.equal(activeSetup(setups, 11 + CONFIG.ENTRY_WINDOW_BARS, CONFIG), null);
});

test('basili tutunca pozisyon acilir, birakinca manuel kapanir', () => {
  const ctx = ctxOf(calm());
  const s0 = createRound({ startK: 30, endK: 50 });
  const s1 = advance(ctx, s0, 0.2, 1);
  assert.ok(s1.pos);
  assert.equal(s1.pos.ruleBased, false);
  assert.equal(s1.rides.length, 0);
  const s2 = advance(ctx, s1, 0.2, 0);
  assert.equal(s2.pos, null);
  assert.equal(s2.rides.length, 1);
  assert.equal(s2.rides[0].reason, 'manual');
  assert.equal(s0.pos, null, 'onceki durum degismemeli');
});

test('aktif setup yonunde giris kurala uygun sayilir ve setup stopunu kullanir', () => {
  const setup = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 98.9 };
  const ctx = ctxOf(calm(), [setup]);
  const s1 = advance(ctx, createRound({ startK: 30, endK: 50 }), 0.1, 1);
  assert.equal(s1.pos.ruleBased, true);
  assert.equal(s1.pos.stop, 98.9);
  const against = advance(ctx, createRound({ startK: 30, endK: 50 }), 0.1, -1);
  assert.equal(against.pos.ruleBased, false);
});

test('stopa yakin giris kurala uygundur; R birimi asgari riskten kucuk olmaz', () => {
  const tight = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 99.8 };
  const ctx = ctxOf(calm(), [tight]);
  const s0 = createRound({ startK: 30, endK: 50 });
  assert.equal(enterableSetup(ctx, s0), tight);
  const { pos } = advance(ctx, s0, 0.01, 1);
  assert.equal(pos.ruleBased, true);
  assert.equal(pos.stop, 99.8, 'stop formasyonun seviyesinde kalir');
  assert.ok(Math.abs(pos.risk - CONFIG.MIN_RISK_ATR) < 1e-9, 'ATR 1 iken R birimi asgari risk');
  assert.ok(Math.abs(pos.target - (99.9 + 2 * CONFIG.MIN_RISK_ATR)) < 1e-9);
});

test('bir setup yalnizca bir kez kurala uygun giris verir', () => {
  const setup = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 98.9 };
  const ctx = ctxOf(calm(), [setup]);
  const s0 = createRound({ startK: 30, endK: 50 });
  assert.equal(enterableSetup(ctx, s0), setup);
  const used = advance(ctx, advance(ctx, s0, 0.1, 1), 0.1, 0);
  assert.equal(used.rides[0].setupAt, 29);
  assert.equal(enterableSetup(ctx, used), null);
  assert.equal(advance(ctx, used, 0.1, 1).pos.ruleBased, false, 'ikinci giris kural disi');
});

test('stop olunca otomatik kapanir ve el birakilmadan yeniden acilmaz', () => {
  const candles = [...flat(30), mk(100, 100.2, 95, 95.5), ...flat(20, 95.5)];
  const ctx = ctxOf(candles);
  const s1 = advance(ctx, createRound({ startK: 30, endK: 45 }), 1, 1);
  assert.equal(s1.pos, null);
  assert.equal(s1.rides[0].reason, 'stop');
  assert.equal(s1.needRelease, true);
  const s2 = advance(ctx, s1, 0.5, 1);
  assert.equal(s2.pos, null, 'hala basili: yeniden girmemeli');
  const s3 = advance(ctx, advance(ctx, s2, 0.1, 0), 0.1, 1);
  assert.ok(s3.pos, 'birakip yeniden basinca girer');
});

test('yon degistirmek pozisyonu kapatir, yenisini acmaz', () => {
  const ctx = ctxOf(calm());
  const s1 = advance(ctx, createRound({ startK: 30, endK: 50 }), 0.1, 1);
  const s2 = advance(ctx, s1, 0.1, -1);
  assert.equal(s2.pos, null);
  assert.equal(s2.rides.length, 1);
  assert.equal(s2.needRelease, true);
});

test('tur bitince acik pozisyon sure nedeniyle kapanir', () => {
  const ctx = ctxOf(calm());
  const s1 = advance(ctx, createRound({ startK: 30, endK: 31 }), 0.5, 1);
  const s2 = advance(ctx, s1, 5, 1);
  assert.equal(s2.done, true);
  assert.equal(s2.k, 31);
  assert.equal(s2.rides.at(-1).reason, 'time');
  assert.equal(advance(ctx, s2, 1, 1), s2, 'biten tur ilerlemez');
});

test('mechanicalOutcomes her setupi sonraki mumun acilisindan mekanik oynatir', () => {
  const candles = [...flat(30), mk(100, 102.5, 99.9, 102.3), ...flat(10, 102.3), mk(102.3, 102.4, 97, 97.2), ...flat(70, 97.2)];
  const win = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 99 };
  const lose = { at: 40, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 101 };
  const outside = { at: 5, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 99 };
  const outcomes = mechanicalOutcomes(ctxOf(candles, [outside, win, lose]), 28, 60);
  assert.equal(outcomes.length, 2);
  assert.equal(outcomes[0].reason, 'target');
  assert.ok(outcomes[0].r > 1.8);
  assert.equal(outcomes[1].reason, 'stop');
});

test('mechanicalOutcomes sonuclanmayan setupi acik olarak isaretler', () => {
  const setup = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 90 };
  const [outcome] = mechanicalOutcomes(ctxOf(calm(), [setup]), 28, 50);
  assert.equal(outcome.reason, 'open');
  assert.equal(outcome.r, null);
});

test('mechanicalOutcomes tur basinda hala girise acik olan isinma setuplarini da sayar', () => {
  const candles = [...flat(30), mk(100, 102.5, 99.9, 102.3), ...flat(40, 102.3)];
  const warm = { at: 30 - CONFIG.ENTRY_WINDOW_BARS, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 90 };
  const tooOld = { at: 30 - CONFIG.ENTRY_WINDOW_BARS - 1, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 90 };
  const ctx = ctxOf(candles, [tooOld, warm]);
  assert.equal(activeSetup(ctx.setups, 30, CONFIG), warm, 'oyuncu tur basinda bu setupa girebilir');
  const outcomes = mechanicalOutcomes(ctx, 30, 60);
  assert.deepEqual(outcomes.map((o) => o.setup), [warm]);
});

test('mechanicalOutcomes sonraki acilis stopun otesindeyse setupi gecersiz sayar', () => {
  const gapped = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 101 };
  const [outcome] = mechanicalOutcomes(ctxOf(calm(), [gapped]), 28, 50);
  assert.equal(outcome.reason, 'invalid');
  assert.equal(outcome.r, null);
});

test('setup, fiyat stopa degene kadar kilitli kalir; degdikten sonra geri gelmez', () => {
  // 30. mumun yolu: 99.9 -> 99.5 -> 100.5 -> 100.1. Stop 99.6: dip ona degiyor.
  const setup = { at: 29, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 99.6 };
  const ctx = ctxOf(calm(), [setup]);
  const at = (k) => ({ ...createRound({ startK: 30, endK: 50 }), k });
  assert.equal(enterableSetup(ctx, at(30)), setup);
  assert.equal(enterableSetup(ctx, at(30.2)), setup, 'stopa yaklasmak kilidi bozmaz');
  assert.equal(enterableSetup(ctx, at(30.34)), null, 'dip stopa degdi');
  assert.equal(enterableSetup(ctx, at(30.9)), null, 'fiyat geri donse de setup gecersiz kalir');
  assert.equal(enterableSetup(ctx, at(32.5)), null);
});
