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
    title: "Premium Farmlands",
    subtitle: "Farmhouse Living",
    description:
      "Discover transparent, legally-compliant farmland plotting opportunities across Karnataka and Tamil Nadu.",
    image: farmlandImage,
    cta: "Explore Farmlands",
    link: "/projects#farmland",
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
    <section className="3xl:h-[100vh] 2xl:h-[100vh] sm:h-192 h-170 overflow-hidden relative trv-banner-1-wrap bg-primary">
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
        <div className="xl:pt-32 md:pt-28 pt-24 md:pl-14 max-md:px-5 max-w-4xl">

          {/* Subtitle */}
          <span className="2xl:text-4xl text-2xl text-blue-200 font-display block mb-2">
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
          <div className="text-base leading-7 text-white mb-7 max-w-sm">
            {activeSlide.description}
          </div>

          {/* CTA + Dots */}
          <div className="relative z-[4] flex gap-4 items-center flex-wrap bg-black/50 px-5 py-1 rounded-full max-w-max">
            <Link to={activeSlide.link} className="site-button text-white butn-bg-shape">
              {activeSlide.cta}
            </Link>

            <div className="flex gap-2.5 ml-4">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show slide`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-200 ${index === activeIndex
                      ? "bg-white ring-2 ring-white/70"
                      : "bg-white/40 hover:bg-white/70 cursor-pointer"
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
            <li><a href="#" className="text-white text-xl ml-5 duration-500 block hover:text-green-400 hover:-translate-y-1.25"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#" className="text-white text-xl ml-5 duration-500 block hover:text-green-400 hover:-translate-y-1.25"><i className="fa-brands fa-instagram"></i></a></li>
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

      {/* Clouds & airplane */}
      <div className="absolute top-37.5 w-full pointer-events-none">
        <div className="inline-block whitespace-nowrap animate-moveCloud">
          <img src="/assets/images/cloud-1.png" alt="Cloud" className="w-auto" width="400" height="332" />
        </div>
      </div>
      <div className="absolute top-0 w-full pointer-events-none z-[4]">
        <div className="inline-block whitespace-nowrap animate-moveCloud">
          <img src="/assets/images/cloud-2.png" alt="Cloud" className="w-auto" width="297" height="225" />
        </div>
      </div>
      {/* <div className="absolute top-10 md:top-20 right-10 md:right-32 pointer-events-none z-[5]">
        <div className="inline-block animate-moveCloud" style={{ animationDuration: '60s' }}>
          <img src="/assets/images/airplane-takeoff1.png" alt="Airplane" width="493" height="116" className="w-48 md:w-80 opacity-90" />
        </div>
      </div> */}
    </section>
  );
}