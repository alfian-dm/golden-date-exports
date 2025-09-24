import { Star, Package, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import medjoolImage from "@/assets/medjool-dates.jpg";
import degletImage from "@/assets/deglet-dates.jpg";
import zahidiImage from "@/assets/zahidi-dates.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Medjool Dates",
      subtitle: "The King of Dates",
      description: "Large, soft, and incredibly sweet. Perfect for premium markets and gourmet applications.",
      image: medjoolImage,
      features: ["Extra Large Size", "Soft Texture", "Rich Flavor", "Premium Grade"],
      origin: "Jordan & Palestine",
      season: "October - December"
    },
    {
      name: "Deglet Noor",
      subtitle: "Date of Light",
      description: "Translucent golden dates with delicate sweetness and firm texture. Ideal for retail packaging.",
      image: degletImage,
      features: ["Golden Color", "Firm Texture", "Natural Sweetness", "Long Shelf Life"],
      origin: "Tunisia & Algeria",
      season: "November - January"
    },
    {
      name: "Zahidi Dates",
      subtitle: "The Golden Variety",
      description: "Firm, golden-yellow dates with subtle sweetness. Perfect for export and processing.",
      image: zahidiImage,
      features: ["Firm Texture", "Golden Color", "Export Grade", "Bulk Friendly"],
      origin: "Iraq & Iran",
      season: "September - November"
    }
  ];

  const packagingOptions = [
    { icon: Package, title: "Bulk Packaging", description: "5kg, 10kg, 25kg cartons for wholesale" },
    { icon: Shield, title: "Retail Ready", description: "250g, 500g, 1kg consumer packages" },
    { icon: Truck, title: "Custom Solutions", description: "Tailored packaging for your brand" }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Premium Selection</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              World-Class 
              <span className="text-primary"> Date Varieties</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated selection of premium date varieties, 
              each chosen for exceptional quality, taste, and international appeal.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group gradient-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-slow"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-slow"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Premium
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{product.subtitle}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Origin & Season */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Origin</p>
                      <p className="text-sm font-medium text-foreground">{product.origin}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Season</p>
                      <p className="text-sm font-medium text-foreground">{product.season}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Request Sample
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Packaging Options */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Flexible Packaging Solutions
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We offer various packaging options to meet your specific needs, 
              from bulk wholesale to retail-ready consumer packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packagingOptions.map((option, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl gradient-card shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{option.title}</h4>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center gradient-card rounded-2xl p-8 shadow-medium">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Ready to Place Your Order?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact our export team for detailed pricing, minimum orders, and shipping information. 
              We're here to fulfill your date palm requirements worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Product Catalog
              </Button>
              <Button variant="outline" size="lg">
                Request Quotation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;