import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import PostCard from "@/components/home/PostCard";
import type { SiteContent } from "@/content/en";

export default function LatestPosts({ c }: { c: SiteContent }) {
  return (
    <section className="border-t border-black/5 py-20 lg:py-24" aria-labelledby="posts-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={c.insights.kicker} title={c.home.postsTitle} />
          <Button href={c.nav.find((g) => g.label === "Insights")?.href ?? "/insights/"} variant="outline-dark">
            {c.ui.viewAll}
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.insights.posts.slice(0, 3).map((p) => (
            <PostCard key={p.title + p.date} p={p} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
