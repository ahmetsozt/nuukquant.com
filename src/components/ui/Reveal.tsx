"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds the `.in` class to `.rv` elements when they enter the viewport.
 * Re-runs on every route change and watches the DOM so late-rendered
 * elements are never left hidden.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showAll = () => document.querySelectorAll<HTMLElement>(".rv").forEach((el) => el.classList.add("in"));

    if (reduce || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 60}ms`;
        io.observe(el);
      });
    };
    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave content hidden for long.
    const safety = window.setTimeout(showAll, 1500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
      showAll();
    };
  }, [pathname]);

  return null;
}
