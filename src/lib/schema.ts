import { absoluteUrl, site } from "@/data/site";
import type { Faq } from "@/data/faqs";
import type { Model } from "@/data/models";

const dealerId = `${absoluteUrl("/")}#dealer`;

export function autoDealerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": dealerId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: absoluteUrl("/"),
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl("/og-default.png"),
    priceRange: "Rs Rs Rs",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, Car Loan",
    brand: { "@type": "Brand", name: "Volkswagen" },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    areaServed: {
      "@type": "State",
      name: "Odisha",
    },
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: site.name,
    inLanguage: "en-IN",
    publisher: { "@id": dealerId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function carSchema(model: Model) {
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name: model.fullName,
    brand: { "@type": "Brand", name: "Volkswagen" },
    model: model.name,
    bodyType: model.bodyType,
    vehicleSeatingCapacity: model.seating,
    fuelType: "Petrol",
    vehicleTransmission: model.transmission,
    description: model.intro,
    url: absoluteUrl(`/models/${model.slug}`),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: model.priceFromValue,
      availability: "https://schema.org/InStock",
      seller: { "@id": dealerId },
      areaServed: "Odisha, India",
    },
  };
}

export function localBusinessForCity(cityName: string, cityRegionSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: `${site.name} serving ${cityName}`,
    parentOrganization: { "@id": dealerId },
    url: absoluteUrl(`/volkswagen-showroom/${cityRegionSlug}`),
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: "Odisha" } },
    brand: { "@type": "Brand", name: "Volkswagen" },
  };
}
