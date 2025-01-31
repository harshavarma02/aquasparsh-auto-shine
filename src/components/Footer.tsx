import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-background text-white py-16">
      {/* Top radial gradient */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-500/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/956c1a0c-037f-44b2-89c9-df162168fe01.png" 
              alt="Logo" 
              className="h-12"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              TotalEnergies Wash-AquaSparsh Car Spa is a revolution in car detailing, 
              best for both car interiors and exteriors.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:contact@aquasparsh.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@aquasparsh.com</span>
              </a>
              <a 
                href="tel:+919000281708" 
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9000281708</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-500">INFORMATION</h3>
            <ul className="space-y-3">
              <li>
                <a href="#packages" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-500">LOCATE US</h3>
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.409515272473!2d78.53854147516722!3d17.48795418341649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bbe25f33aed%3A0x9328a0927f02165c!2s982A%2C%20Defence%20Colony%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5b1!3m2!1sen!2sin!4v1710400988555!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AquaSparsh. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom radial gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;