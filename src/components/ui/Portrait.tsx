import { optionalImage } from "@/lib/images";

/**
 * Portrait slot. Uses /public/images/portrait.{jpg,webp,png} when present,
 * otherwise a neutral placeholder that clearly marks where the photo goes.
 */
export default function Portrait({ alt, className = "", label = "[FILL: portrait photo]" }: { alt: string; className?: string; label?: string }) {
  const photo = optionalImage("portrait");
  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={photo} alt={alt} className={`h-full w-full object-cover object-top ${className}`} fetchPriority="high" />;
  }
  return (
    <div className={`relative flex h-full w-full items-end justify-center overflow-hidden bg-[linear-gradient(180deg,#252d36,#10141f)] ${className}`} aria-label={alt} role="img">
      <svg viewBox="0 0 200 240" className="h-[92%] w-auto opacity-70" aria-hidden="true">
        <defs>
          <linearGradient id="silh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b444e" />
            <stop offset="1" stopColor="#1d242c" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="78" r="44" fill="url(#silh)" />
        <path d="M20 240c0-60 36-96 80-96s80 36 80 96z" fill="url(#silh)" />
      </svg>
      <span className="fill absolute top-4 start-4 text-[11px]">{label}</span>
    </div>
  );
}
