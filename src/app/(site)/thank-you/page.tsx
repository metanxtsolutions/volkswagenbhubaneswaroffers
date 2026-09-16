import Link from "next/link";
import { site, telHref, whatsappHref } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank You for Your Enquiry",
  description: "We have received your Volkswagen enquiry. Our sales consultant will contact you shortly.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl" aria-hidden>
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-extrabold text-vw-blue sm:text-4xl">Thank you, we have your enquiry</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
        Our sales consultant will call you shortly with the running offer, the full on road price and your EMI options.
        For a faster reply, message us on WhatsApp right now.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappHref("Hi, I just submitted an enquiry on your website. Please share the best offer.")}
          className="rounded-full bg-[#25D366] px-7 py-3.5 font-bold text-white transition hover:bg-[#1eb457]"
        >
          Continue on WhatsApp
        </a>
        <a
          href={telHref}
          className="rounded-full border-2 border-vw-blue px-7 py-3.5 font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-semibold text-vw-cyan-dark">
        <Link href="/models" className="hover:underline">
          Browse all models
        </Link>
        <Link href="/offers" className="hover:underline">
          See current offers
        </Link>
        <Link href="/car-loan-emi-calculator" className="hover:underline">
          Calculate your EMI
        </Link>
      </div>
    </section>
  );
}
