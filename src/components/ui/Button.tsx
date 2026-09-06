import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-beige" | "ghost" | "header";

const base =
  "btn inline-flex items-center justify-center text-[15px] font-medium transition-[background-color,border-color,color,opacity] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

const variants: Record<Variant, string> = {
  primary: "rounded-md bg-primary px-5 py-4 text-white hover:bg-primary-dark",
  outline: "rounded-md border-[1.5px] border-primary px-5 py-4 text-white hover:bg-primary/10",
  "outline-beige":
    "rounded-md border-[1.5px] border-beige px-5 py-4 text-white hover:border-white hover:opacity-80",
  ghost: "px-4 py-3 text-body hover:text-ink",
  header: "h-full bg-primary px-5 text-white hover:bg-primary-dark",
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`rtl:rotate-180 ${className}`}
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l5 5.5L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const inner =
    variant === "ghost" || variant === "header" ? (
      <span className="inline-flex items-center gap-2">{children}</span>
    ) : (
      <span className="swap">
        <span>
          {children}
          {arrow && <Arrow />}
        </span>
        <span aria-hidden="true">
          {children}
          {arrow && <Arrow />}
        </span>
      </span>
    );
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
