import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Truck, Shield, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="New Nation - Professional eCommerce Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 animate-fade-in bg-gradient-accent">
            <Award className="h-4 w-4 mr-2" />
            Authorized Dealer for 25+ Premium Brands
          </Badge>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              New Nation
            </span>
            <br />
            <span className="text-foreground">
              Your Trusted eCommerce Partner
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            From cutting-edge electronics to premium furniture, HVAC solutions, and hotel equipment. 
            We serve both businesses and consumers nationwide with unmatched quality and service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-bounce-gentle">
            <Button variant="hero" size="xl" className="group">
              Business Solutions
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Shop Now
            </Button>
            <Button variant="accent" size="xl">
              <Phone className="h-5 w-5 mr-2" />
              Request Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-scale-in">
            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur rounded-lg border shadow-card">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Authorized Dealer</h3>
              <p className="text-sm text-muted-foreground">Official partnerships with global brands</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur rounded-lg border shadow-card">
              <Truck className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Nationwide Delivery</h3>
              <p className="text-sm text-muted-foreground">Fast shipping across the country</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur rounded-lg border shadow-card">
              <Award className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Only the finest products and materials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60 hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-accent rounded-full animate-bounce opacity-40 hidden lg:block" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary-light rounded-full animate-bounce opacity-50 hidden lg:block" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;