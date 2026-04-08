export type ProjectStatus = "completed" | "ongoing" | "upcoming";
export type ProjectType = "residential" | "farmland";

export type ApprovalType =
  | "BMRDA"
  | "DTCP"
  | "Agricultural"
  | "Under Approval";

export interface Project {
  id: string;
  slug: string;

  name: string;
  tagline: string;

  location: string;
  region: "Karnataka" | "Tamil Nadu";

  type: ProjectType;
  status: ProjectStatus;

  description: string;

  features: string[];
  amenities: string[];
  highlights: string[];

  plotSizes: string;
  totalPlots: number;

  priceRange: string;
  priceValue: number;

  createdAt: string;
  isFeatured?: boolean;

  approvalType: ApprovalType;
  clearTitle: boolean;
  loanAvailable?: boolean;

  image: string;
  gallery: string[];

  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "sungraze-farms-phase-1",

    name: "Sungraze Farms Phase 1",
    tagline: "Farm Land with Club House & Amenities",

    location: "Near Shoolagiri, Tamil Nadu",
    region: "Tamil Nadu",

    type: "farmland",
    status: "ongoing",

    description:
      "Sungraze Farms brings you close to the Nature a chance to own a farm Land where you can enjoy the luxury of reclining in the lap of Nature And Rejuvenate your life by Upcoming Club House with ample amenities. Sungraze is a preeminent place to invest for good returns.\n\n60 minutes drive from Silk Board. Located at Bangalore-Chennai High way, Near Shoolagiri,Tamil Nadu Fertile land for cultivation. Laden with teak, silver Oak, and fruit bearing Trees.with Drip irrigation facility. 30 feet Motor able roads all over the Project Construct your own farm villa Nature at its Best surrounded with vast Natural Landscapes.\n\nGood infrastructure with ample amenities, Water and Electricity, Club House, Naturopathy center, Spiritual Retreat Center, Gated community with unit sizes 9500 Sq.ft.10900 Sq.ft, ½- acre & 1-acre Good Returns for your investments.",

    features: [
      "Gated Community",
      "Drip Irrigation Facility",
      "30ft Motorable Roads",
      "Teak, Silver Oak & Fruit Trees",
      "Farm Villa Option",
      "Fertile Land for Cultivation",
    ],

    amenities: [
      "Club House (Upcoming)",
      "Naturopathy Center",
      "Spiritual Retreat Center",
      "Water & Electricity",
      "Security",
    ],

    highlights: [
      "60 mins from Silk Board",
      "Near Bangalore-Chennai Highway",
      "Good Returns for Investment",
    ],

    plotSizes: "9500 - 10900 sq.ft, ½-1 acre",
    totalPlots: 40,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: true,

    approvalType: "Agricultural",
    clearTitle: true,
    loanAvailable: false,

    image: "/assets/farmland-phase-1/farmland-1.jpg",
    gallery: [
      "/assets/farmland-phase-1/farmland-1.jpg",
      "/assets/farmland-phase-1/farmland-2.jpg",
      "/assets/farmland-phase-1/farmland-3.jpg",
      "/assets/farmland-phase-1/farmland-4.jpg"
    ],

