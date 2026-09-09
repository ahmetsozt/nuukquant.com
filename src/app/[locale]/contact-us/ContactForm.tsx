"use client";

import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import type { SiteContent } from "@/content/en";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Labels = SiteContent["contact"]["form"];

/** FormSubmit relay: deliveries go to the inbox below; the address itself never appears in the page. */
const ENDPOINT = "https://formsubmit.co/ajax/ahmet@ahmetsozturk.com";

const field =
  "w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
const label = "mb-1.5 block text-[13px] font-semibold text-ink";

export default function ContactForm({ labels: t, email }: { labels: Labels; email: string }) {
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const started = useRef(false);

  function onFocus() {
    if (started.current) return;
    started.current = true;
    window.gtag?.("event", "form_start");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (String(data.get("_honey") ?? "")) return; // bot filled the hidden field
    if (!name || !from || !message) {
      setError(t.errorRequired);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) {
      setError(t.errorEmail);
      return;
    }
    setError(null);
    setState("sending");
    const subject = `${t.subject}: ${topic} — ${name}`;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email: from, topic, message, _subject: subject, _template: "table", _captcha: "false", _replyto: from }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      window.gtag?.("event", "form_submit", { event_label: topic });
      setState("sent");
      form.reset();
    } catch {
      setState("idle");
      setError(t.sendError);
    }
  }

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="block">
        <span className={label}>{t.name}</span>
        <input name="name" required autoComplete="name" className={field} placeholder={t.namePlaceholder} />
      </label>
      <label className="block">
        <span className={label}>{t.email}</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder={t.emailPlaceholder} dir="ltr" />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>{t.topic}</span>
        <select name="topic" className={field} defaultValue={t.topics[0]}>
          {t.topics.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>{t.message}</span>
        <textarea name="message" required rows={5} className={field} placeholder={t.messagePlaceholder} />
      </label>
      {error && (
        <p role="alert" className="text-[13px] text-down sm:col-span-2">
          {error}{error === t.sendError && <> <a href={`mailto:${email}`} className="font-semibold underline">{email}</a></>}
        </p>
      )}
      {state === "sent" && (
        <p role="status" className="rounded-2xl bg-tint px-4 py-3 text-[14px] font-semibold text-primary-dark sm:col-span-2">
          {t.success}
        </p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={state === "sending"}>{state === "sending" ? t.sending : t.submit}</Button>
      </div>
      <p className="text-[12px] text-muted sm:col-span-2">{t.note}</p>
    </form>
  );
}
