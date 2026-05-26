import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
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
            padding: 0.45in 0.45in !important;
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
            margin: 0.4in 0.4in;
          }

          /* Ensure links show as standard black text in print (no blue underlines) */
          a {
            color: #000000 !important;
            text-decoration: none !important;
          }
        }

        /* Screen-specific interactive styles */
        .print-btn:hover {
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
          text-decoration: underline;
          transition: color 0.2s ease;
        }
        .resume-link:hover {
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

        <button onClick={handlePrint} className="print-btn" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#e8e8e8',
          border: '1px solid #e8e8e8',
          color: '#000',
          padding: '8px 18px',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}>
          <Printer size={15} /> Print / Save as PDF
        </button>
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
          padding: '52px 64px',
          boxSizing: 'border-box',
        }}>

          {/* HEADER SECTION */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 6px 0',
              letterSpacing: '-0.5px',
            }}>ABHAY GADHVI</h1>
            <div style={{
              fontSize: '13.5px',
              fontWeight: '700',
              color: '#222222',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              Full Stack Developer · 3+ Years Experience
            </div>
            <div style={{
              fontSize: '11px',
              color: '#444444',
              fontWeight: '500',
              lineHeight: '1.6',
            }}>
              <span style={{ display: 'inline-block' }}>Ahmedabad, Gujarat, India</span>
              <span style={{ margin: '0 5px', color: '#666' }}>|</span>
              <a href="tel:9099480268" className="resume-link" style={{ display: 'inline-block', color: '#2563eb', textDecoration: 'none' }}>+91 9099480268</a>
              <span style={{ margin: '0 5px', color: '#666' }}>|</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gadhviabhay11@gmail.com" className="resume-link" style={{ display: 'inline-block', color: '#2563eb', textDecoration: 'none' }}>gadhviabhay11@gmail.com</a>
              <span style={{ margin: '0 5px', color: '#666' }}>|</span>
              <a href="https://www.linkedin.com/in/abhay-gadhvi-4937792b2" target="_blank" rel="noreferrer" className="resume-link" style={{ display: 'inline-block', color: '#2563eb', textDecoration: 'none' }}>LinkedIn</a>
              <span style={{ margin: '0 5px', color: '#666' }}>|</span>
              <a href="https://github.com/abhaygadhvi11" target="_blank" rel="noreferrer" className="resume-link" style={{ display: 'inline-block', color: '#2563eb', textDecoration: 'none' }}>GitHub</a>
              <span style={{ margin: '0 5px', color: '#666' }}>|</span>
              <a href="https://abhaygadhvi11.github.io/my-portfolio" target="_blank" rel="noreferrer" className="resume-link" style={{ display: 'inline-block', color: '#2563eb', textDecoration: 'none' }}>Portfolio</a>
            </div>
          </div>

          {/* SUMMARY SECTION */}
          <div className="avoid-break" style={{ marginBottom: '22px' }}>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#2563eb',
              letterSpacing: '0.8px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '3px',
            }}>SUMMARY</h2>
            <p style={{
              fontSize: '11.5px',
              color: '#222222',
              lineHeight: '1.6',
              margin: '0',
              textAlign: 'justify',
            }}>
              Accomplished Full Stack Developer with 3+ years of overall experience engineering robust digital products, custom system architectures, and integrated database systems. Proficient in programming languages such as Python, PHP, CSS, React.js, Node.js, and Java, backed by a solid understanding of algorithms, data structures, and optimized backend systems. Demonstrates proven expertise in developing highly scalable software solutions, optimizing system performance, and troubleshooting complex technical bottlenecks with a track record of collaborative problem-solving and driving technological innovation in fast-paced teams.
            </p>
          </div>

          {/* SKILLS SECTION */}
          <div className="avoid-break" style={{ marginBottom: '22px' }}>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#2563eb',
              letterSpacing: '0.8px',
              margin: '0 0 8px 0',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '3px',
            }}>SKILLS</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ fontSize: '11.5px', color: '#222222', lineHeight: '1.4' }}>
                <strong>Full Stack Development:</strong> React.js, Node.js, PHP, Python, Java, JavaScript (ES6+), HTML5, CSS3, Express
              </div>
              <div style={{ fontSize: '11.5px', color: '#222222', lineHeight: '1.4' }}>
                <strong>Databases & Storage:</strong> PostgreSQL, MongoDB, SQL Database Management, Data Modeling
              </div>
              <div style={{ fontSize: '11.5px', color: '#222222', lineHeight: '1.4' }}>
                <strong>Data Analysis & Visualization:</strong> NumPy, Pandas, Data Analytics, Data Visualization, Data Evaluation
              </div>
              <div style={{ fontSize: '11.5px', color: '#222222', lineHeight: '1.4' }}>
                <strong>Tools & Technologies:</strong> Git, GitHub, VS Code, Webpack, Vite, Command Line, npm
              </div>
              <div style={{ fontSize: '11.5px', color: '#222222', lineHeight: '1.4' }}>
                <strong>Methodologies & Competencies:</strong> System Design, Algorithms & Data Structures, Agile Development, Testing & Debugging
              </div>
              <div style={{ fontSize: '11.5px', color: '#222222', lineHeight: '1.4' }}>
                <strong>Collaboration & Soft Skills:</strong> Teamwork & Collaboration, Professional Communication, Collaborative Problem Solving
              </div>
            </div>
          </div>

          {/* PROJECTS SECTION (SWAPPED TO FIRST) */}
          <div style={{ marginBottom: '22px' }}>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#2563eb',
              letterSpacing: '0.8px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '3px',
            }}>PROJECTS</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Project 1 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#000000' }}>
                    1. Content Library for Website Development
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#555555' }}>
                    Vite, React, Tailwind CSS, Lucide
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Engineered a highly optimized, fully searchable index of curated web development assets and UI kits with sub-millisecond filtering logic to expedite front-end developer discovery workflows.</li>
                  <li style={{ marginBottom: '4px' }}>Designed a local bookmarking and resource-saving interface utilizing client-side state, facilitating instant layout organization.</li>
                  <li style={{ marginBottom: '4px' }}>Implemented quality validation checks for catalog submissions, resulting in a premium, manually verified database of UI libraries, typography, animations, and icon resources.</li>
                  <li style={{ marginBottom: '0px' }}>Structured a responsive, grid-based catalog interface highlighting specialized category tags to minimize bookmark clutter and enhance visual discovery.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#000000' }}>
                    2. Facial Recognition System for Attendance
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#555555' }}>
                    Python, OpenCV, FastAPI, Next.js, PostgreSQL
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Designed and developed an automated real-time biometric attendance pipeline using advanced face detection models and the OpenCV library, achieving a matching accuracy of <strong>99.8%</strong>.</li>
                  <li style={{ marginBottom: '4px' }}>Created a secure, high-throughput backend using Python and the FastAPI framework, allowing biometric arrivals and clock-in events to be logged to a PostgreSQL database within milliseconds.</li>
                  <li style={{ marginBottom: '4px' }}>Substantially enhanced institutional attendance security and administrative efficiency by eliminating check-in fraud, manual entry errors, and credential sharing (buddy punching).</li>
                  <li style={{ marginBottom: '0px' }}>Built real-time logging monitors and biometric scanning animations to provide immediate validation and live status feedback to system administrators.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#000000' }}>
                    3. TodoChimp – Task Management & Progress System
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#555555' }}>
                    React, Node.js, Express, PostgreSQL, Tailwind
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Architected a multi-user task management and delegation platform using React, Node.js, Express, and PostgreSQL, facilitating seamless task delegation and cross-team execution.</li>
                  <li style={{ marginBottom: '4px' }}>Engineered a centralized activity log compiling every workflow shift, assignment update, and task status into a single comprehensive action timeline to secure group accountability.</li>
                  <li style={{ marginBottom: '4px' }}>Developed a robust state routing logic with real-time indicators ("Assigned to You", "In Review", "Pending") supporting distinct role permissions for managers and developers.</li>
                  <li style={{ marginBottom: '0px' }}>Built an interactive analytics dashboard rendering completion statistics across frontend, backend, and QA stages to assist teams in managing pipeline blockages.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#000000' }}>
                    4. AI Service – Custom Prompt & AI Integration Platform
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#555555' }}>
                    Next.js, Python, OpenAI API, REST APIs, microservices
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Architected a centralized, highly scalable microservice acting as a single source of truth for LLM interactions across sibling web applications, handling concurrent requests efficiently.</li>
                  <li style={{ marginBottom: '4px' }}>Designed a global prompt-versioning repository allowing complex developer prompts to be versioned and updated dynamically without client-side code modifications.</li>
                  <li style={{ marginBottom: '4px' }}>Built custom REST API endpoints (e.g. `/api/v1/generate`) equipped with robust middleware for tracking token usage metrics (inputs/outputs) and enforcing API rate limits.</li>
                  <li style={{ marginBottom: '0px' }}>Implemented efficient caching and request pooling strategies to minimize API execution latency and lower operational LLM integration costs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE SECTION (SWAPPED TO SECOND) */}
          <div style={{ marginBottom: '22px' }}>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#2563eb',
              letterSpacing: '0.8px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '3px',
            }}>WORK EXPERIENCE</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Job 1 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    1. Full Stack Developer
                  </div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                    Ahmedabad, India
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: '500', color: '#333333' }}>
                    Procuregenie
                  </div>
                  <div style={{ fontSize: '11px', color: '#555555' }}>
                    12/2024 - Present (3+ Years Experience Combined)
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Designed and developed full-stack web applications to support procurement and workflow management processes.</li>
                  <li style={{ marginBottom: '4px' }}>Worked across frontend and backend systems to build scalable, maintainable, and responsive product features.</li>
                  <li style={{ marginBottom: '4px' }}>Collaborated with cross-functional stakeholders to understand customer requirements and translate them into effective technical solutions.</li>
                  <li style={{ marginBottom: '4px' }}>Improved existing application performance and codebase efficiency through active code optimization and feature enhancements.</li>
                  <li style={{ marginBottom: '0px' }}>Utilized modern development tools and frameworks to ensure extreme reliability, efficiency, and a smooth UX.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    2. PHP Developer – Intern
                  </div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                    Ahmedabad, India
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: '500', color: '#333333' }}>
                    v3cube Technolabs
                  </div>
                  <div style={{ fontSize: '11px', color: '#555555' }}>
                    01/2024 - 06/2024 (6 Months)
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Developed and maintained backend web applications and admin panels using PHP, JavaScript, HTML, and CSS.</li>
                  <li style={{ marginBottom: '4px' }}>Identified critical areas of performance lag and workflow friction, narrowing focus to deliver highly strategic refactors.</li>
                  <li style={{ marginBottom: '0px' }}>Redesigned website frontends to enhance search navigation, clean up layout structure, and dramatically improve overall visual appeal.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="avoid-break" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    3. Python Developer – Intern
                  </div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                    Ahmedabad, India
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: '500', color: '#333333' }}>
                    Seawind Solutions
                  </div>
                  <div style={{ fontSize: '11px', color: '#555555' }}>
                    09/2023 - 12/2023 (4 Months)
                  </div>
                </div>
                <ul style={{
                  margin: '0',
                  paddingLeft: '18px',
                  fontSize: '11.5px',
                  color: '#222222',
                  lineHeight: '1.5',
                  listStyleType: 'disc',
                }}>
                  <li style={{ marginBottom: '4px' }}>Utilized core Python libraries such as NumPy and Pandas for data analysis, complex statistics calculations, and data manipulation tasks.</li>
                  <li style={{ marginBottom: '4px' }}>Identified client and technical team needs promptly, building targeted scripts that improved execution efficiency.</li>
                  <li style={{ marginBottom: '0px' }}>Contributed critical feature enhancements to active web applications using Python algorithms and script integrations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="avoid-break" style={{ marginBottom: '22px' }}>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#2563eb',
              letterSpacing: '0.8px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '3px',
            }}>EDUCATION</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    1. Bachelor of Engineering in Computer Engineering
                  </div>
                  <div style={{ fontSize: '11px', color: '#555555' }}>
                    2021 - 2024
                  </div>
                </div>
                <div style={{ fontSize: '11.5px', color: '#333333', marginTop: '2px' }}>
                  Sal College of Engineering
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#000000' }}>
                    2. Diploma of Computer Engineering
                  </div>
                  <div style={{ fontSize: '11px', color: '#555555' }}>
                    2019 - 2021
                  </div>
                </div>
                <div style={{ fontSize: '11.5px', color: '#333333', marginTop: '2px' }}>
                  L.J. University
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS SECTION */}
          <div className="avoid-break" style={{ marginBottom: '0px' }}>
            <h2 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#2563eb',
              letterSpacing: '0.8px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '3px',
            }}>CERTIFICATIONS</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                  1. Data Analytics & Management
                </div>
                <div style={{ fontSize: '11px', color: '#555555', marginTop: '1px' }}>
                  Google Coursera
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                  2. Data Visualization
                </div>
                <div style={{ fontSize: '11px', color: '#555555', marginTop: '1px' }}>
                  Google Coursera
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                  3. Digital Marketing
                </div>
                <div style={{ fontSize: '11px', color: '#555555', marginTop: '1px' }}>
                  Government of India
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#000000' }}>
                  4. Swaraj Quiz Certification
                </div>
                <div style={{ fontSize: '11px', color: '#555555', marginTop: '1px' }}>
                  Government of India
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
