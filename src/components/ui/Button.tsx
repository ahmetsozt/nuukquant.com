import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "cyan" | "outline" | "outline-dark" | "ghost" | "header";
type Size = "md" | "sm";

const base =
  "btn inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

const sizes: Record<Size, string> = {
  md: "px-6 py-4 text-[16px] leading-none",
  sm: "px-5 py-3 text-[14px] leading-none",
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  cyan: "bg-cyan text-navy-deep hover:bg-[#3ddff7]",
  outline: "border-[1.5px] border-white text-white hover:bg-white hover:text-ink",
  "outline-dark": "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-body hover:text-ink",
  header: "bg-primary text-white hover:bg-primary-dark",
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`rtl:rotate-180 ${className}`} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  onClick,
  type,
  event,
  eventLabel,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  /** GA4 event name fired on click (see Analytics.tsx). */
  event?: string;
  eventLabel?: string;
}) {
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const track = event ? { "data-event": event, "data-label": eventLabel } : {};
  if (href) {
    // Internal paths go through next/link; external, mailto and placeholder links use a plain anchor.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={cls} {...track}>
          {inner}
        </Link>
      );
    }
    const external = /^https?:/.test(href);
    return (
      <a href={href.startsWith("[") ? "#" : href} className={cls} {...track} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} onClick={onClick} {...track}>
      {inner}
    </button>
  );
}
