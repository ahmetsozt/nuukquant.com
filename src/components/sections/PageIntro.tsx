import Link from "next/link";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Blob from "@/components/ui/Blob";
import Fill from "@/components/ui/Fill";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * Inner-page hero: headline left, blob visual right, then a breadcrumb bar.
 * Dark tone renders on black, light tone on off-white.
 */
export default function PageIntro({
  title,
  kicker,
  body,
  cta,
  secondary,
  children,
  visual,
  tone = "light",
  crumbs,
}: {
  title: string;
  kicker?: string;
  body?: string;
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
  visual?: ReactNode;
  tone?: "light" | "dark";
  crumbs?: { label: string; href?: string }[];
}) {
  const dark = tone === "dark";
  return (
    <>
      <section className={`relative overflow-hidden ${dark ? "bg-hero text-white" : "bg-fog"}`} aria-labelledby="page-heading">
        <div className="container-x grid gap-10 pt-12 pb-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-20 lg:pb-20">
          <div className="lg:col-span-6">
            {kicker && <p className={`kicker mb-4 ${dark ? "text-cyan" : ""}`}>{kicker}</p>}
            <h1 id="page-heading" className={`h1-display max-w-[720px] ${dark ? "text-white" : ""}`}>
              <Fill text={title} />
            </h1>
            {body && (
              <p className={`mt-6 max-w-[560px] text-[17px] leading-[1.55] ${dark ? "text-soft" : "text-body"}`}>
                <Fill text={body} />
              </p>
            )}
            {(cta || secondary) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {cta && (
                  <Button href={cta.href} event="cta_click" eventLabel={cta.label}>
                    {cta.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant={dark ? "outline" : "outline-dark"}>
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
            {children}
          </div>
          <div className="lg:col-span-6">
            <div className="mx-auto aspect-[5/4] w-full max-w-[400px] lg:max-w-[560px]">{visual ?? <Blob tone={dark ? "dark" : "light"} className="h-full w-full" />}</div>
          </div>
        </div>
      </section>
      {crumbs && crumbs.length > 0 && <JsonLd data={breadcrumbSchema(crumbs)} />}
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="border-b border-black/5 bg-white">
          <ol className="container-x flex flex-wrap items-center gap-2 py-3 text-[13px] text-body">
            {crumbs.map((cr, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted">/</span>}
                {cr.href ? (
                  <Link href={cr.href} className="hover:text-ink">
                    {cr.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-primary">{cr.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
