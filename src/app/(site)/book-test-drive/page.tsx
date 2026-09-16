import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { modelBySlug } from "@/data/models";
import { site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Free Volkswagen Test Drive in Bhubaneswar",
  description:
    "Book a free Volkswagen home test drive in Bhubaneswar and Cuttack. Choose Tera, Taigun, Virtus, Tiguan R-Line or Golf GTI and we bring the car to your home or office.",
  path: "/book-test-drive",
  keywords: ["volkswagen test drive bhubaneswar", "book test drive taigun", "volkswagen home test drive odisha"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Book a test drive", path: "/book-test-drive" },
];

const points = [
  "Completely free, with no obligation to buy",
  "At your home, your office or our showroom",
  "A trained product expert rides along and answers everything",
  "Available seven days a week from 9:30 am to 7:30 pm",
];

export default async function TestDrivePage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const { model: modelSlug } = await searchParams;
  const model = modelSlug ? modelBySlug(modelSlug) : undefined;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page grid gap-10 py-10 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
            {model ? `Book a free ${model.fullName} test drive` : "Book a free Volkswagen test drive"}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            You should never buy a car you have not driven. Pick a time, tell us where you are, and we will bring the
            car to you anywhere in Bhubaneswar or Cuttack. For other towns in Odisha we plan the visit in advance so
            the exact model you want is available.
          </p>

          <ul className="mt-8 grid gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl border border-vw-line bg-white px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vw-cyan text-xs font-bold text-vw-blue">
                  ✓
                </span>
                <span className="text-sm text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-vw-blue p-6 text-white">
            <h2 className="text-lg font-bold">What to bring</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              A valid driving licence is all you need. If you want the exchange value of your current car checked on
              the same visit, keep the registration certificate handy and our evaluator will do it on the spot.
            </p>
            <p className="mt-4 text-sm">
              Prefer to talk first? Call{" "}
              <a href={`tel:${site.phone}`} className="font-bold text-vw-cyan hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div id="enquiry" className="scroll-mt-24">
          <LeadForm
            source="test-drive-page"
            defaultModel={model?.fullName ?? ""}
            heading="Pick your test drive slot"
            subheading="Share your details and our team will confirm the time and the location with you."
            ctaLabel="Book my test drive"
          />
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="During the drive"
            title="What to check on your test drive"
            subtitle="Twenty minutes behind the wheel tells you more than any brochure."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Low speed drivability",
                detail: "Drive through traffic and feel how the turbo responds from low revs, especially with an automatic.",
              },
              {
                title: "Ride over rough roads",
                detail: "Find a broken patch. Volkswagen suspension is firm but it should stay composed and quiet.",
              },
              {
                title: "Highway stability",
                detail: "Take it to 80 or 100 kmph on a clear stretch and notice how planted the car stays.",
              },
              {
                title: "Rear seat comfort",
                detail: "Sit in the back for a few minutes. Check knee room, under thigh support and air conditioning flow.",
              },
              {
                title: "Visibility and parking",
                detail: "Try a tight parking spot and judge the camera, the sensors and the view over the bonnet.",
              },
              {
                title: "Boot and storage",
                detail: "Open the boot with your usual luggage in mind and check the cabin storage for daily items.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-vw-line bg-white p-6">
                <h3 className="text-base font-bold text-vw-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to book over a call?"
        whatsappMessage="Hi, I want to book a Volkswagen test drive in Bhubaneswar."
      />
    </>
  );
}
