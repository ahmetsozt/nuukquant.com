import { MarkSvg } from "@/components/ui/Logo";

type Instrument = { code: string; name: string };

/**
 * Hero visual for the free-signals page: instrument badges (EUR, USD, XAU,
 * OIL, GBP) floating around the NUUK "N." mark, echoing the reference site's
 * currency coins but drawn in the NUUK palette.
 */
const SLOTS = [
  { pos: "left-[6%] top-[8%]", size: "size-[26%]", bg: "bg-primary", text: "text-white", delay: "0s" },
  { pos: "right-[4%] top-[2%]", size: "size-[23%]", bg: "bg-white", text: "text-ink", delay: "0.6s" },
  { pos: "right-[10%] top-[44%]", size: "size-[21%]", bg: "bg-[#c99a2e]", text: "text-white", delay: "1.2s" },
  { pos: "left-[2%] bottom-[10%]", size: "size-[22%]", bg: "bg-navy-2 ring-1 ring-white/15", text: "text-white", delay: "1.8s" },
  { pos: "right-[26%] bottom-[2%]", size: "size-[24%]", bg: "bg-cyan", text: "text-navy-deep", delay: "2.4s" },
];

export default function InstrumentCloud({ instruments }: { instruments: Instrument[] }) {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 flex w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white">
        <MarkSvg className="h-auto w-full" />
      </div>
      {instruments.slice(0, SLOTS.length).map((ins, i) => {
        const s = SLOTS[i];
        return (
          <div
            key={ins.code}
            className={`float absolute ${s.pos} ${s.size} flex flex-col items-center justify-center rounded-full ${s.bg} ${s.text}`}
            style={{ animationDelay: s.delay }}
          >
            <span className="num text-[clamp(14px,2.6vw,26px)] leading-none font-medium tracking-tight">{ins.code}</span>
            <span className="mt-1 text-[clamp(8px,1vw,11px)] font-medium opacity-75">{ins.name}</span>
          </div>
        );
      })}
    </div>
  );
}
