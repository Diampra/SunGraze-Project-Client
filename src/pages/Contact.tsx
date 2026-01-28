import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/contact/ContactForm";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123, Business District", "MG Road, Bangalore", "Karnataka 560001"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 98765 43210", "+91 80 1234 5678"],
    links: ["tel:+919876543210", "tel:+918012345678"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@sungrazeprojects.com", "sales@sungrazeprojects.com"],
    links: ["mailto:info@sungrazeprojects.com", "mailto:sales@sungrazeprojects.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM", "Sunday: By Appointment"],
  },
];

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Sungraze Projects | Get in Touch</title>
        <meta name="description" content="Contact Sungraze Projects for enquiries about residential plots and farmland in Karnataka & Tamil Nadu. Schedule a site visit or request more information." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mt-2 mb-6">
              We'd Love to <span className="text-primary">Hear from You</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions about our projects? Want to schedule a site visit? 
              Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-elegant">
                <h2 className="font-heading text-2xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {info.links?.[index] ? (
                            <a
                              href={info.links[index]}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-2xl text-foreground mb-6 text-center">
            Visit Our Office
          </h2>
          <div className="aspect-[2/1] max-h-[400px] rounded-2xl overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9854841147986!2d77.59368931531724!3d12.971598790855062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x7c98c83c62e6b6a5!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sungraze Projects Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Quick answers to common questions about our projects and processes.
            </p>
            <div className="text-left space-y-4">
              {[
                {
                  q: "How do I schedule a site visit?",
                  a: "You can schedule a site visit by calling us at +91 98765 43210 or filling out the contact form above. We offer free site visits on all working days.",
                },
                {
                  q: "What documents do I need for plot registration?",
                  a: "You'll need identity proof (Aadhar/PAN), address proof, photographs, and PAN card for transactions above ₹10 lakhs. Our team will guide you through the complete process.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes, we offer flexible payment plans including EMI options through partner banks. Down payment typically ranges from 20-30% depending on the project.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
