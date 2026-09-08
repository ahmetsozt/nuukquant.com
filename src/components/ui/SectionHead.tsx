import Fill from "@/components/ui/Fill";

export default function SectionHead({
  kicker,
  title,
  lead,
  align = "start",
  dark = false,
  className = "",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-[720px] ${className}`}>
      {kicker && <p className={`kicker mb-4 ${dark ? "text-mint" : ""}`}>{kicker}</p>}
      <h2 className={`h2-section rv ${dark ? "text-white" : ""}`}>
        <Fill text={title} />
      </h2>
      {lead && (
        <p className={`mt-5 text-[17px] leading-[1.6] rv ${dark ? "text-soft" : "text-body"}`}>
          <Fill text={lead} />
        </p>
      )}
    </div>
  );
}
