import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "Export Markets", href: "#markets" },
    { label: "Contact", href: "#contact" }
  ];

  const products = [
    { label: "Medjool Dates", href: "#products" },
    { label: "Deglet Noor", href: "#products" },
    { label: "Zahidi Dates", href: "#products" },
    { label: "Bulk Packaging", href: "#products" },
    { label: "Retail Packaging", href: "#products" }
  ];

  const certifications = [
    "ISO 22000",
    "HACCP",
    "Halal Certified",
    "Kosher Approved",
    "Organic Standards",
    "FDA Registered"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <span className="text-xl font-bold text-foreground">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Premium Kurma</h3>
                  <p className="text-sm text-earth-foreground/80">Exports Worldwide</p>
                </div>
              </div>
              <p className="text-earth-foreground/80 mb-6 leading-relaxed">
                Leading exporter of premium kurma (date palms) worldwide, committed to 
                delivering exceptional quality and service to our global partners.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Business Bay, Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">info@kurmaexports.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm">www.kurmaexports.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-earth-foreground/80 hover:text-primary transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <nav className="space-y-3">
                {products.map((product) => (
                  <button
                    key={product.label}
                    onClick={() => scrollToSection(product.href)}
                    className="block text-earth-foreground/80 hover:text-primary transition-smooth text-left"
                  >
                    {product.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Certifications & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Certifications</h4>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="text-xs bg-earth-foreground/10 rounded px-2 py-1 text-center"
                  >
                    {cert}
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-earth-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-earth-foreground/80">
              © 2024 Premium Kurma Exports. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-earth-foreground/80 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-earth-foreground/80 hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-earth-foreground/80 hover:text-primary transition-smooth">
                Export Terms
              </a>
              <a href="#" className="text-earth-foreground/80 hover:text-primary transition-smooth">
                Quality Standards
              </a>
            </div>
            
            <div className="text-sm text-earth-foreground/80">
              Made with ❤️ for global trade
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;