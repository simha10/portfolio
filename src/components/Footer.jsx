import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/simha10" target='_blank' className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284" target='_blank' className="text-gray-400 hover:text-blue-500">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:simhachalammandapudi@gmail.com" target='_blank' className="text-gray-400 hover:text-red-700">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Simhachalam M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;