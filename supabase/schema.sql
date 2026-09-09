-- NUUK investor portal schema. Run once in the Supabase SQL editor.
-- Every table is protected by row-level security: a signed-in user only sees
-- the panels granted to them in `entitlements`; admins (profiles.role = 'admin')
-- see and manage everything.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique,
  full_name text,
  role text not null default 'investor' check (role in ('investor', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.panels (
  slug text primary key,
  name text not null,
  description text,
  sort int not null default 0
);
insert into public.panels (slug, name, description, sort) values
  ('signals', 'Signal feed', 'Trade ideas with entry, stop and target', 1),
  ('daily-pnl', 'Desk P&L', 'Closed P&L of the proprietary desk, day by day', 2),
  ('reports', 'My reports', 'Monthly and quarterly reports for your managed account', 3),
  ('education', 'Session library', 'Recordings and material from workshops and webinars', 4)
on conflict (slug) do nothing;

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  panel_slug text not null references public.panels (slug),
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  note text,
  created_at timestamptz not null default now(),
  unique (user_id, panel_slug)
);

create table if not exists public.signal_posts (
  id uuid primary key default gen_random_uuid(),
  panel_slug text not null default 'signals' references public.panels (slug),
  title text not null,
  instrument text,
  direction text check (direction in ('long', 'short', 'flat')),
  entry text,
  stop text,
  target text,
  rationale text,
  status text not null default 'open' check (status in ('open', 'target', 'stopped', 'closed')),
  published_at timestamptz not null default now(),
  author uuid references public.profiles (id)
);

create table if not exists public.pnl_days (
  date date primary key,
  closed_pnl numeric not null,
  trades int not null default 0,
  wins int not null default 0,
  note text,
  panel_slug text not null default 'daily-pnl' references public.panels (slug)
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  title text not null,
  period text,
  storage_path text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.education_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  url text not null,
  kind text not null default 'video',
  published_at timestamptz not null default now(),
  panel_slug text not null default 'education' references public.panels (slug)
);

-- Create a profile row for every new auth user.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Helpers used by the policies.
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
$$;

create or replace function public.has_panel(slug text) returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_admin() or exists (
    select 1 from public.entitlements e
    where e.user_id = auth.uid() and e.panel_slug = slug
      and e.starts_at <= now() and (e.ends_at is null or e.ends_at > now())
  )
$$;

alter table public.profiles enable row level security;
alter table public.panels enable row level security;
alter table public.entitlements enable row level security;
alter table public.signal_posts enable row level security;
alter table public.pnl_days enable row level security;
alter table public.reports enable row level security;
alter table public.education_items enable row level security;

drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select using (id = auth.uid() or public.is_admin());
drop policy if exists profiles_admin on public.profiles;
create policy profiles_admin on public.profiles for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists panels_select on public.panels;
create policy panels_select on public.panels for select using (auth.role() = 'authenticated');

drop policy if exists entitlements_select on public.entitlements;
create policy entitlements_select on public.entitlements for select using (user_id = auth.uid() or public.is_admin());
drop policy if exists entitlements_admin on public.entitlements;
create policy entitlements_admin on public.entitlements for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists signals_select on public.signal_posts;
create policy signals_select on public.signal_posts for select using (public.has_panel(panel_slug));
drop policy if exists signals_admin on public.signal_posts;
create policy signals_admin on public.signal_posts for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists pnl_select on public.pnl_days;
create policy pnl_select on public.pnl_days for select using (public.has_panel(panel_slug));
drop policy if exists pnl_admin on public.pnl_days;
create policy pnl_admin on public.pnl_days for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists reports_select on public.reports;
create policy reports_select on public.reports for select using ((user_id = auth.uid() and public.has_panel('reports')) or public.is_admin());
drop policy if exists reports_admin on public.reports;
create policy reports_admin on public.reports for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists education_select on public.education_items;
create policy education_select on public.education_items for select using (public.has_panel(panel_slug));
drop policy if exists education_admin on public.education_items;
create policy education_admin on public.education_items for all using (public.is_admin()) with check (public.is_admin());

-- Admin RPCs (all check is_admin() themselves).
create or replace function public.grant_panel(target_email text, slug text, until timestamptz default null, memo text default null) returns void
language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  select id into uid from public.profiles where lower(email) = lower(target_email);
  if uid is null then raise exception 'No user with that email. Invite them first (Authentication → Users → Invite).'; end if;
  insert into public.entitlements (user_id, panel_slug, ends_at, note) values (uid, slug, until, memo)
  on conflict (user_id, panel_slug) do update set ends_at = excluded.ends_at, note = excluded.note, starts_at = now();
end $$;

create or replace function public.revoke_panel(target_email text, slug text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  delete from public.entitlements e using public.profiles p
  where e.user_id = p.id and lower(p.email) = lower(target_email) and e.panel_slug = slug;
end $$;

create or replace function public.user_id_by_email(target_email text) returns uuid
language sql stable security definer set search_path = public as $$
  select case when public.is_admin() then (select id from public.profiles where lower(email) = lower(target_email)) end
$$;

create or replace function public.admin_entitlements() returns table (email text, full_name text, panel_slug text, ends_at timestamptz, note text)
language sql stable security definer set search_path = public as $$
  select p.email, p.full_name, e.panel_slug, e.ends_at, e.note
  from public.entitlements e join public.profiles p on p.id = e.user_id
  where public.is_admin() order by p.email, e.panel_slug
$$;

-- Private bucket for report files: path = <user_id>/<file>.
insert into storage.buckets (id, name, public) values ('reports', 'reports', false) on conflict (id) do nothing;
drop policy if exists reports_read_own on storage.objects;
create policy reports_read_own on storage.objects for select
  using (bucket_id = 'reports' and (public.is_admin() or (storage.foldername(name))[1] = auth.uid()::text));
drop policy if exists reports_admin_write on storage.objects;
create policy reports_admin_write on storage.objects for insert with check (bucket_id = 'reports' and public.is_admin());
drop policy if exists reports_admin_delete on storage.objects;
create policy reports_admin_delete on storage.objects for delete using (bucket_id = 'reports' and public.is_admin());

-- After running: make yourself admin.
-- update public.profiles set role = 'admin' where email = 'ahmet@ahmetsozturk.com';
