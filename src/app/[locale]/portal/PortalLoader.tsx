"use client";

import dynamic from "next/dynamic";
import type { SiteContent } from "@/content/en";

// Client-only: the portal talks to Supabase from the browser and must not be prerendered.
const Portal = dynamic(() => import("@/components/portal/Portal"), { ssr: false, loading: () => <p className="text-muted">…</p> });

export default function PortalLoader({ c }: { c: SiteContent }) {
  return <Portal c={c} />;
}
