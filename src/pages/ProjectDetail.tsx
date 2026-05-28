import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Phone,
  ChevronLeft,
  Sparkles,
  Award,
  Shield,
  Home,
  Layers,
  TreePine,
  Wifi,
  Car,
  Dumbbell,
  Users,
  Zap,
  Droplets,
  Lock,
} from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { getProjectBySlug, projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useState } from "react";

/* ─── Utility: status badge colour ─────────────────────────── */
const statusConfig: Record<string, { label: string; color: string }> = {
  completed: { label: "Completed", color: "bg-emerald-900/80 text-emerald-100 border-emerald-700/50" },
  ongoing: { label: "Ongoing", color: "bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40" },
  upcoming: { label: "Upcoming", color: "bg-white/10 text-white/80 border-white/20" },
};

/* ─── Amenity icon map ──────────────────────────────────────── */
const amenityIconMap: Record<string, React.ElementType> = {
  "Club House": Sparkles,
  "Club House (Upcoming)": Sparkles,
  "Naturopathy Center": TreePine,
  "Spiritual Retreat Center": Sparkles,
  "Managed Assets": Award,
  "Water & Electricity": Droplets,
  "Security": Lock,
  "Water": Droplets,
  "Electricity": Zap,
  "Gated Community": Shield,
  "Street Lights": Zap,
  "Children's Play Area": Users,
  "Children Play Area": Users,
  "Green Trees": TreePine,
  "Fitness Center with Equipment": Dumbbell,
  "LIFT with Power Backup": Layers,
  "Ample Car Parking": Car,
  "24Hr Water Supply": Droplets,
  "24Hr Security": Shield,
  "Gymnasium": Dumbbell,
  "INTERCOM": Wifi,
  "LIFT": Layers,
  "24Hr Backup Electricity": Zap,
  "Indoor Games": Sparkles,
  "Outdoor Games Play Area": Users,
  "Landscape": TreePine,
  "Landscaped Gardens": TreePine,
  "Premium Villa Design": Home,
  "Premium Plot Design": Home,
  "CCTV Cameras & Security": Shield,
};

/* ─── Fade-up animation wrapper ────────────────────────────── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Section label component ──────────────────────────────── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
    {children}
  </span>
);

/* ─── Elegant divider ──────────────────────────────────────── */
const Divider = () => (
  <div className="flex items-center gap-4 my-2">
    <div className="h-px flex-1 bg-[#E8E5DF]" />
    <div className="w-1 h-1 rounded-full bg-[#D4AF37]/60" />
    <div className="h-px w-8 bg-[#E8E5DF]" />
  </div>
);

/* ─── Amenity chip ──────────────────────────────────────────── */
const AmenityChip = ({ label }: { label: string }) => {
  const Icon = amenityIconMap[label] || Sparkles;
  return (
    <div className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#E8E5DF] bg-white hover:border-[#0F3D2E]/20 hover:bg-[#F8F6F2] transition-all duration-200 cursor-default">
      <Icon className="w-3.5 h-3.5 text-[#0F3D2E]/50 flex-shrink-0" />
      <span className="text-[13px] font-medium text-[#374151] leading-tight">{label}</span>
    </div>
  );
};

