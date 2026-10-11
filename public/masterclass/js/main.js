/* Sayfa davranışları: fiyat, değer listesi, WhatsApp satın alma bağlantıları, menü gölgesi, mobil menü. */
(function () {
  'use strict';

  const cfg = window.MASTERCLASS;
  const nf = new Intl.NumberFormat(cfg.locale);
  const isEn = cfg.lang === 'en';

  // TR: "499 $", EN: "$499"
  const money = (n) => (isEn ? `${cfg.currency}${nf.format(n)}` : `${nf.format(n)} ${cfg.currency}`);
  const stackTotal = cfg.valueStack.reduce((sum, item) => sum + item.value, 0);

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = text;
    });
  }

  function renderPrices() {
    setText('[data-price]', money(cfg.price));
    setText('[data-stack-total]', money(stackTotal));
    setText('[data-book-price]', money(cfg.book.price));
  }

  function stackItem(item, withNote) {
    const li = document.createElement('li');
    const text = document.createElement('span');
    const title = document.createElement('b');
    title.textContent = item.title;
    text.append(title);
    if (withNote) {
      const note = document.createElement('small');
      note.textContent = item.note;
      text.append(note);
    }
    const value = document.createElement('span');
    value.className = 'mono';
    value.textContent = money(item.value);
    li.append(text, value);
    return li;
  }

  function renderStacks() {
    const full = document.getElementById('value-stack');
    const compact = document.getElementById('price-list');
    cfg.valueStack.forEach((item) => {
      full?.append(stackItem(item, true));
      compact?.append(stackItem(item, false));
    });
  }

  /** Satın alma bağlantıları: WhatsApp'ı ürüne göre hazır mesajla açar. */
  function setupBuyLinks() {
    document.querySelectorAll('[data-buy]').forEach((link) => {
      const message = cfg.buyMessages[link.dataset.buy];
      if (!message) return;
      link.href = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(message)}`;
    });
  }

  function setupNavShadow() {
    const nav = document.querySelector('.nav');
    const sentinel = document.querySelector('.hero-inner');
    if (!nav || !sentinel || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(([entry]) => {
      nav.classList.toggle('is-scrolled', !entry.isIntersecting);
    }).observe(sentinel);
  }

  function setupReveal() {
    const items = document.querySelectorAll('.section-head, .module, .stagger-row, .outcomes li, .cmp-row, .bento li, .stats > div, .personas li, .price-card, .road li');
    if (!('IntersectionObserver' in window)) return;
    items.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  }

  /** Telefonda menü: düğmeyle açılır, bağlantıya tıklayınca ya da Esc ile kapanır. */
  function setupMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if (!toggle || !nav) return;
    const setOpen = (isOpen) => {
      nav.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      const labels = isEn ? ['Close menu', 'Open menu'] : ['Menüyü kapat', 'Menüyü aç'];
      toggle.setAttribute('aria-label', isOpen ? labels[0] : labels[1]);
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  renderPrices();
  renderStacks();
  setupBuyLinks();
  setupNavShadow();
  setupMobileMenu();
  setupReveal();
})();
