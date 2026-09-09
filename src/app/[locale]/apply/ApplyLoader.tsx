"use client";

import dynamic from "next/dynamic";
import type { SiteContent } from "@/content/en";

const ApplyForm = dynamic(() => import("@/components/portal/ApplyForm"), { ssr: false, loading: () => <p className="text-muted">…</p> });

export default function ApplyLoader({ c, locale }: { c: SiteContent; locale: string }) {
  return <ApplyForm c={c} locale={locale} />;
}