/* ─── Feature row item ──────────────────────────────────────── */
const FeatureItem = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <FadeUp delay={delay}>
    <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8E5DF] hover:border-[#0F3D2E]/20 hover:shadow-sm transition-all duration-200">
      <div className="mt-0.5 w-7 h-7 rounded-lg bg-[#0F3D2E]/6 border border-[#0F3D2E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0F3D2E] transition-colors duration-300">
        <CheckCircle className="w-3.5 h-3.5 text-[#0F3D2E] group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="text-[14px] leading-snug text-[#374151] font-medium pt-0.5">{text}</span>
    </div>
  </FadeUp>
);

/* ─── Stat card ─────────────────────────────────────────────── */
const StatCard = ({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) => (
  <div className="flex flex-col gap-1 px-6 py-5 border-r border-[#E8E5DF] last:border-r-0 first:pl-0">
    <span className="text-[10px] uppercase tracking-[0.18em] text-[#6B7280] font-semibold">{label}</span>
    <span className={`text-base font-semibold leading-snug ${highlight ? "text-[#D4AF37]" : "text-[#0F3D2E]"}`}>
      {value}
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number | null>(null);

  if (!project) return <Navigate to="/projects" replace />;

  const relatedProjects = projects
    .filter((p) => p.type === project.type && p.slug !== project.slug)
    .slice(0, 3);

  const status = statusConfig[project.status] ?? statusConfig.ongoing;

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

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[560px] max-h-[860px] overflow-hidden bg-[#0F3D2E]">
        {/* Cinematic image */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          {/* Dark cinematic overlay — bottom-weighted */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        </motion.div>

        {/* Back breadcrumb */}
        <div className="absolute top-24 left-0 right-0 z-20">
          <div className="container px-6 md:px-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-wider uppercase font-medium transition-colors duration-200"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              All Projects
            </Link>
          </div>
        </div>

        {/* Hero content — bottom aligned */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="container px-6 md:px-8 pb-12 md:pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              {/* Status badge */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm ${status.color}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                {status.label}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-[1.08] tracking-tight mb-4">
                {project.name}
              </h1>

              {/* Location row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/65">
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  {project.location}
                </span>
                <span className="w-px h-3.5 bg-white/25" />
                <span className="text-sm">{project.region}</span>
                {project.approvalType && (
                  <>
                    <span className="w-px h-3.5 bg-white/25" />
                    <span className="flex items-center gap-1.5 text-sm">
                      <Shield className="w-3.5 h-3.5 text-[#D4AF37]/80" />
                      {project.approvalType} Approved
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────── */}
      <div className="bg-white border-b border-[#E8E5DF]">
        <div className="container px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap items-stretch divide-x divide-[#E8E5DF]"
          >
            <StatCard label="Location" value={project.location} />
            <StatCard label="Total Plots" value={project.totalPlots} />
            <StatCard label="Plot Sizes" value={project.plotSizes} />
            <StatCard label="Approval" value={project.approvalType} />
            <StatCard label="Starting Price" value={project.priceRange} highlight />
          </motion.div>
        </div>
      </div>

      {/* ── MAIN BODY ─────────────────────────────────────────── */}
      <section className="bg-[#F8F6F2] py-16 md:py-24">
        <div className="container px-6 md:px-8 grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-12 xl:gap-16 items-start">

          {/* ── LEFT COLUMN ───────────────────────────────────── */}
          <div className="space-y-16 md:space-y-20 min-w-0">

            {/* ─ About ─ */}
            <FadeUp>
              <div className="space-y-5">
                <SectionLabel>About the Project</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0F3D2E] leading-snug">
                  {project.tagline}
                </h2>
                <Divider />
                <p className="text-[#6B7280] leading-relaxed text-[15px] max-w-2xl whitespace-pre-line">
                  {project.description}
                </p>

                {/* Highlights row */}
                {project.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 text-[12px] font-medium text-[#0F3D2E]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeUp>

            {/* ─ Features ─ */}
            {project.features.length > 0 && (
              <div className="space-y-6">
                <FadeUp>
                  <SectionLabel>Lifestyle Advantages</SectionLabel>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#0F3D2E]">
                    Property Features
                  </h2>
                  <Divider />
                </FadeUp>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((f, i) => (
                    <FeatureItem key={f} text={f} delay={i * 0.04} />
                  ))}
                </div>
              </div>
            )}

            {/* ─ Amenities ─ */}
            {project.amenities.length > 0 && (
              <div className="space-y-6">
                <FadeUp>
                  <SectionLabel>Exclusive Amenities</SectionLabel>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#0F3D2E]">
                    World-Class Infrastructure
                  </h2>
                  <Divider />
                </FadeUp>
                <FadeUp delay={0.1}>
                  <div className="flex flex-wrap gap-2.5">
                    {project.amenities.map((a) => (
                      <AmenityChip key={a} label={a} />
                    ))}
                  </div>
                </FadeUp>
              </div>
            )}

            {/* ─ Gallery ─ */}
            {project.gallery.length > 0 && (
              <div className="space-y-6">
                <FadeUp>
                  <SectionLabel>Project Gallery</SectionLabel>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#0F3D2E]">
                    Visual Journey
                  </h2>
                  <Divider />
                </FadeUp>

                {/* Editorial masonry-inspired grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={img + i}
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.5 }}
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-[#E8E5DF] ${
                        i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                      onClick={() => setActiveGalleryIdx(i)}
                    >
                      <img
                        src={img}
                        alt={`${project.name} gallery ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ─ Related Developments ─ */}
            {(project.type === "farmland" || project.type === "residential") &&
              relatedProjects.length > 0 && (
                <div className="space-y-6">
                  <FadeUp>
                    <SectionLabel>Portfolio</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#0F3D2E]">
                      Similar Developments
                    </h2>
                    <Divider />
                  </FadeUp>

                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedProjects.slice(0, 2).map((p, i) => (
                      <FadeUp key={p.slug} delay={i * 0.1}>
                        <Link
                          to={`/projects/${p.slug}`}
                          className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white border border-[#E8E5DF] hover:border-[#0F3D2E]/20 hover:shadow-md transition-all duration-300"
                          style={{ aspectRatio: "4/3" }}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37] mb-1">
                              {p.type}
                            </p>
                            <h3 className="text-lg font-serif text-white leading-snug mb-2">
                              {p.name}
                            </h3>
                            <div className="flex items-center gap-1.5 text-white/60 text-xs">
                              <MapPin className="w-3 h-3" />
                              {p.location}
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </div>
                        </Link>
                      </FadeUp>
                    ))}
                  </div>

                  <FadeUp delay={0.2}>
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0F3D2E] hover:text-[#D4AF37] transition-colors duration-200"
                    >
                      View all projects
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </FadeUp>
                </div>
              )}
          </div>

          {/* ── SIDEBAR ───────────────────────────────────────── */}
          <div className="lg:sticky lg:top-28 space-y-5">

            {/* Inquiry card */}
            <FadeUp>
              <div className="bg-white rounded-[24px] border border-[#E8E5DF] overflow-hidden shadow-[0_4px_24px_-6px_rgba(15,61,46,0.08)]">
                <div className="px-7 py-6 border-b border-[#E8E5DF]">
                  <SectionLabel>Exclusive Access</SectionLabel>
                  <h3 className="text-xl font-serif text-[#0F3D2E] leading-snug">
                    Enquire About{" "}
                    <span className="italic text-[#D4AF37]">Ownership</span>
                  </h3>
                </div>
                <div className="px-7 py-6">
                  <ContactForm projectName={project.name} compact />
                </div>
              </div>
            </FadeUp>

            {/* Call CTA */}
            <FadeUp delay={0.1}>
              <a
                href="tel:+919591155565"
                className="group flex items-center justify-center gap-3 w-full py-4 rounded-[16px] bg-[#0F3D2E] text-white text-[14px] font-semibold hover:bg-[#0a2e20] transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(15,61,46,0.35)]"
              >
                <Phone className="w-4 h-4 fill-current" />
                Speak with an Advisor
              </a>
            </FadeUp>

            {/* Quick details */}
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-[24px] border border-[#E8E5DF] px-7 py-6 shadow-[0_2px_12px_-4px_rgba(15,61,46,0.06)]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold mb-5">
                  Quick Details
                </p>
                <div className="space-y-0">
                  {[
                    { label: "Location", value: project.location },
                    { label: "Type", value: project.type === "farmland" ? "Managed Farmland" : "Residential" },
                    { label: "Approval", value: project.approvalType },
                    { label: "Clear Title", value: project.clearTitle ? "Yes" : "No" },
                    { label: "Loan", value: project.loanAvailable ? "Available" : "Not Available" },
                    { label: "Valuation", value: project.priceRange },
                  ].map((row, i, arr) => (
                    <div
                      key={row.label}
                      className={`flex justify-between items-start py-3.5 ${
                        i < arr.length - 1 ? "border-b border-[#E8E5DF]" : ""
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[#6B7280] font-medium">
                        {row.label}
                      </span>
                      <span className="text-[13px] font-semibold text-[#0F3D2E] text-right ml-4 max-w-[55%]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────── */}
      <section className="bg-[#F8F6F2] pb-20 md:pb-28">
        <div className="container px-6 md:px-8">
          <FadeUp>
            <div className="relative rounded-[32px] bg-[#0F3D2E] overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center">
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_top_right,_white_0%,_transparent_60%)]" />
              
              {/* Gold accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              <div className="relative z-10 max-w-xl mx-auto space-y-6">
                <SectionLabel>Start Your Journey</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug">
                  Ready to Build Your{" "}
                  <span className="text-[#D4AF37] italic">Legacy?</span>
                </h2>
                <p className="text-white/55 text-[14px] leading-relaxed">
                  Our legacy is built on the trust of over 500 happy families.
                  Your journey towards the perfect property starts with a conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button
                    className="px-8 h-12 rounded-[14px] bg-[#D4AF37] hover:bg-[#c09d2f] text-[#0F3D2E] text-[13px] font-bold tracking-wide transition-all duration-200 shadow-lg shadow-[#D4AF37]/20"
                    asChild
                  >
                    <Link to="/contact">Book a Site Visit</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 h-12 rounded-[14px] border-white/20 text-white hover:bg-white/8 hover:border-white/30 bg-transparent text-[13px] font-medium transition-all duration-200"
                    asChild
                  >
                    <Link to="/projects">Explore Portfolio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── RELATED PROJECTS STRIP ────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="bg-white border-t border-[#E8E5DF] py-16 md:py-20">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
              <div>
                <SectionLabel>Portfolio</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-serif text-[#0F3D2E]">
                  Discover Similar Estates
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0F3D2E] hover:text-[#D4AF37] transition-colors duration-200 shrink-0"
              >
                View All
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedProjects.map((p, i) => (
                <FadeUp key={p.id} delay={i * 0.1}>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="group flex flex-col bg-[#F8F6F2] rounded-[24px] overflow-hidden border border-[#E8E5DF] hover:border-[#0F3D2E]/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative overflow-hidden h-52">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-white">
                        {p.type}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-1.5 text-[#6B7280] text-[11px] mb-2.5">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        {p.location}
                      </div>
                      <h3 className="text-base font-serif text-[#0F3D2E] mb-1 group-hover:text-[#0F3D2E]/80 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-[13px] text-[#6B7280] line-clamp-2 flex-1">
                        {p.tagline}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[#E8E5DF] flex items-center justify-between">
                        <span className="text-[#D4AF37] text-sm font-semibold">{p.priceRange}</span>
                        <div className="w-8 h-8 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-white transition-all duration-200">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── LIGHTBOX ──────────────────────────────────────────── */}
      {activeGalleryIdx !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveGalleryIdx(null)}
        >
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={project.gallery[activeGalleryIdx]}
            alt={`${project.name} gallery`}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setActiveGalleryIdx(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
          {/* Nav arrows */}
          {activeGalleryIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setActiveGalleryIdx(activeGalleryIdx - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {activeGalleryIdx < project.gallery.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setActiveGalleryIdx(activeGalleryIdx + 1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      )}
    </Layout>
  );
};

export default ProjectDetail;