import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "IT Professional, Bangalore",
    content:
      "I purchased a plot in Sungraze Greens and the entire process was seamless. The team was professional, documentation was crystal clear, and they delivered exactly what was promised. Highly recommend!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Priya Venkatesh",
    role: "NRI Investor, USA",
    content:
      "As an NRI, I was skeptical about investing in land from abroad. Sungraze Projects made it incredibly easy with regular updates, video calls for site visits, and complete transparency in all dealings.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Dr. Anand Murthy",
    role: "Physician, Chennai",
    content:
      "Invested in Kaveri Farms for agricultural returns. The managed farmland concept is excellent - I own the land while they handle all farming operations. Great returns and peace of mind!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = testimonials[currentIndex];
  // Calculate the other testimonials that are not currently active
  const inactiveTestimonials = testimonials.filter((_, i) => i !== currentIndex);

  return (
    <div className="relative overflow-hidden bg-white sm:py-22.5 py-10 bg-[url('/assets/images/background/patern.png')] bg-repeat bg-center">
      <div className="absolute inset-0 bg-white/60 pointer-events-none z-0"></div>
      <div className="container relative z-10">
        {/* TITLE START*/}
        <div className="text-center max-w-150 mx-auto xl:mb-15 mb-0">
          <span className="inline-block px-5 py-2 rounded-full border border-gold bg-gold/10 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
            Testimonials
          </span>
          <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Real<span className="text-citrusyellow"> Stories!</span></h2>
          <p className="text-base text-muted-foreground">Discover why discerning investors choose us for their land investment journey.</p>
          <div className="-mt-7">
            <img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block" width="470" height="70" loading="lazy" />
          </div>
        </div>
        {/* TITLE END*/}

        <div>
          <div className="text-center relative font-bold 2xl:text-[10rem] xl:text-[8rem] lg:text-[6rem] text-6xl tracking-[0.12em] uppercase bg-clip-text text-transparent bg-[linear-gradient(to_bottom,#066168_15%,rgba(255,170,13,0.3)_60%,#fff_85%)]">
            Feedback
          </div>

          <div className="relative mt-10">
            {/* Floating Inactive Avatars */}
            {inactiveTestimonials.length > 0 && (
              <div
                className="hidden lg:block absolute left-0 lg:left-10 2xl:-left-10 top-10 w-24 h-24 rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_30px_rgba(6,97,104,0.3)] animate-smooth-up-down z-0 opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 duration-600"
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === inactiveTestimonials[0].id))}
                title={`Read review from ${inactiveTestimonials[0].name}`}
              >
                <img src={inactiveTestimonials[0].image} alt="Reviewer" className="w-full h-full object-cover" />
              </div>
            )}
            {inactiveTestimonials.length > 1 && (
              <div
                className="hidden lg:block absolute right-0 lg:right-10 2xl:-right-10 bottom-20 w-20 h-20 rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_30px_rgba(255,170,13,0.3)] animate-smooth-up-down z-0 opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 duration-600"
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === inactiveTestimonials[1].id))}
                title={`Read review from ${inactiveTestimonials[1].name}`}
              >
                <img src={inactiveTestimonials[1].image} alt="Reviewer" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="md:flex items-center bg-transparent relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 items-center w-full max-w-5xl mx-auto gap-10"
                >
                  <div className="relative z-1 max-md:mx-auto max-md:mb-7.5 before:absolute before:w-96 before:h-96 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-24 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:w-80 after:h-80 after:rounded-full after:bg-primary after:-right-10 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
                    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                      <img src={currentTestimonial.image} alt="Image" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
                      <div>
                        <h4 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">{currentTestimonial.name}</h4>
                        <span className="font-title text-xl font-medium text-citrusyellow inline-block">{currentTestimonial.role}</span>
                      </div>
                      <div className="max-sm:mt-4">
                        <img src="/assets/images/trv-icon/Quote.png" alt="Quote" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-full opacity-20" width="70" height="58" loading="lazy" />
                      </div>
                    </div>
                    <p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 italic">
                      "{currentTestimonial.content}"
                    </p>
                    <div className="md:float-right text-citrusyellow text-base mr-0.75 flex flex-wrap max-md:justify-center">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-12 gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}