"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { SiteContent } from "@/content/en";
import { buttonClass } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import ApplicationForm from "@/components/membership/ApplicationForm";
import { PREMIUM_FEATURES, PREMIUM_PRICE_USD, priceAmount, sitePlanFrom, type SitePlan } from "@/lib/membership";

type Copy = SiteContent["membership"];

let captured: SitePlan | null | undefined;
/** ?plan= as the visitor arrived (the app sends plan=pro|premium), read once per page load. */
function readPlan(): SitePlan | null {
  if (captured === undefined) captured = sitePlanFrom(new URLSearchParams(window.location.search).get("plan"));
  return captured;
}
const subscribeNever = () => () => {};

/** Old app links carry ?t= (checkout token) and ?hata= (hub notices); neither is used any more, so drop them from the address bar. */
function tidyQuery() {
  const url = new URL(window.location.href);
  let changed = false;
  for (const k of ["t", "hata"]) {
    if (url.searchParams.has(k)) {
      url.searchParams.delete(k);
      changed = true;
    }
  }
  if (changed) window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
}

function PlanCard({
  dark,
  selected,
  badge,
  name,
  tagline,
  price,
  priceNote,
  lead,
  features,
  cta,
  onChoose,
  event,
}: {
  dark: boolean;
  selected: boolean;
  badge?: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  lead?: string;
  features: string[];
  cta: string;
  onChoose: () => void;
  event: string;
}) {
  return (
    <li
      aria-current={selected ? "true" : undefined}
      className={`relative flex flex-col rounded-card p-7 lg:p-9 ${dark ? "bg-ink text-white" : "bg-white text-ink shadow-card ring-1 ring-black/5"} ${selected ? "ring-2 ring-primary ring-offset-4 ring-offset-fog" : ""}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className={`text-[22px] ${dark ? "text-white" : ""}`}>{name}</h3>
        {badge && <span className="rounded-pill bg-cyan px-3 py-1 text-[12px] font-semibold text-navy-deep">{badge}</span>}
      </div>
      <p className={`mt-1 text-[14.5px] ${dark ? "text-soft" : "text-body"}`}>{tagline}</p>
      <p className="mt-6 flex items-baseline gap-2">
        <span className={`num text-[44px] leading-none font-bold ${dark ? "text-white" : "text-ink"}`}>{price}</span>
        <span className={`text-[13px] ${dark ? "text-soft" : "text-muted"}`}>{priceNote}</span>
      </p>
      {lead && <p className={`mt-6 text-[13px] font-semibold ${dark ? "text-cyan" : "text-primary"}`}>{lead}</p>}
      <ul className={`${lead ? "mt-3" : "mt-6"} flex-1 space-y-2.5 text-[14.5px] ${dark ? "text-soft" : "text-body"}`}>
        {features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Icon name="check" size={17} className={`mt-0.5 flex-none ${dark ? "text-cyan" : "text-primary"}`} />
            {f}
          </li>
        ))}
      </ul>
      <button type="button" onClick={onChoose} className={`${buttonClass(dark ? "primary" : "outline-dark")} mt-8 w-full`} data-event={event}>
        {cta}
      </button>
    </li>
  );
}

/**
 * The two website plans (free WhatsApp group, Premium). Either button opens the
 * application form; Premium continues to a private crypto payment page.
 */
export default function MembershipPlans({ m, locale, hub }: { m: Copy; locale: string; hub: string | null }) {
  const arrivedWith = useSyncExternalStore(subscribeNever, readPlan, () => null);
  const [open, setOpen] = useState<SitePlan | null>(null);
  useEffect(tidyQuery, []);

  const legalHref = (needle: string, fallback: string) => m.legal.find((l) => l.href.includes(needle))?.href ?? fallback;
  const legal = {
    privacy: legalHref("privacy", "/legal/privacy/"),
    terms: legalHref("subscription", "/legal/subscription-terms/"),
    risk: legalHref("risk", "/legal/risk-disclosure/"),
  };

  return (
    <section id="plans" className="section-pad bg-fog" aria-labelledby="plans-heading">
      <div className="container-x max-w-[1080px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 id="plans-heading" className="h2-section">
            {m.plansTitle}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-body">{m.plansLead}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          <PlanCard
            dark={false}
            selected={arrivedWith === "free"}
            name={m.plans.free.name}
            tagline={m.plans.free.tagline}
            price={m.free}
            priceNote={m.forever}
            features={[...m.plans.free.features]}
            cta={m.plans.free.cta}
            onChoose={() => setOpen("free")}
            event="membership_choose_free"
          />
          <PlanCard
            dark
            selected={arrivedWith === "premium"}
            badge={m.recommended}
            name={m.plans.premium.name}
            tagline={m.plans.premium.tagline}
            price={priceAmount(locale, { priceUsd: PREMIUM_PRICE_USD }) ?? ""}
            priceNote={m.perMonth}
            lead={m.plans.premium.everything}
            features={PREMIUM_FEATURES.map((f) => m.features[f])}
            cta={m.plans.premium.cta}
            onChoose={() => setOpen("premium")}
            event="membership_choose_premium"
          />
        </ul>

        <div className="mx-auto mt-8 max-w-[760px] space-y-2 text-center text-[13px] leading-5 text-body">
          <p className="flex items-center justify-center gap-2 font-semibold text-ink">
            <Icon name="shield" size={16} className="flex-none text-primary" />
            {m.cryptoNote}
          </p>
          <p>{m.custodyNote}</p>
          {m.fine.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <ApplicationForm m={m} locale={locale} hub={hub} plan={open} onPlanChange={setOpen} onClose={() => setOpen(null)} legal={legal} />
    </section>
  );
}
