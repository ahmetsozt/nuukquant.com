// Invite (if needed) and activate a membership application in one call.
// Called from the portal's admin desk with the admin's JWT. Uses the service
// role internally, so it can create auth users; access is limited to admins.
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

export async function activate(admin: ReturnType<typeof createClient>, appId: string, until: string | null, redirect: string) {
  const { data: app } = await admin.from("applications").select("*").eq("id", appId).single();
  if (!app) return { error: "application not found", status: 404 };
  let { data: profile } = await admin.from("profiles").select("id").ilike("email", app.email).maybeSingle();
  let invited = false;
  if (!profile) {
    const { data: inv, error } = await admin.auth.admin.inviteUserByEmail(app.email, { data: { full_name: app.full_name }, redirectTo: redirect });
    if (error) return { error: error.message, status: 400 };
    profile = { id: inv.user.id };
    invited = true;
  }
  const { data: plan } = await admin.from("plans").select("panel_slugs").eq("slug", app.plan_slug).single();
  for (const slug of plan?.panel_slugs ?? []) {
    await admin.from("entitlements").upsert({ user_id: profile.id, panel_slug: slug, ends_at: until, note: `plan:${app.plan_slug}`, starts_at: new Date().toISOString() }, { onConflict: "user_id,panel_slug" });
  }
  await admin.from("applications").update({ status: "active", user_id: profile.id }).eq("id", appId);
  return { ok: true, invited, panels: plan?.panel_slugs ?? [] };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  const url = Deno.env.get("SUPABASE_URL")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const admin = createClient(url, service, { auth: { persistSession: false } });
  const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "");
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: "unauthorized" }, 401);
  const { data: prof } = await admin.from("profiles").select("role").eq("id", user.id).single();
  if (prof?.role !== "admin") return json({ error: "forbidden" }, 403);
  const { app_id, until, redirect } = await req.json();
  if (!app_id) return json({ error: "app_id required" }, 400);
  const result = await activate(admin, app_id, until ?? null, redirect ?? "https://www.nuukquant.com/tr/portal/");
  return "error" in result ? json({ error: result.error }, result.status) : json(result);
});
