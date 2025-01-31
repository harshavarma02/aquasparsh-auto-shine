import { Car, Shield, Paintbrush, Sparkles } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Advanced Robotic Car Wash",
      description: "State-of-the-art automated washing system for perfect results every time."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Paint Protection Film",
      description: "Premium protection for your vehicle's paint against scratches and damage."
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection and shine for your vehicle's exterior."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Car Detailing",
      description: "Professional detailing services for both interior and exterior."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TotalEnergies Wash-AquaSparsh Car Spa is your premier auto detailing service provider. 
            We combine cutting-edge technology with expert care to deliver exceptional results for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-gradient p-6 rounded-lg hover:shadow-lg hover:shadow-blue-900/20 
                       transition-all duration-300"
            >
              <div className="text-blue-500 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;