    coordinates: {
      lat: 12.661,
      lng: 77.851,
    },
  },
  {
    id: "2",
    slug: "sungraze-farms-phase-2",

    name: "Sungraze Farms Phase 2",
    tagline: "Farmland Phase 2 with Upcoming Club House",

    location: "Near Shoolagiri, Tamil Nadu",
    region: "Tamil Nadu",

    type: "farmland",
    status: "ongoing",

    description:
      "Sungraze Farms Phase 2 offers fertile agricultural land with planned clubhouse amenities, naturopathy center, and secure gated living in the Shoolagiri region. The development is designed for lifestyle farming paired with strong investment returns.",

    features: [
      "Gated Community",
      "Drip Irrigation Facility",
      "30ft Motorable Roads",
      "Teak, Silver Oak & Fruit Trees",
      "Phase 2 Farm Villa Option",
      "Fertile Land for Cultivation",
    ],

    amenities: [
      "Club House (Upcoming)",
      "Naturopathy Center",
      "Spiritual Retreat Center",
      "Water & Electricity",
      "Security",
    ],

    highlights: [
      "60 mins from Silk Board",
      "Near Bangalore-Chennai Highway",
      "Phase 2 Investment Opportunity",
    ],

    plotSizes: "9500 - 10900 sq.ft, ½-1 acre",
    totalPlots: 50,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "Agricultural",
    clearTitle: true,
    loanAvailable: false,

    image: "/assets/farmland-phase-2/farmland-1.jpg",
    gallery: [
      "/assets/farmland-phase-2/farmland-1.jpg",
      "/assets/farmland-phase-2/farmland-2.jpg",
      "/assets/farmland-phase-2/farmland-3.jpg",
      "/assets/farmland-phase-2/farmland-4.jpg",
    ],

    coordinates: {
      lat: 12.662,
      lng: 77.852,
    },
  },
  {
    id: "6",
    slug: "sri-krishnanagar-hiriyur",

    name: "Sri Krishnanagar",
    tagline: "Residential Layout with Affordable Plots & Amenities",

    location: "Hiriyur, Karnataka",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "Sri Krishnanagar offers affordable and competitive residential plots in Hiriyur with the best amenities. The layout is designed for families seeking a well-connected, peaceful residential community with future growth potential.",

    features: [
      "30 feet Roads",
      "Open Drain",
      "Park",
      "Children's Play Area",
      "Electricity",
      "Green Landscaping",
    ],

    amenities: [
      "Water",
      "Gated Community",
      "Street Lights",
      "Children's Play Area",
      "Green Trees",
    ],

    highlights: [
      "Affordable residential plots",
      "Best investment for future growth",
      "Located in fast-developing Hiriyur",
    ],

    plotSizes: "1200 - 2400 sq.ft",
    totalPlots: 120,

    priceRange: "₹12L - ₹30L",
    priceValue: 1200000,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/SRI-KRISHNANAGAR/residential-1.jpg",
    gallery: [
      "/assets/SRI-KRISHNANAGAR/residential-1.jpg",
      "/assets/SRI-KRISHNANAGAR/residential-2.jpg",
      "/assets/SRI-KRISHNANAGAR/residential-3.jpg",
      "/assets/SRI-KRISHNANAGAR/residential-4.jpg",
    ],

    coordinates: {
      lat: 13.256,
      lng: 76.621,
    },
  },
  {
    id: "7",
    slug: "sri-krishna-nagar-phase-1",

    name: "Sri Krishna Nagar Phase-1 (Villa)",
    tagline: "Premium Villa Project with Modern Amenities",

    location: "Siruguppa, Karnataka",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "Sri Krishna Nagar Phase-1 is a first premium villa project spread over 10 acres with 200 villas in Siruguppa, creating a landmark residential community. We understand the value of your hard-earned money and the importance of fulfilling your family's dreams. Sri Krishna Nagar Phase-1 offers a perfect balance of location, design, comfort and affordability with excellent customer satisfaction.",

    features: [
      "30 feet Roads",
      "2 & 3 BHK Villas",
      "Open Drain",
      "Welcome Arch",
      "Green Trees Park",
      "Pyramid Meditation Hall",
    ],

    amenities: [
      "Electricity",
      "Water",
      "Gated Community",
      "Street Lights",
      "Premium Villa Design",
      "Landscaped Gardens",
    ],

    highlights: [
      "Premium villa community",
      "10 acres development",
      "200 villas completed",
    ],

    plotSizes: "2 BHK & 3 BHK",
    totalPlots: 200,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/Sri-Krishna-Nagar-Phase-1/1.jpg",
    gallery: [
      "/assets/Sri-Krishna-Nagar-Phase-1/1.jpg",
      "/assets/Sri-Krishna-Nagar-Phase-1/2.jpg",
      "/assets/Sri-Krishna-Nagar-Phase-1/3.jpg",
      "/assets/Sri-Krishna-Nagar-Phase-1/4.jpg",
    ],

    coordinates: {
      lat: 14.154,
      lng: 75.644,
    },
  },
  {
    id: "8",
    slug: "sri-krishna-nagar-phase-2",

    name: "Sri Krishna Nagar Phase-2 (Residential Layout)",
    tagline: "Beautiful Residential Layout with Premium Amenities",

    location: "Siruguppa, Karnataka",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "Sri Krishna Nagar Phase-2 builds your sweet home in a beautiful residential layout at Siruguppa. Located on Bellary road, historically Siruguppa town is a great commercial center and most of the new extension areas are developed on the Bellary road. With the demand of customers, KBR properties developed Phase-2 for a perfectly balanced lifestyle.",

    features: [
      "30 feet Roads",
      "2 & 3 BHK Villas",
      "Open Drain",
      "Welcome Arch",
      "Green Trees Park",
      "Children Play Area",
    ],

    amenities: [
      "Electricity",
      "Water",
      "Gated Community",
      "Street Lights",
      "Premium Villa Design",
      "Landscaped Gardens",
    ],

    highlights: [
      "Beautiful residential layout",
      "Prime Bellary road location",
      "Perfectly balanced lifestyle",
    ],

    plotSizes: "2 BHK & 3 BHK",
    totalPlots: 150,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/Sri-Krishna-Nagar-Phase-2/Krishanaagr-1.jpg",
    gallery: [
      "/assets/Sri-Krishna-Nagar-Phase-2/Krishanaagr-1.jpg",
      "/assets/Sri-Krishna-Nagar-Phase-2/Krishanaagr-2.jpg",
      "/assets/Sri-Krishna-Nagar-Phase-2/Krishanaagr-3.jpg",
      "/assets/Sri-Krishna-Nagar-Phase-2/Krishanaagr-4.jpg",
    ],

    coordinates: {
      lat: 14.156,
      lng: 75.646,
    },
  },
  {
    id: "9",
    slug: "embee-city-davangere",

    name: "Embee City",
    tagline: "Premium Residential Plots at Davangere Project",

    location: "Davangere, Karnataka",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "Embee City is a premium residential plots project at Davangere. Developed adjacent to Bangalore-Mumbai high way (NH4), our space stands parallel to Karnataka Housing Board Layout with well connectivity and easy access.",

    features: [
      "30 feet Roads",
      "2 & 3 BHK Villas",
      "Open Drain",
      "Welcome Arch",
      "Green Trees Park",
      "Children Play Area",
    ],

    amenities: [
      "Electricity",
      "Water",
      "Gated Community",
      "Street Lights",
      "Premium Plot Design",
      "Landscaped Gardens",
    ],

    highlights: [
      "Adjacent to Bangalore-Mumbai Highway",
      "Near Karnataka Housing Board",
      "Well connectivity and easy access",
    ],

    plotSizes: "2 BHK & 3 BHK",
    totalPlots: 100,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/Embee-City/1.jpg",
    gallery: [
      "/assets/Embee-City/1.jpg",
      "/assets/Embee-City/2.jpg",
      "/assets/Embee-City/3.jpg",
      "/assets/Embee-City/4.jpg",
    ],

    coordinates: {
      lat: 14.460,
      lng: 75.932,
    },
  },
  {
    id: "10",
    slug: "metropolis-anjanapura",

    name: "MetroPolis",
    tagline: "Residential Apartments with Urban Chic Lifestyle",

    location: "Anjanapura Phase, Bangalore",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "MetroPolis is an ultimate reflection of the urban chic lifestyle. The project hosts exclusively designed Residential Apartments, each being an epitome of elegance and simplicity. Located at Anjanapura Phase in Bangalore, MetroPolis is inspiring in design, stirring in luxury and enveloped by verdant surroundings. It is in troupe with many famous schools, hospitals, shopping destinations, tech parks and every civic amenity required, so that you spend less time on the road and more at home.",

    features: [
      "Residential Apartments",
      "Modern Architecture",
      "Premium Design",
      "Elegant Interiors",
      "Tech Park Proximity",
      "Shopping Destinations Nearby",
    ],

    amenities: [
      "Landscape",
      "Indoor Games",
      "CCTV Cameras & Security",
      "Gymnasium",
      "Outdoor Games Play Area",
      "INTERCOM",
      "LIFT",
      "24Hr Backup Electricity",
      "Gated Community",
      "24Hr Water Supply",
    ],

    highlights: [
      "Urban chic lifestyle",
      "Verdant surroundings",
      "Near schools, hospitals, shopping",
      "Tech parks proximity",
    ],

    plotSizes: "1 BHK, 2 BHK & 3 BHK",
    totalPlots: 200,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/MetroPolis/1.jpg",
    gallery: [
      "/assets/MetroPolis/1.jpg",
      "/assets/MetroPolis/2.jpg",
      "/assets/MetroPolis/3.jpg",
      "/assets/MetroPolis/4.jpg",
    ],

    coordinates: {
      lat: 12.947,
      lng: 77.638,
    },
  },
  {
    id: "11",
    slug: "krishna-mansion-jpnagar",

    name: "Krishna Mansion",
    tagline: "Take a Pristine Home And Be Relaxed For Life",

    location: "JP Nagar 8th Phase, Bangalore",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "Krishna Mansion is designed as the perfect place of modern living. It is close to many well known locations, educational institutions, hospitals and shopping centers. Located at JP Nagar 8th Phase Bangalore, Krishna Mansion offers a pristine home experience with excellent planning and modern amenities.",

    features: [
      "Well Planned Flats with Excellent Ventilation",
      "Beautiful Elevation",
      "CCTV Cameras & Security",
      "Land scaping & Jogging Track",
      "Club House with Multipurpose Room",
      "Yoga & Meditation Room",
    ],

    amenities: [
      "Fitness Center with Equipment",
      "Children Play Area",
      "LIFT with Power Backup",
      "Ample Car Parking",
      "24Hr Water Supply",
      "24Hr Security",
    ],

    highlights: [
      "Pristine home living",
      "Close to educational & shopping centers",
      "Modern amenities and facilities",
    ],

    plotSizes: "1 BHK, 2 BHK & 3 BHK",
    totalPlots: 150,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/KRISHNA-MANSION/1.jpg",
    gallery: [
      "/assets/KRISHNA-MANSION/1.jpg",
    ],

    coordinates: {
      lat: 12.946,
      lng: 77.639,
    },
  },
  {
    id: "12",
    slug: "sungraze-samruddi-siruguppa",

    name: "SUNGRAZE Samruddi",
    tagline: "Affordable Luxury Apartments at Great Location",

    location: "Siruguppa, Karnataka",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "SUNGRAZE Samruddi offers affordable luxury apartments at a great location in Siruguppa. Designed with modern living in mind, these residential apartments provide comfort, elegance, and value for money. Perfect for families and professionals seeking quality living with excellent amenities.",

    features: [
      "Well Planned Flats with Excellent Ventilation",
      "Beautiful Elevation",
      "CCTV Cameras & Security",
      "Land scaping & Jagging Track",
      "Club House with Multipurpose Room",
      "Yoga & Meditation Room",
    ],

    amenities: [
      "Fitness Center with Equipment",
      "Children Play Area",
      "LIFT with Power Backup",
      "Ample Car Parking",
      "24Hr Water Supply",
      "24Hr Security",
    ],

    highlights: [
      "Affordable luxury apartments",
      "Great Siruguppa location",
      "Modern living amenities",
    ],

    plotSizes: "1 BHK, 2 BHK & 3 BHK",
    totalPlots: 120,

    priceRange: "Contact for Price",
    priceValue: 0,

    createdAt: "2026-04-08",
    isFeatured: false,

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/assets/SUNGRAZE-SAMRUDDI/1.jpg",
    gallery: [
      "/assets/SUNGRAZE-SAMRUDDI/1.jpg",
      "/assets/SUNGRAZE-SAMRUDDI/2.jpg",
      "/assets/SUNGRAZE-SAMRUDDI/3.jpg",
      "/assets/SUNGRAZE-SAMRUDDI/4.jpg",
    ],

    coordinates: {
      lat: 14.154,
      lng: 75.643,
    },
  },

  // {
  //   id: "2",
  //   slug: "kaveri-farms-nanjangud",

  //   name: "Kaveri Farms",
  //   tagline: "Managed Farmland Near Mysore",

  //   location: "Nanjangud, Mysore",
  //   region: "Karnataka",

  //   type: "farmland",
  //   status: "completed",

  //   description:
  //     "Kaveri Farms offers managed agricultural farmland with plantation support, fencing, irrigation, and long-term sustainable returns.",

  //   features: [
  //     "Agricultural Land Conversion",
  //     "Borewell with Motor",
  //     "Fencing & Compound",
  //     "Mango & Coconut Plantation",
  //     "Farm Management Support",
  //     "Caretaker Facility",
  //   ],

  //   amenities: [
  //     "Farm House Option",
  //     "Organic Farming Support",
  //     "Storage Facility",
  //     "Access Road",
  //   ],

  //   highlights: [
  //     "Fertile Red Soil",
  //     "Water Abundant Area",
  //     "50 km from Mysore City",
  //   ],

  //   plotSizes: "0.5 - 2 Acres",
  //   totalPlots: 50,

  //   priceRange: "₹18L - ₹65L per acre",
  //   priceValue: 1800000,

  //   createdAt: "2024-08-15",
  //   isFeatured: true,

  //   approvalType: "Agricultural",
  //   clearTitle: true,
  //   loanAvailable: false,

  //   image: "/project-farmland.jpg",
  //   gallery: [],

  //   coordinates: {
  //     lat: 12.117,
  //     lng: 76.682,
  //   },
  // },

  // {
  //   id: "3",
  //   slug: "lakshmi-enclave-hosur",

  //   name: "Lakshmi Enclave",
  //   tagline: "Affordable Villa Plots in Hosur",

  //   location: "Hosur, Tamil Nadu",
  //   region: "Tamil Nadu",

  //   type: "residential",
  //   status: "completed",

  //   description:
  //     "Lakshmi Enclave offers DTCP-approved villa plots in the fast-growing industrial hub of Hosur with excellent connectivity to Bangalore.",

  //   features: [
  //     "DTCP Approved",
  //     "Tar Roads with Street Lights",
  //     "Underground Drainage",
  //     "Electricity with Transformer",
  //     "Water Supply",
  //     "Park & Open Spaces",
  //   ],

  //   amenities: [
  //     "Entrance Arch",
  //     "Avenue Plantation",
  //     "Children's Park",
  //     "Walking Paths",
  //   ],

  //   highlights: [
  //     "15 mins from Hosur Town",
  //     "Near Industrial Zone",
  //     "High Appreciation Potential",
  //   ],

  //   plotSizes: "600 - 1500 sq.ft",
  //   totalPlots: 200,

  //   priceRange: "₹12L - ₹35L",
  //   priceValue: 1200000,

  //   createdAt: "2024-03-12",

  //   approvalType: "DTCP",
  //   clearTitle: true,
  //   loanAvailable: true,

  //   image: "/project-residential.jpg",
  //   gallery: [],

  //   coordinates: {
  //     lat: 12.740,
  //     lng: 77.825,
  //   },
  // },

  // {
  //   id: "4",
  //   slug: "chola-farms-pollachi",

  //   name: "Chola Farms",
  //   tagline: "Agricultural Investment in Pollachi",

  //   location: "Pollachi, Coimbatore",
  //   region: "Tamil Nadu",

  //   type: "farmland",
  //   status: "ongoing",

  //   description:
  //     "Chola Farms provides premium agricultural land with established coconut plantations and canal irrigation in Pollachi.",

  //   features: [
  //     "Established Coconut Grove",
  //     "Canal Water Irrigation",
  //     "Compound Wall",
  //     "Approach Road",
  //     "Agricultural Conversion Done",
  //     "Regular Maintenance",
  //   ],

  //   amenities: [
  //     "Coconut Processing Support",
  //     "Cold Storage Access",
  //     "Agricultural Guidance",
  //   ],

  //   highlights: [
  //     "High Yield Area",
  //     "Tourism Potential",
  //     "Established Plantation",
  //   ],

  //   plotSizes: "1 - 5 Acres",
  //   totalPlots: 30,

  //   priceRange: "₹25L - ₹1.2Cr per acre",
  //   priceValue: 2500000,

  //   createdAt: "2025-02-01",

  //   approvalType: "Agricultural",
  //   clearTitle: true,
  //   loanAvailable: false,

  //   image: "/project-farmland.jpg",
  //   gallery: [],

  //   coordinates: {
  //     lat: 10.658,
  //     lng: 77.008,
  //   },
  // },

  // {
  //   id: "5",
  //   slug: "sunrise-meadows-electronic-city",

  //   name: "Sunrise Meadows",
  //   tagline: "Upcoming Premium Plots in Electronic City",

  //   location: "Electronic City Phase 2, Bangalore",
  //   region: "Karnataka",

  //   type: "residential",
  //   status: "upcoming",

  //   description:
  //     "Sunrise Meadows is an upcoming premium gated community layout in Electronic City with strong growth potential.",

  //   features: [
  //     "Under Approval",
  //     "Gated Community",
  //     "Modern Infrastructure",
  //     "Premium Location",
  //     "Flexible Payment Plans",
  //   ],

  //   amenities: [
  //     "Swimming Pool",
  //     "Gymnasium",
  //     "Tennis Court",
  //     "Mini Theatre",
  //   ],

  //   highlights: [
  //     "IT Hub Location",
  //     "Metro Connectivity Expected",
  //     "High Growth Corridor",
  //   ],

  //   plotSizes: "1000 - 3000 sq.ft",
  //   totalPlots: 150,

  //   priceRange: "Starting ₹45L",
  //   priceValue: 4500000,

  //   createdAt: "2025-03-05",

  //   approvalType: "Under Approval",
  //   clearTitle: false,
  //   loanAvailable: false,

  //   image: "/project-residential.jpg",
  //   gallery: [],

  //   coordinates: {
  //     lat: 12.839,
  //     lng: 77.677,
  //   },
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
