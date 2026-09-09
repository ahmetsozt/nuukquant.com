-- New-application notifications (email via FormSubmit relay, optional Telegram),
-- app settings, and panel deep links. Run after memberships.sql.

create extension if not exists pg_net with schema extensions;

create table if not exists public.settings (
  key text primary key,
  value text,
  updated_at timestamptz not null default now()
);
alter table public.settings enable row level security;
drop policy if exists settings_admin on public.settings;
create policy settings_admin on public.settings for all using (public.is_admin()) with check (public.is_admin());
insert into public.settings (key, value) values
  ('notify_email', 'ahmet@ahmetsozturk.com'),
  ('telegram_bot_token', null),
  ('telegram_chat_id', null)
on conflict (key) do nothing;

alter table public.panels add column if not exists link_url text;
alter table public.panels add column if not exists link_label text;

create or replace function public.notify_new_application() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
declare
  to_email text; bot text; chat text; txt text;
begin
  select value into to_email from public.settings where key = 'notify_email';
  select value into bot from public.settings where key = 'telegram_bot_token';
  select value into chat from public.settings where key = 'telegram_chat_id';
  txt := 'Yeni üyelik başvurusu' || E'\n'
      || 'Ad: ' || new.full_name || E'\n'
      || 'E-posta: ' || new.email || E'\n'
      || 'Telefon: ' || coalesce(new.phone, '-') || E'\n'
      || 'Ülke: ' || coalesce(new.country, '-') || E'\n'
      || 'Plan: ' || coalesce(new.plan_slug, '-') || E'\n'
      || 'Deneyim: ' || coalesce(new.experience, '-') || ' · Sermaye: ' || coalesce(new.capital_band, '-') || E'\n'
      || 'Mesaj: ' || coalesce(new.message, '-') || E'\n'
      || 'Panel: https://www.nuukquant.com/tr/portal/';
  if to_email is not null then
    perform net.http_post(
      url := 'https://formsubmit.co/ajax/' || to_email,
      headers := jsonb_build_object('Content-Type', 'application/json', 'Accept', 'application/json', 'Origin', 'https://www.nuukquant.com', 'Referer', 'https://www.nuukquant.com/tr/apply/'),
      body := jsonb_build_object(
        '_subject', 'Yeni üyelik başvurusu: ' || new.full_name || ' · ' || coalesce(new.plan_slug, '-'),
        '_template', 'table', '_captcha', 'false',
        'name', new.full_name, 'email', new.email, 'phone', coalesce(new.phone, '-'), 'country', coalesce(new.country, '-'),
        'plan', coalesce(new.plan_slug, '-'), 'experience', coalesce(new.experience, '-'), 'capital', coalesce(new.capital_band, '-'),
        'message', coalesce(new.message, '-'), 'admin_panel', 'https://www.nuukquant.com/tr/portal/')
    );
  end if;
  if bot is not null and chat is not null then
    perform net.http_post(
      url := 'https://api.telegram.org/bot' || bot || '/sendMessage',
      headers := jsonb_build_object('Content-Type', 'application/json'),
      body := jsonb_build_object('chat_id', chat, 'text', txt)
    );
  end if;
  return new;
end $$;
drop trigger if exists applications_notify on public.applications;
create trigger applications_notify after insert on public.applications
  for each row execute procedure public.notify_new_application();
