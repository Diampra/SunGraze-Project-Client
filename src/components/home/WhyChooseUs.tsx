import { Shield, FileCheck, MapPin, Users, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "All our projects come with clear titles, proper approvals (BMRDA/DTCP), and complete documentation.",
    highlight: "100%",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description: "From site visit to registration, we maintain complete transparency at every step of your journey.",
    highlight: "Zero",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located projects near highways, airports, IT hubs, and growing corridors.",
    highlight: "10+",
  },
  {
    icon: Users,
    title: "Happy Families",
    description: "Over 500 happy families and investors have trusted Sungraze for their real estate needs.",
    highlight: "500+",
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description: "Our projects are positioned in high-appreciation zones ensuring excellent returns.",
    highlight: "High ROI",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    description: "Dedicated relationship managers to guide you from enquiry to possession and beyond.",
    highlight: "24/7",
  },
];

export function WhyChooseUs() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .sg-advantage-wrap * {
          box-sizing: border-box;
        }

        .sg-advantage-wrap {
          font-family: 'DM Sans', sans-serif;
        }

        /* Hero background layers */
        .sg-hero-bg {
          background: linear-gradient(135deg, #071510 0%, #0b1f12 45%, #112819 100%);
        }
        .sg-grid-texture {
          background-image:
            linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Decorative border frame */
        .sg-inner-frame {
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 1.5rem;
          pointer-events: none;
          z-index: 2;
        }
        .sg-inner-frame::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent);
        }
        .sg-inner-frame::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent);
        }

        /* Play button pulse ring */
        .sg-play-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.25);
          animation: sg-pulse 2.5s ease-out infinite;
          pointer-events: none;
        }
        @keyframes sg-pulse {
          0%   { opacity: 0.7; transform: scale(1); }
          100% { opacity: 0;   transform: scale(1.5); }
        }

        /* Play button hover */
        .sg-play-btn {
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .sg-play-btn:hover {
          background: rgba(212,175,55,0.2) !important;
          border-color: rgba(212,175,55,0.9) !important;
          transform: scale(1.1);
        }

        /* Stat item hover */
        .sg-stat-item {
          transition: background 0.2s;
          border-radius: 0.75rem;
        }
        .sg-stat-item:hover {
          background: rgba(212,175,55,0.05);
        }

        /* Eyebrow lines */
        .sg-eyebrow::before,
        .sg-eyebrow::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: rgba(212,175,55,0.45);
          flex-shrink: 0;
        }

        /* Stats top divider glow */
        .sg-stats-section::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
        }

        /* Vertical dividers between stat columns */
        .sg-stat-divider {
          position: absolute;
          right: 0; top: 15%; bottom: 15%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(212,175,55,0.2), transparent);
        }

        /* Italic display font */
        .sg-font-display-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        .sg-font-display {
          font-family: 'Playfair Display', serif;
          font-style: normal;
        }
      `}</style>

      <section className="sg-advantage-wrap lg:py-24 py-16 bg-blue-50/50">
        <div className="w-full xl:max-w-[1400px] mx-auto px-0 sm:px-6">
          <div className="relative sm:rounded-[3rem] overflow-hidden shadow-2xl">

            {/* ── HERO AREA ── */}
            <div className="sg-hero-bg relative overflow-hidden" style={{ minHeight: 420 }}>

              {/* Subtle grid texture */}
              <div className="sg-grid-texture absolute inset-0 z-[1]" />

              {/* Radial gold glows */}
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 60%, rgba(212,175,55,0.07) 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, rgba(212,175,55,0.05) 0%, transparent 50%)",
                }}
              />

              {/* Decorative inner frame */}
              <div className="sg-inner-frame" />

              {/* Background image overlay */}
              <div
                className="absolute inset-0 z-[2] opacity-25"
                style={{
                  backgroundImage: "url('/assets/images/project-residential.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  mixBlendMode: "luminosity",
                }}
              />
              <div
                className="absolute inset-0 z-[3]"
                style={{ background: "linear-gradient(to bottom, rgba(7,21,16,0.4) 0%, rgba(7,21,16,0.85) 100%)" }}
              />

              {/* Title block */}
              <div
                className="relative z-[4] flex flex-col items-center justify-center text-center py-20 px-6"
                style={{ minHeight: 420 }}
              >
                {/* Eyebrow */}
                <div
                  className="sg-eyebrow flex items-center gap-3 mb-5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(10px, 2vw, 14px)",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,55,0.7)",
                  }}
                >
                  Why Trust Us
                </div>

                {/* "The Sungraze" */}
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(24px, 4vw, 40px)",
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.08em",
                    marginBottom: 2,
                  }}
                >
                  The Sungraze
                </div>

                {/* "Advantage" — fully contained, no clipping */}
                <div
                  className="sg-font-display-italic"
                  style={{
                    fontSize: "clamp(60px, 12vw, 120px)",
                    lineHeight: 0.92,
                    color: "#D4AF37",
                    textShadow: "0 0 80px rgba(212,175,55,0.18)",
                    letterSpacing: "-0.01em",
                    wordBreak: "keep-all",
                    whiteSpace: "nowrap",
                  }}
                >
                  Advantage
                </div>
              </div>

              {/* Play button — centred in hero */}
              <a
                href="#"
                className="sg-play-btn absolute left-1/2 top-1/2 z-[5] flex items-center justify-center rounded-full"
                style={{
                  width: 76,
                  height: 76,
                  transform: "translate(-50%, -50%)",
                  background: "rgba(212,175,55,0.12)",
                  border: "1.5px solid rgba(212,175,55,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
                aria-label="Watch video"
              >
                {/* Pulse ring */}
                <span className="sg-play-ring" />
                {/* Triangle */}
                <span
                  style={{
                    display: "block",
                    width: 0,
                    height: 0,
                    borderTop: "9px solid transparent",
                    borderBottom: "9px solid transparent",
                    borderLeft: "16px solid #D4AF37",
                    marginLeft: 5,
                    filter: "drop-shadow(0 0 6px rgba(212,175,55,0.55))",
                  }}
                />
              </a>
            </div>

            {/* ── STATS BAR ── */}
            <div
              className="sg-stats-section relative"
              style={{ background: "#0b1f10", borderTop: "1px solid rgba(212,175,55,0.12)", padding: "2.5rem 1.5rem" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-0 gap-x-2">
                {features.map((feature, idx) => {
                  const isLastInMobileRow = idx % 2 === 1;
                  const isLastInDesktopRow = idx === 2 || idx === 5;

                  return (
                    <div
                      key={idx}
                      className="sg-stat-item relative flex items-start gap-2.5 sm:gap-4 p-2 sm:p-4"
                    >
                      {/* Vertical divider (desktop) */}
                      <span className={`sg-stat-divider hidden md:block ${isLastInDesktopRow ? 'md:hidden' : ''}`} />

                      {/* Vertical divider (mobile) */}
                      <span className={`sg-stat-divider md:hidden ${isLastInMobileRow ? 'hidden' : 'block'}`} />

                      {/* Icon */}
                      <div
                        className="shrink-0 mt-0.5"
                        style={{ color: "#D4AF37", opacity: 0.85, width: 26, height: 26 }}
                      >
                        <feature.icon className="w-full h-full stroke-[1.5px] sm:stroke-[2px]" />
                      </div>

                      {/* Text */}
                      <div>
                        <div
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.4)",
                            marginBottom: 4,
                          }}
                          className="text-[10px] sm:text-[12px] md:text-[14px]"
                        >
                          {feature.title}
                        </div>
                        <div
                          className="sg-font-display"
                          style={{
                            fontSize: "clamp(24px, 3.5vw, 40px)",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1,
                          }}
                        >
                          {feature.highlight}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}