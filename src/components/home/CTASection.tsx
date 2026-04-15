import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Immersive Nature Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=2000" 
          alt="Nature Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10">
        <div className="relative backdrop-blur-3xl bg-white/5 rounded-[4rem] p-12 md:p-24 text-center border border-white/20 shadow-[-20px_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Internal Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <span className="px-6 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold uppercase tracking-[0.4em] backdrop-blur-md">
                Begin Your Legacy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-heading text-white font-bold mb-8 tracking-tight">
              Ready to build <span className="text-secondary italic font-display block md:inline">your dreams?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-balance">
              Join 500+ happy families who have secured their future. Let's find your perfect plot today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="rounded-full bg-accent hover:bg-accent/90 text-primary px-10 h-16 text-lg font-bold shadow-gold btn-shine" 
                asChild
              >
                <Link to="/contact">
                  Get Expert Guidance <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-white/30 text-white hover:bg-white/10 px-10 h-16 text-lg backdrop-blur-md transition-all duration-500" 
                asChild
              >
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
              <div className="flex items-center gap-2 text-white">
                <div className="h-1 w-8 bg-accent rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest">100% Legal</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="h-1 w-8 bg-accent rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest">High ROI</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="h-1 w-8 bg-accent rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest">Gated Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
