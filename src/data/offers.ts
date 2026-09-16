export type Offer = {
  id: string;
  title: string;
  value: string;
  detail: string;
  icon: "cash" | "exchange" | "finance" | "corporate" | "accessory" | "insurance";
  appliesTo: string;
};

/**
 * TODO: update this list at the start of every month with the running scheme
 * shared by the dealership. Values shown here are indicative.
 */
export const offers: Offer[] = [
  {
    id: "cash-benefit",
    title: "Cash benefit",
    value: "Up to Rs 1,00,000",
    detail:
      "Direct price benefit on select variants and manufacturing months. The exact amount depends on the model, variant and stock available.",
    icon: "cash",
    appliesTo: "Tera, Taigun, Virtus",
  },
  {
    id: "exchange-bonus",
    title: "Exchange bonus",
    value: "Up to Rs 40,000",
    detail:
      "Bring in any brand of car for evaluation. We give you a free valuation, handle the transfer paperwork and adjust the bonus against your new Volkswagen.",
    icon: "exchange",
    appliesTo: "All models",
  },
  {
    id: "low-emi",
    title: "Low EMI finance",
    value: "From Rs 16,999 per month",
    detail:
      "Finance from leading banks and NBFCs with tenure up to 84 months, step up plans and balloon schemes for buyers who want a lower monthly outgo.",
    icon: "finance",
    appliesTo: "All models",
  },
  {
    id: "corporate",
    title: "Corporate discount",
    value: "Up to Rs 30,000",
    detail:
      "Extra benefit for employees of listed companies, doctors, chartered accountants and government staff. Carry your ID card or salary slip.",
    icon: "corporate",
    appliesTo: "Selected models",
  },
  {
    id: "accessory",
    title: "Accessory package",
    value: "Complimentary on booking",
    detail:
      "Genuine Volkswagen accessories such as floor mats, mud flaps and body cover bundled with confirmed bookings during the offer period.",
    icon: "accessory",
    appliesTo: "Limited period",
  },
  {
    id: "insurance",
    title: "Insurance support",
    value: "Zero depreciation available",
    detail:
      "Comprehensive cover with zero depreciation, roadside assistance and engine protection arranged at the time of delivery.",
    icon: "insurance",
    appliesTo: "All models",
  },
];

export const usps = [
  {
    title: "German safety as standard",
    detail: "Six airbags, ESC and a laser welded body shell across the range, with 5 star Global NCAP ratings on the Taigun and the Virtus.",
  },
  {
    title: "Free home test drive",
    detail: "We bring the car to your home or office anywhere in Bhubaneswar and Cuttack, at a time that suits you.",
  },
  {
    title: "Finance approval in 24 hours",
    detail: "Our in house finance desk works with multiple banks, so you get the lowest rate you qualify for without running around.",
  },
  {
    title: "Transparent on road price",
    detail: "Full breakup of ex showroom price, RTO, insurance and accessories in writing before you pay anything.",
  },
];
