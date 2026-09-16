/**
 * Single source of truth for business details.
 *
 * TODO before go live: replace every value marked PLACEHOLDER with the real
 * dealership data. Everything else on the site reads from this file, so one
 * edit here updates the header, footer, schema markup, call buttons and forms.
 */
export const site = {
  name: "Volkswagen Bhubaneswar Offers",
  legalName: "Volkswagen Bhubaneswar", // PLACEHOLDER: registered dealership name
  shortName: "VW Bhubaneswar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://volkswagenbhubaneswaroffers.in",
  tagline: "Book your Volkswagen in Bhubaneswar with the best price of the month",
  description:
    "Volkswagen offers in Bhubaneswar and across Odisha. Get on road price, current discounts, low EMI finance and a free home test drive on Virtus, Taigun, Tera, Tiguan R-Line and Golf GTI.",

  // Contact
  phone: "+919000000000", // PLACEHOLDER: sales number
  phoneDisplay: "+91 90000 00000", // PLACEHOLDER
  whatsapp: "919000000000", // PLACEHOLDER: digits only, with country code
  email: "sales@volkswagenbhubaneswaroffers.in", // PLACEHOLDER

  // Showroom address
  address: {
    street: "NH 16, Pahala, Bhubaneswar", // PLACEHOLDER
    locality: "Bhubaneswar",
    region: "Odisha",
    postalCode: "751002", // PLACEHOLDER
    country: "IN",
  },
  geo: {
    // PLACEHOLDER: drop the exact showroom pin from Google Maps
    latitude: 20.2961,
    longitude: 85.8245,
  },
  mapEmbedQuery: "Volkswagen Showroom Bhubaneswar",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Volkswagen+Showroom+Bhubaneswar",

  openingHours: {
    days: "Monday to Sunday",
    time: "9:30 am to 7:30 pm",
    schema: ["Mo-Su 09:30-19:30"],
  },

  social: {
    facebook: "", // PLACEHOLDER
    instagram: "", // PLACEHOLDER
    youtube: "", // PLACEHOLDER
  },

  offerValidity: "Limited period offer. Ask our team for the running month scheme.",
} as const;

export const telHref = `tel:${site.phone}`;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}
