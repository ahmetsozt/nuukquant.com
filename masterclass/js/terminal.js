/* Vibecoding terminali: görünür olunca satırları sırayla yazar. Hareket azaltma tercihinde hepsini bir anda gösterir. */
(function () {
  'use strict';

  const term = document.getElementById('terminal');
  if (!term) return;

  const LINES_BY_LANG = {
    tr: [
      ['prompt', '$ claude'],
      ['user', '› XAUUSD M15 için bir kırılım robotu yaz. Stop 1,5×ATR, hedef 1:4,'],
      ['user', '  işlem başına risk %0,5 olsun. Haber saatlerinde işlem açmasın.'],
      ['blank', ''],
      ['ok', '✓ Teknik tarif çıkarıldı: 6 kural, 3 parametre'],
      ['ok', '✓ NUUK_Breakout.mq5 oluşturuldu'],
      ['ok', '✓ RiskManager.mqh: lot hesabı'],
      ['ok', '✓ NewsFilter.mqh: ekonomik takvim kontrolü'],
      ['ok', '✓ backtest.py: spread ve komisyon dahil'],
      ['ok', '✓ Testler geçti (14/14)'],
      ['next', '→ Sıradaki adım: ileriye dönük doğrulama raporu'],
    ],
    en: [
      ['prompt', '$ claude'],
      ['user', '› Write a breakout robot for XAUUSD M15. Stop 1.5×ATR, target 1:4,'],
      ['user', '  0.5% risk per trade. No new trades around news releases.'],
      ['blank', ''],
      ['ok', '✓ Spec drafted: 6 rules, 3 parameters'],
      ['ok', '✓ NUUK_Breakout.mq5 created'],
      ['ok', '✓ RiskManager.mqh: position sizing'],
      ['ok', '✓ NewsFilter.mqh: economic calendar check'],
      ['ok', '✓ backtest.py: spread and commission included'],
      ['ok', '✓ Tests passed (14/14)'],
      ['next', '→ Next step: walk-forward report'],
    ],
  };
  const LINES = LINES_BY_LANG[document.documentElement.lang === 'en' ? 'en' : 'tr'];
  const CHAR_MS = 9;
  const LINE_PAUSE_MS = 180;

  function line(kind, text) {
    const span = document.createElement('span');
    span.className = `t-${kind}`;
    span.textContent = text;
    return span;
  }

  function showAll() {
    term.replaceChildren(...LINES.map(([k, t]) => line(k, t)));
  }

  async function typeAll() {
    term.replaceChildren();
    for (const [kind, text] of LINES) {
      const span = line(kind, '');
      term.append(span);
      if (kind === 'user' || kind === 'prompt') {
        for (let i = 1; i <= text.length; i += 1) {
          span.textContent = text.slice(0, i);
          await new Promise((r) => setTimeout(r, CHAR_MS));
        }
      } else {
        span.textContent = text;
      }
      await new Promise((r) => setTimeout(r, LINE_PAUSE_MS));
    }
    term.append(line('cursor', '▍'));
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    typeAll();
  }, { threshold: 0.4 });
  io.observe(term);
})();
