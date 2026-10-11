/*
 * Square of 9 hesabı (arayüzden bağımsız, test edilebilir).
 * Seviye = (√fiyat ± açı/180)². 10'un altındaki fiyatlar (ör. EURUSD 1,0850) FX pratiğindeki
 * gibi pip ölçeğinde (10850) hesaplanır; diğerleri olduğu gibi kullanılır.
 * Tarayıcıda window.GannMath, Node'da module.exports olarak açılır.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.GannMath = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const ANGLES = Object.freeze([45, 90, 180, 360]);
  const MIN_PRICE = 0.0001;
  const MAX_PRICE = 10000000;
  const SMALL_PRICE = 10;
  const PIP_FLOOR = 10000;

  /**
   * Kullanıcı girdisini sayıya çevirir; geçersizse null döner.
   * @param {string} raw
   * @returns {number|null}
   */
  function parsePrice(raw) {
    const cleaned = String(raw).trim().replace(/\s/g, '');
    if (!/^\d+([.,]\d+)?$/.test(cleaned)) return null;
    const value = Number(cleaned.replace(',', '.'));
    if (!Number.isFinite(value) || value < MIN_PRICE || value > MAX_PRICE) return null;
    return value;
  }

  /**
   * Küçük fiyatları en az PIP_FLOOR olacak şekilde 10'un kuvvetiyle büyütür.
   * @param {number} price
   * @returns {number}
   */
  function scaleFor(price) {
    let factor = 1;
    if (price >= SMALL_PRICE) return factor;
    while (price * factor < PIP_FLOOR) factor *= 10;
    return factor;
  }

  /** @param {number} price @returns {number} gösterimde kullanılacak ondalık basamak */
  function decimalsFor(price) {
    if (price >= 1000) return 2;
    if (price >= 10) return 3;
    return 5;
  }

  /**
   * Her açı için üst (direnç) ve alt (destek) seviyeyi döndürür. Alt seviye sıfırın altına
   * düşüyorsa null olur.
   * @param {number} price
   * @returns {{angle:number, up:number, down:number|null}[]}
   */
  function levels(price) {
    const factor = scaleFor(price);
    const root = Math.sqrt(price * factor);
    return ANGLES.map((angle) => {
      const step = angle / 180;
      const down = root - step > 0 ? (root - step) ** 2 / factor : null;
      return Object.freeze({ angle, up: (root + step) ** 2 / factor, down });
    });
  }

  /**
   * Klasik 9×9 Square of 9 spirali: merkez 1, saat yönünün tersine büyür.
   * @param {number} [size=9] tek sayı olmalı
   * @returns {number[][]}
   */
  function spiral(size = 9) {
    const c = Math.floor(size / 2);
    const cells = Array.from({ length: size }, () => Array(size).fill(0));
    const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    const total = size * size;
    let x = c;
    let y = c;
    let n = 1;
    let len = 1;
    let d = 0;
    cells[y][x] = n;
    while (n < total) {
      for (let rep = 0; rep < 2 && n < total; rep += 1) {
        for (let s = 0; s < len && n < total; s += 1) {
          x += dirs[d][0];
          y += dirs[d][1];
          n += 1;
          cells[y][x] = n;
        }
        d = (d + 1) % 4;
      }
      len += 1;
    }
    return cells;
  }

  return Object.freeze({ ANGLES, parsePrice, scaleFor, decimalsFor, levels, spiral });
});
