import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Volkswagen Bhubaneswar Offers collects, uses and protects the personal information you share through this website.",
  path: "/privacy-policy",
});

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
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy" },
        ]}
      />
      <section className="container-page max-w-3xl py-10 sm:py-14">
        <h1 className="text-3xl font-extrabold text-vw-blue sm:text-4xl">Privacy policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: January 2026</p>
        <p className="mt-6 text-base leading-relaxed text-slate-600">
          This policy explains how {site.name} handles the information you share with us through this website, by
          phone, on WhatsApp or by email.
        </p>

        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-vw-blue">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-bold text-vw-blue">Contact us about privacy</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-vw-cyan-dark underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${site.phone}`} className="font-semibold text-vw-cyan-dark underline">
                {site.phoneDisplay}
              </a>
              . We respond to privacy requests within a reasonable period.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
