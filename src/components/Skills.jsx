import React from 'react';
import { Code, Cpu, Globe, Database, Zap, Brain, GitBranch, Server } from 'lucide-react';
import TiltCard from './TiltCard';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Technical Expertise',
            icon: <Code className="w-6 h-6" />,
            skills: [
                { name: 'Automation & Scripting', items: ['Node.js', 'Python', 'FFmpeg', 'Puppeteer', 'nut.js'] },
                { name: 'Frontend Development', items: ['React', 'Next', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
                { name: 'Backend & Databases', items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'RESTful APIs'] },
                { name: 'AI & Machine Learning', items: ['Hugging Face', 'Transformers', 'T5 Models'] },
                { name: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'CI/CD Pipelines'] }
            ]
        },
        {
            title: 'Core Capabilities',
            icon: <Zap className="w-6 h-6" />,
            skills: [
                { name: 'System Design Thinking', description: 'For scalable solutions' },
                { name: 'Data Processing', description: '& Metadata Handling' },
                { name: 'Performance Optimization', description: '& Efficiency Gains' },
                { name: 'Cross-functional Collaboration', description: '& Documentation' },
                { name: 'Problem-solving', description: 'With Real-world Impact Metrics' }
            ]
        }
    ];

    return (
        <section id="skills" className="relative py-20 bg-black/30 text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold sm:text-5xl mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Technical Proficiencies and Core Capabilities That Drive Real-World Impact
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <TiltCard key={categoryIndex} className="h-full">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transform transition duration-500 hover:border-indigo-500 hover:shadow-xl h-full">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-400">{category.title}</h3>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skillGroup, skillIndex) => (
                                        <div key={skillIndex}>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                {skillGroup.name}
                                                {skillGroup.description && (
                                                    <span className="text-gray-300 font-normal"> {skillGroup.description}</span>
                                                )}
                                            </h4>
                                            {skillGroup.items && (
                                                <div className="flex flex-wrap gap-2">
                                                    {skillGroup.items.map((item, itemIndex) => (
                                                        <span
                                                            key={itemIndex}
                                                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
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
            </div>
        </section>
    );
};

export default Skills;