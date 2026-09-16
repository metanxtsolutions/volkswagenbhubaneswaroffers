export type Model = {
  slug: string;
  name: string;
  fullName: string;
  bodyType: string;
  tagline: string;
  priceFrom: string;
  priceFromValue: number; // in rupees, used for schema markup
  priceTo: string;
  emiFrom: string;
  engines: string[];
  power: string;
  transmission: string;
  mileage: string;
  seating: number;
  safety: string;
  bootSpace: string;
  colors: string[];
  variants: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  offer: string;
  intro: string;
  body: string[];
  accent: string; // tailwind gradient classes for the card artwork
  badge?: string;
};

/**
 * Prices are indicative ex showroom figures for Bhubaneswar and change with
 * the running scheme. Always confirm the live on road price with the team.
 */
export const models: Model[] = [
  {
    slug: "volkswagen-tera",
    name: "Tera",
    fullName: "Volkswagen Tera",
    bodyType: "Compact SUV",
    tagline: "The new compact SUV built on German safety",
    priceFrom: "Rs 9.49 Lakh",
    priceFromValue: 949000,
    priceTo: "Rs 16.40 Lakh",
    emiFrom: "Rs 16,999",
    engines: ["1.0 TSI Turbo Petrol"],
    power: "Up to 115 PS",
    transmission: "6 speed manual and 6 speed torque converter automatic",
    mileage: "Up to 19.2 kmpl (ARAI)",
    seating: 5,
    safety: "6 airbags standard, ESC, hill hold, TPMS",
    bootSpace: "385 litres",
    colors: ["Curcuma Yellow", "Candy White", "Carbon Steel Grey", "Deep Black Pearl", "Wild Cherry Red", "Reflex Silver"],
    variants: ["Tera S", "Tera Elegance", "Tera Performance"],
    highlights: [
      "1.0 litre TSI turbo petrol with strong city drivability",
      "Six airbags and ESC from the base variant",
      "Level 2 style driver assistance on higher trims",
      "10.1 inch touchscreen with wireless Android Auto and Apple CarPlay",
      "Ventilated front seats and single pane sunroof",
    ],
    specs: [
      { label: "Body type", value: "Compact SUV under 4 metres" },
      { label: "Engine", value: "999 cc TSI turbo petrol" },
      { label: "Ground clearance", value: "189 mm" },
      { label: "Fuel tank", value: "45 litres" },
    ],
    offer: "Launch benefits with low down payment and exchange bonus",
    intro:
      "The Volkswagen Tera brings German build quality into the compact SUV space, which makes it the easiest Volkswagen to own in Bhubaneswar. It is turbo petrol only, it is light on service cost and it carries six airbags as standard.",
    body: [
      "If you drive daily inside Bhubaneswar and take weekend runs to Puri or Chilika, the Tera fits perfectly. The 1.0 TSI turbo engine gives you quick overtakes on NH 16 while staying relaxed in Master Canteen and Rasulgarh traffic.",
      "Volkswagen has kept the Tera high on safety. You get six airbags, electronic stability control, hill hold and a strong laser welded body shell, which is the same engineering approach used on the bigger Volkswagen SUVs.",
      "Inside, the cabin is clean and functional. The 10.1 inch touchscreen supports wireless smartphone mirroring, the digital cockpit is crisp and the ventilated seats are a real help in Odisha summers.",
    ],
    accent: "from-amber-400 via-amber-500 to-orange-600",
    badge: "New launch",
  },
  {
    slug: "volkswagen-taigun",
    name: "Taigun",
    fullName: "Volkswagen Taigun",
    bodyType: "Mid size SUV",
    tagline: "5 star Global NCAP SUV with TSI turbo power",
    priceFrom: "Rs 11.70 Lakh",
    priceFromValue: 1170000,
    priceTo: "Rs 19.70 Lakh",
    emiFrom: "Rs 20,499",
    engines: ["1.0 TSI Turbo Petrol", "1.5 TSI EVO Turbo Petrol"],
    power: "115 PS and 150 PS",
    transmission: "6 speed manual, 6 speed automatic, 7 speed DSG",
    mileage: "Up to 19.87 kmpl (ARAI)",
    seating: 5,
    safety: "5 star Global NCAP adult and child safety",
    bootSpace: "385 litres",
    colors: ["Curcuma Yellow", "Wild Cherry Red", "Rising Blue", "Reflex Silver", "Candy White", "Carbon Steel Grey", "Deep Black Pearl"],
    variants: ["Comfortline", "Highline", "Topline", "GT Plus Sport"],
    highlights: [
      "5 star Global NCAP rating for adult and child occupants",
      "1.5 TSI EVO with active cylinder technology on GT trims",
      "7 speed DSG gearbox on the GT Plus",
      "Electric sunroof, ventilated seats and wireless charging",
      "Digital cockpit with connected car features",
    ],
    specs: [
      { label: "Body type", value: "Mid size SUV" },
      { label: "Engine", value: "999 cc and 1498 cc TSI turbo petrol" },
      { label: "Ground clearance", value: "188 mm" },
      { label: "Fuel tank", value: "50 litres" },
    ],
    offer: "Cash discount plus exchange bonus plus corporate benefit on select variants",
    intro:
      "The Volkswagen Taigun is the SUV that made Volkswagen a family name in Odisha. A 5 star Global NCAP score, a proven TSI turbo petrol engine and a cabin built to last make it the safest choice in its segment.",
    body: [
      "The Taigun is available with two turbo petrol engines. The 1.0 TSI is the practical choice for city use in Bhubaneswar and Cuttack, while the 1.5 TSI EVO with the 7 speed DSG is for buyers who want serious highway performance.",
      "Safety is the strongest reason buyers move to the Taigun. It scored 5 stars in Global NCAP for both adult and child occupant protection, and every variant carries six airbags, ESC, hill hold and multi collision braking.",
      "Running cost stays sensible thanks to Volkswagen service value packages, and the active cylinder technology on the 1.5 TSI shuts down two cylinders when you cruise, which helps highway mileage on the way to Puri or Konark.",
    ],
    accent: "from-sky-400 via-blue-600 to-indigo-800",
    badge: "Best seller",
  },
  {
    slug: "volkswagen-virtus",
    name: "Virtus",
    fullName: "Volkswagen Virtus",
    bodyType: "Premium sedan",
    tagline: "The German sedan with a 5 star safety score",
    priceFrom: "Rs 11.56 Lakh",
    priceFromValue: 1156000,
    priceTo: "Rs 19.80 Lakh",
    emiFrom: "Rs 20,299",
    engines: ["1.0 TSI Turbo Petrol", "1.5 TSI EVO Turbo Petrol"],
    power: "115 PS and 150 PS",
    transmission: "6 speed manual, 6 speed automatic, 7 speed DSG",
    mileage: "Up to 20.8 kmpl (ARAI)",
    seating: 5,
    safety: "5 star Global NCAP adult and child safety",
    bootSpace: "521 litres",
    colors: ["Curcuma Yellow", "Wild Cherry Red", "Rising Blue", "Reflex Silver", "Candy White", "Carbon Steel Grey", "Deep Black Pearl"],
    variants: ["Comfortline", "Highline", "Topline", "GT Plus Sport"],
    highlights: [
      "Largest boot in the segment at 521 litres",
      "1.5 TSI EVO GT Plus with 7 speed DSG for enthusiasts",
      "5 star Global NCAP safety with six airbags",
      "Ventilated front seats and electric sunroof",
      "10 inch touchscreen with wireless smartphone mirroring",
    ],
    specs: [
      { label: "Body type", value: "Premium mid size sedan" },
      { label: "Engine", value: "999 cc and 1498 cc TSI turbo petrol" },
      { label: "Boot space", value: "521 litres" },
      { label: "Fuel tank", value: "45 litres" },
    ],
    offer: "Attractive cash benefit with low interest finance on select variants",
    intro:
      "The Volkswagen Virtus is for buyers who want sedan comfort without giving up safety or driving pleasure. It carries a 5 star Global NCAP rating and the widest cabin in its class.",
    body: [
      "For long drives on NH 16 the Virtus is hard to beat. The suspension is tuned to soak up broken patches and stay planted at high speed, which is exactly what Odisha highways demand.",
      "The GT Plus variant with the 1.5 TSI EVO and the 7 speed DSG gearbox delivers 150 PS, paddle shifters and a sport tuned exhaust note, while the 1.0 TSI variants keep running cost down for everyday office commutes.",
      "The 521 litre boot handles family luggage for a Puri weekend without any packing tricks, and the rear seat is genuinely comfortable for three.",
    ],
    accent: "from-rose-400 via-red-600 to-rose-900",
  },
  {
    slug: "volkswagen-tiguan-r-line",
    name: "Tiguan R-Line",
    fullName: "Volkswagen Tiguan R-Line",
    bodyType: "Luxury SUV",
    tagline: "4MOTION all wheel drive luxury SUV",
    priceFrom: "Rs 49.00 Lakh",
    priceFromValue: 4900000,
    priceTo: "Rs 51.50 Lakh",
    emiFrom: "Rs 84,999",
    engines: ["2.0 TSI Turbo Petrol"],
    power: "204 PS and 320 Nm",
    transmission: "7 speed DSG with 4MOTION all wheel drive",
    mileage: "Up to 12.9 kmpl (ARAI)",
    seating: 5,
    safety: "Level 2 ADAS, 9 airbags, 5 star Euro NCAP platform",
    bootSpace: "652 litres",
    colors: ["Nightshade Blue", "Oyster Silver", "Grenadilla Black", "Persimmon Red"],
    variants: ["Tiguan R-Line"],
    highlights: [
      "2.0 litre TSI with 204 PS and 4MOTION all wheel drive",
      "Level 2 ADAS with adaptive cruise and lane assist",
      "Harman Kardon sound system with 700 watt output",
      "IQ.Light LED matrix headlamps",
      "Massage function for the driver seat and three zone climate control",
    ],
    specs: [
      { label: "Body type", value: "Luxury SUV, completely built unit" },
      { label: "Engine", value: "1984 cc TSI turbo petrol" },
      { label: "Drivetrain", value: "4MOTION all wheel drive" },
      { label: "Boot space", value: "652 litres expandable to 1650 litres" },
    ],
    offer: "Corporate and loyalty benefits with tailored finance from our banking partners",
    intro:
      "The Tiguan R-Line is the flagship Volkswagen SUV in India. It is imported as a completely built unit and it brings 4MOTION all wheel drive, Level 2 ADAS and a genuinely premium cabin.",
    body: [
      "This is the Volkswagen for buyers who have owned luxury SUVs before and want German engineering with real driving involvement. The 2.0 TSI produces 204 PS and drives all four wheels through a 7 speed DSG.",
      "The R-Line package adds sharper bumpers, 19 inch alloy wheels, sport seats and R-Line badging inside and outside, so the car looks the part in every Bhubaneswar parking lot.",
      "Bookings for the Tiguan R-Line are handled personally by our senior sales consultants, including home demonstration anywhere in Bhubaneswar and Cuttack.",
    ],
    accent: "from-slate-500 via-slate-700 to-slate-900",
    badge: "Flagship",
  },
  {
    slug: "volkswagen-golf-gti",
    name: "Golf GTI",
    fullName: "Volkswagen Golf GTI",
    bodyType: "Performance hatchback",
    tagline: "The original hot hatch, now in India",
    priceFrom: "Rs 53.00 Lakh",
    priceFromValue: 5300000,
    priceTo: "Rs 53.00 Lakh",
    emiFrom: "Rs 91,999",
    engines: ["2.0 TSI Turbo Petrol"],
    power: "265 PS and 370 Nm",
    transmission: "7 speed DSG",
    mileage: "Up to 12.6 kmpl (ARAI)",
    seating: 5,
    safety: "8 airbags, ESC, Level 2 driver assistance",
    bootSpace: "374 litres",
    colors: ["Kings Red", "Oryx White", "Moonstone Grey", "Grenadilla Black"],
    variants: ["Golf GTI"],
    highlights: [
      "265 PS 2.0 TSI with 0 to 100 kmph in about 5.9 seconds",
      "Electronic front differential lock for sharper corner exit",
      "Iconic tartan sport seats and GTI red detailing",
      "Adaptive chassis control with driving profile selection",
      "Limited allocation for India, booking priority applies",
    ],
    specs: [
      { label: "Body type", value: "Performance hatchback, completely built unit" },
      { label: "Engine", value: "1984 cc TSI turbo petrol" },
      { label: "0 to 100 kmph", value: "About 5.9 seconds" },
      { label: "Top speed", value: "250 kmph, electronically limited" },
    ],
    offer: "Priority allocation for confirmed bookings, speak to our team for the current waiting period",
    intro:
      "The Golf GTI is the car that created the hot hatch category. India gets it as a limited allocation import, so booking early is the only way to secure one.",
    body: [
      "265 PS, 370 Nm, a 7 speed DSG and an electronic front differential lock make the GTI genuinely quick, yet it stays comfortable enough to use every day.",
      "Inside you get the famous tartan seats, GTI red stitching, a digital cockpit pro and a Harman Kardon audio system.",
      "Allocations are limited nationally. If you want a Golf GTI delivered in Bhubaneswar, contact us to check the current queue and confirm your booking slot.",
    ],
    accent: "from-red-500 via-red-700 to-zinc-900",
    badge: "Limited units",
  },
];

export const modelBySlug = (slug: string) => models.find((m) => m.slug === slug);
export const modelSlugs = models.map((m) => m.slug);
