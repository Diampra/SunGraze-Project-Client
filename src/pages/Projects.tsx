import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge as UIBadge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Filter,
  CheckCircle,
  SlidersHorizontal,
  Maximize2,
  Phone,
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
    let filtered = [...projects].filter((project) => {
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

  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

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

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/farmland-3.jpg"
            alt="Managed Assets Hero"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 text-center mb-10">
          <motion.div className="max-w-4xl mx-auto" {...animations.fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold text-primary-foreground text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-xl">
              Curated Real Estate Portfolio
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 tracking-tighter drop-shadow-2xl">
              Future-Ready <span className="text-gold italic font-serif">Living</span> & Managed Assets
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Explore our portfolio of BMRDA & DTCP approved residential layouts
              and organic managed farmlands strategically located for appreciation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="rounded-full px-10 shadow-gold/20 h-14 font-bold" asChild>
                <Link to="/contact">Book a Site Visit</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/10 px-10 h-14" asChild>
                <a href="#results">Discovery Projects</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS & SHOWCASE */}
      <section id="results" className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight mb-3 italic">Our <span className="text-primary not-italic font-serif lowercase tracking-normal">Projects</span></h2>
              <p className="text-muted-foreground font-light text-base">Showing {filteredProjects.length} curated opportunities.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-secondary/30 p-1.5 rounded-2xl backdrop-blur-sm border border-border">
              <Filter className="w-4 h-4 text-muted-foreground mx-2" />
              {(["all", "residential", "farmland"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 relative ${typeFilter === type ? "text-white" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {type === "all" ? "All" : typeLabels[type]}
                  {typeFilter === type && (
                    <motion.div layoutId="activeType" className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-lg shadow-primary/20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-10 p-5 bg-secondary/10 rounded-[1.5rem] border border-border/50">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                <option value="all">Regions (All)</option>
                {regions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as ProjectStatus | "all")}
                className="bg-transparent border-none focus:ring-0 text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                <option value="all">Status (All)</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>

            <div className="lg:ml-auto flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent border-none focus:ring-0 text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                <option value="latest">Sort: Latest</option>
                <option value="price_low">Price: Low-High</option>
                <option value="price_high">Price: High-Low</option>
              </select>
            </div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx % 6 * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden border border-border group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative"
                >
                  <Link to={`/projects/${project.slug}`} className="block relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={project.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                        <Maximize2 className="text-primary w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute top-5 left-5 flex flex-col gap-2">
                      <UIBadge className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.1em] uppercase ${statusColors[project.status]}`}>
                        {project.status}
                      </UIBadge>
                      <UIBadge className="px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.1em] uppercase bg-black/40 backdrop-blur-md text-white border-none">
                        {typeLabels[project.type]}
                      </UIBadge>
                    </div>
                  </Link>

                  <div className="p-7">
                    <h3 className="text-xl font-heading font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-5 text-xs font-medium">
                      <MapPin className="w-3 h-3 text-primary" />
                      {project.location}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.amenities.slice(0, 3).map((a: string) => (
                        <span key={a} className="px-3 py-0.5 bg-secondary/30 rounded-full text-[9px] font-bold text-muted-foreground tracking-wider uppercase">
                          {a}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-5 border-t border-border/60">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Starting From</p>
                        <span className="text-xl font-bold font-heading text-primary">
                          {project.priceRange}
                        </span>
                      </div>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatItem value="25+" label="Projects Delivered" />
            <StatItem value="500+" label="Acres Developed" />
            <StatItem value="10+" label="Years Industry Exp." />
            <StatItem value="1000+" label="Happy Customers" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="container">
          <div className="bg-secondary/30 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group border border-border">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic tracking-tighter leading-none">Ready to Build Your <span className="text-primary font-serif not-italic">Legacy</span>?</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                Connecting you with verified investment opportunities. Connect with our advisors today or schedule a visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" className="px-12 rounded-full h-14 shadow-2xl shadow-primary/10 text-base font-bold" asChild>
                  <Link to="/contact">Schedule Site Visit</Link>
                </Button>
                <Button variant="outline" size="xl" className="px-12 rounded-full h-14 border-primary/30 text-base bg-white/5 backdrop-blur-md" asChild>
                  <a href="tel:+918141444144" className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" /> Call Advisor
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Badge = ({ text }: { text: string }) => (
  <span className="inline-block px-5 py-1.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-inner shadow-gold/20">
    {text}
  </span>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center group cursor-default">
    <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2 group-hover:scale-105 transition-transform duration-700 tracking-tighter drop-shadow-sm">{value}</div>
    <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground font-bold opacity-70 leading-relaxed max-w-[130px] mx-auto">{label}</div>
  </div>
);

export default Projects;
