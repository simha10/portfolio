import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/60 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-gray-900"
          >
            Portfolio
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 hover:text-lg hover:border-b-2 hover:border-blue-900 transition-all duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 hover:text-lg hover:border-b-2 hover:border-blue-900 transition-all duration-300">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-900 hover:text-lg hover:border-b-2 hover:border-blue-900 transition-all duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 hover:text-lg hover:border-b-2 hover:border-blue-900 transition-all duration-300">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/simha10" target='_blank' className="text-gray-700 hover:text-black">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284" target='_blank' className="text-gray-700 hover:text-blue-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:simhachalammandapudi@gmail.com.com" target='_blank' className="text-gray-700 hover:text-red-500">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;