import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import TrustBar from "@/components/TrustBar";
import { usps } from "@/data/offers";
import { site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Volkswagen Bhubaneswar Offers",
  description:
    "We are the Volkswagen sales team for Bhubaneswar and Odisha. Transparent pricing, free home test drives, in house finance support and delivery across the state.",
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page py-10 sm:py-14">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
          About {site.name}
        </h1>
        <div className="mt-6 grid max-w-3xl gap-4 text-base leading-relaxed text-slate-600">
          <p>
            We are the Volkswagen sales team serving Bhubaneswar and the rest of Odisha. Our job is simple: help you
            pick the right Volkswagen, give you an honest price in writing, arrange finance that fits your budget and
            hand over the car without the usual delays.
          </p>
          <p>
            A car purchase in India is still full of guesswork. Prices quoted over the phone change by the time you
            reach the showroom, benefits appear and disappear, and the final invoice carries charges nobody explained.
            We built this site to remove that. Every enquiry gets a written on road breakup, every benefit is named,
            and every question gets a straight answer.
          </p>
          <p>
            Beyond the capital, we deliver to Cuttack, Puri, Berhampur, Balasore, Rourkela, Sambalpur, Angul, Jajpur
            and many more towns. Booking, loan approval, insurance and RTO registration can all be completed remotely,
            which means you only travel if you want to.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="How we work" title="Four promises we keep on every deal" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {usps.map((usp) => (
            <div key={usp.title} className="rounded-2xl border border-vw-line bg-white p-6">
              <h2 className="text-lg font-bold text-vw-blue">{usp.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{usp.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
