#!/usr/bin/env node
/**
 * Submits every page in the sitemap to IndexNow, which feeds Bing, Yandex,
 * Seznam, Naver and Yep in one call. Google does not use IndexNow; it picks up
 * changes from the sitemap.
 *
 * Run after a deploy: node scripts/seo/ping-indexnow.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const host = "www.nuukquant.com";
const key = readFileSync(join(root, "public", "indexnow-key.txt"), "utf8").trim();
const sitemap = readFileSync(join(root, "out", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("No URLs found in out/sitemap.xml — run pnpm build first.");
  process.exit(1);
}

const body = { host, key, keyLocation: `https://${host}/${key}.txt`, urlList };
const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (res.status >= 400) console.error(await res.text());
