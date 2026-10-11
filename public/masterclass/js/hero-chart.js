/* Hero grafiği: tohumlu rastgele mumlar, dip noktasından Gann fanı, son mumda ATR stop ve 1:4 hedef. */
(function () {
  'use strict';

  const svg = document.getElementById('hero-chart');
  if (!svg) return;

  const NS = 'http://www.w3.org/2000/svg';
  const W = 960;
  const H = 400;
  const CANDLES = 64;
  const PAD_TOP = 36;
  const PAD_BOTTOM = 36;
  const STEP = W / (CANDLES + 16); // sağda stop/hedef etiketleri için boşluk
  const ATR_PERIOD = 14;
  const ATR_MULT = 1.5;
  const REWARD_RISK = 4;

  // Her yüklemede aynı grafiği üretmek için basit LCG
  function seeded(seed) {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  }

  function makeCandles() {
    const rnd = seeded(20261011);
    const out = [];
    let price = 100;
    for (let i = 0; i < CANDLES; i += 1) {
      // Önce düşüş, dip, sonra trend: Gann fanı için okunur bir yapı
      const drift = i < 18 ? -0.55 : i < 24 ? 0.05 : 0.48;
      const open = price;
      const close = open + drift + (rnd() - 0.5) * 3.2;
      const high = Math.max(open, close) + rnd() * 1.6;
      const low = Math.min(open, close) - rnd() * 1.6;
      out.push({ open, close, high, low });
      price = close;
    }
    return out;
  }

  function atr(candles, period) {
    const ranges = candles.slice(-period).map((c, i, arr) => {
      const prevClose = i > 0 ? arr[i - 1].close : c.open;
      return Math.max(c.high - c.low, Math.abs(c.high - prevClose), Math.abs(c.low - prevClose));
    });
    return ranges.reduce((a, b) => a + b, 0) / ranges.length;
  }

  function el(name, attrs) {
    const node = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
    return node;
  }

  function draw() {
    const candles = makeCandles();
    const last = candles[candles.length - 1];
    const risk = atr(candles, ATR_PERIOD) * ATR_MULT;
    const stop = last.close - risk;
    const target = last.close + risk * REWARD_RISK;

    const lows = candles.map((c) => c.low).concat(stop);
    const highs = candles.map((c) => c.high).concat(target);
    const min = Math.min(...lows);
    const max = Math.max(...highs);
    const y = (p) => PAD_TOP + (1 - (p - min) / (max - min)) * (H - PAD_TOP - PAD_BOTTOM);
    const x = (i) => STEP * (i + 1);

    const frag = document.createDocumentFragment();

    // Yatay kılavuz çizgileri
    for (let g = 1; g < 5; g += 1) {
      frag.append(el('line', { x1: 0, x2: W, y1: (H / 5) * g, y2: (H / 5) * g, class: 'c-grid' }));
    }

    // Gann fanı: dip mumdan 1×2, 1×1, 2×1 açıları
    const pivotIdx = candles.reduce((best, c, i) => (c.low < candles[best].low ? i : best), 0);
    const px = x(pivotIdx);
    const py = y(candles[pivotIdx].low);
    const unit = (max - min) / CANDLES; // 1 mum = 1 fiyat birimi kabulü
    const fan = el('g', { class: 'c-fan' });
    const sx0 = x(CANDLES - 1);
    [[0.5, '1×2'], [1, '1×1'], [2, '2×1']].forEach(([k, label]) => {
      const x2 = sx0;
      const bars = (x2 - px) / STEP;
      const y2 = y(candles[pivotIdx].low + bars * unit * k);
      fan.append(el('line', { x1: px, y1: py, x2, y2, class: k === 1 ? 'c-fan-main' : '' }));
      const t = el('text', { x: sx0 - 6, y: Math.max(14, y2 - 6), 'text-anchor': 'end', class: 'c-label' });
      t.textContent = label;
      fan.append(t);
    });
    frag.append(fan);

    // Mumlar
    const body = Math.max(3, STEP * 0.56);
    candles.forEach((c, i) => {
      const up = c.close >= c.open;
      const g = el('g', { class: `c-candle ${up ? 'up' : 'down'}`, style: `--i:${i}` });
      g.append(el('line', { x1: x(i), x2: x(i), y1: y(c.high), y2: y(c.low) }));
      const top = y(Math.max(c.open, c.close));
      g.append(el('rect', { x: x(i) - body / 2, y: top, width: body, height: Math.max(1.5, y(Math.min(c.open, c.close)) - top), rx: 1 }));
      frag.append(g);
    });

    // Stop ve hedef bandı
    const sx = x(CANDLES - 1);
    const zone = el('g', { class: 'c-zone' });
    zone.append(el('rect', { x: sx, y: y(target), width: W - sx, height: y(last.close) - y(target), class: 'c-tp' }));
    zone.append(el('rect', { x: sx, y: y(last.close), width: W - sx, height: y(stop) - y(last.close), class: 'c-sl' }));
    (document.documentElement.lang === 'en'
      ? [['TARGET 4R', target, 'c-label up'], ['STOP 1.5×ATR', stop, 'c-label down']]
      : [['HEDEF 4R', target, 'c-label up'], ['STOP 1,5×ATR', stop, 'c-label down']]).forEach(([label, p, cls]) => {
      const t = el('text', { x: W - 8, y: y(p) + (p === stop ? 16 : -8), 'text-anchor': 'end', class: cls });
      t.textContent = label;
      zone.append(t);
    });
    frag.append(zone);

    svg.append(frag);
    svg.classList.add('is-drawn');
  }

  draw();
})();
