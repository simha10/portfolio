import React, { useState } from 'react';
import { ExternalLink, Github, Gamepad2, Briefcase, Zap, Brain, Cpu, Database } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
  const [activeSection, setActiveSection] = useState('professional');

  const professionalProjects = [
    {
      title: 'HealMate – AI Healthcare Assistant',
      description: 'AI-powered healthcare solution leveraging T5 Transformers to predict diagnoses and generate personalized treatment plans. Integrated machine learning with a responsive React frontend for seamless medical consultation experiences.',
      image: 'https://img.freepik.com/premium_photo/ai-robot-doctor-talking-with-patient-realistic_979520-21323.jpg?w=2000',
      tech: ['React', 'Python Flask', 'Hugging Face Transformers', 'T5 Model'],
      githubUrl: 'https://github.com/simha10/HealMate.git',
      impact: 'AI Integration'
    },
    {
      title: 'SkillSpark – Learning Management System',
      description: 'Scalable LMS platform connecting learners with industry-relevant roadmaps and internship opportunities. Built with MongoDB for flexible data handling and responsive design for cross-device accessibility.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'RESTful APIs', 'Responsive Design'],
      liveUrl: 'https://skillspark-x366.onrender.com',
      githubUrl: 'https://github.com/simha10/SkillSpark.git',
      impact: 'Full-Stack Development'
    },
    {
      title: 'Task Distributer – Team Workflow Visualization',
      description: 'Real-time dashboard solution for visualizing and distributing team tasks efficiently. Implements role-based access control with MongoDB backend for persistent data management and WebSocket connections for live updates.',
      image: 'https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['React', 'Express.js', 'MongoDB', 'WebSocket', 'Real-time Dashboard'],
      liveUrl: 'https://task-distributer.onrender.com/',
      githubUrl: 'https://github.com/simha10/Task-Distributer.git',
      impact: 'System Design'
    },
    {
      title: 'Safe Compressor – Metadata-Preserving Video Tool',
      description: 'Enterprise-grade video compression solution that maintains geo-tagged metadata integrity. Processes large video files without quality degradation while preserving crucial location and timestamp data for analytics.',
      image: 'https://res.cloudinary.com/cloudinary-marketing/images/f_auto,q_auto/v1649730799/Web_Assets/blog/cloudinary_blog_dam_metadata_21986e3716/cloudinary_blog_dam_metadata_21986e3716.jpg?_i=AA',
      tech: ['Node.js', 'FFmpeg', 'Metadata Processing', 'File System API'],
      githubUrl: 'https://github.com/simha10/video-compressor.git',
      impact: 'Automation'
    },
    {
      title: 'Telemetry Automation Suite',
      description: 'Comprehensive automation framework that orchestrates GUI-based workflows for sequential video processing. Eliminates manual intervention in data-heavy operations while ensuring consistent quality output.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['Node.js', 'Puppeteer', 'nut.js', 'Process Automation', 'Error Handling'],
      githubUrl: 'https://github.com/simha10/TelemetryAutomation.git',
      impact: 'Process Optimization'
    },
    {
      title: 'Celestra 2025 – Tech Fest Website',
      description: 'Built the official website for CSE\'s technical fest. Features a responsive layout, smooth animations, and online registration system.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.rNcEMSOcESeHF8oWRla9WwHaD8?pid=Api&P=0&h=180',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Google Forms'],
      liveUrl: 'https://celestra-2k25.vercel.app/',
      githubUrl: 'https://github.com/simha10/TechFest-Website.git',
      impact: 'Frontend Development'
    }
  ];

  const miniProjects = [
    {
      title: 'To-Do List',
      description: 'Simple to-do list application with local storage support.',
      image: 'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D',
      tech: ['React', 'Local Storage', 'Bootstrap CSS'],
      liveUrl: 'https://simhas-todo-list.netlify.app/',
      githubUrl: 'https://github.com/simha10/React_Projects.git',
    },
    {
      title: 'Tic-Tac-Toe game',
      description: 'Classic game with multiplayer support and game history tracking.',
      image: 'https://media.istockphoto.com/id/1374451885/photo/xo-game-winning-situation.jpg?s=612x612&w=0&k=20&c=WZVnnbcfmvtbK2iahCJX1_61dIgVFbk-CpoP7y2KEqc=',
      tech: ['HTML', 'CSS Grid', 'JavaScript'],
      liveUrl: 'https://simhas-tic-tac-toe.netlify.app/',
      githubUrl: 'https://github.com/simha10/HTML_CSS_JS_mini-projects/tree/main/TicTacToe',
    },
    {
      title: 'Stone Paper Scissors Game',
      description: 'Interactive game with score tracking and game history.',
      image: 'https://media.istockphoto.com/id/2189704814/photo/paper-beats-rock-hand-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=U01fEcgzsgDzNs6grdfyaMxb02Lir-L2wo98zncpLqk=',
      tech: ['HTML', 'CSS Grid', 'JavaScript'],
      liveUrl: 'https://simhas-rock-paper-scissor-game.netlify.app/',
      githubUrl: 'https://github.com/simha10/HTML_CSS_JS_mini-projects/tree/main/stone-paper-scissor',
    },
  ];

  // Select projects based on active section
  const selectedProjects = activeSection === 'professional' ? professionalProjects : miniProjects;

  return (
    <section id="projects" className="relative py-20 bg-black/30 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Showcasing Real-World Solutions | From Automation Tools to AI-Powered Applications
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveSection('professional')}
            className={`flex items-center px-6 py-3 rounded-lg ${activeSection === 'professional'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-white hover:bg-gray-700'
              } transition-colors duration-200`}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Professional Projects
          </button>
          <button
            onClick={() => setActiveSection('mini')}
            className={`flex items-center px-6 py-3 rounded-lg ${activeSection === 'mini'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-white hover:bg-gray-700'
              } transition-colors duration-200`}
          >
            <Gamepad2 className="w-5 h-5 mr-2" />
            Mini Projects
          </button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project, index) => (
            <TiltCard key={index} className="h-full">
              <div className="bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-indigo-500 hover:shadow-2xl h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.impact && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {project.impact}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-300 flex-grow">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm text-indigo-300 bg-indigo-900/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={project.liveUrl} target='_blank' rel='noreferrer'
                      className="flex items-center text-indigo-300 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </a>
                    <a
                      href={project.githubUrl} target='_blank' rel='noreferrer'
                      className="flex items-center text-indigo-300 hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;