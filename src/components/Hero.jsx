import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Code2, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Text Column */}
          <div>
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: 'var(--accent-emerald)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)'
                }}
              />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Professional Title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <Terminal size={20} />
              <span>{personalInfo.title}</span>
            </div>

            {/* Short Introduction */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '620px',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.shortBio}
            </p>

            {/* Location & Quick Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                color: 'var(--text-dim)',
                fontSize: '0.9rem'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                {personalInfo.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} color="var(--accent-indigo)" />
                {personalInfo.degree}
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a href={personalInfo.resumeUrl} download className="btn btn-outline">
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Avatar Halo / Tech Display */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="animate-float"
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.15))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)'
              }}
            >
              {/* Profile Avatar Image */}
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--accent-cyan)',
                  marginBottom: '1.2rem',
                  boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4)',
                  background: 'var(--bg-surface)'
                }}
              >
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                {personalInfo.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1rem' }}>
                {personalInfo.university}
              </p>

              {/* Mini Stats Pill */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem'
                }}
              >
                <div>
                  <strong style={{ color: 'var(--accent-cyan)' }}>{personalInfo.stats.projectsCompleted}</strong> Projects
                </div>
                <div style={{ color: 'var(--border-color)' }}>|</div>
                <div>
                  <strong style={{ color: 'var(--accent-indigo)' }}>{personalInfo.stats.yearsLearning}</strong> Experience
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #home p {
            margin-left: auto;
            margin-right: auto;
          }
          #home .btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
