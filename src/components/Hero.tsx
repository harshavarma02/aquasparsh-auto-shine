import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to TotalEnergies Wash - AquaSparsh Car Spa!
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            We are a premier auto detailing and car spa service located in Sainikpuri, Hyderabad. Since our inception in 2024, we have been dedicated to redefining car care and protection with a focus on innovation, precision, and customer satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="bg-white text-primary px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200"
            >
              Our Services
            </a>
            <a
              href="/links"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              Important Links
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;