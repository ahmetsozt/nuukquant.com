import Script from "next/script";

/**
 * Google Analytics 4. Loads only when NEXT_PUBLIC_GA_ID is set at build time,
 * so local builds and previews stay untracked.
 *
 * Funnel events: any element with `data-event` (and optional `data-label`)
 * sends a GA4 event on click, e.g. broker_cta_click / cta_click / plan_cta_click.
 * ContactForm fires form_start and form_submit itself.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});
document.addEventListener('click',function(e){var t=e.target&&e.target.closest?e.target.closest('[data-event]'):null;if(!t)return;gtag('event',t.getAttribute('data-event'),{event_label:t.getAttribute('data-label')||'',link_url:t.getAttribute('href')||''});},{passive:true});`}
      </Script>
    </>
  );
}
