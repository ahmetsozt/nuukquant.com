import { en, type SiteContent } from "@/content/en";
import { tr } from "@/content/tr";
import { ar } from "@/content/ar";
import { ru } from "@/content/ru";
import { fr } from "@/content/fr";
import { es } from "@/content/es";

export const locales = ["en", "tr", "ar", "ru", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
  ru: "Русский",
  fr: "Français",
  es: "Español",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Prefix an internal path with the locale segment. External and mailto links pass through. */
export function localePath(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (locale === defaultLocale && href === "/") return "/";
  return `/${locale}${href === "/" ? "/" : href}`;
}

/** Swap the locale segment of a pathname (used by the language switcher). */
export function switchLocale(pathname: string, to: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts.shift();
  const rest = parts.length ? `/${parts.join("/")}/` : "/";
  return localePath(to, rest);
}

type Plain = Record<string, unknown>;
type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };
export type ContentOverride = DeepPartial<SiteContent>;

function isPlain(v: unknown): v is Plain {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function merge<T>(base: T, over: unknown): T {
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base;
    // Arrays are merged index-wise so translations can omit untranslated fields.
    return base.map((item, i) => (i < over.length ? merge(item, over[i]) : item)) as T;
  }
  if (isPlain(base)) {
    if (!isPlain(over)) return base;
    const out: Plain = { ...base };
    for (const k of Object.keys(base)) if (k in over) out[k] = merge((base as Plain)[k], over[k]);
    return out as T;
  }
  return (over === undefined ? base : over) as T;
}

function prefixHrefs<T>(value: T, locale: Locale, key?: string): T {
  if (typeof value === "string") {
    return (key === "href" ? localePath(locale, value) : value) as T;
  }
  if (Array.isArray(value)) return value.map((v) => prefixHrefs(v, locale)) as T;
  if (isPlain(value)) {
    const out: Plain = {};
    for (const [k, v] of Object.entries(value)) out[k] = prefixHrefs(v, locale, k);
    return out as T;
  }
  return value;
}

const overrides: Record<Locale, ContentOverride> = { en: {}, tr, ar, ru, fr, es };
const cache = new Map<Locale, SiteContent>();

/** Localised content with internal links already prefixed for the locale. */
export function getContent(locale: Locale): SiteContent {
  const hit = cache.get(locale);
  if (hit) return hit;
  const merged = merge(en, overrides[locale]);
  const out = prefixHrefs(merged, locale);
  cache.set(locale, out);
  return out;
}
