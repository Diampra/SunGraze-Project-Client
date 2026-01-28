import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight, Filter } from "lucide-react";
import { projects, ProjectType, ProjectStatus } from "@/data/projects";
import projectResidential from "@/assets/project-residential.jpg";
import projectFarmland from "@/assets/project-farmland.jpg";

const statusColors = {
  completed: "bg-green-100 text-green-800 border-green-200",
  ongoing: "bg-gold/20 text-gold border-gold/30",
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
};

const typeLabels = {
  residential: "Residential",
  farmland: "Farmland",
};

function getProjectImage(type: string) {
  return type === "farmland" ? projectFarmland : projectResidential;
}

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get("type") as ProjectType | null;
  const initialStatus = searchParams.get("status") as ProjectStatus | null;

  const [typeFilter, setTypeFilter] = useState<ProjectType | "all">(initialType || "all");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">(initialStatus || "all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesType = typeFilter === "all" || project.type === typeFilter;
      const matchesStatus = statusFilter === "all" || project.status === statusFilter;
      return matchesType && matchesStatus;
    });
  }, [typeFilter, statusFilter]);

  const handleTypeChange = (type: ProjectType | "all") => {
    setTypeFilter(type);
    if (type === "all") {
      searchParams.delete("type");
    } else {
      searchParams.set("type", type);
    }
    setSearchParams(searchParams);
  };

  const handleStatusChange = (status: ProjectStatus | "all") => {
    setStatusFilter(status);
    if (status === "all") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", status);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <Helmet>
        <title>Our Projects - Sungraze Projects | Residential Plots & Farmland</title>
        <meta name="description" content="Explore our portfolio of residential plots and managed farmland projects across Karnataka and Tamil Nadu. BMRDA/DTCP approved layouts with clear titles." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mt-2 mb-6">
              Explore Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From premium residential plots to managed farmland, discover projects 
              that match your investment goals across Karnataka and Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="py-16 bg-background">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              {(["all", "residential", "farmland"] as const).map((type) => (
                <Button
                  key={type}
                  variant={typeFilter === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTypeChange(type)}
                >
                  {type === "all" ? "All Types" : typeLabels[type]}
                </Button>
              ))}
            </div>

            <div className="w-px h-6 bg-border hidden sm:block" />

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {(["all", "ongoing", "completed", "upcoming"] as const).map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleStatusChange(status)}
                >
                  {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </p>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-elegant card-hover"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={getProjectImage(project.type)}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className={statusColors[project.status]}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                      <Badge variant="secondary">
                        {typeLabels[project.type]}
                      </Badge>
                    </div>

                    {/* Region Tag */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-charcoal/70 text-cream border-0">
                        {project.region}
                      </Badge>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-cream font-heading font-semibold text-lg">
                        {project.priceRange}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 mb-3">
                      {project.tagline}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{project.location}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Plot Sizes</p>
                        <p className="text-sm font-medium text-foreground">{project.plotSizes}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Total Plots</p>
                        <p className="text-sm font-medium text-foreground">{project.totalPlots}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No projects found matching your filters.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setTypeFilter("all");
                  setStatusFilter("all");
                  setSearchParams({});
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              Tell us your requirements and we'll help you find the perfect plot.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
