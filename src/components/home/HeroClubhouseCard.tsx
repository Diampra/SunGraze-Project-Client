import { Link } from "react-router-dom";
import clubhouse1 from "@/assets/clubhouse-1.png";
import clubhouse2 from "@/assets/clubhouse-2.png";
import clubhouseExtDay from "@/assets/clubhouse-ext-day.png";
import clubhouseExtTwilight from "@/assets/clubhouse-ext-twilight.png";

const clubhouseCards = [
  {
    image: clubhouse1,
    title: "Grand Reception",
    description: "A welcoming lobby with elegant interiors and premium lounge amenities.",
  },
  {
    image: clubhouse2,
    title: "Luxury Dining",
    description: "Fine dining and cafe experiences for residents and guests.",
  },
  {
    image: clubhouseExtDay,
    title: "Outdoor Serenity",
    description: "Landscaped gardens and outdoor seating areas designed for calm.",
  },
  {
    image: clubhouseExtTwilight,
    title: "Evening Ambiance",
    description: "A serene twilight environment perfect for social gatherings.",
  },
];

export function HeroClubhouseCard() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/background/Cloud-bg.png')] bg-repeat-x bg-bottom bg-[#F0F9F9] py-24">
      {/* Decorative Cloud */}
      <div className="absolute top-10 right-10 w-64 opacity-20 animate-slide-top pointer-events-none z-0">
        <img src="/assets/images/cloud-1.png" alt="cloud" className="w-full" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold mb-4 uppercase tracking-[0.2em] shadow-sm">
            Exclusive Lifestyle
          </span>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Premium <span className="text-primary italic font-serif">Club</span> Facilities
          </h3>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed font-light">
            Discover the heart of our community with clubhouse facilities crafted for comfort, luxury, and memorable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {clubhouseCards.map((card, idx) => (
            <Link
              key={idx}
              to="/club-house"
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
                  <h4 className="text-white text-2xl font-heading font-bold tracking-tight mb-2 group-hover:text-gold transition-colors">
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
