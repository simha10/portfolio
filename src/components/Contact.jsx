import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Mailform from './Mailform';

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
    <section id="contact" className="py-20 bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Me</h2>
          <p className="mt-4 text-xl text-gray-100">
            Let's discuss your frontend project
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="space-y-10">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-100">mandapudisimhachalam@gmail.com.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-100">+91 8639445966</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-100">Srikaulam, Andhrapradesh, India</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Mailform />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
