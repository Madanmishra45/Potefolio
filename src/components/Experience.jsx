import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Practical Background</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-subtitle">
            Technical internships, collaborative software projects, open-source contributions, and practical engineering experience.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp) => (
            <div key={exp.id} className="glass-card" style={{ padding: '2rem' }}>
              
              {/* Header: Title, Company & Meta */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <span
                      style={{
                        padding: '0.2rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(6, 182, 212, 0.12)',
                        color: 'var(--accent-cyan)',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>
                    {exp.title}
                  </h3>

                  <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem', marginTop: '0.2rem' }}>
                    {exp.company}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Calendar size={14} color="var(--accent-indigo)" />
                    {exp.period}
                  </span>

                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-dim)', fontSize: '0.82rem' }}>
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities Bullet List */}
              <div style={{ marginBottom: '1.2rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Key Responsibilities & Contributions
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievement Highlight */}
              {exp.achievements && (
                <div
                  style={{
                    marginBottom: '1.2rem',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '3px solid var(--accent-indigo)',
                    fontSize: '0.88rem',
                    color: '#c7d2fe',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Award size={16} color="var(--accent-indigo)" />
                  <span><strong>Highlight:</strong> {exp.achievements}</span>
                </div>
              )}

              {/* Technologies Used */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                <Terminal size={14} color="var(--text-dim)" />
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tag-badge">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
