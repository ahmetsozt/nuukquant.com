/* Gann Lab arayüzü: formu okur, GannMath ile seviyeleri hesaplar ve tabloyu çizer. */
(function () {
  'use strict';

  const math = window.GannMath;
  const form = document.getElementById('gann-form');
  const input = document.getElementById('gann-price');
  const errorEl = document.getElementById('gann-error');
  const ladder = document.getElementById('gann-ladder');
  const grid = document.getElementById('sq9-grid');
  if (!math || !form || !input || !ladder) return;

  const DEFAULT_PRICE = 4000;
  const isEn = document.documentElement.lang === 'en';
  const TEXT = isEn
    ? { resistance: 'Resistance', support: 'Support', input: 'Your price', error: 'Enter a valid price (for example 4000 or 1.0850).' }
    : { resistance: 'Direnç', support: 'Destek', input: 'Girilen fiyat', error: 'Geçerli bir fiyat gir (örneğin 4000 ya da 1,0850).' };

  function formatNumber(value, digits) {
    return value.toLocaleString(isEn ? 'en-US' : 'tr-TR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  }

  function row(label, value, kind, price, digits) {
    const li = document.createElement('li');
    li.className = `lv lv-${kind}`;
    const name = document.createElement('span');
    name.textContent = label;
    const val = document.createElement('span');
    val.className = 'mono';
    val.textContent = formatNumber(value, digits);
    const diff = document.createElement('span');
    diff.className = 'mono lv-pct';
    if (kind === 'now') {
      diff.textContent = '—';
    } else {
      const pct = ((value - price) / price) * 100;
      diff.textContent = `${pct > 0 ? '+' : ''}${formatNumber(pct, 2)}%`;
    }
    li.append(name, val, diff);
    return li;
  }

  function render(price) {
    const digits = math.decimalsFor(price);
    const rows = math.levels(price);
    const list = document.createElement('ol');
    list.className = 'lv-list';
    [...rows].reverse().forEach((l) => list.append(row(`${TEXT.resistance} ${l.angle}°`, l.up, 'up', price, digits)));
    list.append(row(TEXT.input, price, 'now', price, digits));
    rows.forEach((l) => {
      if (l.down !== null) list.append(row(`${TEXT.support} ${l.angle}°`, l.down, 'down', price, digits));
    });
    ladder.replaceChildren(list);
  }

  function showError(message) {
    errorEl.textContent = message;
    errorEl.hidden = !message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const price = math.parsePrice(input.value);
    if (price === null) {
      showError(TEXT.error);
      return;
    }
    showError('');
    render(price);
  });

  /* 9×9 spiral; yatay-dikey eksen 90°, çaprazlar 45° açıları gösterir. */
  function buildSpiral() {
    if (!grid) return;
    const cells = math.spiral(9);
    const c = 4;
    const frag = document.createDocumentFragment();
    cells.forEach((rowCells, r) => rowCells.forEach((v, col) => {
      const span = document.createElement('span');
      const cardinal = r === c || col === c;
      const ordinal = Math.abs(r - c) === Math.abs(col - c);
      span.className = v === 1 ? 'sq-center' : cardinal ? 'sq-card' : ordinal ? 'sq-ord' : '';
      span.textContent = String(v);
      frag.append(span);
    }));
    grid.replaceChildren(frag);
  }

  buildSpiral();
  render(math.parsePrice(input.value) ?? DEFAULT_PRICE);
})();
