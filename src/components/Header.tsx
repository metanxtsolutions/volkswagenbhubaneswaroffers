"use client";

import Link from "next/link";
import { useState } from "react";
import { site, telHref } from "@/data/site";
import { trackContact } from "@/lib/analytics";

const nav = [
  { label: "Offers", href: "/offers" },
  { label: "Models", href: "/models" },
  { label: "Odisha locations", href: "/volkswagen-showroom" },
  { label: "EMI calculator", href: "/car-loan-emi-calculator" },
  { label: "Test drive", href: "/book-test-drive" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-vw-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-vw-blue text-[13px] font-extrabold tracking-tight text-vw-blue">
            VW
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-vw-blue sm:text-base">Volkswagen Bhubaneswar</span>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-vw-cyan-dark">
              Offers and bookings
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-vw-cyan-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            onClick={() => trackContact("call", "header")}
            className="hidden rounded-full bg-vw-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-vw-blue-400 sm:inline-flex"
          >
            Call {site.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-vw-line text-vw-blue lg:hidden"
          >
            <span className="text-xl leading-none" aria-hidden>
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-vw-line bg-white lg:hidden">
          <nav className="container-page grid gap-1 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] font-semibold text-slate-700 hover:bg-vw-grey"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telHref}
              onClick={() => trackContact("call", "mobile-menu")}
              className="mt-2 rounded-full bg-vw-blue px-5 py-3 text-center text-sm font-bold text-white"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
