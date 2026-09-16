"use client";

import Link from "next/link";
import { site, telHref, whatsappHref } from "@/data/site";
import { trackContact } from "@/lib/analytics";

/** Persistent action bar for mobile. Desktop users get the header actions. */
export default function StickyCta({ source = "sticky-bar" }: { source?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-hairline bg-white/95 backdrop-blur-xl md:hidden">
      <a
        href={telHref}
        onClick={() => trackContact("call", source)}
        className="flex items-center justify-center border-r border-hairline py-4 text-sm font-medium text-vw-blue"
      >
        Call
      </a>
      <a
        href={whatsappHref(`Hi ${site.shortName}, I would like to know more about Volkswagen cars.`)}
        onClick={() => trackContact("whatsapp", source)}
        className="flex items-center justify-center border-r border-hairline py-4 text-sm font-medium text-vw-blue"
      >
        WhatsApp
      </a>
      <Link href="/book-test-drive" className="flex items-center justify-center bg-vw-blue py-4 text-sm font-medium text-white">
        Test drive
      </Link>
    </div>
  );
}
