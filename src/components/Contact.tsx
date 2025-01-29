import { useState } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-8">We'd love to hear from you! Fill out the form below to get in touch.</p>
            <form className="space-y-6 w-full">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Company *"
                  className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-400"
                  required
                />
                <textarea
                  placeholder="Message *"
                  className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-400"
                  rows={6}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 rounded bg-cyan-400 hover:bg-cyan-500 text-white font-semibold transition-colors"
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