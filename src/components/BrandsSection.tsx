import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle } from "lucide-react";

const BrandsSection = () => {
  const brands = [
    "Sony", "Samsung", "LG", "Haier", "TCL", "JBL", "Philips", "Mitsubishi", 
    "Bluestar", "Daikin", "Hitachi", "General", "Bosch", "Faber", "Trufrost", 
    "Butler", "Dell", "HP", "Apple"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">
            <Award className="h-4 w-4 mr-2" />
            Authorized Dealers
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              25+ Global Brands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As official authorized dealers, we guarantee authentic products, full warranties, 
            and direct manufacturer support for every purchase.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-card hover:shadow-floating transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Official Partnerships</h3>
              <p className="text-muted-foreground">
                Direct relationships with manufacturers ensuring authenticity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-floating transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <Award className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Warranties</h3>
              <p className="text-muted-foreground">
                Complete manufacturer warranty coverage on all products
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-floating transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Access</h3>
              <p className="text-muted-foreground">
                First access to new products and exclusive releases
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Brands Grid */}
        <div className="bg-muted/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Brand Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={brand}
                className="flex items-center justify-center p-4 bg-background rounded-lg shadow-card hover:shadow-floating transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              <strong>25+ Premium Brands</strong> • Official Authorized Dealer • 
              <strong> Full Warranty Coverage</strong> • Direct Manufacturer Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;