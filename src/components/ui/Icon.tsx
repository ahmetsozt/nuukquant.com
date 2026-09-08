export type IconName =
  | "cpu"
  | "chart"
  | "briefcase"
  | "handshake"
  | "signal"
  | "calendar"
  | "check"
  | "arrow-up-right"
  | "mail"
  | "phone"
  | "chat"
  | "send"
  | "shield"
  | "globe-small"
  | "chevron"
  | "menu"
  | "close"
  | "warning"
  | "quote"
  | "in"
  | "x"
  | "yt"
  | "ig";

const paths: Record<IconName, string> = {
  cpu: "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M5 5h14v14H5zM9 9h6v6H9z",
  chart: "M3 20h18M5 16l4-5 4 3 6-8",
  briefcase: "M3 8h18v12H3zM9 8V5h6v3M3 13h18",
  handshake: "M3 11l4-4 5 3 4-4 5 5-3 3-3-2-3 3-3-1-3 3z",
  signal: "M4 20v-5M9 20V9M14 20v-8M19 20V4",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  check: "M5 12l4 4L19 6",
  "arrow-up-right": "M7 17L17 7M8 7h9v9",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  phone: "M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  chat: "M4 5h16v11H8l-4 4z",
  send: "M21 3L10 14M21 3l-7 18-4-8-8-4z",
  shield: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7zM9 12l2 2 4-4",
  "globe-small": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  chevron: "M6 9l6 6 6-6",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M6 6l12 12M18 6L6 18",
  warning: "M12 3l10 18H2zM12 10v5M12 18v.5",
  quote: "M7 7h4v6H7v4H5v-6a4 4 0 0 1 2-4zM15 7h4v6h-4v4h-2v-6a4 4 0 0 1 2-4z",
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
  name: IconName;
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
