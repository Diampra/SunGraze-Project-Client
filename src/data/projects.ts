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
    slug: "sungraze-greens-devanahalli",

    name: "Sungraze Greens",
    tagline: "Premium Residential Plots in Devanahalli",

    location: "Devanahalli, Bangalore",
    region: "Karnataka",

    type: "residential",
    status: "ongoing",

    description:
      "Sungraze Greens offers premium BMRDA-approved residential plots in the rapidly growing Devanahalli corridor near Kempegowda International Airport.",

    features: [
      "BMRDA Approved Layout",
      "Clear Title Documents",
      "24/7 Security",
      "Underground Electricity",
      "Wide Asphalted Roads",
      "Rainwater Harvesting",
    ],

    amenities: [
      "Clubhouse",
      "Children's Play Area",
      "Jogging Track",
      "Landscaped Gardens",
      "Community Hall",
    ],

    highlights: [
      "5 km from International Airport",
      "Near IT Parks",
      "Schools & Hospitals Nearby",
    ],

    plotSizes: "1200 - 2400 sq.ft",
    totalPlots: 120,

    priceRange: "₹35L - ₹72L",
    priceValue: 3500000,

    createdAt: "2025-01-10",
    isFeatured: true,

    approvalType: "BMRDA",
    clearTitle: true,
    loanAvailable: true,

    image: "/project-residential.jpg",
    gallery: [],

    coordinates: {
      lat: 13.247,
      lng: 77.711,
    },
  },

  {
    id: "2",
    slug: "kaveri-farms-nanjangud",

    name: "Kaveri Farms",
    tagline: "Managed Farmland Near Mysore",

    location: "Nanjangud, Mysore",
    region: "Karnataka",

    type: "farmland",
    status: "completed",

    description:
      "Kaveri Farms offers managed agricultural farmland with plantation support, fencing, irrigation, and long-term sustainable returns.",

    features: [
      "Agricultural Land Conversion",
      "Borewell with Motor",
      "Fencing & Compound",
      "Mango & Coconut Plantation",
      "Farm Management Support",
      "Caretaker Facility",
    ],

    amenities: [
      "Farm House Option",
      "Organic Farming Support",
      "Storage Facility",
      "Access Road",
    ],

    highlights: [
      "Fertile Red Soil",
      "Water Abundant Area",
      "50 km from Mysore City",
    ],

    plotSizes: "0.5 - 2 Acres",
    totalPlots: 50,

    priceRange: "₹18L - ₹65L per acre",
    priceValue: 1800000,

    createdAt: "2024-08-15",
    isFeatured: true,

    approvalType: "Agricultural",
    clearTitle: true,
    loanAvailable: false,

    image: "/project-farmland.jpg",
    gallery: [],

    coordinates: {
      lat: 12.117,
      lng: 76.682,
    },
  },

  {
    id: "3",
    slug: "lakshmi-enclave-hosur",

    name: "Lakshmi Enclave",
    tagline: "Affordable Villa Plots in Hosur",

    location: "Hosur, Tamil Nadu",
    region: "Tamil Nadu",

    type: "residential",
    status: "completed",

    description:
      "Lakshmi Enclave offers DTCP-approved villa plots in the fast-growing industrial hub of Hosur with excellent connectivity to Bangalore.",

    features: [
      "DTCP Approved",
      "Tar Roads with Street Lights",
      "Underground Drainage",
      "Electricity with Transformer",
      "Water Supply",
      "Park & Open Spaces",
    ],

    amenities: [
      "Entrance Arch",
      "Avenue Plantation",
      "Children's Park",
      "Walking Paths",
    ],

    highlights: [
      "15 mins from Hosur Town",
      "Near Industrial Zone",
      "High Appreciation Potential",
    ],

    plotSizes: "600 - 1500 sq.ft",
    totalPlots: 200,

    priceRange: "₹12L - ₹35L",
    priceValue: 1200000,

    createdAt: "2024-03-12",

    approvalType: "DTCP",
    clearTitle: true,
    loanAvailable: true,

    image: "/project-residential.jpg",
    gallery: [],

    coordinates: {
      lat: 12.740,
      lng: 77.825,
    },
  },

  {
    id: "4",
    slug: "chola-farms-pollachi",

    name: "Chola Farms",
    tagline: "Agricultural Investment in Pollachi",

    location: "Pollachi, Coimbatore",
    region: "Tamil Nadu",

    type: "farmland",
    status: "ongoing",

    description:
      "Chola Farms provides premium agricultural land with established coconut plantations and canal irrigation in Pollachi.",

    features: [
      "Established Coconut Grove",
      "Canal Water Irrigation",
      "Compound Wall",
      "Approach Road",
      "Agricultural Conversion Done",
      "Regular Maintenance",
    ],

    amenities: [
      "Coconut Processing Support",
      "Cold Storage Access",
      "Agricultural Guidance",
    ],

    highlights: [
      "High Yield Area",
      "Tourism Potential",
      "Established Plantation",
    ],

    plotSizes: "1 - 5 Acres",
    totalPlots: 30,

    priceRange: "₹25L - ₹1.2Cr per acre",
    priceValue: 2500000,

    createdAt: "2025-02-01",

    approvalType: "Agricultural",
    clearTitle: true,
    loanAvailable: false,

    image: "/project-farmland.jpg",
    gallery: [],

    coordinates: {
      lat: 10.658,
      lng: 77.008,
    },
  },

  {
    id: "5",
    slug: "sunrise-meadows-electronic-city",

    name: "Sunrise Meadows",
    tagline: "Upcoming Premium Plots in Electronic City",

    location: "Electronic City Phase 2, Bangalore",
    region: "Karnataka",

    type: "residential",
    status: "upcoming",

    description:
      "Sunrise Meadows is an upcoming premium gated community layout in Electronic City with strong growth potential.",

    features: [
      "Under Approval",
      "Gated Community",
      "Modern Infrastructure",
      "Premium Location",
      "Flexible Payment Plans",
    ],

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Tennis Court",
      "Mini Theatre",
    ],

    highlights: [
      "IT Hub Location",
      "Metro Connectivity Expected",
      "High Growth Corridor",
    ],

    plotSizes: "1000 - 3000 sq.ft",
    totalPlots: 150,

    priceRange: "Starting ₹45L",
    priceValue: 4500000,

    createdAt: "2025-03-05",

    approvalType: "Under Approval",
    clearTitle: false,
    loanAvailable: false,

    image: "/project-residential.jpg",
    gallery: [],

    coordinates: {
      lat: 12.839,
      lng: 77.677,
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
