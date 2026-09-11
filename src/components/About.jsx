import React from 'react';
import { User, BookOpen, Target, Award, Zap, Code2, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const statCards = [
    { label: 'Years Learning', value: personalInfo.stats.yearsLearning, icon: BookOpen, color: '#00f0ff' },
    { label: 'Projects Built', value: personalInfo.stats.projectsCompleted, icon: Zap, color: '#a855f7' },
    { label: 'Technologies', value: personalInfo.stats.technologiesLearned, icon: Cpu, color: '#00f0ff' },
    { label: 'Certifications', value: personalInfo.stats.certificationsEarned, icon: Award, color: '#10b981' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">01 / ABOUT ME</div>
          <h2 className="section-heading">
            BUILDING SCALABLE <span className="gradient-purple">DIGITAL SYSTEMS</span> & EXPERIENCES
          </h2>
          <p className="section-subtext">
            Information Technology student and developer dedicated to clean architecture, high-performance web systems, and solving complex engineering challenges.
          </p>
        </div>

        {/* Statistics Banner Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}
        >
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card spotlight-card"
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color,
                    boxShadow: `0 0 15px ${stat.color}25`
                  }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1.1
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '2.5rem' }}>
          
          {/* Left Column: Full Biography & Details */}
          <div className="glass-card spotlight-card" style={{ padding: '2.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.4rem' }}>
              <Code2 style={{ color: '#00f0ff' }} size={24} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                DEVELOPER PROFILE
              </h3>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '2rem' }}>
              {personalInfo.fullBio}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Developer</span>
                <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>{personalInfo.name}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Degree</span>
                <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>{personalInfo.degree}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>University</span>
                <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>{personalInfo.university}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Graduation</span>
                <p style={{ fontWeight: 700, color: '#00f0ff', fontSize: '0.95rem' }}>{personalInfo.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Career Focus & Strengths */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Career Focus */}
            <div className="glass-card spotlight-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                <Target style={{ color: '#a855f7' }} size={22} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  CAREER & TECHNICAL FOCUS
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {personalInfo.careerInterests.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#00f0ff', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="glass-card spotlight-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                <Sparkles style={{ color: '#00f0ff' }} size={22} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  CORE STRENGTHS
                </h4>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {personalInfo.strengths.map((str, idx) => (
                  <span key={idx} className="tag-badge" style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}>
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
