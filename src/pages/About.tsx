import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Quote
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

// const PremiumTimeline = ({ milestones }: { milestones: typeof import("./About").milestones }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     return scrollYProgress.on("change", (latest) => {
//       const index = Math.min(
//         milestones.length - 1,
//         Math.floor(latest * milestones.length)
//       );
//       setActiveIndex(index);
//     });
//   }, [scrollYProgress, milestones.length]);

//   return (
//     <div
//       ref={ref}
//       className="relative py-20"
//       style={{ height: `${milestones.length * 60}vh` }}
//     >
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

//         {/* Vertical Progress Line */}
//         <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary-foreground/10 overflow-hidden">
//           <motion.div 
//             className="w-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)]"
//             style={{ 
//               height: "100%", 
//               originY: 0,
//               scaleY: scrollYProgress 
//             }} 
//           />
//         </div>

//         {/* Content Box */}
//         <div className="relative z-10 w-full max-w-4xl px-6">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, x: activeIndex % 2 === 0 ? -50 : 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: activeIndex % 2 === 0 ? 50 : -50 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className={`flex flex-col ${activeIndex % 2 === 0 ? "md:items-start" : "md:items-end"} items-center text-center`}
//             >
//               <div className="relative mb-10">
//                 <div className="w-24 h-24 rounded-[2rem] bg-gold flex items-center justify-center shadow-2xl ring-4 ring-primary/10 rotate-3 group-hover:rotate-6 transition-transform duration-500">
//                   <Calendar className="w-8 h-8 text-primary" />
//                 </div>
//                 <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-primary shadow-lg border-2 border-gold font-heading text-lg">
//                   {activeIndex + 1}
//                 </div>
//               </div>

//               <h3 className="text-5xl font-heading font-bold text-gold mb-6 italic tracking-tighter drop-shadow-md">
//                 {milestones[activeIndex].year}
//               </h3>

//               <div className={`max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-3xl ${activeIndex % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
//                 <p className="text-primary-foreground text-xl leading-relaxed font-light font-serif">
//                   {milestones[activeIndex].event}
//                 </p>
//                 <div className="mt-6 flex items-center gap-3 opacity-60">
//                   <Sparkles className="w-4 h-4 text-gold" />
//                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground">Legacy Milestone</span>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

