import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Sofa, 
  Wind, 
  Building, 
  ArrowRight, 
  Package, 
  Users, 
  Clock 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Electronics",
      description: "Cutting-edge technology from world-renowned brands",
      features: ["TVs & Audio", "Computing", "Mobile & Tablets", "Gaming"],
      brands: ["Sony", "Samsung", "LG", "Apple", "Dell", "HP"],
      bgGradient: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Sofa,
      title: "Furniture", 
      description: "Premium furniture solutions for every space",
      features: ["Office Furniture", "Home Collections", "Custom Designs", "Ergonomic Solutions"],
      brands: ["Herman Miller", "Steelcase", "IKEA", "West Elm"],
      bgGradient: "from-amber-50 to-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Wind,
      title: "HVAC Solutions",
      description: "Climate control systems for optimal comfort",
      features: ["Air Conditioning", "Heating Systems", "Ventilation", "Smart Controls"],
      brands: ["Daikin", "Mitsubishi", "Carrier", "Trane"],
      bgGradient: "from-cyan-50 to-cyan-100", 
      iconColor: "text-cyan-600",
    },
    {
      icon: Building,
      title: "Hotel Equipment",
      description: "Professional hospitality and commercial solutions",
      features: ["Kitchen Equipment", "Laundry Systems", "Furniture", "Technology"],
      brands: ["Hobart", "Electrolux", "Whirlpool", "Cisco"],
      bgGradient: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Solutions for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a business looking for bulk solutions or a consumer seeking premium products, 
            we have the expertise and inventory to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${service.bgGradient} border-0`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-card">
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <Package className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Brands */}
                <div className="pt-4 border-t border-white/50">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">Featured Brands:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.brands.slice(0, 3).map((brand) => (
                      <Badge key={brand} variant="outline" className="text-xs bg-white/50">
                        {brand}
                      </Badge>
                    ))}
                    {service.brands.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-white/50">
                        +{service.brands.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full mt-4 bg-white/50 hover:bg-white group-hover:shadow-card"
                >
                  Explore {service.title}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* B2B vs B2C Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* B2B Section */}
          <Card className="shadow-card hover:shadow-floating transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Business Solutions (B2B)</CardTitle>
              </div>
              <CardDescription>
                Tailored solutions for your business needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-primary" />
                  <span className="text-sm">Bulk Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Quick Quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dedicated Rep</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm">Custom Solutions</span>
                </div>
              </div>
              <Button variant="default" className="w-full">
                Get Business Quote
              </Button>
            </CardContent>
          </Card>

          {/* B2C Section */}
          <Card className="shadow-card hover:shadow-floating transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Consumer Shopping (B2C)</CardTitle>
              </div>
              <CardDescription>
                Premium products for individual customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-accent" />
                  <span className="text-sm">Easy Checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-sm">Expert Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-accent" />
                  <span className="text-sm">Warranty Included</span>
                </div>
              </div>
              <Button variant="accent" className="w-full">
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;