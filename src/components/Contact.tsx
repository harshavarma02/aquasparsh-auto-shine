import { useState } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-[#0A0F1A] overflow-hidden">
      {/* Top radial gradient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, #60A5FA 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)'
        }}
      />
      
      {/* Bottom radial gradient */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, #60A5FA 0%, transparent 70%)',
          transform: 'translate(30%, 30%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-gradient mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-8">We'd love to hear from you! Fill out the form below to get in touch.</p>
            <form className="space-y-6 w-full">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className="w-full p-4 rounded bg-[#0D1425] border border-blue-900/20 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-4 rounded bg-[#0D1425] border border-blue-900/20 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Company *"
                  className="w-full p-4 rounded bg-[#0D1425] border border-blue-900/20 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <textarea
                  placeholder="Message *"
                  className="w-full p-4 rounded bg-[#0D1425] border border-blue-900/20 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={6}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 rounded bg-gradient-to-r from-blue-600 to-blue-700 
                         hover:from-blue-700 hover:to-blue-800 text-white font-semibold 
                         transition-all duration-300 transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;