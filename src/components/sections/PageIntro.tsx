import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

export default function PageIntro({
  title,
  kicker,
  body,
  cta,
  children,
}: {
  title: string;
  kicker?: string;
  body?: string;
  cta?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white" aria-labelledby="page-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_20%,rgba(127,232,200,0.18),transparent_60%)]" />
      <div className="container-x relative z-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
        {kicker && <p className="mb-3 text-[14px] tracking-[3px] text-mint uppercase">{kicker}</p>}
        <h1 id="page-heading" className="text-[44px] leading-[1.1] text-white lg:text-[56px] lg:leading-[1.15] 2xl:text-[64px]">
          {title}
        </h1>
        {body && <p className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-white/85">{body}</p>}
        {cta && (
          <div className="mt-8">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
