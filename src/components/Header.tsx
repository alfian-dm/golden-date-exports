import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import logoKurma from "@/assets/premium-kurma-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // trigger after 50% of viewport height
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Export Markets", href: "#markets" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
           <div className="w-14 h-14 lg:w-20 lg:h-20">
              <img
                src={logoKurma}
                alt="Premium Kurma Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h1
                className={cn(
                  "text-lg lg:text-xl font-heading font-bold transition-colors duration-300",
                  isScrolled ? "text-[#6b4226]" : "text-white"
                )}
              >
                Premium Kurma
              </h1>
              <p
                className={cn(
                  "text-xs hidden sm:block transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                )}
              >
                Exports Worldwide
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "font-medium transition-colors duration-300",
                  isScrolled ? "text-[#6b4226] hover:text-primary" : "text-white hover:text-pink-200"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div
              className={cn(
                "flex items-center space-x-4 text-sm transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-white/90"
              )}
            >
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 0123</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@kurmaexports.com</span>
              </div>
            </div>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors duration-300",
              isScrolled ? "text-[#6b4226]" : "text-white"
            )}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
