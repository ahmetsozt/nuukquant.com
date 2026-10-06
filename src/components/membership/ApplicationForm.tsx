"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { SiteContent } from "@/content/en";
import { buttonClass } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { hubCall, isEmail, isPhone, safePaymentPath, type ApplicationBody, type ApplicationResult, type SitePlan } from "@/lib/membership";

type Copy = SiteContent["membership"];
type Field = "name" | "phone" | "email" | "funding" | "consent" | "risk";

/** Fills "{privacy}"-style slots in a sentence with links. */
function withLinks(text: string, links: Record<string, ReactNode>): ReactNode[] {
  return text.split(/(\{\w+\})/g).map((part, i) => {
    const key = part.match(/^\{(\w+)\}$/)?.[1];
    return key && links[key] ? <span key={i}>{links[key]}</span> : <span key={i}>{part}</span>;
  });
}

const inputCls =
  "w-full rounded-xl border-[1.5px] bg-white px-4 py-3 text-[16px] text-ink transition-colors outline-none placeholder:text-muted focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

/**
 * Membership application in a native <dialog> (focus trap, Esc to close). Posts to the hub;
 * the free plan shows the WhatsApp group link, Premium continues to its private payment page.
 */
export default function ApplicationForm({
  m,
  locale,
  hub,
  plan,
  onPlanChange,
  onClose,
  legal,
}: {
  m: Copy;
  locale: string;
  hub: string | null;
  plan: SitePlan | null;
  onPlanChange: (p: SitePlan) => void;
  onClose: () => void;
  legal: { privacy: string; terms: string; risk: string };
}) {
  const f = m.form;
  const ref = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [values, setValues] = useState({ name: "", phone: "", email: "", funding: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [risk, setRisk] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<ApplicationResult | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (plan && !d.open) {
      setDone(null);
      setFormError(null);
      d.showModal();
    }
    if (!plan && d.open) d.close();
  }, [plan]);

  const validate = (): Partial<Record<Field, string>> => {
    const e: Partial<Record<Field, string>> = {};
    const name = values.name.trim().replace(/\s+/g, " ");
    if (name.length < 3 || name.split(" ").length < 2) e.name = f.errors.name;
    if (!isPhone(values.phone)) e.phone = f.errors.phone;
    if (!isEmail(values.email.trim())) e.email = f.errors.email;
    const funding = Number(values.funding);
    if (values.funding.trim() === "" || !Number.isInteger(funding) || funding < 0 || funding > 100_000_000) e.funding = f.errors.funding;
    if (!consent) e.consent = f.errors.consent;
    if (!risk) e.risk = f.errors.risk;
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!plan) return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    if (!hub) {
      setFormError(f.unavailable);
      return;
    }
    setBusy(true);
    setFormError(null);
    const body: ApplicationBody = {
      plan,
      fullName: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      fundingUsd: Number(values.funding),
      locale,
      consent: true,
      riskAck: true,
      website: values.website,
    };
    const res = await hubCall<ApplicationResult>(`${hub}/v1/membership/applications`, { method: "POST", body: JSON.stringify(body) });
    setBusy(false);
    if (!res.ok) {
      setFormError(res.status === 0 ? f.errors.network : res.status === 429 ? f.errors.rate : res.status >= 500 ? f.errors.generic : res.error ?? f.errors.generic);
      return;
    }
    const path = safePaymentPath(res.data.paymentPath);
    if (res.data.plan === "premium" && path) {
      window.location.assign(path);
      return;
    }
    setDone(res.data);
  };

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k as Field]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const fieldBlock = (k: Field, label: string, input: ReactNode, hint?: string) => (
    <div>
      <label htmlFor={`${id}-${k}`} className="mb-1.5 block text-[14px] font-semibold text-ink">
        {label}
      </label>
      {input}
      <p id={`${id}-${k}-hint`} aria-live="polite" className={`mt-1.5 px-1 text-[12.5px] leading-5 ${errors[k] ? "font-semibold text-down" : "text-muted"}`}>
        {errors[k] ?? hint ?? ""}
      </p>
    </div>
  );

  const link = (href: string, label: string) => (
    <Link href={href} target="_blank" className="font-semibold text-primary underline underline-offset-2">
      {label}
    </Link>
  );

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby={`${id}-title`}
      className="m-auto w-[calc(100%-24px)] max-w-[560px] rounded-card bg-white p-0 text-ink shadow-menu backdrop:bg-black/70"
    >
      <div className="max-h-[90dvh] overflow-y-auto p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="kicker mb-2">{plan === "premium" ? m.plans.premium.name : m.plans.free.name}</p>
            <h2 id={`${id}-title`} className="text-[24px] leading-tight">
              {done ? f.freeDoneTitle : f.title}
            </h2>
          </div>
          <button type="button" onClick={() => ref.current?.close()} aria-label={f.close} className="flex size-10 flex-none items-center justify-center rounded-full bg-fog text-ink hover:bg-line">
            <Icon name="close" size={18} />
          </button>
        </div>

        {done ? (
          <div className="mt-5">
            <p className="text-[15.5px] leading-6 text-body">{f.freeDoneBody.replace("{ref}", done.ref)}</p>
            {done.whatsappUrl && (
              <a href={done.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass("primary")} mt-6 w-full`} data-event="membership_group_join" data-label="free">
                {f.joinGroup}
              </a>
            )}
          </div>
        ) : (
          <form noValidate onSubmit={submit} className="mt-5 space-y-3">
            <p className="text-[14.5px] leading-6 text-body">{plan === "premium" ? f.leadPremium : f.leadFree}</p>

            <fieldset>
              <legend className="mb-2 text-[14px] font-semibold text-ink">{f.plan}</legend>
              <div className="grid grid-cols-2 gap-2">
                {(["free", "premium"] as const).map((p) => (
                  <label key={p} className={`flex cursor-pointer items-center gap-2 rounded-xl border-[1.5px] px-3 py-2.5 text-[14px] font-semibold has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/40 ${plan === p ? "border-primary bg-tint text-ink" : "border-line text-body"}`}>
                    <input type="radio" name={`${id}-plan`} value={p} checked={plan === p} onChange={() => onPlanChange(p)} className="sr-only" />
                    <span aria-hidden="true" className={`flex size-4 flex-none items-center justify-center rounded-full border-2 ${plan === p ? "border-primary" : "border-line"}`}>{plan === p && <span className="size-2 rounded-full bg-primary" />}</span>
                    {p === "premium" ? m.plans.premium.name : m.free}
                  </label>
                ))}
              </div>
            </fieldset>

            {fieldBlock("name", f.name, <input id={`${id}-name`} className={inputCls} autoComplete="name" maxLength={120} placeholder={f.namePh} value={values.name} onChange={set("name")} aria-invalid={Boolean(errors.name)} aria-describedby={`${id}-name-hint`} />)}
            {fieldBlock("phone", f.phone, <input id={`${id}-phone`} className={inputCls} type="tel" inputMode="tel" autoComplete="tel" maxLength={24} placeholder={f.phonePh} value={values.phone} onChange={set("phone")} aria-invalid={Boolean(errors.phone)} aria-describedby={`${id}-phone-hint`} />, f.phoneHint)}
            {fieldBlock("email", f.email, <input id={`${id}-email`} className={inputCls} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={254} placeholder={f.emailPh} value={values.email} onChange={set("email")} aria-invalid={Boolean(errors.email)} aria-describedby={`${id}-email-hint`} />, plan === "premium" ? f.emailHint : undefined)}
            {fieldBlock(
              "funding",
              f.funding,
              <input id={`${id}-funding`} className={`${inputCls} num`} type="number" inputMode="numeric" min={0} step={1} placeholder={f.fundingPh} value={values.funding} onChange={set("funding")} aria-invalid={Boolean(errors.funding)} aria-describedby={`${id}-funding-hint`} />,
              f.fundingHint,
            )}

            {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
              </label>
            </div>

            {(
              [
                ["consent", consent, setConsent, withLinks(plan === "premium" ? f.consentPremium : f.consent, { privacy: link(legal.privacy, f.privacy), terms: link(legal.terms, f.terms) })],
                ["risk", risk, setRisk, withLinks(f.risk, { risk: link(legal.risk, f.riskLink) })],
              ] as const
            ).map(([k, checked, setter, text]) => (
              <div key={k}>
                <label className="flex cursor-pointer items-start gap-3 text-[13.5px] leading-5 text-body">
                  <input
                    id={`${id}-${k}`}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                      setter(e.target.checked);
                      if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
                    }}
                    aria-invalid={Boolean(errors[k])}
                    className="mt-0.5 size-4 flex-none accent-primary"
                  />
                  <span>{text}</span>
                </label>
                {errors[k] && <p className="mt-1 ps-7 text-[12.5px] font-semibold text-down">{errors[k]}</p>}
              </div>
            ))}

            {plan === "premium" && <p className="rounded-xl bg-fog px-4 py-3 text-[13px] leading-5 text-body">{m.cryptoNote}</p>}

            {formError && (
              <p role="alert" className="rounded-xl bg-down/10 px-4 py-3 text-[14px] font-semibold text-down">
                {formError}
              </p>
            )}

            <button type="submit" disabled={busy} className={`${buttonClass("primary")} w-full disabled:cursor-wait disabled:opacity-60`} data-event="membership_apply_submit" data-label={plan ?? ""}>
              {busy ? f.submitting : f.submit}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
