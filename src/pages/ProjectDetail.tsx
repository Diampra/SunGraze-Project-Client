import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  FileText,
  Phone,
  Calendar,
  Ruler,
  Home,
  Trees,
} from "lucide-react";
import { getProjectById } from "@/data/projects";
import { ContactForm } from "@/components/contact/ContactForm";
import projectResidential from "@/assets/project-residential.jpg";
import projectFarmland from "@/assets/project-farmland.jpg";

const statusColors = {
  completed: "bg-green-100 text-green-800 border-green-200",
  ongoing: "bg-gold/20 text-gold border-gold/30",
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
};

const typeIcons = {
  residential: Home,
  farmland: Trees,
};

function getProjectImage(type: string) {
  return type === "farmland" ? projectFarmland : projectResidential;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const TypeIcon = typeIcons[project.type];

  return (
    <Layout>
      <Helmet>
        <title>{project.name} - Sungraze Projects | {project.type === "residential" ? "Residential Plots" : "Farmland"}</title>
        <meta name="description" content={`${project.tagline}. ${project.description.slice(0, 150)}...`} />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-8 bg-secondary/30">
        <div className="container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={getProjectImage(project.type)}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="secondary" className={statusColors[project.status]}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Badge>
                <Badge variant="secondary">
                  {project.type === "residential" ? "Residential" : "Farmland"}
                </Badge>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg gradient-forest flex items-center justify-center">
                  <TypeIcon className="w-5 h-5 text-cream" />
                </div>
                <Badge variant="outline">{project.region}</Badge>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
                {project.name}
              </h1>
              <p className="text-gold font-medium mb-4">{project.tagline}</p>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 text-gold" />
                <span>{project.location}</span>
              </div>

              {/* Key Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Ruler className="w-4 h-4" />
                    <span className="text-xs">Plot Sizes</span>
                  </div>
                  <p className="font-semibold text-foreground">{project.plotSizes}</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Home className="w-4 h-4" />
                    <span className="text-xs">Total Plots</span>
                  </div>
                  <p className="font-semibold text-foreground">{project.totalPlots}</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border col-span-2">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">Price Range</span>
                  </div>
                  <p className="font-heading font-bold text-xl text-primary">
                    {project.priceRange}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" asChild>
                  <a href="#enquiry">
                    Enquire Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              {project.amenities.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">Amenities</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="px-4 py-2 text-sm">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {project.highlights.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-4">Location Highlights</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="p-4 bg-card border border-border rounded-xl text-center"
                      >
                        <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                        <p className="text-sm text-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legal Info */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Legal & Documentation
                    </h3>
                    <p className="text-muted-foreground">{project.legalInfo}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      All documents available for verification. Request a site visit for detailed documentation review.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Enquiry Form */}
            <div className="lg:col-span-1" id="enquiry">
              <div className="bg-card rounded-2xl p-6 shadow-elegant sticky top-24">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Interested in {project.name}?
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm projectName={project.name} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
              Ready to Visit the Site?
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              Schedule a free site visit and see the project firsthand. Our team will guide you through every detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Schedule Site Visit
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/projects">View Other Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
