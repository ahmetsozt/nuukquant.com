import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

type Post = SiteContent["insights"]["posts"][number];

const tones: Record<string, string> = {
  stocks: "from-stocks/60 to-primary/40",
  metals: "from-[#f1e147]/50 to-beige/60",
  currencies: "from-currencies/60 to-metals/40",
  crypto: "from-crypto/60 to-options/40",
};

export default function PostCard({ p, c }: { p: Post; c: SiteContent }) {
  return (
    <a href={p.href} className="group rv block">
      <div className={`aspect-[16/9] w-full rounded-lg bg-gradient-to-br ${tones[p.tone] ?? tones.stocks} ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5`} />
      <p className="mt-4 text-[12px] text-muted">
        {p.category} · <Fill text={p.date} />
      </p>
      <h3 className="mt-1 text-[18px] leading-snug group-hover:text-primary">
        <Fill text={p.title} />
      </h3>
      <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-body">
        <Fill text={p.excerpt} />
      </p>
      <span className="mt-3 inline-block text-[13px] text-primary">{c.ui.readMore}</span>
    </a>
  );
}
