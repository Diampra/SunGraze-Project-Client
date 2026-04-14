import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const projectTypes = [
  { name: "Residential Plots", path: "/projects?type=residential" },
  { name: "Farmland", path: "/projects?type=farmland" },
  { name: "Ongoing Projects", path: "/projects?status=ongoing" },
  { name: "Completed Projects", path: "/projects?status=completed" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="pt-20 bg-primary bg-cover" style={{ backgroundImage: "url('/assets/images/background/ftr-dark-bg.png')" }}>
      {/* Subscribe Floating Box */}
      <div className="-mt-40 relative z-10 hidden md:block px-4">
        <div className="container bg-gold rounded-3xl md:flex items-center justify-between py-8 lg:px-[70px] sm:px-[40px] px-6 max-w-[1200px] mx-auto shadow-xl">
          <div className="pr-5 max-lg:w-1/2 max-md:w-full">
            <div className="text-primary font-display lg:text-[70px] sm:text-[46px] text-[28px] font-bold leading-[1.1] sm:text-shadow-[2px_3px_0px_rgba(255,255,255,0.72)] pb-2"><span className="text-white inline-block">Subscribe</span> Now!</div>
            <div className="text-primary text-lg font-medium font-title max-md:mb-5">
              Sign up to our weekly newsletter to get the latest updates. 
            </div>  
          </div>
          <div className="max-w-[420px] flex-1 h-14 md:h-16">
            <form className="h-full">
              <div className="p-1.5 bg-white rounded-full h-full flex items-center shadow-inner">
                <div className="flex relative w-full h-full">
                  <input name="dzEmail" required type="email" className="w-full h-full border-0 outline-none py-2.5 pl-6 pr-[70px] rounded-full text-base bg-white text-primary placeholder:text-primary/60 font-medium" placeholder="Email address..." />
                  <button type="submit" className="text-xl text-white rounded-full w-12 h-12 bg-primary absolute top-1/2 -translate-y-1/2 right-1.5 duration-500 hover:bg-gold hover:text-primary transition-colors flex items-center justify-center shadow-md"><Mail className="w-5 h-5" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-16">
        <div className="sm:pt-16 pt-10 text-white/60 border-b border-primary-foreground/10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-8 pb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4 col-span-12 sm:px-4">
              <div className="mb-10 lg:pr-8">
                <Link to="/" className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-gold">
                    <span className="text-charcoal font-heading font-bold text-2xl">S</span>
                  </div>
                  <span className="font-heading font-semibold text-2xl text-white tracking-wide">Sungraze <br />Groups</span>
                </Link>
                <p className="mb-8 text-base text-white/70 leading-relaxed max-w-sm">
                  Building trust through transparency. Quality farmland and residential projects across Karnataka and Tamil Nadu.
                </p>
                <ul className="flex gap-3">
                  {socialLinks.map((social) => (
                    <li key={social.label} className="inline-flex w-[42px] h-[42px] bg-gold rounded-full justify-center items-center transition-all duration-300 hover:rounded-xl group shadow-md hover:shadow-gold hover:-translate-y-1">
                      <a className="inline-flex w-[34px] h-[34px] bg-primary rounded-full justify-center items-center transition-all duration-300 text-white group-hover:rounded-lg" href={social.href} aria-label={social.label}>
                        <social.icon className="w-4 h-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-gold" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 col-span-6 sm:px-4">
              <div className="mb-10">
                <h3 className="text-white mb-8 relative text-xl font-heading font-semibold tracking-wide">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.path} className="block w-full">
                      <Link to={link.path} className="block transition-all duration-300 text-[15px] text-white/70 font-medium hover:text-gold hover:translate-x-1">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="lg:col-span-3 col-span-6 sm:px-4">
              <div className="mb-10">
                <h3 className="text-white mb-8 relative text-xl font-heading font-semibold tracking-wide">Our Projects</h3>
                <ul className="space-y-3">
                  {projectTypes.map((link) => (
                    <li key={link.path} className="block w-full">
                      <Link to={link.path} className="block transition-all duration-300 text-[15px] text-white/70 font-medium hover:text-gold hover:translate-x-1">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 col-span-12 sm:px-4">
              <div className="mb-10">
                <h3 className="text-white mb-8 relative text-xl font-heading font-semibold tracking-wide">Contact Us</h3>
                <ul className="space-y-5">
                  <li className="relative flex items-start gap-4 group">
                    <div className="w-10 h-10 min-w-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/20 group-hover:border-gold/30">
                      <MapPin className="w-[18px] h-[18px] text-gold transition-transform group-hover:scale-110" />
                    </div>
                    <span className="block text-white/70 font-medium text-sm leading-relaxed pt-1">
                      #5, 4th Floor, Sharadha Arcade, Omkaranagar, Arekere Gate, Bannerughatta Road, Bangalore - 560076
                    </span>
                  </li>
                  <li className="relative flex items-center gap-4 group">
                    <div className="w-10 h-10 min-w-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/20 group-hover:border-gold/30">
                      <Phone className="w-[18px] h-[18px] text-gold transition-transform group-hover:scale-110" />
                    </div>
                    <a href="tel:+919591155565" className="block text-white/70 font-medium text-[15px] hover:text-gold transition-colors">
                      +91-9591155565 <br/> +91-9916046565
                    </a>
                  </li>
                  <li className="relative flex items-center gap-4 group">
                    <div className="w-10 h-10 min-w-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/20 group-hover:border-gold/30">
                      <Mail className="w-[18px] h-[18px] text-gold transition-transform group-hover:scale-110" />
                    </div>
                    <a href="mailto:info@sungrazeprojects.com" className="block text-white/70 font-medium text-[15px] hover:text-gold transition-colors">
                      info@sungrazeprojects.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 text-white relative flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm font-medium text-white/60">
            © {new Date().getFullYear()} <span className="inline-block text-gold uppercase font-bold tracking-wider mx-1">Sungraze Projects</span> All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-white/50 hover:text-gold text-sm transition-colors font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 hover:text-gold text-sm transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
