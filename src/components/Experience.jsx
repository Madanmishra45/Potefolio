import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">04 / EXPERIENCE & CAREER</div>
          <h2 className="section-heading">
            WORK & <span className="gradient-cyan">LEADERSHIP EXPERIENCE</span>
          </h2>
          <p className="section-subtext">
            Software engineering internships, project management, open-source contributions, and technical leadership roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
          
          {/* Vertical Glowing Timeline Line */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, #00f0ff, #a855f7, transparent)',
              zIndex: 1
            }}
            className="timeline-line"
          />

          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-card spotlight-card"
              style={{
                marginLeft: '3rem',
                padding: '2.2rem',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Timeline Node Icon */}
              <div
                style={{
                  position: 'absolute',
                  left: '-4rem',
                  top: '2rem',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#0b0d14',
                  border: '2px solid #00f0ff',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f0ff',
                  zIndex: 3
                }}
                className="timeline-node"
              >
                <Briefcase size={18} />
              </div>

              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.2rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {exp.title}
                  </h3>
                  <div style={{ color: '#00f0ff', fontWeight: 700, fontSize: '0.95rem' }}>
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(0, 240, 255, 0.08)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                      color: '#00f0ff'
                    }}
                  >
                    <Calendar size={13} />
                    {exp.period}
                  </span>

                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <CheckCircle2 size={16} style={{ color: '#a855f7', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Achievements Highlight & Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tag-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.achievements && (
                  <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#10b981', fontWeight: 600 }}>
                    ★ {exp.achievements}
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
