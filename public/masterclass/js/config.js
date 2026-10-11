/*
 * Masterclass içeriği ve fiyatı tek yerde. Dil, sayfanın <html lang> değerinden okunur.
 * Fiyat taslaktır; yayına almadan önce burada güncelle.
 */
(function () {
  'use strict';

  const lang = document.documentElement.lang === 'en' ? 'en' : 'tr';

  const VALUE_STACK = {
    tr: [
      { title: 'Masterclass müfredatının tamamı', note: 'Altı modül: temellerden yapay zekâyla kurduğun kendi sistemine', value: 499 },
      { title: 'Özel WhatsApp topluluğu', note: 'Aynı yolda ilerleyen trader’lar ve geliştiricilerle', value: 197 },
      { title: 'Haftalık canlı seans', note: 'Her hafta piyasayı ve kodu birlikte inceliyor, sorularını cevaplıyoruz', value: 399 },
      { title: 'NUUK işlem robotu ve indikatör şablonları', note: 'MT4/MT5 kaynak kodları; düzenleyip kendi sistemine uyarlayabilirsin', value: 697 },
      { title: 'Yapay zekâ komut kütüphanesi', note: 'Robot, indikatör, test ve panel için hazır teknik tarifler ve komutlar', value: 197 },
      { title: 'Geriye dönük test paketi', note: 'Python/Jupyter defterleri; spread, komisyon ve ileriye dönük doğrulama dahil', value: 147 },
      { title: 'Gann araç seti', note: 'Square of 9 hesaplayıcısı, açı ve döngü şablonları', value: 97 },
      { title: 'Risk ve işlem günlüğü şablonu', note: 'Lot hesaplayıcı ve performans istatistikleri', value: 57 },
    ],
    en: [
      { title: 'The complete Masterclass curriculum', note: 'Six modules, from the basics to your own AI-built system', value: 499 },
      { title: 'Private WhatsApp community', note: 'Traders and builders working through the same programme', value: 197 },
      { title: 'Weekly live session', note: 'We go through the market and the code together and answer your questions', value: 399 },
      { title: 'NUUK trading robot and indicator templates', note: 'MT4/MT5 source code you can edit and adapt to your own system', value: 697 },
      { title: 'AI prompt library', note: 'Ready-made specs and prompts for robots, indicators, tests and dashboards', value: 197 },
      { title: 'Backtesting pack', note: 'Python/Jupyter notebooks with spread, commission and walk-forward built in', value: 147 },
      { title: 'Gann toolkit', note: 'Square of 9 calculator plus angle and cycle templates', value: 97 },
      { title: 'Risk and trade journal template', note: 'Position size calculator and performance statistics', value: 57 },
    ],
  };

  const BUY_MESSAGES = {
    tr: {
      masterclass: '499 USD ücretli eğitimi almak istiyorum.',
      book: '29.99 USD kitabı almak istiyorum.',
    },
    en: {
      masterclass: "I'd like to join the 499 USD Masterclass.",
      book: "I'd like to buy the 29.99 USD book.",
    },
  };

  window.MASTERCLASS = Object.freeze({
    lang,
    locale: lang === 'en' ? 'en-US' : 'tr-TR',
    currency: '$',
    // Tek seferlik ücret (USD); aylık ücret yok.
    price: 499,
    // Kitap: NUUK Quant – The Systematic Trader's Field Guide (TR + EN), tek seferlik (USD).
    book: Object.freeze({ price: 29.99 }),
    // Satın alma düğmeleri bu WhatsApp hattına, hazır mesajla açılır; USDT cüzdan adresi orada paylaşılır.
    whatsapp: '971586884464',
    // Kitap örneği formu iletişim bilgisini buraya kaydeder (yerelde test hub'ı http://localhost:8798 kullanılır).
    hubUrl: 'https://hub.nuukquant.com',
    sampleUrls: Object.freeze({
      tr: 'https://www.nuukquant.com/masterclass/assets/book/ornek-tr.pdf',
      en: 'https://www.nuukquant.com/masterclass/assets/book/sample-en.pdf',
    }),
    buyMessages: Object.freeze(BUY_MESSAGES[lang]),
    valueStack: Object.freeze(VALUE_STACK[lang].map((item) => Object.freeze(item))),
  });
})();
