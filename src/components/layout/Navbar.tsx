import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png"; // your PNG logo

// Brand Colors
const BRAND_BLUE = "#003A8B";
const BRAND_GREEN = "#2A7035";
const BRAND_ORANGE = "#E37222";
const BRAND_YELLOW = "#F4B61F";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-md py-3"
          : "bg-white py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Sungraze Projects Logo"
            className="h-12 w-auto object-contain"
          />

          {/* <span
            className="text-xl font-semibold"
            style={{ color: BRAND_BLUE }}
          >
            Sungraze Projects
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-[15px] font-medium transition-colors pb-1",
                  active
                    ? "text-primary"
                    : "text-[#003A8B] opacity-80 hover:opacity-100"
                )}
                style={{ color: active ? BRAND_BLUE : BRAND_BLUE }}
              >
                {link.name}

                {/* Underline Animation */}
                <span
                  className={cn(
                    "absolute left-0 -bottom-0.5 h-[2px] transition-all bg-[#003A8B]",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 font-medium text-[#003A8B]"
          >
            <Phone size={18} />
            +91 98765 43210
          </a>

          <Button
            style={{
              backgroundColor: BRAND_ORANGE,
              color: "white",
            }}
            className="px-5 font-medium"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#003A8B]"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container flex flex-col py-4 gap-3">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-medium py-2",
                  active ? "text-[#003A8B]" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <hr className="my-2" />

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[#003A8B] font-medium"
          >
            <Phone size={18} /> +91 98765 43210
          </a>

          <Button
            style={{
              backgroundColor: BRAND_ORANGE,
              color: "white",
            }}
            className="mt-3"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
