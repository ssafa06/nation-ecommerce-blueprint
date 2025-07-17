import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Sofa, 
  Wind, 
  Building, 
  Package, 
  Users, 
  Clock,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const serviceDetails = {
    electronics: {
      title: "Electronics & Technology",
      icon: Smartphone,
      description: "Cutting-edge technology solutions from world-renowned brands",
      categories: [
        { name: "Televisions & Audio", items: ["4K & 8K TVs", "Sound Systems", "Home Theater", "Streaming Devices"] },
        { name: "Computing", items: ["Laptops & PCs", "Tablets", "Servers", "Networking Equipment"] },
        { name: "Mobile & Accessories", items: ["Smartphones", "Cases & Covers", "Chargers", "Wireless Accessories"] },
        { name: "Gaming", items: ["Consoles", "Gaming PCs", "VR Systems", "Accessories"] }
      ],
      brands: ["Sony", "Samsung", "LG", "Apple", "Dell", "HP", "Microsoft", "Nintendo"],
      benefits: {
        b2b: ["Volume discounts", "Bulk ordering", "Custom configurations", "Extended warranties"],
        b2c: ["Easy financing", "Home delivery", "Setup service", "Trade-in programs"]
      }
    },
    furniture: {
      title: "Furniture Solutions",
      icon: Sofa,
      description: "Premium furniture for offices, homes, and commercial spaces",
      categories: [
        { name: "Office Furniture", items: ["Desks & Workstations", "Ergonomic Chairs", "Conference Tables", "Storage Solutions"] },
        { name: "Home Collections", items: ["Living Room", "Bedroom", "Dining Room", "Home Office"] },
        { name: "Commercial", items: ["Restaurant Furniture", "Lobby Seating", "Hospitality", "Healthcare"] },
        { name: "Custom Solutions", items: ["Bespoke Designs", "Space Planning", "Installation", "Maintenance"] }
      ],
      brands: ["Herman Miller", "Steelcase", "Knoll", "Haworth", "West Elm", "Crate & Barrel"],
      benefits: {
        b2b: ["Space planning", "Bulk discounts", "Project management", "Flexible payment terms"],
        b2c: ["Interior design consultation", "Delivery & assembly", "Warranty service", "Style matching"]
      }
    },
    hvac: {
      title: "HVAC Solutions",
      icon: Wind,
      description: "Climate control systems for optimal comfort and efficiency",
      categories: [
        { name: "Air Conditioning", items: ["Central AC", "Split Systems", "Window Units", "Portable AC"] },
        { name: "Heating Systems", items: ["Furnaces", "Heat Pumps", "Boilers", "Radiant Heating"] },
        { name: "Ventilation", items: ["Exhaust Fans", "Air Purifiers", "Ductwork", "Ventilation Systems"] },
        { name: "Smart Controls", items: ["Thermostats", "Zone Control", "Smart Sensors", "Automation"] }
      ],
      brands: ["Daikin", "Mitsubishi", "Carrier", "Trane", "Lennox", "Rheem", "Goodman"],
      benefits: {
        b2b: ["Commercial sizing", "Installation service", "Maintenance contracts", "Energy audits"],
        b2c: ["Home assessment", "Professional installation", "Warranty coverage", "Energy rebates"]
      }
    },
    hotel: {
      title: "Hotel Equipment",
      icon: Building,
      description: "Professional hospitality and commercial equipment solutions",
      categories: [
        { name: "Kitchen Equipment", items: ["Commercial Ovens", "Refrigeration", "Food Prep", "Dishwashers"] },
        { name: "Laundry Systems", items: ["Commercial Washers", "Dryers", "Ironing Equipment", "Folding Systems"] },
        { name: "Guest Room", items: ["Furniture Sets", "Electronics", "Safes", "Minibars"] },
        { name: "Technology", items: ["POS Systems", "WiFi Solutions", "Security Systems", "Communication"] }
      ],
      brands: ["Hobart", "Electrolux", "Whirlpool", "True", "Cisco", "Samsung Hospitality"],
      benefits: {
        b2b: ["Project consultation", "Bulk pricing", "Installation coordination", "Service contracts"],
        b2c: ["Quality equipment", "Professional grade", "Warranty support", "Training included"]
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4">
              <Award className="h-4 w-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Solutions for{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Every Need
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From electronics to furniture, HVAC to hotel equipment - we provide comprehensive 
              solutions for businesses and consumers nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="electronics" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="electronics" className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Electronics</span>
              </TabsTrigger>
              <TabsTrigger value="furniture" className="flex items-center space-x-2">
                <Sofa className="h-4 w-4" />
                <span className="hidden sm:inline">Furniture</span>
              </TabsTrigger>
              <TabsTrigger value="hvac" className="flex items-center space-x-2">
                <Wind className="h-4 w-4" />
                <span className="hidden sm:inline">HVAC</span>
              </TabsTrigger>
              <TabsTrigger value="hotel" className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span className="hidden sm:inline">Hotel</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(serviceDetails).map(([key, service]) => (
              <TabsContent key={key} value={key} className="space-y-12">
                {/* Service Overview */}
                <div className="text-center mb-12">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {service.categories.map((category, index) => (
                    <Card key={index} className="shadow-card hover:shadow-floating transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Featured Brands */}
                <div className="bg-muted/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-center mb-6">Featured Brands</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {service.brands.map((brand, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* B2B vs B2C Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="shadow-card hover:shadow-floating transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Users className="h-6 w-6 text-primary" />
                        <CardTitle>Business Solutions (B2B)</CardTitle>
                      </div>
                      <CardDescription>Tailored for business customers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.benefits.b2b.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Package className="h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                      <Button variant="default" className="w-full mt-4">
                        Get Business Quote
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-floating transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-6 w-6 text-accent" />
                        <CardTitle>Consumer Solutions (B2C)</CardTitle>
                      </div>
                      <CardDescription>Perfect for individual customers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.benefits.b2c.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                      <Button variant="accent" className="w-full mt-4">
                        Start Shopping
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;