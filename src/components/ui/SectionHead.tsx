import Fill from "@/components/ui/Fill";

/**
 * Section heading. `split` puts the title on the left and the lead on the right,
 * the two-column pattern used throughout the reference design.
 */
export default function SectionHead({
  kicker,
  title,
  lead,
  align = "start",
  dark = false,
  split = false,
  className = "",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  dark?: boolean;
  split?: boolean;
  className?: string;
}) {
  const leadEl = lead ? (
    <p className={`text-[17px] leading-[1.55] rv ${dark ? "text-soft" : "text-body"} ${split ? "" : "mt-5"}`}>
      <Fill text={lead} />
    </p>
  ) : null;
  const titleEl = (
    <>
      {kicker && <p className={`kicker mb-4 ${dark ? "text-cyan" : ""}`}>{kicker}</p>}
      <h2 className={`h2-section rv ${dark ? "text-white" : ""}`}>
        <Fill text={title} />
      </h2>
    </>
  );
  if (split && lead) {
    return (
      <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
        <div className="lg:col-span-7">{titleEl}</div>
        <div className="lg:col-span-5">{leadEl}</div>
      </div>
    );
  }
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-[720px] ${className}`}>
      {titleEl}
      {leadEl}
    </div>
  );
}
