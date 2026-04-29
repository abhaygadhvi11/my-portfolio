import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { projects } from '../data/projects';
import ImageCarousel from './ImageCarousel';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div style={{ color: '#e8e8e8', textAlign: 'center', padding: '40px' }}>Project not found</div>;

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '60px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '14px', marginBottom: '32px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8e8e8'}
                onMouseLeave={e => e.currentTarget.style.color = '#888'}>
                <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            {/* Hero */}
            <div style={{ height: '300px', borderRadius: '16px', border: '1px solid #272727', position: 'relative', overflow: 'hidden', marginBottom: '32px' }}>
                {project.images ? (
                    <ImageCarousel images={project.images} title={project.title} />
                ) : project.image ? (
                    <>
                        <div style={{ position: 'absolute', inset: 0, background: '#111', backgroundImage: 'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        <img src={project.image} alt={project.title} style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '65%', height: 'auto', borderRadius: '12px 12px 0 0', border: '1px solid #333', borderBottom: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.6)', zIndex: 1, objectFit: 'cover', objectPosition: 'top' }} />
                    </>
                ) : (
                    <>
                        <div style={{ position: 'absolute', inset: 0, background: '#111', backgroundImage: 'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.3 }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: '#1a1a1a', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {React.cloneElement(project.icon, { size: 32, color: '#e8e8e8' })}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#e8e8e8', marginBottom: '16px' }}>{project.title}</h1>

            {/* Tech Stack */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                    <span key={t} style={{ fontSize: '13px', padding: '6px 12px', background: '#141414', border: '1px solid #2a2a2a', borderRadius: '20px', color: '#888' }}>{t}</span>
                ))}
            </div>

            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', color: '#aaa', lineHeight: 1.8, fontSize: '15px' }}>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#e8e8e8', marginBottom: '12px' }}>Problem</h2>
                    <p>{project.problem}</p>
                </div>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#e8e8e8', marginBottom: '12px' }}>Solution</h2>
                    <p>{project.solution}</p>
                </div>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#e8e8e8', marginBottom: '12px' }}>Impact</h2>
                    <p>{project.impact}</p>
                </div>
            </div>

            <div style={{ height: '1px', background: '#222', margin: '48px 0' }} />

            {/* Action */}
            <a href={project.github} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#191919', border: '1px solid #333', borderRadius: '12px', padding: '12px 24px', fontSize: '14px', color: '#e8e8e8', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#222'}
                onMouseLeave={e => e.currentTarget.style.background = '#191919'}>
                <Github size={18} /> View on GitHub
            </a>
        </div>
    );
};

export default ProjectPage;
