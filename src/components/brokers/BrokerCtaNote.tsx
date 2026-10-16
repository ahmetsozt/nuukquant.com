import type { Broker } from "@/content/en";

/** Partner and risk line printed right under a broker's call to action, when the broker has one. */
export default function BrokerCtaNote({ b, className = "" }: { b: Broker; className?: string }) {
  if (!b.ctaNote) return null;
  return <p className={`max-w-[520px] text-[11.5px] leading-5 ${className}`}>{b.ctaNote}</p>;
}
