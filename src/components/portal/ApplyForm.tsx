"use client";

import { useEffect, useState, type FormEvent } from "react";
import { portalConfigured, supabase } from "@/lib/supabase";
import type { SiteContent } from "@/content/en";
import { Notice, btn, btnOutline, field, label } from "@/components/portal/ui";

type Plan = { slug: string; name: string; price: number; currency: string; interval: string; checkout_url: string | null };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Membership application: writes one 'new' row to applications; admins take it from there. */
export default function ApplyForm({ c, locale }: { c: SiteContent; locale: string }) {
  const t = c.apply;
  const f = t.form;
  const [plans, setPlans] = useState<Plan[]>([]);
  const [plan, setPlan] = useState<string>(() => new URLSearchParams(window.location.search).get("plan") ?? "");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const chosen = plans.find((p) => p.slug === plan);

  useEffect(() => {
    if (!portalConfigured) return;
    supabase()
      .from("plans")
      .select("slug,name,price,currency,interval,checkout_url")
      .eq("active", true)
      .order("sort")
      .then(({ data }) => data && setPlans(data as Plan[]));
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (String(d.get("_honey") ?? "")) return;
    const full_name = String(d.get("full_name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const accepted_terms = d.get("terms") === "on";
    const accepted_risk = d.get("risk") === "on";
    if (!full_name || !email || !plan || !accepted_terms || !accepted_risk) return setError(f.errorRequired);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError(f.errorEmail);
    setError(null);
    setState("sending");
    const row = {
      full_name,
      email,
      phone: String(d.get("phone") ?? "").trim() || null,
      country: String(d.get("country") ?? "").trim() || null,
      plan_slug: plan,
      experience: String(d.get("experience") ?? "") || null,
      capital_band: String(d.get("capital") ?? "") || null,
      message: String(d.get("message") ?? "").trim() || null,
      locale,
      source: document.referrer || null,
      accepted_terms,
      accepted_risk,
    };
    const { error } = await supabase().from("applications").insert(row);
    if (error) {
      setState("idle");
      return setError(f.error);
    }
    window.gtag?.("event", "membership_apply", { event_label: plan });
    setState("sent");
  }

  if (!portalConfigured) return <Notice>{c.portal.notConfigured}</Notice>;

  if (state === "sent") {
    return (
      <div className="rounded-card bg-white p-8 shadow-card lg:p-10">
        <p className="kicker text-primary">{t.kicker}</p>
        <h2 className="mt-2 text-[26px] font-bold text-ink">{t.success.title}</h2>
        <p className="mt-4 max-w-[640px] text-[15.5px] leading-7 text-body">{t.success.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {chosen?.checkout_url && (
            <a href={chosen.checkout_url} target="_blank" rel="noopener noreferrer" className={btn} data-event="checkout_click" data-label={chosen.slug}>
              {t.success.pay}
            </a>
          )}
          <a href={c.investors.loginCta.href} className={btnOutline}>
            {t.success.portal}
          </a>
        </div>
      </div>
    );
  }

  const planOptions = plans.length
    ? plans.map((p) => ({ slug: p.slug, label: `${p.name} · ${new Intl.NumberFormat(undefined, { style: "currency", currency: p.currency, maximumFractionDigits: 0 }).format(p.price)} / ${p.interval}` }))
    : c.signals.plans.map((p) => ({ slug: p.slug, label: `${p.name} · ${p.price} ${p.period}` }));

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 rounded-card bg-white p-6 shadow-card sm:grid-cols-2 lg:p-10">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="block sm:col-span-2">
        <span className={label}>{f.plan}</span>
        <div className="grid gap-2 sm:grid-cols-3">
          {planOptions.map((p) => (
            <button key={p.slug} type="button" onClick={() => setPlan(p.slug)} aria-pressed={plan === p.slug} className={`rounded-2xl border px-4 py-3 text-start text-[14px] font-semibold transition-colors ${plan === p.slug ? "border-primary bg-primary text-white" : "border-black/10 text-ink hover:border-primary"}`}>
              {p.label}
            </button>
          ))}
        </div>
      </label>
      <label className="block">
        <span className={label}>{f.fullName}</span>
        <input name="full_name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className={label}>{f.email}</span>
        <input name="email" type="email" required autoComplete="email" className={field} dir="ltr" />
      </label>
      <label className="block">
        <span className={label}>{f.phone}</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} dir="ltr" placeholder="+971 …" />
      </label>
      <label className="block">
        <span className={label}>{f.country}</span>
        <input name="country" autoComplete="country-name" className={field} />
      </label>
      <label className="block">
        <span className={label}>{f.experience}</span>
        <select name="experience" className={field} defaultValue="">
          <option value="" />
          {f.experiences.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className={label}>{f.capital}</span>
        <select name="capital" className={field} defaultValue="">
          <option value="" />
          {f.capitals.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>{f.message}</span>
        <textarea name="message" rows={3} className={field} />
      </label>
      <label className="flex items-start gap-3 text-[13.5px] leading-6 text-body sm:col-span-2">
        <input name="terms" type="checkbox" className="mt-1.5 size-4 accent-primary" /> <span>{f.terms}</span>
      </label>
      <label className="flex items-start gap-3 text-[13.5px] leading-6 text-body sm:col-span-2">
        <input name="risk" type="checkbox" className="mt-1.5 size-4 accent-primary" /> <span>{f.risk}</span>
      </label>
      {error && <Notice tone="error">{error}</Notice>}
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className={btn}>
          {state === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
