import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-primary overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to AquaSparsh
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Premium Car Care Services in Sainikpuri
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-colors duration-200"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md backdrop-blur-sm transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;