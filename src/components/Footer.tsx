import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Resources", href: "/resources" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" }
  ];

  const resourceLinks = [
    { name: "Quran", href: "/quran" },
    { name: "Hadith", href: "/hadith" },
    { name: "Duas", href: "/duas" },
    { name: "Islamic Calendar", href: "/calendar" },
    { name: "Prayer Times", href: "/prayer-times" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
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
                Nur Al-Islam
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Bringing authentic Islamic knowledge to hearts around the world. 
                Join our community of learners and grow closer to Allah.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@nuralislam.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serving Muslims Worldwide</span>
                </div>
              </div>
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

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Islamic Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
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

            {/* Newsletter & Social */}
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Follow us for daily Islamic content and community updates.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Islamic Quote */}
              <div className="text-sm text-primary-foreground/70 italic">
                "And Allah is the best of planners."
                <div className="text-xs mt-1">— Quran 8:30</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20">
          <div className="container-islamic py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/70">
                © 2024 Nur Al-Islam. All rights reserved.
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
                  Made with <Heart className="w-3 h-3 text-red-400" /> for the Ummah
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}