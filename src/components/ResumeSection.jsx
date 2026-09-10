import React from 'react';
import { FileText, Download, CheckCircle, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { personalInfo, educationData, skillsData, experienceData, certificationsData } from '../data/portfolioData';

const ResumeSection = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            My Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive executive summary of my academic history, software skill sets, experience, and certifications.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '3rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color-hover)'
          }}
        >
          {/* Resume Header Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              paddingBottom: '2rem',
              borderBottom: '2px solid var(--border-color)',
              marginBottom: '2rem'
            }}
          >
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>
                {personalInfo.name}
              </h1>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.05rem', fontFamily: 'var(--font-mono)' }}>
                {personalInfo.title}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
                {personalInfo.email} • {personalInfo.phone} • {personalInfo.location}
              </p>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-primary"
              style={{ boxShadow: '0 4px 20px rgba(6, 182, 212, 0.4)' }}
            >
              <Download size={18} />
              <span>Download PDF Resume</span>
            </a>
          </div>

          {/* Resume Content Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Executive Summary */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                Professional Summary
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {personalInfo.fullBio}
              </p>
            </div>

            {/* Education Summary */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={18} /> Education
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {educationData.map((edu) => (
                  <div key={edu.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                      <span>{edu.degree} — {edu.institution}</span>
                      <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{edu.startYear} - {edu.endYear}</span>
                    </div>
                    <p style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 500 }}>
                      CGPA / Grade: {edu.cgpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={18} /> Core Skills & Technologies
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <div>
                  <strong style={{ color: '#ffffff' }}>Languages:</strong> {skillsData.languages.map(s => s.name).join(', ')}
                </div>
                <div>
                  <strong style={{ color: '#ffffff' }}>Web Dev:</strong> {skillsData.webDev.map(s => s.name).join(', ')}
                </div>
                <div>
                  <strong style={{ color: '#ffffff' }}>Databases:</strong> {skillsData.databases.map(s => s.name).join(', ')}
                </div>
                <div>
                  <strong style={{ color: '#ffffff' }}>Tools & Cloud:</strong> {skillsData.tools.map(s => s.name).join(', ')}
                </div>
              </div>
            </div>

            {/* Experience & Practical Work */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={18} /> Practical Experience
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {experienceData.map((exp) => (
                  <div key={exp.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                      <span>{exp.title} | {exp.company}</span>
                      <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{exp.period}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                      {exp.responsibilities.join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Summary */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} /> Certifications
              </h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {certificationsData.map((cert) => (
                  <li key={cert.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={14} color="var(--accent-emerald)" />
                    <span><strong>{cert.name}</strong> ({cert.issuer}, {cert.date})</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
