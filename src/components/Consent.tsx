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
        <div role="dialog" aria-live="polite" aria-label={t.more} className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-[720px] rounded-2xl bg-ink p-4 text-white shadow-menu ring-1 ring-white/10 sm:flex sm:items-center sm:gap-4 sm:p-5">
          <p className="text-[13.5px] leading-5 text-soft">
            {t.text}{" "}
            <Link href={t.href} className="underline underline-offset-2 hover:text-white">
              {t.more}
            </Link>
          </p>
          <div className="mt-3 flex flex-none gap-2 sm:mt-0">
            <button type="button" onClick={() => choose("denied")} className="rounded-pill border border-white/30 px-4 py-2 text-[13px] font-semibold hover:bg-white/10">
              {t.reject}
            </button>
            <button type="button" onClick={() => choose("granted")} className="rounded-pill bg-primary px-4 py-2 text-[13px] font-semibold text-white hover:bg-primary-dark">
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
