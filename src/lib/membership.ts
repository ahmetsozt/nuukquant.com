/**
 * NUUK app membership: plan model, hub links and pure helpers.
 *
 * Types mirror `PlanOffer` / `PlanFeature` in the NUUK hub contract
 * (NUUK Trader repo, apps/hub/src/contract.ts) and the comparison logic mirrors
 * apps/mobile/src/lib/plans.ts, so the website and the app's paywall always
 * show the same table. Keep the three in sync when plans change.
 */

export type Plan = "free" | "pro" | "premium";
export type PaidPlan = Exclude<Plan, "free">;

export type PlanFeature =
  | "markets"
  | "calendar_news"
  | "academy"
  | "signals_delayed"
  | "signals_realtime"
  | "push_signals"
  | "analysis_full"
  | "price_alerts"
  | "copy_demo_paper"
  | "risk_panel"
  | "execution_reports"
  | "broker_partner"
  | "priority_support";

export interface PlanOffer {
  id: Plan;
  name: string;
  /** Monthly list price in USD; 0 for free. */
  priceUsd: number;
  interval: "month" | null;
  /** The plan the page recommends. */
  highlighted: boolean;
  features: PlanFeature[];
}

/** Display order of the comparison table (free basics → paid extras). */
export const PLAN_FEATURE_ORDER: readonly PlanFeature[] = [
  "markets",
  "calendar_news",
  "academy",
  "signals_delayed",
  "signals_realtime",
  "push_signals",
  "analysis_full",
  "price_alerts",
  "copy_demo_paper",
  "risk_panel",
  "execution_reports",
  "broker_partner",
  "priority_support",
];

export const PLAN_IDS: readonly Plan[] = ["free", "pro", "premium"];

/**
 * Static copy of GET /v1/plans (hub: apps/hub/src/billing/plans.ts). The page
 * renders from this at build time and swaps in the live list when the hub answers.
 */
export const FALLBACK_PLAN_OFFERS: readonly PlanOffer[] = [
  { id: "free", name: "Free", priceUsd: 0, interval: null, highlighted: false, features: ["markets", "calendar_news", "academy", "signals_delayed"] },
  {
    id: "pro",
    name: "Pro",
    priceUsd: 59,
    interval: "month",
    highlighted: false,
    features: ["markets", "calendar_news", "academy", "signals_realtime", "push_signals", "analysis_full", "price_alerts"],
  },
  {
    id: "premium",
    name: "Premium",
    priceUsd: 99,
    interval: "month",
    highlighted: true,
    features: ["signals_realtime", "push_signals", "analysis_full", "price_alerts", "copy_demo_paper", "risk_panel", "execution_reports", "broker_partner", "priority_support"],
  },
];

/** A feature that a higher tier replaces rather than adds to (real-time beats 15-min delayed). */
const SUPERSEDED_BY: Partial<Record<PlanFeature, PlanFeature>> = { signals_delayed: "signals_realtime" };

export const isPaidPlan = (v: unknown): v is PaidPlan => v === "pro" || v === "premium";
const isPlan = (v: unknown): v is Plan => v === "free" || isPaidPlan(v);
const isFeature = (v: unknown): v is PlanFeature => (PLAN_FEATURE_ORDER as readonly unknown[]).includes(v);

const byPrice = (offers: readonly PlanOffer[]): PlanOffer[] => [...offers].sort((a, b) => a.priceUsd - b.priceUsd);

/** True when `feature` was replaced by a better one this plan already has (e.g. delayed → real-time signals). */
export function isSuperseded(offers: readonly PlanOffer[], plan: Plan, feature: PlanFeature): boolean {
  const replacement = SUPERSEDED_BY[feature];
  return Boolean(replacement && planIncludes(offers, plan, replacement));
}

/**
 * Tiers are cumulative: a plan includes its own features plus every cheaper plan's,
 * except features it supersedes (Premium does not "also" get delayed signals).
 */
