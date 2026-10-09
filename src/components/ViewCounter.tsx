"use client";

import { useEffect } from "react";
import { portalConfigured, supabase } from "@/lib/supabase";

/**
 * Ziyaret sayacı. Her sayfa yüklenişinde `record_view` çağrısıyla tek satır
 * yazar (bkz. supabase/visits.sql).
 *
 * Çerez ve tarayıcı deposu kullanmaz, IP ya da parmak izi göndermez; bu yüzden
 * onay bannerının arkasında değil, Consent'in dışında durur ve "kabul et"e
 * basmayan ziyaretçileri de sayar. Karşılığında tekil ziyaretçi ayırt edilemez:
 * sayılan şey ziyaret.
 *
 * Statik dışa aktarım olduğu için her gezinme tam sayfa yüklemesidir; bu
 * yüzden yol değişimini izlemek gerekmiyor, sayfa başına tek çağrı yeterli.
 */

/** Sayfa ömründe bir kez. Strict Mode'un efekti iki kez çalıştırması sayıyı şişirmesin. */
let sent = false;

const BOT = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|preview|facebookexternalhit|whatsapp|telegram/i;

/** www. öneki aynı siteyi iki ayrı satıra bölmesin. */
const host = (value: string) => value.replace(/^www\./, "");

function record() {
  const { hostname, pathname } = window.location;

  // Portal yolları e-posta bağlantılarından gelen jeton taşıyabiliyor; yalnız
  // bölümün kendisi kaydedilir, altındaki yol ve sorgu dizesi hiç yazılmaz.
  const path = pathname.startsWith("/portal") ? "/portal" : pathname;

  const referrer = document.referrer ? host(new URL(document.referrer).hostname) : null;

  return supabase().rpc("record_view", {
    p_site: host(hostname),
    p_path: path,
    // Kendi sayfalarımız arası gezinme kaynak sayılmaz.
    p_ref_host: referrer && referrer !== host(hostname) ? referrer : null,
    p_lang: navigator.language || null,
    p_tz: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    p_width: window.innerWidth,
  });
}

export default function ViewCounter() {
  useEffect(() => {
    if (sent || !portalConfigured) return;
    if (navigator.webdriver || BOT.test(navigator.userAgent)) return;
    sent = true;

    // Sayaç sayfanın işi değil: ne hata ne gecikme kullanıcıya yansımaz.
    try {
      // Supabase'in sorgu kurucusu Promise değil, yalnız `then` taşıyan bir nesne.
      void record().then(
        () => {},
        () => {},
      );
    } catch {
      /* Supabase kurulu değil ya da URL ayrıştırılamadı; sayfa etkilenmez. */
    }
  }, []);

  return null;
}
