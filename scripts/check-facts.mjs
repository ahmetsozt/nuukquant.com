#!/usr/bin/env node
// Fails the deploy when site copy drifts from src/data/facts.ts: retired prices,
// the old internal 87% hit rate, "verified" claims and other figures that
// contradicted each other in the 2026-11-25 SEO audit. Run: node scripts/check-facts.mjs
import { readFileSync, readdirSync } from "node:fs";

const dir = new URL("../src/content/", import.meta.url);
const files = readdirSync(dir).filter((f) => /^(en|tr|ar|ru|fr|es)\.ts$/.test(f));

/** [pattern, why] — each must not appear in any locale's copy. */
const RETIRED = [
  [/(?<![\d.,])87 ?%|%87(?!\d)|87٪/, "hit rate comes from signalLog (public free-signals log), not the old internal 87%"],
  [/USD 49|49 USD|49 دولار/, "the WhatsApp group is free; the 49 USD membership no longer exists"],
  [/"period": "üç aylık"|period: "per quarter"/, "mentorship is USD 5,000 per month"],
  [/verificado|Verificado|"verifiedHref": "https:\/\/chat\.whatsapp|verifiedHref: "https:\/\/chat\.whatsapp/, "no 'verified' label without independent verification"],
  [/three in production|üçü üretimde|trois en production|tres en producción|три в (работе|продакшене)|وثلاث منها في الإنتاج/, "one system is live, one in testing, one in development"],
  [/four transparent sources|dört şeffaf kaynak|quatre sources transparentes|четырёх прозрачных/, "the income page lists three sources"],
];
/** Lines that legitimately contain a retired word (e.g. disclaimers). */
const ALLOW = [/no son datos de rendimiento verificados/, /^\s*"?verified"?: "/ /* ui label, shown only for a card with a verifiedHref */];

let failures = 0;
for (const f of files) {
  const lines = readFileSync(new URL(f, dir), "utf8").split("\n");
  lines.forEach((line, i) => {
    if (ALLOW.some((a) => a.test(line))) return;
    for (const [re, why] of RETIRED) {
      if (re.test(line)) {
        failures++;
        console.error(`src/content/${f}:${i + 1}: ${why}\n    ${line.trim().slice(0, 140)}`);
      }
    }
  });
}
if (failures) {
  console.error(`\ncheck-facts: ${failures} line(s) contradict src/data/facts.ts`);
  process.exit(1);
}
console.log(`check-facts: ${files.length} locale files consistent with src/data/facts.ts`);
