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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                    alt="Modern residential development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                    alt="Lush farmland landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card shadow-elegant-lg rounded-2xl p-6 max-w-[200px]">
              <p className="text-4xl font-heading font-bold text-primary">10+</p>
              <p className="text-muted-foreground text-sm">Years of Trusted Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Building Trust Through{" "}
              <span className="text-primary">Transparency</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sungraze Projects is a trusted name in real estate development across Karnataka 
              and Tamil Nadu. We specialize in delivering legally compliant residential plots 
              and managed farmland that offer both value and peace of mind.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to transparency, quality, and customer satisfaction has made us 
              a preferred choice for over 500 happy families and investors.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
