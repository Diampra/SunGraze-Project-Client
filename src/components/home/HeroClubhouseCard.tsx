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
    <section className="container py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">Clubhouse</p>
        <h3 className="text-3xl font-heading font-semibold text-foreground">Premium Club Facilities</h3>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Discover the heart of our community with clubhouse facilities crafted for comfort, luxury, and memorable experiences.
          From elegant dining to outdoor retreat spaces, every detail is designed to elevate your lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {clubhouseCards.map((card, idx) => (
          <Link
            key={idx}
            to="/club-house"
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
