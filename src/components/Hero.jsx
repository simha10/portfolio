import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white bg-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl tracking-tight font-bold sm:text-6xl md:text-7xl mb-4">
            <span className="block text-white">Simhachalam Mandapudi</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-indigo-400 font-semibold mb-8">
            Full Stack Developer | Production Systems Engineer
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 sm:text-xl leading-relaxed">
            Building and deploying production-scale web applications with focus on scalability, reliability, and real-world impact. Currently developing full-stack systems at LRM Consultants serving active users.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center gap-4">
            <a
              href="#production"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              View Production Work
            </a>
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors mt-4 sm:mt-0"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;