import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  Heart,
  MapPin,
  ShieldCheck,
  Target,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Every transaction is handled with disciplined documentation, honest guidance, and complete accountability.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear pricing, verified records, and visible due diligence help families invest with confidence.",
  },
  {
    icon: Heart,
    title: "Client care",
    description:
      "We design each experience around trust, clarity, and long-term relationships rather than short-term sales.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "From land selection to project planning, we focus on locations with enduring value and strong fundamentals.",
  },
];

const milestones = [
  {
    year: "2014",
    event: "Sungraze Projects was founded in Bangalore with a vision to simplify secure land ownership.",
  },
  {
    year: "2018",
    event: "The portfolio expanded across Karnataka and Tamil Nadu with a stronger farmland investment focus.",
  },
  {
    year: "2022",
    event: "Managed farmland services were introduced to support buyers seeking both ownership and stewardship.",
  },
  {
    year: "2024",
    event: "More than 500 families had chosen Sungraze for projects built on trust, clarity, and verified growth.",
  },
];

const stats = [
  { value: "10+", label: "Years of real-estate experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "500+", label: "Families served" },
  { value: "2", label: "High-growth states covered" },
];

const advantages = [
  "Near major economic and infrastructure corridors",
  "Verified legal and masterplan compliance",
  "Locations chosen for long-term appreciation potential",
  "Farmland opportunities with strong natural fundamentals",
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - Sungraze Projects | Trusted Real Estate Developer</title>
        <meta
          name="description"
          content="Learn about Sungraze Projects, a trusted real-estate developer helping families and investors access transparent land ownership across Karnataka and Tamil Nadu."
        />
      </Helmet>

      <div className="bg-[#F8F6F2] text-[#111827]">
        <section className="relative isolate overflow-hidden pt-40 md:pt-48 h-125">
          {/* Background image — full bleed */}
          <div className="absolute inset-0">
            <img
              src="/assets/club-house/restaurant-entrance-1.webp"
              alt="Contemporary luxury real-estate architecture"
              className="h-full w-full object-cover object-[70%_center]"
            />
          </div>

          {/* Dark overlay container — mirrors HeroSection's bg-black/60 inner div */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Extra left-side reinforcement so headline never competes with image detail */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,20,18,0.50)_0%,rgba(9,20,18,0.10)_60%,transparent_100%)]" />

          <div className="container relative z-10 px-4 pb-24 md:pb-32 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#0F3D2E] text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-xl">
                Trusted Real Estate Developer
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tighter text-white italic font-serif">
                Building a Brand Around <span className="text-[#D4AF37] not-italic">Clarity, Not Complexity</span>
              </h1>
              <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Sungraze Projects is a trusted land development company helping families and investors access
                transparent, legally secure land ownership across Karnataka and Tamil Nadu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="rounded-full px-8 h-14 font-bold bg-[#D4AF37] text-[#0F3D2E] hover:bg-[#c9a430] border-0"
                  asChild
                >
                  <Link to="/projects">View Our Projects</Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full bg-white/5 border-white/25 text-white backdrop-blur-md hover:bg-white/10 px-8 h-14"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="story" className="border-b border-[#E7E5E4] py-24 md:py-32">
          <div className="container px-4">
            <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div {...fadeUp}>
                <p className="text-sm font-medium tracking-[0.08em] text-[#D4AF37]">Our story</p>
                <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight text-[#111827] md:text-5xl">
                  Building a modern real-estate brand around clarity, not complexity.
                </h2>
                <div className="mt-8 space-y-5 text-base leading-8 text-[#4B5563] md:text-lg">
                  <p>
                    Sungraze Projects began with a simple belief: land ownership should feel grounded, transparent, and
                    professionally guided from the first conversation to final documentation.
                  </p>
                  <p>
                    Over the last decade, we have focused on locations across Karnataka and Tamil Nadu where legal
                    confidence, infrastructure visibility, and long-term value can coexist in a single investment story.
                  </p>
                  <p>
                    Today, our work continues to balance premium opportunity with calm decision-making, helping buyers move
                    forward with certainty rather than pressure.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {milestones.map((item) => (
                    <div
                      key={item.year}
                      className="rounded-[24px] border border-[#E7E5E4] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,61,46,0.06)]"
                    >
                      <p className="font-heading text-2xl text-[#0F3D2E]">{item.year}</p>
                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.event}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="space-y-6">
                <div className="overflow-hidden rounded-[24px] border border-[#E7E5E4] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
                  <div className="overflow-hidden">
                    <img
                      src="/assets/club-house/facility-landscape-view.webp"
                      alt="Sungraze Projects architectural development"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#E7E5E4] bg-[#FBFAF7] p-7 shadow-[0_18px_40px_rgba(15,61,46,0.05)]">
                  <p className="text-sm font-medium tracking-[0.08em] text-[#6B7280]">Founder's perspective</p>
                  <p className="mt-4 font-heading text-2xl leading-tight text-[#111827]">
                    "Trust is built when every detail feels considered before a client ever has to ask."
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-[#6B7280]">
                    <span className="h-px w-10 bg-[#D4AF37]" />
                    Sungraze leadership principle
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[url('/assets/images/background/dark-dott-pattern.png')] bg-repeat bg-[#FFF9F0] py-24 md:py-32 border-y border-black/5">
          {/* Decorative blur */}
          <div className="absolute -bottom-24 -left-24 size-96 bg-primary/5 rounded-full blur-[120px]" />

          {/* Pattern overlay */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <img src="/assets/images/background/patern.png" alt="pattern" className="w-96" />
          </div>
          <div className="container px-4">
            <motion.div {...fadeUp} className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.08em] text-[#D4AF37]">What guides us</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-[#111827] md:text-5xl">
                Principles that keep every project calm, rigorous, and client-led.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#6B7280] md:text-lg">
                Our brand is shaped by restraint: fewer promises, better diligence, and a sharper focus on lasting value.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <motion.article
                  key={value.title}
                  {...fadeUp}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                  className="group rounded-[24px] border border-[#E7E5E4] bg-white p-7 shadow-[0_16px_36px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(15,61,46,0.10)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E7E5E4] bg-[#F8F6F2] text-[#0F3D2E]">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl text-[#111827]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{value.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E7E5E4] bg-white py-24 md:py-32">
          <div className="container px-4">
            <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#D4AF37]">Mission and vision</p>
                <h2 className="mt-4 font-heading text-3xl leading-tight text-[#111827] md:text-5xl">
                  Purpose with architectural discipline.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#E7E5E4] bg-[#FBFAF7] p-8 shadow-[0_18px_40px_rgba(15,61,46,0.05)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F3D2E] text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 font-heading text-2xl text-[#111827]">Our mission</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">
                    To make land ownership more transparent, legally secure, and thoughtfully guided for families and
                    investors who want confidence at every step.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#E7E5E4] bg-[#F6F7F4] p-8 shadow-[0_18px_40px_rgba(15,61,46,0.05)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37] text-[#0F3D2E]">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 font-heading text-2xl text-[#D4AF37]">Our vision</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">
                    To become South India's most trusted premium land brand by combining elegant service, rigorous
                    diligence, and enduring investment quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div {...fadeUp}>
                <p className="text-sm font-medium tracking-[0.08em] text-[#D4AF37]">Regional footprint</p>
                <h2 className="mt-4 font-heading text-3xl leading-tight text-[#111827] md:text-5xl">
                  A focused presence across two high-conviction markets.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#6B7280] md:text-lg">
                  Our projects are positioned where growth potential, accessibility, and compliance visibility support more
                  durable investment decisions.
                </p>

                <div className="mt-10 space-y-6">
                  <FootprintItem
                    title="Karnataka"
                    description="Bangalore, Mysore, Tumkur, and Davangere projects selected for urban adjacency and long-term demand."
                  />
                  <FootprintItem
                    title="Tamil Nadu"
                    description="Hosur, Coimbatore, Chennai, and nearby corridors supported by infrastructure momentum and land value potential."
                  />
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                className="rounded-[24px] border border-[#E7E5E4] bg-white p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] md:p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium property development landscape"
                  className="aspect-[16/10] w-full rounded-[20px] object-cover"
                />

                <div className="mt-8 grid gap-4">
                  {advantages.map((advantage) => (
                    <div
                      key={advantage}
                      className="flex items-start gap-3 border-t border-[#E7E5E4] pt-4 first:border-t-0 first:pt-0"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0F3D2E]" />
                      <p className="text-sm leading-7 text-[#4B5563] md:text-base">{advantage}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F3D2E] py-24 text-white md:py-32">
          <div className="container px-4">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.08em] text-[#D4AF37]">Measured impact</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight md:text-5xl text-white">
                Evidence of a brand built patiently, and built to last.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
                Our numbers are simple by design: they reflect consistency, trust, and disciplined execution over time.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-8 border-t border-white/12 pt-10 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7"
                >
                  <p className="font-heading text-5xl text-[#D4AF37]">{stat.value}</p>
                  <p className="mt-4 max-w-[16rem] text-sm leading-7 text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4">
            <motion.div
              {...fadeUp}
              className="rounded-[24px] border border-[#E7E5E4] bg-white px-6 py-12 shadow-[0_24px_60px_rgba(17,24,39,0.06)] md:px-12 md:py-16"
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="text-sm font-medium tracking-[0.08em] text-[#D4AF37]">Begin the conversation</p>
                  <h2 className="mt-4 max-w-2xl font-heading text-3xl leading-tight text-[#111827] md:text-5xl">
                    If you're looking for a clearer path into premium land ownership, we'd love to help.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">
                    Explore our current portfolio or speak directly with our team for guidance shaped around your goals,
                    timeline, and investment priorities.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Button
                    size="xl"
                    className="h-12 rounded-full bg-[#0F3D2E] px-7 text-sm font-medium text-white hover:bg-[#0c3125]"
                    asChild
                  >
                    <Link to="/projects">View projects</Link>
                  </Button>
                  <Button
                    size="xl"
                    variant="outline"
                    className="h-12 rounded-full border-[#0F3D2E]/15 bg-[#F8F6F2] px-7 text-sm font-medium text-[#0F3D2E] hover:bg-[#f2efe8]"
                    asChild
                  >
                    <Link to="/contact">
                      Contact us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const FootprintItem = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-[24px] border border-[#E7E5E4] bg-white p-6 shadow-[0_14px_34px_rgba(17,24,39,0.04)]">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F8F6F2] text-[#0F3D2E]">
        <MapPin className="h-4 w-4" />
      </div>
      <h3 className="font-heading text-2xl text-[#111827]">{title}</h3>
    </div>
    <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">{description}</p>
  </div>
);

export default About;
