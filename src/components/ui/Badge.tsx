import type { SiteContent, Status } from "@/content/en";

const styles: Record<Status, string> = {
  live: "bg-fog text-ink ring-1 ring-black/5",
  verified: "bg-fog text-ink ring-1 ring-black/5",
  model: "bg-fog text-body ring-1 ring-black/5",
  test: "bg-[#fff4d6] text-[#8a5b00]",
  paused: "bg-fog text-body",
  soon: "bg-fog text-muted",
  pending: "bg-[#fff4d6] text-[#8a5b00]",
};

export default function Badge({ status, c, className = "" }: { status: Status; c: SiteContent; className?: string }) {
  const label = c.ui[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium ${styles[status]} ${className}`}>
      {(status === "live" || status === "verified") && <span className="rec-dot" />}
      {label}
    </span>
  );
}
