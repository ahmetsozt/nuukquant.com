/** Tuval grafigi: olcek hesabi ve katmanlarin sirasi. Cizimler chart-layers.js icinde. */
import { partialCandle } from './candles.js';
import { drawGrid, drawCandles, drawSetups, drawRides, drawPosition, drawPriceTag } from './chart-layers.js';

const RIGHT_GUTTER = 62;
const PAD_TOP = 18;
const PAD_BOTTOM = 14;
const RIGHT_PAD_BARS = 4;
const MIN_BARS = 36;
const MAX_BARS = 96;
const TARGET_BAR_PX = 10;
const Y_PADDING = 0.08;

/** Site paleti (globals.css @theme). Degisken sayfada uretilmediyse bu degerler kullanilir. */
const SITE_COLORS = Object.freeze({
  '--color-hero': '#0a0a0a',
  '--color-soft': '#d4d4d4',
  '--color-cyan': '#00d3f3',
  '--color-primary': '#0165fa',
  '--color-up': '#12a37f',
  '--color-down': '#e5484d',
});

/**
 * @returns {Readonly<Record<string, string>>} sitenin CSS degiskenlerinden okunan renkler
 */
export function readTheme() {
  const style = getComputedStyle(document.documentElement);
  const read = (name) => style.getPropertyValue(name).trim() || SITE_COLORS[name];
  return Object.freeze({
    bg: read('--color-hero'),
    ink: '#ffffff',
    label: 'rgba(255, 255, 255, 0.55)',
    grid: 'rgba(255, 255, 255, 0.08)',
    cyan: read('--color-cyan'),
    primary: read('--color-primary'),
    up: read('--color-up'),
    down: read('--color-down'),
    font: getComputedStyle(document.body).fontFamily,
  });
}

function priceRange(visible, scene) {
  const levels = [];
  if (scene.state.pos) levels.push(scene.state.pos.stop, scene.state.pos.target);
  if (scene.active) levels.push(scene.active.stop);
  const lo = Math.min(...visible.map((c) => c.l), ...levels);
  const hi = Math.max(...visible.map((c) => c.h), ...levels);
  const pad = (hi - lo || hi * 0.001) * Y_PADDING;
  return { min: lo - pad, max: hi + pad };
}

/** Bu karede gorunen pencere ve fiyat / zaman olcekleri. */
function buildFrame(scene, size) {
  const { candles, state } = scene;
  const plotW = size.w - RIGHT_GUTTER;
  const bars = Math.min(MAX_BARS, Math.max(MIN_BARS, Math.floor(plotW / TARGET_BAR_PX)));
  const last = Math.min(candles.length - 1, Math.floor(state.k));
  const first = Math.max(0, last - (bars - RIGHT_PAD_BARS) + 1);
  const step = plotW / bars;
  const forming = partialCandle(candles[last], state.k - last);
  const visible = [...candles.slice(first, last), forming];
  const { min, max } = priceRange(visible, scene);
  const plotH = size.h - PAD_TOP - PAD_BOTTOM;
  return Object.freeze({
    first,
    last,
    step,
    visible,
    plotW,
    w: size.w,
    h: size.h,
    price: forming.c,
    min,
    max,
    xOfK: (k) => (k - first) * step,
    yOf: (price) => PAD_TOP + ((max - price) / (max - min)) * plotH,
  });
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {ReturnType<typeof readTheme>} theme
 * @param {{ stop: string, target: string }} labels tuvale yazilan sabit etiketler, oyuncunun dilinde
 */
export function createChart(canvas, theme, labels) {
  const g = canvas.getContext('2d');
  if (!g) throw new Error('Tuval desteklenmiyor');
  let size = { w: 0, h: 0 };
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    size = { w: rect.width, h: rect.height };
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  /** @param {{ candles: object[], setups: object[], state: object, active: object | null, activeName: string | null }} scene */
  const draw = (scene) => {
    if (size.w < RIGHT_GUTTER * 2 || size.h < PAD_TOP * 4) return;
    const frame = buildFrame(scene, size);
    g.clearRect(0, 0, size.w, size.h);
    drawGrid(g, frame, theme);
    drawCandles(g, frame, theme);
    drawSetups(g, frame, scene, theme, labels);
    drawRides(g, frame, scene.state.rides, theme);
    drawPosition(g, frame, scene.state.pos, theme, labels);
    drawPriceTag(g, frame, theme);
  };

  return { draw, destroy: () => observer.disconnect() };
}
