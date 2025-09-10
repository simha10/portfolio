import React from 'react';
import { Code, Palette, Layout, Smartphone } from 'lucide-react';
import Background3D from './Background3D';
import { motion } from 'framer-motion';


const About = () => {
  const skills = [
    { icon: <Code size={24} className='text-cyan-400' />, title: 'Frontend', description: 'HTML, CSS, JavaScript, React' },
    { icon: <Smartphone size={24} className='text-fuchsia-400' />, title: 'Mobile', description: 'React Native, Expo' },
    { icon: <Layout size={24} className='text-purple-400' />, title: 'Backend', description: 'Node.js, Express, MongoDB, MySQL' },
    { icon: <Palette size={24} className='text-indigo-400' />, title: 'Tools', description: 'Git, GitHub, Figma, Postman, Vercel' },
    { icon: <Code size={24} className='text-emerald-400' />, title: 'Languages', description: 'English, Hindi, Telugu' },
    { icon: <Code size={24} className='text-pink-400' />, title: 'Interests', description: 'Web & App Dev, UI/UX, Open Source' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <Background3D />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-12 transition-transform hover:scale-105 duration-300">
            <img
              src="/profile.jpg"
              alt="Developer workspace"
              className="rounded-full shadow-2xl w-full h-full object-cover hover:shadow-indigo-500/50"
            />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6 bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-xl text-gray-300 mb-12">
              Web and Mobile developer crafting responsive, immersive experiences with React and React Native. I love blending performant code with delightful UI/UX.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg: gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-800/80 rounded-lg p-6 border border-white/5 hover:border-fuchsia-400/30 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/20"
                >
                  <div className="flex justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-300">{skill.title}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;