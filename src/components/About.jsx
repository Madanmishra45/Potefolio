import React from 'react';
import { User, GraduationCap, Target, BookOpen, Award, CheckCircle2, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const statCards = [
    { label: 'Years of Learning', value: personalInfo.stats.yearsLearning, icon: BookOpen, color: 'var(--accent-cyan)' },
    { label: 'Projects Completed', value: personalInfo.stats.projectsCompleted, icon: Zap, color: 'var(--accent-indigo)' },
    { label: 'Technologies Learned', value: personalInfo.stats.technologiesLearned, icon: Target, color: 'var(--accent-purple)' },
    { label: 'Certifications', value: personalInfo.stats.certificationsEarned, icon: Award, color: 'var(--accent-emerald)' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate Developer & <span className="gradient-text">IT Student</span>
          </h2>
          <p className="section-subtitle">
            Get to know my background, academic journey, key technical interests, and career aspirations.
          </p>
        </div>

        {/* Statistics Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem'
          }}
        >
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color
                  }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                    {stat.value}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2.5rem' }}>
          
          {/* Biography & Story */}
          <div className="glass-card" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#ffffff' }}>
              Professional Biography
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {personalInfo.fullBio}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.name}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.degree}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>University / College</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.university}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Interests, Strengths & Learning */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Career Interests & Goals */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={18} color="var(--accent-cyan)" />
                Career Interests & Focus
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {personalInfo.careerInterests.map((interest, i) => (
                  <span key={i} className="tag-badge">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} color="var(--accent-indigo)" />
                Currently Learning & Exploring
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {personalInfo.currentlyLearning.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-emerald)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Strengths */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} color="var(--accent-purple)" />
                Key Strengths
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {personalInfo.strengths.map((strength, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
