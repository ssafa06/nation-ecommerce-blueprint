import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Star, 
  Truck, 
  Phone,
  ArrowRight,
  Globe
} from "lucide-react";

const Brands = () => {
  const brandCategories = {
    electronics: {
      title: "Electronics & Technology",
      brands: [
        { name: "Sony", specialty: "TVs, Audio, Gaming", established: "1946", rating: 4.8 },
        { name: "Samsung", specialty: "TVs, Mobile, Appliances", established: "1938", rating: 4.7 },
        { name: "LG", specialty: "TVs, Home Appliances", established: "1958", rating: 4.6 },
        { name: "Apple", specialty: "Computing, Mobile", established: "1976", rating: 4.9 },
        { name: "Dell", specialty: "Computing, Servers", established: "1984", rating: 4.5 },
        { name: "HP", specialty: "Computing, Printing", established: "1939", rating: 4.4 }
      ]
    },
    furniture: {
      title: "Furniture & Design",
      brands: [
        { name: "Herman Miller", specialty: "Office Furniture", established: "1905", rating: 4.8 },
        { name: "Steelcase", specialty: "Workplace Solutions", established: "1912", rating: 4.7 },
        { name: "Knoll", specialty: "Modern Furniture", established: "1938", rating: 4.6 },
        { name: "West Elm", specialty: "Home Furniture", established: "2002", rating: 4.3 },
        { name: "Crate & Barrel", specialty: "Home Furnishings", established: "1962", rating: 4.4 },
        { name: "CB2", specialty: "Modern Home", established: "2000", rating: 4.2 }
      ]
    },
    hvac: {
      title: "HVAC & Climate",
      brands: [
        { name: "Daikin", specialty: "Air Conditioning", established: "1924", rating: 4.7 },
        { name: "Mitsubishi", specialty: "HVAC Systems", established: "1870", rating: 4.6 },
        { name: "Carrier", specialty: "Climate Solutions", established: "1915", rating: 4.5 },
        { name: "Trane", specialty: "HVAC Equipment", established: "1913", rating: 4.5 },
        { name: "Lennox", specialty: "Home Comfort", established: "1895", rating: 4.4 },
        { name: "Rheem", specialty: "Water & Air", established: "1925", rating: 4.3 }
      ]
    },
    hotel: {
      title: "Hotel & Commercial",
      brands: [
        { name: "Hobart", specialty: "Commercial Kitchen", established: "1897", rating: 4.8 },
        { name: "Electrolux", specialty: "Appliances", established: "1919", rating: 4.6 },
        { name: "True", specialty: "Refrigeration", established: "1945", rating: 4.7 },
        { name: "Whirlpool", specialty: "Laundry Systems", established: "1911", rating: 4.5 },
        { name: "Cisco", specialty: "Networking", established: "1984", rating: 4.6 },
        { name: "Honeywell", specialty: "Building Solutions", established: "1906", rating: 4.4 }
      ]
    }
  };

  const partnerships = [
    {
      icon: Shield,
      title: "Official Authorization",
      description: "Direct partnerships with manufacturers ensuring authenticity and full warranty coverage"
    },
    {
      icon: Award,
      title: "Preferred Dealer Status",
      description: "Recognized as top-tier dealers with access to exclusive products and pricing"
    },
    {
      icon: Truck,
      title: "Direct Distribution",
      description: "Streamlined supply chain for faster delivery and better inventory management"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International brand relationships enabling access to worldwide product catalogs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4">
              <Award className="h-4 w-4 mr-2" />
              Authorized Dealers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted Partners with{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                25+ Global Brands
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              As official authorized dealers, we guarantee authentic products, full warranties, 
              and direct manufacturer support for every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg">
                Download Brand Catalog
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Our Brand Partnerships Matter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our direct relationships with manufacturers ensure you receive genuine products 
              with full support and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-floating transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <partnership.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{partnership.title}</h3>
                  <p className="text-muted-foreground text-sm">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Brand Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive selection of premium brands across all categories.
            </p>
          </div>

          {Object.entries(brandCategories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.brands.map((brand, index) => (
                  <Card key={index} className="shadow-card hover:shadow-floating transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {brand.name}
                        </CardTitle>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{brand.rating}</span>
                        </div>
                      </div>
                      <CardDescription>{brand.specialty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Established:</span>
                          <span className="font-medium">{brand.established}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 pt-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">Authorized Dealer</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm">Full Warranty</span>
                        </div>

                        <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                          View {brand.name} Products
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Authorized Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get access to authentic products, full warranties, and manufacturer support. 
            Contact our team to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Call 1-800-NEW-NATION
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Request Brand Information
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;