import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';


const Home = () => {
    const experience = [
        { period: "12/2024 — Now", company: "Procuregenie", role: "Full Stack Developer" },
        { period: "01/2024 — 06/2024", company: "v3cube Technolabs", role: "PHP Developer – Intern" },
        { period: "09/2023 — 12/2023", company: "Seawind Solutions", role: "Python Developer – Intern" },
        { period: "2021 — 2024", company: "Sal College of Engineering", role: "Computer Engineering" },
        { period: "2019 — 2021", company: "L.J. University", role: "Diploma – Computer Engineering" },
    ];

    const skills = ["React", "Node.js", "PHP", "Python", "JavaScript", "PostgreSQL", "MongoDB", "CSS", "Java", "NumPy", "Pandas", "Git"];

    const card = {
        background: '#191919',
        border: '1px solid #2e2e2e',
        borderRadius: '16px',
        padding: '22px',
        boxSizing: 'border-box',
        boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
    };

    return (
        <div className="flex flex-col gap-3">

            {/* ROW 1: Hero, About, Exp/Edu */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] gap-3">

                {/* Hero / Identity */}
                <div style={{ ...card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div style={{ position: 'relative', width: '82px', height: '82px', borderRadius: '50%', background: 'linear-gradient(135deg, #252525, #2e2e2e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '600', color: '#777', border: '1px solid #2e2e2e', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', marginBottom: '18px' }}>
                        <span style={{ position: 'absolute', zIndex: 0 }}>A</span>
                        <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Abhay Gadhvi" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', position: 'relative', zIndex: 1 }} onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <h1 style={{ fontSize: '20px', color: '#e8e8e8', fontWeight: '500', margin: '0 0 8px 0' }}>Abhay Gadhvi</h1>
                    <p style={{ fontSize: '13px', color: '#888', margin: '0 0 12px 0' }}>Full Stack Developer</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 12px', background: '#1e1e1e', border: '1px solid #333', borderRadius: '24px', fontSize: '12px', color: '#aaa', fontWeight: '500' }}>
                        3+ Years Experience
                    </div>
                </div>

                {/* About */}
                <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: '#555' }}>About</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <a href={`${import.meta.env.BASE_URL}Abhay_Gadhvi_Resume.pdf`} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#666', textDecoration: 'none', fontSize: '13px', fontWeight: '500', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#e8e8e8'}
                                onMouseLeave={e => e.currentTarget.style.color = '#666'}>
                                CV <ExternalLink size={13} />
                            </a>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite' }} />
                        </div>
                    </div>
                    <p style={{ fontSize: '14.5px', color: '#999', lineHeight: 1.8, margin: 0 }}>
                        Computer engineer with a background in software development, systems design, and hardware integration. I build scalable solutions, optimize performance, and solve complex problems — fast, clean, and purposeful.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', paddingTop: '22px' }}>
                        {skills.map(s => (
                            <span key={s}
                                style={{ fontSize: '12px', padding: '4px 11px', background: '#141414', border: '1px solid #444', borderRadius: '20px', color: '#bbb', cursor: 'default' }}
                            >{s}</span>
                        ))}
                    </div>
                </div>

                {/* Experience & Education */}
                <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '20px' }}>Experience & Education</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {experience.map((e, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <div>
                                    <div style={{ fontSize: '14px', color: '#e2e2e2', fontWeight: '500' }}>{e.role}</div>
                                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{e.company}</div>
                                </div>
                                <div style={{ fontSize: '12px', color: '#444' }}>{e.period}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ROW 2: Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects.map((p, i) => (
                    <Link to={`/project/${p.id}`} key={i} style={{ textDecoration: 'none', display: 'block' }}>
                        <div style={{ ...card, padding: 0, display: 'flex', flexDirection: 'column', height: '380px', transition: 'border-color 0.2s, background 0.2s', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.background = '#1e1e1e'; const img = e.currentTarget.querySelector('img'); if(img) img.style.transform = 'scale(1.03)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e2e2e'; e.currentTarget.style.background = '#191919'; const img = e.currentTarget.querySelector('img'); if(img) img.style.transform = 'scale(1)'; }}>
                            
                            <div style={{ padding: '30px 30px 0 30px', zIndex: 2 }}>
                                <div style={{ fontSize: '22px', color: '#e8e8e8', fontWeight: '600', marginBottom: '8px' }}>{p.title}</div>
                                <div style={{ fontSize: '14px', color: '#888', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.desc}</div>
                            </div>

                            <div style={{ flex: 1, marginTop: '30px', paddingLeft: '30px', position: 'relative' }}>
                                {(p.images?.[0] || p.image) ? (
                                    <img
                                        src={p.images?.[0] || p.image}
                                        alt={p.title}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top left',
                                            borderTopLeftRadius: '12px',
                                            borderTop: '1px solid #333',
                                            borderLeft: '1px solid #333',
                                            boxShadow: '-8px -8px 24px rgba(0,0,0,0.5)',
                                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transformOrigin: 'bottom right',
                                        }}
                                        draggable={false}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        borderTopLeftRadius: '12px',
                                        borderTop: '1px solid #333',
                                        borderLeft: '1px solid #333',
                                        background: '#111',
                                        backgroundImage: 'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)',
                                        backgroundSize: '30px 30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '-8px -8px 24px rgba(0,0,0,0.5)',
                                    }}>
                                        {React.cloneElement(p.icon, { size: 32, color: '#e8e8e8' })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* ROW 3: Certifications, GitHub, Contact */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-3">

                {/* Certifications (Unchanged) */}
                <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '20px' }}>Certifications</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1, justifyContent: 'center' }}>
                        {[
                            { since: "Google", title: "Data Analytics & Management", role: "Coursera Certified", active: true },
                            { since: "Google", title: "Data Visualization", role: "Coursera Certified", active: true },
                            { since: "Gov. of India", title: "Digital Marketing", role: "Government Certified", active: false },
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '12px', color: '#444', whiteSpace: 'nowrap', paddingTop: '2px', minWidth: '80px' }}>{s.since}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ fontSize: '14px', color: '#e2e2e2', fontWeight: '500' }}>{s.title}</span>
                                        {s.active && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />}
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>{s.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* GitHub */}
                <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                        <span style={{ fontSize: '13px', color: '#555' }}>GitHub</span>
                        <Github size={16} color="#555" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center' }}>
                        {[
                            { label: "Repos", value: "20+" },
                            { label: "Commits", value: "500+" },
                            { label: "PRs", value: "30+" },
                        ].map((stat, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '13px', color: '#555' }}>{stat.label}</span>
                                <span style={{ fontSize: '16px', color: '#e8e8e8', fontWeight: '500' }}>{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact / Get in Touch */}
                <div style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '500', color: '#e8e8e8', margin: '0 0 12px 0' }}>Let's work together.</h2>
                    <p style={{ fontSize: '14px', color: '#888', marginBottom: '26px', lineHeight: 1.6 }}>Currently open for new opportunities<br />and interesting projects.</p>

                    <div style={{ display: 'flex', gap: '16px', marginBottom: '26px' }}>
                        <a href="https://github.com/abhaygadhvi11" target="_blank" rel="noreferrer"
                            style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', transition: 'all 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.background = '#222'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = 'transparent'; }}
                        >
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhay-gadhvi-4937792b2" target="_blank" rel="noreferrer"
                            style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', transition: 'all 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.background = '#222'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = 'transparent'; }}
                        >
                            <Linkedin size={20} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gadhviabhay11@gmail.com" target="_blank" rel="noreferrer"
                            style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', transition: 'all 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.background = '#222'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = 'transparent'; }}
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gadhviabhay11@gmail.com" target="_blank" rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#e8e8e8', color: '#000', padding: '11px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none', transition: 'opacity 0.2s', border: '1px solid #e8e8e8' }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
                            onMouseLeave={e => e.currentTarget.style.opacity = 1}
                        >
                            <Mail size={16} /> Get In Touch
                        </a>
                        <a href="tel:9099480268" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#e8e8e8'}
                            onMouseLeave={e => e.currentTarget.style.color = '#888'}>
                            <Phone size={14} /> +91 9099480268
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
