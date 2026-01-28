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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-4">
            The Sungraze <span className="text-primary">Advantage</span>
          </h2>
          <p className="text-muted-foreground">
            We believe in building lasting relationships through trust, transparency, 
            and delivering exceptional value to our customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-forest flex items-center justify-center mb-5 group-hover:shadow-elegant transition-shadow">
                <feature.icon className="w-6 h-6 text-cream" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
