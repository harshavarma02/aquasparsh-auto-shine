import { useState } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4477347462447!2d78.53892807487555!3d17.487954183800283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bd8bc796473%3A0x3da70b029146b89e!2sTotalEnergies%20-%20AquaSparsh%20Car%20Spa!5e0!3m2!1sen!2sin!4v1706913425484!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-8">We'd love to hear from you! Fill out the form below to get in touch.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 rounded bg-cyan-400 hover:bg-cyan-500 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
