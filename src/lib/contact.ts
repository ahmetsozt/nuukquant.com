/**
 * Contact-detail checks for the NUUK membership form. The same file lives in the
 * website (src/lib/contact.ts) and the hub (src/membership/contact.ts) so the browser
 * and the server apply identical rules; keep the two copies in sync.
 *
 * Phone: per-country length and numbering-plan validity from libphonenumber (Google's
 * metadata), mobile numbers only (the group runs on WhatsApp), plus junk patterns such
 * as 1111111 or 1234567. E-mail: practical RFC 5322 shape, placeholder and disposable
 * domains, common typos, and made-up local parts (abcdefg, qwerty, aaaa, 123456, test).
 * The hub additionally checks that the e-mail domain has MX records.
 */
import { getExampleNumber, parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js/max";
import examples from "libphonenumber-js/mobile/examples";

// ── phone ────────────────────────────────────────────────────────────────

export type PhoneProblem = "empty" | "country" | "too_short" | "too_long" | "invalid" | "not_mobile" | "pattern";
export type PhoneCheck =
  | { ok: true; e164: string; country: CountryCode; national: string }
  | { ok: false; problem: PhoneProblem; country: CountryCode | null; lengths: number[]; digits: number };

/**
 * Lengths a national mobile number may have in a country, e.g. TR → [10], AE → [9]:
 * the country's mobile example stretched or cut to each length and kept when it is
 * still a valid mobile number (mobile ranges are prefix rules, so length decides).
 */
const lengthCache = new Map<CountryCode, number[]>();
export function mobileLengths(country: CountryCode): number[] {
  const hit = lengthCache.get(country);
  if (hit) return hit;
  const example = getExampleNumber(country, examples)?.nationalNumber ?? "";
  const out: number[] = [];
  if (example) {
    const filler = example.repeat(4);
    for (let len = 4; len <= 17; len += 1) {
      const candidate = len <= example.length ? example.slice(0, len) : example + filler.slice(example.length, len);
      const parsed = parsePhoneNumberFromString(candidate, country);
      const type = parsed?.isValid() ? parsed.getType() : undefined;
      if (type === "MOBILE" || type === "FIXED_LINE_OR_MOBILE") out.push(len);
    }
  }
  const lengths = out.length ? out : example ? [example.length] : [];
  lengthCache.set(country, lengths);
  return lengths;
}

/** Mobile example without trunk prefix or country code, grouped the way the country writes it ("501 234 56 78"). */
export function mobileExample(country: CountryCode): string {
  const ex = getExampleNumber(country, examples);
  if (!ex) return "";
  return ex.formatInternational().replace(`+${ex.countryCallingCode}`, "").trim();
}

const onlyDigits = (s: string) => s.replace(/\D/g, "");

/** 1111111, 1234567, 9876543, 1212121, 123123123, or numbers made of one or two digits. */
export function isJunkNumber(national: string): boolean {
  const d = onlyDigits(national);
  if (d.length < 6) return true;
  if (/(\d)\1{5,}/.test(d)) return true; // six or more of the same digit in a row
  if (new Set(d).size <= 2) return true;
  const tail = d.slice(-7);
  let up = 0;
  let down = 0;
  for (let i = 1; i < tail.length; i += 1) {
    const diff = (Number(tail[i]) - Number(tail[i - 1]) + 10) % 10;
    if (diff === 1) up += 1;
    if (diff === 9) down += 1;
  }
  if (up >= tail.length - 1 || down >= tail.length - 1) return true; // last 7 digits a straight run
  for (let block = 1; block <= 4; block += 1) {
    const seg = d.slice(-block * 3);
    if (seg.length === block * 3 && seg === seg.slice(0, block).repeat(3) && block * 3 >= 6) return true; // 121212, 123123123
  }
  return false;
}

/**
 * Checks a phone typed as a national number for `country`, or as a full +number
 * (which then decides the country). Only mobile (or mobile-capable) numbers pass.
 */
export function checkPhone(raw: string, country: CountryCode | null): PhoneCheck {
  const typed = raw.trim();
  const digits = onlyDigits(typed).length;
  if (!typed) return { ok: false, problem: "empty", country, lengths: country ? mobileLengths(country) : [], digits };
  if (/[^\d\s().+-]/.test(typed)) return { ok: false, problem: "invalid", country, lengths: country ? mobileLengths(country) : [], digits };
  const parsed = typed.startsWith("+") || typed.startsWith("00")
    ? parsePhoneNumberFromString(typed.replace(/^00/, "+"))
    : country
      ? parsePhoneNumberFromString(typed, country)
      : undefined;
  const c = (parsed?.country as CountryCode | undefined) ?? country;
  if (!c) return { ok: false, problem: "country", country: null, lengths: [], digits };
  const lengths = mobileLengths(c);
  const national = parsed?.nationalNumber ?? onlyDigits(typed).replace(/^0+/, "");
  const type = parsed?.isValid() ? parsed.getType() : undefined;
  const validMobile = Boolean(parsed?.isValid()) && (!type || type === "MOBILE" || type === "FIXED_LINE_OR_MOBILE");
  if (!parsed || !validMobile) {
    // Explain the failure with the country's mobile lengths (a valid number never gets here).
    if (lengths.length && national.length < Math.min(...lengths)) return { ok: false, problem: "too_short", country: c, lengths, digits: national.length };
    if (lengths.length && national.length > Math.max(...lengths)) return { ok: false, problem: "too_long", country: c, lengths, digits: national.length };
    return { ok: false, problem: parsed?.isValid() ? "not_mobile" : "invalid", country: c, lengths, digits: national.length };
  }
  if (isJunkNumber(parsed.nationalNumber)) return { ok: false, problem: "pattern", country: c, lengths, digits: national.length };
  return { ok: true, e164: parsed.number, country: c, national: parsed.nationalNumber };
}

// ── e-mail ───────────────────────────────────────────────────────────────

export type EmailProblem = "empty" | "format" | "placeholder" | "disposable" | "fake" | "typo";
export type EmailCheck = { ok: true; email: string } | { ok: false; problem: EmailProblem; suggestion?: string };

const LOCAL_RE = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
const LABEL_RE = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const TLD_RE = /^(?:[a-z]{2,24}|xn--[a-z0-9-]{2,59})$/;

/** Reserved or placeholder domains that never receive mail for a real person. */
const PLACEHOLDER_DOMAINS = new Set([
  "example.com", "example.org", "example.net", "example.edu", "test.com", "test.net", "test.org", "domain.com", "domain.net",
  "email.test", "mail.test", "sample.com", "website.com", "yourdomain.com", "yourcompany.com", "company.com", "abc.com", "xyz.com",
  "asd.com", "qwe.com", "deneme.com", "ornek.com", "eposta.com", "localhost", "invalid", "test", "local",
]);

/** Throw-away inbox providers. */
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "guerrillamail.org", "guerrillamailblock.com", "sharklasers.com", "grr.la",
  "10minutemail.com", "10minutemail.net", "20minutemail.com", "tempmail.com", "temp-mail.org", "temp-mail.io", "tempmail.net", "tempmailo.com",
  "tempr.email", "tmpmail.org", "tmpmail.net", "yopmail.com", "yopmail.net", "yopmail.fr", "trashmail.com", "trashmail.de", "trashmail.net",
  "getnada.com", "nada.email", "dispostable.com", "maildrop.cc", "throwawaymail.com", "fakeinbox.com", "mintemail.com", "mohmal.com",
  "emailondeck.com", "spamgourmet.com", "burnermail.io", "discard.email", "mailnesia.com", "mytemp.email", "inboxkitten.com", "mailpoof.com",
  "moakt.com", "emailfake.com", "fakemail.net", "spambox.us", "getairmail.com", "mailcatch.com", "mail-temp.com", "minuteinbox.com",
  "dropmail.me", "1secmail.com", "1secmail.org", "1secmail.net", "emltmp.com", "linshiyouxiang.net", "byom.de", "spam4.me", "mailtemp.net",
]);

