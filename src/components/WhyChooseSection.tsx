import { Shield, Award, Truck, Leaf, Users, Globe, Clock, Star } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage, from farm to final packaging. ISO 22000 and HACCP certified facilities.",
      highlights: ["ISO 22000 Certified", "HACCP Compliance", "Quality Testing Lab"]
    },
    {
      icon: Award,
      title: "International Certifications",
      description: "Halal, Kosher, and Organic certifications ensure our products meet global standards and religious requirements.",
      highlights: ["Halal Certified", "Kosher Approved", "Organic Standards"]
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description: "Seamless international shipping with temperature-controlled containers and reliable delivery worldwide.",
      highlights: ["50+ Countries", "Cold Chain", "Express Shipping"]
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Committed to environmental responsibility with sustainable farming practices and eco-friendly packaging.",
      highlights: ["Sustainable Farming", "Eco Packaging", "Carbon Neutral"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep knowledge of date cultivation, processing, and international trade.",
      highlights: ["25+ Years Experience", "Expert Consultants", "24/7 Support"]
    },
    {
      icon: Globe,
      title: "Market Expertise",
      description: "Deep understanding of international markets with tailored solutions for different regions and cultures.",
      highlights: ["Cultural Adaptation", "Market Research", "Custom Solutions"]
    },
    {
      icon: Clock,
      title: "Reliable Supply",
      description: "Consistent year-round availability with strategic inventory management and multiple farm partnerships.",
      highlights: ["Year-Round Supply", "Inventory Management", "Backup Sources"]
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest grade dates make it to our export line, ensuring exceptional taste and appearance.",
      highlights: ["Grade A Selection", "Taste Testing", "Visual Inspection"]
    }
  ];

  return (
    <section id="why-choose" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Partner in
              <span className="text-primary"> Date Palm Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When you choose Premium Kurma Exports, you're partnering with industry leaders 
              who understand the importance of quality, reliability, and cultural authenticity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group gradient-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="gradient-card rounded-2xl p-8 shadow-medium">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground">
                Our commitment to excellence has earned us the trust of premium retailers, 
                distributors, and food manufacturers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Global Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Quality Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;