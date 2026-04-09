import { Shield, FileCheck, MapPin, Users, TrendingUp, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "All our projects come with clear titles, proper approvals (BMRDA/DTCP), and complete documentation.",
    highlight: "100% Legal Assurance",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description: "From site visit to registration, we maintain complete transparency at every step of your journey.",
    highlight: "Zero Hidden Costs",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located projects near highways, airports, IT hubs, and growing corridors.",
    highlight: "Strategic Positioning",
  },
  {
    icon: Users,
    title: "Trusted by 500+",
    description: "Over 500 happy families and investors have trusted Sungraze for their real estate needs.",
    highlight: "Proven Track Record",
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description: "Our projects are positioned in high-appreciation zones ensuring excellent returns.",
    highlight: "High ROI Potential",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "Dedicated relationship managers to guide you from enquiry to possession and beyond.",
    highlight: "Lifetime Support",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/3 via-transparent to-transparent rounded-full" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 to-primary/10 border border-gold/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Why Choose Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6 leading-none tracking-tight">
            The Sungraze <span className="text-primary italic font-serif bg-gradient-to-r from-primary to-gold bg-clip-text">Advantage</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            We believe in building lasting relationships through trust, transparency, and delivering exceptional value to our customers at every touchpoint.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl group-hover:shadow-gold/20 transition-all duration-700" />

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-gold transition-colors duration-500" />
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Highlight badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-gold/10 to-primary/10 border border-gold/20 rounded-full text-xs font-bold text-gold uppercase tracking-[0.1em]">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow group-hover:text-foreground/80 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-gold to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Arrow indicator */}
                <div className="flex justify-end mt-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-primary border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              Trusted by 500+ families across Karnataka & Tamil Nadu
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
