"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import type { SiteContent } from "@/content/en";

type Labels = SiteContent["contact"]["form"];

const field =
  "w-full rounded-md border border-black/10 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function ContactForm({ labels: t, email }: { labels: Labels; email: string }) {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !from || !message) {
      setError(t.errorRequired);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) {
      setError(t.errorEmail);
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`${t.subject}: ${topic} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${from}>`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-1 block text-[13px] text-body">{t.name}</span>
        <input name="name" required autoComplete="name" className={field} placeholder={t.namePlaceholder} />
      </label>
      <label className="block">
        <span className="mb-1 block text-[13px] text-body">{t.email}</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder={t.emailPlaceholder} dir="ltr" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-[13px] text-body">{t.topic}</span>
        <select name="topic" className={field} defaultValue={t.topics[0]}>
          {t.topics.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-[13px] text-body">{t.message}</span>
        <textarea name="message" required rows={5} className={field} placeholder={t.messagePlaceholder} />
      </label>
      {error && (
        <p role="alert" className="text-[13px] text-down sm:col-span-2">
          {error}
        </p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit">{t.submit}</Button>
      </div>
      <p className="text-[12px] text-muted sm:col-span-2">{t.note}</p>
    </form>
  );
}
