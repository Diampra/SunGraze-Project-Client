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
} from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { getProjectBySlug, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

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

        {/* OpenGraph */}
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* HERO IMAGE */}
      <section className="relative h-[60vh]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container pb-12 text-white">
            <p className="uppercase tracking-wider text-sm opacity-90">
              {project.region}
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold mt-2">
              {project.name}
            </h1>
            <p className="mt-3 text-lg opacity-90">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW STRIP */}
      <section className="py-12 border-b bg-background">
        <div className="container grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">{project.location}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Plots</p>
            <p className="font-medium">{project.totalPlots}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Approval</p>
            <p className="font-medium">{project.approvalType}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Starting Price</p>
            <p className="font-semibold text-primary">
              {project.priceRange}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            
            {/* DESCRIPTION */}
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-6">
                About {project.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-gold mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AMENITIES */}
            {project.amenities.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.amenities.map((a) => (
                    <Badge key={a} variant="secondary">
                      {a}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* GALLERY */}
            {project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.gallery.map((img) => (
                    <img
                      key={img}
                      src={img}
                      className="rounded-xl object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="sticky top-24 bg-card p-8 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Enquire About This Project
              </h3>
              <ContactForm
                projectName={project.name}
                compact
              />
              <div className="mt-6">
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-heading font-semibold text-center mb-12">
              Similar Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition"
                >
                  <img
                    src={p.image}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {p.priceRange}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Schedule a Private Site Visit
          </h2>
          <p className="mb-8 opacity-90">
            Explore the project firsthand and review all legal
            documentation with our experts.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Book Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
