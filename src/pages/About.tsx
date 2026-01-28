import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  MapPin, 
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Integrity",
    description: "We conduct business with complete honesty and transparency in all our dealings.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear documentation, fair pricing, and no hidden charges - ever.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction and trust are at the heart of everything we do.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on the quality of land, documentation, or service.",
  },
];

const milestones = [
  { year: "2014", event: "Sungraze Projects founded in Bangalore" },
  { year: "2016", event: "First residential project launched - 100+ plots sold" },
  { year: "2018", event: "Expanded to Tamil Nadu with farmland projects" },
  { year: "2020", event: "Crossed 300+ happy customers milestone" },
  { year: "2022", event: "Launched managed farmland vertical" },
  { year: "2024", event: "15+ projects across 2 states, 500+ families served" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "500+", label: "Happy Families" },
  { value: "2", label: "States Coverage" },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - Sungraze Projects | Trusted Real Estate Developer</title>
        <meta name="description" content="Learn about Sungraze Projects - a trusted real estate developer with 10+ years of experience in Karnataka and Tamil Nadu. Our mission, values, and commitment to transparency." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              About Sungraze
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mt-2 mb-6">
              Building Trust Through{" "}
              <span className="text-primary">Transparency</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over a decade, Sungraze Projects has been helping families and investors 
              find their perfect piece of land. Our commitment to legal compliance, transparent 
              dealings, and customer satisfaction sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-6">
                A Decade of <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sungraze Projects was founded in 2014 with a simple yet powerful vision - to 
                make land ownership accessible, transparent, and trustworthy for everyone. 
                What started as a small team passionate about real estate has grown into 
                one of the most trusted names in Karnataka and Tamil Nadu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our founder, having witnessed the complexities and uncertainties in land 
                transactions firsthand, set out to create a company that prioritizes 
                customer peace of mind above all else. Every project we undertake goes 
                through rigorous legal verification, ensuring clear titles and proper 
                government approvals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, with 15+ successful projects and over 500 satisfied customers, 
                we continue to uphold the same values that we started with - integrity, 
                transparency, and unwavering commitment to quality.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    Founder's Message
                  </p>
                  <p className="text-muted-foreground text-sm">
                    "Trust is earned through actions, not words."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Sungraze Projects team"
                className="rounded-2xl shadow-elegant-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-charcoal p-6 rounded-2xl shadow-gold">
                <p className="font-heading font-bold text-3xl">Since</p>
                <p className="font-heading font-bold text-4xl">2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elegant">
              <div className="w-14 h-14 rounded-xl gradient-forest flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize land ownership by providing transparent, legally-compliant, 
                and high-quality real estate solutions that help families build their dreams 
                and investors grow their wealth sustainably.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elegant">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become South India's most trusted real estate company, known for 
                uncompromising integrity, innovative projects, and creating lasting value 
                for all our stakeholders - customers, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
              What We <span className="text-primary">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mt-2">
              Milestones <span className="text-gold">Achieved</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-charcoal" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-foreground/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-gold font-heading font-bold text-xl">{milestone.year}</p>
                  <p className="text-primary-foreground/80 mt-1">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Our Coverage
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-6">
                Projects Across <span className="text-primary">South India</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We operate across Karnataka and Tamil Nadu, strategically selecting locations 
                with high growth potential, excellent connectivity, and strong infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Karnataka</h4>
                    <p className="text-muted-foreground text-sm">
                      Bangalore (Devanahalli, Electronic City), Mysore, Tumkur
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Tamil Nadu</h4>
                    <p className="text-muted-foreground text-sm">
                      Hosur, Coimbatore (Pollachi), Chennai (Outskirts)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-10">
              <h3 className="font-heading text-xl text-foreground mb-6">
                Why These Locations?
              </h3>
              <ul className="space-y-4">
                {[
                  "Proximity to IT hubs and industrial zones",
                  "Excellent road and airport connectivity",
                  "Government-backed infrastructure development",
                  "High appreciation potential",
                  "Growing demand for residential spaces",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you find the perfect land investment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
