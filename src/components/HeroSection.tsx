import { ArrowRight, Star, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dates.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-background">Premium Quality Since 1995</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-background mb-6 leading-tight animate-fade-in-up">
            Premium Kurma
            <span className="block text-primary">Exported Worldwide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl leading-relaxed animate-fade-in-up">
            Experience the finest quality date palms sourced from premium farms. 
            Trusted by international partners for exceptional taste, quality, and reliability.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-background/90">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-medium">50+ Countries</span>
            </div>
            <div className="flex items-center space-x-2 text-background/90">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">Halal Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-background/90">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-medium">ISO 22000</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button 
              variant="premium" 
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Get a Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("#products")}
              className="border-background/30 text-background hover:bg-background/10 hover:text-background"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;