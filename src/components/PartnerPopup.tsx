"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeFromPath } from "@/i18n";

type Labels = { title: string; alt: string; cta: string; close: string; href: string; image: string };

/** Bump the suffix to show a new announcement to visitors who closed the old one. */
const KEY = "nuuk-popup-multibank-2026-10";
const OPEN_DELAY_MS = 900;
/** Flows where an announcement would get in the way: payment, applications, the investor portal. */
const SKIP = /\/(portal|apply|payment|odeme|thank-you|tesekkurler)(\/|$)/;

function seen(): boolean {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return true;
  }
}
function markSeen() {
  try {
    localStorage.setItem(KEY, "1");
  } catch {}
}

/**
 * One-time announcement on a visitor's first page view: the NUUK × MultiBank
 * banner in the visitor's language. Closing it (button, backdrop, Escape or the
 * call to action) stores a flag so it never opens again on that browser.
 */
export default function PartnerPopup({ labels }: { labels: Record<string, Labels> }) {
  const pathname = usePathname() || "/";
  const t = labels[localeFromPath(pathname)] ?? labels.en;
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (SKIP.test(pathname) || seen()) return;
    const id = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      markSeen();
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    markSeen();
    setOpen(false);
  }

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={t.title} className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button type="button" aria-hidden="true" tabIndex={-1} onClick={close} className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-[min(440px,calc((100dvh-150px)*0.8))] overflow-hidden rounded-2xl bg-ink shadow-menu ring-1 ring-white/10">
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute end-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white ring-1 ring-white/25 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <Link href={t.href} onClick={close} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.image} alt={t.alt} width={1080} height={1350} decoding="async" className="block h-auto w-full" />
        </Link>
        <div className="flex gap-2 p-3">
          <Link href={t.href} onClick={close} className="flex-1 rounded-pill bg-primary px-4 py-3 text-center text-[14px] font-semibold text-white hover:bg-primary-dark">
            {t.cta}
          </Link>
          <button type="button" onClick={close} className="rounded-pill border border-white/30 px-4 py-3 text-[14px] font-semibold text-white hover:bg-white/10">
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
