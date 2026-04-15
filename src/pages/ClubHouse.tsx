import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Waves, Music, Utensils, Zap, Users, X, Maximize2 } from "lucide-react";

const CATEGORIES = [
  "All Photos",
  "Reception And Lobby",
  "Rooms",
  "Banquet",
  "Restaurant",
  "Facilities"
];

const Clubhouse = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Photos");

  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    stagger: {
      animate: { transition: { staggerChildren: 0.1 } }
    }
  };

  const galleryItems = [
    // Reception And Lobby
    { src: "/assets/club-house/reception-desk.webp", alt: "Grand Entrance Lobby", category: "Reception And Lobby", span: "md:col-span-2 md:row-span-2" },
    { src: "/assets/club-house/lobby-balcony-view.webp", alt: "Lobby Balcony View", category: "Reception And Lobby", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/restaurant-entrance-1.webp", alt: "Reception Entrance", category: "Reception And Lobby", span: "col-span-1 row-span-1" },

    // Rooms
    { src: "/assets/club-house/room-deluxe-interior.webp", alt: "Deluxe Room Interior", category: "Rooms", span: "md:col-span-1 md:row-span-2" },
    { src: "/assets/club-house/room-premium-double.webp", alt: "Premium Double Room", category: "Rooms", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/room-suite-bedroom.webp", alt: "Suite Bedroom", category: "Rooms", span: "col-span-1 row-span-1" },

    // Banquet
    { src: "/assets/club-house/banquet-boardroom.webp", alt: "Boardroom Banquet", category: "Banquet", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/banquet-conference-hall.webp", alt: "Conference Hall", category: "Banquet", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/banquet-exterior-view.webp", alt: "Banquet Exterior View", category: "Banquet", span: "md:col-span-2 md:row-span-1" },
    { src: "/assets/club-house/banquet-poolside-lounge.webp", alt: "Poolside Banquet Lounge", category: "Banquet", span: "col-span-1 row-span-1" },

    // Restaurant
    { src: "/assets/club-house/restaurant-fine-dining.webp", alt: "Fine Dining Area", category: "Restaurant", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/club-house/restaurant-cafe-interior.webp", alt: "Cafe Interior", category: "Restaurant", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/restaurant-indoor-dining.webp", alt: "Indoor Dining", category: "Restaurant", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/restaurant-terrace-dining.webp", alt: "Terrace Dining", category: "Restaurant", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/restaurant-table-setup.webp", alt: "Table Setup", category: "Restaurant", span: "col-span-1 row-span-1" },

    // Facilities
    { src: "/assets/club-house/facility-landscape-view.webp", alt: "Landscape View", category: "Facilities", span: "md:col-span-1 md:row-span-1" },
    { src: "/assets/club-house/facility-garden-pathway.webp", alt: "Garden Pathway", category: "Facilities", span: "md:col-span-2 md:row-span-1" },
    { src: "/assets/club-house/facility-clubhouse-exterior.webp", alt: "Clubhouse Exterior", category: "Facilities", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/facility-clubhouse-night-view.webp", alt: "Night View", category: "Facilities", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/facility-kids-play-zone.webp", alt: "Kids Play Zone", category: "Facilities", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/facility-childrens-park.webp", alt: "Children's Park", category: "Facilities", span: "col-span-1 row-span-1" },
    { src: "/assets/club-house/facility-billiards-room.webp", alt: "Billiards Room", category: "Facilities", span: "col-span-1 row-span-1" },
  ];

  const filteredItems = activeCategory === "All Photos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const amenities = [
    { icon: Waves, title: "Infinity Pool", desc: "A temperature-controlled pool with landscape views." },
    { icon: Music, title: "Entertainment Zone", desc: "Equipped with mini-theatre and indoor games." },
    { icon: Utensils, title: "Fine Dining", desc: "Multi-cuisine restaurant and cafe experiences." },
    { icon: Zap, title: "Fitness Center", desc: "State-of-the-art gymnasium with professional trainers." },
    { icon: Users, title: "Community Hall", desc: "A spacious banquet hall for social gatherings." },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Luxury Clubhouse Gallery - Sungraze Projects | Resort Style Amenities</title>
        <meta name="description" content="Explore our extensive visual gallery of premium clubhouse facilities. Modern architecture meets tropical luxury in our latest project gallery." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/club-house/facility-clubhouse-exterior.webp"
            alt="Premium Clubhouse"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 text-center text-white mt-20">
          <motion.div {...animations.fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold text-primary-foreground text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-xl">
              Architecture & Lifestyle
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-8 tracking-tighter text-white italic font-serif">
              Symphony of <span className="text-gold not-italic mx-2"> Luxury</span>
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto mb-10 font-light leading-relaxed">
              Inspired by modern tropical design, our clubhouse is an experience curated for the elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="rounded-full px-8 shadow-gold/20 h-14 font-bold" asChild>
                <Link to="/contact">Book an Exclusive Tour</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/10 px-8 h-14" asChild>
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION - High Density Grid */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 tracking-tight uppercase">Visual <span className="text-primary italic font-serif tracking-normal">Gallery</span></h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
              Explore every corner of our architectural masterpiece. Witness the fusion of form and function.
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
                    layoutId="activeCategory"
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

      {/* AMENITIES SECTION */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="initial" whileInView="animate" variants={animations.fadeIn} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 italic">World-Class <span className="text-primary not-italic">Amenities</span></h2>
              <div className="grid gap-6">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <img
                src="/assets/club-house/banquet-poolside-lounge.webp"
                className="rounded-[2.5rem] shadow-2xl relative z-10"
                alt="Clubhouse Lounge"
              />
              <div className="absolute -inset-3 border-2 border-primary/20 rounded-[3rem] z-0 translate-x-2 translate-y-2" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PREVIEW SECTION */}
      <section className="py-24 bg-primary text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10 italic">The Lifestyle Experience</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden bg-black/20 border border-white/10 relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </button>
              </div>
              <img src="/assets/club-house/restaurant-lifestyle-shot.webp" className="w-full h-full object-cover opacity-60" alt="Video Placeholder" />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-16">
                <p className="text-base font-medium">Watch the virtual tour of The Grand Clubhouse</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl md:text-3xl font-heading font-bold mb-6 uppercase tracking-widest text-primary italic">Ready to Experience?</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 font-light">
            Join the exclusive community at Sungraze Projects. Witness the luxury yourself.
          </p>
          <Button size="xl" className="px-10 rounded-full h-14 font-bold" asChild>
            <Link to="/contact">Schedule a Site Visit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Clubhouse;
