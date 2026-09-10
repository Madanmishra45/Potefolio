import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        padding: '4rem 0 2rem 0',
        position: 'relative'
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
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          {/* Brand Info */}
          <div>
            <a
              href="#home"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.3rem',
                marginBottom: '0.5rem'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={20} />
              </div>
              <span>{personalInfo.name !== "[YOUR NAME]" ? personalInfo.name : 'Developer'}<span style={{ color: 'var(--accent-cyan)' }}>.Portfolio</span></span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Social Connections */}
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
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'var(--transition-fast)'
              }}
            >
              <GithubIcon size={20} />
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
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'var(--transition-fast)'
              }}
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              title="Email"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'var(--transition-fast)'
              }}
            >
              <Mail size={20} />
            </a>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
                transition: 'var(--transition-fast)'
              }}
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.85rem',
            color: 'var(--text-dim)'
          }}
        >
          <p>
            © 2026 {personalInfo.name}. All Rights Reserved.
          </p>

          <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with React, Vite & Vanilla CSS Design System
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
