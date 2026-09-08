import type { SiteContent, Status } from "@/content/en";

const styles: Record<Status, string> = {
  live: "bg-tint text-primary",
  verified: "bg-tint text-primary",
  test: "bg-[#fff4d6] text-[#8a5b00]",
  paused: "bg-fog text-body",
  soon: "bg-fog text-muted",
  pending: "bg-[#fff4d6] text-[#8a5b00]",
};

export default function Badge({ status, c, className = "" }: { status: Status; c: SiteContent; className?: string }) {
  const label = c.ui[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-[12px] font-semibold ${styles[status]} ${className}`}>
      {(status === "live" || status === "verified") && <span className="size-1.5 rounded-full bg-primary" />}
      {label}
    </span>
  );
}
