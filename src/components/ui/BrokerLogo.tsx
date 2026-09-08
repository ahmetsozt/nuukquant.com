import { optionalImage } from "@/lib/images";

/**
 * Broker logo slot: /public/images/brokers/{slug}.{png,webp,jpg} or a monogram
 * placeholder. `height` is in CSS pixels; width follows the image ratio.
 */
export default function BrokerLogo({ slug, name, height = 32, className = "" }: { slug: string; name: string; height?: number; className?: string }) {
  const logo = optionalImage(`brokers/${slug}`);
  if (logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logo} alt={name} style={{ height }} className={`w-auto max-w-full object-contain ${className}`} loading="eager" />;
  }
  const initials = name.replace(/\[FILL:?\s*/i, "").replace("]", "").split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("") || "BR";
  return (
    <span
      style={{ height, minWidth: height, fontSize: Math.round(height * 0.4) }}
      className={`inline-flex items-center justify-center rounded-xl bg-ink px-2.5 font-bold tracking-wider text-white ${className}`}
      aria-label={name}
    >
      {initials}
    </span>
  );
}
