"use client";

import { useState } from "react";
import { en, type SiteContent } from "@/content/en";
import PostCard from "@/components/home/PostCard";

export default function InsightsList({ c }: { c: SiteContent }) {
  const [tab, setTab] = useState(0);
  const posts = c.insights.posts.filter((p) => tab === 0 || p.category === en.insights.tabs[tab]);
  return (
    <>
      <div role="tablist" className="flex gap-6 overflow-x-auto border-b border-black/10 scroll-row">
        {c.insights.tabs.map((t, i) => (
          <button key={t} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={`relative py-3 text-[14.5px] whitespace-nowrap ${tab === i ? "text-ink" : "text-body hover:text-ink"}`}>
            {t}
            <span className={`absolute inset-x-0 -bottom-px h-0.5 bg-primary transition-transform ${tab === i ? "scale-x-100" : "scale-x-0"}`} />
          </button>
        ))}
      </div>
      {posts.length === 0 ? (
        <p className="py-16 text-center text-muted">{c.ui.noPosts}</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((p, i) => (
            <PostCard key={i} p={p} c={c} />
          ))}
        </div>
      )}
    </>
  );
}
