import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Home,
  Trees,
  FileCheck,
  Users,
  MapPin,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Plots",
    description:
      "Premium residential plots in high-growth corridors of Bangalore, Hosur, and surrounding areas. All plots come with BMRDA/DTCP approvals and clear titles.",
    features: [
      "BMRDA/DTCP Approved Layouts",
      "Clear Title & Documentation",
      "Prime Locations Near IT Hubs",
      "Modern Infrastructure",
      "Flexible Plot Sizes",
      "Easy Payment Plans",
    ],
  },
  {
    icon: Trees,
    title: "Managed Farmland",
    description:
      "Own agricultural land without the hassle of managing it. Our managed farmland projects offer regular returns while we handle all farming operations.",
    features: [
      "Fully Managed Operations",
      "Regular Agricultural Returns",
      "Clear Land Titles",
      "Water & Irrigation Setup",
      "Plantation Support",
      "Annual Farm Visits",
    ],
  },
  {
    icon: FileCheck,
    title: "Legal Documentation Support",
    description:
      "Complete end-to-end legal support for all your land transactions. From title verification to registration, we ensure a hassle-free experience.",
    features: [
      "Title Verification",
      "Encumbrance Certificate",
      "Registration Assistance",
      "Loan Documentation",
      "Mutation Support",
      "Legal Consultation",
    ],
  },
  {
    icon: Users,
    title: "Investment Consultation",
    description:
      "Expert guidance to help you make informed real estate investment decisions. We analyze markets, growth corridors, and appreciation potential.",
    features: [
      "Market Analysis",
      "Growth Corridor Insights",
      "ROI Projections",
      "Portfolio Diversification",
      "NRI Investment Support",
      "Tax Planning Guidance",
    ],
  },
  {
    icon: MapPin,
    title: "Site Visits & Tours",
    description:
      "Experience our projects firsthand with complimentary site visits. Our team guides you through every aspect of the property and surrounding area.",
    features: [
      "Free Site Visits",
      "Transportation Arranged",
      "Expert Project Walkthrough",
      "Surrounding Area Tour",
      "Q&A with Sales Team",
      "Documentation Preview",
    ],
  },
  {
    icon: Briefcase,
    title: "Post-Purchase Support",
    description:
      "Our relationship doesn't end at purchase. We provide ongoing support for construction, maintenance, and any queries you may have.",
    features: [
      "Construction Guidance",
      "Architect Referrals",
      "Contractor Network",
      "Maintenance Support",
      "Resale Assistance",
      "Community Updates",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Services - Sungraze Projects | Real Estate Services</title>
        <meta name="description" content="Explore our comprehensive real estate services including residential plots, managed farmland, legal documentation, investment consultation, and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mt-2 mb-6">
              Comprehensive <span className="text-primary">Real Estate Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From finding the perfect plot to post-purchase support, we offer end-to-end 
              services to make your real estate journey seamless and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all hover:shadow-elegant"
              >
                <div className="w-14 h-14 rounded-xl gradient-forest flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-cream" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mt-2">
              How We <span className="text-gold">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your requirements and budget" },
              { step: "02", title: "Shortlist", desc: "Present matching projects and options" },
              { step: "03", title: "Site Visit", desc: "Experience the property firsthand" },
              { step: "04", title: "Documentation", desc: "Seamless registration and handover" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gold text-charcoal flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you achieve your real estate goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
