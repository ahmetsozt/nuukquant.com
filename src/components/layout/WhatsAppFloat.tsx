import type { SiteContent } from "@/content/en";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

/** Fixed WhatsApp button, bottom corner on every page. Sized for thumbs on mobile. */
export default function WhatsAppFloat({ c }: { c: SiteContent }) {
  return (
    <a
      href={c.brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.ui.whatsapp}
      data-event="whatsapp_click"
      data-label="float"
      className="fixed bottom-5 end-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_28px_-8px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <WhatsAppIcon />
    </a>
  );
}
