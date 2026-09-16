/**
 * Ownership, service and finance content.
 *
 * Programme names and terms below follow Volkswagen India's published owner
 * and finance products as researched in September 2026 (standard warranty,
 * Service Value Package, 4ever Care, Volkswagen Assistance, Mobile Service
 * Unit, Volkswagen Secure). The dealership confirms current terms on enquiry,
 * since manufacturer programmes change.
 */

export type ServiceItem = {
  title: string;
  detail: string;
  points: string[];
};

export const warrantyHeadline = {
  years: "4 years",
  distance: "1,00,000 km",
  freeServices: "3 free services",
  roadside: "4 years roadside assistance",
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Periodic maintenance",
    detail:
      "Scheduled servicing at our Bhanpur workshop, carried out by Volkswagen trained technicians using Volkswagen diagnostic equipment and 100 percent genuine parts.",
    points: [
      "Service intervals as set out in your owner's manual",
      "Digital job card, so you see what was done and why",
      "Estimate shared before work starts, not after",
    ],
  },
  {
    title: "Service Value Package",
    detail:
      "A prepaid package covering your periodic maintenance for a fixed term. You pay today's prices for tomorrow's services, which protects you against labour and parts inflation.",
    points: [
      "Covers scheduled maintenance as per the owner's manual",
      "Protection against labour and spare part cost inflation",
      "Guaranteed 100 percent genuine parts",
      "Transfers with the car if you sell it",
    ],
  },
  {
    title: "4ever Care and extended warranty",
    detail:
      "Extends cover beyond the standard warranty period so the car stays protected through the years when component costs start to matter.",
    points: [
      "Extended warranty options beyond the standard term",
      "Annual maintenance packages",
      "Cover continues to apply across the authorised network",
    ],
  },
  {
    title: "Body and paint",
    detail:
      "Accident repair and refinishing to Volkswagen standards, with colour matched paint and panel work that keeps the factory corrosion protection intact.",
    points: [
      "Insurance claim handled by our team",
      "Colour matched, oven cured paint",
      "Structural repair to manufacturer specification",
    ],
  },
  {
    title: "Volkswagen Assistance",
    detail:
      "24x7 roadside assistance across India. If the car stops, a trained technician comes to it, whether you are in Bhubaneswar or halfway to Sambalpur.",
    points: ["24x7 roadside assistance", "On site minor repairs", "Towing to the nearest authorised workshop"],
  },
  {
    title: "Mobile Service Unit",
    detail:
      "For periodic maintenance, minor repairs and value added jobs, the workshop comes to you rather than the other way around.",
    points: ["Periodic maintenance at your location", "Minor repair jobs and dry wash", "Booked by phone or WhatsApp"],
  },
];

export const serviceSteps = [
  { title: "Book a slot", detail: "Call, WhatsApp or use the form. Tell us the model, the registration number and what you have noticed." },
  { title: "Bring it in, or we collect", detail: "Pick up and drop is available across Bhubaneswar and Cuttack for scheduled servicing." },
  { title: "Estimate before work", detail: "We inspect, then send you the estimate. Nothing is carried out until you approve it." },
  { title: "Delivered, explained", detail: "The car comes back washed, with the job card walked through line by line." },
];

export const financeProducts = [
  {
    title: "Standard car loan",
    detail:
      "Funding of up to 90 percent of the on road price, with tenures from one to seven years. Our finance desk runs your profile past every partner and comes back with the best approved rate.",
    points: ["Up to 90 percent funding", "Tenure from 1 to 7 years", "Approval usually within 24 hours"],
  },
  {
    title: "Volkswagen Secure",
    detail:
      "A buy back assured plan. You commit to a 36 or 48 month term with a lower monthly outgo, and at the end you choose what happens next.",
    points: [
      "Assured buy back of up to 55 percent",
      "Up to 35 percent lower EMI than a standard loan",
      "At the end: upgrade, refinance, pay the balloon and keep it, or return it",
    ],
  },
  {
    title: "Insurance and warranty",
    detail:
      "Comprehensive motor insurance arranged at delivery, with zero depreciation, engine protection and roadside cover, plus extended warranty options for later years.",
    points: ["Zero depreciation cover", "Engine and consumables protection", "Claims supported by our team"],
  },
];

export const financePartners = [
  "Kotak Mahindra Prime",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "State Bank of India",
];

export const financeDocuments = [
  "PAN card and Aadhaar",
  "Three to six months of bank statements",
  "Salary slips, or business proof and ITR for self employed buyers",
  "One address proof",
];

export const accessoryCategories = [
  {
    title: "Exterior styling",
    detail: "Body side mouldings, chrome and dark accent packs, roof rails, mud flaps and boot spoilers.",
  },
  {
    title: "Interior and comfort",
    detail: "Floor mats, seat covers, sunshades, armrests, ambient lighting and boot organisers.",
  },
  {
    title: "Protection",
    detail: "Body covers, paint protection film, underbody coating and anti rust treatment for coastal use.",
  },
  {
    title: "Infotainment and connectivity",
    detail: "Speaker upgrades, wireless chargers, dash cameras and Volkswagen Connect accessories.",
  },
  {
    title: "Utility and travel",
    detail: "Roof boxes, carriers, cargo nets, first aid and tool kits for long Odisha road trips.",
  },
  {
    title: "Genuine parts",
    detail: "Filters, brake pads, wipers, batteries and service items, all Volkswagen genuine and warranty safe.",
  },
];

export const usedCarPromise = [
  {
    title: "Multi point inspection",
    detail: "Every car is checked across mechanical, electrical, interior and body parameters before it can be certified.",
  },
  {
    title: "Genuine history",
    detail: "Service record, ownership and odometer verified, so what you are told is what you are buying.",
  },
  {
    title: "Warranty included",
    detail: "Certified cars carry a warranty and roadside assistance, serviced through the authorised network.",
  },
  {
    title: "Exchange and finance",
    detail: "Your current car is valued on the spot, and finance for the purchase is arranged in house.",
  },
];
