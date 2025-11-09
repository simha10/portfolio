import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Portfolio
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/simha10" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284" target='_blank' className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:simhachalammandapudi@gmail.com" target='_blank' className="text-gray-400 hover:text-red-400 transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#experience" className="block px-3 py-2 text-gray-300 hover:text-white">Experience</a>
            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white">Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;