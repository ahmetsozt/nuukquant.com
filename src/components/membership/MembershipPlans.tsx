"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { SiteContent } from "@/content/en";
import Button, { buttonClass } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import {
  FALLBACK_PLAN_OFFERS,
  checkoutHref,
  featureMatrix,
  isCheckoutToken,
  isEmail,
  isPaidPlan,
  lowerPlan,
  parsePlanOffers,
  planHighlights,
  priceAmount,
  type PaidPlan,
  type PlanOffer,
} from "@/lib/membership";

type Copy = SiteContent["membership"];
/** `?hata=` set by the hub when it sends the visitor back instead of to the payment page. */
type CheckoutNotice = "paymentSoon" | "linkInvalid";
type CheckoutQuery = { plan: PaidPlan | null; token: string | null; notice: CheckoutNotice | null };

const NOTICE_PARAM: Record<string, CheckoutNotice> = { odeme_yakinda: "paymentSoon", baglanti_gecersiz: "linkInvalid" };

const PLANS_TIMEOUT_MS = 6000;
const SERVER_QUERY: CheckoutQuery = { plan: null, token: null, notice: null };

/**
 * ?plan= and ?t= as the app sent them, read once per page load. The token is
 * kept here after it is removed from the address bar (see stripToken), so a
 * re-render never loses it.
 */
let captured: CheckoutQuery | null = null;
function readQuery(): CheckoutQuery {
  if (captured) return captured;
  const q = new URLSearchParams(window.location.search);
  const plan = q.get("plan");
  const token = q.get("t");
  const notice = NOTICE_PARAM[q.get("hata") ?? ""] ?? null;
  captured = { plan: isPaidPlan(plan) ? plan : null, token: isCheckoutToken(token) ? token : null, notice };
  return captured;
}
const subscribeNever = () => () => {};

/** Drops ?t= from the visible URL so analytics, history and shared links never carry the checkout token. */
function stripToken() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("t")) return;
  url.searchParams.delete("t");
  window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
}

const fill = (template: string, plan: string) => template.replace("{plan}", plan);

function usePlanOffers(hub: string | null): PlanOffer[] {
  const [offers, setOffers] = useState<PlanOffer[]>(() => [...FALLBACK_PLAN_OFFERS]);
  useEffect(() => {
    if (!hub) return;
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), PLANS_TIMEOUT_MS);
    fetch(`${hub}/v1/plans`, { signal: ctrl.signal, headers: { Accept: "application/json" } })
      .then((res) => (res.ok ? res.json() : null))
      .then((json: unknown) => {
        const live = parsePlanOffers(json);
        if (live) setOffers(live);
      })
      // Hub unreachable, CORS-blocked or slow: the static list (same prices) stays on screen by design.
      .catch(() => undefined)
      .finally(() => window.clearTimeout(timer));
    return () => {
      window.clearTimeout(timer);
      ctrl.abort();
    };
  }, [hub]);
  return offers;
}

function CheckoutAction({
  m,
  hub,
  plan,
  name,
  token,
  email,
  dark,
  onInvalidEmail,
}: {
  m: Copy;
  hub: string | null;
  plan: PaidPlan;
  name: string;
  token: string | null;
  email: string;
  dark: boolean;
  onInvalidEmail: () => void;
}) {
  const variant = dark ? "primary" : "outline-dark";
  if (!hub) {
    return (
      <span aria-disabled="true" className={`${buttonClass(variant)} w-full cursor-not-allowed border-transparent ${dark ? "bg-white/10 text-white/60 hover:bg-white/10" : "bg-fog text-muted hover:bg-fog hover:text-muted"}`}>
        {m.soon}
      </span>
    );
  }
  const label = fill(m.buy, name);
  const href = token ? checkoutHref(hub, plan, { token }) : isEmail(email.trim()) ? checkoutHref(hub, plan, { email }) : null;
  if (!href) {
    return (
      <button type="button" onClick={onInvalidEmail} className={`${buttonClass(variant)} w-full`} data-event="membership_checkout_blocked" data-label={plan}>
        {label}
      </button>
    );
  }
  return (
    <a href={href} rel="nofollow" className={`${buttonClass(variant)} w-full`} data-event="membership_checkout_click" data-label={plan}>
      {label}
    </a>
  );
}

