import { Car, Shield, Wrench, Sparkles, Zap, Droplets } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8 text-cyan-400" />,
      title: "Car Wash",
      description: "From quick washes to premium services with ceramic finish."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "PPF Protection",
      description: "Paint Protection Film for long-lasting vehicle protection."
    },
    {
      icon: <Wrench className="w-8 h-8 text-cyan-400" />,
      title: "Car Detailing",
      description: "Comprehensive detailing services for interior and exterior."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
      title: "Ceramic Coating",
      description: "Advanced coating for superior shine and protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Engine Coating",
      description: "Protective coating for your vehicle's engine."
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-400" />,
      title: "Specialized Treatments",
      description: "Including fabric protection, headlight cleaning, and more."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Our Services</h2>
        <p className="text-gray-400 text-center mb-12">Experience premium car care services with cutting-edge technology</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;