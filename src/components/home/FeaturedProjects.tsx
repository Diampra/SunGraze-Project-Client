import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Globe, Leaf, Home } from "lucide-react";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "farmland", label: "Farmlands", icon: Leaf },
  { id: "residential", label: "Residentials", icon: Home },
];

const statusColors = {
  completed: "bg-green-500/10 text-green-500 border-green-500/20",
  ongoing: "bg-accent/10 text-accent border-accent/20",
  upcoming: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

export function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    return project.type === activeTab;
  }).slice(0, 4); // Keep it to top 4 for the homepage teaser

  return (
    <section className="py-32 relative overflow-hidden bg-[#F7F9F7]">
      {/* Background Textures */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-multiply">
        <img src="https://www.transparenttextures.com/patterns/natural-paper.png" alt="paper texture" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <img src="/assets/images/background/dark-dott-pattern.png" alt="dots" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground tracking-tight mb-8">
            Featured <span className="text-primary italic font-serif">Developments</span>
          </h2>
          
          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-secondary/50 backdrop-blur-md rounded-full border border-black/5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                    isActive ? "text-white" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block relative bg-white rounded-[2.5rem] overflow-hidden shadow-elegant border border-black/5 hover:shadow-2xl transition-all duration-700"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Glassmorphic Badges */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <div className={cn(
                        "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md",
                        statusColors[project.status as keyof typeof statusColors]
                      )}>
                        {project.status === "ongoing" ? "Developing" : project.status}
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                        {project.type}
                      </div>
                    </div>

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-2">
                        <MapPin className="w-3 h-3 text-accent" />
                        {project.location}
                      </div>
                      <h3 className="text-white text-2xl font-heading font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="px-4 py-2 bg-accent text-primary font-bold rounded-xl text-sm shadow-xl shadow-accent/20">
                          {project.priceRange}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <Button variant="outline" size="lg" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white px-12 h-16 transition-all duration-500" asChild>
            <Link to="/projects">
              Explore Entire Portfolio <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
