import { Car, Shield, Wrench, Sparkles, Zap, Droplets } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8 text-blue-500" />,
      title: "Car Wash",
      description: "From quick washes to premium services with ceramic finish."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "PPF Protection",
      description: "Paint Protection Film for long-lasting vehicle protection."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      title: "Car Detailing",
      description: "Comprehensive detailing services for interior and exterior."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      title: "Ceramic Coating",
      description: "Advanced coating for superior shine and protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Engine Coating",
      description: "Protective coating for your vehicle's engine."
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Specialized Treatments",
      description: "Including fabric protection, headlight cleaning, and more."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-[#0A0F1A] overflow-hidden">
      {/* Radial gradient */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, #60A5FA 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">Our Services</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Experience premium car care services with cutting-edge technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-[#0D1425] border-blue-900/20 hover:border-blue-500/40 transition-all duration-300"
            >
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