import type { SiteContent, Status } from "@/content/en";

const styles: Record<Status, string> = {
  live: "bg-primary/10 text-primary ring-primary/30",
  verified: "bg-primary/10 text-primary ring-primary/30",
  test: "bg-[#fff3c4] text-[#7a5b00] ring-[#e8c95a]",
  paused: "bg-fog text-body ring-black/10",
  soon: "bg-fog text-muted ring-black/10",
};

export default function Badge({ status, c, className = "" }: { status: Status; c: SiteContent; className?: string }) {
  const label = c.ui[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase ring-1 ${styles[status]} ${className}`}
    >
      {(status === "live" || status === "verified") && <span className="size-1.5 rounded-full bg-primary" />}
      {label}
    </span>
  );
}
