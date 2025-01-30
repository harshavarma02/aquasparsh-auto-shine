import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c3ae6ffd-a97e-42af-ba9b-c475d86e68aa.png')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 flex items-center justify-center text-white px-4 py-20 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Transform Your Car's Appearance
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 font-light">
              Experience premium auto detailing and car spa services in Sainikpuri. Since 2024, we've been setting new standards in car care and protection.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/services"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                Our Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/links"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-primary/50 hover:border-primary text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Important Links
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;