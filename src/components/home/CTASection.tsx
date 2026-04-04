import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="relative bg-primary rounded-[4rem] p-16 md:p-32 text-center text-white overflow-hidden shadow-3xl border border-white/10 group">
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1500" 
              alt="Community Legacy" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
          
          {/* Animated Accents */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Start Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 tracking-tight leading-none italic"> Ready to Build Your <span className="text-gold not-italic font-serif">Legacy</span>?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              Join over 500 happy families who have secured their future with Sungraze Projects. 
              Let's find the perfect land for your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" className="rounded-full bg-gold hover:bg-gold/90 text-primary shadow-2xl px-12 h-16 font-bold" asChild>
                <Link to="/contact">Get Expert Guidance</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-white/30 text-white hover:bg-white/10 px-12 h-16 backdrop-blur-md" asChild>
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
