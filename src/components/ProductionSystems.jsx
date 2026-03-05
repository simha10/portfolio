import React from 'react';
import { ExternalLink, Server, Database } from 'lucide-react';

const ProductionSystems = () => {
    const systems = [
        {
            icon: <Server size={32} className="text-indigo-400" />,
            name: 'SAMS - Staff Attendance Management System',
            tagline: 'Production Workforce Management Platform',
            description:
                'A full-scale staff attendance management system deployed in production for LRM Consultants. The platform enables real-time attendance tracking, administrative oversight, and secure workforce monitoring through a modern, scalable web architecture.',
            features: [
                'Real-time staff attendance tracking and monitoring',
                'Admin dashboard for workforce management and reporting',
                'Secure JWT-based authentication system',
                'Role-based access control (RBAC) for different user levels',
                'Automated attendance reports and analytics'
            ],
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Google Cloud Run', 'Vercel', 'JWT'],
            liveUrl: 'https://attendance.lrmconsultant.in',
            responsibilities: [
                'Designed and implemented RESTful API architecture for attendance management',
                'Built MongoDB database schema with optimized indexing for query performance',
                'Implemented containerized deployment using Docker on Google Cloud Run',
                'Developed role-based authentication and authorization system with JWT tokens',
                'Maintain production system with regular updates and performance monitoring'
            ],
            metrics: {
                users: 'Active workforce tracking',
                uptime: '99%+ production availability',
                deployment: 'Automated CI/CD pipeline',
                security: 'JWT + RBAC implementation'
            }
        },
        {
            icon: <Database size={32} className="text-indigo-400" />,
            name: 'Socio-Economic Survey Platform',
            tagline: 'Large-Scale Field Data Collection System',
            description:
                'A comprehensive survey management platform for ward and mohalla-level socio-economic data collection. The system supports controlled surveyor access, real-time administrative monitoring, and structured data storage for analysis and policy-making.',
            features: [
                'Ward and mohalla-level hierarchical survey organization',
                'Surveyor access control and territory assignment management',
                'Real-time admin dashboard for monitoring survey progress',
                'Structured data collection with validation rules',
                'Data export capabilities for statistical analysis'
            ],
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Cloud Run'],
            liveUrl: 'https://socio-economic-survey.vercel.app/',
            responsibilities: [
                'Architected multi-level data model for hierarchical survey structure',
                'Implemented row-level security policies in MongoDB for data isolation',
                'Optimized database queries handling thousands of survey responses',
                'Built real-time synchronization for concurrent surveyor access',
                'Designed admin monitoring dashboard with live progress tracking'
            ],
            metrics: {
                scale: 'Multi-ward survey coverage',
                records: 'Thousands of responses processed',
                performance: 'Concurrent user support',
                architecture: 'Row-level security + Real-time sync'
            }
        }
    ];

    return (
        <section id="production" className="relative py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold sm:text-5xl mb-4 text-white">
                        Production Systems
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Live applications serving real users with proven scalability and reliability
                    </p>
                </div>

                {/* Systems List */}
                <div className="space-y-12">
                    {systems.map((system, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-colors"
                        >
                            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
                                {/* Left Column - Overview */}
                                <div className="lg:col-span-1">
                                    <div className="flex items-start lg:flex-col lg:items-center text-center lg:text-center mb-6">
                                        <div className="p-4 rounded-xl bg-gray-700 lg:mb-4">
                                            {system.icon}
                                        </div>
                                        <div className="ml-4 lg:ml-0">
                                            <h3 className="text-xl font-bold text-white">{system.name}</h3>
                                            <p className="text-indigo-400 text-sm mt-1">{system.tagline}</p>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="space-y-3 mb-6">
                                        {Object.entries(system.metrics).map(([key, value], idx) => (
                                            <div key={idx} className="flex items-center justify-center lg:justify-start text-gray-300 text-sm">
                                                <span className="text-indigo-400 font-semibold mr-2 capitalize">{key}:</span>
                                                <span>{value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={system.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-base font-medium rounded-md transition-colors"
                                    >
                                        View Live System
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </a>
                                </div>

                                {/* Middle Column - Details */}
                                <div className="lg:col-span-2">
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        {system.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="font-semibold text-white mb-3">Key Features</h4>
                                            <ul className="space-y-2">
                                                {system.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                                                        <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-white mb-3">Engineering Responsibilities</h4>
                                            <ul className="space-y-2">
                                                {system.responsibilities.map((resp, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                                                        <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white mb-3">Architecture & Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {system.techStack.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-gray-700 text-gray-300 text-sm rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        These production systems demonstrate end-to-end ownership: architecture, development, deployment, and ongoing maintenance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductionSystems;
