import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

type Post = SiteContent["insights"]["posts"][number];

const tones: Record<string, string> = {
  stocks: "from-[#0d1f3c] via-[#0165fa] to-[#00d3f3]",
  metals: "from-[#1a1a1a] via-[#3d2f00] to-[#f59e0b]",
  currencies: "from-[#00164a] via-[#0052d6] to-[#7fb8ff]",
  crypto: "from-[#0a0a0a] via-[#1d4ed8] to-[#00d3f3]",
};

export default function PostCard({ p, c }: { p: Post; c: SiteContent }) {
  return (
    <a href={p.href} className="group rv block">
      <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-card-sm bg-gradient-to-br ${tones[p.tone] ?? tones.stocks} transition-transform group-hover:-translate-y-1`}>
        <div className="blob absolute -end-10 -bottom-10 size-40 bg-white/15 blur-xl" aria-hidden="true" />
      </div>
      <p className="mt-4 text-[12.5px] text-muted">
        <Fill text={p.date} />
      </p>
      <h3 className="mt-1.5 text-[19px] leading-snug group-hover:text-primary">
        <Fill text={p.title} />
      </h3>
      <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-body">
        <Fill text={p.excerpt} />
      </p>
      <span className="mt-4 inline-flex rounded-pill bg-tint px-3 py-1 text-[12px] font-semibold text-primary">{p.category}</span>
      <span className="sr-only">{c.ui.readMore}</span>
    </a>
  );
}
