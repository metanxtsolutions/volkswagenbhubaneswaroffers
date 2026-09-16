export type Testimonial = {
  name: string;
  city: string;
  model: string;
  rating: number;
  quote: string;
};

/**
 * TODO: replace with real, permission based customer reviews before launch.
 * Do not publish review schema markup until these are genuine reviews.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sandeep M.",
    city: "Bhubaneswar",
    model: "Volkswagen Taigun",
    rating: 5,
    quote:
      "The team arranged a test drive at my office in Chandrasekharpur and explained the full on road price without hiding anything. Delivery happened in four days.",
  },
  {
    name: "Priyanka S.",
    city: "Cuttack",
    model: "Volkswagen Virtus",
    rating: 5,
    quote:
      "I compared three sedans before choosing the Virtus. The safety rating and the boot space made the decision easy, and the finance rate they arranged was better than my own bank.",
  },
  {
    name: "Rakesh P.",
    city: "Berhampur",
    model: "Volkswagen Taigun",
    rating: 5,
    quote:
      "I was worried about buying from Bhubaneswar while living in Berhampur. They shared a video of my exact car, completed the paperwork online and the delivery was smooth.",
  },
  {
    name: "Anita D.",
    city: "Bhubaneswar",
    model: "Volkswagen Tera",
    rating: 5,
    quote:
      "This is my first car. The exchange value for my old hatchback was fair and the EMI fits my budget comfortably. Very patient sales team.",
  },
];