const About = () => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>About Us - Sungraze Projects | Trusted Real Estate Developer</title>
        <meta name="description" content="Learn about Sungraze Projects - a trusted real estate developer with 10+ years of experience in Karnataka and Tamil Nadu. Our mission, values, and commitment to transparency." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1500"
            alt="Sungraze Projects Mission"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 text-center mb-10">
          <motion.div className="max-w-4xl mx-auto" {...animations.fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold text-primary-foreground text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-xl">
              Transparency & Trust Since 2014
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 tracking-tighter drop-shadow-2xl">
              Building <span className="text-gold italic font-serif">Futures</span> Through Ethical Excellence
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              We started with a single vision: to simplify land ownership and make it 100% legal,
              transparent, and high-growth for every family and investor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="rounded-full px-10 shadow-gold/20 h-14 font-bold" asChild>
                <Link to="/contact">Discuss Your Future</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/10 px-10 h-14" asChild>
                <a href="#story">Our Legacy Story</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <Badge text="The Journey" color="primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-none tracking-tight">
                A Decade of <span className="text-primary italic font-serif">Excellence</span> & Transformation
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                <p>
                  Sungraze Projects was founded in 2014 with a simple yet powerful vision - to
                  make land ownership accessible, transparent, and trustworthy for everyone.
                  What started as a small team passionate about real estate has grown into
                  one of the most trusted names in South India.
                </p>
                <p>
                  Our founder, having witnessed the complexities and uncertainties in land
                  transactions firsthand, set out to create a company that prioritizes
                  customer peace of mind above all else.
                </p>
                <p>
                  Today, with 15+ successful projects and over 500 satisfied families,
                  we continue to uphold the same values of integrity and transparency.
                </p>
              </div>

              <div className="mt-10 p-6 bg-secondary/30 rounded-[2rem] border border-border relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold italic">Founder's Vision</h4>
                    <p className="text-xs text-muted-foreground mt-1">"Trust is earned through actions, not words."</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-3 border-2 border-primary/20 rounded-[2.5rem] -z-10 translate-x-3 translate-y-3" />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200"
                alt="Sungraze Projects Excellence"
                className="rounded-[2rem] shadow-elegant-lg w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-8 -left-8 bg-gold text-primary-foreground p-8 rounded-[2rem] shadow-2xl rotate-[-4deg]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Since</p>
                <p className="text-4xl font-heading font-bold tracking-tighter leading-none">2014</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge text="Our DNA" />
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mt-4 leading-none tracking-tight italic">
              Values That <span className="text-primary not-italic">Define Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/50 backdrop-blur-md p-8 rounded-[2rem] border border-border group hover:bg-primary hover:text-white transition-all duration-500 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500 shadow-inner">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 tracking-tight">{value.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed group-hover:text-white/80 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE IDENTITY */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              className="bg-primary p-12 md:p-16 rounded-[3rem] text-white relative overflow-hidden group border border-white/10"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gold/10 rounded-full blur-[70px] pointer-events-none" />
              <div className="relative z-10">
                <Target className="w-10 h-10 text-gold mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-heading font-bold mb-6 italic tracking-tighter">Our Mission</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed font-light">
                  To democratize land ownership by providing transparent,
                  legally-compliant, and high-quality solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary/30 p-12 md:p-16 rounded-[3rem] border border-border relative overflow-hidden group"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/5 rounded-full blur-[70px] pointer-events-none" />
              <div className="relative z-10">
                <Eye className="w-10 h-10 text-primary mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-heading font-bold mb-6 italic tracking-tighter">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  To become the standard of trust in South India real estate,
                  known for uncompromising integrity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      {/* <section className="bg-primary text-white overflow-hidden">
        <div className="container pt-24 pb-0">
          <div className="text-center max-w-2xl mx-auto mb-16 px-4">
            <Badge text="The Timeline" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-6 tracking-tighter leading-none italic">
              Milestones <span className="text-gold">Achieved</span>
            </h2>
          </div>
        </div>
        <PremiumTimeline milestones={milestones} />
      </section> */}

      {/* REGIONAL FOOTPRINT */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <Badge text="Our Presence" color="primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 tracking-tight leading-none italic">
                Strategically Serving <span className="text-primary not-italic">South India</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-10">
                We operate across Karnataka and Tamil Nadu, focusing on high-growth areas.
              </p>

              <div className="space-y-8">
                <FootprintItem
                  state="Karnataka"
                  locations="Bangalore, Mysore, Tumkur"
                />
                <FootprintItem
                  state="Tamil Nadu"
                  locations="Hosur, Coimbatore, Chennai"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-secondary/30 p-12 md:p-14 rounded-[3rem] border border-border relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MapPin className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-8 tracking-tighter text-primary">Regional Advantages</h3>
              <ul className="space-y-4">
                {[
                  "Near Global Tech Hubs",
                  "Verified Masterplan Compliance",
                  "Rich Soil Quality & Water Security",
                  "High Appreciation Potential",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* STATS SECTION */}
      <section className="py-14 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2 group-hover:scale-105 transition-transform duration-700 tracking-tighter drop-shadow-sm">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-primary-foreground font-bold opacity-70 leading-relaxed max-w-[100px] mx-auto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden group border border-white/5 shadow-3xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic tracking-tighter leading-none">Ready to Build Your <span className="text-gold">Legacy</span>?</h2>
              <p className="text-base md:text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                Our legacy is built on the trust of over 500 happy families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" className="px-12 rounded-full h-14 shadow-2xl bg-gold text-primary hover:bg-gold/90 text-base font-bold" asChild>
                  <Link to="/contact">Get Expert Guidance</Link>
                </Button>
                <Button variant="outline" size="xl" className="px-12 rounded-full h-14 border-white/30 text-secondary bg-white/15 backdrop-blur-md hover:bg-white/10" asChild>
                  <Link to="/projects">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Badge = ({ text, color = "gold" }: { text: string; color?: "gold" | "primary" }) => (
  <span className={`inline-block px-5 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-sm shadow-black/5 ${color === "gold"
    ? "bg-gold/10 border-gold text-gold"
    : "bg-primary/10 border-primary text-primary"
    }`}>
    {text}
  </span>
);

const FootprintItem = ({ state, locations }: { state: string; locations: string }) => (
  <div className="group cursor-default">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
        <MapPin className="w-4 h-4" />
      </div>
      <h4 className="text-xl font-heading font-bold">{state}</h4>
    </div>
    <p className="text-muted-foreground text-base leading-relaxed font-light pl-11">
      {locations}
    </p>
  </div>
);

export default About;
