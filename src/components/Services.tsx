import { Shield, Spray, Car, Paint } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Advanced Robotic Car Wash",
      description: "State-of-the-art automated washing system for perfect results every time.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Protection Film",
      description: "Premium protection for your vehicle's paint against scratches and damage.",
    },
    {
      icon: <Spray className="w-8 h-8" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection and shine for your vehicle's exterior.",
    },
    {
      icon: <Paint className="w-8 h-8" />,
      title: "Car Detailing",
      description: "Comprehensive cleaning and restoration of your vehicle inside and out.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;