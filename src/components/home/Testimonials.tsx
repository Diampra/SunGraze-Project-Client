import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "IT Professional, Bangalore",
    content:
      "I purchased a plot in Sungraze Greens and the entire process was seamless. The team was professional, documentation was crystal clear, and they delivered exactly what was promised. Highly recommend!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Priya Venkatesh",
    role: "NRI Investor, USA",
    content:
      "As an NRI, I was skeptical about investing in land from abroad. Sungraze Projects made it incredibly easy with regular updates, video calls for site visits, and complete transparency in all dealings.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Dr. Anand Murthy",
    role: "Physician, Chennai",
    content:
      "Invested in Kaveri Farms for agricultural returns. The managed farmland concept is excellent - I own the land while they handle all farming operations. Great returns and peace of mind!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">

      {/* Modern Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-tl from-amber-500/15 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative">

        {/* Header with Modern Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 font-medium text-sm tracking-wide">
              TRUSTED BY 500+ INVESTORS
            </span>
          </motion.div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Real Stories,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-500/60">
              Real Results
            </span>
          </h2>
          
          <p className="text-primary-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why discerning investors choose Sungraze Projects for their land investment journey
          </p>
        </motion.div>

        {/* Modern Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with Glassmorphism */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-black/10 h-full overflow-hidden"
              >
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
                </div>

                {/* Floating Quote Icon */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-amber-500/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
                
                <Quote className="w-12 h-12 text-amber-500/40 mb-6 relative z-10" strokeWidth={1.5} />

                {/* Dynamic Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-amber-500 text-amber-500 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Content with Better Typography */}
                <p className="text-gray-200 leading-relaxed mb-8 text-base relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Modern Author Section */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-500/10 rounded-full blur-md" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Subtle Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}