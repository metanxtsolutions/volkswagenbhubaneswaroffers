import Link from "next/link";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import { site, telHref, whatsappHref } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank You | Volkswagen Bhubaneswar",
  description: "We have received your enquiry. A Brand Advisor will contact you shortly.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="band">
      <div className="shell flex min-h-[50vh] max-w-3xl flex-col justify-center">
        <p className="kicker">Enquiry received</p>
        <h1 className="mt-6 text-display font-extralight">Thank you. We have your details.</h1>
        <p className="mt-6 text-lead font-light text-ink-soft">
          A Brand Advisor will call you shortly with the running offer, the full on road price and your EMI options.
          For a faster reply, message us on WhatsApp now.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            href={whatsappHref("Hi, I just submitted an enquiry on your website. Please share the best offer.")}
            variant="whatsapp"
            size="lg"
          >
            Continue on WhatsApp
          </Button>
          <Button href={telHref} variant="outline" size="lg">
            Call {site.phoneDisplay}
          </Button>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-8">
          <Link href="/models" className="arrow-link text-sm">
            Browse the range <Arrow />
          </Link>
          <Link href="/offers" className="arrow-link text-sm">
            Current offers <Arrow />
          </Link>
          <Link href="/finance" className="arrow-link text-sm">
            EMI calculator <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
