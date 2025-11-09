import React, { useState } from 'react';
import { Mail, Phone, MapPin, Zap, Cpu } from 'lucide-react';
import Mailform from './Mailform';
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
    <section id="contact" className="relative py-20 bg-black/30 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Let's Connect
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Interested in automating your workflows or integrating AI into your systems?
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <TiltCard>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transform transition duration-500 hover:border-indigo-500 hover:shadow-xl">
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-gray-300">mandapudisimhachalam@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="mt-1 text-gray-300">+91 8639445966</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="mt-1 text-gray-300">Srikakulam, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-indigo-400 mr-2" />
                      <span className="text-gray-300">Automation</span>
                    </div>
                    <div className="flex items-center">
                      <Cpu className="w-5 h-5 text-indigo-400 mr-2" />
                      <span className="text-gray-300">AI Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
          <div>
            <Mailform />
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;