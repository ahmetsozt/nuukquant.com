import Script from "next/script";

/**
 * Apollo.io website tracker and form enrichment.
 *
 * The tracker records visits and, for business IP addresses, identifies the
 * visiting company so the desk can follow up on inbound interest. Form
 * enrichment fills company details behind the scenes when a visitor types a
 * business email into the contact or application form.
 *
 * App ids are public client-side identifiers, not secrets. Both are disclosed
 * in the privacy policy alongside Google Analytics.
 *
 * Form enrichment hides forms while its SDK loads, so it is skipped on the
 * investor portal: subscribers must never wait on a marketing script to log in.
 */
const TRACKER_APP_ID = "6aa3df73976d1a001863e0f7";
const INBOUND_APP_ID = "6aa414a92cea11001c48e19c";

const TRACKER = `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"${TRACKER_APP_ID}"})},document.head.appendChild(o)}initApollo();`;

const INBOUND = `(function initApolloInbound(){
if(location.pathname.indexOf("/portal/")!==-1)return;
var TIMEOUT_MS=15000,timeoutId;
var style=document.createElement("style");style.id="apollo-form-prehide-css";
style.textContent='form:has(input[type="email" i]),form:has(input[name="email" i]),.hs-form-iframe{position:relative!important}form:has(input[type="email" i])::before,form:has(input[name="email" i])::before,.hs-form-iframe::before{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;width:50px;height:50px;margin:auto;border:2.5px solid #e1e1e1;border-top:2.5px solid #9ea3a6;border-radius:50%;animation:spin 1s linear infinite;background-color:transparent;pointer-events:auto;z-index:999999;opacity:1}form:has(input[type="email" i]) *,form:has(input[name="email" i]) *,.hs-form-iframe *{opacity:0!important;user-select:none!important;pointer-events:none!important}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
(document.head||document.documentElement).appendChild(style);
function cleanup(){var el=document.getElementById("apollo-form-prehide-css");if(el)el.remove();if(timeoutId)clearTimeout(timeoutId);}
timeoutId=setTimeout(function(){console.warn("[Apollo] Form enrichment timed out - revealing forms.");cleanup();},TIMEOUT_MS);
var nocache=Math.random().toString(36).substring(7);
var script=document.createElement("script");
script.src="https://assets.apollo.io/js/apollo-inbound.js?nocache="+nocache;script.defer=!0;
script.onerror=function(){console.error("[Apollo] Failed to load form enrichment script");cleanup();};
script.onload=function(){try{window.ApolloInbound.formEnrichment.init({appId:"${INBOUND_APP_ID}",onReady:function(){cleanup();},onError:function(err){console.error("[Apollo] Form enrichment init error:",err);cleanup();}});}catch(err){console.error("[Apollo] Error initializing form enrichment:",err);cleanup();}};
document.head.appendChild(script);
})();`;

export default function ApolloTracker() {
  return (
    <>
      <Script id="apollo-tracker" strategy="afterInteractive">
        {TRACKER}
      </Script>
      <Script id="apollo-inbound" strategy="afterInteractive">
        {INBOUND}
      </Script>
    </>
  );
}
