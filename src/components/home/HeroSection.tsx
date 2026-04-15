import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
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
    title: "Premium Farmlands",
    subtitle: "Farmhouse Living",
    description:
      "Discover transparent, legally-compliant farmland plotting opportunities across Karnataka and Tamil Nadu.",
    image: farmlandImage,
    cta: "Explore Farmlands",
    link: "/projects#farmland",
    decoAsset: "/assets/images/butterfly.gif",
    decoClass: "animate-smooth-up-down",
    decoPos: "bottom-[5%] right-[5%] w-24 lg:w-32",
  },
  {
    id: "clubhouse",
    title: "Luxury Residences",
    subtitle: "Clubhouse Lifestyle",
    description:
      "Find premium residential living with clubhouse amenities and trusted, fully approved project delivery.",
    image: clubhouseImage,
    cta: "Explore Clubhouses",
    link: "/projects#clubhouse",
    decoAsset: "/assets/images/hotballon-right.png",
    decoClass: "animate-slide-top",
    decoPos: "top-[15%] right-[10%] w-24 lg:w-32 opacity-80",
  },
  {
    id: "residential",
    title: "Trusted Estates",
    subtitle: "Residential Plots",
    description:
      "Build your future with secure residential developments designed for modern families and long-term value.",
    image: residentialImage,
    cta: "Explore Residentials",
    link: "/projects#residential",
    decoAsset: "/assets/images/birds.gif",
    decoClass: "animate-slide-left",
    decoPos: "top-[10%] right-0 w-[200px] lg:w-[300px] opacity-20 mix-blend-screen scale-x-[-1]",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="3xl:h-[100vh] 2xl:h-[100vh] sm:h-192 h-195 overflow-hidden relative trv-banner-1-wrap bg-primary">
      <div className="trv-banner-1-rain-effect">
        <div className="absolute left-0 size-full z-2 rain front-row"></div>
        <div className="absolute left-0 size-full z-2 rain back-row"></div>
      </div>

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
        </motion.div>
      </AnimatePresence>

      <div className="relative z-2 3xl:h-[95vh] 2xl:h-[95vh] lg:h-[90vh] h-195 lg:m-8.75 lg:rounded-3xl bg-black/60">
        <div className="xl:pt-32 md:pt-28 pt-24 md:pl-14 max-md:px-5 max-w-6xl">

          {/* Subtitle */}
          <span className="2xl:text-4xl text-2xl text-accent font-display block mb-2 pt-8">
            {activeSlide.subtitle}
          </span>

          {/* Title */}
          <div className="relative mb-4">
            <h1 className="!font-display 2xl:!text-8xl xl:!text-7xl md:!text-6xl !text-5xl !text-white relative inline-block animate-slide-left leading-tight">
              {activeSlide.title}
            </h1>
            <h1 className="!font-display 2xl:!text-8xl xl:!text-7xl md:!text-6xl !text-5xl !text-transparent absolute left-0 top-0 z-1 [-webkit-text-stroke:2px_#fff] animate-slide-left leading-tight">
              {activeSlide.title}
            </h1>
          </div>

          {/* Description */}
          <div className="text-lg md:text-xl leading-relaxed text-white/90 mb-10 max-w-2xl font-light">
            {activeSlide.description}
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 md:gap-12 mb-12 py-6 border-y border-white/10 max-w-3xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <stat.icon size={22} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent/80 font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Dots Pill - Stacked Layout to match screenshot */}
          <div className="relative z-[4] flex flex-col items-center gap-5 md:gap-7 bg-black/30 backdrop-blur-xl px-8 md:px-12 py-5 md:py-7 rounded-2xl max-w-max border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">

            <Link
              to={activeSlide.link}
              className="text-white/90 hover:text-white font-display text-xs md:text-base tracking-widest uppercase transition-colors duration-300 text-center"
            >
              {activeSlide.cta}
            </Link>

            <div className="flex items-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-500 ease-out ${index === activeIndex
                      ? "w-5 md:w-6 h-1.5 md:h-2 bg-white"
                      : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/25 hover:bg-white/50 cursor-pointer"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Social links */}
        <div className="text-white absolute bottom-7.5 3xl:right-112.5 2xl:right-64.5 sm:right-10 right-5 flex items-center z-4">
          <span className="pr-26.25 text-xs leading-4.5 tracking-[0.2em] uppercase relative inline-block after:content-[''] after:absolute after:w-16 after:h-px after:bg-white after:right-5 after:top-1/2 after:-translate-y-1/2 max-sm:hidden">
            Follow Us
          </span>
          <ul className="flex">
            <li><a href="#" className="text-white text-xl ml-5 duration-500 block hover:text-accent hover:-translate-y-1.25"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#" className="text-white text-xl ml-5 duration-500 block hover:text-accent hover:-translate-y-1.25"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>

        {/* Decorative rings */}
        <div className="absolute inset-0 z-[3] overflow-hidden max-lg:hidden pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 size-175 right-0">
            <div className="-right-4/5 absolute z-2 rotate-center animate-rotate-center"><span className="size-175 rounded-full border border-white/30 block relative after:size-3.5 after:bg-white after:rounded-full after:absolute after:right-8.75 after:top-1/4 after:z-10"></span></div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 size-225 right-0">
            <div className="right-[-70%] absolute z-2 animate-rotate-center"><span className="size-225 rounded-full border border-white/30 block relative after:size-3.5 after:bg-blue-300 after:rounded-full after:absolute after:right-18.75 after:bottom-1/5 after:z-10"></span></div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 size-275 right-0">
            <div className="-right-3/5 absolute z-2 animate-rotate-center"><span className="size-275 rounded-full border border-white/30 block relative after:size-3.5 after:bg-green-400 after:rounded-full after:absolute after:left-0.75 after:top-2/5 after:z-10"></span></div>
          </div>
        </div>
      </div>

      {/* Dynamic Slide Decorations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSlide.id}-deco`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "absolute z-10 pointer-events-none hidden md:block",
            activeSlide.decoPos
          )}
        >
          <div className={activeSlide.decoClass}>
            <img
              src={activeSlide.decoAsset}
              alt="Decoration"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}