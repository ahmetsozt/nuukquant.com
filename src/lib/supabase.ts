import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True when the build was given a Supabase project; otherwise the portal shows a setup notice. */
export const portalConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

/** Lazily created browser client. The anon key is public; row-level security in the database is the boundary. */
export function supabase(): SupabaseClient {
  if (!client) {
    if (!url || !anonKey) throw new Error("Portal is not configured");
    client = createClient(url, anonKey);
  }
  return client;
}

export type Profile = { id: string; email: string; full_name: string | null; role: "investor" | "admin" };
export type Panel = { slug: string; name: string; description: string | null; sort: number; link_url?: string | null; link_label?: string | null };
export type Entitlement = { panel_slug: string; ends_at: string | null };
export type SignalPost = {
  id: string;
  title: string;
  instrument: string | null;
  direction: "long" | "short" | "flat" | null;
  entry: string | null;
  stop: string | null;
  target: string | null;
  rationale: string | null;
  status: "open" | "target" | "stopped" | "closed";
  published_at: string;
};
export type PnlDay = { date: string; closed_pnl: number; trades: number; wins: number; note: string | null };
export type Report = { id: string; title: string; period: string | null; storage_path: string; created_at: string };
export type EducationItem = { id: string; title: string; description: string | null; url: string; kind: string; published_at: string };