/** Frequent misspellings of big providers → the intended domain. */
const DOMAIN_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com", "gmai.com": "gmail.com", "gmal.com": "gmail.com", "gnail.com": "gmail.com", "gmaill.com": "gmail.com",
  "gmail.co": "gmail.com", "gmail.cm": "gmail.com", "gmail.con": "gmail.com", "gmail.om": "gmail.com", "gamil.com": "gmail.com",
  "gmail.com.tr": "gmail.com", "gmali.com": "gmail.com", "gmeil.com": "gmail.com",
  "hotmial.com": "hotmail.com", "hotmal.com": "hotmail.com", "hotmai.com": "hotmail.com", "hotmail.co": "hotmail.com", "hotmail.con": "hotmail.com",
  "hotmil.com": "hotmail.com", "hotamil.com": "hotmail.com", "hotmail.cm": "hotmail.com",
  "outlok.com": "outlook.com", "outloo.com": "outlook.com", "outlook.co": "outlook.com", "outlook.con": "outlook.com", "otlook.com": "outlook.com",
  "yahooo.com": "yahoo.com", "yaho.com": "yahoo.com", "yahoo.co": "yahoo.com", "yahoo.con": "yahoo.com", "yhoo.com": "yahoo.com",
  "icloud.co": "icloud.com", "icloud.con": "icloud.com", "iclod.com": "icloud.com", "icoud.com": "icloud.com",
  "yandex.co": "yandex.com", "yandx.com": "yandex.com", "hotmail.com.t": "hotmail.com.tr",
};

