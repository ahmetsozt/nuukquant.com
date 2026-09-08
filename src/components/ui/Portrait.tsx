import { optionalImage } from "@/lib/images";

/**
 * Portrait slot. Uses /public/images/portrait.{jpg,webp,png} when present,
 * otherwise a neutral placeholder that clearly marks where the photo goes.
 */
export default function Portrait({ alt, className = "", label = "" }: { alt: string; className?: string; label?: string }) {
  const photo = optionalImage("portrait");
  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={photo} alt={alt} className={`h-full w-full object-cover object-top ${className}`} fetchPriority="high" />;
  }
  return (
    <div className={`relative flex h-full w-full items-end justify-center overflow-hidden bg-[linear-gradient(180deg,#0d2a63,#00164a)] ${className}`} aria-label={alt} role="img">
      <svg viewBox="0 0 200 240" className="h-[92%] w-auto opacity-70" aria-hidden="true">
        <defs>
          <linearGradient id="silh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1e4fb8" />
            <stop offset="1" stopColor="#0a1f4d" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="78" r="44" fill="url(#silh)" />
        <path d="M20 240c0-60 36-96 80-96s80 36 80 96z" fill="url(#silh)" />
      </svg>
      {label && <span className="fill absolute top-[22%] start-1/2 -translate-x-1/2 text-[11px] whitespace-nowrap">{label}</span>}
    </div>
  );
}
