import type { Faq } from "./faqs";

export type Campaign = {
  slug: string;
  /** Model slug this campaign promotes, when it is a single model campaign. */
  modelSlug?: string;
  adGroup: string;
  headline: string;
  subheadline: string;
  offerStrip: string;
  points: string[];
  formHeading: string;
  formSub: string;
  ctaLabel: string;
  faqs: Faq[];
  metaTitle: string;
  metaDescription: string;
};

const commonFaqs: Faq[] = [
  {
    q: "How soon will someone call me?",
    a: "During working hours, usually within 15 to 30 minutes. If you submit at night we call you first thing the next morning.",
  },
  {
    q: "Is the test drive really free?",
    a: "Yes. The test drive is free and there is no obligation to buy. We bring the car to your home or office in Bhubaneswar and Cuttack.",
  },
  {
    q: "Do you deliver outside Bhubaneswar?",
    a: "Yes, we deliver across Odisha including Cuttack, Puri, Berhampur, Balasore, Rourkela, Sambalpur, Angul and Jajpur.",
  },
];

export const campaigns: Campaign[] = [
  {
    slug: "volkswagen-offers",
    adGroup: "Generic offers",
    headline: "Volkswagen offers in Bhubaneswar, ending this month",
    subheadline:
      "Cash discount up to Rs 1,00,000, exchange bonus up to Rs 40,000 and EMI from Rs 16,999. Get your price in 2 minutes.",
    offerStrip: "Limited period benefits on Tera, Taigun and Virtus",
    points: [
      "Best price of the month, in writing",
      "Free home test drive across Bhubaneswar and Cuttack",
      "Car loan approval in 24 hours, up to 90 percent funding",
      "Exchange your old car of any brand",
    ],
    formHeading: "Get your best price now",
    formSub: "Fill this and our consultant will call you with the running offer and the full on road price.",
    ctaLabel: "Get best price",
    faqs: commonFaqs,
    metaTitle: "Volkswagen Offers in Bhubaneswar | Get the Best Price Today",
    metaDescription:
      "Limited period Volkswagen offers in Bhubaneswar. Cash discount, exchange bonus and low EMI on Tera, Taigun and Virtus. Book a free home test drive.",
  },
  {
    slug: "tera",
    modelSlug: "volkswagen-tera",
    adGroup: "Tera",
    headline: "Volkswagen Tera from Rs 9.49 Lakh in Bhubaneswar",
    subheadline:
      "The new compact SUV with a 1.0 TSI turbo petrol engine and six airbags as standard. Launch benefits running now.",
    offerStrip: "Launch offer with low down payment and exchange bonus",
    points: [
      "Six airbags and ESC from the base variant",
      "1.0 TSI turbo petrol, up to 19.2 kmpl",
      "EMI from Rs 16,999 per month",
      "Free home test drive, no obligation",
    ],
    formHeading: "Book your Tera test drive",
    formSub: "Share your details for the launch offer, on road price and delivery timeline.",
    ctaLabel: "Get Tera offer",
    faqs: [
      {
        q: "What is the Volkswagen Tera on road price in Bhubaneswar?",
        a: "The Tera starts from about Rs 9.49 Lakh ex showroom. The on road price adds Odisha road tax, registration and insurance. Submit the form and we will send the exact figure for the variant you want.",
      },
      ...commonFaqs,
    ],
    metaTitle: "Volkswagen Tera Price in Bhubaneswar | Launch Offer and Test Drive",
    metaDescription:
      "Volkswagen Tera from Rs 9.49 Lakh in Bhubaneswar. Six airbags standard, 1.0 TSI turbo petrol, EMI from Rs 16,999. Book a free home test drive today.",
  },
  {
    slug: "taigun",
    modelSlug: "volkswagen-taigun",
    adGroup: "Taigun",
    headline: "Volkswagen Taigun offers in Bhubaneswar",
    subheadline:
      "The 5 star Global NCAP SUV with TSI turbo power. Cash benefit, exchange bonus and corporate discount running now.",
    offerStrip: "Benefits up to Rs 1,40,000 on select Taigun variants",
    points: [
      "5 star Global NCAP for adult and child safety",
      "1.0 TSI and 1.5 TSI EVO with 7 speed DSG",
      "EMI from Rs 20,499 per month",
      "Free home test drive at your convenience",
    ],
    formHeading: "Get the Taigun best price",
    formSub: "Tell us the variant you like and we will send the running benefit and on road price.",
    ctaLabel: "Get Taigun offer",
    faqs: [
      {
        q: "What discount is available on the Volkswagen Taigun?",
        a: "Benefits change every month and depend on the variant and manufacturing month. Current schemes combine a cash discount, an exchange bonus and a corporate benefit. Submit the form for the live figure on your variant.",
      },
      ...commonFaqs,
    ],
    metaTitle: "Volkswagen Taigun Offers in Bhubaneswar | Price, EMI and Test Drive",
    metaDescription:
      "Volkswagen Taigun offers in Bhubaneswar. 5 star Global NCAP safety, TSI turbo engines, EMI from Rs 20,499 and a free home test drive across Odisha.",
  },
  {
    slug: "virtus",
    modelSlug: "volkswagen-virtus",
    adGroup: "Virtus",
    headline: "Volkswagen Virtus offers in Bhubaneswar",
    subheadline:
      "The German sedan with a 5 star safety rating and a 521 litre boot. Cash benefit and low interest finance running now.",
    offerStrip: "Attractive cash benefit with low interest finance",
    points: [
      "5 star Global NCAP with six airbags",
      "Segment leading 521 litre boot",
      "GT Plus with 150 PS 1.5 TSI and 7 speed DSG",
      "EMI from Rs 20,299 per month",
    ],
    formHeading: "Get the Virtus best price",
    formSub: "Share your details for the current scheme, on road price and EMI options.",
    ctaLabel: "Get Virtus offer",
    faqs: [
      {
        q: "What is the Volkswagen Virtus on road price in Bhubaneswar?",
        a: "The Virtus starts from about Rs 11.56 Lakh ex showroom. Add Odisha road tax, registration and insurance for the on road figure. We send the full written breakup on WhatsApp.",
      },
      ...commonFaqs,
    ],
    metaTitle: "Volkswagen Virtus Offers in Bhubaneswar | Price, EMI and Test Drive",
    metaDescription:
      "Volkswagen Virtus offers in Bhubaneswar. 5 star Global NCAP sedan, 521 litre boot, EMI from Rs 20,299 and a free home test drive across Odisha.",
  },
  {
    slug: "tiguan",
    modelSlug: "volkswagen-tiguan-r-line",
    adGroup: "Tiguan R-Line",
    headline: "Volkswagen Tiguan R-Line in Bhubaneswar",
    subheadline:
      "204 PS, 4MOTION all wheel drive and Level 2 ADAS. Personal demonstration arranged at your home or office.",
    offerStrip: "Corporate and loyalty benefits with tailored finance",
    points: [
      "2.0 TSI with 204 PS and 4MOTION all wheel drive",
      "Level 2 ADAS with adaptive cruise control",
      "Harman Kardon audio and IQ.Light LED matrix headlamps",
      "Priority allocation for confirmed bookings",
    ],
    formHeading: "Request a Tiguan demonstration",
    formSub: "A senior consultant will call you with pricing, allocation status and finance options.",
    ctaLabel: "Request a callback",
    faqs: [
      {
        q: "Is the Tiguan R-Line available in Bhubaneswar?",
        a: "Yes, as a completely built unit import with limited allocation. We confirm the current availability and waiting period when we call you back.",
      },
      ...commonFaqs,
    ],
    metaTitle: "Volkswagen Tiguan R-Line Price in Bhubaneswar | Book a Demonstration",
    metaDescription:
      "Volkswagen Tiguan R-Line in Bhubaneswar. 204 PS 2.0 TSI, 4MOTION all wheel drive and Level 2 ADAS. Request a personal demonstration and price quote.",
  },
  {
    slug: "golf-gti",
    modelSlug: "volkswagen-golf-gti",
    adGroup: "Golf GTI",
    headline: "Volkswagen Golf GTI bookings in Bhubaneswar",
    subheadline:
      "265 PS, 7 speed DSG and the original hot hatch badge. Allocation for India is limited, so booking early matters.",
    offerStrip: "Limited allocation, priority for confirmed bookings",
    points: [
      "265 PS 2.0 TSI with 0 to 100 kmph in about 5.9 seconds",
      "Electronic front differential lock",
      "Iconic tartan sport seats",
      "Personal handling by a senior consultant",
    ],
    formHeading: "Check Golf GTI availability",
    formSub: "Share your details and we will confirm the current allocation and booking process.",
    ctaLabel: "Check availability",
    faqs: [
      {
        q: "What is the waiting period for the Golf GTI?",
        a: "The Golf GTI comes to India in limited numbers, so the waiting period depends on the current allocation. Submit the form and we will tell you exactly where the queue stands.",
      },
      ...commonFaqs,
    ],
    metaTitle: "Volkswagen Golf GTI Price and Booking in Bhubaneswar",
    metaDescription:
      "Book the Volkswagen Golf GTI in Bhubaneswar. 265 PS 2.0 TSI, 7 speed DSG and limited India allocation. Check availability and price today.",
  },
  {
    slug: "test-drive",
    adGroup: "Test drive",
    headline: "Free Volkswagen test drive at your doorstep",
    subheadline:
      "Pick any model, pick your time. We bring the car to your home or office in Bhubaneswar and Cuttack at no cost.",
    offerStrip: "Free home test drive, seven days a week",
    points: [
      "No cost and no obligation to buy",
      "A product expert rides along to answer everything",
      "Free exchange valuation of your current car on the same visit",
      "Slots from 9:30 am to 7:30 pm, all week",
    ],
    formHeading: "Book your free test drive",
    formSub: "Tell us the model and your area. We will confirm the slot over a call.",
    ctaLabel: "Book test drive",
    faqs: commonFaqs,
    metaTitle: "Free Volkswagen Test Drive in Bhubaneswar | Book at Home",
    metaDescription:
      "Book a free Volkswagen home test drive in Bhubaneswar and Cuttack. Tera, Taigun, Virtus, Tiguan R-Line and Golf GTI. No cost, no obligation.",
  },
];

export const campaignBySlug = (slug: string) => campaigns.find((campaign) => campaign.slug === slug);
