import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toCandles, barPath, priceAt, partialCandle, atr } from '../../src/lib/trainer/candles.js';
import { mk, flat } from './helpers.mjs';

test('toCandles satirlari nesneye cevirir', () => {
  const candles = toCandles([[10, 1, 3, 0.5, 2, 9]]);
  assert.deepEqual(candles, [{ t: 10, o: 1, h: 3, l: 0.5, c: 2, v: 9 }]);
});

test('toCandles bozuk veride acik bir hata firlatir', () => {
  assert.throws(() => toCandles([[10, 1, 'x', 0.5, 2, 9]]), /Geçersiz mum/);
  assert.throws(() => toCandles([[10, 1, 0.9, 0.5, 2, 9]]), /Geçersiz mum/);
  assert.throws(() => toCandles('nope'), /Mum verisi/);
});

test('barPath yukselen mumda once dibi, dusen mumda once tepeyi gezer', () => {
  assert.deepEqual(barPath(mk(100, 102, 99, 101)), [100, 99, 102, 101]);
  assert.deepEqual(barPath(mk(100, 102, 99, 99.5)), [100, 102, 99, 99.5]);
});

test('priceAt mumun icinde yolu dogrusal izler', () => {
  const candles = [mk(100, 102, 99, 101), mk(101, 101.5, 100, 100.5)];
  assert.equal(priceAt(candles, 0), 100);
  assert.equal(priceAt(candles, 1 / 3), 99);
  assert.ok(Math.abs(priceAt(candles, 0.5) - 100.5) < 1e-9);
  assert.equal(priceAt(candles, 1), 101);
  assert.equal(priceAt(candles, 99), 100.5);
});

test('partialCandle o ana kadar gorulen en yuksek ve en dusugu verir', () => {
  const candle = mk(100, 102, 99, 101);
  const early = partialCandle(candle, 1 / 3);
  assert.deepEqual({ o: early.o, h: early.h, l: early.l, c: early.c }, { o: 100, h: 100, l: 99, c: 99 });
  const full = partialCandle(candle, 1);
  assert.deepEqual({ h: full.h, l: full.l, c: full.c }, { h: 102, l: 99, c: 101 });
});

test('atr duz seride mum araligina esittir', () => {
  const candles = flat(30);
  assert.ok(Math.abs(atr(candles, 29, 14) - 1) < 1e-9);
});

test('atr az veride eldeki mumlarla calisir', () => {
  const candles = flat(3);
  assert.ok(atr(candles, 0, 14) > 0);
  assert.ok(atr(candles, 2, 14) > 0);
});
