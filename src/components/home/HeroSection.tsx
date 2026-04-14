import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, TrendingUp } from "lucide-react";
import clubhouseImage from "@/assets/clubhouse-1.png";
import farmlandImage from "@/assets/farmland-1.png";
import residentialImage from "@/assets/project-residential.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { icon: MapPin, value: "2", label: "States" },
  { icon: Shield, value: "15+", label: "Projects" },
  { icon: TrendingUp, value: "500+", label: "Happy Clients" },
];

const heroSlides = [
  {
    id: "farmhouse",
    title: "Premium Farmland Projects",
    subtitle: "Farmhouse Living",
    description:
      "Discover transparent, legally-compliant farmland plotting opportunities across Karnataka and Tamil Nadu.",
    image: farmlandImage,
    cta: "Explore Farmlands",
    link: "/projects#farmland",
  },
  {
    id: "clubhouse",
    title: "Luxury Clubhouse Residences",
    subtitle: "Clubhouse Lifestyle",
    description:
      "Find premium residential living with clubhouse amenities and trusted, fully approved project delivery.",
    image: clubhouseImage,
    cta: "Explore Clubhouses",
    link: "/projects#clubhouse",
  },
  {
    id: "residential",
    title: "Trusted Residential Estates",
    subtitle: "Residential Plots",
    description:
      "Build your future with secure residential developments designed for modern families and long-term value.",
    image: residentialImage,
    cta: "Explore Residentials",
    link: "/projects#residential",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="relative isolate min-h-svh overflow-hidden">
      {/* ── Background images: stack with absolute, crossfade via AnimatePresence ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="relative z-10 flex min-h-svh flex-col justify-end px-4 pb-10 pt-24 sm:justify-center sm:px-6 sm:pb-20 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="w-full max-w-xl space-y-5 rounded-2xl bg-black/30 p-5 backdrop-blur-sm sm:p-7 lg:max-w-2xl lg:rounded-3xl lg:p-10"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 sm:text-xs">
                Projects Across Karnataka &amp; Tamil Nadu
              </span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs"
          >
            {activeSlide.subtitle}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-2xl leading-tight text-white drop-shadow-xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {activeSlide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-light leading-relaxed text-white/80 sm:text-base"
          >
            {activeSlide.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" className="w-full shadow-lg shadow-black/20 sm:w-auto" asChild>
              <Link to={activeSlide.link}>
                {activeSlide.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          {/* Slide dots */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.subtitle} slide`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-gold ring-2 ring-white/70"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md sm:h-11 sm:w-11">
                  <s.icon className="h-4 w-4 text-gold sm:h-5 sm:w-5" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-heading text-lg font-bold text-white sm:text-2xl">{s.value}</p>
                  <p className="text-[10px] text-white/60 sm:text-xs">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-3 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}