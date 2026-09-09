"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { brokerCta, brokerHref } from "@/lib/brokers";
import type { Broker, SiteContent } from "@/content/en";

type Answers = { residence?: number; focus?: number; capital?: number };

/** Maps the three answers to a primary and an alternative partner slug. */
function recommend({ residence = 3, focus = 0, capital = 1 }: Required<Answers>): [string, string] {
  const isTurkey = residence === 0;
  const isGulf = residence === 1;
  const isLarge = capital === 3;
  if (focus === 1) return isTurkey ? ["midas", "saxo"] : ["saxo", "capital-com"];
  if (focus === 3) return ["darwinex", "tickmill"];
  if (focus === 2) return ["capital-com", isGulf ? "pepperstone" : "tickmill"];
  if (isTurkey) return ["tickmill", isLarge ? "saxo" : "pepperstone"];
  if (isGulf) return ["pepperstone", isLarge ? "saxo" : "tickmill"];
  return isLarge ? ["pepperstone", "saxo"] : ["pepperstone", "tickmill"];
}

const chipBase = "rounded-pill border px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200";
const chipIdle = `${chipBase} border-black/10 bg-white text-ink hover:border-primary hover:text-primary`;
const chipOn = `${chipBase} border-primary bg-primary text-white`;

export default function BrokerWizard({ c }: { c: SiteContent }) {
  const w = c.brokers.wizard;
  const [a, setA] = useState<Answers>({});
  const questions: { key: keyof Answers; q: string; options: string[] }[] = [
    { key: "residence", q: w.q1, options: w.o1 },
    { key: "focus", q: w.q2, options: w.o2 },
    { key: "capital", q: w.q3, options: w.o3 },
  ];
  const done = a.residence !== undefined && a.focus !== undefined && a.capital !== undefined;
  const bySlug = (slug: string) => c.brokers.list.find((b) => b.slug === slug);
  const [primary, alt] = done ? recommend(a as Required<Answers>).map(bySlug) : [undefined, undefined];

  const card = (b: Broker, isPrimary: boolean) => {
    const cta = brokerCta(c, b);
    return (
      <div className={`rv flex flex-col rounded-card p-6 lg:p-8 ${isPrimary ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-black/10"}`}>
        <p className={`kicker ${isPrimary ? "text-cyan" : "text-primary"}`}>{isPrimary ? w.result : w.alt}</p>
        <div className="mt-4 flex items-center gap-4">
          <div className={`rounded-2xl px-3 py-2 ${isPrimary ? "bg-white" : "bg-fog"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/brokers/${b.slug}.png`} alt={b.name} height={26} className="h-[26px] w-auto max-w-[130px] object-contain" />
          </div>
          <div>
            <p className="text-[20px] font-bold">{b.name}</p>
            <p className={`text-[13px] ${isPrimary ? "text-white/70" : "text-muted"}`}>{b.regulator}</p>
          </div>
        </div>
        <p className={`mt-5 text-[15px] leading-7 ${isPrimary ? "text-white/85" : "text-body"}`}>{w.reasons[b.slug as keyof typeof w.reasons]}</p>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Button href={cta.href} variant={isPrimary ? "primary" : "outline-dark"} size="sm" event="broker_cta_click" eventLabel={`wizard_${b.slug}`}>
            {cta.label}
          </Button>
          <Link href={brokerHref(c, b)} className={`inline-flex items-center gap-1 text-[14px] font-semibold ${isPrimary ? "text-white hover:text-cyan" : "text-ink hover:text-primary"}`}>
            {c.brokers.cardLabels.profile} <Icon name="arrow-up-right" size={14} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-card bg-fog p-6 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="h2-section">{w.title}</h2>
          <p className="mt-4 text-[15px] leading-7 text-body">{w.lead}</p>
          <ol className="mt-8 space-y-7">
            {questions.map((qs, i) => (
              <li key={qs.key}>
                <p className="flex items-center gap-3 text-[15px] font-bold text-ink">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-[12px] text-white">{i + 1}</span>
                  {qs.q}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {qs.options.map((o, j) => (
                    <button key={o} type="button" onClick={() => setA({ ...a, [qs.key]: j })} aria-pressed={a[qs.key] === j} className={a[qs.key] === j ? chipOn : chipIdle}>
                      {o}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          {done && (
            <button type="button" onClick={() => setA({})} className="mt-6 text-[14px] font-semibold text-primary hover:underline">
              {w.restart}
            </button>
          )}
        </div>
        <div className="lg:col-span-7">
          {primary && alt ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {card(primary, true)}
              {card(alt, false)}
            </div>
          ) : (
            <div className="flex h-full min-h-[260px] items-center justify-center rounded-card border border-dashed border-black/15 p-8 text-center text-[15px] text-muted">
              {w.q1} · {w.q2} · {w.q3}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
