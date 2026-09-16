export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: "What Volkswagen offers are running in Bhubaneswar this month?",
    a: "Current benefits include a cash discount of up to Rs 1,00,000, an exchange bonus of up to Rs 40,000, corporate benefits of up to Rs 30,000 and low interest finance. The exact amount changes with the model, variant and manufacturing month, so share your requirement and we will send you the running scheme in writing.",
  },
  {
    q: "Can I get a Volkswagen test drive at my home in Bhubaneswar?",
    a: "Yes. Home and office test drives are free anywhere in Bhubaneswar and Cuttack. Fill the form on this page or call us, pick a slot and we bring the car to you with a trained product expert.",
  },
  {
    q: "What is the on road price of a Volkswagen in Bhubaneswar?",
    a: "On road price includes the ex showroom price, Odisha RTO registration, road tax, insurance and any accessories you choose. We share a full written breakup before booking so there are no surprises at delivery.",
  },
  {
    q: "Do you arrange car loans and what is the interest rate?",
    a: "Yes. We work with leading banks and NBFCs, and most approvals come through within 24 hours. Rates depend on your credit profile, tenure and the down payment you make. Tenure of up to 84 months is available.",
  },
  {
    q: "Will you accept my old car in exchange?",
    a: "Yes, any brand. We do a free valuation, handle the ownership transfer paperwork and adjust the exchange value plus the exchange bonus against your new Volkswagen.",
  },
  {
    q: "Do you deliver outside Bhubaneswar in Odisha?",
    a: "Yes. We regularly deliver to Cuttack, Puri, Berhampur, Balasore, Rourkela, Sambalpur, Angul, Jajpur and other towns in Odisha. Booking, finance and documentation can all be completed remotely.",
  },
  {
    q: "Which Volkswagen models are available in Bhubaneswar?",
    a: "The current lineup is the Tera compact SUV, the Taigun mid size SUV, the Virtus sedan, the Tiguan R-Line luxury SUV and the Golf GTI performance hatchback.",
  },
  {
    q: "How long does delivery take after booking?",
    a: "Popular colours and variants are usually delivered within three to seven days. Specific colour or variant combinations, and the imported Tiguan R-Line and Golf GTI, can take longer. We confirm the exact timeline before you book.",
  },
];

export const financeFaqs: Faq[] = [
  {
    q: "What down payment do I need for a Volkswagen?",
    a: "Finance is typically available up to 85 to 90 percent of the ex showroom price for eligible buyers, so the down payment starts from around 10 to 20 percent plus the registration and insurance cost.",
  },
  {
    q: "Can I get finance without an income tax return?",
    a: "Yes, several of our partner banks offer schemes based on banking history or a business turnover profile instead of an ITR. Share your documents and our finance desk will tell you which scheme fits.",
  },
  {
    q: "Is a balloon or step up EMI plan available?",
    a: "Yes. A balloon scheme keeps your monthly EMI low with a larger payment at the end of the tenure, and a step up plan starts low and increases as your income grows.",
  },
];

export function cityFaqs(cityName: string, distanceKm: number): Faq[] {
  const delivery =
    distanceKm === 0
      ? "Delivery inside Bhubaneswar is arranged at the showroom or at your home, whichever you prefer."
      : `${cityName} is about ${distanceKm} km from our Bhubaneswar showroom. We arrange doorstep documentation and delivery to ${cityName}, and our sales consultant stays with you until the car is handed over.`;

  return [
    {
      q: `Is there a Volkswagen showroom in ${cityName}?`,
      a: `Volkswagen customers in ${cityName} are served from our Bhubaneswar showroom, which covers sales, finance, insurance and after sales support for the region. ${delivery}`,
    },
    {
      q: `What is the Volkswagen on road price in ${cityName}?`,
      a: `The on road price in ${cityName} includes the ex showroom price, Odisha road tax, registration and insurance. Since Odisha has a single road tax structure, the on road price in ${cityName} is broadly the same as in Bhubaneswar. Ask us for a written quote for your chosen variant.`,
    },
    {
      q: `Can I book a Volkswagen test drive in ${cityName}?`,
      a: `Yes. Share your address and preferred time and we will schedule a test drive in ${cityName}. For towns further from Bhubaneswar we plan the visit in advance so the exact model you want is available.`,
    },
    {
      q: `Do Volkswagen offers apply to buyers from ${cityName}?`,
      a: `Yes. Every buyer from ${cityName} gets the same monthly scheme, exchange bonus, corporate benefit and finance options as a Bhubaneswar customer.`,
    },
  ];
}

export function modelFaqs(modelName: string, priceFrom: string, emiFrom: string): Faq[] {
  return [
    {
      q: `What is the ${modelName} price in Bhubaneswar?`,
      a: `The ${modelName} starts from ${priceFrom} ex showroom. The on road price adds Odisha registration, road tax and insurance. Contact us for a written on road quote for the variant and colour you want.`,
    },
    {
      q: `What is the EMI for a ${modelName}?`,
      a: `EMI starts from about ${emiFrom} per month depending on your down payment, tenure and interest rate. Our finance desk can structure the plan around the monthly figure you are comfortable with.`,
    },
    {
      q: `Is the ${modelName} available for a test drive in Bhubaneswar?`,
      a: `Yes. We offer a free home or office test drive of the ${modelName} anywhere in Bhubaneswar and Cuttack. Book a slot through the form on this page.`,
    },
    {
      q: `What is the waiting period for the ${modelName}?`,
      a: `Popular variants are usually delivered within three to seven days. Specific colour and variant combinations can take longer, so we confirm the exact date before you book.`,
    },
  ];
}
