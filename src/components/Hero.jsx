import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black/30">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="inline-block">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">
                Hi, I'm <span className="text-white">Simhachalam Mandapudi</span>
              </span>
              <span className="block text-indigo-400 mt-2">Automation Engineer & Full-Stack Developer</span>
            </h1>
          </div>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Building Intelligent Automation Systems | Full-Stack Developer | AI-Ready Solutions
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center">
            <div className="rounded-md shadow transform transition duration-500 hover:scale-105">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;