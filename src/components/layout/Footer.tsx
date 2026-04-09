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
<footer
  className="relative bg-primary text-primary-foreground overflow-hidden"
  style={{
    backgroundImage: "url('/assets/footer.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/100 z-0" />

  {/* Main Content */}
  <div className="relative z-10 container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-charcoal font-heading font-bold text-xl">S</span>
              </div>
              <span className="font-heading font-semibold text-xl">Sungraze <br />Groups</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Building trust through transparency. Quality farmland and residential projects across Karnataka and Tamil Nadu.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Projects</h4>
            <ul className="space-y-3">
              {projectTypes.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  #5, 4th Floor, Sharadha Arcade,<br />
                  Omkaranagar, Arekere Gate,<br />
                  Bannerughatta Road, Bangalore - 560076
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+91-9591155565" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  +91-9591155565, <br /> +91-9916046565
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@sungrazeprojects.com" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  info@sungrazeprojects.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Sungraze Projects. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
