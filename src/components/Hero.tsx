import { motion } from 'framer-motion';
import GridMotion from './GridMotion';

const Hero = () => {
  const items = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    'Advanced Robotic Car Wash',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
    'Paint Protection Film',
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785',
    'Ceramic Coating',
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9',
    'Car Detailing',
    'https://images.unsplash.com/photo-1605515298946-d062f2e9da53',
    'Premium Service',
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785',
    'Quality Care',
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-secondary to-primary overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center pt-20 pb-10">
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
      
      <div className="w-full z-20 mt-8">
        <GridMotion items={items} />
      </div>
    </div>
  );
};

export default Hero;