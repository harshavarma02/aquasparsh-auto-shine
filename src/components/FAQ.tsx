import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including Advanced Robotic Car Wash, Paint Protection Film (PPF), Ceramic Coating, and professional Car Detailing. Each service is designed to maintain and enhance your vehicle's appearance and protection."
    },
    {
      question: "How long does a typical car wash take?",
      answer: "The duration varies depending on the service package chosen. A quick wash typically takes 30-45 minutes, while detailed services like ceramic coating or PPF installation may require several hours to ensure the highest quality results."
    },
    {
      question: "Do you use eco-friendly products?",
      answer: "Yes, we prioritize environmental responsibility by using eco-friendly cleaning products and water-saving techniques in our services while maintaining superior cleaning and protection standards."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment through our website's contact form, by calling us directly, or by visiting our location in Sainikpuri. We recommend booking in advance to ensure availability at your preferred time."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Everything you need to know about our car care services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;