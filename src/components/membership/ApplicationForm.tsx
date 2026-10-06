"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { SiteContent } from "@/content/en";
import { buttonClass } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { CountryCode } from "libphonenumber-js/max";
import PhoneField, { countryName, defaultCountry, phoneHint } from "@/components/membership/PhoneField";
import { checkEmail, checkName, checkPhone, type EmailProblem, type NameProblem, type PhoneCheck } from "@/lib/contact";
import { hubCall, safePaymentPath, type ApplicationBody, type ApplicationResult, type SitePlan } from "@/lib/membership";

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
  const [country, setCountry] = useState<CountryCode>(() => defaultCountry(locale));
  const [suggestion, setSuggestion] = useState<string | null>(null);
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

  const fill = (t: string, vars: Record<string, string | number>) => Object.entries(vars).reduce((acc, [k, v]) => acc.replace(`{${k}}`, String(v)), t);

  const nameMessage = (p: NameProblem) => (p === "chars" ? f.errors.nameChars : p === "fake" ? f.errors.nameFake : f.errors.name);
  const emailMessage = (p: EmailProblem | "no_mx", hint?: string) =>
    ({
      empty: f.errors.email,
      format: f.errors.email,
      placeholder: f.errors.emailPlaceholder,
      disposable: f.errors.emailDisposable,
      fake: f.errors.emailFake,
      typo: fill(f.errors.emailTypo, { suggestion: hint ?? "" }),
      no_mx: f.errors.emailNoMx,
    })[p];
  const phoneMessage = (r: Extract<PhoneCheck, { ok: false }>) => {
    const cc = r.country ?? country;
    const n = r.lengths.length > 1 ? `${Math.min(...r.lengths)}–${Math.max(...r.lengths)}` : String(r.lengths[0] ?? "");
    const vars = { country: countryName(locale, cc), n, d: r.digits };
    switch (r.problem) {
      case "too_short":
        return fill(f.errors.phoneShort, vars);
      case "too_long":
        return fill(f.errors.phoneLong, vars);
      case "not_mobile":
        return f.errors.phoneNotMobile;
      case "pattern":
        return f.errors.phonePattern;
      case "country":
        return f.errors.phoneCountry;
      default:
        return fill(f.errors.phone, vars);
    }
  };

  const validate = (): Partial<Record<Field, string>> => {
    const e: Partial<Record<Field, string>> = {};
    const name = checkName(values.name);
    if (!name.ok) e.name = nameMessage(name.problem);
    const phone = checkPhone(values.phone, country);
    if (!phone.ok) e.phone = phoneMessage(phone);
    const email = checkEmail(values.email);
    setSuggestion(!email.ok && email.problem === "typo" ? email.suggestion ?? null : null);
    if (!email.ok) e.email = emailMessage(email.problem, email.suggestion);
    const funding = Number(values.funding);
    if (values.funding.trim() === "" || !Number.isInteger(funding) || funding < 0 || funding > 100_000_000) e.funding = f.errors.funding;
    if (!consent) e.consent = f.errors.consent;
    if (!risk) e.risk = f.errors.risk;
    return e;
  };

  /** Hub answers contact:<field>:<problem> when its checks (incl. the MX lookup) disagree. */
  const serverFieldError = (code: string | null): boolean => {
    const m2 = code?.match(/^contact:(name|phone|email):(\w+)$/);
    if (!m2) return false;
    const [, field, problem] = m2;
    const message =
      field === "name"
        ? nameMessage(problem as NameProblem)
        : field === "email"
          ? emailMessage(problem as EmailProblem | "no_mx")
          : problem === "pattern"
            ? f.errors.phonePattern
            : problem === "not_mobile"
              ? f.errors.phoneNotMobile
              : fill(f.errors.phone, { country: countryName(locale, country) });
    setErrors({ [field as Field]: message });
    document.getElementById(`${id}-${field}`)?.focus();
    return true;
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
      phone: (() => {
        const p = checkPhone(values.phone, country);
        return p.ok ? p.e164 : values.phone.trim();
      })(),
      country,
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
      if (res.status === 400 && serverFieldError(res.error)) return;
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
            {fieldBlock(
              "phone",
              f.phone,
              <PhoneField
                id={`${id}-phone`}
                locale={locale}
                country={country}
                value={values.phone}
                invalid={Boolean(errors.phone)}
                label={f.phone}
                countryLabel={f.country}
                describedBy={`${id}-phone-hint`}
                onCountry={(cc) => {
                  setCountry(cc);
                  if (errors.phone) setErrors((x) => ({ ...x, phone: undefined }));
                }}
                onValue={(v) => {
                  setValues((x) => ({ ...x, phone: v }));
                  if (v.trim().startsWith("+")) {
                    const p = checkPhone(v, null);
                    if (p.country && p.country !== country) setCountry(p.country);
                  }
                  if (errors.phone) setErrors((x) => ({ ...x, phone: undefined }));
                }}
              />,
              phoneHint(f.phoneHint, locale, country),
            )}
            {fieldBlock("email", f.email, <input id={`${id}-email`} className={inputCls} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={254} placeholder={f.emailPh} value={values.email} onChange={set("email")} aria-invalid={Boolean(errors.email)} aria-describedby={`${id}-email-hint`} />, plan === "premium" ? f.emailHint : undefined)}
            {suggestion && (
              <button
                type="button"
                onClick={() => {
                  setValues((x) => ({ ...x, email: suggestion }));
                  setSuggestion(null);
                  setErrors((x) => ({ ...x, email: undefined }));
                }}
                className="-mt-1 ms-1 text-[13px] font-semibold text-primary underline underline-offset-2"
              >
                {f.errors.emailUseSuggestion}: {suggestion}
              </button>
            )}
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
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex size-5 flex-none items-center justify-center rounded-md border-2 bg-white text-white transition-colors peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 ${errors[k] ? "border-down" : "border-line"}`}
                  >
                    {checked && <Icon name="check" size={13} strokeWidth={3} />}
                  </span>
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
