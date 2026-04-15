import { Link } from "react-router-dom";
import farmland1 from "@/assets/farmland-1.png";
import farmland2 from "@/assets/farmland-2.png";
import farmlandAerial from "@/assets/farmland-aerial.png";

const farmlandCards = [
  {
    image: farmland1,
    title: "Fertile Farmland",
    description: "Premium agricultural plots with assured water supply and fertile soil.",
  },
  {
    image: farmland2,
    title: "Modern Farming",
    description: "Smart infrastructure and reliable access for high-yield cultivation.",
  },
  {
    image: farmlandAerial,
    title: "Sweeping Views",
    description: "Expansive land parcels framed by open skies and scenic surroundings.",
  },
];

export function HeroFarmlandCard() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/background/dark-dott-pattern.png')] bg-repeat bg-[#FFF9F0] py-24 border-y border-black/5">
      {/* Decorative Doodles - Floating */}
      {/* <div className="absolute top-10 left-10 w-48 opacity-10 animate-slide-top pointer-events-none z-0">
        <img src="/farmland_doodle_pack_1776186383985.png" alt="doodle" className="w-full" />
      </div>
      <div className="absolute bottom-10 right-10 w-48 opacity-10 animate-slide-top2 pointer-events-none z-0 rotate-180">
        <img src="/farmland_doodle_pack_1776186383985.png" alt="doodle" className="w-full" />
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 size-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <img src="/assets/images/background/patern.png" alt="pattern" className="w-96" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold mb-4 uppercase tracking-[0.2em] shadow-sm">
            Sustainable Growth
          </span>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Prime <span className="text-accent italic font-serif">Farmland</span> Assets
          </h3>
          <div className="mt-4 mb-6">
            <img src="/assets/images/background/Title-Separator.png" alt="separator" className="w-48 inline-block opacity-60" />
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed font-light">
            Explore our curated farmland offerings, designed for sustainable agriculture, investment growth, and easy access to key infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmlandCards.map((card, idx) => (
            <Link
              key={idx}
              to="/farmland"
              className="group block bg-white rounded-[2.5rem] overflow-hidden shadow-elegant border border-black/5 hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h4 className="text-white text-2xl font-heading font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 font-light">{card.description}</p>
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
