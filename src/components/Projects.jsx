import React, { useState } from 'react';
import { ExternalLink, Github, Gamepad2, Briefcase } from 'lucide-react';

const Projects = () => {
  const [activeSection, setActiveSection] = useState('professional');

  const professionalProjects = [
    {
      title: 'Weather Application',
      description: 'Interactive weather website with real-time updates and location-based forecasts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Weather API', 'CSS Grid'],
      liveUrl: 'https://waether-app-main.netlify.app/',
      githubUrl: 'https://github.com/simha10/weather-app-main.git',
    },
    {
      title: 'Login Authentication',
      description: 'A secure login system featuring password hashing, session management, and role-based access control for enhanced user security.',
      image: 'data:image/jpeg;base64,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',
      tech: ['React', 'CSS Animations', 'Express', 'Node'],
      liveUrl: '#',
      githubUrl: 'https://github.com/simha10/login-authentication.git',
    },
    {
      title: 'SkillSpark learning platform',
      description: 'An interactive online learning platform offering roadmaps and internships designed for seamless accessibility across devices',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Tailwind', 'Responsiveness'],
      liveUrl: 'https://skillspark-x366.onrender.com',
      githubUrl: 'https://github.com/simha10/SkillSpark.git',
    },
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

  return (
    <section id="projects" className="py-20 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore my frontend development projects
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveSection('professional')}
            className={`flex items-center px-6 py-3 rounded-lg ${activeSection === 'professional'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Professional Projects
          </button>
          <button
            onClick={() => setActiveSection('mini')}
            className={`flex items-center px-6 py-3 rounded-lg ${activeSection === 'mini'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
          >
            <Gamepad2 className="w-5 h-5 mr-2" />
            Mini Projects
          </button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(activeSection === 'professional' ? professionalProjects : miniProjects).map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.liveUrl} target='_blank' rel='noreferrer'
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl} target='_blank' rel='noreferrer'
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;