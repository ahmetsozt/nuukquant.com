/** Grafik katmanlari. Her fonksiyon tek bir seyi cizer; durum tutmaz. */
import { formatR } from './scoring.js';

const GRID_LINES = 4;
const BODY_WIDTH = 0.62;
const TAG_HEIGHT = 18;
const MARKER_SIZE = 5;
const MARKER_GAP = 9;
const LABEL_FONT_PX = 11;
/** R etiketi yalnizca son islemlerde yazilir; eskiler cizgi olarak kalir. */
const LABELLED_RIDES = 2;

function formatPrice(price) {
  if (price >= 10000) return price.toFixed(0);
  if (price >= 100) return price.toFixed(2);
  return price.toFixed(3);
}

function setFont(g, theme, weight = 500) {
  g.font = `${weight} ${LABEL_FONT_PX}px ${theme.font}`;
  g.textBaseline = 'middle';
}

function hLine(g, x0, x1, y, color, dash = []) {
  g.save();
  g.strokeStyle = color;
  g.lineWidth = 1;
  g.setLineDash(dash);
  g.beginPath();
  g.moveTo(x0, Math.round(y) + 0.5);
  g.lineTo(x1, Math.round(y) + 0.5);
  g.stroke();
  g.restore();
}

/** Sag olukta renkli, beyaz yazili etiket. */
function gutterTag(g, frame, theme, y, text, bg) {
  setFont(g, theme, 700);
  g.fillStyle = bg;
  g.beginPath();
  g.roundRect(frame.plotW + 3, y - TAG_HEIGHT / 2, frame.w - frame.plotW - 6, TAG_HEIGHT, 4);
  g.fill();
  g.fillStyle = theme.ink;
  g.textAlign = 'left';
  g.fillText(text, frame.plotW + 8, y + 0.5);
}

export function drawGrid(g, frame, theme) {
  setFont(g, theme, 500);
  g.textAlign = 'left';
  for (let n = 0; n <= GRID_LINES; n++) {
    const price = frame.min + ((frame.max - frame.min) * n) / GRID_LINES;
    const y = frame.yOf(price);
    hLine(g, 0, frame.plotW, y, theme.grid);
    g.fillStyle = theme.label;
    g.fillText(formatPrice(price), frame.plotW + 8, y);
  }
}

export function drawCandles(g, frame, theme) {
  const bodyW = Math.max(1, frame.step * BODY_WIDTH);
  frame.visible.forEach((candle, n) => {
    const x = (n + 0.5) * frame.step;
    const color = candle.c >= candle.o ? theme.up : theme.down;
    const top = frame.yOf(Math.max(candle.o, candle.c));
    const height = Math.max(1, frame.yOf(Math.min(candle.o, candle.c)) - top);
    g.strokeStyle = color;
    g.fillStyle = color;
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(Math.round(x) + 0.5, frame.yOf(candle.h));
    g.lineTo(Math.round(x) + 0.5, frame.yOf(candle.l));
    g.stroke();
    g.fillRect(x - bodyW / 2, top, bodyW, height);
  });
}

function marker(g, x, y, dir) {
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x - MARKER_SIZE, y + dir * MARKER_SIZE * 1.6);
  g.lineTo(x + MARKER_SIZE, y + dir * MARKER_SIZE * 1.6);
  g.closePath();
  g.fill();
}

/**
 * Kapanmis setuplar kucuk ucgenle, girise acik olan adi ve stop cizgisiyle gosterilir.
 * Ad `scene.activeName` ile, etiketler `labels` ile oyuncunun dilinde gelir.
 */
export function drawSetups(g, frame, scene, theme, labels) {
  const shown = scene.setups.filter((setup) => setup.at >= frame.first && setup.at < frame.last);
  for (const setup of shown) {
    const candle = scene.candles[setup.at];
    const x = frame.xOfK(setup.at + 0.5);
    const isActive = setup === scene.active;
    const tipY = setup.dir > 0 ? frame.yOf(candle.l) + MARKER_GAP : frame.yOf(candle.h) - MARKER_GAP;
    g.globalAlpha = isActive ? 1 : 0.4;
    g.fillStyle = theme.cyan;
    marker(g, x, tipY, setup.dir);
    g.globalAlpha = 1;
    if (!isActive) continue;
    setFont(g, theme, 700);
    g.textAlign = 'center';
    g.fillStyle = theme.cyan;
    const labelX = Math.min(frame.plotW - 70, Math.max(70, x));
    g.fillText(scene.activeName ?? '', labelX, tipY + setup.dir * 24);
    hLine(g, x, frame.plotW, frame.yOf(setup.stop), theme.down, [4, 4]);
    gutterTag(g, frame, theme, frame.yOf(setup.stop), labels.stop, theme.down);
  }
}

/** Kapanmis islemler: giristen cikisa cizgi; son islemlerde R sonucu da yazilir. */
export function drawRides(g, frame, rides, theme) {
  rides.forEach((ride, index) => {
    if (ride.exitK < frame.first) return;
    const color = ride.r > 0 ? theme.up : theme.down;
    const x1 = frame.xOfK(ride.exitK);
    const y1 = frame.yOf(ride.exit);
    g.strokeStyle = theme.ink;
    g.fillStyle = color;
    g.lineWidth = 1.5;
    g.setLineDash([3, 3]);
    g.beginPath();
    g.moveTo(frame.xOfK(ride.entryK), frame.yOf(ride.entry));
    g.lineTo(x1, y1);
    g.stroke();
    g.setLineDash([]);
    g.beginPath();
    g.arc(x1, y1, 4, 0, Math.PI * 2);
    g.fill();
    if (index < rides.length - LABELLED_RIDES) return;
    setFont(g, theme, 700);
    g.textAlign = 'center';
    g.fillStyle = theme.ink;
    g.fillText(formatR(ride.r), Math.max(26, x1), y1 + (ride.r > 0 ? -14 : 14));
  });
}

/** Acik pozisyon: giris, stop ve hedef cizgileri ile kar / zarar bolgesi. */
export function drawPosition(g, frame, pos, theme, labels) {
  if (!pos) return;
  const x0 = Math.max(0, frame.xOfK(pos.entryK));
  const yEntry = frame.yOf(pos.entry);
  const yNow = frame.yOf(frame.price);
  const winning = pos.dir * (frame.price - pos.entry) >= 0;
  g.globalAlpha = 0.18;
  g.fillStyle = winning ? theme.up : theme.down;
  g.fillRect(x0, Math.min(yEntry, yNow), frame.plotW - x0, Math.abs(yNow - yEntry));
  g.globalAlpha = 1;
  hLine(g, x0, frame.plotW, yEntry, theme.ink, [2, 3]);
  hLine(g, x0, frame.plotW, frame.yOf(pos.stop), theme.down);
  hLine(g, x0, frame.plotW, frame.yOf(pos.target), theme.up);
  gutterTag(g, frame, theme, frame.yOf(pos.stop), labels.stop, theme.down);
  gutterTag(g, frame, theme, frame.yOf(pos.target), labels.target, theme.up);
}

export function drawPriceTag(g, frame, theme) {
  const y = frame.yOf(frame.price);
  hLine(g, frame.xOfK(frame.last + 1), frame.plotW, y, theme.primary, [1, 3]);
  gutterTag(g, frame, theme, y, formatPrice(frame.price), theme.primary);
}
