-- Site ziyaret sayacı.
--
-- Üçüncü tarafa veri göndermeyen, çerez ve tarayıcı deposu kullanmayan sayaç:
-- her sayfa görüntülemesi `record_view` ile tek satır olarak buraya yazılır.
-- Çerez olmadığı için onay bannerı beklemez, yani GA4 ve Meta Pixel'in
-- göremediği "kabul et"e basmayan ziyaretçileri de sayar.
--
-- IP adresi, çerez kimliği, parmak izi ya da kişiyi tanıtan hiçbir alan
-- saklanmaz. `lang` ve `tz` kaba bir ülke göstergesidir, kimlik değildir.
-- Bu yüzden tekil ziyaretçi sayılamaz; ölçülen şey ziyaret, kişi değil.

create table if not exists public.site_views (
  id bigserial primary key,
  seen_at timestamptz not null default now(),
  site text not null,
  path text not null,
  ref_host text,
  lang text,
  tz text,
  width int
);

create index if not exists site_views_seen_idx on public.site_views (seen_at desc);
create index if not exists site_views_site_seen_idx on public.site_views (site, seen_at desc);

alter table public.site_views enable row level security;

-- Tabloya doğrudan yazma hakkı kimsede yok: yazma tek kapıdan, aşağıdaki
-- fonksiyondan geçer. Okuma yalnız yöneticide; anon anahtar herkese açık
-- olduğu için ziyaret kaydını okumak ona kapalı.
create policy site_views_admin on public.site_views for select using (public.is_admin());

/*
 * Tek yazma kapısı.
 *
 * `security definer` olduğu için tablo politikalarını atlar; buna karşılık
 * yalnız tanıdığı alan adlarını kabul eder ve her alanı kırpar, böylece anon
 * anahtarı eline geçiren biri tabloyu serbestçe doldurabilecek bir uç bulmaz.
 * Tanımadığı alan adını sessizce yutar: hata döndürmek, siteye saldıran birine
 * hangi değerin geçtiğini öğretmekten başka işe yaramaz.
 */
create or replace function public.record_view(
  p_site text,
  p_path text,
  p_ref_host text default null,
  p_lang text default null,
  p_tz text default null,
  p_width int default null
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_site is null or p_site not in ('nuukquant.com', 'nuuk.trading', 'ahmetsozturk.com') then
    return;
  end if;

  insert into public.site_views (site, path, ref_host, lang, tz, width)
  values (
    p_site,
    left(coalesce(p_path, '/'), 200),
    left(p_ref_host, 120),
    left(p_lang, 20),
    left(p_tz, 60),
    case when p_width between 100 and 10000 then p_width end
  );
end
$$;

revoke all on function public.record_view(text, text, text, text, text, int) from public;
grant execute on function public.record_view(text, text, text, text, text, int) to anon, authenticated;

-- Yöneticinin baktığı özetler. Günlük ziyaret, en çok okunan sayfalar ve
-- siteye trafik gönderen kaynaklar; hepsi aynı tablodan türüyor.
create or replace view public.site_views_daily as
select site, (seen_at at time zone 'Europe/Istanbul')::date as gun, count(*) as ziyaret
from public.site_views
group by 1, 2;

create or replace view public.site_views_pages as
select site, path, count(*) as ziyaret, max(seen_at) as son
from public.site_views
group by 1, 2;

create or replace view public.site_views_sources as
select site, coalesce(ref_host, '(doğrudan)') as kaynak, count(*) as ziyaret
from public.site_views
group by 1, 2;
