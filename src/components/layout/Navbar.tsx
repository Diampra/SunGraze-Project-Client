import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resort", path: "/club-house" },
  { name: "Farmland", path: "/farmland" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <header
      className={cn(
        "z-[999] transition-all duration-700 w-full fixed px-4 md:px-8",
        isScrolled ? "top-4" : "top-8"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto transition-all duration-500 rounded-full border border-white/20 shadow-2xl relative overflow-visible",
        isScrolled
          ? "bg-primary/95 backdrop-blur-xl py-2 px-6"
          : "bg-black/20 backdrop-blur-md py-4 px-8"
      )}>
        {/* Desktop Layout - 3-Column Grid for perfect centering */}
        <div className="hidden lg:grid grid-cols-3 items-center relative h-16 xl:h-20">

          {/* Left Column */}
          <nav className="flex items-center justify-end gap-6 xl:gap-10 pr-12 xl:pr-20 -translate-y-1/3">
            {leftLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm xl:text-base font-medium transition-all duration-300 relative group py-2 uppercase tracking-wider whitespace-nowrap",
                    active ? "text-accent" : "text-white hover:text-accent"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Middle Column - Logo */}
          <div className="flex justify-center z-[20]">
            <Link
              to="/"
              className={cn(
                "flex items-center justify-center rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/30 transition-all duration-500 group overflow-hidden h-28",
                isScrolled
                  ? "bg-primary/95 backdrop-blur-xl"
                  : "bg-black/20 backdrop-blur-md"
              )}
            >
              <img
                src="/assets/sungraze_logo.png"
                alt="Sungraze Groups Logo"
                className="w-[85%] h-[85%] object-contain group-hover:scale-105 duration-500 mb-4"
              />
            </Link>
          </div>

          {/* Right Column - Navigation + CTA */}
          <div className="flex items-center justify-start pl-12 xl:pl-20 gap-8 xl:gap-10">
            <nav className="flex items-center gap-6 xl:gap-10 -translate-y-1/3">
              {rightLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-sm xl:text-base font-medium transition-all duration-300 relative group py-2 uppercase tracking-wider whitespace-nowrap",
                      active ? "text-accent" : "text-white hover:text-accent"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                );
              })}
            </nav>

            {/* <Link
              to="/contact"
              className="bg-accent text-primary px-6 xl:px-8 py-3 rounded-full font-bold text-xs xl:text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg shadow-accent/30 whitespace-nowrap"
            >
              Get In Touch
            </Link> */}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex items-center justify-between pt-2 relative">
          {/* Mobile Logo Centering (using absolute for small bar) */}
          <div className="absolute z-[20]">
            <Link
              to="/"
              className={cn(
                "flex items-center justify-center rounded-full h-24 w-24 bg-primary/95 backdrop-blur-xl shadow-lg border-2 border-white/30 overflow-hidden",
                isScrolled
                  ? "bg-primary/95 backdrop-blur-xl"
                  : "bg-black/20 backdrop-blur-md"
              )}
            >
              <img
                src="/assets/sungraze_logo.png"
                alt="Sungraze Groups Logo"
                className="w-16 h-16 object-contain mb-2"
              />
            </Link>
          </div>

          <div className="flex-1" /> {/* Spacer */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white relative z-50 hover:bg-white/30 transition-all shadow-md"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-[30]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden absolute top-24 left-4 right-4 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 z-40 border border-white/20 overflow-hidden"
            >
              <div className="relative flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.path}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-primary font-bold text-xl px-6 py-4 flex items-center justify-between group rounded-2xl transition-all",
                        location.pathname === link.path ? "bg-primary/5" : "hover:bg-primary/5"
                      )}
                    >
                      {link.name}
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </motion.div>
                ))}

                <hr className="my-4 border-gray-100" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="tel:+919591155565"
                    className="flex items-center gap-4 text-primary font-bold p-6 bg-accent rounded-2xl shadow-xl shadow-accent/20 transition-transform active:scale-95"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-primary">
                      <Phone size={20} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70">24/7 Support</div>
                      <div className="text-lg">+91 95911 55565</div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
