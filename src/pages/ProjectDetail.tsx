import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Phone,
  ChevronRight,
  X,
  Sparkles,
  Award
} from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { getProjectBySlug, projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  if (!project) return <Navigate to="/projects" replace />;

  const relatedProjects = projects
    .filter((p) => p.type === project.type && p.slug !== project.slug)
    .slice(0, 3);

  // Dynamically generate sections from related projects or featured developments
  const featuredDevelopmentSections = relatedProjects.slice(0, 2).map((p) => ({
    slug: p.slug,
    title: p.name,
    subtitle: p.tagline,
    image: p.image,
    tabs: [
      {
        key: "overview",
        label: "Overview",
        content: p.description.slice(0, 200) + "...",
      },
      {
        key: "location",
        label: "Location",
        content: `Located at ${p.location} in ${p.region}. This project offers excellent connectivity and modern amenities for your needs.`,
      },
      {
        key: "amenities",
        label: "Amenities",
        content: p.amenities.slice(0, 5).join(", ") + (p.amenities.length > 5 ? ", and more." : "."),
      },
    ],
  }));

  const farmlandSections = [...featuredDevelopmentSections];
  const residentialSections = [...featuredDevelopmentSections];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: project.name,
    description: project.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressRegion: project.region,
      addressCountry: "India",
    },
    offers: {
      "@type": "Offer",
      price: project.priceValue,
      priceCurrency: "INR",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{project.name} in {project.location} | Sungraze Projects</title>
        <meta name="description" content={`${project.tagline}. ${project.description.slice(0, 155)}`} />
        <link rel="canonical" href={`/projects/${project.slug}`} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden trv-banner-1-wrap bg-primary">
        <div className="trv-banner-1-rain-effect">
          <div className="absolute left-0 size-full z-2 rain front-row"></div>
          <div className="absolute left-0 size-full z-2 rain back-row"></div>
        </div>

        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="absolute inset-0 flex items-center pt-24">
          <div className="container relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 mb-6 font-display text-accent">
                <MapPin size={16} />
                <span className="text-sm uppercase tracking-widest font-bold">{project.region}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display text-white leading-[1.1] mb-6 tracking-tight">
                {project.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <div className="relative z-20 -mt-16 md:-mt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] md:rounded-[4rem] p-6 md:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
              {[
                { label: "Location", value: project.location },
                { label: "Total Plots", value: project.totalPlots },
                { label: "Approval", value: project.approvalType },
                { label: "Starting Price", value: project.priceRange, highlight: true },
              ].map((stat) => (
                <div key={stat.label} className="md:px-8 text-center first:pl-0 border-none lg:border-solid">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 mb-3 font-bold">
                    {stat.label}
                  </p>
                  <p className={`text-base md:text-xl font-heading font-bold ${stat.highlight ? "text-accent" : "text-white"}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <section className="pt-16 pb-24 bg-[#FFF9F0] text-primary relative overflow-hidden">
        {/* Background Textures & Doodles */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/background/dark-dott-pattern.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/background/patern.png')] opacity-[0.02] pointer-events-none" />
        
        {/* Decorative Nature Assets */}
        <div className="absolute -top-10 left-0 w-96 opacity-[0.03] pointer-events-none rotate-12">
          <img src="/assets/images/background/Righttreepic.png" alt="" className="w-full" />
        </div>
        <div className="absolute top-1/2 -right-40 w-[600px] opacity-[0.02] pointer-events-none -translate-y-1/2">
          <img src="/assets/images/background/Cloud-bg.png" alt="" className="w-full invert" />
        </div>

        {/* Floating Farmland Doodles */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-48 opacity-[0.05] pointer-events-none z-0"
        >
          <img src="/assets/images/farmland-doodles.png" alt="" className="w-full" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-10 w-64 opacity-[0.05] pointer-events-none z-0 rotate-12"
        >
          <img src="/assets/images/farmland-doodles.png" alt="" className="w-full" />
        </motion.div>

        {/* Multi-layered Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

        <div className="container grid lg:grid-cols-3 gap-16 relative z-10">
          <div className="lg:col-span-2 space-y-20">
            {/* About */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">About the Project</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold leading-tight">
                Numbers That <span className="text-accent italic font-serif">Transform</span>
              </h2>
              <div className="mb-4">
                <img src="/assets/images/background/Title-Separator.png" alt="" className="w-48 opacity-40 ml-0 invert" />
              </div>
              <p className="text-primary/70 leading-relaxed text-lg font-light max-w-3xl">{project.description}</p>
            </motion.div>

            {/* Experience Cards */}
            {(project.type === "farmland" || project.type === "residential") && (
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Curated Selection</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    Featured <span className="text-accent italic font-serif">Developments</span>
                  </h2>
                  <div className="mt-2">
                    <img src="/assets/images/background/Title-Separator.png" alt="" className="w-48 opacity-40 invert" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {(project.type === "farmland" ? farmlandSections : residentialSections).map((section, i) => (
                    <motion.div
                      key={section.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-primary/10 shadow-md"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2">{section.subtitle}</p>
                        <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                        <button
                          onClick={() => {
                            setActiveSection(section.slug);
                            setActiveTab(section.tabs[0].key);
                            setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
                          }}
                          className="self-start group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:border-accent hover:bg-accent hover:text-primary px-6 py-3 rounded-full transition-all duration-300"
                        >
                          Explore <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* EXPANDABLE DETAILS & VISUAL JOURNEY RIGHT BELOW */}
                <AnimatePresence>
                  {activeSection && (() => {
                    const activeProject = projects.find(p => p.slug === activeSection);
                    if (!activeProject) return null;

                    return (
                      <motion.div
                        ref={detailsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-primary/10 shadow-xl space-y-8 overflow-hidden"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                              {activeProject.type === "farmland" ? "Managed Farmland" : "Residential Layout"}
                            </span>
                            <h3 className="text-3xl font-bold text-primary font-heading mt-1">
                              {activeProject.name}
                            </h3>
                            <p className="text-sm text-primary/60 mt-1 font-light italic">
                              {activeProject.tagline}
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveSection(null)}
                            className="p-2 bg-primary/5 hover:bg-primary/10 rounded-full text-primary transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex gap-4 border-b border-primary/5 pb-2">
                          {["overview", "location", "amenities"].map((tabKey) => (
                            <button
                              key={tabKey}
                              onClick={() => setActiveTab(tabKey)}
                              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all relative ${
                                activeTab === tabKey ? "text-primary" : "text-primary/40 hover:text-primary/70"
                              }`}
                            >
                              {tabKey}
                              {activeTab === tabKey && (
                                <motion.div
                                  layoutId="activeTabUnderline"
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                />
                              )}
                            </button>
                          ))}
                        </div>

                        {/* Tab Content */}
                        <div className="text-primary/75 text-base leading-relaxed font-light min-h-[80px]">
                          {activeTab === "overview" && activeProject.description}
                          {activeTab === "location" && (
                            <div>
                              <p>Located at <span className="font-semibold">{activeProject.location}</span> in {activeProject.region}.</p>
                              <p className="mt-2">This premium development offers excellent connectivity, highly fertile soil, and a perfect setting for your private villa or farm getaway.</p>
                            </div>
                          )}
                          {activeTab === "amenities" && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {activeProject.amenities.map((a) => (
                                <span key={a} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-medium text-primary">
                                  {a}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Visual Journey (Gallery) of active project */}
                        {activeProject.gallery && activeProject.gallery.length > 0 && (
                          <div className="space-y-6 pt-4 border-t border-primary/5">
                            <h4 className="text-lg font-bold text-primary font-heading flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-accent" />
                              Visual Journey
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {activeProject.gallery.map((img, idx) => (
                                <motion.div
                                  key={img + idx}
                                  whileHover={{ scale: 1.03 }}
                                  className="overflow-hidden rounded-2xl border border-primary/5 aspect-square relative group"
                                >
                                  <img src={img} alt="" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            )}

            {/* Features & Amenities */}
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Exclusive Benefits</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Lifestyle <span className="text-accent italic font-serif">Advantages</span>
              </h3>
              <div className="mt-2 mb-8">
                <img src="/assets/images/background/Title-Separator.png" alt="" className="w-48 opacity-40 invert" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-primary/10 hover:bg-white/80 shadow-sm transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <CheckCircle size={18} />
                    </div>
                    <span className="text-lg font-light text-primary/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {project.amenities.length > 0 && (
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Lifestyle Amenities</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  World-Class <span className="text-accent italic font-serif">Infrastructure</span>
                </h3>
                 <div className="mt-2 mb-8">
                  <img src="/assets/images/background/Title-Separator.png" alt="" className="w-48 opacity-40 invert" />
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.amenities.map((a, idx) => (
                    <motion.div
                      key={a}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-8 py-3 rounded-full bg-white border border-primary/10 text-primary/80 hover:bg-accent hover:text-white hover:border-accent shadow-sm transition-all duration-300 font-bold text-xs uppercase tracking-widest cursor-default"
                    >
                      {a}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Project Gallery</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  Visual <span className="text-accent italic font-serif">Journey</span>
                </h3>
                <div className="mt-2 mb-8">
                  <img src="/assets/images/background/Title-Separator.png" alt="" className="w-48 opacity-40 invert" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`group overflow-hidden rounded-3xl border border-primary/10 relative ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                      style={{ aspectRatio: i === 0 ? "16/10" : "4/3" }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-32 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white border border-primary/10 rounded-[2.5rem] overflow-hidden shadow-xl">
                <div className="bg-primary/5 border-b border-primary/10 px-8 py-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2">Exclusive Access</p>
                  <h3 className="text-2xl font-bold text-primary leading-tight">Enquire About <span className="text-accent italic font-serif">Ownership</span></h3>
                </div>
                <div className="p-8"><ContactForm projectName={project.name} compact /></div>
              </motion.div>
              <Button size="xl" className="w-full gap-3 bg-accent text-white font-bold hover:bg-primary rounded-full h-16 shadow-2xl shadow-accent/20 transition-all duration-300" asChild>
                <a href="tel:+919591155565"><Phone className="w-5 h-5 fill-current" />Speak with Advisors</a>
              </Button>
              <div className="bg-white border border-primary/10 rounded-[2.5rem] p-10 space-y-6 shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/50 font-bold mb-4">Quick Details</p>
                {[
                  { label: "Location", value: project.location },
                  { label: "Development", value: project.type },
                  { label: "Certification", value: project.approvalType },
                  { label: "Valuation", value: project.priceRange },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-4 border-b border-primary/5 last:border-0">
                    <span className="text-xs uppercase tracking-widest text-primary/50">{row.label}</span>
                    <span className="text-sm font-bold text-primary text-right ml-4">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-[#FFF9F0] border-t border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
                  <Sparkles className="w-4 h-4 text-accent" /><span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Discover <span className="text-accent italic font-serif">Similar</span> Estates</h2>
              </div>
              <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white gap-2" asChild>
                <Link to="/projects">View All Portfolio <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((p, idx) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                  <Link to={`/projects/${p.slug}`} className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-primary/10 hover:border-accent/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                    <div className="overflow-hidden h-64 relative">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute top-6 left-6"><BadgeItem text={p.type} /></div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-primary/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
                        <MapPin className="w-3.5 h-3.5 text-accent" />{p.location}
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{p.name}</h3>
                      <div className="mt-auto pt-6 border-t border-primary/5 flex items-center justify-between">
                        <span className="text-accent font-heading font-bold">{p.priceRange}</span>
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all"><ArrowRight size={18} /></div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-20 bg-[#FFF9F0]">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary/40 via-[#FFF9F0] to-secondary/30 rounded-[4rem] p-12 md:p-24 text-center text-primary relative overflow-hidden group border border-primary/5 shadow-3xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 italic tracking-tighter text-primary leading-tight">Ready to Build Your <span className="text-accent">Legacy</span>?</h2>
                <p className="text-lg md:text-xl text-primary/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-balance">Our legacy is built on the trust of over 500 happy families. Your journey towards the perfect property starts with a conversation.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="xl" className="px-12 rounded-full h-16 shadow-2xl bg-accent text-white hover:bg-primary text-base font-bold" asChild>
                    <Link to="/contact">Book Private Sight Visit</Link>
                  </Button>
                  <Button variant="outline" size="xl" className="px-12 rounded-full h-16 border-primary/30 text-primary bg-white/50 backdrop-blur-md hover:bg-primary hover:text-white" asChild>
                    <Link to="/projects">Return to Portfolio</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const BadgeItem = ({ text }: { text: string }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
    {text}
  </span>
);

export default ProjectDetail;