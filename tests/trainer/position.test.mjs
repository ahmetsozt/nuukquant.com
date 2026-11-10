import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openPosition, firstExit, closePosition, rAt } from '../../src/lib/trainer/position.js';
import { CONFIG } from '../../src/lib/trainer/config.js';
import { mk } from './helpers.mjs';

const near = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ~ ${b}`);
const long = () => openPosition({ dir: 1, entry: 100, entryK: 0, stop: 99 }, CONFIG);

test('openPosition riski ve 2R hedefi hesaplar', () => {
  const pos = long();
  assert.equal(pos.risk, 1);
  assert.equal(pos.target, 102);
  assert.equal(pos.ruleBased, false);
  const short = openPosition({ dir: -1, entry: 100, entryK: 0, stop: 100.5 }, CONFIG);
  assert.equal(short.risk, 0.5);
  assert.equal(short.target, 99);
});

test('openPosition stop yanlis taraftaysa null doner', () => {
  assert.equal(openPosition({ dir: 1, entry: 100, entryK: 0, stop: 100 }, CONFIG), null);
  assert.equal(openPosition({ dir: -1, entry: 100, entryK: 0, stop: 99 }, CONFIG), null);
});

test('rAt anlik sonucu R cinsinden verir', () => {
  near(rAt(long(), 101.5), 1.5);
  near(rAt(long(), 99.5), -0.5);
});

test('firstExit stop seviyesinin gecildigi ani bulur', () => {
  const candles = [mk(100, 100.5, 99.8, 100.2), mk(100.2, 100.3, 98.5, 98.8)];
  const exit = firstExit(candles, long(), 0, 2);
  assert.equal(exit.reason, 'stop');
  assert.equal(exit.price, 99);
  near(exit.k, 1 + 1 / 3 + (1.3 / 1.8) / 3);
});

test('firstExit hedefe ulasildiginda hedef fiyatindan kapatir', () => {
  const candles = [mk(100, 100.5, 99.8, 100.2), mk(100.2, 102.4, 100.1, 102.2)];
  const exit = firstExit(candles, long(), 0, 2);
  assert.equal(exit.reason, 'target');
  assert.equal(exit.price, 102);
});

test('firstExit seviye gecilmediyse null doner ve araligin disina bakmaz', () => {
  const candles = [mk(100, 100.5, 99.8, 100.2), mk(100.2, 100.3, 98.5, 98.8)];
  assert.equal(firstExit(candles, long(), 0, 1), null);
  assert.equal(firstExit(candles, long(), 0, 1.3), null);
});

test('firstExit bosluklu aciliste acilis fiyatindan kapatir', () => {
  const candles = [mk(100, 100.5, 99.8, 100.2), mk(98.6, 98.9, 98.2, 98.4)];
  const exit = firstExit(candles, long(), 0, 2);
  assert.equal(exit.reason, 'stop');
  assert.equal(exit.price, 98.6);
  near(exit.k, 1);
});

test('closePosition islem maliyetini R sonucundan duser', () => {
  const ride = closePosition(long(), { k: 1.5, price: 99, reason: 'stop' }, CONFIG);
  near(ride.grossR, -1);
  near(ride.costR, 0.06);
  near(ride.r, -1.06);
  assert.equal(ride.reason, 'stop');
  assert.equal(ride.exitK, 1.5);
});

test('closePosition setup bilgisini surus kaydina tasir', () => {
  const setup = { at: 5, kind: 'hammer', name: 'Çekiç', dir: 1, stop: 99 };
  const pos = openPosition({ dir: 1, entry: 100, entryK: 6, stop: 99, setup, ruleBased: true }, CONFIG);
  const ride = closePosition(pos, { k: 8, price: 102, reason: 'target' }, CONFIG);
  assert.equal(ride.setupName, 'Çekiç');
  assert.equal(ride.kind, 'hammer');
  assert.equal(ride.ruleBased, true);
  near(ride.r, 1.94);
});

test('firstExit acilis hedefin otesindeyse, mum sonra stopu sussa bile hedeften kapatir', () => {
  // Yukselen mum once dibini gezer: 103 -> 98. Acilis zaten hedefin (102) ustunde.
  const candles = [mk(100, 100.5, 99.8, 100.2), mk(103, 103.5, 98, 103.2)];
  const exit = firstExit(candles, long(), 0, 2);
  assert.equal(exit.reason, 'target');
  assert.equal(exit.price, 103);
  near(exit.k, 1);
});

test('openPosition asgari risk verilirse R birimi ondan kucuk olmaz, stop yerinde kalir', () => {
  const pos = openPosition({ dir: 1, entry: 100, entryK: 0, stop: 99.9, minRisk: 0.5 }, CONFIG);
  assert.equal(pos.stop, 99.9);
  assert.equal(pos.risk, 0.5);
  assert.equal(pos.target, 101);
  near(rAt(pos, 99.9), -0.2);
});
