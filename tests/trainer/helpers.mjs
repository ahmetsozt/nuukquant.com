/** Test yardimcilari: elle mum kurmak icin. */

export const mk = (o, h, l, c, t = 0) => ({ t, o, h, l, c, v: 1 });

/** Araligi 1 olan, yonu olmayan n mum (ATR ~ 1). */
export function flat(n, level = 100) {
  return Array.from({ length: n }, (_, i) => {
    const up = i % 2 === 0;
    return mk(level - (up ? 0.1 : -0.1), level + 0.5, level - 0.5, level + (up ? 0.1 : -0.1));
  });
}

/** `from` seviyesinden her mumda `step` kadar dusen n kirmizi mum. */
export function slide(n, from, step = 0.5) {
  return Array.from({ length: n }, (_, i) => {
    const o = from - i * step;
    const c = o - step;
    return mk(o, o + 0.25, c - 0.25, c);
  });
}

export const mirror = (c) => ({ ...c, o: 200 - c.o, h: 200 - c.l, l: 200 - c.h, c: 200 - c.c });

/** Tekrarlanabilir rastgele yuruyus. */
export function randomWalk(n, seed = 7) {
  let x = seed;
  const rnd = () => {
    x = (x * 1664525 + 1013904223) % 4294967296;
    return x / 4294967296;
  };
  const out = [];
  let p = 100;
  for (let i = 0; i < n; i++) {
    const o = p;
    const c = o + (rnd() - 0.5) * 2;
    const h = Math.max(o, c) + rnd() * 0.8;
    const l = Math.min(o, c) - rnd() * 0.8;
    out.push(mk(o, h, l, c, i * 300));
    p = c;
  }
  return out;
}
