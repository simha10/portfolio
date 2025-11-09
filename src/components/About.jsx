import React from 'react';
import { Code, Cpu, Globe, Database, Zap, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Cpu size={24} className='text-indigo-400' />, title: 'Automation Engineering', description: 'Building tools that eliminate repetitive tasks' },
    { icon: <Globe size={24} className='text-indigo-400' />, title: 'Full-Stack Development', description: 'React, Node.js, MongoDB with system design thinking' },
    { icon: <Brain size={24} className='text-indigo-400' />, title: 'AI Integration', description: 'Connecting machine learning models with web interfaces' },
    { icon: <Database size={24} className='text-indigo-400' />, title: 'Data Processing', description: 'Efficiently handling large datasets and metadata extraction' },
    { icon: <Zap size={24} className='text-indigo-400' />, title: 'System Architecture', description: 'Designing scalable solutions for real-world problems' },
    { icon: <Code size={24} className='text-indigo-400' />, title: 'Core Technologies', description: 'JavaScript, Python, FFmpeg, Puppeteer, nut.js' },
  ];

  return (
    <section id="about" className="relative py-20 bg-black/30 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-12">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20"></div>
            <img
              src="/profile.jpg"
              alt="Developer workspace"
              className="rounded-full shadow-2xl w-full h-full object-cover relative z-10 border-4 border-indigo-500/30"
            />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Automation-focused Full-Stack Developer | 2025 CSE Graduate | Building Production-Level Tools That Reduce Manual Work by 80%+
            </p>

            <p className="text-lg text-gray-300 mb-8">
              I specialize in creating intelligent automation solutions that bridge the gap between traditional workflows and AI-powered systems. With experience in real-world production environments, I've developed tools that compress geo-tagged videos without metadata loss, automate GUI workflows, and extract actionable insights from video telemetry data.
            </p>

            <p className="text-lg text-gray-300 mb-12">
              Currently exploring AI-Full Stack integration to build smarter, scalable solutions that handle complex data processing with minimal human intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 transform transition duration-500 hover:scale-105 hover:border-indigo-500 hover:shadow-xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-indigo-900/30">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-300">{skill.title}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;