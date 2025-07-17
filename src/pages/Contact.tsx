import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Users, 
  Building, 
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Project Today
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a business looking for bulk solutions or an individual customer, 
              our expert team is ready to help you find the perfect products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-card hover:shadow-floating transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak with our expert team</p>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">1-800-NEW-NATION</p>
                  <p className="text-sm text-muted-foreground">(1-800-639-6284)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-floating transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Get detailed information</p>
                <div className="space-y-2">
                  <p className="font-semibold">info@newnation.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-floating transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <Headphones className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Instant support available</p>
                <Button variant="success" className="mt-2">
                  Start Chat
                  <MessageSquare className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="b2b-quote">B2B Quote Request</SelectItem>
                          <SelectItem value="b2c-purchase">B2C Purchase Inquiry</SelectItem>
                          <SelectItem value="electronics">Electronics Question</SelectItem>
                          <SelectItem value="furniture">Furniture Consultation</SelectItem>
                          <SelectItem value="hvac">HVAC Solutions</SelectItem>
                          <SelectItem value="hotel">Hotel Equipment</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for product updates and exclusive offers
                    </Label>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">
                    Emergency support available 24/7 for business customers
                  </p>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Nationwide Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>50+ Major Cities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Express Installation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Local Service Centers</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact for B2B */}
              <Card className="shadow-card bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>B2B Priority Line</span>
                  </CardTitle>
                  <CardDescription>
                    For urgent business inquiries and bulk orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-semibold text-lg">1-800-B2B-FAST</p>
                    <p className="text-sm text-muted-foreground">
                      Direct line to our business solutions team
                    </p>
                    <Button variant="default" size="sm" className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Request Business Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us Nationwide</h2>
            <p className="text-xl text-muted-foreground">
              With service centers and authorized dealers across the country
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="bg-muted/50 h-96 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Nationwide service locations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;