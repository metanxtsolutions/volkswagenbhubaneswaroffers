import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { modelBySlug, models } from "@/data/models";
import { site, telHref, whatsappHref } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Free Volkswagen Test Drive in Bhubaneswar",
  description:
    "Book a free Volkswagen test drive in Bhubaneswar and Cuttack. Taigun, Virtus, Tayron R-Line, Tiguan R-Line and Golf GTI, brought to your home or office at a time that suits you.",
  path: "/book-test-drive",
  keywords: [
    "volkswagen test drive bhubaneswar",
    "book taigun test drive odisha",
    "volkswagen home test drive",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Test drive", path: "/book-test-drive" },
];

const checks = [
  { title: "Low speed drivability", detail: "Take it through traffic and feel how the turbo responds from low revs, especially with an automatic." },
  { title: "Ride over broken road", detail: "Find a rough patch. A Volkswagen is firm, but it should stay composed and quiet over it." },
  { title: "Highway stability", detail: "Get to 80 or 100 kmph on a clear stretch and notice how planted the car stays." },
  { title: "Rear seat comfort", detail: "Sit in the back for a few minutes. Knee room, under thigh support, air conditioning flow." },
  { title: "Visibility and parking", detail: "Try a tight spot and judge the camera, the sensors and the view over the bonnet." },
  { title: "Boot and storage", detail: "Open the boot with your usual luggage in mind, and check the cabin storage for daily items." },
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

      <PageHero
        tone="dark"
        crumbs={crumbs}
        kicker="Test drive"
        title={model ? `Drive the ${model.fullName}.` : "Drive it before you decide."}
        lead="Free, with no obligation. We bring the car to your home or office anywhere in Bhubaneswar and Cuttack, and a product expert rides along to answer everything."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#book" variant="light">
            Pick a slot
          </Button>
          <Button href={whatsappHref("Hi, I would like to book a Volkswagen test drive.")} variant="whatsapp">
            Book on WhatsApp
          </Button>
        </div>
      </PageHero>

      <section id="book" className="scroll-mt-24 band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <SectionHeader
              kicker="How it works"
              title="Tell us where and when"
              lead="Slots run seven days a week. For towns further from Bhubaneswar we plan the visit in advance so the exact model you want is the one that arrives."
            />

            <Reveal delay={80} className="mt-10 grid gap-px border border-hairline bg-hairline">
              {[
                "Completely free, with no obligation to buy",
                "At your home, your office or our Pahal showroom",
                "A trained product expert rides along",
                "Free exchange valuation of your current car on the same visit",
              ].map((point) => (
                <p key={point} className="bg-white px-7 py-5 text-sm text-ink-soft">
                  {point}
                </p>
              ))}
            </Reveal>

            <Reveal delay={140} className="mt-10 border border-hairline bg-mist p-8">
              <h3 className="text-title font-light">What to bring</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                A valid driving licence is all you need. If you want your current car valued on the same visit, keep
                the registration certificate handy and our evaluator will do it on the spot.
              </p>
              <p className="mt-6 text-sm text-ink-soft">
                Prefer to talk first?{" "}
                <a href={telHref} className="font-medium text-vw-blue underline underline-offset-4">
                  {site.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <LeadForm
              source="test-drive-page"
              defaultModel={model?.fullName ?? ""}
              heading="Book your test drive"
              subheading="Share your details and we will confirm the time and location with you."
              ctaLabel="Request a slot"
            />
          </Reveal>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader
            kicker="During the drive"
            title="Six things worth checking"
            lead="Twenty minutes behind the wheel tells you more than any brochure."
          />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
            {checks.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="bg-white p-8 lg:p-10">
                <h3 className="text-title font-light">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band-tight border-t border-hairline">
        <div className="shell">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Choose a model</h2>
          <div className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-5">
            {models.map((item) => (
              <a
                key={item.slug}
                href={`/book-test-drive?model=${item.slug}`}
                className={`bg-white p-6 transition-colors hover:bg-mist ${
                  model?.slug === item.slug ? "bg-mist" : ""
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{item.bodyType}</p>
                <p className="mt-3 font-display text-base font-light text-vw-blue">{item.fullName}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
