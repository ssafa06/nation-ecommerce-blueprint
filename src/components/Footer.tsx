import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Brands", href: "/brands" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  const services = [
    "Electronics",
    "Furniture", 
    "HVAC Solutions",
    "Hotel Equipment",
    "B2B Solutions",
    "Consumer Products",
  ];

  const support = [
    "Help Center",
    "Shipping Info", 
    "Returns",
    "Warranty",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="bg-gradient-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with New Nation
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest product updates, exclusive deals, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
            />
            <Button variant="accent" className="group">
              Subscribe
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-primary-light" />
              <span className="text-2xl font-bold">New Nation</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Your trusted nationwide eCommerce partner for electronics, furniture, HVAC solutions, 
              and hotel equipment. Serving businesses and consumers with premium quality and exceptional service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <span>1-800-NEW-NATION</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-light" />
                <span>info@newnation.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-light" />
                <span>Nationwide Service Center</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-white transition-colors hover:underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-100 mb-4 md:mb-0">
            <p>&copy; 2024 New Nation. All rights reserved.</p>
            <p className="text-sm mt-1">
              Authorized dealer for 25+ premium brands nationwide
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;