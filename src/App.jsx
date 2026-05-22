import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';

const AppInner = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0c0c0c',
      color: '#e8e8e8',
      fontFamily: "'Geist', sans-serif",
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Background depth */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse at 15% 15%, rgba(255,255,255,0.018) 0%, transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(255,255,255,0.012) 0%, transparent 55%)' }} />
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }} />

      {/* Sticky Header — full-width so blur spans edge-to-edge */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: scrolled ? 'rgba(12,12,12,0.82)' : 'rgba(12,12,12,0)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>

          {/* Logo — always links home */}
          <Link to="/" className="group" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', transition: 'opacity 0.2s', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.72}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >
            {!isHome && (
              <ArrowLeft size={16} className="text-[#555] group-hover:text-[#e8e8e8] group-hover:-translate-x-1.5 transition-all duration-300 transform" />
            )}
            <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #252525, #2e2e2e)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2e2e2e', boxShadow: '0 1px 4px rgba(0,0,0,0.5)', flexShrink: 0 }}>
              <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Abhay Gadhvi" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', position: 'relative', zIndex: 1 }} onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div>
              <div style={{ fontWeight: '500', fontSize: '15px', color: '#e8e8e8', lineHeight: 1.2 }}>Abhay Gadhvi</div>
              <div style={{ fontSize: '12px', color: '#555', marginTop: '2px' }}>Full Stack Developer</div>
            </div>
          </Link>

          {/* Resume CTA */}
          <a href={`${import.meta.env.BASE_URL}Abhay_Gadhvi_Resume.pdf`} download="Abhay_Gadhvi_Resume.pdf" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e8e8e8', color: '#000', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', textDecoration: 'none', transition: 'opacity 0.2s', border: '1px solid #e8e8e8', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >
            <Download size={15} /> Resume
          </a>
        </div>
      </header>

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 20px' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{ padding: '24px 2px 12px 2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#555', marginTop: 'auto' }}>
          <span>© 2026 Abhay Gadhvi</span>
          <span>Ahmedabad, Gujarat · IST (UTC+5:30)</span>
        </footer>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      `}</style>
    </div>
  );
};

const App = () => (
  <Router basename="/my-portfolio">
    <AppInner />
  </Router>
);

export default App;