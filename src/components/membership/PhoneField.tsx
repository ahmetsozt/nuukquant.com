"use client";

import { useMemo } from "react";
import { getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js/max";
import { mobileExample, mobileLengths } from "@/lib/contact";

/** 🇹🇷 from "TR". */
const flag = (cc: string) => String.fromCodePoint(...[...cc.toUpperCase()].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));

const LOCALE_COUNTRY: Record<string, CountryCode> = { tr: "TR", ar: "AE", ru: "RU", fr: "FR", es: "ES", en: "AE" };

/** Visitor's likely country: Türkiye on the Turkish pages, else the browser region, else by site language. */
export function defaultCountry(locale: string): CountryCode {
  if (locale === "tr") return "TR";
  const known = new Set<string>(getCountries());
  for (const tag of typeof navigator !== "undefined" ? navigator.languages ?? [navigator.language] : []) {
    const region = tag?.split("-")[1]?.toUpperCase();
    if (region && known.has(region)) return region as CountryCode;
  }
  return LOCALE_COUNTRY[locale] ?? "TR";
}

export function countryName(locale: string, cc: CountryCode): string {
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(cc) ?? cc;
  } catch {
    return cc;
  }
}

/** "{country} mobile: {n} digits, e.g. {example}" filled for one country. */
export function phoneHint(template: string, locale: string, cc: CountryCode): string {
  const lengths = mobileLengths(cc);
  const n = lengths.length > 1 ? `${Math.min(...lengths)}–${Math.max(...lengths)}` : String(lengths[0] ?? "");
  return template.replace("{country}", countryName(locale, cc)).replace("{n}", n).replace("{example}", mobileExample(cc));
}

/**
 * Country-code selector + national number. A pasted "+44 …" number switches the
 * selector to that country (the parent re-parses on change).
 */
export default function PhoneField({
  id,
  locale,
  country,
  value,
  invalid,
  label,
  countryLabel,
  describedBy,
  onCountry,
  onValue,
}: {
  id: string;
  locale: string;
  country: CountryCode;
  value: string;
  invalid: boolean;
  label: string;
  countryLabel: string;
  describedBy: string;
  onCountry: (c: CountryCode) => void;
  onValue: (v: string) => void;
}) {
  const options = useMemo(() => {
    const names = getCountries().map((cc) => ({ cc, name: countryName(locale, cc), code: getCountryCallingCode(cc) }));
    return names.sort((a, b) => a.name.localeCompare(b.name, locale));
  }, [locale]);
  const border = invalid ? "border-down" : "border-line";
  return (
    <div className={`flex overflow-hidden rounded-xl border-[1.5px] bg-white transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 ${border}`}>
      <label className="sr-only" htmlFor={`${id}-cc`}>
        {countryLabel}
      </label>
      <div className="relative flex-none border-e border-line">
        <select
          id={`${id}-cc`}
          value={country}
          onChange={(e) => onCountry(e.target.value as CountryCode)}
          className="h-full w-[118px] cursor-pointer appearance-none bg-fog ps-3 pe-7 text-[15px] text-ink outline-none"
          autoComplete="tel-country-code"
        >
          {options.map((o) => (
            <option key={o.cc} value={o.cc}>
              {flag(o.cc)} {o.name} +{o.code}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-2 flex items-center text-[11px] text-muted">
          ▼
        </span>
        {/* The select shows the full name in its menu; the closed state shows flag + code only. */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center gap-1.5 bg-fog ps-3 text-[15px] text-ink">
          {flag(country)} <span className="num">+{getCountryCallingCode(country)}</span>
        </span>
      </div>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        maxLength={24}
        aria-label={label}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        placeholder={mobileExample(country)}
        value={value}
        onChange={(e) => onValue(e.target.value)}
        className="num min-w-0 flex-1 bg-transparent px-4 py-3 text-[16px] text-ink outline-none placeholder:text-muted"
      />
    </div>
  );
}
