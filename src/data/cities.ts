export type City = {
  slug: string;
  name: string;
  district: string;
  knownAs: string;
  distanceKm: number;
  driveTime: string;
  pin: string;
  landmarks: string[];
  areas: string[];
  intro: string;
  note: string;
  popularModel: string;
};

/**
 * Odisha towns and cities we deliver to from the Bhubaneswar showroom.
 * Each entry powers an SEO page at /volkswagen-showroom/[slug].
 */
export const cities: City[] = [
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    district: "Khordha",
    knownAs: "the Temple City and capital of Odisha",
    distanceKm: 0,
    driveTime: "you are already here",
    pin: "751001",
    landmarks: ["Lingaraj Temple", "Kalinga Stadium", "Esplanade One Mall", "Biju Patnaik International Airport"],
    areas: ["Patia", "Chandrasekharpur", "Saheed Nagar", "Jaydev Vihar", "Khandagiri", "Rasulgarh", "Old Town", "Nayapalli"],
    intro:
      "Bhubaneswar is our home market and the base for every Volkswagen delivery in Odisha. Sales, finance, insurance and after sales all happen under one roof here.",
    note:
      "Traffic in Bhubaneswar moves between tight Old Town lanes and open six lane stretches near Jaydev Vihar and the airport, which is exactly where a TSI turbo petrol with an automatic gearbox feels effortless. Most of our Patia and Chandrasekharpur customers pick the Taigun or the Virtus for that reason.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "cuttack",
    name: "Cuttack",
    district: "Cuttack",
    knownAs: "the Silver City and the commercial heart of Odisha",
    distanceKm: 28,
    driveTime: "about 45 minutes",
    pin: "753001",
    landmarks: ["Barabati Fort", "Netaji Birth Place Museum", "Cuttack Ring Road", "Badambadi Bus Stand"],
    areas: ["Badambadi", "College Square", "Link Road", "Bidanasi", "Chauliaganj", "Jobra"],
    intro:
      "Cuttack buyers are a big part of our monthly deliveries. The Bhubaneswar to Cuttack corridor is a 45 minute drive, so a test drive at your doorstep is easy to arrange.",
    note:
      "Between the narrow lanes near College Square and the open Ring Road, Cuttack owners tell us they want a car that is compact outside but strong on the highway. The Taigun fits that brief exactly, and we deliver to Link Road and Bidanasi addresses regularly.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "puri",
    name: "Puri",
    district: "Puri",
    knownAs: "the pilgrimage town of Lord Jagannath",
    distanceKm: 60,
    driveTime: "about 1 hour 15 minutes",
    pin: "752001",
    landmarks: ["Shree Jagannath Temple", "Puri Beach", "Grand Road", "Chilika Lake nearby"],
    areas: ["Grand Road", "Chakratirtha Road", "VIP Road", "Baliapanda", "Talabania"],
    intro:
      "Puri customers buy from us through the Bhubaneswar Puri expressway route. Doorstep documentation and home delivery are available across the town.",
    note:
      "Coastal air is hard on cars, so Puri owners appreciate the galvanised body panels and the laser welded shell that Volkswagen uses. It is one of the practical reasons buyers here move from a mass market hatchback to a Taigun or a Virtus.",
    popularModel: "volkswagen-virtus",
  },
  {
    slug: "khordha",
    name: "Khordha",
    district: "Khordha",
    knownAs: "the district headquarters town on NH 16",
    distanceKm: 27,
    driveTime: "about 40 minutes",
    pin: "752055",
    landmarks: ["Khordha Fort", "Barunei Hill", "Khordha Road Junction"],
    areas: ["Jatni Road", "Town Centre", "Balugaon Road", "Begunia"],
    intro:
      "Khordha sits on the main highway to Bhubaneswar, which makes showroom visits and service trips simple for buyers from the district.",
    note:
      "Most Khordha enquiries are for first time buyers moving up to a turbo petrol car. The Taigun, from an ex showroom price close to Rs 10.99 Lakh, is usually where that conversation starts.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "jatni",
    name: "Jatni",
    district: "Khordha",
    knownAs: "the railway town next to Bhubaneswar",
    distanceKm: 22,
    driveTime: "about 35 minutes",
    pin: "752050",
    landmarks: ["Jatni Railway Station", "IIT Bhubaneswar campus", "Barunei Hill"],
    areas: ["Station Road", "Argul", "Kantabada Road", "Nuagaon"],
    intro:
      "Jatni is a short drive from our Bhubaneswar showroom, so test drives here are usually arranged the same day.",
    note:
      "With the IIT Bhubaneswar campus at Argul and steady residential growth, Jatni has a young buyer base. Low EMI plans and first time buyer finance are the two things people ask us about most from this area.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "konark",
    name: "Konark",
    district: "Puri",
    knownAs: "the home of the Sun Temple",
    distanceKm: 65,
    driveTime: "about 1 hour 20 minutes",
    pin: "752111",
    landmarks: ["Konark Sun Temple", "Chandrabhaga Beach", "Marine Drive to Puri"],
    areas: ["Konark Town", "Chandrabhaga", "Ramachandi Road"],
    intro:
      "We deliver to Konark and the marine drive belt, with paperwork completed at your home or office.",
    note:
      "The Marine Drive between Puri and Konark is one of the best driving roads in Odisha. Customers who enjoy that stretch usually end up shortlisting the 1.5 TSI GT Plus versions of the Virtus and the Taigun.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "nayagarh",
    name: "Nayagarh",
    district: "Nayagarh",
    knownAs: "a growing district town on the Bhubaneswar Bolangir route",
    distanceKm: 85,
    driveTime: "about 2 hours",
    pin: "752069",
    landmarks: ["Nayagarh Fort area", "Satkosia gateway", "Odagaon"],
    areas: ["Town Centre", "Odagaon", "Ranpur", "Khandapada"],
    intro:
      "Nayagarh buyers get the same offers as Bhubaneswar customers, with delivery arranged to your town.",
    note:
      "Roads towards Satkosia and Ranpur have their share of rough patches, so ground clearance matters here. The Taigun, with 188 mm of clearance and a body tuned for Indian surfaces, handles these routes without drama.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "dhenkanal",
    name: "Dhenkanal",
    district: "Dhenkanal",
    knownAs: "a heritage town on the route to Angul",
    distanceKm: 90,
    driveTime: "about 2 hours",
    pin: "759001",
    landmarks: ["Kapilash Temple", "Saptasajya hills", "Dhenkanal Palace"],
    areas: ["Town Centre", "Bhuban", "Kamakhyanagar", "Hindol Road"],
    intro:
      "Dhenkanal customers regularly buy from our Bhubaneswar showroom because of the two hour highway connection.",
    note:
      "Buyers here often drive to Bhubaneswar for work or medical visits, so highway stability and headlamp quality come up in every conversation. That is where the Volkswagen suspension tune and the LED projector setup win people over.",
    popularModel: "volkswagen-virtus",
  },
  {
    slug: "jajpur",
    name: "Jajpur",
    district: "Jajpur",
    knownAs: "the temple town near the Kalinganagar industrial belt",
    distanceKm: 95,
    driveTime: "about 2 hours",
    pin: "755001",
    landmarks: ["Biraja Temple", "Kalinganagar industrial hub", "Jajpur Road junction"],
    areas: ["Jajpur Town", "Jajpur Road", "Vyasanagar", "Dharmasala"],
    intro:
      "Jajpur and Jajpur Road buyers, including professionals from the Kalinganagar belt, are a steady part of our customer base.",
    note:
      "Corporate discount schemes apply for employees of the large steel and mining companies in the Kalinganagar area. Share your company name when you enquire and we will check the applicable corporate benefit for you.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "kendrapara",
    name: "Kendrapara",
    district: "Kendrapara",
    knownAs: "a coastal district town near Bhitarkanika",
    distanceKm: 90,
    driveTime: "about 2 hours",
    pin: "754211",
    landmarks: ["Baladevjew Temple", "Bhitarkanika National Park", "Rajnagar"],
    areas: ["Town Centre", "Pattamundai", "Rajnagar", "Aul"],
    intro:
      "We arrange test drives and doorstep delivery in Kendrapara through our Bhubaneswar team.",
    note:
      "Coastal humidity and salt air make anti corrosion treatment a genuine requirement here, not an upsell. Volkswagen uses galvanised steel on the body panels, which is a real advantage for owners in this district.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "jagatsinghpur",
    name: "Jagatsinghpur",
    district: "Jagatsinghpur",
    knownAs: "the district town on the way to Paradip",
    distanceKm: 55,
    driveTime: "about 1 hour 15 minutes",
    pin: "754103",
    landmarks: ["Sarala Temple at Jhankad", "Paradip highway", "Kujang"],
    areas: ["Town Centre", "Kujang", "Balikuda", "Tirtol"],
    intro:
      "Jagatsinghpur is an easy drive from Bhubaneswar, so home test drives here are arranged quickly.",
    note:
      "The Paradip highway is a fast, truck heavy road. Buyers from this belt consistently ask about crash safety, and the 5 star Global NCAP rating on the Taigun and the Virtus answers that question better than any brochure.",
    popularModel: "volkswagen-virtus",
  },
  {
    slug: "paradip",
    name: "Paradip",
    district: "Jagatsinghpur",
    knownAs: "Odisha's major port town",
    distanceKm: 120,
    driveTime: "about 2 hours 30 minutes",
    pin: "754142",
    landmarks: ["Paradip Port", "Paradip refinery township", "Gahirmatha coast"],
    areas: ["Port Township", "Sandhapur", "Atharbanki", "Udayabata"],
    intro:
      "Paradip customers, including port and refinery employees, buy from our Bhubaneswar showroom with delivery to the township.",
    note:
      "Corporate car schemes are common in the Paradip township. We handle corporate documentation, salary based finance approvals and bulk enquiries for employee car plans.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "angul",
    name: "Angul",
    district: "Angul",
    knownAs: "an industrial district known for aluminium and power",
    distanceKm: 145,
    driveTime: "about 3 hours",
    pin: "759122",
    landmarks: ["NALCO township", "Satkosia Gorge", "Angul town centre"],
    areas: ["Town Centre", "NALCO Nagar", "Jarapada", "Banarpal"],
    intro:
      "Angul buyers get full support from Bhubaneswar, including finance approval before you travel for delivery.",
    note:
      "A large share of enquiries from Angul come from NALCO and power sector employees, where corporate benefits and structured EMI plans apply. Let us know your employer and we will confirm the corporate discount on the spot.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "talcher",
    name: "Talcher",
    district: "Angul",
    knownAs: "the coal and power town of Odisha",
    distanceKm: 145,
    driveTime: "about 3 hours",
    pin: "759100",
    landmarks: ["Talcher coalfields", "NTPC Kaniha", "MCL township"],
    areas: ["Talcher Town", "Talcher Thermal", "Kaniha", "Nandira"],
    intro:
      "Talcher customers can complete the entire purchase remotely, from booking to finance, with delivery arranged locally.",
    note:
      "Dust is a daily reality on the roads around the coalfields, so cabin air quality and filter service matter. We explain the service package options clearly so there are no surprises at the first paid service.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "bhadrak",
    name: "Bhadrak",
    district: "Bhadrak",
    knownAs: "a busy district town on NH 16",
    distanceKm: 130,
    driveTime: "about 2 hours 30 minutes",
    pin: "756100",
    landmarks: ["Akhandalamani Temple at Aradi", "Bhadrak railway station", "Dhamra port route"],
    areas: ["Town Centre", "Charampa", "Basudevpur", "Chandbali Road"],
    intro:
      "Bhadrak sits directly on NH 16, which keeps travel to our Bhubaneswar showroom simple and predictable.",
    note:
      "Buyers from Bhadrak and the Dhamra port belt usually want a highway focused car. The Virtus with the 1.5 TSI EVO engine is the most requested option from this district.",
    popularModel: "volkswagen-virtus",
  },
  {
    slug: "balasore",
    name: "Balasore",
    district: "Balasore",
    knownAs: "the coastal district town near Chandipur",
    distanceKm: 200,
    driveTime: "about 3 hours 30 minutes",
    pin: "756001",
    landmarks: ["Chandipur Beach", "Panchalingeswar", "Balasore railway station"],
    areas: ["Town Centre", "Sahadevkhunta", "Remuna", "Nilagiri Road"],
    intro:
      "Balasore customers buy from Bhubaneswar for the model choice and the scheme benefits, with delivery handled by our team.",
    note:
      "For a 200 km drive home on delivery day we do a full pre delivery inspection, hand over a fully fuelled car and keep our sales consultant reachable through the trip. Several Balasore families have taken this route with us.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "baripada",
    name: "Baripada",
    district: "Mayurbhanj",
    knownAs: "the gateway town to Similipal",
    distanceKm: 235,
    driveTime: "about 4 hours",
    pin: "757001",
    landmarks: ["Similipal National Park", "Haribaldev Jew Temple", "Rath Yatra grounds"],
    areas: ["Town Centre", "Bhanjpur", "Takatpur", "Rairangpur Road"],
    intro:
      "Baripada and the wider Mayurbhanj district are served from our Bhubaneswar showroom with full remote support.",
    note:
      "Routes towards Similipal involve hill sections and rough surfaces. Hill hold control, the strong low end torque of the TSI engines and 188 mm of ground clearance on the Taigun make a genuine difference on those drives.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "berhampur",
    name: "Berhampur",
    district: "Ganjam",
    knownAs: "the Silk City of southern Odisha",
    distanceKm: 170,
    driveTime: "about 3 hours",
    pin: "760001",
    landmarks: ["Gopalpur Beach", "Berhampur University", "Tata Benz Chhaka"],
    areas: ["Gandhi Nagar", "Ankuli", "Aska Road", "Gosaninuagaon", "Gopalpur Road"],
    intro:
      "Berhampur is one of our strongest markets outside Bhubaneswar, helped by the four lane highway connection.",
    note:
      "Business families in Berhampur often buy the Virtus as a chauffeur driven sedan and the Taigun as a family SUV. We can arrange a twin test drive at your home so both decisions happen in one visit.",
    popularModel: "volkswagen-virtus",
  },
  {
    slug: "rourkela",
    name: "Rourkela",
    district: "Sundargarh",
    knownAs: "the Steel City of Odisha",
    distanceKm: 340,
    driveTime: "about 6 hours",
    pin: "769001",
    landmarks: ["Rourkela Steel Plant", "Birsa Munda Hockey Stadium", "Vedvyas"],
    areas: ["Civil Township", "Basanti Colony", "Udit Nagar", "Chhend", "Panposh"],
    intro:
      "Rourkela buyers work with our Bhubaneswar team for model availability, scheme benefits and finance approvals.",
    note:
      "RSP employees and the professional community in Civil Township regularly ask about corporate schemes and top end variants. We confirm allocation and colour availability before you commit to anything.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "sambalpur",
    name: "Sambalpur",
    district: "Sambalpur",
    knownAs: "the western Odisha hub near Hirakud",
    distanceKm: 300,
    driveTime: "about 5 hours 30 minutes",
    pin: "768001",
    landmarks: ["Hirakud Dam", "Samaleswari Temple", "Sambalpur University"],
    areas: ["Ainthapali", "Budharaja", "Modipara", "Dhanupali", "Burla"],
    intro:
      "Sambalpur and Burla customers can complete booking, finance and documentation remotely with our Bhubaneswar team.",
    note:
      "Western Odisha highways are fast and open, which suits the 1.5 TSI EVO engine with active cylinder technology. It runs on two cylinders while cruising, so long runs to Bhubaneswar stay surprisingly efficient.",
    popularModel: "volkswagen-virtus",
  },
  {
    slug: "bolangir",
    name: "Bolangir",
    district: "Balangir",
    knownAs: "a district headquarters in western Odisha",
    distanceKm: 330,
    driveTime: "about 6 hours",
    pin: "767001",
    landmarks: ["Ranipur Jharial", "Harishankar", "Patnagarh Road"],
    areas: ["Town Centre", "Sudpara", "Tikrapara", "Kantabanji Road"],
    intro:
      "Bolangir customers are supported end to end from Bhubaneswar, including finance and RTO paperwork.",
    note:
      "Distance should never be the reason to settle for less car. We keep the process simple with video walkarounds of the exact vehicle, digital documentation and a single point of contact until delivery.",
    popularModel: "volkswagen-taigun",
  },
  {
    slug: "rayagada",
    name: "Rayagada",
    district: "Rayagada",
    knownAs: "a southern Odisha town in the hill belt",
    distanceKm: 380,
    driveTime: "about 7 hours",
    pin: "765001",
    landmarks: ["Chatikona", "Minajhola", "Rayagada railway station"],
    areas: ["Town Centre", "New Colony", "Gunupur Road", "Therubali"],
    intro:
      "Rayagada enquiries are handled by a dedicated consultant from our Bhubaneswar showroom.",
    note:
      "The ghat roads in this region reward a car with strong turbo torque and good brakes. The 1.0 TSI delivers peak torque low in the rev range, which makes hill climbs easy even with a full car.",
    popularModel: "volkswagen-taigun",
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
export const citySlugs = cities.map((c) => c.slug);
export const primaryCities = cities.filter((c) => c.distanceKm <= 100);
