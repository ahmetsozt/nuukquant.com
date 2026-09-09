// Stripe Checkout → membership activation. Set STRIPE_SECRET_KEY and
// STRIPE_WEBHOOK_SECRET in the function's secrets before enabling the
// endpoint in Stripe (event: checkout.session.completed).
// Each Payment Link / Checkout Session must carry metadata.plan = <plan slug>;
// the customer's email is matched to the latest non-active application.
import Stripe from "npm:stripe@17";
import { createClient } from "npm:@supabase/supabase-js@2";

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { apiVersion: "2024-12-18.acacia" });
  const sig = req.headers.get("stripe-signature") ?? "";
  const raw = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(raw, sig, Deno.env.get("STRIPE_WEBHOOK_SECRET")!);
  } catch (e) {
    return json({ error: `signature: ${(e as Error).message}` }, 400);
  }
  if (event.type !== "checkout.session.completed") return json({ ignored: event.type });
  const session = event.data.object as Stripe.Checkout.Session;
  const email = session.customer_details?.email ?? session.customer_email ?? "";
  const planSlug = session.metadata?.plan ?? "";
  if (!email) return json({ error: "no email on session" }, 400);

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const { data: plan } = await admin.from("plans").select("slug,interval,panel_slugs").eq("slug", planSlug).maybeSingle();
  const months = plan?.interval === "quarter" ? 3 : plan?.interval === "year" ? 12 : 1;
  const until = new Date(Date.now() + months * 31 * 86400000).toISOString();

  // Latest application from this email that is not active yet; create one if the buyer never applied.
  let { data: app } = await admin.from("applications").select("id").ilike("email", email).neq("status", "active").order("created_at", { ascending: false }).limit(1).maybeSingle();
  if (!app) {
    const { data: created } = await admin.from("applications").insert({ full_name: session.customer_details?.name ?? email, email, plan_slug: plan?.slug ?? null, status: "paid", accepted_terms: true, accepted_risk: true, source: "stripe" }).select("id").single();
    app = created;
  } else {
    await admin.from("applications").update({ status: "paid", plan_slug: plan?.slug ?? undefined, notes: `stripe:${session.id}` }).eq("id", app.id);
  }
  let { data: profile } = await admin.from("profiles").select("id").ilike("email", email).maybeSingle();
  if (!profile) {
    const { data: inv, error } = await admin.auth.admin.inviteUserByEmail(email, { redirectTo: "https://www.nuukquant.com/tr/portal/" });
    if (error) return json({ error: error.message }, 400);
    profile = { id: inv.user.id };
  }
  for (const slug of plan?.panel_slugs ?? []) {
    await admin.from("entitlements").upsert({ user_id: profile.id, panel_slug: slug, ends_at: until, note: `stripe:${plan?.slug}`, starts_at: new Date().toISOString() }, { onConflict: "user_id,panel_slug" });
  }
  await admin.from("applications").update({ status: "active", user_id: profile.id }).eq("id", app!.id);
  return json({ ok: true, email, plan: plan?.slug, until });
});