export function planIncludes(offers: readonly PlanOffer[], plan: Plan, feature: PlanFeature): boolean {
  const sorted = byPrice(offers);
  const idx = sorted.findIndex((o) => o.id === plan);
  if (idx < 0) return false;
  const cumulative = new Set(sorted.slice(0, idx + 1).flatMap((o) => o.features));
  const replacement = SUPERSEDED_BY[feature];
  if (replacement && cumulative.has(replacement)) return false;
  return cumulative.has(feature);
}

export interface FeatureRow {
  feature: PlanFeature;
  cells: Record<Plan, "yes" | "no" | "superseded">;
}

/** Comparison table rows, in display order, skipping features no plan offers. */
export function featureMatrix(offers: readonly PlanOffer[]): FeatureRow[] {
  const cell = (plan: Plan, feature: PlanFeature): FeatureRow["cells"][Plan] =>
    planIncludes(offers, plan, feature) ? "yes" : isSuperseded(offers, plan, feature) ? "superseded" : "no";
  return PLAN_FEATURE_ORDER.map((feature) => ({
    feature,
    cells: { free: cell("free", feature), pro: cell("pro", feature), premium: cell("premium", feature) },
  })).filter((row) => PLAN_IDS.some((p) => row.cells[p] === "yes"));
}

/** Features a plan adds over the next cheaper plan: the card's "what you get" list. */
export function planHighlights(offers: readonly PlanOffer[], plan: Plan): PlanFeature[] {
  const sorted = byPrice(offers);
  const idx = sorted.findIndex((o) => o.id === plan);
  if (idx < 0) return [];
  if (idx === 0) return PLAN_FEATURE_ORDER.filter((f) => planIncludes(offers, plan, f));
  const lower = sorted[idx - 1].id;
  return PLAN_FEATURE_ORDER.filter((f) => planIncludes(offers, plan, f) && !planIncludes(offers, lower, f));
}

/** The next cheaper plan, used for the "Everything in Pro, plus:" line. */
export function lowerPlan(offers: readonly PlanOffer[], plan: Plan): PlanOffer | null {
  const sorted = byPrice(offers);
  const idx = sorted.findIndex((o) => o.id === plan);
  return idx > 0 ? sorted[idx - 1] : null;
}

/** "59 USD" (tr) / "$59" (others); null for free. */
export function priceAmount(locale: string, offer: Pick<PlanOffer, "priceUsd">): string | null {
  if (offer.priceUsd <= 0) return null;
  const n = Number.isInteger(offer.priceUsd) ? String(offer.priceUsd) : offer.priceUsd.toFixed(2);
  return locale === "tr" ? `${n} USD` : `$${n}`;
}

/**
 * Validates a GET /v1/plans envelope. Anything malformed returns null so the
 * caller keeps the static list; unknown feature keys are dropped.
 */
export function parsePlanOffers(json: unknown): PlanOffer[] | null {
  if (typeof json !== "object" || json === null) return null;
  const data = (json as { success?: unknown; data?: unknown }).data;
  if ((json as { success?: unknown }).success !== true || !Array.isArray(data)) return null;
  const offers: PlanOffer[] = [];
  for (const raw of data as unknown[]) {
    if (typeof raw !== "object" || raw === null) return null;
    const o = raw as Record<string, unknown>;
    if (!isPlan(o.id) || typeof o.name !== "string" || typeof o.priceUsd !== "number" || !Number.isFinite(o.priceUsd) || o.priceUsd < 0) return null;
    if (o.interval !== "month" && o.interval !== null) return null;
    if (!Array.isArray(o.features)) return null;
    offers.push({
      id: o.id,
      name: o.name.slice(0, 40),
      priceUsd: o.priceUsd,
      interval: o.interval,
      highlighted: o.highlighted === true,
      features: o.features.filter(isFeature),
    });
  }
  return PLAN_IDS.every((id) => offers.some((o) => o.id === id)) ? offers : null;
}

// ── hub links ────────────────────────────────────────────────────────────

/**
 * NUUK hub base URL from NEXT_PUBLIC_HUB_URL (inlined at build time), without a
 * trailing slash. Null when unset or not https (http is allowed for localhost),
 * in which case checkout buttons render disabled.
 */
