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

      {/* VALUES GRID - OUR DNA */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/3 via-transparent to-transparent rounded-full" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 to-primary/10 border border-gold/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Our DNA</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-none tracking-tight">
              Values That <span className="text-primary italic font-serif bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Define Us</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Every decision, every project, every relationship is guided by these core principles that have shaped our decade-long journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl group-hover:shadow-gold/20 transition-all duration-700" />

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <value.icon className="w-8 h-8 text-primary group-hover:text-gold transition-colors duration-500" />
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow group-hover:text-foreground/80 transition-colors duration-500">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-gold to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE IDENTITY - MISSION & VISION */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 backdrop-blur-sm mb-8">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Core Identity</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-none tracking-tight">
              Our <span className="text-gold italic font-serif bg-gradient-to-r from-gold to-primary bg-clip-text text-transparent">Purpose</span> & Direction
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              What drives us forward and where we're headed as a company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-gold/10 via-white/80 to-gold/5 backdrop-blur-xl p-12 lg:p-16 rounded-[3rem] border border-gold/20 shadow-2xl group-hover:shadow-gold/30 transition-all duration-700">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground tracking-tight">Our Mission</h3>
                    <div className="w-12 h-1 bg-gold rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  To democratize land ownership by providing transparent, legally-compliant, and high-quality solutions that empower families and investors to build their future with confidence and peace of mind.
                </p>
                <div className="mt-8 flex items-center gap-2 text-gold font-semibold">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <span className="text-sm uppercase tracking-[0.1em]">Guiding Every Step</span>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-primary/10 via-white/80 to-primary/5 backdrop-blur-xl p-12 lg:p-16 rounded-[3rem] border border-primary/20 shadow-2xl group-hover:shadow-primary/30 transition-all duration-700">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground tracking-tight">Our Vision</h3>
                    <div className="w-12 h-1 bg-primary rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  To become the standard of trust in South India real estate, known for uncompromising integrity, innovative solutions, and creating lasting value for communities and investors alike.
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-semibold">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <span className="text-sm uppercase tracking-[0.1em]">Leading the Future</span>
                </div>
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
      <section className="py-32 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 backdrop-blur-sm mb-8">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Presence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 tracking-tight leading-none">
                Strategically Serving <span className="text-gold italic font-serif bg-gradient-to-r from-gold to-primary bg-clip-text text-transparent">South India</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-12">
                We operate across Karnataka and Tamil Nadu, focusing on high-growth areas with verified infrastructure and development potential.
              </p>

              <div className="space-y-8">
                <FootprintItem
                  state="Karnataka"
                  locations="Bangalore, Mysore, Tumkur, Davangere"
                  projects="8+ Projects"
                />
                <FootprintItem
                  state="Tamil Nadu"
                  locations="Hosur, Coimbatore, Chennai, Siruguppa"
                  projects="7+ Projects"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gold/10 to-transparent rounded-[3rem] blur-xl" />
              <div className="relative bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl p-12 lg:p-14 rounded-[3rem] border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold tracking-tight">Regional Advantages</h3>
                </div>

                <ul className="space-y-6">
                  {[
                    { title: "Near Global Tech Hubs", desc: "Proximity to Bangalore & Chennai tech corridors" },
                    { title: "Verified Masterplan Compliance", desc: "All projects follow government guidelines" },
                    { title: "Rich Soil Quality & Water Security", desc: "Prime agricultural land with assured irrigation" },
                    { title: "High Appreciation Potential", desc: "Strategic locations with growth trajectory" },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* STATS SECTION */}
      <section className="py-32 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/10 via-transparent to-transparent rounded-full" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-none tracking-tight">
              Numbers That <span className="text-gold italic font-serif">Matter</span>
            </h2>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              A decade of consistent growth, trust, and excellence in numbers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="text-center group cursor-default relative"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-[2rem] p-8 group-hover:bg-white/15 transition-all duration-500 shadow-2xl group-hover:shadow-gold/20">
                  <div className="text-5xl md:text-6xl font-heading font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-700 tracking-tighter drop-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/80 font-bold leading-relaxed group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </div>

                  {/* Animated accent line */}
                  <div className="mt-6 mx-auto w-8 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
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

const FootprintItem = ({ state, locations, projects }: { state: string; locations: string; projects: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="group cursor-default"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
        <MapPin className="w-6 h-6 text-primary group-hover:text-gold transition-colors duration-500" />
      </div>
      <div>
        <h4 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-500">{state}</h4>
        <div className="text-sm font-semibold text-gold uppercase tracking-[0.1em]">{projects}</div>
      </div>
    </div>
    <p className="text-muted-foreground text-base leading-relaxed font-light pl-16 group-hover:text-foreground/80 transition-colors duration-500">
      {locations}
    </p>
  </motion.div>
);

export default About;
