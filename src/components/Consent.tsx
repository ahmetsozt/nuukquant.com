"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import Analytics from "@/components/Analytics";
import ApolloTracker from "@/components/ApolloTracker";
import MetaPixel from "@/components/MetaPixel";
import { localeFromPath } from "@/i18n";

type Labels = { text: string; accept: string; reject: string; more: string; href: string };
type Choice = "granted" | "denied" | "unknown" | "server";
const KEY = "nuuk-consent";
const EVENT = "nuuk-consent-change";

function read(): Choice {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : "unknown";
  } catch {
    return "unknown";
  }
}
function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}
function choose(v: "granted" | "denied") {
  try {
    localStorage.setItem(KEY, v);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Cookie consent. Nothing that sets cookies (GA4, Meta Pixel, Apollo) loads until
 * the visitor accepts; the choice lives in localStorage. Labels come per locale
 * from the server so the client bundle does not carry the content files.
 */
export default function Consent({ labels }: { labels: Record<string, Labels> }) {
  const pathname = usePathname() || "/";
  const t = labels[localeFromPath(pathname)] ?? labels.en;
  const state = useSyncExternalStore(subscribe, read, () => "server" as Choice);

  return (
    <>
      {state === "granted" && (
        <>
          <Analytics />
          <MetaPixel />
          <ApolloTracker />
        </>
      )}
      {state === "unknown" && (
        // Compact strip on phones so it never covers the hero CTA; full card from sm up.
        <div role="dialog" aria-live="polite" aria-label={t.more} className="fixed inset-x-2 bottom-2 z-[70] mx-auto flex max-w-[720px] items-center gap-2 rounded-xl bg-ink px-3 py-1.5 text-white shadow-menu ring-1 ring-white/10 sm:inset-x-3 sm:bottom-3 sm:gap-4 sm:rounded-2xl sm:p-5">
          <p className="min-w-0 flex-1 text-[12px] leading-[15px] text-soft sm:text-[13.5px] sm:leading-5">
            {t.text}{" "}
            <Link href={t.href} className="underline underline-offset-2 hover:text-white">
              {t.more}
            </Link>
          </p>
          <div className="flex flex-none gap-2">
            <button type="button" onClick={() => choose("denied")} className="min-h-9 rounded-md border border-white/30 px-3 text-[13px] font-semibold hover:bg-white/10 sm:min-h-10 sm:px-4">
              {t.reject}
            </button>
            <button type="button" onClick={() => choose("granted")} className="min-h-9 rounded-md bg-primary px-3 text-[13px] font-semibold text-white hover:bg-primary-dark sm:min-h-10 sm:px-4">
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
