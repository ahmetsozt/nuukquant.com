"use client";

import { useState } from "react";
import { en, type SiteContent } from "@/content/en";

const tones: Record<string, string> = {
  stocks: "from-stocks/60 to-primary/40",
  metals: "from-[#f1e147]/50 to-beige/60",
  currencies: "from-currencies/60 to-metals/40",
  crypto: "from-crypto/60 to-options/40",
};

export default function Pulse({ c }: { c: SiteContent }) {
  const { pulse } = c.home;
  const [tab, setTab] = useState(0);
  // Categories are matched against the English tab names so translated labels keep working.
  const posts = pulse.posts.filter((p) => tab === 0 || p.category === en.home.pulse.tabs[tab]);

  return (
    <section id="insights" className="section-pad" aria-labelledby="pulse-heading">
      <div className="container-x">
        <h2 id="pulse-heading" className="h2-section rv">
          {pulse.title}
        </h2>
        <div role="tablist" aria-label="Post categories" className="mt-6 flex gap-6 overflow-x-auto border-b border-fog scroll-row">
          {pulse.tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`relative py-4 text-[15px] whitespace-nowrap transition-colors ${
                tab === i ? "text-ink" : "text-body hover:text-ink"
              }`}
            >
              {t}
              <span
                className={`absolute inset-x-0 -bottom-px h-0.5 bg-primary transition-transform ${
                  tab === i ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>
        {posts.length === 0 ? (
          <p className="py-16 text-center text-muted">{c.ui.noPosts}</p>
        ) : (
          <ul className="mt-8 flex snap-x gap-6 overflow-x-auto pb-2 scroll-row lg:grid lg:grid-cols-4 lg:overflow-visible">
            {posts.map((p) => (
              <li key={p.title} className="w-[286px] flex-none snap-start lg:w-auto">
                <a href="#" className="group block">
                  <div
                    className={`aspect-[286/161] w-full rounded-md bg-gradient-to-br ${tones[p.tone]} ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5`}
                  />
                  <h3 className="mt-4 text-[20px] leading-[1.3] font-normal text-ink group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[15px] leading-6">{p.excerpt}</p>
                  <div className="mt-3 flex items-center gap-3 text-[12px] text-muted">
                    <span className="rounded-sm bg-fog px-2 py-0.5 text-body">{p.tag}</span>
                    <span>{p.date}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
