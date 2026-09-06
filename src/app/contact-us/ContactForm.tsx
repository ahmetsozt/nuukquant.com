"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { brand } from "@/content/site";

const field =
  "w-full rounded-md border border-fog bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-1 block text-[13px] text-body">Name</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="block">
        <span className="mb-1 block text-[13px] text-body">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-[13px] text-body">Company (optional)</span>
        <input name="company" autoComplete="organization" className={field} placeholder="Company" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-[13px] text-body">Message</span>
        <textarea name="message" required rows={5} className={field} placeholder="How can we help?" />
      </label>
      {error && (
        <p role="alert" className="text-[13px] text-[#d75237] sm:col-span-2">
          {error}
        </p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit">Send enquiry</Button>
      </div>
      <p className="text-[12px] text-muted sm:col-span-2">
        This opens your email client with the message pre-filled. No data is stored on this site.
      </p>
    </form>
  );
}
