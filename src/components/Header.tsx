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
    <header className="sticky top-0 z-50 border-b border-vw-line bg-white/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[74px]">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-vw-blue font-display text-[13px] font-extrabold tracking-tight text-vw-blue">
            VW
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-extrabold tracking-tight text-vw-blue sm:text-[15px]">
              Volkswagen Bhubaneswar
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-vw-cyan-dark sm:text-[11px]">
              Authorised sales partner
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-ink-soft transition hover:bg-vw-grey hover:text-vw-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            onClick={() => trackContact("call", "header")}
            className="hidden rounded-full bg-vw-blue px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-vw-blue-400 hover:shadow-md sm:inline-flex"
          >
            Call {site.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-vw-line text-vw-blue transition hover:bg-vw-grey lg:hidden"
          >
            <span className="text-lg leading-none" aria-hidden>
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="animate-fade-in border-t border-vw-line bg-white lg:hidden">
          <nav className="container-page grid gap-1 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-semibold text-ink-soft transition hover:bg-vw-grey hover:text-vw-blue"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telHref}
              onClick={() => trackContact("call", "mobile-menu")}
              className="mt-2 rounded-full bg-vw-blue px-5 py-3.5 text-center text-sm font-bold text-white"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
