import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";

export default function PageIntro({
  title,
  kicker,
  body,
  cta,
  children,
  tone = "light",
}: {
  title: string;
  kicker?: string;
  body?: string;
  cta?: { label: string; href: string };
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section className={`${dark ? "bg-hero text-white" : "bg-paper"} border-b border-black/5`} aria-labelledby="page-heading">
      <div className="container-x pt-16 pb-14 lg:pt-24 lg:pb-20">
        {kicker && <p className={`kicker mb-4 ${dark ? "text-mint" : ""}`}>{kicker}</p>}
        <h1 id="page-heading" className={`h1-display max-w-[900px] ${dark ? "text-white" : ""}`}>
          <Fill text={title} />
        </h1>
        {body && (
          <p className={`mt-6 max-w-[640px] text-[17px] leading-[1.65] ${dark ? "text-soft" : "text-body"}`}>
            <Fill text={body} />
          </p>
        )}
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
