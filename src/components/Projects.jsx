import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from './Card';

const Projects = () => {
  const engineeringProjects = [
    {
      title: 'SkillSpark – Learning Management System',
      description: 'Scalable LMS platform connecting learners with industry-relevant roadmaps and internship opportunities. Built with MongoDB for flexible data management and responsive design for cross-device accessibility.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'RESTful APIs', 'Responsive Design'],
      liveUrl: 'https://skillspark-x366.onrender.com',
      githubUrl: 'https://github.com/simha10/SkillSpark.git',
      type: 'Full Stack'
    },
    {
      title: 'Task Distributor – Team Workflow Dashboard',
      description: 'Real-time dashboard for visualizing and distributing team tasks efficiently. Implements WebSocket connections for instant updates and role-based access control with MongoDB backend for persistent data management.',
      image: 'https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['React', 'Express.js', 'MongoDB', 'WebSocket', 'Real-time Updates'],
      liveUrl: 'https://task-distributer.onrender.com/',
      githubUrl: 'https://github.com/simha10/Task-Distributer.git',
      type: 'System Design'
    },
    {
      title: 'Safe Compressor – Video Processing Tool',
      description: 'Enterprise-grade video compression solution preserving geo-tagged metadata integrity. Processes large video files using FFmpeg without quality degradation while maintaining crucial location and timestamp data.',
      image: 'https://res.cloudinary.com/cloudinary-marketing/images/f_auto,q_auto/v1649730799/Web_Assets/blog/cloudinary_blog_dam_metadata_21986e3716/cloudinary_blog_dam_metadata_21986e3716.jpg?_i=AA',
      tech: ['Node.js', 'FFmpeg', 'Metadata Processing', 'File System API'],
      githubUrl: 'https://github.com/simha10/video-compressor.git',
      type: 'Automation'
    },
    {
      title: 'Celestra 2025 – Tech Fest Platform',
      description: 'Official website for CSE technical fest featuring responsive layout, smooth animations with Framer Motion, and online registration system. Built to handle high traffic during event periods.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.rNcEMSOcESeHF8oWRla9WwHaD8?pid=Api&P=0&h=180',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Form Integration'],
      liveUrl: 'https://celestra-2k25.vercel.app/',
      githubUrl: 'https://github.com/simha10/TechFest-Website.git',
      type: 'Frontend'
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Engineering Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Technical projects demonstrating full-stack development capabilities and production-ready code quality
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engineeringProjects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                  {project.type}
                </div>
              </div>
              <div className="flex-grow p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-gray-300 text-sm flex-grow leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex space-x-4 pt-4 border-t border-gray-700">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            All projects follow production best practices including clean architecture, error handling, and scalable design patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;