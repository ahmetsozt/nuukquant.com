import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detectSetups, PATTERNS } from '../../src/lib/trainer/patterns.js';
import { CONFIG } from '../../src/lib/trainer/config.js';
import { mk, flat, slide, mirror, randomWalk } from './helpers.mjs';

const engulfingSeries = () => [...flat(20), ...slide(6, 100), mk(97, 97.1, 96.5, 96.6), mk(96.5, 97.7, 96.4, 97.6)];
const hammerSeries = () => [...flat(20), ...slide(7, 100), mk(96.5, 96.6, 95.2, 96.45)];
const starSeries = () => [
  ...flat(20),
  ...slide(5, 100),
  mk(97.5, 97.6, 96.3, 96.4),
  mk(96.35, 96.5, 96.1, 96.3),
  mk(96.35, 97.4, 96.3, 97.3),
];

test('yutan boga formasyonunu son mumda bulur', () => {
  const series = engulfingSeries();
  const setups = detectSetups(series, CONFIG);
  assert.equal(setups.length, 1);
  const [s] = setups;
  assert.equal(s.kind, 'engulfing');
  assert.equal(s.dir, 1);
  assert.equal(s.name, 'Yutan Boğa');
  assert.equal(s.at, series.length - 1);
  assert.ok(s.stop < 96.4, 'stop iki mumun dibinin altinda olmali');
});

test('ayni serinin aynasi ayi formasyonu verir ve stop ustte kalir', () => {
  const series = engulfingSeries().map(mirror);
  const [s] = detectSetups(series, CONFIG);
  assert.equal(s.dir, -1);
  assert.equal(s.name, 'Yutan Ayı');
  assert.ok(s.stop > 103.6);
});

test('cekic formasyonunu bulur', () => {
  const [s] = detectSetups(hammerSeries(), CONFIG);
  assert.equal(s.kind, 'hammer');
  assert.equal(s.name, 'Çekiç');
  assert.ok(s.stop < 95.2);
});

test('sabah yildizini bulur', () => {
  const setups = detectSetups(starSeries(), CONFIG);
  const s = setups.at(-1);
  assert.equal(s.kind, 'star');
  assert.equal(s.name, 'Sabah Yıldızı');
});

test('yonsuz seride setup uretmez', () => {
  assert.deepEqual(detectSetups(flat(80), CONFIG), []);
});

test('ileriye bakmaz: on ek uzerindeki sonuc tam serininkiyle aynidir', () => {
  const series = randomWalk(600);
  const full = detectSetups(series, CONFIG);
  assert.ok(full.length > 3, 'rastgele seride birkac setup beklenir');
  for (const cut of [150, 333, 480]) {
    const prefix = detectSetups(series.slice(0, cut), CONFIG);
    assert.deepEqual(prefix, full.filter((s) => s.at < cut));
  }
});

test('setuplar arasinda en az bosluk birakir ve stop dogru taraftadir', () => {
  const series = randomWalk(600, 11);
  const setups = detectSetups(series, CONFIG);
  for (let n = 0; n < setups.length; n++) {
    const s = setups[n];
    assert.ok(s.dir * (series[s.at].c - s.stop) > 0);
    if (n > 0) assert.ok(s.at - setups[n - 1].at >= CONFIG.SETUP_SPACING_BARS);
  }
});

test('her formasyonun iki adi ve bir dersi vardir', () => {
  for (const info of Object.values(PATTERNS)) {
    assert.equal(info.names.length, 2);
    assert.ok(info.lesson.length > 20);
  }
});
