import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AquaSparsh Car Spa</h3>
            <p className="text-gray-300 mb-4">
              Premier auto detailing service specializing in advanced robotic car wash, paint protection, and ceramic coating.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">contact@aquasparsh.com</p>
              <p className="text-gray-300">+91 9000281708</p>
            </div>
            <div className="flex space-x-4 mt-4">
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
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#recent-works" className="text-gray-300 hover:text-primary transition-colors">Recent Works</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-300 mb-2">Plot No 982, Defence Colony,</p>
            <p className="text-gray-300 mb-2">Sainikpuri, Secunderabad 500094</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.409515272473!2d78.53854147516722!3d17.48795418341649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bbe25f33aed%3A0x9328a0927f02165c!2s982A%2C%20Defence%20Colony%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094"
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
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 AquaSparsh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;