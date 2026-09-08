import { optionalImage } from "@/lib/images";

/** Broker logo slot: /public/images/brokers/{slug}.{png,svg…} or a monogram placeholder. */
export default function BrokerLogo({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const logo = optionalImage(`brokers/${slug}`);
  if (logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logo} alt={name} className={`h-8 w-auto object-contain ${className}`} loading="lazy" />;
  }
  const initials = name.replace(/\[FILL:?\s*/i, "").replace("]", "").split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("") || "BR";
  return (
    <span className={`inline-flex h-9 min-w-9 items-center justify-center rounded-xl bg-ink px-2.5 text-[13px] font-bold tracking-wider text-white ${className}`} aria-label={name}>
      {initials}
    </span>
  );
}
