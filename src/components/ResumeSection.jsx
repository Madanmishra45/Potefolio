import React from 'react';
import { FileText, Download, CheckCircle, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { personalInfo, educationData, skillsData, experienceData, certificationsData } from '../data/portfolioData';

const ResumeSection = () => {
  return (
    <section id="resume" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">CURRICULUM VITAE</div>
          <h2 className="section-heading">
            EXECUTIVE <span className="gradient-cyan">RESUME PREVIEW</span>
          </h2>
          <p className="section-subtext">
            A comprehensive summary of academic milestones, technical stack, career experience, and certifications.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div
          className="glass-card spotlight-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '3rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(0, 240, 255, 0.25)'
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '2rem'
            }}
          >
            <div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                {personalInfo.name}
              </h1>
              <p style={{ color: '#00f0ff', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                {personalInfo.title}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                {personalInfo.email} • {personalInfo.location}
              </p>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cyber-cyan"
            >
              <Download size={18} />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>

          {/* Resume Content Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Executive Summary */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                PROFESSIONAL SUMMARY
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {personalInfo.fullBio}
              </p>
            </div>

            {/* Education Summary */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                <GraduationCap size={18} /> EDUCATION
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {educationData.map((edu) => (
                  <div key={edu.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                      <span>{edu.degree} — {edu.institution}</span>
                      <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>{edu.startYear} - {edu.endYear}</span>
                    </div>
                    <p style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      Grade: {edu.cgpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                <Code2 size={18} /> CORE SKILLS MATRIX
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

            {/* Experience */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                <Briefcase size={18} /> EXPERIENCE
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {experienceData.map((exp) => (
                  <div key={exp.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                      <span>{exp.title} | {exp.company}</span>
                      <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>{exp.period}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                      {exp.responsibilities.join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                <Award size={18} /> CERTIFICATIONS
              </h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {certificationsData.map((cert) => (
                  <li key={cert.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={14} color="#10b981" />
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
