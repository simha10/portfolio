import React from 'react';
import { Code, Palette, Layout } from 'lucide-react';


const About = () => {
  const skills = [
    { icon: <Code size={24} className='text-purple-500'/>, title: 'Frontend', description: 'HTML,CSS, JS,React, Next.js' },
    { icon: <Palette size={24} className='text-purple-500' />, title: 'Backend', description: 'MySQL,Express' },
    { icon: <Layout size={24} className='text-purple-500' />, title: 'Others', description: 'Git,GitHub,Vscode' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-12 transition-transform hover:scale-105 duration-300">
            <img
              src="/profile.jpg"
              alt="Developer workspace"
              className="rounded-full shadow-2xl w-full h-full object-cover hover:shadow-indigo-500/50"
            />
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-xl text-gray-300 mb-12">
              Frontend developer passionate about creating beautiful, responsive, and user-friendly web applications. Specialized in modern JavaScript frameworks and UI/UX best practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
                >
                  <div className="flex justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-400">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
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