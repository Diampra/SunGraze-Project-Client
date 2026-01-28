export type ProjectStatus = "completed" | "ongoing" | "upcoming";
export type ProjectType = "residential" | "farmland";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  location: string;
  region: "Karnataka" | "Tamil Nadu";
  type: ProjectType;
  status: ProjectStatus;
  description: string;
  features: string[];
  plotSizes: string;
  totalPlots: number;
  priceRange: string;
  image: string;
  gallery: string[];
  legalInfo: string;
  amenities: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "sungraze-greens",
    name: "Sungraze Greens",
    tagline: "Premium Residential Plots in Devanahalli",
    location: "Devanahalli, Bangalore",
    region: "Karnataka",
    type: "residential",
    status: "ongoing",
    description: "Nestled in the rapidly developing Devanahalli corridor, Sungraze Greens offers premium residential plots with excellent connectivity to Kempegowda International Airport. Perfect for building your dream home in a serene yet well-connected environment.",
    features: [
      "BMRDA Approved Layout",
      "Clear Title Documents",
      "24/7 Security",
      "Underground Electricity",
      "Wide Asphalted Roads",
      "Rainwater Harvesting",
    ],
    plotSizes: "1200 - 2400 sq.ft",
    totalPlots: 120,
    priceRange: "₹35L - ₹72L",
    image: "/project-residential.jpg",
    gallery: [],
    legalInfo: "BMRDA Approved, Clear Title, Encumbrance Certificate Available",
    amenities: ["Clubhouse", "Children's Play Area", "Jogging Track", "Landscaped Gardens", "Community Hall"],
    highlights: ["5 km from International Airport", "Near IT Parks", "Schools & Hospitals Nearby"],
  },
  {
    id: "kaveri-farms",
    name: "Kaveri Farms",
    tagline: "Managed Farmland Near Mysore",
    location: "Nanjangud, Mysore",
    region: "Karnataka",
    type: "farmland",
    status: "completed",
    description: "Experience the joy of owning your own farmland with Kaveri Farms. Located in the fertile lands near Mysore, this project offers managed farmland with full agricultural support. Ideal for those seeking a peaceful retreat or agricultural investment.",
    features: [
      "Agriculture Land Conversion",
      "Bore Well with Motor",
      "Fencing & Compound",
      "Mango & Coconut Plantation",
      "Farm Management Support",
      "Caretaker Facility",
    ],
    plotSizes: "0.5 - 2 Acres",
    totalPlots: 50,
    priceRange: "₹18L - ₹65L per acre",
    image: "/project-farmland.jpg",
    gallery: [],
    legalInfo: "Clear Agricultural Land Title, Survey Documents Available",
    amenities: ["Farm House Option", "Organic Farming Support", "Storage Facility", "Access Road"],
    highlights: ["Fertile Red Soil", "Water Abundant Area", "50 km from Mysore City"],
  },
  {
    id: "lakshmi-enclave",
    name: "Lakshmi Enclave",
    tagline: "Affordable Villa Plots in Hosur",
    location: "Hosur, Tamil Nadu",
    region: "Tamil Nadu",
    type: "residential",
    status: "completed",
    description: "Lakshmi Enclave brings affordable residential plots in the thriving industrial hub of Hosur. With excellent road connectivity to Bangalore and growing infrastructure, this is an ideal investment for young professionals and families.",
    features: [
      "DTCP Approved",
      "Tar Roads with Street Lights",
      "Underground Drainage",
      "Electricity with Transformer",
      "Water Supply",
      "Park & Open Spaces",
    ],
    plotSizes: "600 - 1500 sq.ft",
    totalPlots: 200,
    priceRange: "₹12L - ₹35L",
    image: "/project-residential.jpg",
    gallery: [],
    legalInfo: "DTCP Approved Layout, Patta Available",
    amenities: ["Entrance Arch", "Avenue Plantation", "Children's Park", "Walking Paths"],
    highlights: ["15 mins from Hosur Town", "Near Industrial Zone", "Growing Appreciation"],
  },
  {
    id: "chola-farms",
    name: "Chola Farms",
    tagline: "Agricultural Investment in Coimbatore",
    location: "Pollachi, Coimbatore",
    region: "Tamil Nadu",
    type: "farmland",
    status: "ongoing",
    description: "Chola Farms presents an exceptional opportunity to own farmland in the agriculturally rich Pollachi region. With established coconut plantations and excellent water resources, this project promises sustainable returns.",
    features: [
      "Established Coconut Grove",
      "Canal Water Irrigation",
      "Compound Wall",
      "Approach Road",
      "Agricultural Conversion Done",
      "Regular Maintenance",
    ],
    plotSizes: "1 - 5 Acres",
    totalPlots: 30,
    priceRange: "₹25L - ₹1.2Cr per acre",
    image: "/project-farmland.jpg",
    gallery: [],
    legalInfo: "Patta Land, Clear Title, EC Available",
    amenities: ["Coconut Processing Support", "Cold Storage Access", "Agricultural Guidance"],
    highlights: ["Established Plantation", "High Yield Area", "Tourism Potential"],
  },
  {
    id: "sunrise-meadows",
    name: "Sunrise Meadows",
    tagline: "Upcoming Premium Plots in Electronic City",
    location: "Electronic City Phase 2, Bangalore",
    region: "Karnataka",
    type: "residential",
    status: "upcoming",
    description: "Coming soon - Sunrise Meadows will offer premium residential plots in one of Bangalore's most sought-after IT corridors. Register your interest for early-bird benefits and exclusive pricing.",
    features: [
      "Expected BMRDA Approval",
      "Gated Community",
      "Modern Amenities",
      "Premium Location",
      "Investment Grade",
      "Flexible Payment Plans",
    ],
    plotSizes: "1000 - 3000 sq.ft",
    totalPlots: 150,
    priceRange: "Starting ₹45L",
    image: "/project-residential.jpg",
    gallery: [],
    legalInfo: "Approval Process Underway",
    amenities: ["Swimming Pool", "Gymnasium", "Tennis Court", "Mini Theatre"],
    highlights: ["IT Hub Location", "Metro Connectivity Expected", "High Growth Corridor"],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.type === type);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}

export function getProjectsByRegion(region: "Karnataka" | "Tamil Nadu"): Project[] {
  return projects.filter((p) => p.region === region);
}
