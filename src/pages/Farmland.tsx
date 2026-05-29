import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Leaf, ShieldCheck, TrendingUp, X, Maximize2,
  MapPin, Phone, Mail, TreePine, Droplets, Home, Fence,
  Zap, Users, Heart, Building2
} from "lucide-react";

// ─── Image Assets ──────────────────────────────────────────────────────────────
const HERO_BG        = "/assets/images/farmland/aerial-view-resort-pool.jpg";
const GALLERY_1      = "/assets/images/farmland/farmland-orchard-view.png";
const GALLERY_2      = "/assets/images/farmland/cycling-trail-handlebar-view.jpg";
const GALLERY_3      = "/assets/images/farmland/resort-clubhouse-water-feature.jpg";
const GALLERY_4      = "/assets/images/farmland/drip-irrigation-trees.jpg";
const GALLERY_5      = "/assets/images/farmland/resort-reception-pathway.jpg";
const GALLERY_6      = "/assets/images/farmland/young-plantation-saplings.jpg";
const GALLERY_7      = "/assets/images/farmland/dense-timber-plantation.jpg";
const GALLERY_8      = "/assets/images/farmland/local-farming-culture.jpg";
const GALLERY_9      = "/assets/images/farmland/mature-mango-tree.jpg";
const SPA_IMG        = "/assets/images/farmland/amenity-mud-bath-spa.jpg";
const CRICKET_IMG    = "/assets/images/farmland/amenity-sports-cricket-net.jpg";
const PLOT_1         = "/assets/images/farmland/aerial-surrounding-landscape.jpeg";
const PLOT_2         = "/assets/images/farmland/aerial-plot-demarcation.jpeg";
const PLOT_3         = "/assets/images/farmland/farmhouse-cottage-exterior.jpeg";
const LOCATION_IMG   = "/assets/images/farmland/property-entrance-pathway.jpg";
const CTA_BG         = "/assets/images/farmland/farmhouse-cottage-exterior.jpeg";

// ─── Gallery Categories ────────────────────────────────────────────────────────
const CATEGORIES = ["All Photos", "Plantations", "Amenities", "Aerial View"];

// ─── Project Highlights ────────────────────────────────────────────────────────
const highlights = [
  { icon: Home,      text: "Ideal for Farmhouse Development" },
  { icon: MapPin,    text: "60 Minutes Drive from Silk Board, Bangalore" },
  { icon: TreePine,  text: "Fertile land laden with Teak, Silver Oak & assorted fruit-bearing trees" },
  { icon: Droplets,  text: "Drip irrigation facility across all plots" },
  { icon: Fence,     text: "Motorable roads all over the project" },
  { icon: Building2, text: "Construct your own farm villa on your plot" },
  { icon: Zap,       text: "Water & electricity connections provided" },
  { icon: Users,     text: "Gated community with 24/7 security" },
  { icon: Heart,     text: "Naturopathy Center & Spiritual Retreat" },
  { icon: TrendingUp,text: "Good returns on your investment" },
];

