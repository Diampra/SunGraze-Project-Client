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
    <section className="container py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">Farmland</p>
        <h3 className="text-3xl font-heading font-semibold text-foreground">Prime Farmland Assets</h3>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Explore our curated farmland offerings, designed for sustainable agriculture, investment growth, and easy access to key infrastructure.
          Each plot is selected for quality, water availability, and long-term value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {farmlandCards.map((card, idx) => (
          <Link
            key={idx}
            to="/farmland"
            className="group block bg-white rounded-[2.5rem] overflow-hidden shadow-elegant border border-border/50 hover:shadow-2xl transition-all duration-700"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="text-white text-2xl font-heading font-bold tracking-tight mb-2 group-hover:text-gold transition-colors">
                  {card.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{card.description}</p>
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
