import React from 'react';
import { ArrowLeft, Printer, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0c0c0c',
      color: '#e8e8e8',
      padding: '24px 16px',
      fontFamily: "'Inter', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      boxSizing: 'border-box',
    }}>
      {/* CSS Stylesheet for Screen Styling & Flawless A4 Printing */}
      <style>{`
        /* Print-specific layout overrides */
        @media print {
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Hide all non-printable components */
          header, footer, .control-bar, .no-print {
            display: none !important;
          }

          /* Reset resume container to use full page width and natural white flow */
          .resume-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            background: #ffffff !important;
            border-radius: 0 !important;
            border: none !important;
          }

          /* Define exact print area spacing */
          .resume-sheet {
            padding: 0.35in 0.4in !important;
            box-sizing: border-box;
          }

          /* Prevent page-breaks in the middle of sections or entries */
          .avoid-break {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Custom page margin setting for PDF export */
          @page {
            size: A4 portrait;
            margin: 0.3in 0.3in;
          }

          /* Ensure links show as standard black text in print */
          a {
            color: #000000 !important;
            text-decoration: none !important;
          }
        }

        /* Screen-specific interactive styles */
        .action-btn:hover {
          background: #ffffff !important;
          color: #000000 !important;
          transform: translateY(-1px);
        }
        .back-btn:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          color: #ffffff !important;
        }
        .resume-link {
          color: #2563eb;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .resume-link:hover {
          text-decoration: underline;
          color: #1d4ed8;
        }
      `}</style>

      {/* 1. Control / Navigation Bar (Screen Only) */}
      <div className="control-bar" style={{
        maxWidth: '820px',
        margin: '0 auto 20px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#191919',
        border: '1px solid #2e2e2e',
        borderRadius: '16px',
        padding: '12px 18px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
      }}>
        <Link to="/" className="back-btn" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          border: '1px solid #333',
          color: '#aaa',
          padding: '8px 16px',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: '500',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}>
          <ArrowLeft size={15} /> Back to Portfolio
        </Link>

        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={`${import.meta.env.BASE_URL}Abhay_Gadhvi_Resume.pdf`}
            download="Abhay_Gadhvi_Resume.pdf"
            className="action-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#e8e8e8',
              border: '1px solid #e8e8e8',
              color: '#000',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
          >
            <Download size={15} /> Download PDF
          </a>

          <button onClick={handlePrint} className="action-btn" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            border: '1px solid #444',
            color: '#e8e8e8',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}>
            <Printer size={15} /> Print
          </button>
        </div>
      </div>

      {/* 2. A4 Resume Page Sheet */}
      <div className="resume-container" style={{
        maxWidth: '820px',
        margin: '0 auto',
        background: '#ffffff',
        color: '#000000',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
        overflow: 'hidden',
        border: '1px solid #2e2e2e',
      }}>
        <div className="resume-sheet" style={{
          padding: '48px 56px',
          boxSizing: 'border-box',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}>

          {/* HEADER SECTION */}
          <div style={{
            textAlign: 'center',
            marginBottom: '18px',
            borderBottom: '1px solid #000',
            paddingBottom: '12px',
          }}>
            <h1 style={{
              fontSize: '26px',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 4px 0',
              letterSpacing: '-0.3px',
            }}>Abhay Gadhvi</h1>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#333333',
              marginBottom: '6px',
            }}>
              Full Stack Developer | 2+ years of experience
            </div>
            <div style={{
              fontSize: '11px',
              color: '#444444',
              fontWeight: '400',
              lineHeight: '1.6',
            }}>
              <span>Ahmedabad, Gujarat, India</span>
              <span style={{ margin: '0 6px', color: '#999' }}>|</span>
              <a href="tel:9099480268" className="resume-link">+91 9099480268</a>
              <span style={{ margin: '0 6px', color: '#999' }}>|</span>
              <a href="mailto:gadhviabhay11@gmail.com" className="resume-link">gadhviabhay11@gmail.com</a>
              <span style={{ margin: '0 6px', color: '#999' }}>|</span>
              <a href="https://www.linkedin.com/in/abhay-gadhvi-4937792b2" target="_blank" rel="noreferrer" className="resume-link">LinkedIn</a>
              <span style={{ margin: '0 6px', color: '#999' }}>|</span>
              <a href="https://github.com/abhaygadhvi11" target="_blank" rel="noreferrer" className="resume-link">GitHub</a>
              <span style={{ margin: '0 6px', color: '#999' }}>|</span>
              <a href="https://abhaygadhvi11.github.io/my-portfolio" target="_blank" rel="noreferrer" className="resume-link">Portfolio</a>
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{
              fontSize: '12.5px',
              fontWeight: '700',
              color: '#000000',
              letterSpacing: '0.6px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '3px',
              textTransform: 'uppercase',
            }}>EXPERIENCE</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Job 1 */}
              <div className="avoid-break">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    Full Stack Developer
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#333333' }}>
                    Dec 2024 – Present
                  </div>
                </div>
                <div style={{ fontSize: '11.5px', fontStyle: 'italic', color: '#444444', marginBottom: '4px' }}>
                  Procuregenie – B2B Procurement Platform
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Took ownership of migrating a legacy Spring Boot and JSP application to a modern React (TypeScript) and Node.js stack, and now own new feature development on it.</li>
                  <li style={{ marginBottom: '3px' }}>Delivered the Vendor Management, Tenders, Approvals, Purchase Order (P.O.) and RFQ modules across both the Java and MERN codebases.</li>
                  <li style={{ marginBottom: '3px' }}>Cut page load times from 3.5s to 1s (~70% faster) using pagination, caching, database query indexing and code splitting.</li>
                  <li style={{ marginBottom: '0px' }}>Tested all APIs with Postman, wrote unit tests, and set up a CI/CD pipeline; worked with AWS, PostgreSQL (pgAdmin) and MongoDB.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="avoid-break">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    PHP Developer Intern
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#333333' }}>
                    Jan 2024 – Jun 2024
                  </div>
                </div>
                <div style={{ fontSize: '11.5px', fontStyle: 'italic', color: '#444444', marginBottom: '4px' }}>
                  v3cube Technolabs
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Built an admin dashboard and a complete CRUD module using PHP, JavaScript, HTML and CSS.</li>
                  <li style={{ marginBottom: '0px' }}>Gained hands-on grounding in PHP, Java, HTML and core web development practices.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="avoid-break">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    Python Developer Intern
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#333333' }}>
                    Sep 2023 – Dec 2023
                  </div>
                </div>
                <div style={{ fontSize: '11.5px', fontStyle: 'italic', color: '#444444', marginBottom: '4px' }}>
                  Seawind Solutions
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Used Python, NumPy and Pandas for data analysis and data manipulation tasks.</li>
                  <li style={{ marginBottom: '0px' }}>Worked within the SDLC and contributed to full-stack web development using Python.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS SECTION */}
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{
              fontSize: '12.5px',
              fontWeight: '700',
              color: '#000000',
              letterSpacing: '0.6px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '3px',
              textTransform: 'uppercase',
            }}>PROJECTS</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {/* Project 1 */}
              <div className="avoid-break">
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000', marginBottom: '3px' }}>
                  Climate Hazard Trend Analyzer <span style={{ fontWeight: '400', fontSize: '11px', color: '#444' }}>| React, Vite, FastAPI, MongoDB Atlas, Leaflet, Chart.js</span>
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Built and deployed (Vercel + Render) a full-stack app that detects heatwave events using a WMO 1991–2020 baseline and day-of-year 95th-percentile thresholds.</li>
                  <li style={{ marginBottom: '3px' }}>Implemented OLS regression and Mann-Kendall trend tests, with strict gap handling that excludes years with over 10% missing data.</li>
                  <li style={{ marginBottom: '0px' }}>Added MongoDB Atlas caching, rate limiting, an interactive Leaflet map and CSV export; cached responses return in under 500ms.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="avoid-break">
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000', marginBottom: '3px' }}>
                  Facial Recognition Attendance System <span style={{ fontWeight: '400', fontSize: '11px', color: '#444' }}>| Python, OpenCV, FastAPI, Next.js, PostgreSQL</span>
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Built a real-time biometric attendance pipeline with OpenCV, reaching 99.8% matching accuracy on a tested dataset.</li>
                  <li style={{ marginBottom: '0px' }}>Developed a FastAPI backend logging clock-ins to PostgreSQL within milliseconds, preventing proxy check-ins; built a live admin monitor in Next.js.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="avoid-break">
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000', marginBottom: '3px' }}>
                  AI Service – Custom Prompt & LLM Integration Platform <span style={{ fontWeight: '400', fontSize: '11px', color: '#444' }}>| Next.js, Python, OpenAI API, REST, Microservices</span>
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Architected a centralized microservice for LLM calls shared by multiple web apps, with prompt versioning so prompts update without client code changes.</li>
                  <li style={{ marginBottom: '0px' }}>Built REST endpoints with middleware for token-usage tracking and rate limiting; added caching and request pooling to cut latency and API cost.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="avoid-break">
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000', marginBottom: '3px' }}>
                  TodoChimp – Task Management & Progress System <span style={{ fontWeight: '400', fontSize: '11px', color: '#444' }}>| React, Node.js, Express, PostgreSQL, Tailwind CSS</span>
                </div>
                <ul style={{ margin: '0', paddingLeft: '18px', fontSize: '11px', color: '#222222', lineHeight: '1.45', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '3px' }}>Architected a multi-user task management and delegation platform for cross-team execution, with a centralized activity log tracking every assignment and status change.</li>
                  <li style={{ marginBottom: '3px' }}>Developed role-based state routing with live indicators ("Assigned to You", "In Review", "Pending") for managers and developers.</li>
                  <li style={{ marginBottom: '0px' }}>Built an analytics dashboard showing completion statistics across frontend, backend and QA stages to surface pipeline blockages.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TECHNICAL SKILLS SECTION */}
          <div className="avoid-break" style={{ marginBottom: '18px' }}>
            <h2 style={{
              fontSize: '12.5px',
              fontWeight: '700',
              color: '#000000',
              letterSpacing: '0.6px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '3px',
              textTransform: 'uppercase',
            }}>TECHNICAL SKILLS</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '11px', color: '#222222', lineHeight: '1.45' }}>
              <div><strong>Languages:</strong> JavaScript, TypeScript, Java, Python, PHP, SQL</div>
              <div><strong>Frontend:</strong> React.js, Next.js, Vite, Tailwind CSS, HTML5, CSS3</div>
              <div><strong>Backend:</strong> Node.js, Express, FastAPI, Spring Boot, JSP, REST APIs, Microservices</div>
              <div><strong>Databases:</strong> PostgreSQL, MongoDB, pgAdmin</div>
              <div><strong>Tools & Cloud:</strong> Git, GitHub, Postman, AWS, CI/CD, Unit Testing, Vercel, Render, VS Code</div>
              <div><strong>Data:</strong> NumPy, Pandas</div>
              <div><strong>Core Concepts:</strong> Data Structures & Algorithms, System Design, SDLC, Agile</div>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="avoid-break" style={{ marginBottom: '18px' }}>
            <h2 style={{
              fontSize: '12.5px',
              fontWeight: '700',
              color: '#000000',
              letterSpacing: '0.6px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '3px',
              textTransform: 'uppercase',
            }}>EDUCATION</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    SAL College of Engineering
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#333333' }}>
                    2021 – 2024
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#333333' }}>
                  Bachelor of Engineering, Computer Engineering; CGPA: 8.0
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    L.J. University
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#333333' }}>
                    2019 – 2021
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#333333' }}>
                  Diploma, Computer Engineering; CGPA: 9.0
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS SECTION */}
          <div className="avoid-break" style={{ marginBottom: '0px' }}>
            <h2 style={{
              fontSize: '12.5px',
              fontWeight: '700',
              color: '#000000',
              letterSpacing: '0.6px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '3px',
              textTransform: 'uppercase',
            }}>CERTIFICATIONS</h2>

            <div style={{ fontSize: '11px', color: '#222222', lineHeight: '1.5' }}>
              • Data Analytics & Management – Google (Coursera) &nbsp;&nbsp;•&nbsp;&nbsp; Data Visualization – Google (Coursera)
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
