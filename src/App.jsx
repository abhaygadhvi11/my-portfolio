import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';

const App = () => {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: '#0c0c0c',
        color: '#e8e8e8',
        fontFamily: "'Geist', sans-serif",
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Background depth */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse at 15% 15%, rgba(255,255,255,0.018) 0%, transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(255,255,255,0.012) 0%, transparent 55%)' }} />
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Header */}
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '0 2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #252525, #2e2e2e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: '600', color: '#777', border: '1px solid #2e2e2e', boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>A</div>
              <div>
                <div style={{ fontWeight: '500', fontSize: '16px', color: '#e8e8e8' }}>Abhay Gadhvi</div>
                <div style={{ fontSize: '13px', color: '#555', marginTop: '1px' }}>Full Stack Developer</div>
              </div>
            </div>
          </header>

          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer style={{ padding: '24px 2px 12px 2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#333', marginTop: 'auto' }}>
            <span>© 2026 Abhay Gadhvi</span>
            <span>Ahmedabad, Gujarat · IST (UTC+5:30)</span>
          </footer>
        </div>

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        `}</style>
      </div>
    </Router>
  );
};

export default App;