import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

type Post = SiteContent["insights"]["posts"][number];

/** Insight card: category and date as meta, then the title and excerpt. No placeholder art. */
export default function PostCard({ p, c }: { p: Post; c: SiteContent }) {
  return (
    <a href={p.href} className="group rv block border-t border-black/10 pt-5">
      <p className="num text-[13px] text-muted">
        {p.category} · <Fill text={p.date} />
      </p>
      <h3 className="mt-2 text-[19px] leading-snug group-hover:text-primary">
        <Fill text={p.title} />
      </h3>
      <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-body">
        <Fill text={p.excerpt} />
      </p>
      <span className="sr-only">{c.ui.readMore}</span>
    </a>
  );
}
