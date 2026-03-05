import React from 'react';
import { FiCheckCircle, FiServer, FiDatabase, FiGlobe } from 'react-icons/fi';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold sm:text-5xl mb-4 text-white">
                        Work Experience
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Building production systems at scale
                    </p>
                </div>

                {/* Main Experience Card */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-12 hover:border-indigo-500 transition-colors">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-indigo-900/30 rounded-lg flex items-center justify-center">
                                <FiGlobe className="w-8 h-8 text-indigo-400" />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white">Application Developer</h3>
                            <p className="text-lg text-indigo-400 mt-1">LRM Consultants • Remote</p>
                            <p className="text-gray-400 mt-2 text-sm">May 2025 – Present</p>

                            <div className="mt-6 space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    Full-stack developer responsible for designing, developing, deploying, and maintaining
                                    production web applications used by real users. Working across the entire stack with
                                    React, Node.js, Express, MongoDB, PostgreSQL, Docker, and cloud platforms.
                                </p>

                                {/* Key Achievements */}
                                <div className="mt-6 p-6 bg-gray-700/50 rounded-lg">
                                    <h4 className="font-semibold text-white mb-4">Key Achievements</h4>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Built and deployed 2 production systems serving active user bases</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Maintained 99%+ uptime across all production deployments</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Reduced deployment time by 80% through containerization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Optimized database queries improving response times by 40%</span>
                                        </li>
                                    </ul>
                                </div>

                                <ul className="space-y-3 mt-6">
                                    <li className="flex items-start">
                                        <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">Designed and implemented RESTful API architecture for workforce management and survey data collection systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">Architected database schemas in MongoDB and PostgreSQL for efficient query performance and data integrity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">Implemented containerized deployment using Docker on Google Cloud Run, reducing infrastructure overhead</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">Developed role-based authentication systems securing sensitive workforce and survey data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">Maintain production systems with regular updates, bug fixes, and performance optimizations based on user feedback</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <p className="text-sm text-gray-400 font-medium mb-3">Architecture & Technologies: React, Node.js, Express, MongoDB, PostgreSQL, Supabase, Docker, Google Cloud Run, Vercel, JWT Authentication, REST APIs, CI/CD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-colors">
                        <div className="flex items-start mb-4">
                            <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                                <FiServer className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">System Architecture</h3>
                                <p className="text-gray-400 text-sm mt-1">Scalable design patterns</p>
                            </div>
                        </div>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>RESTful API design with Express.js middleware</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>Containerized microservices on Google Cloud Run</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>Database indexing for query optimization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>JWT-based stateless authentication</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-colors">
                        <div className="flex items-start mb-4">
                            <div className="p-3 rounded-lg bg-indigo-900/30 mr-4">
                                <FiDatabase className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Infrastructure</h3>
                                <p className="text-gray-400 text-sm mt-1">Production deployment</p>
                            </div>
                        </div>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>Docker containerization for consistent environments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>CI/CD pipelines for automated deployments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>Cloud Run serverless scaling</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>Vercel edge network for frontend delivery</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;