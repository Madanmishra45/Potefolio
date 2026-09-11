import React from 'react';
import { Download, ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, TwitterIcon } from './Icons';
import DeveloperAvatar3D from './DeveloperAvatar3D';

const Hero = ({ addToast }) => {
  const socialItems = [
    { name: 'GitHub', icon: GithubIcon, url: socialLinks.github },
    { name: 'LinkedIn', icon: LinkedinIcon, url: socialLinks.linkedin },
    { name: 'LeetCode', icon: LeetcodeIcon, url: socialLinks.leetcode },
    { name: 'Twitter', icon: TwitterIcon, url: socialLinks.twitter },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}` }
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Radial Glow Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: '50%',
          filter: 'blur(50px)'
        }}
      />

      {/* Vertical Social Sidebar (Left Edge) */}
      <aside
        className="social-sidebar-desktop"
        style={{
          position: 'fixed',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem'
        }}
      >
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(180deg, transparent, rgba(0, 240, 255, 0.4))' }} />

        {socialItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="social-link-wrapper" style={{ position: 'relative' }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(15, 18, 28, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.6)';
                  e.currentTarget.style.color = '#00f0ff';
                  e.currentTarget.style.transform = 'scale(1.1) translateX(3px)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'scale(1) translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={19} />
              </a>

              {/* Hover Tooltip */}
              <div className="social-tooltip">{item.name}</div>
            </div>
          );
        })}

        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.4), transparent)' }} />
      </aside>

      {/* Main Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1380px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.8fr 1.1fr',
            alignItems: 'center',
            minHeight: '75vh',
            gap: '1rem'
          }}
          className="hero-grid"
        >
          
          {/* LEFT SIDE: Name & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#00f0ff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }} />
              Hello! I'm
            </div>

            <h1
              className="editorial-title"
              style={{
                fontSize: 'clamp(2.4rem, 3.6vw, 3.6rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05
              }}
            >
              MADAN
              <br />
              <span className="gradient-purple">MISHRA</span>
            </h1>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                maxWidth: '360px'
              }}
            >
              {personalInfo.shortBio}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.3rem' }}>
              <a
                href="#projects"
                className="btn btn-cyber-cyan"
                style={{ fontSize: '0.85rem', padding: '0.7rem 1.3rem' }}
              >
                <span>EXPLORE WORK</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          {/* CENTER: 3D Developer Avatar */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <DeveloperAvatar3D />
          </div>

          {/* RIGHT SIDE: Role & Specialities */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textAlign: 'right',
              gap: '1.2rem',
              overflow: 'visible'
            }}
          >
            <h2
              className="editorial-title"
              style={{
                fontSize: 'clamp(2.0rem, 3.2vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05
              }}
            >
              FULL STACK
              <br />
              <span className="gradient-cyan">DEVELOPER</span>
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                maxWidth: '340px'
              }}
            >
              Crafting high-performance web applications, scalable backend microservices, and database systems.
            </p>

            {/* Quick Skill Pill Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'flex-end', maxWidth: '340px' }}>
              {['React.js', 'Node.js', 'Java', 'MySQL', 'MongoDB', 'AWS'].map((skill) => (
                <span key={skill} className="tag-badge" style={{ fontSize: '0.75rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM RIGHT: Resume Link Button */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '2rem',
            zIndex: 20
          }}
          className="hero-resume-wrapper"
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cyber-outline btn-sm"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-full)',
              padding: '0.55rem 1.1rem'
            }}
          >
            <Download size={14} style={{ color: '#00f0ff' }} />
            <span>RESUME PDF</span>
          </a>
        </div>

      </div>

      {/* Style Overrides for Mobile / Tablet */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center !important;
          }
          .hero-grid > div {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-grid > div:last-child {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-grid p {
            max-width: 550px !important;
          }
          .hero-grid .tag-badge {
            justify-content: center !important;
          }
          .social-sidebar-desktop {
            display: none !important;
          }
          .hero-resume-wrapper {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 2rem !important;
            display: flex !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
