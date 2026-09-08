"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n";

/**
 * Generic TradingView embed. Injects the widget script into its own container
 * so quotes stream live in the visitor's browser; no server or API key needed.
 */
export default function TvWidget({ src, config, className = "", locale = "en" }: { src: string; config: Record<string, unknown>; className?: string; locale?: Locale }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({ ...config, locale });
    el.appendChild(script);
    return () => {
      el.innerHTML = "";
    };
    // config is static per call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, locale]);

  return (
    <div className={`tradingview-widget-container ${className}`}>
      <div ref={ref} className="h-full w-full" />
    </div>
  );
}
