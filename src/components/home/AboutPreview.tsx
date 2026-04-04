import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Transparent Documentation & Legal Compliance",
  "15+ Successful Projects Delivered",
  "Prime Locations Across South India",
  "End-to-End Support & Guidance",
];

export function AboutPreview() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Grid */}
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2rem] md:rounded-[3rem] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              <div className="space-y-4 md:space-y-6">
                <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] bg-secondary overflow-hidden shadow-elegant-lg rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                    alt="Modern residential development"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] bg-secondary overflow-hidden shadow-elegant-lg rotate-[2deg] group-hover:rotate-0 transition-transform duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                    alt="Lush farmland landscape"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 bg-white/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 z-20 group-hover:scale-105 transition-transform duration-500 max-w-[140px] md:max-w-none text-center md:text-left">
              <p className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tighter leading-none italic">10+</p>
              <p className="text-charcoal/70 text-[8px] md:text-xs font-bold uppercase tracking-[0.2em] mt-2 md:mt-3">Years of Ethical Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-block px-6 py-2 rounded-full border border-gold bg-gold/10 text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm mx-auto lg:mx-0">
              Our Legacy
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 leading-tight tracking-tight text-balance">
              Building <span className="text-primary italic font-serif">Futures</span> Through Ethical Excellence
            </h2>
            <div className="space-y-4 md:space-y-6 text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10 text-pretty">
              <p>
                Sungraze Projects is a trusted name in real estate development across Karnataka 
                and Tamil Nadu. We specialize in delivering legally compliant residential plots 
                and managed farmland.
              </p>
              <p>
                Our commitment to transparency, quality, and customer satisfaction has made us 
                a preferred choice for over 500 happy families.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-12 text-left max-w-sm mx-auto lg:max-w-none lg:mx-0">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button variant="default" size="xl" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl px-10 h-14" asChild>
                <Link to="/about">
                  Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
