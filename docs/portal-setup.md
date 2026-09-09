# Investor portal: setup

The portal lives at `/portal/` (every locale) and is a client-side app that
talks directly to Supabase. Access is enforced by row-level security in the
database, not by the page, so a user can only ever read the panels granted
to them in `entitlements`.

## 1. Create the project (5 minutes, free tier)

1. https://supabase.com → New project → name `nuuk-portal`, region Frankfurt.
2. SQL Editor → New query → paste `supabase/schema.sql` → Run.
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
