import { Shield, FileCheck, MapPin, Users, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "All our projects come with clear titles, proper approvals (BMRDA/DTCP), and complete documentation.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description: "From site visit to registration, we maintain complete transparency at every step of your journey.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located projects near highways, airports, IT hubs, and growing corridors.",
  },
  {
    icon: Users,
    title: "Trusted by 500+",
    description: "Over 500 happy families and investors have trusted Sungraze for their real estate needs.",
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description: "Our projects are positioned in high-appreciation zones ensuring excellent returns.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "Dedicated relationship managers to guide you from enquiry to possession and beyond.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full border border-gold bg-gold/10 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-6 leading-none tracking-tight italic">
            The Sungraze <span className="text-primary not-italic">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            We believe in building lasting relationships through trust, transparency, 
            and delivering exceptional value to our customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-10 rounded-[2.5rem] bg-white border border-border/50 hover:bg-primary hover:text-white transition-all duration-500 hover:shadow-2xl cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500 shadow-inner">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-all duration-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
