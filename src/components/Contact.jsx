import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import TiltCard from './TiltCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in discussing full-stack development opportunities or production system architecture?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <TiltCard>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:mandapudisimhachalam@gmail.com" className="text-gray-300 hover:text-indigo-400 transition-colors mt-1 block">
                      mandapudisimhachalam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <a href="tel:+918639445966" className="text-gray-300 hover:text-indigo-400 transition-colors mt-1 block">
                      +91 8639445966
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300 mt-1">Srikakulam, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect Online</h4>
                  <div className="flex items-center space-x-6">
                    <a
                      href="https://github.com/simha10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
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