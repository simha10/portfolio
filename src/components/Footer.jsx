import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/simha10" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mandapudisimhachalam@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">&copy; {new Date().getFullYear()} Simhachalam Mandapudi. All rights reserved.</p>
            <p>Full Stack Developer | Production Systems Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;