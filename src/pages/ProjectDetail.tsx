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
} from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { getProjectBySlug, projects } from "@/data/projects";
import { useRef, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const farmlandSections = [
    {
      slug: "farm-land",
      title: "Farm Land",
      subtitle: "Sustainable Agriculture",
      image: "/farmland.jpg",
      tabs: [
        {
          key: "overview",
          label: "Overview",
          content:
            "The Sungraze farmland is mainly built for land cultivation and producing variety of crops in one common place.",
        },
        {
          key: "plantation",
          label: "Plantation",
          content:
            "Mango, Coconut and mixed fruit plantations are cultivated using sustainable methods.",
        },
        {
          key: "irrigation",
          label: "Irrigation",
          content:
            "Advanced drip irrigation system ensures water efficiency and healthy crop growth.",
        },
      ],
    },
    {
      slug: "club-house",
      title: "Club House",
      subtitle: "Leisure & Events",
      image: "/clubhouse.jpg",
      tabs: [
        {
          key: "overview",
          label: "Overview",
          content:
            "The Club at SUNGRAZE Farms is spread over 6 acres and perfectly blended with nature.",
        },
        {
          key: "events",
          label: "Events",
          content:
            "Preferred venue for mega events, celebrations and social gatherings.",
        },
        {
          key: "recreation",
          label: "Recreation",
          content:
            "Indoor & outdoor leisure facilities for relaxation and recreation.",
        },
      ],
    },
    {
      slug: "naturopathy",
      title: "Naturopathy",
      subtitle: "Holistic Wellness",
      image: "/naturopathy.jpg",
      tabs: [
        {
          key: "mud-bath",
          label: "Mud Bath",
          content:
            "Mud therapy helps detoxify the body and relax the nervous system.",
        },
        {
          key: "shiro-dhara",
          label: "Shiro Dhara",
          content: "Traditional Ayurvedic therapy to calm the mind and body.",
        },
        {
          key: "massage",
          label: "Herbal Massage",
          content:
            "Therapeutic herbal massage for rejuvenation and healing.",
        },
      ],
    },
    {
      slug: "spiritual-retreat",
      title: "Spiritual Retreat",
      subtitle: "Mind & Soul",
      image: "/spiritual.jpg",
      tabs: [
        {
          key: "yoga",
          label: "Yoga",
          content:
            "Daily yoga sessions to enhance physical and mental balance.",
        },
        {
          key: "meditation",
          label: "Meditation",
          content: "Guided meditation to reconnect with inner peace.",
        },
        {
          key: "retreat",
          label: "Retreat",
          content: "A peaceful getaway to leave daily stress behind.",
        },
      ],
    },
  ];

  if (!project) return <Navigate to="/projects" replace />;

  const relatedProjects = projects
    .filter((p) => p.type === project.type && p.slug !== project.slug)
    .slice(0, 3);

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
        <title>
          {project.name} in {project.location} | Sungraze Projects
        </title>
        <meta
          name="description"
          content={`${project.tagline}. ${project.description.slice(0, 155)}`}
        />
        <link rel="canonical" href={`/projects/${project.slug}`} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover scale-105"
          style={{ animation: "heroZoom 8s ease-out forwards" }}
        />
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 container">
          <nav className="flex items-center gap-2 text-white/60 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{project.name}</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 text-white">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase tracking-widest text-white/80 font-medium">
                {project.region}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold leading-none tracking-tight max-w-3xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/75 max-w-xl font-light">
              {project.tagline}
            </p>
          </div>
        </div>

        <style>{`
          @keyframes heroZoom {
            from { transform: scale(1.05); }
            to   { transform: scale(1); }
          }
        `}</style>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <section className="border-b bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { label: "Location", value: project.location },
              { label: "Total Plots", value: project.totalPlots },
              { label: "Approval", value: project.approvalType },
              { label: "Starting Price", value: project.priceRange, highlight: true },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                  {stat.label}
                </p>
                <p
                  className={`text-base font-semibold ${
                    stat.highlight ? "text-primary text-lg" : ""
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-3 gap-16">

          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-20">

            {/* About */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  About the Project
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-snug">
                {project.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {project.description}
              </p>
            </div>

            {/* Farmland Experience Section */}
            {project.type === "farmland" && (
              <div className="space-y-12">
                {/* Section Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                      Experiences
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold">
                    Sungraze Experiences
                  </h2>
                  <p className="text-muted-foreground text-[15px] max-w-xl">
                    Discover holistic living, nature, wellness and recreation — all within one integrated community.
                  </p>
                </div>

                {/* Experience Cards — editorial 2-col grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {farmlandSections.map((section, i) => (
                    <div
                      key={section.slug}
                      className="group relative rounded-xl overflow-hidden cursor-pointer"
                      style={{ aspectRatio: i === 0 ? "16/10" : "4/3" }}
                    >
                      <img
                        src={section.image}
                        alt={section.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <p className="text-xs uppercase tracking-widest text-white/60 mb-1 font-medium">
                          {section.subtitle}
                        </p>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {section.title}
                        </h3>
                        <button
                          onClick={() => {
                            setActiveSection(section.slug);
                            setActiveTab(section.tabs[0].key);
                            setTimeout(() => {
                              detailsRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 100);
                          }}
                          className="self-start flex items-center gap-2 text-sm text-white border border-white/40 hover:border-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200"
                        >
                          Explore
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Detail Panel */}
                {activeSection && (
                  <div
                    ref={detailsRef}
                    className="scroll-mt-32 rounded-2xl overflow-hidden border bg-card shadow-lg"
                  >
                    {(() => {
                      const section = farmlandSections.find(
                        (s) => s.slug === activeSection
                      );
                      if (!section) return null;
                      return (
                        <>
                          {/* Panel Header */}
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-end p-8">
                              <div className="flex-1">
                                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                                  {section.subtitle}
                                </p>
                                <h3 className="text-2xl font-semibold text-white">
                                  {section.title}
                                </h3>
                              </div>
                              <button
                                onClick={() => {
                                  setActiveSection(null);
                                  setActiveTab(null);
                                }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                                aria-label="Close"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Tabs + Content */}
                          <div className="p-8">
                            <div className="flex gap-2 mb-8 flex-wrap">
                              {section.tabs.map((tab) => (
                                <button
                                  key={tab.key}
                                  onClick={() => setActiveTab(tab.key)}
                                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    activeTab === tab.key
                                      ? "bg-primary text-primary-foreground shadow-sm"
                                      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                                  }`}
                                >
                                  {tab.label}
                                </button>
                              ))}
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-[15px] max-w-2xl">
                              {section.tabs.find((t) => t.key === activeTab)?.content}
                            </p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Key Features
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 py-3 border-b border-border/50">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            {project.amenities.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Amenities
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.amenities.map((a) => (
                    <Badge
                      key={a}
                      variant="secondary"
                      className="px-4 py-1.5 rounded-full text-sm font-normal"
                    >
                      {a}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Gallery
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.gallery.map((img, i) => (
                    <div
                      key={img}
                      className={`overflow-hidden rounded-lg ${
                        i === 0 ? "col-span-2 row-span-2" : ""
                      }`}
                      style={{ aspectRatio: i === 0 ? "16/10" : "4/3" }}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ──────────────────────────────────────── */}
          <div>
            <div className="sticky top-24 space-y-4">
              {/* Enquiry Card */}
              <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-primary/5 border-b px-6 py-5">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                    Get in Touch
                  </p>
                  <h3 className="text-lg font-semibold">
                    Enquire About This Project
                  </h3>
                </div>
                <div className="p-6">
                  <ContactForm projectName={project.name} compact />
                </div>
              </div>

              {/* Call CTA */}
              <Button size="lg" className="w-full gap-2" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-4 h-4" />
                  Call Our Experts
                </a>
              </Button>

              {/* Project snapshot card */}
              <div className="border rounded-2xl p-6 bg-card space-y-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  Project Snapshot
                </p>
                {[
                  { label: "Location", value: project.location },
                  { label: "Type", value: project.type },
                  { label: "Approval", value: project.approvalType },
                  { label: "Price", value: project.priceRange },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-border/50 last:border-0">
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                    <span className="text-sm font-medium text-right max-w-[55%]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-secondary/20 border-t">
          <div className="container">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Explore More
                  </span>
                </div>
                <h2 className="text-3xl font-heading font-semibold">
                  Similar Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden h-52">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.location}
                    </div>
                    <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{p.priceRange}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-28 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container max-w-2xl text-center relative">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-3 font-medium">
            Next Step
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-5 leading-tight">
            Schedule a Private Site Visit
          </h2>
          <p className="mb-10 text-primary-foreground/70 text-lg font-light leading-relaxed">
            Explore the project firsthand and review all legal documentation with our experts.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-base rounded-full gap-2"
            asChild
          >
            <Link to="/contact">
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;