function PlanCard({
  m,
  locale,
  offers,
  offer,
  selected,
  action,
}: {
  m: Copy;
  locale: string;
  offers: PlanOffer[];
  offer: PlanOffer;
  selected: boolean;
  action: ReactNode;
}) {
  const dark = offer.highlighted;
  const amount = priceAmount(locale, offer);
  const lower = lowerPlan(offers, offer.id);
  const tagline = m.taglines[offer.id];
  return (
    <li
      aria-current={selected ? "true" : undefined}
      className={`relative flex flex-col rounded-card p-7 lg:p-8 ${dark ? "bg-ink text-white" : "bg-white text-ink shadow-card ring-1 ring-black/5"} ${selected ? "ring-2 ring-primary ring-offset-4 ring-offset-fog" : ""}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className={`text-[22px] ${dark ? "text-white" : ""}`}>{offer.name}</h3>
        {offer.highlighted && <span className="rounded-pill bg-cyan px-3 py-1 text-[12px] font-semibold text-navy-deep">{m.recommended}</span>}
        {selected && <span className="rounded-pill bg-tint px-3 py-1 text-[12px] font-semibold text-primary">{m.selected}</span>}
      </div>
      <p className={`mt-1 text-[14.5px] ${dark ? "text-soft" : "text-body"}`}>{tagline}</p>
      <p className="mt-6 flex items-baseline gap-2">
        <span className={`num text-[40px] leading-none font-bold ${dark ? "text-white" : "text-ink"}`}>{amount ?? m.free}</span>
        <span className={`text-[13px] ${dark ? "text-soft" : "text-muted"}`}>{amount ? (offer.interval === "month" ? m.perMonth : "") : m.forever}</span>
      </p>
      {lower && <p className={`mt-6 text-[13px] font-semibold ${dark ? "text-cyan" : "text-primary"}`}>{fill(m.everythingIn, lower.name)}</p>}
      <ul className={`${lower ? "mt-3" : "mt-6"} flex-1 space-y-2.5 text-[14.5px] ${dark ? "text-soft" : "text-body"}`}>
        {planHighlights(offers, offer.id).map((f) => (
          <li key={f} className="flex gap-2.5">
            <Icon name="check" size={17} className={`mt-0.5 flex-none ${dark ? "text-cyan" : "text-primary"}`} />
            {m.features[f]}
          </li>
        ))}
      </ul>
      <div className="mt-8">{action}</div>
    </li>
  );
}

function CompareTable({ m, offers }: { m: Copy; offers: PlanOffer[] }) {
  const sorted = [...offers].sort((a, b) => a.priceUsd - b.priceUsd);
  const rows = featureMatrix(offers);
  return (
    <div className="mt-10 overflow-hidden rounded-card ring-1 ring-black/10">
      <table className="w-full table-fixed border-collapse text-[13px] sm:text-[15px]">
        <caption className="sr-only">{m.compareTitle}</caption>
        <colgroup>
          <col className="w-[36%] sm:w-[46%]" />
          {sorted.map((o) => (
            <col key={o.id} />
          ))}
        </colgroup>
        <thead>
          <tr className="bg-fog">
            <th scope="col" className="px-3 py-4 text-start text-[11px] font-semibold tracking-[0.08em] text-muted uppercase sm:px-6 sm:text-[12px]">
              {m.feature}
            </th>
            {sorted.map((o) => (
              <th key={o.id} scope="col" className={`px-0.5 py-4 text-center text-[12px] font-bold sm:px-4 sm:text-[16px] ${o.highlighted ? "bg-primary text-white" : "text-ink"}`}>
                {o.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-t border-black/5">
              <th scope="row" className="px-3 py-3.5 text-start font-medium text-ink sm:px-6">
                {m.features[row.feature]}
              </th>
              {sorted.map((o) => {
                const cell = row.cells[o.id];
                return (
                  <td key={o.id} className={`px-1 py-3.5 text-center sm:px-4 ${o.highlighted ? "bg-tint/60" : ""}`}>
                    {cell === "yes" && (
                      <>
                        <Icon name="check" size={18} strokeWidth={2} className="inline-block text-primary" />
                        <span className="sr-only">{m.included}</span>
                      </>
                    )}
                    {cell === "superseded" && <span className="text-[12px] font-semibold text-primary sm:text-[13px]">{m.realtime}</span>}
                    {cell === "no" && (
                      <>
                        <span aria-hidden="true" className="text-muted">
                          –
                        </span>
                        <span className="sr-only">{m.notIncluded}</span>
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Plan cards, checkout links and the comparison table. Prices render from the
 * static list (so the exported HTML is complete) and refresh from the hub.
 * Checkout buttons are plain links to the hub, which redirects to the payment
 * provider: with the app's ?t= token when present, otherwise with the e-mail
 * typed here.
 */
export default function MembershipPlans({ m, locale, hub }: { m: Copy; locale: string; hub: string | null }) {
  const offers = usePlanOffers(hub);
  const query = useSyncExternalStore(subscribeNever, readQuery, () => SERVER_QUERY);
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const emailValid = isEmail(email.trim());
  const sorted = [...offers].sort((a, b) => a.priceUsd - b.priceUsd);

  useEffect(stripToken, []);

  const flagEmail = () => {
    setShowError(true);
    inputRef.current?.focus();
  };

  return (
    <>
      <section id="plans" className="section-pad bg-fog" aria-labelledby="plans-heading">
        <div className="container-x">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 id="plans-heading" className="h2-section">
              {m.plansTitle}
            </h2>
            <p className="mt-5 text-[17px] leading-[1.55] text-body">{m.plansLead}</p>
          </div>

          {query.notice && (
            <p role="status" className="mx-auto mt-8 flex max-w-[560px] items-start gap-3 rounded-card-sm bg-white px-5 py-4 text-[14.5px] leading-6 text-ink ring-1 ring-black/5">
              <Icon name="shield" size={20} className="mt-0.5 flex-none text-primary" />
              {m.notices[query.notice]}
            </p>
          )}

          {hub && query.token && (
            <p className="mx-auto mt-8 flex max-w-[560px] items-start gap-3 rounded-card-sm bg-white px-5 py-4 text-[14.5px] leading-6 text-ink ring-1 ring-black/5">
              <Icon name="shield" size={20} className="mt-0.5 flex-none text-primary" />
              {m.tokenNote}
            </p>
          )}

          {hub && !query.token && (
            <div className="mx-auto mt-8 max-w-[480px]">
              <label htmlFor={inputId} className="mb-2 block text-[14px] font-semibold text-ink">
                {m.email.label}
              </label>
              <input
                ref={inputRef}
                id={inputId}
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                maxLength={254}
                value={email}
                placeholder={m.email.placeholder}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (showError && isEmail(e.target.value.trim())) setShowError(false);
                }}
                onBlur={() => setShowError(email.trim() !== "" && !emailValid)}
                aria-invalid={showError}
                aria-describedby={`${inputId}-hint`}
                className={`w-full rounded-pill border-[1.5px] bg-white px-5 py-3.5 text-[16px] text-ink transition-colors outline-none placeholder:text-muted focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 ${showError ? "border-down" : "border-line"}`}
              />
              <p id={`${inputId}-hint`} aria-live="polite" className={`mt-2 px-1 text-[13px] leading-5 ${showError ? "font-semibold text-down" : "text-muted"}`}>
                {showError ? m.email.error : m.email.hint}
              </p>
            </div>
          )}

          <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
            {sorted.map((offer) => (
              <PlanCard
                key={offer.id}
                m={m}
                locale={locale}
                offers={offers}
                offer={offer}
                selected={query.plan === offer.id}
                action={
                  isPaidPlan(offer.id) ? (
                    <CheckoutAction m={m} hub={hub} plan={offer.id} name={offer.name} token={query.token} email={email} dark={offer.highlighted} onInvalidEmail={flagEmail} />
                  ) : (
                    <Button href="#app" variant={offer.highlighted ? "primary" : "outline-dark"} className="w-full" event="membership_app_click" eventLabel="free">
                      {m.freeCta}
                    </Button>
                  )
                }
              />
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-[860px] space-y-2 text-center text-[13px] leading-5 text-body">
            <p className="flex items-center justify-center gap-2 font-semibold text-ink">
              <Icon name="shield" size={16} className="flex-none text-primary" />
              {m.secure}
            </p>
            {m.fine.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-label={m.compareTitle}>
        <div className="container-x max-w-[1080px]">
          <SectionHead title={m.compareTitle} align="center" />
          <CompareTable m={m} offers={offers} />
        </div>
      </section>
    </>
  );
}
