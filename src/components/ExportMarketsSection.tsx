import { Globe, MapPin, Plane, Ship } from "lucide-react";

const ExportMarketsSection = () => {
  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada", "Mexico"],
      icon: "🌎",
      description: "Premium retail and gourmet markets"
    },
    {
      name: "Europe",
      countries: ["Germany", "France", "United Kingdom", "Netherlands", "Italy", "Spain"],
      icon: "🌍",
      description: "High-end supermarkets and specialty stores"
    },
    {
      name: "Asia Pacific",
      countries: ["Japan", "Singapore", "Malaysia", "Australia", "South Korea"],
      icon: "🌏",
      description: "Growing health-conscious markets"
    },
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman"],
      icon: "🕌",
      description: "Traditional markets and luxury retailers"
    },
    {
      name: "Africa",
      countries: ["South Africa", "Nigeria", "Kenya", "Morocco", "Egypt"],
      icon: "🌍",
      description: "Emerging markets and food distributors"
    },
    {
      name: "South America",
      countries: ["Brazil", "Argentina", "Chile", "Colombia"],
      icon: "🌎",
      description: "Health food and organic segments"
    }
  ];

  const shippingMethods = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast delivery for urgent orders",
      timeframe: "3-7 days"
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective for bulk shipments",
      timeframe: "15-30 days"
    }
  ];

  return (
    <section id="markets" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Global Reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Serving Markets
              <span className="text-primary"> Worldwide</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our premium kurma reaches discerning customers across six continents, 
              bringing authentic taste and exceptional quality to tables worldwide.
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 gradient-card rounded-xl shadow-soft">
              <div className="text-4xl mb-3">🌍</div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl shadow-soft">
              <div className="text-4xl mb-3">🏪</div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Retail Partners</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl shadow-soft">
              <div className="text-4xl mb-3">📦</div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Monthly Shipments</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl shadow-soft">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Regional Markets */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Our Export Regions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <div 
                  key={index}
                  className="gradient-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{region.icon}</div>
                    <h4 className="text-lg font-semibold text-foreground">{region.name}</h4>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{region.description}</p>
                  
                  <div className="space-y-2">
                    {region.countries.map((country, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="text-sm text-muted-foreground">{country}</span>
                      </div>
                    ))}
                  </div>
                  
                  {region.countries.length > 3 && (
                    <div className="mt-3 text-sm text-primary font-medium">
                      +{region.countries.length - 3} more countries
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Methods */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Flexible Shipping Solutions
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {shippingMethods.map((method, index) => (
                <div 
                  key={index}
                  className="gradient-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{method.title}</h4>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                    <span className="text-sm font-medium text-primary">{method.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center gradient-card rounded-2xl p-8 shadow-medium">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Don't See Your Market Listed?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly expanding our reach. Contact us to discuss export opportunities 
              to your region and learn about our custom shipping solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-soft hover:shadow-medium hover:scale-105 h-11 rounded-md px-8">
                Explore New Markets
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-background shadow-soft hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                View Shipping Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportMarketsSection;