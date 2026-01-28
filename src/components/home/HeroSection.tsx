import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroFallback from "@/assets/hero-farmland.jpg";

const stats = [
  { icon: MapPin, value: "2", label: "States" },
  { icon: Shield, value: "15+", label: "Projects" },
  { icon: TrendingUp, value: "500+", label: "Happy Clients" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  // PARALLAX SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.25); // Adjust intensity (0.2–0.4 recommended)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Video Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover will-change-transform"
          poster={heroFallback}
          style={{
            transform: `translateY(${offsetY}px)`,    // PARALLAX EFFECT
            transition: "transform 0.1s linear",
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Projects Across Karnataka & Tamil Nadu
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Premium Farmland & Residential Projects{" "}
            <span className="text-gradient-gold">You Can Trust</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Discover transparent, legally-compliant farmland and residential
            plotting opportunities. Build your future with Sungraze Projects —
            where trust meets growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Button size="xl" className="shadow-lg shadow-black/20" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="backdrop-blur-md border-white/40 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <s.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-white">
                    {s.value}
                  </p>
                  <p className="text-white/60 text-sm">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
