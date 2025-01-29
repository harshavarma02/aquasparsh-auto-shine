import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Important Links", href: "/links" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/956c1a0c-037f-44b2-89c9-df162168fe01.png" 
                alt="AquaSparsh Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <span className="text-xl font-bold text-secondary">AquaSparsh</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-primary transition-colors duration-200 ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-primary px-6 py-2 rounded-md text-white hover:bg-primary/90 transition-colors duration-200"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="block px-3 py-2 text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;