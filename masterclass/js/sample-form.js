/*
 * Kitap örneği formu: "Ücretsiz örneği al" iletişim bilgisini (hepsi zorunlu) alır, hub'a kaydeder, sonra
 * ziyaretçiyi hazır mesajla WhatsApp hattına yönlendirir; örnek PDF oradan elle gönderilir.
 * Hub doğrulamayı yapar; hata kodlarını ("contact:<alan>:<sorun>") burada alan altı mesajlara çevirir.
 */
(function () {
  'use strict';

  const cfg = window.MASTERCLASS;
  const dialog = document.getElementById('sample-dialog');
  const form = document.getElementById('sample-form');
  if (!cfg || !dialog || !form) return;

  const isEn = cfg.lang === 'en';
  const LOCAL_HUB = 'http://localhost:8798';
  const hubUrl = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? LOCAL_HUB : cfg.hubUrl;

  const TEXT = isEn
    ? {
        name: { empty: 'Enter your name.', chars: 'Use letters only.', parts: 'Enter your first and last name.', fake: 'Enter your real name.' },
        email: {
          empty: 'Enter your e-mail.',
          format: 'This e-mail address is not valid.',
          typo: 'This e-mail address looks mistyped. Please check it.',
          placeholder: 'Enter your real e-mail address.',
          disposable: 'Disposable e-mail addresses are not accepted.',
          fake: 'Enter your real e-mail address.',
          no_mx: 'This e-mail domain cannot receive mail.',
        },
        phone: {
          empty: 'Enter your WhatsApp number.',
          country: 'Add your country code, e.g. +971 50 123 4567.',
          default: 'Enter a valid mobile number with your country code.',
        },
        generic: 'Something went wrong. Please try again.',
        network: 'We could not reach the server. Check your connection and try again.',
        tooMany: 'Too many attempts. Please wait a few minutes.',
        consent: 'Please accept to continue.',
        sending: 'Sending…',
      }
    : {
        name: { empty: 'Adını yaz.', chars: 'Yalnızca harf kullan.', parts: 'Adını ve soyadını yaz.', fake: 'Gerçek adını yaz.' },
        email: {
          empty: 'E-posta adresini yaz.',
          format: 'Bu e-posta adresi geçerli değil.',
          typo: 'E-posta adresinde yazım hatası var gibi görünüyor. Kontrol eder misin?',
          placeholder: 'Gerçek e-posta adresini yaz.',
          disposable: 'Geçici e-posta adresleri kabul edilmiyor.',
          fake: 'Gerçek e-posta adresini yaz.',
          no_mx: 'Bu alan adı e-posta alamıyor.',
        },
        phone: {
          empty: 'WhatsApp numaranı yaz.',
          country: 'Ülke koduyla yaz, örneğin +90 532 123 45 67.',
          default: 'Geçerli bir cep telefonu numarası yaz.',
        },
        generic: 'Bir sorun oluştu. Lütfen tekrar dene.',
        network: 'Sunucuya ulaşılamadı. Bağlantını kontrol edip tekrar dene.',
        tooMany: 'Çok fazla deneme yapıldı. Birkaç dakika sonra tekrar dene.',
        consent: 'Devam etmek için onay vermelisin.',
        sending: 'Gönderiliyor…',
      };

  const fields = {
    name: form.elements.namedItem('fullName'),
    email: form.elements.namedItem('email'),
    phone: form.elements.namedItem('phone'),
    consent: form.elements.namedItem('consent'),
  };
  const formError = form.querySelector('[data-form-error]');
  const submit = form.querySelector('button[type="submit"]');
  const success = dialog.querySelector('[data-sample-success]');
  const waLink = dialog.querySelector('[data-sample-wa]');
  const WA_REDIRECT_MS = 1200;
  let edition = cfg.lang;

  function setFieldError(name, message) {
    const input = fields[name];
    const slot = form.querySelector(`[data-error-for="${name}"]`);
    if (!input || !slot) return;
    slot.textContent = message || '';
    slot.hidden = !message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
  }

  function clearErrors() {
    Object.keys(fields).forEach((n) => setFieldError(n, ''));
    formError.hidden = true;
    formError.textContent = '';
  }

  /** "contact:email:typo" → message under the e-mail field (with the suggested address when given). */
  function showServerError(code, suggestion) {
    const parts = String(code || '').split(':');
    if (parts[0] === 'contact' && fields[parts[1]]) {
      const group = TEXT[parts[1]];
      const msg = (group[parts[2]] || group.default || TEXT.generic).replace('{s}', suggestion || '');
      setFieldError(parts[1], msg);
      fields[parts[1]].focus();
      return;
    }
    formError.textContent = /onay|consent/i.test(code) ? TEXT.consent : TEXT.generic;
    formError.hidden = false;
  }

  /** Seçilen baskıya göre hazır mesajla WhatsApp adresi. */
  function whatsappUrl() {
    const text = cfg.buyMessages.sample[edition] || cfg.buyMessages.sample[cfg.lang];
    return `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  /** Boş alanları gönderimden önce yakalar; biçim kuralları hub'da. */
  function missingFields() {
    const missing = ['name', 'email', 'phone'].filter((n) => !fields[n].value.trim());
    missing.forEach((n) => setFieldError(n, TEXT[n].empty));
    if (!fields.consent.checked) setFieldError('consent', TEXT.consent);
    const first = missing[0] || (!fields.consent.checked && 'consent');
    if (first) fields[first].focus();
    return Boolean(first);
  }

  function open(which) {
    edition = which === 'en' || which === 'tr' ? which : cfg.lang;
    clearErrors();
    form.hidden = false;
    success.hidden = true;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    fields.name.focus();
  }

  async function onSubmit(e) {
    e.preventDefault();
    clearErrors();
    if (missingFields()) return;
    const label = submit.textContent;
    submit.disabled = true;
    submit.textContent = TEXT.sending;
    const body = {
      fullName: fields.name.value,
      email: fields.email.value,
      phone: fields.phone.value,
      edition,
      consent: true,
      website: form.elements.namedItem('website').value || undefined,
    };
    // Türkçe sayfada +kod yazılmamış numara Türkiye numarası sayılır.
    if (!isEn) body.country = 'TR';
    try {
      const res = await fetch(`${hubUrl}/v1/leads/book-sample`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const payload = await res.json().catch(() => null);
      if (res.status === 429) throw Object.assign(new Error('rate'), { user: TEXT.tooMany });
      if (!res.ok || !payload || !payload.success) {
        showServerError(payload && payload.error, payload && payload.data && payload.data.suggestion);
        return;
      }
      const wa = whatsappUrl();
      waLink.href = wa;
      form.hidden = true;
      success.hidden = false;
      // Mesajın senin numarana düşmesi için WhatsApp'ı kendiliğinden aç; açılmazsa düğme duruyor.
      setTimeout(() => window.location.assign(wa), WA_REDIRECT_MS);
    } catch (err) {
      formError.textContent = (err && err.user) || TEXT.network;
      formError.hidden = false;
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  }

  document.querySelectorAll('[data-sample]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      open(btn.dataset.sample);
    });
  });
  form.addEventListener('submit', onSubmit);
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => dialog.close()));
})();
