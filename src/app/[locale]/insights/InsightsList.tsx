"use client";

import { useState } from "react";
import { en, type SiteContent } from "@/content/en";
import PostCard from "@/components/home/PostCard";

const tabActive = "rounded-pill bg-ink px-4 py-2 text-[14px] font-semibold text-white";
const tabIdle = "rounded-pill bg-fog px-4 py-2 text-[14px] font-semibold text-body hover:bg-tint hover:text-primary";

export default function InsightsList({ c }: { c: SiteContent }) {
  const [tab, setTab] = useState(0);
  const posts = c.insights.posts.filter((p) => tab === 0 || p.category === en.insights.tabs[tab]);
  return (
    <>
      <div role="tablist" className="flex gap-2 overflow-x-auto scroll-row">
        {c.insights.tabs.map((t, i) => (
          <button key={t} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={`whitespace-nowrap transition ${tab === i ? tabActive : tabIdle}`}>
            {t}
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
