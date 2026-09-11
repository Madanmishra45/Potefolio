import React from 'react';
import { User, GraduationCap, Target, BookOpen, Award, CheckCircle2, Zap, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const statCards = [
    { label: 'Years of Learning', value: personalInfo.stats.yearsLearning, icon: BookOpen, color: 'var(--accent-cyan)' },
    { label: 'Projects Built', value: personalInfo.stats.projectsCompleted, icon: Zap, color: 'var(--accent-indigo)' },
    { label: 'Tech Stack Skills', value: personalInfo.stats.technologiesLearned, icon: Target, color: 'var(--accent-purple)' },
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
            Passionate Developer & <span className="gradient-text">IT Engineer</span>
          </h2>
          <p className="section-subtitle">
            Get to know my technical background, academic foundation, career focus, and core strengths.
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
                className="glass-card spotlight-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
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
          <div className="glass-card spotlight-card" style={{ padding: '2.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <Code2 style={{ color: 'var(--accent-cyan)' }} size={22} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
                Professional Biography
              </h3>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {personalInfo.fullBio}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.name}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Degree</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.degree}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>University</span>
                <p style={{ fontWeight: 600, color: '#ffffff' }}>{personalInfo.university}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Graduation</span>
                <p style={{ fontWeight: 600, color: 'var(--accent-cyan)' }}>{personalInfo.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Core Focus & Strengths */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Career Focus */}
            <div className="glass-card spotlight-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Target style={{ color: 'var(--accent-indigo)' }} size={20} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  Career & Technical Focus
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {personalInfo.careerInterests.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="glass-card spotlight-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Sparkles style={{ color: 'var(--accent-purple)' }} size={20} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  Key Strengths
                </h4>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {personalInfo.strengths.map((str, idx) => (
                  <span key={idx} className="tag-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.8rem' }}>
                    {str}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
