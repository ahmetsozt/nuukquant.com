-- Membership applications, plans and admin reporting. Run after schema.sql.

create table if not exists public.plans (
  slug text primary key,
  name text not null,
  price numeric not null,
  currency text not null default 'USD',
  interval text not null default 'month' check (interval in ('month', 'quarter', 'year')),
  panel_slugs text[] not null default '{}',
  checkout_url text,
  active boolean not null default true,
  sort int not null default 0
);

insert into public.panels (slug, name, description, sort) values
  ('research', 'Research & reports', 'Daily macro note, weekly report and the archive', 0)
on conflict (slug) do nothing;

insert into public.plans (slug, name, price, interval, panel_slugs, sort) values
  ('reports', 'Reports', 750, 'month', '{research}', 1),
  ('signals', 'Signals', 1000, 'month', '{research,signals,daily-pnl}', 2),
  ('mentorship', 'Mentorship', 5000, 'quarter', '{research,signals,daily-pnl,education}', 3)
on conflict (slug) do nothing;

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  country text,
  plan_slug text references public.plans (slug),
  experience text,
  capital_band text,
  message text,
  locale text,
  source text,
  accepted_terms boolean not null default false,
  accepted_risk boolean not null default false,
  status text not null default 'new' check (status in ('new', 'contacted', 'awaiting_payment', 'paid', 'active', 'rejected', 'expired')),
  notes text,
  user_id uuid references public.profiles (id)
);
create index if not exists applications_status_idx on public.applications (status, created_at desc);

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists applications_touch on public.applications;
create trigger applications_touch before update on public.applications for each row execute procedure public.touch_updated_at();

alter table public.plans enable row level security;
alter table public.applications enable row level security;

drop policy if exists plans_public_read on public.plans;
create policy plans_public_read on public.plans for select using (active = true or public.is_admin());
drop policy if exists plans_admin on public.plans;
create policy plans_admin on public.plans for all using (public.is_admin()) with check (public.is_admin());

-- Anyone may submit an application, but only as a fresh 'new' row with both acknowledgements ticked.
drop policy if exists applications_insert_public on public.applications;
create policy applications_insert_public on public.applications for insert
  with check (status = 'new' and accepted_terms and accepted_risk and user_id is null and notes is null);
drop policy if exists applications_admin on public.applications;
create policy applications_admin on public.applications for all using (public.is_admin()) with check (public.is_admin());

-- Activate: grant every panel of the applicant's plan to their (already invited) user.
create or replace function public.activate_application(app_id uuid, until timestamptz default null) returns void
language plpgsql security definer set search_path = public as $$
declare a record; uid uuid; s text;
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  select * into a from public.applications where id = app_id;
  if a is null then raise exception 'application not found'; end if;
  select id into uid from public.profiles where lower(email) = lower(a.email);
  if uid is null then raise exception 'No user with % yet. Invite them first (Authentication → Users → Invite), then activate.', a.email; end if;
  for s in select unnest(panel_slugs) from public.plans where slug = a.plan_slug loop
    insert into public.entitlements (user_id, panel_slug, ends_at, note) values (uid, s, until, 'plan:' || a.plan_slug)
    on conflict (user_id, panel_slug) do update set ends_at = excluded.ends_at, note = excluded.note, starts_at = now();
  end loop;
  update public.applications set status = 'active', user_id = uid where id = app_id;
end $$;

create or replace function public.admin_members() returns table (email text, full_name text, role text, panels text[], first_ends timestamptz, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select p.email, p.full_name, p.role,
    array_remove(array_agg(case when e.ends_at is null or e.ends_at > now() then e.panel_slug end order by e.panel_slug), null),
    min(e.ends_at) filter (where e.ends_at > now()),
    p.created_at
  from public.profiles p left join public.entitlements e on e.user_id = p.id
  where public.is_admin()
  group by p.id order by p.created_at desc
$$;

create or replace function public.admin_stats() returns json
language sql stable security definer set search_path = public as $$
  select case when public.is_admin() then json_build_object(
    'new_applications', (select count(*) from public.applications where status = 'new'),
    'awaiting_payment', (select count(*) from public.applications where status in ('contacted', 'awaiting_payment')),
    'active_members', (select count(distinct user_id) from public.entitlements where ends_at is null or ends_at > now()),
    'expiring_7d', (select count(distinct user_id) from public.entitlements where ends_at between now() and now() + interval '7 days'),
    'mrr', (select coalesce(sum(case pl.interval when 'month' then pl.price when 'quarter' then pl.price / 3 else pl.price / 12 end), 0)
            from public.applications a join public.plans pl on pl.slug = a.plan_slug where a.status = 'active')
  ) end
$$;
