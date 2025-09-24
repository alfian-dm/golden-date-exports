import { Leaf, Award, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: TrendingUp, value: "25+", label: "Years Experience" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Leaf, value: "50+", label: "Export Countries" },
    { icon: Award, value: "15+", label: "Quality Awards" },
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Our Company</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Excellence in Every 
              <span className="text-primary"> Date Palm</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For over two decades, we have been the trusted bridge between premium date palm farms 
              and international markets, delivering uncompromising quality and exceptional service.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                Our Story of Quality & Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1995, Premium Kurma Exports began as a family-owned business with a simple mission: 
                to share the finest quality date palms with the world. Today, we are a leading exporter 
                serving over 50 countries across six continents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence starts at the source. We partner directly with certified 
                organic farms, ensuring every date meets our rigorous quality standards. From harvest 
                to delivery, we maintain complete control over the supply chain.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Premium Sourcing</h4>
                    <p className="text-muted-foreground">Direct partnerships with certified organic farms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground">Rigorous testing and certification processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Global Logistics</h4>
                    <p className="text-muted-foreground">Seamless international shipping and customs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="gradient-card rounded-2xl p-8 shadow-strong">
                <h4 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
                  Our Mission
                </h4>
                <blockquote className="text-muted-foreground italic text-center leading-relaxed">
                  "To connect the world's finest date palm harvests with discerning customers 
                  globally, maintaining the highest standards of quality, sustainability, 
                  and cultural authenticity in every shipment."
                </blockquote>
                <div className="mt-6 text-center">
                  <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl gradient-card shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;