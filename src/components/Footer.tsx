import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/lovable-uploads/956c1a0c-037f-44b2-89c9-df162168fe01.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-gray-300 mb-6">
              TotalEnergies Wash-AquaSparsh Car Spa is a revolution in car detailing, best for both car interiors and exteriors.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@aquasparsh.com" className="text-gray-300 hover:text-primary">contact@aquasparsh.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919000281708" className="text-gray-300 hover:text-primary">+91 9000281708</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">INFORMATION</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">LOCATE US</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.409515272473!2d78.53854147516722!3d17.48795418341649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bbe25f33aed%3A0x9328a0927f02165c!2s982A%2C%20Defence%20Colony%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5b1!3m2!1sen!2sin!4v1710400988555!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 AquaSparsh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;