import React from 'react';
import { FiVideo, FiZap, FiDatabase, FiTrendingUp, FiClock, FiCheckCircle } from 'react-icons/fi';
import TiltCard from './TiltCard';

const Experience = () => {
    const tools = [
        {
            icon: <FiVideo className="w-6 h-6" />,
            title: 'Safe Compressor',
            tagline: 'Lossless Geo-Video Compression Solution',
            description: 'Enterprise-grade video compression solution that maintains geo-tagged metadata integrity. Processes large video files without quality degradation while preserving crucial location and timestamp data for analytics.',
            tech: ['Node.js', 'FFmpeg', 'Metadata Processing', 'File System API'],
            impact: [
                'Preserved 100% of critical metadata during compression',
                'Achieved 60% average file size reduction',
                'Enabled batch processing of 500+ videos simultaneously',
                'Integrated automated validation pipeline ensuring data integrity'
            ],
            accentColor: 'indigo'
        },
        {
            icon: <FiZap className="w-6 h-6" />,
            title: 'Telemetry Automation',
            tagline: 'Intelligent GUI Workflow Automation Engine',
            description: 'Comprehensive automation framework that orchestrates GUI-based workflows for sequential video processing. Eliminates manual intervention in data-heavy operations while ensuring consistent quality output.',
            tech: ['Node.js', 'Puppeteer', 'nut.js', 'Process Automation', 'Error Handling'],
            impact: [
                'Automated 1000+ sequential video processing tasks monthly',
                'Eliminated 80% of manual work in telemetry processing',
                'Maintained 99.9% error-free consecutive processing rate',
                'Implemented real-time progress monitoring dashboard'
            ],
            accentColor: 'indigo'
        },
        {
            icon: <FiDatabase className="w-6 h-6" />,
            title: 'Metadata Extractor',
            tagline: 'High-Performance Geo-Data Analysis Pipeline',
            description: 'High-performance batch extraction tool for geo-spatial video metadata with structured CSV export for data analysis.',
            tech: ['Node.js', 'fs Module', 'CSV Parser', 'Stream Processing'],
            impact: [
                'Extracted coordinates, altitude, speed from 1000+ videos',
                'Generated structured CSV reports for business intelligence',
                'Reduced data analysis time from hours to minutes',
                'Configured customizable extraction parameters for diverse needs'
            ],
            accentColor: 'indigo'
        }
    ];

    return (
        <section id="experience" className="relative py-24 bg-black/30 text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold sm:text-5xl mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
                        Automation Impact
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Solving Real-World Problems Through Intelligent Automation | Delivering Measurable Business Impact
                    </p>
                </div>

                {/* Company Card */}
                <TiltCard className="mb-12">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transform transition duration-500 hover:border-indigo-500 hover:shadow-xl">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-indigo-400">Automation Engineer</h3>
                                <p className="text-lg text-gray-300 mt-1">LRM Consultanats • Remote</p>
                                <p className="text-gray-400 mt-2">May 2025 - Present</p>
                                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300">
                                        <FiTrendingUp className="mr-2" /> Process Optimization
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300">
                                        <FiClock className="mr-2" /> Time Reduction
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300">
                                        <FiCheckCircle className="mr-2" /> Quality Assurance
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-gray-300 text-lg">
                                Developed and deployed enterprise-grade automation solutions that streamline video processing workflows. Reduced manual effort by 80% while maintaining zero-error rates in critical data processing tasks. Architected scalable systems that process thousands of geo-tagged videos with preserved metadata integrity.
                            </p>
                        </div>
                    </div>
                </TiltCard>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <TiltCard key={index} className="h-full">
                            <div
                                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition duration-500 hover:border-indigo-500 hover:shadow-xl h-full"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900/50 mb-4">
                                    {tool.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                                <p className="text-indigo-400 text-sm mb-3">{tool.tagline}</p>
                                <p className="text-gray-300 mb-4">{tool.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-200 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-200 mb-2">Business Impact:</h4>
                                    <ul className="space-y-1">
                                        {tool.impact.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <span className="text-indigo-400 mr-2 mt-1">•</span>
                                                <span className="text-gray-300 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Experience;