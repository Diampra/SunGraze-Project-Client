import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Transparent Documentation & Legal Compliance",
  "15+ Successful Projects Delivered",
  "Prime Locations Across South India",
  "End-to-End Support & Guidance",
];

export function AboutPreview() {
  return (
    <div className="relative overflow-hidden bg-contain bg-[bottom_center] bg-repeat-x bg-[url('/assets/images/background/Cloud-bg.png')] bg-[#EFFFFF] lg:pt-30 pt-16 pb-16">
      {/* Animated Cliparts from Template */}
      <div className="absolute -left-28 top-2/5 w-56 opacity-50 animate-slide-top2 pointer-events-none z-0">
        <img src="/assets/images/hotballon-Left.png" alt="balloon" className="w-full" />
      </div>
      <div className="absolute -right-14 top-2/5 w-28 animate-slide-top pointer-events-none z-0">
        <img src="/assets/images/hotballon-right.png" alt="balloon" className="w-full" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-5 lg:col-span-7 col-span-12 px-3.75 max-lg:mb-40">
            <div className="2xl:mb-30 mb-10 relative">
              {/* TITLE START*/}
              <div className="text-left 2xl:mb-15 mb-10">
                <span className="inline-block px-5 py-2 rounded-full border border-gold bg-gold/10 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
                  Our Legacy
                </span>
                <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">
                  Building <span className="text-citrusyellow italic font-serif">Futures</span> Through Ethical Excellence
                </h2>
                <div className="2xl:mb-12.5 mb-7 sm:pr-8.75 text-base text-muted-foreground mt-4 space-y-4 font-light">
                  <p>
                    Sungraze Projects is a trusted name in real estate development across Karnataka
                    and Tamil Nadu. We specialize in delivering legally compliant residential plots
                    and managed farmland.
                  </p>
                  <p>
                    Our commitment to transparency, quality, and customer satisfaction has made us
                    a preferred choice for over 500 happy families.
                  </p>
                </div>
              </div>
              {/* TITLE END*/}

              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary w-5 h-5" />
                    </div>
                    <h4 className="font-medium text-sm text-foreground">{item}</h4>
                  </div>
                ))}
              </div>

              <div className="sm:flex items-center">
                <div className="mr-3">
                  <Link to="/about" className="site-button butn-bg-shape">Our Story</Link>
                </div>
                <div className="flex max-sm:pt-2.5 ml-4">
                  <div className="flex items-center mr-5">
                    <span className="size-9 inline-flex rounded-full overflow-hidden border-2 border-white ml-0">
                      <img src="/assets/images/hpy-cus/pic1.jpg" alt="img" width="34" height="34" loading="lazy" />
                    </span>
                    <span className="size-9 inline-flex rounded-full overflow-hidden border-2 border-white -ml-2.5">
                      <img src="/assets/images/hpy-cus/pic2.jpg" alt="img" width="34" height="34" loading="lazy" />
                    </span>
                    <span className="size-9 inline-flex rounded-full overflow-hidden border-2 border-white -ml-2.5">
                      <img src="/assets/images/hpy-cus/pic3.jpg" alt="img" width="34" height="34" loading="lazy" />
                    </span>
                  </div>
                  <div>
                    <span className="block font-black text-22 text-primary">500+</span>
                    <p className="mb-0 uppercase font-medium text-xs">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7 lg:col-span-5 col-span-12 relative px-3.75">
            <div className="absolute z-1 lg:top-7.5 -top-40.5 3xl:-right-36.25 lg:-right-0.25 -right-6.25 animate-slide-top max-md:hidden">
              <div className="absolute lg:-left-27.5 -left-22.5 bottom-1.25 pointer-events-none z-0">
                {/* <img src="/assets/images/plane1.png" alt="plane" className="max-lg:max-w-80 w-[384px]" loading="lazy" /> */}
              </div>
              <div className="bg-white rounded-xl py-4 lg:pl-10 pl-6 pr-6 xl:pr-10 inline-flex items-center shadow-xl border border-black/5 relative z-10 w-full sm:w-auto">
                <h2 className="!font-display !font-black lg:!text-83 !text-6xl leading-none !text-secondary !mb-0 !text-shadow-[0px_4px_0px_var(--primary)] !mr-6.75">10<span className="text-4xl align-top">+</span></h2>
                <span className="font-black lg:text-2xl text-xl leading-[1.2] text-primary">Years of<br />Ethical<br />Excellence</span>
              </div>
            </div>

            <div className="mt-3 xl:size-50 sm:size-90 size-70 border-[15px] border-white rounded-full shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] max-xl:relative max-xl:-bottom-41.25 max-lg:bottom-1/2 max-lg:translate-x-1/2 max-md:translate-x-0 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Modern residential development"
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="absolute 3xl:-right-10 right-0 max-lg:w-[60%] lg:-bottom-0 md:-bottom-10 bottom-0 rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                alt="Lush farmland landscape"
                className="w-[280px] h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
