import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block animate-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I'm Simhachalam <span>Mandapudi</span>
            </span>
            <span className="block text-indigo-400 mt-2">MERN Stack Developer</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Crafting beautiful and responsive web interfaces with modern technologies. Passionate about creating exceptional user experiences.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;