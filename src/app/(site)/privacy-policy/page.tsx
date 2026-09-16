import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Volkswagen Bhubaneswar",
  description:
    "How Volkswagen Bhubaneswar collects, uses and protects the personal information you share through this website.",
  path: "/privacy-policy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy policy", path: "/privacy-policy" },
];

const sections = [
  {
    title: "What we collect",
    body: "When you submit an enquiry form we collect your name, mobile number, city, the model you are interested in and your buying timeline. If you contact us on WhatsApp or by email, we keep that conversation so our team can follow up correctly. We also collect standard analytics data such as pages viewed, device type and the source that brought you to this site.",
  },
  {
    title: "Why we use it",
    body: "Your details are used to contact you about your enquiry, to share prices, offers and finance options, to arrange a test drive or delivery, and to improve how this website performs. We do not use your data for any purpose you would not reasonably expect from a car enquiry.",
  },
  {
    title: "Who we share it with",
    body: "We share your details only with our own sales and finance team, and with banks or insurance partners when you ask us to arrange a loan or a policy. We never sell your data or pass it to unrelated third parties for their own marketing.",
  },
  {
    title: "Cookies and tracking",
    body: "This site uses Google Analytics and advertising tags from Google and Meta to measure how visitors use the site and to report on advertising campaigns. These tools may set cookies in your browser. You can block or delete cookies through your browser settings at any time, and the site will continue to work.",
  },
  {
    title: "How long we keep it",
    body: "Enquiry records are kept for as long as needed to serve you and to meet our record keeping obligations. If you ask us to delete your details, we remove them from our active systems.",
  },
  {
    title: "Your choices",
    body: "You can ask us to correct your details, stop contacting you, or delete your record. Write to us at the email address below and we will act on the request. If you have opted in to WhatsApp updates, you can stop them by replying STOP at any time.",
  },
  {
    title: "Security",
    body: "Enquiry data is transmitted over an encrypted connection and stored with access limited to the staff who need it. No online system can be guaranteed to be perfectly secure, so please avoid sending sensitive financial documents over unsecured channels.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={crumbs} kicker="Legal" title="Privacy policy" lead="How we handle the information you share with us through this website, by phone, on WhatsApp or by email." />

      <section className="band">
        <div className="shell max-w-3xl">
          <p className="text-xs text-ink-faint">Last updated: September 2026</p>
          <div className="mt-12 grid gap-12">
            {sections.map((section) => (
              <Reveal key={section.title}>
                <h2 className="text-title font-light">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{section.body}</p>
              </Reveal>
            ))}

          <div>
            <h2 className="text-title font-light">Contact us about privacy</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Email{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-vw-blue underline underline-offset-4">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${site.phone}`} className="font-medium text-vw-blue underline underline-offset-4">
                {site.phoneDisplay}
              </a>
              . We respond to privacy requests within a reasonable period.
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
