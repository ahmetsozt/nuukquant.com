type Name =
  | "diversification"
  | "technology"
  | "pricing"
  | "service"
  | "onboarding"
  | "globe"
  | "desk"
  | "posttrade"
  | "shield"
  | "handshake"
  | "vault"
  | "segregation"
  | "globe-small"
  | "chevron"
  | "menu"
  | "close"
  | "warning"
  | "in"
  | "x"
  | "yt"
  | "ig";

const paths: Record<Name, string> = {
  diversification: "M4 20V10M10 20V4M16 20v-8M22 20V7M2 20h20",
  technology: "M3 5h18v11H3zM8 20h8M12 16v4M7 9h4M7 12h7",
  pricing: "M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 3 5 3 5 1.1 5 3-2.2 3-5 3-5-1.1-5-3",
  service: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  onboarding: "M13 2L4 14h7l-1 8 9-12h-7z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  desk: "M4 6h16v10H4zM2 20h20M9 16v4M15 16v4",
  posttrade: "M4 4h16v16H4zM8 12l3 3 5-6",
  shield: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7zM9 12l2 2 4-4",
  handshake: "M3 11l4-4 5 3 4-4 5 5-3 3-3-2-3 3-3-1-3 3z",
  vault: "M3 4h18v16H3zM12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0M12 10v2l1.5 1.5",
  segregation: "M3 5h8v14H3zM13 5h8v14h-8zM7 9v6M17 9v6",
  "globe-small": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  chevron: "M6 9l6 6 6-6",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M6 6l12 12M18 6L6 18",
  warning: "M12 3l10 18H2zM12 10v5M12 18v.5",
  in: "M6 9v12M6 5v.5M10 21v-7a3 3 0 0 1 6 0v7M10 9v12",
  x: "M4 4l16 16M20 4L4 20",
  yt: "M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM10 9l5 3-5 3z",
  ig: "M4 4h16v16H4zM12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0M17 7v.5",
};

export default function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 1.5,
}: {
  name: Name;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
