"use client";

import { site, telHref, whatsappHref } from "@/data/site";
import { trackContact } from "@/lib/analytics";

/** Fixed bottom action bar for mobile. Desktop users get the header CTA. */
export default function StickyCta({ source = "sticky-bar" }: { source?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-vw-line bg-white/95 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,30,80,0.12)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={telHref}
          onClick={() => trackContact("call", source)}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-vw-blue px-3 py-3 text-sm font-bold text-white"
        >
          Call now
        </a>
        <a
          href={whatsappHref(`Hi ${site.shortName}, please share the current Volkswagen offers in Bhubaneswar.`)}
          onClick={() => trackContact("whatsapp", source)}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-3 text-sm font-bold text-white"
        >
          WhatsApp
        </a>
        <a
          href="#enquiry"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-vw-cyan px-3 py-3 text-sm font-bold text-vw-blue"
        >
          Get offer
        </a>
      </div>
    </div>
  );
}
