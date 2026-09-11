import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">ACADEMIC FOUNDATION</div>
          <h2 className="section-heading">
            EDUCATION & <span className="gradient-purple">QUALIFICATIONS</span>
          </h2>
          <p className="section-subtext">
            Computer science fundamentals, software engineering coursework, and academic milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '26px',
              width: '2px',
              background: 'linear-gradient(180deg, #a855f7, #00f0ff, transparent)',
              zIndex: 1
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
            {educationData.map((edu) => (
              <div
                key={edu.id}
                style={{
                  display: 'flex',
                  gap: '1.8rem',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Node Icon */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#0b0d14',
                    border: '2px solid #a855f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                    flexShrink: 0,
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  <GraduationCap size={24} />
                </div>

                {/* Cyber Card */}
                <div className="glass-card spotlight-card" style={{ flex: 1, padding: '2.2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.2rem' }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: '#00f0ff', fontWeight: 700, fontSize: '0.95rem' }}>
                        {edu.institution}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        fontSize: '0.8rem',
                        color: '#a855f7',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <Calendar size={13} />
                      <span>{edu.startYear} – {edu.endYear}</span>
                    </div>
                  </div>

                  {/* Grade Badge */}
                  <div style={{ marginBottom: '1.2rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: '#10b981',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700
                      }}
                    >
                      <Award size={14} />
                      <span>Grade: {edu.cgpa}</span>
                    </span>
                  </div>

                  {/* Highlights */}
                  {edu.highlights && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {edu.highlights.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                          <CheckCircle2 size={16} style={{ color: '#00f0ff', flexShrink: 0, marginTop: '0.15rem' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
