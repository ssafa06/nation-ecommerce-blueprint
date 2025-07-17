import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      type: "B2B",
      rating: 5,
      quote: "New Nation has been our go-to partner for all electronics procurement. Their B2B solutions team understands our bulk requirements perfectly, and the pricing is unbeatable.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen", 
      role: "Operations Manager",
      company: "Grand Hotel Chain",
      type: "B2B",
      rating: 5,
      quote: "From HVAC systems to hotel furniture, New Nation provided everything we needed for our new location. The project management and timely delivery were exceptional.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Homeowner",
      company: "Consumer",
      type: "B2C", 
      rating: 5,
      quote: "Bought a complete smart home setup through New Nation. The quality is outstanding and the customer service team helped me every step of the way. Highly recommended!",
      avatar: "ER"
    },
    {
      name: "David Park",
      role: "Facilities Manager", 
      company: "Metro Office Complex",
      type: "B2B",
      rating: 5,
      quote: "Their furniture and HVAC solutions transformed our office space. The team provided custom solutions that perfectly fit our budget and timeline requirements.",
      avatar: "DP"
    },
    {
      name: "Lisa Thompson",
      role: "Interior Designer",
      company: "Consumer",
      type: "B2C",
      rating: 5,
      quote: "As a professional designer, I trust New Nation for all my client furniture needs. The variety, quality, and delivery speed consistently exceed expectations.",
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      role: "Restaurant Owner",
      company: "Kim's Kitchen",
      type: "B2B", 
      rating: 5,
      quote: "Setting up our commercial kitchen was seamless with New Nation. They provided all equipment from one source with excellent warranty support and competitive pricing.",
      avatar: "RK"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Customer Stories</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Thousands
            </span>{" "}
            Nationwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual consumers to large enterprises, see why customers choose New Nation 
            for their technology, furniture, and equipment needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              <CardContent className="pt-8 pb-6">
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <Badge 
                        variant={testimonial.type === "B2B" ? "default" : "outline"} 
                        className="text-xs"
                      >
                        {testimonial.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {testimonial.type === "B2B" ? (
                        <Building className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <User className="h-3 w-3 text-muted-foreground" />
                      )}
                      <span className="text-xs text-muted-foreground">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Brand Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;