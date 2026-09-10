import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My academic journey, core coursework, grades, and educational milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
          {/* Central Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '28px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-indigo), transparent)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationData.map((edu) => (
              <div
                key={edu.id}
                style={{
                  display: 'flex',
                  gap: '1.8rem',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Timeline Icon Node */}
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    background: 'var(--bg-surface)',
                    border: '2px solid var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0,
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  <GraduationCap size={26} />
                </div>

                {/* Timeline Card */}
                <div className="glass-card" style={{ flex: 1, padding: '2rem' }}>
                  
                  {/* Top Bar: Degree & Period */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {edu.institution}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <Calendar size={14} color="var(--accent-indigo)" />
                      <span>{edu.startYear} – {edu.endYear}</span>
                    </div>
                  </div>

                  {/* CGPA / Percentage Badge */}
                  <div style={{ marginBottom: '1.2rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--accent-emerald)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}
                    >
                      <Award size={14} />
                      <span>CGPA / Grade: {edu.cgpa}</span>
                    </span>
                  </div>

                  {/* Coursework & Highlights */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {edu.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            lineHeight: 1.5
                          }}
                        >
                          <CheckCircle size={15} color="var(--accent-indigo)" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
