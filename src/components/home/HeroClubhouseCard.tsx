import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import clubhouse1 from "@/assets/clubhouse-1.png";
import clubhouse2 from "@/assets/clubhouse-2.png";
import clubhouseExtDay from "@/assets/clubhouse-ext-day.png";
import clubhouseExtTwilight from "@/assets/clubhouse-ext-twilight.png";

const clubhouseImages = [clubhouse1, clubhouse2, clubhouseExtDay, clubhouseExtTwilight];

export function HeroClubhouseCard() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const currentVisibleCount = clubhouseImages.length; // Show all 4 images

  const goToPrevious = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex - 1 + clubhouseImages.length) % clubhouseImages.length);
  };

  const goToNext = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex + 1) % clubhouseImages.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < currentVisibleCount; i++) {
      visible.push(clubhouseImages[(currentStartIndex + i) % clubhouseImages.length]);
    }
    return visible;
  };

  return (
    <section className="container py-10">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
          Clubhouse
        </p>
        <h3 className="text-2xl font-heading font-semibold text-foreground">Premium Club Facilities</h3>
      </div>
      <div className="relative">
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
          {getVisibleImages().map((image, idx) => (
            <Link
              key={idx}
              to="/club-house"
              className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-elegant transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={`Clubhouse ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full hidden md:flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full hidden md:flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