const Farmland = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotInterest: "Estate Plot I (10,000 sq.ft)"
  });

  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  };

  const galleryItems = [
    { src: GALLERY_1, alt: "Lush Managed Mango & Mixed Fruit Orchard",      category: "Plantations",  span: "md:col-span-8 aspect-[16/9]" },
    { src: GALLERY_2, alt: "Scenic Cycling Trail & Nature Pathway",          category: "Amenities",    span: "md:col-span-4 aspect-square md:aspect-auto" },
    { src: GALLERY_3, alt: "Resort Clubhouse & Landscape Water Feature",     category: "Amenities",    span: "md:col-span-4 aspect-square md:aspect-auto" },
    { src: GALLERY_4, alt: "Smart Drip Irrigation System in Action",         category: "Plantations",  span: "md:col-span-8 aspect-[16/9]" },
    { src: GALLERY_5, alt: "Resort Reception Pathway & Landscaping",         category: "Amenities",    span: "md:col-span-4 aspect-square" },
    { src: GALLERY_6, alt: "Young Saplings Plantation Row",                  category: "Plantations",  span: "md:col-span-4 aspect-square" },
    { src: GALLERY_7, alt: "Dense Timber Plantation Growth",                 category: "Plantations",  span: "md:col-span-4 aspect-square" },
    { src: GALLERY_8, alt: "Traditional Local Farming Culture",              category: "Plantations",  span: "md:col-span-6 aspect-video" },
    { src: GALLERY_9, alt: "Mature Mango Trees & Canopy",                   category: "Plantations",  span: "md:col-span-6 aspect-video" },
    { src: PLOT_1,    alt: "Aerial Surrounding Landscape View",              category: "Aerial View",  span: "md:col-span-6 aspect-video" },
    { src: PLOT_2,    alt: "Aerial Plot Demarcation Layout",                 category: "Aerial View",  span: "md:col-span-6 aspect-video" },
  ];

  const filteredItems = activeCategory === "All Photos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will get back to you about ${formData.plotInterest} shortly.`);
  };

  return (
    <Layout>
      <Helmet>
        <title>Farmland For Sale Near Bangalore – Sungraze Farms</title>
        <meta name="description" content="Premium farm plots for sale near Hosur & Bangalore. Sungraze Farms offers 10,000–15,000 sq.ft managed farmland plots from ₹650/sq.ft. Booking open — limited inventory." />
      </Helmet>

      {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="Aerial Farmland View – Sungraze Farms"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 text-center text-white mt-20">
          <motion.div {...animations.fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold text-primary-foreground text-[10px] font-bold mb-6 uppercase tracking-[0.2em] shadow-xl">
              Booking Open · Limited Inventory
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tighter text-white italic font-serif">
              Sungraze Farms — <span className="text-gold not-italic">Let Nature Rejuvenate Your Life</span>
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
              Premium farm plots near Hosur &amp; Bangalore. Plot sizes 10,000 – 15,000 sq.ft across 200 Acres.
              Managed by Sungraze Group, with Trishvam Symphony Resort on campus.
            </p>
            <p className="text-gold font-bold text-lg mb-10 tracking-wider">Price starts from ₹650 per Sq.Ft.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="rounded-full px-8 shadow-gold/20 h-14 font-bold" asChild>
                <a href="#inquiry">Enquire Now</a>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/10 px-8 h-14" asChild>
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-[#012d1d] py-12 text-white border-y border-gold/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
            {[
              { value: "200", unit: "Acres", label: "Total Land" },
              { value: "10–15k", unit: "sq.ft", label: "Plot Sizes" },
              { value: "₹650", unit: "/sq.ft", label: "Price Starts From" },
              { value: "100%", unit: "", label: "Legal Clearance" },
            ].map(({ value, unit, label }) => (
              <div key={label}>
                <div className="font-heading text-3xl md:text-4xl text-gold font-bold">
                  {value}<span className="text-lg text-gold/70 ml-1">{unit}</span>
                </div>
                <div className="text-[12px] tracking-[0.15em] font-bold text-white/60 uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / OVERVIEW ─────────────────────────────────────────────────── */}
      <section id="overview" className="py-24 md:py-32 bg-[#FFF9F0] text-[#012d1d]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">About the Project</span>
              <h2 className="font-heading italic text-4xl md:text-5xl text-[#012d1d]">
                Sungraze Farms — <br />By Sungraze Group
              </h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Sungraze Farms welcomes you for your destiny at nature's best. Our belief in nature is our
                strength — the concept of this project is based on the same lines. We bring you close to nature.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Imagine owning a farm plot that gives you a <strong>weekend escape, passive income, and long-term
                appreciation</strong> — all without the daily hassle of farming. Sungraze Farms offers premium
                farmland near Bangalore and farm plots for sale near Hosur, designed for investors, second-home
                buyers, and families seeking a slow-life weekend retreat.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                We combine sustainable farming practices, plantation development, and professional farm maintenance
                services so you can enjoy the benefits of agricultural land without the operational burden.
              </p>
              <Button className="rounded-full px-8 h-12 font-bold" asChild>
                <a href="#inquiry">
                  Register Your Interest <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src={GALLERY_1}
                  alt="Sungraze Farms Orchard View"
                  className="w-full rounded-[2.5rem] shadow-2xl aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#012d1d] text-white px-8 py-5 rounded-2xl shadow-xl">
                  <div className="text-gold font-bold text-2xl font-heading">200 Acres</div>
                  <div className="text-white/60 text-xs tracking-widest uppercase mt-1">Prime Farmland</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROJECT HIGHLIGHTS ───────────────────────────────────────────────── */}
      <section id="highlights" className="py-24 bg-[#f3ede4] relative overflow-hidden text-[#012d1d]">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1B4332]/5 rounded-full blur-[100px]" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">Insight of the Project</span>
            <h2 className="font-heading italic text-4xl md:text-5xl text-[#012d1d] mt-4">
              Your deepest roots are in nature
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
              No matter who you are, where you live, or what kind of life you lead — you remain irrevocably
              linked with the rest of creation. Our belief in nature is our strength.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#fff9f0]/80 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#012d1d] text-gold rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-sans text-sm font-semibold text-[#012d1d] leading-snug mt-1">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGED EXPERIENCE ───────────────────────────────────────────────── */}
      <section className="py-24 space-y-32 bg-[#FFF9F0] text-[#012d1d]">
        {/* Block 1 — Naturopathy / Organic Spa */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={SPA_IMG}
              alt="Naturopathy Center & Organic Spa"
              className="w-full rounded-[2.5rem] shadow-xl aspect-[4/3] object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">01. Naturopathy Center</span>
            <h3 className="font-heading italic text-4xl md:text-5xl text-[#012d1d]">Nurtured by Nature</h3>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Unwind and rejuvenate at our holistic Naturopathy Center and Spiritual Retreat — traditional mud
              baths, natural wellness therapies, and yoga spaces nestled amidst dense, clean plantations.
            </p>
            <ul className="space-y-4">
              {["Natural Therapeutic Mud Baths", "Holistic Well-being & Rejuvenation", "Spiritual Retreat Center"].map(item => (
                <li key={item} className="flex items-center gap-3 font-sans text-[#012d1d] font-semibold">
                  <span className="h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Block 2 — Sports & Recreation */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={CRICKET_IMG}
              alt="Sports & Recreation – Cricket Net"
              className="w-full rounded-[2.5rem] shadow-xl aspect-[4/3] object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">02. Sports & Recreation</span>
            <h3 className="font-heading italic text-4xl md:text-5xl text-[#012d1d]">Active Living</h3>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Stay active and enjoy premium amenities, including professional cricket practice nets, Club House
              facilities, and multipurpose leisure courts beautifully integrated into the landscape.
            </p>
            <ul className="space-y-4">
              {["Premium Club House", "Professional Cricket Practice Nets", "Outdoor Leisure & Fitness Areas"].map(item => (
                <li key={item} className="flex items-center gap-3 font-sans text-[#012d1d] font-semibold">
                  <span className="h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY SECTION ──────────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 md:py-32 bg-[#FFF9F0] text-[#012d1d]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">Gallery</span>
              <h2 className="font-heading italic text-4xl md:text-5xl text-[#012d1d] mt-2">Shot at Location</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-sans text-xs tracking-wider font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#012d1d] text-white"
                      : "bg-[#ede7df] text-[#012d1d] hover:bg-[#e7e2d9]"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer ${item.span}`}
                  onClick={() => setSelectedImage(galleryItems.indexOf(item))}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                    <h3 className="text-white text-lg font-bold font-heading">{item.alt}</h3>
                    <div className="mt-3 flex items-center gap-2 text-white/70 text-xs">
                      <Maximize2 className="w-4 h-4" /> View Fullscreen
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────────── */}
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
                <p className="text-gold font-bold uppercase text-xs mb-2 tracking-widest">{galleryItems[selectedImage].category}</p>
                <h3 className="text-white text-xl font-bold font-heading">{galleryItems[selectedImage].alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SUSTAINABLE PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#f3ede4] relative overflow-hidden text-[#012d1d]">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1B4332]/5 rounded-full blur-[100px]" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
          <div className="text-center mb-20">
            <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">Our Philosophy</span>
            <h2 className="font-heading italic text-4xl md:text-5xl text-[#012d1d] mt-4">Sustainable Prosperity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Leaf,        color: "bg-[#1b4332]", title: "100% Organic",      desc: "Pioneering chemical-free cultivation that enriches the soil and ensures pure, nutrient-dense yields for generations." },
              { Icon: ShieldCheck, color: "bg-gold",      title: "Fully Managed",     desc: "Expert farm hands and horticulturalists maintain your property, so you can enjoy the serenity without the labour." },
              { Icon: TrendingUp,  color: "bg-[#1b4332]", title: "High Appreciation", desc: "Located near Hosur's strategic growth corridor, offering robust land value appreciation alongside agricultural yields." },
            ].map(({ Icon, color, title, desc }) => (
              <div key={title} className="bg-[#fff9f0]/70 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${color} text-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-2xl font-bold mb-4">{title}</h4>
                <p className="font-sans text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREA & PRICE (PLOT INVENTORY) ────────────────────────────────────── */}
      <section id="price" className="py-24 md:py-32 bg-[#FFF9F0]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">Area & Price</span>
              <h2 className="font-heading italic text-4xl md:text-5xl text-[#012d1d] mt-2">Plot Inventory</h2>
            </div>
            <p className="text-muted-foreground max-w-md font-sans">
              Secure your sanctuary today with pre-launch pricing on premium plots. <strong className="text-[#012d1d]">*Limited Inventory Available</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Plot I */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-8">
                <img src={PLOT_1} alt="Plot I – Aerial Landscape" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white rounded-full font-sans text-xs font-bold text-[#012d1d] uppercase tracking-widest shadow-md">Available</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-[#012d1d]">Plot I</h4>
                  <p className="font-sans text-muted-foreground mt-1">10,000 SQ.FT · Managed Farm Plot</p>
                </div>
                <div className="text-right">
                  <div className="font-sans text-xs font-bold text-gold tracking-wider">STARTING AT</div>
                  <div className="font-heading text-2xl font-bold text-[#012d1d]">₹650 <span className="text-sm font-sans font-normal text-muted-foreground">/sq.ft</span></div>
                </div>
              </div>
              <Button variant="outline" className="mt-8 w-full py-6 border-[#012d1d] rounded-full font-bold hover:bg-[#012d1d] hover:text-white transition-all duration-300" asChild>
                <a href="#inquiry">Price Breakup / Book Site Visit</a>
              </Button>
            </div>

            {/* Plot II */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-8">
                <img src={PLOT_2} alt="Plot II – Aerial Demarcation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white rounded-full font-sans text-xs font-bold text-[#012d1d] uppercase tracking-widest shadow-md">Available</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-[#012d1d]">Plot II</h4>
                  <p className="font-sans text-muted-foreground mt-1">15,000 SQ.FT · Managed Farm Plot</p>
                </div>
                <div className="text-right">
                  <div className="font-sans text-xs font-bold text-gold tracking-wider">STARTING AT</div>
                  <div className="font-heading text-2xl font-bold text-[#012d1d]">₹650 <span className="text-sm font-sans font-normal text-muted-foreground">/sq.ft</span></div>
                </div>
              </div>
              <Button variant="outline" className="mt-8 w-full py-6 border-[#012d1d] rounded-full font-bold hover:bg-[#012d1d] hover:text-white transition-all duration-300" asChild>
                <a href="#inquiry">Price Breakup / Book Site Visit</a>
              </Button>
            </div>

            {/* Plot III */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-8">
                <img src={PLOT_3} alt="Plot III – Bespoke Estate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-gold rounded-full font-sans text-xs font-bold text-[#012d1d] uppercase tracking-widest shadow-md">Bespoke</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-[#012d1d]">Plot III</h4>
                  <p className="font-sans text-muted-foreground mt-1">Custom Size · Bespoke Estate</p>
                </div>
                <div className="text-right">
                  <div className="font-sans text-xs font-bold text-gold tracking-wider">PRICE</div>
                  <div className="font-heading text-2xl font-bold text-[#012d1d]">On Request</div>
                </div>
              </div>
              <Button variant="outline" className="mt-8 w-full py-6 border-[#012d1d] rounded-full font-bold hover:bg-[#012d1d] hover:text-white transition-all duration-300" asChild>
                <a href="#inquiry">Get Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ADVANTAGES ──────────────────────────────────────────────── */}
      <section id="location" className="py-24 bg-[#ede7df] overflow-hidden text-[#012d1d]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">Connectivity</span>
            <h2 className="font-heading italic text-4xl md:text-5xl text-[#012d1d] mt-2">Location Advantages</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-sans">
              Find out the top projects and other landmarks in the area.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Google Maps Embed */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.7429741469405!2d78.0798125!3d12.6159375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badd23b2163f75d%3A0x3aa265ec681767b2!2sSungraze%20farms!5e1!3m2!1sen!2sin!4v1774092587238!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sungraze Farms Location Map"
                />
              </div>
            </div>

            {/* Location Points */}
            <div className="w-full lg:w-1/2 space-y-5">
              {[
                { label: "Just 0.25 KM from NH-44",                     sub: "Seamless highway access for easy weekend getaways." },
                { label: "Surrounded by Medical Colleges & Industrial Hub", sub: "Peace of mind with proximity to essential services." },
                { label: "Approx 60 Minutes Drive from Silk Board",      sub: "Strategically located for Bangalore connectivity." },
                { label: "Rayakottai Railway Station",                   sub: "Convenient rail access to and from the property." },
                { label: "Sri Kattu Veera Anjaneya Temple",              sub: "Sacred landmark — spiritual ambience all around." },
                { label: "Parshwa Padmavathi Jain Temple",               sub: "Heritage site near the project." },
                { label: "Krishnagiri Dam",                              sub: "Scenic reservoir and leisure destination nearby." },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm text-gold mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-base font-bold text-[#012d1d]">{label}</h5>
                    <p className="text-muted-foreground font-sans text-sm">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SUNGRAZE GROUP ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#012d1d] text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-sans text-[12px] tracking-[0.15em] font-bold text-gold uppercase">Developer</span>
              <h2 className="font-heading italic text-4xl md:text-5xl text-white">About Sungraze Group</h2>
              <p className="font-sans text-lg text-white/70 leading-relaxed">
                <strong className="text-gold">Trusted Name in Land Development.</strong> Sungraze Group is a growing
                real estate development company focused on premium farmland projects, integrated gated communities,
                and lifestyle-driven developments.
              </p>
              <div className="space-y-4">
                <h4 className="font-sans font-bold text-white tracking-wide uppercase text-sm text-gold">Core Strengths</h4>
                {["Transparent dealings", "Clear legal documentation", "Customer-centric approach", "Strong project execution"].map(item => (
                  <div key={item} className="flex items-center gap-3 font-sans text-white/80 font-medium">
                    <span className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="pt-4 space-y-2">
                <h4 className="font-sans font-bold text-white tracking-wide uppercase text-sm text-gold">Portfolio Highlights</h4>
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  Large-scale farmland developments · Integrated community planning · Resort-integrated land projects.
                  With a vision to redefine farmland investments, Sungraze Group focuses on creating high-value assets
                  with long-term growth potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={LOCATION_IMG}
                alt="Sungraze Group – Property Entrance"
                className="w-full rounded-[2.5rem] shadow-2xl aspect-[4/3] object-cover border-4 border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM & CTA ───────────────────────────────────────────────── */}
      <section id="inquiry" className="py-32 relative text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={CTA_BG} alt="Site Visit Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#012d1d]/90 backdrop-blur-sm" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Column */}
          <div>
            <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl mb-6 text-white">Schedule a Site Visit</h2>
            <p className="font-sans text-lg text-white/70 mb-10 max-w-lg font-light leading-relaxed">
              Register your interest today. Fill out the form to receive our exclusive project deck and schedule
              a private guided site tour at Sungraze Farms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919071197656" className="font-sans font-medium text-white/90 hover:text-gold transition-colors">
                  +91 90711 97656
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-white/90">stewardship@sungraze.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-white/90">Near Hosur, Krishnagiri District, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="bg-[#fff9f0]/10 border border-white/20 p-10 rounded-[2.5rem] backdrop-blur-xl">
            <h3 className="font-heading text-2xl font-bold mb-8 text-gold">Register Your Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-sans text-xs tracking-widest font-bold uppercase text-gold">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  pattern="[a-zA-Z ]+"
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-gold text-white py-3 px-0 placeholder:text-white/30 outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs tracking-widest font-bold uppercase text-gold">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]+"
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-gold text-white py-3 px-0 placeholder:text-white/30 outline-none"
                  placeholder="+91 00000 00000"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs tracking-widest font-bold uppercase text-gold">Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-gold text-white py-3 px-0 placeholder:text-white/30 outline-none"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs tracking-widest font-bold uppercase text-gold">Plot Interest</label>
                <select
                  name="plotInterest"
                  value={formData.plotInterest}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-gold text-white py-3 px-0 appearance-none outline-none cursor-pointer"
                >
                  <option className="bg-[#012d1d] text-white">Estate Plot I (10,000 sq.ft)</option>
                  <option className="bg-[#012d1d] text-white">Estate Plot II (15,000 sq.ft)</option>
                  <option className="bg-[#012d1d] text-white">Plot III – Bespoke Estate (On Request)</option>
                </select>
              </div>
              <p className="text-white/40 text-xs font-sans leading-relaxed">
                I consent to the use of my provided data in accordance with the privacy policy.
              </p>
              <Button type="submit" className="w-full py-6 bg-gold text-[#012d1d] rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-300">
                Enquire Now
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Farmland;
