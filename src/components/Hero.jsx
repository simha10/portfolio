import React from 'react';
import { ArrowRight } from 'lucide-react';
import Background3D from './Background3D';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Background3D />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
          >
            <span className="block animate-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I'm Simhachalam <span>Mandapudi</span>
            </span>
            <span className="block text-indigo-400 mt-2">MERN Stack Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
          >
            Crafting beautiful and responsive web interfaces with modern technologies. Passionate about creating exceptional user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="mt-8 max-w-md mx-auto sm:flex sm:justify-center"
          >
            <div className="rounded-md shadow">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/60" />
    </section>
  );
};

export default Hero;