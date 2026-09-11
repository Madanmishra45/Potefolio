import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#06070a',
        borderTop: '1px solid rgba(0, 240, 255, 0.15)',
        padding: '4rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Top Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Brand Logo & Name */}
          <div>
            <a
              href="#home"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1.3rem',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.4rem'
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f0ff',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  boxShadow: '0 0 10px rgba(0, 240, 255, 0.25)'
                }}
              >
                MM
              </div>
              <span>{personalInfo.name}</span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '420px', lineHeight: 1.6 }}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Icons & Back To Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00f0ff';
                e.currentTarget.style.color = '#00f0ff';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <GithubIcon size={19} />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00f0ff';
                e.currentTarget.style.color = '#00f0ff';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <LinkedinIcon size={19} />
            </a>

            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a855f7';
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <LeetcodeIcon size={19} />
            </a>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#080a10',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

        {/* Copyright & Tech Stack */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-dim)'
          }}
        >
          <p>© 2026 {personalInfo.name}. All Rights Reserved.</p>
          <p>Built with React 19, Three.js 3D & Cyber CSS Design System</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
