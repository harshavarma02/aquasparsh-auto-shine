import { Car, Shield, Paintbrush, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const services = [
    {
      title: "CAR WASH",
      items: [
        "Quick wash",
        "Complete wash",
        "Lotus wash",
        "Premium cleaning"
      ]
    },
    {
      title: "PPF PROTECTION",
      items: [
        "TPU Protection",
        "Paint Protection",
        "Glass Treatment",
        "Alloy Treatment"
      ]
    },
    {
      title: "DETAILING SERVICE",
      items: [
        "Interior Detailing",
        "Exterior Detailing",
        "Ceramic Coating",
        "Engine Detailing"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-primary">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <Sparkles className="w-5 h-5 text-primary mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;