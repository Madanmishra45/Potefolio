import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(7, 10, 18, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: isScrolled ? '0.8rem 0' : '1.2rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
            }}
          >
            <Code2 size={22} />
          </div>
          <span>
            {personalInfo.name !== "[YOUR NAME]" ? personalInfo.name : 'Developer'}<span style={{ color: 'var(--accent-cyan)' }}>.Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  padding: '0.3rem 0'
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--accent-cyan)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}

          <a
            href={personalInfo.resumeUrl}
            download
            className="btn btn-outline btn-sm"
            style={{ marginLeft: '0.5rem' }}
          >
            <Download size={15} />
            <span>CV</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '0.4rem'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(14, 19, 34, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: activeSection === link.href.substring(1) ? 'var(--accent-cyan)' : 'var(--text-main)',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn btn-primary btn-sm"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      )}

      {/* Inline styles for responsive display */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
