import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Club House", path: "/club-house" },
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

  return (
    <header
      className={cn(
        "z-[999] transition-all duration-500 w-full",
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-primary rounded-b-3xl shadow-xl animate-in slide-in-from-top-full"
          : "absolute lg:left-8 lg:right-8 lg:top-8 left-0 right-0 top-0 bg-transparent lg:w-auto"
      )}
    >
      <div className="main-bar-wraper">
        <div className="w-full lg:min-h-[120px] min-h-[80px] lg:pl-[35px] px-4 lg:pr-[55px] duration-500 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex relative items-center z-[9] h-20 lg:w-44 w-32">
            <Link to="/" className="table-cell align-middle">
              <img
                src="/assets/sungraze_logo_2.png"
                alt="Sungraze Groups Logo"
                className="object-contain duration-500 h-10 lg:h-12"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:justify-center lg:grow font-base">
            <ul className="flex flex-wrap items-center">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <li key={link.path} className="relative group inline-block">
                    <Link
                      to={link.path}
                      className={cn(
                        "py-7 xl:px-5 px-3 relative inline-block text-[15px] font-medium transition-colors",
                        active || isScrolled
                          ? "text-white"
                          : "text-white/90 hover:text-white",
                        active && "text-gold"
                      )}
                    >
                      <span className={cn("inline-block relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:h-[2px] after:bg-gold after:transition-all after:duration-300", active ? "after:w-full" : "after:w-0 group-hover:after:w-full")}>
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Right Side (Search & Contact) */}
          <div className="hidden lg:flex items-center justify-end z-[9] h-20 xl:pl-8">
            <div className="flex items-center gap-4">
              <a
                href="tel:+919591155565"
                className="flex items-center justify-center h-11 px-6 rounded-full bg-gold text-charcoal font-bold text-sm tracking-wide hover:bg-white hover:text-primary transition-colors hover:shadow-lg"
              >
                Get In Touch
              </a>
              <button 
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-colors cursor-pointer hover:shadow-lg"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto w-11 h-11 bg-white/10 rounded-lg relative cursor-pointer z-[99] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed left-0 right-0 top-[80px] bg-white shadow-xl transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-6 flex flex-col gap-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block py-3 px-4 rounded-lg text-base font-semibold transition-colors",
                  active ? "bg-primary/5 text-primary" : "text-gray-800 hover:bg-gray-50 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          
          <hr className="my-4 border-gray-100" />
          
          <div className="px-4">
             <a
                href="tel:+919591155565"
                className="flex items-center gap-3 text-primary font-bold text-lg mb-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-gold" />
                </div>
                +91 95911 55565
              </a>
          </div>
        </div>
      </div>
    </header>
  );
}
