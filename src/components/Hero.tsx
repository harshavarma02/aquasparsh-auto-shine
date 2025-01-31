import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center text-white px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black pointer-events-none" />
      
      {/* Animated circles for visual interest */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Welcome to{' '}
            <span className="text-gradient">
              TotalEnergies Wash
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
          >
            AquaSparsh Car Spa
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
          >
            We are a premier auto detailing and car spa service located in Sainikpuri, Hyderabad. 
            Since our inception in 2024, we have been dedicated to redefining car care and protection 
            with a focus on innovation, precision, and customer satisfaction.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <a
              href="/services"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-lg 
                       text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 
                       transition-all duration-300 flex items-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/links"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-lg text-lg font-semibold
                       border-2 border-blue-500/50 hover:border-blue-500
                       hover:bg-blue-500/10 transition-all duration-300"
            >
              Important Links
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;