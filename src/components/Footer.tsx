
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Love Problem Solution", href: "/love-problem-solution" },
    { name: "Marriage Solution", href: "/marriage-solution" },
    { name: "Family Problem Solution", href: "/family-problem-solution" },
    { name: "Black Magic Removal", href: "/black-magic-removal" },
    { name: "Husband Wife Dispute", href: "/husband-wife-dispute" }
  ];

  const locationServices = [
    { name: "Astrologer in Delhi", href: "/astrologer-delhi" },
    { name: "Astrologer in Mumbai", href: "/astrologer-mumbai" },
    { name: "Astrologer in Bangalore", href: "/astrologer-bangalore" },
    { name: "Astrologer in Kolkata", href: "/astrologer-kolkata" },
    { name: "Astrologer in Gujarat", href: "/astrologer-gujarat" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-islamic py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Stellar Guide
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Your trusted astrology companion for navigating life through cosmic wisdom. 
                Expert guidance for love, marriage, family, and spiritual problems.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-primary-foreground/70 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@stellarguide.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serving Worldwide</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Consultation
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Astrology Services */}
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Services & Social */}
            <div>
              <h4 className="font-semibold mb-4">Location Services</h4>
              <ul className="space-y-2 mb-6">
                {locationServices.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div>
                <h5 className="font-medium mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20">
          <div className="container-islamic py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/70">
                © 2024 Stellar Guide. All rights reserved. Best Muslim Astrologer Services.
              </div>
              
              <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
                <a href="/privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="/terms" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <span>•</span>
                <div className="flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 text-red-400" /> for spiritual guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
