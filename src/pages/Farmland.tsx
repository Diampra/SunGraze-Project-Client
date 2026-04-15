import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Droplets, Leaf, ShieldCheck, TrendingUp, SunMedium, X, Maximize2 } from "lucide-react";
import farmland1 from "@/assets/farmland-1.png";
import farmland2 from "@/assets/farmland-2.png";
import farmlandAerial from "@/assets/farmland-aerial.png";

const CATEGORIES = [
  "All Photos",
  "Aerial View",
  "Plantations",
  "Living Area",
  "Water Bodies",
  "Activities"
];

const Farmland = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Photos");

  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const galleryItems = [
    // Aerial View
    { src: farmlandAerial, alt: "Breathtaking Aerial Landscape", category: "Aerial View", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000", alt: "Vast Horizons", category: "Aerial View", span: "col-span-1 row-span-1" },

    // Plantations
    { src: farmland1, alt: "Sustainable Mango Grove", category: "Plantations", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000", alt: "Organic Farming Rows", category: "Plantations", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000", alt: "Harvest Ready Fruits", category: "Plantations", span: "col-span-1 row-span-1" },

    // Living Area
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000", alt: "Eco-Luxe Farmhouse", category: "Living Area", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&q=80&w=1000", alt: "Serene Morning View", category: "Living Area", span: "col-span-1 row-span-1" },

    // Water Bodies
    { src: farmland2, alt: "Smart Irrigation Systems", category: "Water Bodies", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000", alt: "Natural Pond Ecosystem", category: "Water Bodies", span: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1000", alt: "Lakeside Serenity", category: "Water Bodies", span: "col-span-1 row-span-1" },

    // Activities
    { src: "https://images.unsplash.com/photo-1495107333217-64667104d9b7?auto=format&fit=crop&q=80&w=1000", alt: "Community Harvesting", category: "Activities", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1523348830342-d660a4032dfa?auto=format&fit=crop&q=80&w=1000", alt: "Nature Guided Tours", category: "Activities", span: "col-span-1 row-span-1" },
  ];

  const filteredItems = activeCategory === "All Photos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const experienceItems = [
    {
      title: "Sustainable Plantations",
      desc: "Managed mango, coconut and mixed fruit plantations.",
      icon: TreePine,
      image: farmland1
    },
    {
      title: "Smart Irrigation",
      desc: "Advanced drip irrigation systems for water efficiency.",
      icon: Droplets,
      image: farmland2
    },
    {
      title: "Weekend Getaway",
      desc: "Your own private eco-friendly farmhouse.",
      icon: SunMedium,
      image: farmlandAerial
    }
  ];

  const features = [
    { icon: Leaf, title: "100% Organic", desc: "No chemicals, just nature's way." },
    { icon: ShieldCheck, title: "Fully Managed", desc: "Expert team handles maintenance & security." },
    { icon: TrendingUp, title: "High Appreciation", desc: "Strategic locations for wealth growth." },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Managed Farmland - Sungraze Projects | Sustainable Agriculture Investments</title>
        <meta name="description" content="Invest in premium managed farmland across Karnataka and Tamil Nadu. Sustainable plantations, 24/7 maintenance, and high appreciation potential." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={farmlandAerial}
            alt="Managed Farmland"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 text-center my-10">
          <motion.div className="max-w-2xl mx-auto" {...animations.fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold text-primary-foreground text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-xl">
              Nature-First Investment
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tighter leading-none italic">
              A Sustainable <span className="text-gold not-italic font-serif">Legacy</span> for the Future
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-lg mx-auto font-light">
              Experience the joy of organic farming with the security
              of managed assets. Your paradise awaits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="xl" className="rounded-full px-10 shadow-gold/20 h-14 font-bold" asChild>
                <Link to="/contact">Request Brochure <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/10 px-10 h-14" asChild>
                <a href="#gallery">Explore Journey</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="container overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatItem value="500+" label="Acres Developed" />
            <StatItem value="100%" label="Legal Clearance" />
            <StatItem value="10,000+" label="Trees Planted" />
            <StatItem value="15+" label="Locations" />
          </div>
        </div>
      </section>

      {/* GALLERY SECTION - Categorized Grid */}
      <section id="gallery" className="py-24 bg-[url('/assets/images/background/dark-dott-pattern.png')] bg-repeat bg-[#FFF9F0]">
        <div className="container">
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 tracking-tight uppercase">Visual <span className="text-primary italic font-serif lowercase tracking-normal">Journey</span></h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
              Witness the transformation from virgin soil to a thriving ecosystem.
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 px-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-2 py-1 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === category
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategoryFarmland"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.src + idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-[2rem] cursor-pointer ${item.span}`}
                  onClick={() => setSelectedImage(galleryItems.indexOf(item))}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-px w-6 bg-gold" />
                      <p className="text-gold text-[9px] font-bold uppercase tracking-widest">{item.category}</p>
                    </div>
                    <h3 className="text-white text-lg font-bold font-heading leading-tight">{item.alt}</h3>
                    <button className="mt-3 flex items-center gap-2 text-white/60 text-[9px] hover:text-white uppercase tracking-widest font-bold">
                      <Maximize2 className="w-3 h-3" /> View Fullscreen
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-[110]">
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-gold font-bold uppercase text-[10px] mb-2 tracking-widest">{galleryItems[selectedImage].category}</p>
                <h3 className="text-white text-xl font-bold font-heading">{galleryItems[selectedImage].alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 italic">The Managed <span className="text-primary not-italic font-serif lowercase tracking-normal">Experience</span></h2>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                "Own the farm, leave the farming to us."
              </p>
            </div>
            <Link to="/projects" className="text-primary font-bold flex items-center gap-2 hover:underline tracking-tight uppercase text-xs">
              View Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-24">
            {experienceItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 px-4 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gold flex items-center justify-center rounded-2xl shadow-xl z-20 text-white group-hover:rotate-12 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-widest py-1 border-b-2 border-gold/30">0{idx + 1} // Core Pillar</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tighter">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <ul className="space-y-4 pt-4">
                    {["Clear Titles", "Managed Maintenance", "High Appreciation"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-2 h-2 rounded-full bg-gold" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABLE PROSPERITY - REDESIGN */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-5 mix-blend-overlay" />
        <div className="absolute -top-24 -left-24 size-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 size-96 bg-accent/10 rounded-full blur-[120px]" />

        <div className="container relative z-10 px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                Our Commitment
              </span>
              <h2 className="text-4xl md:text-6xl text-white font-heading font-bold mb-8 tracking-tighter leading-tight">
                Sustainable <span className="text-accent italic font-serif">Prosperity</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
              <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                We don't just sell land; we build self-sustaining ecosystems that thrive for generations, ensuring your legacy grows with nature.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Background Number */}
                <div className="absolute -top-10 -right-4 text-9xl font-black text-white/5 pointer-events-none select-none italic">
                  0{idx + 1}
                </div>

                <div className="h-full bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-700 relative z-10 shadow-2xl overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                    <f.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-6 text-white tracking-tight group-hover:text-accent transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed font-light group-hover:text-white/80 transition-colors">
                    {f.desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="bg-secondary/30 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic tracking-tighter leading-none">Ready to <span className="text-primary italic">Plant</span> Roots?</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                Join 500+ happy farmers who have found prosperity with Sungraze Projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" className="px-12 rounded-full h-14 shadow-2xl-gold text-base font-bold" asChild>
                  <Link to="/contact">Schedule Site Visit</Link>
                </Button>
                <Button variant="outline" size="xl" className="px-12 rounded-full h-14 border-primary/30 text-base shadow-sm" asChild>
                  <Link to="/projects">Discovery Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Badge = ({ text }: { text: string }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
    {text}
  </span>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center group cursor-default">
    <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-700 tracking-tighter drop-shadow-sm">{value}</div>
    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold opacity-80">{label}</div>
  </div>
);

export default Farmland;
