import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <div className="bg-card rounded-3xl shadow-elegant-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 lg:p-12 xl:p-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Ready to Invest?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-4">
                Start Your Journey with{" "}
                <span className="text-primary">Sungraze</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a residential plot to build your dream home or 
                farmland for sustainable investment, we're here to help you every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Site Visit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">Browse Projects</Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@sungrazeprojects.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">info@sungrazeprojects.com</span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Happy family with their new home"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-forest opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-cream">
                  <p className="text-5xl font-heading font-bold mb-2">500+</p>
                  <p className="text-cream/80">Happy Families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
