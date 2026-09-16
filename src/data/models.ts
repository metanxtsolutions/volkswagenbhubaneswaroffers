export type ModelSection = { title: string; body: string; points: string[] };

export type Model = {
  slug: string;
  name: string;
  fullName: string;
  bodyType: string;
  segment: string;
  tagline: string;
  /** Short line used under the name in listings, in the VW house voice. */
  strapline: string;
  paint: string;
  priceFrom: string;
  priceFromValue: number;
  priceTo: string;
  emiFrom: string;
  emiFromValue: number;
  engines: string[];
  power: string;
  transmission: string;
  mileage: string;
  seating: number;
  safety: string;
  bootSpace: string;
  colors: string[];
  variants: string[];
  designLines?: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  sections: ModelSection[];
  offer: string;
  intro: string;
  accent: string;
  badge?: string;
  imageUrl?: string;
  cbu?: boolean;
};

/**
 * Volkswagen India line up as researched from volkswagen.co.in listings in
 * September 2026: Taigun, Virtus, Tayron R-Line, Tiguan R-Line and Golf GTI.
 *
 * Prices are indicative ex showroom starting figures and move with the running
 * scheme, so the dealership confirms the live number on every enquiry.
 *
 * EMI figures assume a 20 percent down payment over 60 months at an indicative
 * 9.2 percent. The finance desk quotes the real number against an approved rate.
 */
