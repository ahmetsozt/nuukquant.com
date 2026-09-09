# Investor portal: setup

The portal lives at `/portal/` (every locale) and is a client-side app that
talks directly to Supabase. Access is enforced by row-level security in the
database, not by the page, so a user can only ever read the panels granted
to them in `entitlements`.

## 1. Create the project (5 minutes, free tier)

1. https://supabase.com → New project → name `nuuk-portal`, region Frankfurt.
2. SQL Editor → New query → paste `supabase/schema.sql` → Run. Then paste
   `supabase/memberships.sql` → Run (plans, applications, admin reporting).
3. Authentication → Providers → Email: keep **Enable email provider** on and
   turn **Allow new users to sign up** OFF (subscribers are invited, never
   self-registered). Leave "Confirm email" on.
4. Authentication → URL Configuration → Site URL `https://www.nuukquant.com`,
   Redirect URLs: `https://www.nuukquant.com/**`.
5. Project Settings → API → copy **Project URL** and **anon public** key.

## 2. Connect the site

Create `.env.local` in the repo (never committed):

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

Then `pnpm build && bash scripts/deploy-gh-pages.sh`. The anon key is a
public key by design; the policies in the schema are the security boundary.

## 3. Make yourself admin

Authentication → Users → Invite user → your email → open the invite and set a
password. Then SQL Editor:

```sql
update public.profiles set role = 'admin' where email = 'ahmet@ahmetsozturk.com';
```

## 4. Daily operation

- **New subscriber**: Authentication → Users → Invite user (they get an email
  and choose a password). Then in the portal's Admin tab: grant the panel(s)
  they bought, with an end date matching the subscription.
- **Signals**: Admin tab → New signal. Visible instantly to everyone entitled
  to `signals`.
- **Desk P&L**: Admin tab → Add day, or bulk-insert into `pnl_days` from the
  MT statement importer.
- **Reports**: Admin tab → Upload report → choose the client's email and the
  PDF. Stored privately under `reports/<user_id>/`; only that client (and
  admins) can open it.
- **Education**: insert rows into `education_items` (title, url).
- **Expiry**: entitlements with `ends_at` in the past disappear automatically.

Panels are rows in `panels`; add a row to create a new sellable panel.

## 5. Membership flow

1. A visitor picks a plan on the signals page → `/apply/` → the application
   lands in **Admin → Memberships** with status *New*.
2. You review it, set status *Contacted* / *Awaiting payment* and send the
   payment link (or set `plans.checkout_url` so the applicant sees a
   "Proceed to payment" button right after applying).
3. After payment: Authentication → Users → **Invite user** with the same
   email, then in Memberships click **Activate** with the access end date.
   Every panel of the plan is granted at once and the status becomes *Active*.
4. Expiry is automatic; the KPI "Expiring in 7 days" is your renewal list.

Status: 2026-09-09 project `clwsbcpktizyxavyuoxp` (Frankfurt) is live with
both SQL files applied, signups disabled, site URL and redirect set,
ahmet@ahmetsozturk.com invited and set to admin.

## 6. Notifications, one-click activation, emails (status 2026-09-09)

- `supabase/notifications.sql` is applied: every new application emails
  ahmet@ahmetsozturk.com through the FormSubmit relay (verified: HTTP 200)
  and, once a Telegram bot token + chat ID are saved under Admin → Content →
  Notifications, pushes the same text to Telegram.
- Edge function `admin-activate` is deployed (JWT verification handled in
  code; legacy-secret verification OFF). Admin → Memberships → **Activate**
  now invites the applicant automatically and grants the plan's panels.
- `supabase/functions/stripe-webhook` is written but not deployed: it needs a
  Stripe account (secret key + webhook secret as function secrets) and
  Payment Links carrying `metadata.plan=<slug>`.
- Branded bilingual email templates are in `supabase/email-templates/`.
  Supabase only allows custom templates with **custom SMTP**; the built-in
  sender is also limited to a few emails per hour, so before real
  subscribers arrive: Authentication → Emails → SMTP Settings with Resend
  (free tier) or a Google Workspace app password, then paste the templates
  into Invite user / Magic link / Reset password.
- Two-step verification (TOTP) is available to every portal user under
  Security; enable it on the admin account first.
