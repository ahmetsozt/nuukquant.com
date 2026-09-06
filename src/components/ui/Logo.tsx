import Link from "next/link";

const LOGO = "/brand/nuuk-logo.png"; // full wordmark + hexagon, alpha mask (1687×466)
const MARK = "/brand/nuuk-mark.png"; // hexagon only, alpha mask (479×534)

function masked(url: string, width: number, height: number): React.CSSProperties {
  return {
    width,
    height,
    backgroundColor: "currentColor",
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };
}

/** Hexagon mark alone (favicon-style uses). Takes `currentColor`. */
export function LogoMark({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <span aria-hidden="true" className={`inline-block flex-none ${className}`} style={masked(MARK, size, Math.round(size * 1.115))} />
  );
}

/** Full NUUK logo as supplied by the brand (wordmark + hexagon). Takes `currentColor`. */
export default function Logo({
  dark = false,
  className = "",
  height = 30,
}: {
  dark?: boolean;
  className?: string;
  height?: number;
}) {
  const width = Math.round(height * (1687 / 466));
  return (
    <Link
      href="/"
      aria-label="NUUK home"
      className={`inline-flex items-center ${dark ? "text-white" : "text-[#10141f]"} ${className}`}
    >
      <span aria-hidden="true" className="inline-block flex-none" style={masked(LOGO, width, height)} />
    </Link>
  );
}