export const models: Model[] = [
  {
    slug: "volkswagen-taigun",
    name: "Taigun",
    fullName: "Volkswagen Taigun",
    bodyType: "Compact SUV",
    segment: "SUV",
    tagline: "Welcome to driving",
    strapline: "The 5 star Global NCAP SUV, built on the India specific MQB A0 IN platform",
    paint: "#2f6bb5",
    priceFrom: "Rs 10.99 Lakh",
    priceFromValue: 1099900,
    priceTo: "Rs 19.80 Lakh",
    emiFrom: "Rs 18,999",
    emiFromValue: 18999,
    engines: ["1.0 TSI turbo petrol, 115 PS", "1.5 TSI EVO turbo petrol, 150 PS"],
    power: "115 PS and 150 PS",
    transmission: "6 speed manual, 6 speed automatic, 7 speed DSG",
    mileage: "Up to 19.87 kmpl (ARAI)",
    seating: 5,
    safety: "5 star Global NCAP, adult and child occupant",
    bootSpace: "385 litres",
    colors: [
      "Lava Blue",
      "Curcuma Yellow",
      "Wild Cherry Red",
      "Rising Blue",
      "Candy White",
      "Reflex Silver",
      "Carbon Steel Grey",
      "Deep Black Pearl",
      "Matte Carbon Steel Grey",
    ],
    variants: ["Comfortline", "Highline", "Topline", "GT Line", "GT Plus", "GT Plus Sport"],
    designLines: ["Performance Line"],
    highlights: [
      "5 star Global NCAP rating for both adult and child occupants",
      "1.5 TSI EVO with active cylinder technology and 7 speed DSG on GT trims",
      "Six airbags, ESC, hill hold and multi collision braking as standard",
      "10 inch touchscreen with wireless App Connect and Volkswagen Connect",
      "Electric sunroof, ventilated front seats and wireless charging",
      "Matte Carbon Steel Grey available on the GT Plus",
    ],
    specs: [
      { label: "Platform", value: "MQB A0 IN, high strength steel body" },
      { label: "Ground clearance", value: "188 mm" },
      { label: "Fuel tank", value: "50 litres" },
      { label: "Warranty", value: "4 years or 1,00,000 km, with 3 free services" },
    ],
    sections: [
      {
        title: "Engineering you feel on every drive",
        body: "Two turbocharged TSI petrol engines, both built for Indian conditions. The 1.0 TSI is the sensible choice for daily use inside Bhubaneswar, while the 1.5 TSI EVO with the 7 speed DSG turns NH 16 into the best part of your week.",
        points: [
          "Turbo torque arrives low, so city driving is effortless",
          "Active cylinder technology shuts two cylinders when cruising",
          "Paddle shifters and a sport tuned note on GT Plus trims",
        ],
      },
      {
        title: "Safety that is engineered, not advertised",
        body: "The Taigun scored a full 5 stars in Global NCAP for adult and child occupant protection. That comes from the structure itself: a laser welded, high strength steel body shell designed to hold its shape.",
        points: [
          "Six airbags standard across the range",
          "Electronic stability control and hill hold",
          "Multi collision braking and TPMS",
        ],
      },
      {
        title: "Made for Odisha roads",
        body: "188 mm of ground clearance, suspension tuned for broken surfaces, and a cabin sealed against dust and noise. Owners driving to Puri, Konark or Similipal tell us the same thing: the car stays composed where others get busy.",
        points: [
          "Suspension tuned for Indian road surfaces",
          "Galvanised body panels resist coastal corrosion",
          "Service Value Package caps your maintenance cost",
        ],
      },
    ],
    offer: "Cash benefit, exchange bonus and corporate discount on select variants",
    intro:
      "The Taigun is the Volkswagen most families in Odisha start with. German engineering, a 5 star Global NCAP score and a turbo petrol engine that makes a daily commute genuinely enjoyable.",
    accent: "from-sky-500 via-blue-700 to-vw-blue",
    badge: "Best seller",
  },
  {
    slug: "volkswagen-virtus",
    name: "Virtus",
    fullName: "Volkswagen Virtus",
    bodyType: "Premium sedan",
    segment: "Sedan",
    tagline: "The sedan, redefined",
    strapline: "5 star Global NCAP rated, with the largest boot in its segment",
    paint: "#8d1f33",
    priceFrom: "Rs 10.49 Lakh",
    priceFromValue: 1049000,
    priceTo: "Rs 19.90 Lakh",
    emiFrom: "Rs 17,999",
    emiFromValue: 17999,
    engines: ["1.0 TSI turbo petrol, 115 PS", "1.5 TSI EVO turbo petrol, 150 PS"],
    power: "115 PS and 150 PS",
    transmission: "6 speed manual, 6 speed automatic, 7 speed DSG",
    mileage: "Up to 20.8 kmpl (ARAI)",
    seating: 5,
    safety: "5 star Global NCAP, adult and child occupant",
    bootSpace: "521 litres",
    colors: [
      "Lava Blue",
      "Wild Cherry Red",
      "Rising Blue",
      "Curcuma Yellow",
      "Candy White",
      "Reflex Silver",
      "Carbon Steel Grey",
      "Deep Black Pearl",
    ],
    variants: ["Comfortline", "Highline", "Topline", "GT Line", "GT Plus", "GT Plus Sport"],
    designLines: ["Chrome", "Sport (GT)"],
    highlights: [
      "Two design lines: Chrome for understated presence, Sport for the GT character",
      "521 litre boot, the largest in the segment",
      "1.5 TSI EVO GT Plus with 150 PS and a 7 speed DSG",
      "5 star Global NCAP with six airbags standard",
      "Ventilated front seats, electric sunroof and wireless App Connect",
    ],
    specs: [
      { label: "Platform", value: "MQB A0 IN, high strength steel body" },
      { label: "Boot space", value: "521 litres" },
      { label: "Fuel tank", value: "45 litres" },
      { label: "Warranty", value: "4 years or 1,00,000 km, with 3 free services" },
    ],
    sections: [
      {
        title: "Two characters, one sedan",
        body: "The Chrome line is the quiet one: brightwork, restraint, presence without noise. The Sport line is the GT, with blacked out detailing and the 1.5 TSI EVO behind it. Same car underneath, two very different personalities.",
        points: [
          "Chrome line for a formal, understated look",
          "Sport line with GT badging and dark accents",
          "Both available with the full safety package",
        ],
      },
      {
        title: "Built for the highway",
        body: "Volkswagen tunes its suspension for stability at speed, which is exactly what a four lane run to Berhampur or Balasore demands. The car settles rather than floats, and stays quiet at cruising speed.",
        points: [
          "High speed stability from the MQB A0 IN platform",
          "20.8 kmpl ARAI on the efficient variants",
          "Cruise control across most of the range",
        ],
      },
      {
        title: "Space where it counts",
        body: "A 521 litre boot swallows a family's luggage for a Puri weekend without any packing strategy. The rear bench is genuinely usable for three adults, which is rare in this class.",
        points: ["521 litres of boot space", "Rear AC vents and charging", "Flat floor for the middle passenger"],
      },
    ],
    offer: "Cash benefit with low interest finance on select variants",
    intro:
      "The Virtus is for buyers who want a sedan without giving up safety or the drive. It holds a 5 star Global NCAP rating and offers the biggest boot in its class.",
    accent: "from-rose-500 via-red-700 to-vw-blue",
  },
  {
    slug: "volkswagen-tayron-r-line",
    name: "Tayron R-Line",
    fullName: "Volkswagen Tayron R-Line",
    bodyType: "Premium SUV",
    segment: "SUV",
    tagline: "Space for everything you plan",
    strapline: "Locally assembled 5 and 7 seat SUV with 4MOTION all wheel drive",
    paint: "#3c4a5e",
    priceFrom: "Rs 46.99 Lakh",
    priceFromValue: 4699000,
    priceTo: "Rs 49.50 Lakh",
    emiFrom: "Rs 78,499",
    emiFromValue: 78499,
    engines: ["2.0 TSI turbo petrol, 204 PS"],
    power: "204 PS and 320 Nm",
    transmission: "7 speed DSG with 4MOTION all wheel drive",
    mileage: "Up to 12.8 kmpl (ARAI)",
    seating: 7,
    safety: "Level 2 ADAS with IQ.DRIVE, 9 airbags",
    bootSpace: "Up to 1,905 litres with seats folded",
    colors: ["Persimmon Red", "Nightshade Blue", "Oyster Silver", "Grenadilla Black", "Pure White"],
    variants: ["Tayron R-Line 5 seat", "Tayron R-Line 7 seat"],
    highlights: [
      "Locally assembled, offered in both 5 and 7 seat layouts",
      "2.0 TSI with 204 PS and 4MOTION all wheel drive",
      "Level 2 ADAS with adaptive cruise and lane assist",
      "IQ.Light LED matrix headlamps",
      "Three zone climate control and a panoramic roof",
    ],
    specs: [
      { label: "Body type", value: "Premium SUV, locally assembled" },
      { label: "Engine", value: "1984 cc TSI turbo petrol" },
      { label: "Drivetrain", value: "4MOTION all wheel drive" },
      { label: "Seating", value: "5 or 7 seats, depending on variant" },
    ],
    sections: [
      {
        title: "Seven seats without the compromise",
        body: "Most three row SUVs treat the last row as an afterthought. The Tayron gives it real space, and folds it flat when you would rather have the luggage room instead.",
        points: [
          "Choose 5 or 7 seats at booking",
          "Third row folds flat into the floor",
          "Up to 1,905 litres of load space",
        ],
      },
      {
        title: "4MOTION, when the road runs out",
        body: "All wheel drive that reads grip continuously and sends torque where it holds. On monsoon roads between Bhubaneswar and the ghats, that is not a specification, it is a margin.",
        points: ["4MOTION all wheel drive", "Driving profile selection", "204 PS with a 7 speed DSG"],
      },
      {
        title: "Assistance that stays alert",
        body: "IQ.DRIVE brings adaptive cruise control, lane assist and front assist together so long highway runs ask less of you. The car holds its lane and its distance while you drive.",
        points: ["Adaptive cruise control", "Lane assist and front assist", "Nine airbags"],
      },
    ],
    offer: "Introductory pricing with corporate and loyalty benefits",
    intro:
      "The Tayron R-Line is the SUV for buyers who need three rows without stepping outside German engineering. Locally assembled, all wheel drive, and equipped with Level 2 driver assistance.",
    accent: "from-slate-500 via-slate-700 to-vw-blue",
    badge: "New",
  },
  {
    slug: "volkswagen-tiguan-r-line",
    name: "Tiguan R-Line",
    fullName: "Volkswagen Tiguan R-Line",
    bodyType: "Luxury SUV",
    segment: "SUV",
    tagline: "The flagship",
    strapline: "Imported flagship SUV with 4MOTION and Level 2 driver assistance",
    paint: "#243447",
    priceFrom: "Rs 47.11 Lakh",
    priceFromValue: 4711000,
    priceTo: "Rs 49.00 Lakh",
    emiFrom: "Rs 78,999",
    emiFromValue: 78999,
    engines: ["2.0 TSI turbo petrol, 204 PS"],
    power: "204 PS and 320 Nm",
    transmission: "7 speed DSG with 4MOTION all wheel drive",
    mileage: "Up to 12.9 kmpl (ARAI)",
    seating: 5,
    safety: "Level 2 ADAS, 9 airbags",
    bootSpace: "652 litres, up to 1,650 litres folded",
    colors: ["Nightshade Blue", "Oyster Silver", "Grenadilla Black", "Persimmon Red"],
    variants: ["Tiguan R-Line"],
    highlights: [
      "2.0 TSI with 204 PS and 4MOTION all wheel drive",
      "Level 2 ADAS with adaptive cruise control",
      "Harman Kardon sound system",
      "IQ.Light LED matrix headlamps",
      "Massage function for the driver seat, three zone climate",
    ],
    specs: [
      { label: "Body type", value: "Luxury SUV, completely built unit" },
      { label: "Engine", value: "1984 cc TSI turbo petrol" },
      { label: "Drivetrain", value: "4MOTION all wheel drive" },
      { label: "Boot space", value: "652 litres, 1,650 litres folded" },
    ],
    sections: [
      {
        title: "The most complete Volkswagen sold in India",
        body: "The Tiguan R-Line is imported as a completely built unit, which means it arrives with the specification Europe gets. For buyers moving across from a luxury badge, it is the one that feels familiar.",
        points: ["Completely built unit import", "R-Line exterior and interior package", "19 inch alloy wheels"],
      },
      {
        title: "Presence, handled quietly",
        body: "IQ.Light matrix headlamps, a Harman Kardon system and a cabin finished to a standard the segment does not usually bother with. It is understated in the way expensive things tend to be.",
        points: ["IQ.Light LED matrix headlamps", "Harman Kardon audio", "Massage function for the driver"],
      },
      {
        title: "Booked personally",
        body: "Tiguan enquiries are handled by a senior Brand Advisor from our Pahal showroom, including a home demonstration anywhere in Bhubaneswar or Cuttack and a walkthrough of allocation and timelines.",
        points: ["Home demonstration on request", "Allocation confirmed before booking", "Tailored finance structuring"],
      },
    ],
    offer: "Corporate and loyalty benefits with tailored finance",
    intro:
      "The Tiguan R-Line is Volkswagen's flagship SUV in India: imported, all wheel drive, and equipped with the technology package the badge is known for.",
    accent: "from-slate-600 via-slate-800 to-vw-blue",
    cbu: true,
  },
  {
    slug: "volkswagen-golf-gti",
    name: "Golf GTI",
    fullName: "Volkswagen Golf GTI",
    bodyType: "Performance hatchback",
    segment: "Performance",
    tagline: "The original",
    strapline: "265 PS, limited India allocation, the car that created the hot hatch",
    paint: "#b41f2e",
    priceFrom: "Rs 50.90 Lakh",
    priceFromValue: 5090000,
    priceTo: "Rs 50.90 Lakh",
    emiFrom: "Rs 84,999",
    emiFromValue: 84999,
    engines: ["2.0 TSI turbo petrol, 265 PS"],
    power: "265 PS and 370 Nm",
    transmission: "7 speed DSG",
    mileage: "Up to 12.6 kmpl (ARAI)",
    seating: 5,
    safety: "8 airbags, ESC, Level 2 driver assistance",
    bootSpace: "374 litres",
    colors: ["Kings Red", "Oryx White", "Moonstone Grey", "Grenadilla Black"],
    variants: ["Golf GTI"],
    highlights: [
      "265 PS 2.0 TSI, 0 to 100 kmph in about 5.9 seconds",
      "Electronic front differential lock for sharper corner exit",
      "The tartan sport seats, unchanged in spirit since 1976",
      "Adaptive chassis control with driving profile selection",
      "Limited allocation for India, booking priority applies",
    ],
    specs: [
      { label: "Body type", value: "Performance hatchback, completely built unit" },
      { label: "0 to 100 kmph", value: "About 5.9 seconds" },
      { label: "Top speed", value: "250 kmph, electronically limited" },
      { label: "Allocation", value: "Limited units for India" },
    ],
    sections: [
      {
        title: "Eight generations of the same idea",
        body: "A practical hatchback that happens to be quick. The GTI has never needed a wing or a shout to make its point, and this generation carries 265 PS with the same restraint.",
        points: ["265 PS and 370 Nm", "7 speed DSG with paddle shifters", "Front differential lock"],
      },
      {
        title: "Usable every day",
        body: "Adaptive chassis control means Comfort is genuinely comfortable and Sport genuinely is not. It is a car you can drive to work and still enjoy on an empty stretch on Sunday morning.",
        points: ["Adaptive chassis control", "374 litre boot", "Five real seats"],
      },
      {
        title: "Securing one",
        body: "India receives the GTI in small numbers. If you want one delivered in Bhubaneswar, the queue matters more than the price, so speak to us early and we will tell you exactly where allocation stands.",
        points: ["Limited national allocation", "Booking priority for confirmed orders", "Honest waiting period, in writing"],
      },
    ],
    offer: "Priority allocation for confirmed bookings",
    intro:
      "The Golf GTI is the car that created the hot hatch category, and India gets it in limited numbers as a completely built unit import.",
    accent: "from-red-600 via-red-800 to-vw-blue",
    badge: "Limited units",
    cbu: true,
  },
];

export const modelBySlug = (slug: string) => models.find((m) => m.slug === slug);
export const modelSlugs = models.map((m) => m.slug);
export const modelsBySegment = (segment: string) => models.filter((m) => m.segment === segment);
