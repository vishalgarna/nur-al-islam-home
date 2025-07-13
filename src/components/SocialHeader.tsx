
import { Facebook, Twitter, Instagram, Youtube, MessageCircle, Phone, Mail } from "lucide-react";

export function SocialHeader() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-500" }
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container-islamic">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@stellarguide.com" className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@stellarguide.com</span>
            </a>
          </div>

          {/* Social Links & WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-7 h-7 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-3 h-3" />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-4 bg-primary-foreground/30"></div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full transition-colors text-white font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
