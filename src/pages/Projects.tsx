import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Filter,
  CheckCircle,
  SlidersHorizontal,
  Phone,
  Grid,
  Layers,
  Sprout,
  Droplet,
  ShieldCheck,
  Home,
  Sparkles,
  Zap,
  Award,
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

const velocityBadgeCopy: Record<ProjectStatus, string> = {
  completed: "Phase 1 Fully Allocated",
  ongoing: "14 Site Visits Scheduled This Week",
  upcoming: "Priority Launch Interest",
};

const amenityMeta = [
  {
    test: /club house/i,
    icon: Home,
    label: "Club House",
    hint: "Private lifestyle spaces managed to keep your community and events effortless, while daily operations stay in expert hands.",
  },
  {
    test: /naturopathy/i,
    icon: Sparkles,
    label: "Naturopathy Center",
    hint: "Automated care systems and specialist wellness staff keep the retreat refreshed so you never inherit maintenance headaches.",
  },
  {
    test: /managed assets|managed farmland|organic/i,
    icon: Sprout,
    label: "Managed Assets",
    hint: "Our on-site agronomy team handles irrigation, soil health and harvest cycles for worry-free rural investment.",
  },
  {
    test: /water|electricity/i,
    icon: Droplet,
    label: "Water & Electricity",
    hint: "Reliable utilities plus automated irrigation mean your asset is protected from seasonal uncertainty.",
  },
  {
    test: /security|gated/i,
    icon: ShieldCheck,
    label: "Security",
    hint: "Gated communities with expert monitoring keep your property safe and your investment legacy intact.",
  },
  {
    test: /approved|dtcp|bmrd/i,
    icon: Award,
    label: "Verified Approval",
    hint: "Clear approvals and legal oversight reduce transaction friction and reinforce trust at every step.",
  },
  {
    test: /spa|spiritual|retreat/i,
    icon: Sparkles,
    label: "Wellness Retreat",
    hint: "Lifestyle amenities are crafted to make the property feel restorative without adding upkeep stress.",
  },
  {
    test: /gym|fitness/i,
    icon: Zap,
    label: "Fitness",
    hint: "Active amenities are maintained for you, so health and lifestyle upgrades feel seamless.",
  },
];

const getAmenityMeta = (amenity: string) => {
  const entry = amenityMeta.find((item) => item.test.test(amenity));
  return entry ?? {
    icon: Sparkles,
    label: amenity,
    hint: "Expert property management removes the typical upkeep concerns tied to your investment.",
  };
};

const AmenitySwatch = ({
  amenity,
  meta,
}: {
  amenity: string;
  meta: { icon: any; label: string; hint: string };
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = meta.icon;

  return (
    <div className="relative">
      <motion.button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -1 }}
        className="group flex w-full items-center gap-2 rounded-full border border-[#d8e2dd] bg-[#fbfcfb] px-2.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1f2c24] transition duration-300 hover:-translate-y-0.5 hover:border-[#afc1ba] hover:bg-white"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#071c13] text-[#f4dd9d] ring-1 ring-white/10 transition duration-300 group-hover:bg-[#062214]">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="truncate">{meta.label}</span>
      </motion.button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-full z-[99] mt-2 w-64 rounded-2xl border border-[#0b2a1a]/20 bg-[#02140d]/95 p-3 text-[11px] leading-snug text-white font-medium shadow-2xl shadow-emerald-950/30 backdrop-blur-xl"
          >
            {meta.hint}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
      <section className="relative min-h-[60vh] flex items-center justify-center pt-48 overflow-hidden">
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
          <div className="flex flex-col gap-6 mb-16">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight mb-3 italic">Our <span className="text-primary not-italic font-serif lowercase tracking-normal">Projects</span></h2>
              <p className="text-muted-foreground font-light text-base">Showing {filteredProjects.length} curated opportunities.</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 p-5 bg-secondary/10 rounded-[1.5rem] border border-border/50">
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

              <div className="flex items-center gap-2">
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
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group relative flex h-full flex-col overflow-visible rounded-[30px] border border-[#dfe6e2] bg-[#fffdfa] shadow-[0_26px_80px_-36px_rgba(4,26,18,0.56)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_-30px_rgba(4,26,18,0.62)]"
                >
                  <div className="px-3 pt-3">
                    <div className="relative overflow-hidden rounded-[26px] border border-[#e6ece8] bg-[#f7faf8]">
                      <Link to={`/projects/${project.slug}`} className="block aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          alt={project.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02160f]/88 via-[#031b11]/20 to-transparent" />

                        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] ${statusColors[project.status]} backdrop-blur-md`}>
                              {project.status}
                            </span>
                            <span className="rounded-full bg-slate-950/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                              {typeLabels[project.type]}
                            </span>
                          </div>

                          <div className="rounded-full border border-white/20 bg-white/12 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                            {project.isFeatured ? "Featured" : velocityBadgeCopy[project.status]}
                          </div>
                        </div>

                        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
                          <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur-md">
                            <p className="text-[9px] uppercase tracking-[0.24em] text-white/70">Investment</p>
                            <p className="mt-1 text-sm font-semibold text-white">{project.plotSizes}</p>
                          </div>

                          <div className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#092317]">
                            Discover
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#6b746f]">Premium portfolio</p>
                        <span className="rounded-full bg-[#f1f5f3] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#26513d]">
                          {project.region}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[#07160f]">
                          {project.name}
                        </h3>
                        <p className="flex items-center gap-2 text-[12px] text-[#66706c]">
                          <MapPin className="h-3.5 w-3.5 text-[#0f5b40]" />
                          {project.location}
                        </p>
                      </div>

                      <p className="text-sm leading-6 text-[#55615d]">
                        {project.description.length > 120 ? `${project.description.slice(0, 120)}...` : project.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f5f4] px-2.5 py-1.5 text-[10px] font-semibold text-[#355145]">
                        <Layers className="h-3.5 w-3.5 text-[#0d5d42]" />
                        {project.plotSizes}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f5f4] px-2.5 py-1.5 text-[10px] font-semibold text-[#355145]">
                        <Grid className="h-3.5 w-3.5 text-[#0d5d42]" />
                        {project.totalPlots} plots
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {project.amenities.slice(0, 4).map((a: string) => {
                        const meta = getAmenityMeta(a);
                        return <AmenitySwatch key={a} amenity={a} meta={meta} />;
                      })}
                    </div>

                    <div className="mt-5 border-t border-[#e2e8e4] pt-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6d766f]">
                            Concierge access
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-[#5d655f]">
                            Private tours, verified approvals, and guided investment support.
                          </p>
                        </div>
                        <span className="rounded-full bg-[#0a241b] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                          Ready
                        </span>
                      </div>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#071e15] px-4 py-3 text-sm font-bold text-white shadow-[0_16px_38px_-20px_rgba(4,15,11,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#032018]"
                      >
                        Secure Private Tour & Legal Kit
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
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
