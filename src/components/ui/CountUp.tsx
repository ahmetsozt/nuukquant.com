"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric string up when scrolled into view. Non-numeric values
 * (including "[FILL]" placeholders) render unchanged.
 */
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  const [shown, setShown] = useState<string>(match ? `${match[1]}0${match[3]}` : value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || !ref.current) return;
    const target = parseFloat(match[2].replace(/,/g, ""));
    const decimals = (match[2].split(".")[1] ?? "").length;
    const prefix = match[1];
    const suffix = match[3];
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = () => setShown(value);
    if (reduce) {
      done();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1200;
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = target * eased;
        setShown(`${prefix}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
        if (p < 1) requestAnimationFrame(step);
        else done();
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    // Safety net: show the final value even if the observer never fires (print, prerender, hidden tabs).
    const fallback = window.setTimeout(done, 3000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
