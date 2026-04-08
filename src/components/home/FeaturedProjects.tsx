import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";

const statusColors = {
  completed: "bg-green-100 text-green-800 border-green-200",
  ongoing: "bg-gold/20 text-gold border-gold/30",
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
};

const typeLabels = {
  residential: "Residential",
  farmland: "Farmland",
};

export function FeaturedProjects() {
// Show 2 farmland + 2 residential (4 cards total)
const farmlandProjects = projects.filter((p) => p.type === "farmland").slice(0, 2);
const residentialProjects = projects.filter((p) => p.type === "residential").slice(0, 2);
const featuredProjects = [...farmlandProjects, ...residentialProjects];

  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-5 py-2 rounded-full border border-gold bg-gold/10 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              Our Projects
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-none tracking-tight">
              Featured <span className="text-primary italic font-serif">Developments</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg font-light leading-relaxed">
              Explore our premium selections: one exceptional farmland investment and one residential community 
              from our best-performing projects across Karnataka and Tamil Nadu.
            </p>
          </div>
          <Button variant="outline" size="xl" className="rounded-full border-primary/20 text-primary hover:bg-primary/5 px-10" asChild>
            <Link to="/projects">
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-700 relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md ${statusColors[project.status]}`}>
                    {project.status === "ongoing" ? "Developing" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
                    {typeLabels[project.type]}
                  </div>
                </div>

                {/* Price Label Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">{project.location}</p>
                  <h3 className="text-white text-2xl font-heading font-bold tracking-tight mb-4 group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="px-4 py-2 bg-gold/90 text-primary font-bold rounded-xl text-sm shadow-xl">
                      {project.priceRange}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
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
