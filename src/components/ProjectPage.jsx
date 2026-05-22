import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Target, Zap, CheckCircle, Mail, Linkedin, Phone } from 'lucide-react';
import { projects } from '../data/projects';
import ImageCarousel from './ImageCarousel';
import TodoChimpBento from './TodoChimpBento';
import AttendanceBento from './AttendanceBento';
import AIServiceBento from './AIServiceBento';
import ContentLibBento from './ContentLibBento';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div style={{ color: '#e8e8e8', textAlign: 'center', padding: '40px' }}>Project not found</div>;

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '60px' }}>

            {/* Custom Hero Section */}
            <div className="flex flex-col mb-16 pt-8">
                {/* Brand / Tag */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                        {React.cloneElement(project.icon, { size: 16, color: '#aaa' })}
                    </div>
                    <span className="text-[#aaa] font-medium text-sm">{project.title}</span>
                </div>

                {/* Main Heading (Using Description) */}
                <h1 className="text-[32px] md:text-[44px] font-semibold text-[#e8e8e8] mb-8 leading-[1.3]">
                    {project.desc}
                </h1>

                {/* Hero Image / Mockup */}
                <div className="w-full rounded-3xl border border-[#2e2e2e] bg-[#141414] overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 bg-[#111] opacity-50 bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] [background-size:24px_24px]"></div>
                    {project.images?.[0] || project.image ? (
                        <img 
                            src={project.images?.[0] || project.image} 
                            alt={project.title} 
                            className="w-full h-auto relative z-10 rounded-3xl border-b-0 border-[#333] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        />
                    ) : (
                        <div className="w-full h-[400px] relative z-10 flex items-center justify-center">
                             {React.cloneElement(project.icon, { size: 64, color: '#333' })}
                        </div>
                    )}
                </div>
            </div>

            {/* Tech Stack */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                    <span key={t} style={{ fontSize: '13px', padding: '6px 12px', background: '#141414', border: '1px solid #2a2a2a', borderRadius: '20px', color: '#888' }}>{t}</span>
                ))}
            </div>

            {/* Storytelling Content */}
            <div className="flex flex-col gap-24 mt-8 mb-16 text-[#aaa] text-[16px] leading-[1.8]">
                
                {/* Problem Section (Text Left, Image Right) */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-[#222] border border-[#333] rounded-full text-xs text-[#888] font-medium tracking-wide mb-4">The Challenge</span>
                        <h2 className="text-[28px] font-semibold text-[#e8e8e8] mb-4 leading-tight">Problem</h2>
                        <p>{project.problem}</p>
                    </div>
                    {project.images?.[1] ? (
                        <div className="flex-1 w-full relative group">
                            <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-3xl group-hover:bg-blue-500/10 transition-colors duration-500"></div>
                            <img src={project.images[1]} alt="Problem Visualization" className="w-full h-auto rounded-3xl border border-[#333] relative z-10 shadow-xl" />
                        </div>
                    ) : null}
                </div>

                {/* Solution Section (Image Left, Text Right) */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-[#222] border border-[#333] rounded-full text-xs text-[#888] font-medium tracking-wide mb-4">The Fix</span>
                        <h2 className="text-[28px] font-semibold text-[#e8e8e8] mb-4 leading-tight">Solution</h2>
                        <p>{project.solution}</p>
                    </div>
                    {project.images?.[2] ? (
                        <div className="flex-1 w-full relative group">
                            <div className="absolute inset-0 bg-emerald-500/5 blur-xl rounded-3xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
                            <img src={project.images[2]} alt="Solution Visualization" className="w-full h-auto rounded-3xl border border-[#333] relative z-10 shadow-xl" />
                        </div>
                    ) : null}
                </div>

            </div>

            {project.id === 'todochimp' && <TodoChimpBento />}
            {project.id === 'attendance-system' && <AttendanceBento />}
            {project.id === 'ai-service' && <AIServiceBento />}
            {project.id === 'content-library' && <ContentLibBento />}

            {/* Impact Section (Centered Highlight) */}
            <div className="flex flex-col items-center text-center mt-8 mb-16 bg-[#141414] border-y border-[#333] py-16 px-6 relative overflow-hidden rounded-3xl md:rounded-none md:border-x-0 border-x">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"></div>
                <span className="inline-block px-3 py-1 bg-purple-900/20 border border-purple-500/30 text-purple-400 rounded-full text-xs font-medium tracking-wide mb-6">The Outcome</span>
                <p className="text-[22px] md:text-[28px] font-medium text-[#ECE8DF] max-w-2xl leading-relaxed italic mb-12">
                    &ldquo;{project.impact}&rdquo;
                </p>

                {/* Metrics Grid */}
                {project.metrics && (
                    <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {project.metrics.map((metric, idx) => {
                            const icons = [<Target size={20} className="text-[#aaa]" />, <Zap size={20} className="text-[#aaa]" />, <CheckCircle size={20} className="text-[#aaa]" />];
                            return (
                                <div key={idx} className="flex flex-col items-center p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        {icons[idx % icons.length]}
                                        <h3 className="text-3xl font-semibold text-[#e8e8e8] tracking-tight">
                                            {metric.value}
                                        </h3>
                                    </div>
                                    <span className="text-[#777] font-medium tracking-wide uppercase text-[11px]">{metric.label}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"></div>
            </div>

            {/* Centered View on GitHub Button */}
            <div className="flex justify-center mt-12 mb-4">
                <a href={project.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#222] border border-[#333] hover:border-[#444] rounded-3xl px-4 py-2 text-xs font-semibold text-[#e8e8e8] no-underline transition-all duration-300 shadow-md group"
                >
                    <Github size={14} className="transform group-hover:scale-110 transition-transform duration-300" /> View on GitHub
                </a>
            </div>

            {/* Sleek Footer Contact Section */}
            <div className="mt-20 pt-12 border-t border-[#222]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                    
                    {/* Left Column: Let's Work Together & Status */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[12px] text-[#666] font-medium uppercase tracking-wider">Available for new opportunities</span>
                        </div>
                        <h2 className="text-[24px] font-semibold text-[#e8e8e8] mb-2">Let's work together.</h2>
                        <p className="text-[#888] text-[14px] leading-relaxed max-w-sm">
                            Have an interesting project or position? Let's build something exceptional.
                        </p>
                    </div>

                    {/* Right Column: Contact CTAs & Socials */}
                    <div className="flex flex-col gap-5 min-w-[280px]">
                        {/* Action button */}
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gadhviabhay11@gmail.com" target="_blank" rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#e8e8e8] hover:bg-[#d8d8d8] text-black px-6 py-3.5 rounded-3xl text-sm font-semibold whitespace-nowrap transition-all duration-300 shadow-md no-underline"
                        >
                            <Mail size={16} /> Get In Touch
                        </a>

                        {/* Social Links & Phone */}
                        <div className="flex items-center justify-between border-t border-[#222] pt-4">
                            {/* Socials */}
                            <div className="flex gap-4">
                                <a href="https://github.com/abhaygadhvi11" target="_blank" rel="noreferrer"
                                    className="text-[#666] hover:text-[#e8e8e8] transition-colors duration-300"
                                >
                                    <Github size={16} />
                                </a>
                                <a href="https://www.linkedin.com/in/abhay-gadhvi-4937792b2" target="_blank" rel="noreferrer"
                                    className="text-[#666] hover:text-[#e8e8e8] transition-colors duration-300"
                                >
                                    <Linkedin size={16} />
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gadhviabhay11@gmail.com" target="_blank" rel="noreferrer"
                                    className="text-[#666] hover:text-[#e8e8e8] transition-colors duration-300"
                                >
                                    <Mail size={16} />
                                </a>
                            </div>

                            {/* Phone */}
                            <a href="tel:9099480268" className="inline-flex items-center gap-1.5 text-[#666] hover:text-[#e8e8e8] text-[13px] transition-colors duration-300 no-underline">
                                <Phone size={13} /> +91 9099480268
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
