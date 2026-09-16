export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: "Launch" | "Offer" | "Dealership" | "Ownership";
  date: string;
  readMinutes: number;
  body: string[];
};

/**
 * News and campaigns. The first entries summarise Volkswagen India
 * announcements that are publicly reported; the dealership should add its own
 * showroom events, delivery milestones and campaign posts over time.
 */
export const articles: Article[] = [
  {
    slug: "tayron-r-line-arrives-in-bhubaneswar",
    title: "The Tayron R-Line arrives in Bhubaneswar",
    summary:
      "Volkswagen's locally assembled premium SUV brings 4MOTION all wheel drive and a choice of 5 or 7 seats. Bookings are open at our Pahal showroom.",
    category: "Launch",
    date: "2026-09-02",
    readMinutes: 3,
    body: [
      "The Tayron R-Line is now available to book through our Pahal showroom. It is Volkswagen's locally assembled premium SUV, offered in both five and seven seat layouts, with a 2.0 litre TSI producing 204 PS driving all four wheels through a seven speed DSG.",
      "For Odisha buyers, the interesting part is what the third row does for a family that also drives long highway stretches. The last row folds flat, which turns a seven seater into a genuinely large load carrier when you need it, and 4MOTION gives you a real margin on monsoon roads.",
      "The car carries IQ.DRIVE, Volkswagen's Level 2 driver assistance suite, including adaptive cruise control, lane assist and front assist. On a four hour run to Sambalpur, that changes how tiring the drive is.",
      "Introductory pricing applies. Speak to our Brand Advisors for allocation, colour availability and a written on road quote.",
    ],
  },
  {
    slug: "performance-line-variants-taigun-virtus",
    title: "Performance Line variants widen the Taigun and Virtus range",
    summary:
      "Volkswagen India has extended its Performance Line across more Taigun and Virtus variants, making the GT character available at more price points.",
    category: "Launch",
    date: "2026-08-14",
    readMinutes: 2,
    body: [
      "Volkswagen India has broadened its Performance Line, bringing GT styling and equipment to more variants of the Taigun and Virtus. For buyers in Bhubaneswar, it means the sportier look no longer requires jumping to the top of the range.",
      "The Virtus continues to be offered in two design lines. Chrome is the understated one, with brightwork and a formal presence. Sport carries the GT identity with darker detailing.",
      "New colours have also entered the range, including Lava Blue across variants, and a Matte Carbon Steel Grey finish on GT Plus trims of the Taigun.",
      "Ask us which combinations are in stock before you book, since specific colour and variant pairings move quickly.",
    ],
  },
  {
    slug: "what-the-four-year-warranty-actually-covers",
    title: "What Volkswagen's four year warranty actually covers",
    summary:
      "Four years or 1,00,000 km, three free services and four years of roadside assistance. Here is what that means in practice for an owner in Odisha.",
    category: "Ownership",
    date: "2026-07-28",
    readMinutes: 4,
    body: [
      "Volkswagen's standard package in India runs to four years or 1,00,000 km, whichever comes first, along with three free services and four years of roadside assistance. That is longer than several competitors offer as standard, and it matters most in years three and four, when component costs start to appear.",
      "Roadside assistance is the part owners underrate until they need it. It runs 24x7 and covers you anywhere in the country, so a breakdown on the way to Puri or beyond Sambalpur is a phone call rather than a problem.",
      "The Service Value Package sits alongside the warranty and covers periodic maintenance at today's prices. Since it protects against both labour and parts inflation, it usually works out cheaper than paying service by service, and it transfers to the next owner if you sell.",
      "If you are unsure what your car is currently covered for, send us the registration number and we will check it against the service record.",
    ],
  },
  {
    slug: "das-weltauto-certified-pre-owned",
    title: "Das WeltAuto: what certification actually involves",
    summary:
      "Volkswagen's certified pre owned programme runs a multi point inspection, verifies history and adds a warranty. Here is how a car earns the badge.",
    category: "Ownership",
    date: "2026-07-05",
    readMinutes: 3,
    body: [
      "Das WeltAuto is Volkswagen's certified pre owned programme, and the certification is not a sticker. A car is inspected across mechanical, electrical, interior and body parameters before it can be sold under the badge, and anything outside specification is put right first.",
      "History is verified rather than described. Service record, ownership and odometer are all checked, which removes the part of used car buying that most people find uncomfortable.",
      "Certified cars carry a warranty and roadside assistance, and they are serviced through the same authorised network as a new car. You are buying into the ownership experience, not just the vehicle.",
      "Tell us the model and budget you have in mind and we will let you know what is available and what is arriving.",
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export function formatArticleDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
