import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArrowUp } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 240);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        {children}
        <a
          href="https://wa.me/919000000000"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed left-5 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 active:scale-95"
  style={{ animation: "wa-pulse 2.5s ease-in-out infinite" }}
>
  <style>{`
    @keyframes wa-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5), 0 8px 24px rgba(37, 211, 102, 0.35); }
      60% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0), 0 8px 24px rgba(37, 211, 102, 0.35); }
    }
  `}</style>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-7 w-7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.829 1.782 6.857L2 30l7.356-1.93A13.934 13.934 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.824-1.594l-.418-.249-4.364 1.145 1.164-4.253-.272-.435A11.458 11.458 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5Zm6.29-8.61c-.344-.172-2.04-1.006-2.356-1.12-.315-.115-.545-.172-.775.172-.23.345-.888 1.12-1.088 1.35-.2.23-.4.259-.745.086-.344-.172-1.454-.536-2.77-1.71-1.024-.914-1.715-2.042-1.915-2.387-.2-.345-.021-.531.15-.703.155-.155.345-.403.517-.604.172-.2.23-.345.345-.575.115-.23.057-.431-.029-.603-.086-.172-.775-1.867-1.061-2.556-.279-.671-.563-.58-.775-.59l-.66-.013a1.27 1.27 0 0 0-.918.431c-.315.345-1.204 1.177-1.204 2.87s1.233 3.33 1.404 3.56c.172.23 2.427 3.706 5.881 5.197.822.355 1.463.567 1.963.726.824.262 1.575.225 2.168.137.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.144-.315-.23-.66-.402Z" />
  </svg>
</a>
        {showScrollTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed right-5 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl shadow-black/30 transition hover:bg-slate-700"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
}