/** Local parts people type to get past a form. */
const FAKE_LOCALS = new Set([
  "test", "tests", "testing", "tester", "deneme", "denemee", "asd", "asdf", "asdasd", "asdfg", "asdfgh", "qwe", "qwer", "qwerty", "abc", "abcd",
  "abcde", "xyz", "xxx", "aaa", "user", "username", "example", "sample", "mail", "email", "eposta", "fake", "sahte", "none", "null", "nobody",
  "noreply", "no-reply", "foo", "bar", "foobar", "dummy", "demo", "isim", "ad", "adsoyad", "name", "yok", "hayir",
]);

const KEYBOARD_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "1234567890", "abcdefghijklmnopqrstuvwxyz"];

/** abcdefg, gfedcba, 123456, qwerty, asdfgh, aaaa, ababab… as the whole local part. */
export function isFakeLocal(local: string): boolean {
  const s = local.toLowerCase().replace(/[._+-]/g, "");
  if (!s) return true;
  if (FAKE_LOCALS.has(s) || FAKE_LOCALS.has(s.replace(/\d+$/, ""))) return true;
  if (s.length >= 3 && /^(.)\1+$/.test(s)) return true;
  if (s.length >= 4 && new Set(s).size <= 2) return true;
  if (/^\d+$/.test(s) && s.length >= 4 && (isJunkNumber(s.padStart(6, s[0] ?? "0")) || new Set(s).size <= 3)) return true;
  if (s.length >= 4) {
    for (const row of KEYBOARD_ROWS) {
      const back = [...row].reverse().join("");
      if (row.includes(s) || back.includes(s)) return true;
    }
  }
  return false;
}

export function checkEmail(raw: string): EmailCheck {
  const email = raw.trim().toLowerCase();
  if (!email) return { ok: false, problem: "empty" };
  if (email.length > 254 || (email.match(/@/g) ?? []).length !== 1) return { ok: false, problem: "format" };
  const [local = "", domain = ""] = email.split("@");
  if (!local || local.length > 64 || !LOCAL_RE.test(local)) return { ok: false, problem: "format" };
  const labels = domain.split(".");
  if (labels.length < 2 || !labels.every((l) => LABEL_RE.test(l)) || !TLD_RE.test(labels[labels.length - 1] ?? "")) return { ok: false, problem: "format" };
  const typo = DOMAIN_TYPOS[domain];
  if (typo) return { ok: false, problem: "typo", suggestion: `${local}@${typo}` };
  const registrable = labels.slice(-2).join(".");
  if (PLACEHOLDER_DOMAINS.has(domain) || PLACEHOLDER_DOMAINS.has(registrable) || labels.some((l) => l === "example" || l === "test" || l === "invalid")) {
    return { ok: false, problem: "placeholder" };
  }
  if (DISPOSABLE_DOMAINS.has(domain) || DISPOSABLE_DOMAINS.has(registrable)) return { ok: false, problem: "disposable" };
  if (isFakeLocal(local)) return { ok: false, problem: "fake" };
  const sld = labels[labels.length - 2] ?? "";
  if (sld.length >= 3 && isFakeLocal(sld) && !["mail", "email"].includes(sld)) return { ok: false, problem: "placeholder" };
  return { ok: true, email };
}

// ── name ─────────────────────────────────────────────────────────────────

export type NameProblem = "empty" | "parts" | "chars" | "fake";

/** At least two words of letters (any script), each two letters or more, not "test test". */
export function checkName(raw: string): { ok: true; name: string } | { ok: false; problem: NameProblem } {
  const name = raw.normalize("NFC").replace(/\s+/g, " ").trim();
  if (!name) return { ok: false, problem: "empty" };
  if (!/^[\p{L}\p{M}' .-]+$/u.test(name)) return { ok: false, problem: "chars" };
  const parts = name.split(" ").filter(Boolean);
  if (parts.length < 2 || parts.some((p) => p.replace(/[.'-]/g, "").length < 2)) return { ok: false, problem: "parts" };
  if (parts.every((p) => isFakeLocal(p.toLocaleLowerCase("tr").replace(/ı/g, "i")))) return { ok: false, problem: "fake" };
  if (parts.some((p) => /^(.)\1{2,}$/u.test(p.toLowerCase()))) return { ok: false, problem: "fake" };
  return { ok: true, name };
}
