import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';
import Card from './Card';

const About = () => {
  const expertise = [
    { icon: <Globe size={24} className='text-indigo-400' />, title: 'Full Stack Development', description: 'React, Node.js, Express, MongoDB - End-to-end application development' },
    { icon: <Server size={24} className='text-indigo-400' />, title: 'Production Deployment', description: 'Docker, Google Cloud Run, Vercel - Scalable cloud infrastructure' },
    { icon: <Database size={24} className='text-indigo-400' />, title: 'System Architecture', description: 'RESTful APIs, database design, authentication systems' },
    { icon: <Code size={24} className='text-indigo-400' />, title: 'Clean Code', description: 'Maintainable, tested, and documented production-ready code' },
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-10">
            <img
              src="/profile.jpg"
              alt="Simhachalam Mandapudi"
              className="rounded-full shadow-2xl w-full h-full object-cover border-4 border-indigo-500/50"
            />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold sm:text-5xl mb-6 text-white">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Application Developer at LRM Consultants | B.Tech CSE 2025 Graduate
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a Full Stack Developer with experience in building and deploying production web applications.
              Currently working at LRM Consultants, where I develop full-scale systems used by real users including
              the Staff Attendance Management System (SAMS) and a Socio-Economic Survey Platform for large-scale
              data collection.
            </p>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              My focus is on creating reliable, scalable solutions using modern technologies like React, Node.js,
              Express, MongoDB, PostgreSQL, and Docker. I handle the complete development lifecycle from architecture
              and database design to deployment and maintenance on cloud infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {expertise.map((item, index) => (
                <Card key={index} className="text-left">
                  <div className="flex items-start mb-3">
                    <div className="p-2 rounded-full bg-indigo-900/30 mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-300">{item.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;