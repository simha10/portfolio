import React from 'react';
import { Code, Database, Globe, Server, GitBranch, Layout } from 'lucide-react';
import TiltCard from './TiltCard';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Layout className="w-6 h-6" />,
            skills: [
                { name: 'Languages', items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'] },
                { name: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'] }
            ]
        },
        {
            title: 'Backend Development',
            icon: <Server className="w-6 h-6" />,
            skills: [
                { name: 'Runtime & Framework', items: ['Node.js', 'Express.js', 'Python Flask'] },
                { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'] },
                { name: 'APIs', items: ['RESTful API Design', 'WebSocket', 'Authentication (JWT)'] }
            ]
        },
        {
            title: 'DevOps & Cloud',
            icon: <Globe className="w-6 h-6" />,
            skills: [
                { name: 'Cloud Platforms', items: ['Google Cloud Run', 'Vercel', 'Render'] },
                { name: 'Containerization', items: ['Docker', 'Docker Compose'] },
                { name: 'Tools', items: ['Git', 'GitHub', 'CI/CD Pipelines'] }
            ]
        },
        {
            title: 'Development Tools',
            icon: <Code className="w-6 h-6" />,
            skills: [
                { name: 'Editors & IDEs', items: ['VS Code', 'Postman', 'MongoDB Compass'] },
                { name: 'Libraries', items: ['FFmpeg', 'Puppeteer', 'Lucide React', 'React Icons'] },
                { name: 'AI/ML Integration', items: ['Hugging Face Transformers', 'T5 Models'] }
            ]
        }
    ];

    return (
        <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold sm:text-5xl mb-4 text-white">
                        Technical Skills
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Technologies and tools I use to build production-ready applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <TiltCard key={categoryIndex} className="h-full">
                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-400">{category.title}</h3>
                                </div>

                                <div className="space-y-5">
                                    {category.skills.map((skillGroup, skillIndex) => (
                                        <div key={skillIndex}>
                                            <h4 className="text-base font-semibold text-white mb-2">
                                                {skillGroup.name}
                                            </h4>
                                            {skillGroup.items && (
                                                <div className="flex flex-wrap gap-2">
                                                    {skillGroup.items.map((item, itemIndex) => (
                                                        <span
                                                            key={itemIndex}
                                                            className="px-3 py-1.5 bg-gray-700 text-gray-300 text-sm rounded-md hover:bg-gray-600 transition-colors"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        Always learning and adapting new technologies to build better, more efficient solutions
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;