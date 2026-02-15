import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  ArrowRight,
  Filter,
  CheckCircle,
  SlidersHorizontal,
} from "lucide-react";
import { projects, ProjectType, ProjectStatus } from "@/data/projects";

const statusColors = {
  completed: "bg-green-100 text-green-800 border-green-200",
  ongoing: "bg-amber-100 text-amber-800 border-amber-200",
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
};

const typeLabels = {
  residential: "Residential",
  farmland: "Farmland",
};

type SortOption = "latest" | "price_low" | "price_high";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [typeFilter, setTypeFilter] = useState<ProjectType | "all">(
    (searchParams.get("type") as ProjectType) || "all"
  );

  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">(
    (searchParams.get("status") as ProjectStatus) || "all"
  );

  const [regionFilter, setRegionFilter] = useState<string>(
    searchParams.get("region") || "all"
  );

  const [sortBy, setSortBy] = useState<SortOption>("latest");

  const regions = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.region)));
    return unique;
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesType = typeFilter === "all" || project.type === typeFilter;
      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;
      const matchesRegion =
        regionFilter === "all" || project.region === regionFilter;

      return matchesType && matchesStatus && matchesRegion;
    });

    if (sortBy === "price_low") {
      filtered.sort((a, b) => a.priceValue - b.priceValue);
    }

    if (sortBy === "price_high") {
      filtered.sort((a, b) => b.priceValue - a.priceValue);
    }

    return filtered;
  }, [typeFilter, statusFilter, regionFilter, sortBy]);

  const dynamicTitle =
    typeFilter !== "all"
      ? `${typeLabels[typeFilter]} Projects in ${regionFilter !== "all" ? regionFilter : "Karnataka & Tamil Nadu"} | Sungraze`
      : "Residential & Farmland Projects in Karnataka & Tamil Nadu | Sungraze";


  return (
    <Layout>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta
          name="description"
          content="Explore premium residential and managed farmland projects across Karnataka and Tamil Nadu. Clear titles, legal approvals, and high-growth investment opportunities."
        />
        <meta property="og:title" content={dynamicTitle} />
        <meta property="og:description" content="Premium residential and farmland projects by Sungraze." />
        <meta property="og:type" content="website" />

      </Helmet>

      {/* HERO */}
      <section className="pt-32 pb-20 text-primary-foreground bg-primary">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Premium <span className="text-gold">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto my-8 rounded-full" />
          <p className="bg-primary text-lg">
            Discover legally approved residential layouts and managed farmland
            projects designed for appreciation, lifestyle, and long-term
            growth.
          </p>
        </div>
      </section>

      {/* TRUST SECTION */}
      {/* <section className="py-16 bg-muted/20">
        <div className="container grid md:grid-cols-4 gap-8 text-center">
          {[
            "BMRDA / DTCP Approved",
            "Clear Title & Documentation",
            "Loan Assistance Available",
            "1000+ Happy Customers",
          ].map((item) => (
            <div key={item} className="flex flex-col items-center gap-3">
              <CheckCircle className="text-primary w-8 h-8" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* FILTERS */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Filter className="w-5 h-5 text-muted-foreground" />

            {/* TYPE */}
            {(["all", "residential", "farmland"] as const).map((type) => (
              <Button
                key={type}
                size="sm"
                variant={typeFilter === type ? "default" : "outline"}
                onClick={() => setTypeFilter(type)}
              >
                {type === "all" ? "All Types" : typeLabels[type]}
              </Button>
            ))}

            {/* REGION */}
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value="all">All Regions</option>
              {regions.map((region) => (
                <option key={region}>{region}</option>
              ))}
            </select>

            {/* STATUS */}
            {(["all", "ongoing", "completed", "upcoming"] as const).map(
              (status) => (
                <Button
                  key={status}
                  size="sm"
                  variant={statusFilter === status ? "default" : "outline"}
                  onClick={() => setStatusFilter(status)}
                >
                  {status === "all"
                    ? "All Status"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              )
            )}

            {/* SORT */}
            <div className="ml-auto flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as SortOption)
                }
                className="border rounded-md px-3 py-1 text-sm"
              >
                <option value="latest">Latest</option>
                <option value="price_low">Price Low → High</option>
                <option value="price_high">Price High → Low</option>
              </select>
            </div>
          </div>

          {/* RESULTS */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredProjects.length} Projects
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition"
              >
                <div className="relative h-60">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={statusColors[project.status]}>
                      {project.status}
                    </Badge>
                    <Badge>{typeLabels[project.type]}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>

                  {/* AMENITIES */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.amenities.slice(0, 3).map((a: string) => (
                      <Badge key={a} variant="secondary">
                        {a}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">
                      {project.priceRange}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-primary">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* STATS BAR */}
      <section className="py-12 bg-primary border-y">
        <div className="container grid md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold text-gold">25+</h3>
            <p className="text-primary-foreground/70">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">500+ Acres</h3>
            <p className="text-primary-foreground/70">Land Developed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">10+ Years</h3>
            <p className="text-primary-foreground/70">Industry Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">1000+</h3>
            <p className="text-primary-foreground/70">Customers</p>
          </div>
        </div>
      </section>
      {/* INVESTMENT PROCESS */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">
            Simple 5-Step Investment Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-sm">
            {[
              "Select Project",
              "Schedule Site Visit",
              "Booking Confirmation",
              "Legal Documentation",
              "Registration & Handover",
            ].map((step, i) => (
              <div key={step}>
                <div className="text-primary font-bold text-lg mb-2">
                  {i + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Invest in Your Future?
          </h2>
          <p className="text-muted-foreground mb-8">
            Connect with our team and schedule a free consultation or site
            visit today.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