export function hubBaseUrl(raw: string | undefined = process.env.NEXT_PUBLIC_HUB_URL): string | null {
  if (!raw || !raw.trim()) return null;
  try {
    const url = new URL(raw.trim());
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol !== "https:" && !(local && url.protocol === "http:")) return null;
    return url.toString().replace(/\/+$/, "");
  } catch {
    return null;
  }
}

/** Checkout tokens the app appends as ?t=; anything else is ignored. */
const TOKEN_RE = /^[A-Za-z0-9._~-]{8,512}$/;
export const isCheckoutToken = (v: unknown): v is string => typeof v === "string" && TOKEN_RE.test(v);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const isEmail = (v: string): boolean => v.length <= 254 && EMAIL_RE.test(v);

/** Hub redirect that sends the visitor to the payment provider's checkout for one plan. */
export function checkoutHref(hub: string, plan: PaidPlan, who: { token: string } | { email: string }): string {
  const query = "token" in who ? `t=${encodeURIComponent(who.token)}` : `email=${encodeURIComponent(who.email.trim())}`;
  return `${hub}/v1/billing/checkout/${plan}?${query}`;
}

// ── website membership applications (hub /v1/membership/*) ───────────────

/** Plans the website sells: the free WhatsApp group and Premium. */
export type SitePlan = "free" | "premium";

/** ?plan= from the app or old links: "pro" no longer exists on the website and maps to Premium. */
export function sitePlanFrom(raw: string | null): SitePlan | null {
  if (raw === "free") return "free";
  if (raw === "premium" || raw === "pro") return "premium";
  return null;
}

/** Premium's own feature list, in display order. */
export const PREMIUM_FEATURES: readonly PlanFeature[] =
  FALLBACK_PLAN_OFFERS.find((o) => o.id === "premium")?.features.filter((f) => PLAN_FEATURE_ORDER.includes(f)) ?? [];

export const PREMIUM_PRICE_USD = FALLBACK_PLAN_OFFERS.find((o) => o.id === "premium")?.priceUsd ?? 99;

export interface ApplicationBody {
  plan: SitePlan;
  fullName: string;
  phone: string;
  email: string;
  fundingUsd: number;
  locale: string;
  consent: true;
  riskAck: true;
  website: string;
}

export interface ApplicationResult {
  ref: string;
  plan: SitePlan;
  status: string;
  whatsappUrl: string | null;
  paymentPath: string | null;
}

export interface PaymentWallet {
  asset: string;
  network: string;
  address: string;
  qrSvg: string;
}

export interface PaymentInfo {
  ref: string;
  status: string;
  firstName: string;
  priceUsd: number;
  wallets: PaymentWallet[];
  payNetwork: string | null;
  txHash: string | null;
  txSubmittedAt: string | null;
  paidAt: string | null;
}

export type ApiOutcome<T> = { ok: true; data: T } | { ok: false; status: number; error: string | null };

/** JSON call to the hub with a timeout; network failures come back as status 0, never thrown. */
export async function hubCall<T>(url: string, init: RequestInit = {}, timeoutMs = 15_000): Promise<ApiOutcome<T>> {
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: ctrl.signal, headers: { Accept: "application/json", ...(init.body ? { "Content-Type": "application/json" } : {}), ...init.headers } });
    const json = (await res.json().catch(() => null)) as { success?: boolean; data?: T; error?: string | null } | null;
    if (res.ok && json?.success) return { ok: true, data: json.data as T };
    return { ok: false, status: res.status, error: json?.error ?? null };
  } catch {
    return { ok: false, status: 0, error: null };
  } finally {
    window.clearTimeout(timer);
  }
}

/** Same rule as the hub: 7–15 digits, optional leading +, spaces/dashes/brackets allowed. */
export function isPhone(v: string): boolean {
  const t = v.trim();
  if (!/^\+?[\d\s().-]{7,24}$/.test(t)) return false;
  const digits = t.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
}

/** Only same-site payment paths from the hub are followed (never an absolute URL). */
export function safePaymentPath(path: string | null): string | null {
  return path && /^\/(?:uyelik\/odeme|[a-z]{2}\/membership\/payment)\/\?k=[A-Za-z0-9_-]{32,64}$/.test(path) ? path : null;
}
