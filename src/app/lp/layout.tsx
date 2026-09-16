import { site, telHref } from "@/data/site";

/**
 * Distraction free shell for paid traffic. No site navigation, one phone CTA
 * and a compact legal footer, so every click points at the lead form.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-vw-line bg-white/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-vw-blue text-[12px] font-extrabold text-vw-blue">
              VW
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-vw-blue">Volkswagen Bhubaneswar</span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-vw-cyan-dark">
                Authorised sales partner
              </span>
            </span>
          </div>
          <a
            href={telHref}
            className="rounded-full bg-vw-blue px-4 py-2.5 text-xs font-bold text-white transition hover:bg-vw-blue-400 sm:px-5 sm:text-sm"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main className="pb-24 md:pb-0">{children}</main>

      <footer className="border-t border-vw-line bg-vw-grey">
        <div className="container-page py-8 text-center text-[11px] leading-relaxed text-slate-500">
          <p className="text-sm font-semibold text-vw-blue">
            {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}
          </p>
          <p className="mt-2">
            Open {site.openingHours.days}, {site.openingHours.time} | {site.phoneDisplay}
          </p>
          <p className="mx-auto mt-4 max-w-3xl">
            Operated by an authorised Volkswagen sales partner for Bhubaneswar and Odisha. Volkswagen and the model
            names used here are trademarks of Volkswagen AG. Prices, offers and specifications are indicative, apply
            for a limited period and can change without notice. Please confirm the final on road price with our sales
            team before booking.
          </p>
          <p className="mt-3">
            <a href="/privacy-policy" className="underline hover:text-vw-blue">
              Privacy policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="underline hover:text-vw-blue">
              Terms of use
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
