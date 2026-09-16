/**
 * Single source of truth for business details. Everything on the site reads
 * from here: header, footer, call buttons, contact page and schema markup.
 */
export const site = {
  name: "Volkswagen Bhubaneswar Offers",
  legalName: "Volkswagen Bhubaneswar",
  shortName: "VW Bhubaneswar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://volkswagenbhubaneswaroffers.in",
  tagline: "Book your Volkswagen in Bhubaneswar with the best price of the month",
  description:
    "Volkswagen offers in Bhubaneswar and across Odisha. Get on road price, current discounts, low EMI finance and a free home test drive on Virtus, Taigun, Tera, Tiguan R-Line and Golf GTI.",

  // Sales contact, used by every call and WhatsApp button on the site
  phone: "+918981446268",
  phoneDisplay: "+91 89814 46268",
  whatsapp: "918981446268",
  email: "sales@volkswagenbhubaneswaroffers.in", // TODO: confirm the real sales inbox

  // Sales showroom, used for the primary address and schema markup
  address: {
    street: "Plot No. 4, Near HP Petrol Pump, National Highway 16, Pahal",
    locality: "Bhubaneswar",
    region: "Odisha",
    postalCode: "752101",
    country: "IN",
  },

  /**
   * Exact showroom pin. Left null on purpose: publishing a guessed coordinate
   * in schema markup sends people to the wrong place. Drop the real latitude
   * and longitude from Google Maps here and the geo tags switch on by
   * themselves. Until then the full postal address does the work.
   */
  geo: null as { latitude: number; longitude: number } | null,

  mapEmbedQuery: "Volkswagen Bhubaneswar, Plot No 4, NH 16, Pahal, Bhubaneswar, Odisha 752101",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Volkswagen+Bhubaneswar+Plot+No+4+NH+16+Pahal+Bhubaneswar+Odisha+752101",

  openingHours: {
    days: "Monday to Saturday",
    time: "10:00 am to 7:00 pm",
    sunday: "Sunday, 10:00 am to 6:30 pm",
    schema: ["Mo-Sa 10:00-19:00", "Su 10:00-18:30"],
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  offerValidity: "Limited period offer. Ask our team for the running month scheme.",
} as const;

export type Location = {
  id: string;
  kind: "Sales showroom" | "Service centre";
  name: string;
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  phone: string;
  phoneDisplay: string;
  hours: { days: string; time: string }[];
  mapsUrl: string;
};

/** Both dealership locations, shown on the contact page and in the footer. */
export const locations: Location[] = [
  {
    id: "pahal-sales",
    kind: "Sales showroom",
    name: "Volkswagen Bhubaneswar, Pahal",
    street: "Plot No. 4, Near HP Petrol Pump, National Highway 16, Pahal",
    locality: "Bhubaneswar",
    region: "Odisha",
    postalCode: "752101",
    phone: "+918981446268",
    phoneDisplay: "+91 89814 46268",
    hours: [
      { days: "Monday to Saturday", time: "10:00 am to 7:00 pm" },
      { days: "Sunday", time: "10:00 am to 6:30 pm" },
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Volkswagen+Bhubaneswar+Plot+No+4+NH+16+Pahal+Bhubaneswar+Odisha+752101",
  },
  {
    id: "bhanpur-service",
    kind: "Service centre",
    name: "Volkswagen Service, Bhanpur",
    street: "NH 16, Bhanpur, Gopalpur",
    locality: "Bhubaneswar",
    region: "Odisha",
    postalCode: "753011",
    phone: "+919147106210",
    phoneDisplay: "+91 91471 06210",
    hours: [
      { days: "Monday to Saturday", time: "9:30 am to 6:30 pm" },
      { days: "Sunday", time: "Closed" },
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Volkswagen+Service+NH+16+Bhanpur+Gopalpur+Bhubaneswar+Odisha+753011",
  },
];

export const telHref = `tel:${site.phone}`;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}
