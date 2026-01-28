import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
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

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Projects
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
              Featured <span className="text-primary">Developments</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Explore our carefully curated selection of residential plots and farmland 
              projects across Karnataka and Tamil Nadu.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
