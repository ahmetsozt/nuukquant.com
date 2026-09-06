"use client";

import { useEffect } from "react";

/** Keeps <html lang/dir> in sync with the active locale (root layout is shared across locales). */
export default function HtmlLang({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  return null;
}
