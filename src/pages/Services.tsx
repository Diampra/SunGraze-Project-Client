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
    title: "Premium Residential Plots",
    description:
      "Carefully curated residential layouts in high-growth corridors of Bangalore, Hosur, and surrounding regions.",
    link: "/projects?type=residential",
    image: "/images/services/residential.jpg",
  },
  {
    icon: Trees,
    title: "Managed Farmland Investments",
    description:
      "Own productive agricultural land while our experts manage operations and ensure long-term sustainability.",
    link: "/projects?type=farmland",
    image: "/images/services/farmland.jpg",
  },
  {
    icon: FileCheck,
    title: "Legal & Documentation Support",
    description:
      "Complete end-to-end assistance including title verification, registration, and compliance.",
    link: "/contact",
    image: "/images/services/legal.jpg",
  },
  {
    icon: Users,
    title: "Investment Advisory",
    description:
      "Strategic guidance based on market trends, appreciation corridors, and ROI potential.",
    link: "/contact",
    image: "/images/services/advisory.jpg",
  },
  {
    icon: MapPin,
    title: "Exclusive Site Visits",
    description:
      "Private guided tours with complete project walkthrough and documentation preview.",
    link: "/contact",
    image: "/images/services/sitevisit.jpg",
  },
  {
    icon: Briefcase,
    title: "Post-Purchase Assistance",
    description:
      "Ongoing support including construction referrals, resale guidance, and portfolio management.",
    link: "/contact",
    image: "/images/services/support.jpg",
  },
];


const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Real Estate Services in Karnataka & Tamil Nadu | Sungraze
        </title>
        <meta
          name="description"
          content="Premium residential plots, managed farmland investments, legal documentation, and real estate advisory services by Sungraze."
        />
        <link rel="canonical" href="/services" />
      </Helmet>

      {/* HERO */}
      <section className="pt-36 pb-24 bg-primary">
        <div className="container max-w-4xl text-center">
          <span className="uppercase tracking-widest text-gold text-sm">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-heading font-semibold mt-6 leading-tight text-primary-foreground">
            Refined Real Estate Solutions
            <br />
            Built on Trust & Transparency
          </h1>

          <div className="w-20 h-1 bg-gold mx-auto my-8 rounded-full" />

          <p className="text-primary-foreground text-lg leading-relaxed">
            From land acquisition to post-purchase support, Sungraze delivers
            seamless, legally verified and strategically positioned real estate
            opportunities.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      {/* <section className="py-12 bg-background border-y">
        <div className="container grid md:grid-cols-4 gap-6 text-center text-sm">
          <div className="font-medium text-foreground">
            10+ Years Market Experience
          </div>
          <div className="font-medium text-foreground">
            1000+ Happy Investors
          </div>
          <div className="font-medium text-foreground">
            BMRDA / DTCP Approved
          </div>
          <div className="font-medium text-foreground">
            End-to-End Legal Support
          </div>
        </div>
      </section> */}

      {/* SERVICES GRID */}
      <section className="py-28 bg-background">
        <div className="container max-w-6xl space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
          
            return (
              <div
                key={service.title}
                className="grid md:grid-cols-2 gap-16 items-center"
              >
                {/* IMAGE */}
                <div className={isEven ? "" : "md:order-2"}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                  </div>
                </div>
            
                {/* TEXT */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold">
                      {service.title}
                    </h3>
                  </div>
            
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
            
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
        
      {/* PROCESS */}
      {/* <section className="py-24 bg-secondary/30">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-16 text-foreground">
            Our Investment Process
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              "Consultation",
              "Project Shortlisting",
              "Private Site Visit",
              "Documentation & Registration",
            ].map((step, i) => (
              <div key={step}>
                <div className="text-gold text-3xl font-bold mb-4">
                  0{i + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-12 text-foreground">
            Why Choose Sungraze
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              "Prime Growth Locations",
              "Transparent Pricing",
              "Structured Legal Framework",
              "Dedicated Relationship Managers",
              "Flexible Investment Options",
              "Long-Term Wealth Focus",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle className="text-gold mt-1" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Begin Your Investment Journey
          </h2>

          <p className="mb-8 opacity-90">
            Connect with our advisors to explore curated real estate
            opportunities aligned with your long-term vision.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>

            <Button size="lg" variant="secondary" asChild>
              <Link to="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
