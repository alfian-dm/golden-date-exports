import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    product: "",
    quantity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with detailed pricing and availability.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      product: "",
      quantity: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      subvalue: "+971 50 123 4567 (WhatsApp)"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@kurmaexports.com",
      subvalue: "sales@kurmaexports.com"
    },
    {
      icon: MapPin,
      title: "Head Office",
      value: "Business Bay, Dubai, UAE",
      subvalue: "Export Hub & Distribution Center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Sun-Thu: 8:00 AM - 6:00 PM",
      subvalue: "GMT +4 (Dubai Time)"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your
              <span className="text-primary"> Export Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contact our expert team for personalized quotes, product samples, 
              and comprehensive export solutions tailored to your market needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="gradient-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company Name
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Country *
                    </label>
                    <Input
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="Your country"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Product Interest
                    </label>
                    <Select onValueChange={(value) => handleInputChange("product", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medjool">Medjool Dates</SelectItem>
                        <SelectItem value="deglet">Deglet Noor</SelectItem>
                        <SelectItem value="zahidi">Zahidi Dates</SelectItem>
                        <SelectItem value="mixed">Mixed Varieties</SelectItem>
                        <SelectItem value="custom">Custom Requirements</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Quantity Needed
                    </label>
                    <Select onValueChange={(value) => handleInputChange("quantity", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sample">Sample Order (1-10 kg)</SelectItem>
                        <SelectItem value="small">Small Order (10-100 kg)</SelectItem>
                        <SelectItem value="medium">Medium Order (100-1000 kg)</SelectItem>
                        <SelectItem value="large">Large Order (1000+ kg)</SelectItem>
                        <SelectItem value="container">Full Container Load</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Additional Requirements
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your specific requirements, packaging preferences, delivery timeline, or any other details..."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Quote Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="gradient-card rounded-2xl p-8 shadow-medium">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                        {info.subvalue && (
                          <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="gradient-card rounded-2xl p-8 shadow-medium">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-3" />
                    Call for Immediate Assistance
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    WhatsApp for Quick Response
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-3" />
                    Email for Detailed Inquiries
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="gradient-card rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-foreground mb-3">Response Times</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Quotes:</span>
                    <span className="text-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Calls:</span>
                    <span className="text-foreground">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sample Requests:</span>
                    <span className="text-foreground">3-5 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;