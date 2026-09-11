import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROFILES', href: '#profiles' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: isScrolled ? 'rgba(8, 10, 16, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 240, 255, 0.15)' : '1px solid transparent',
          padding: isScrolled ? '0.85rem 0' : '1.3rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Top-Left: Initials Logo */}
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f0ff',
                fontWeight: 900,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.25)'
              }}
            >
              MM
            </div>
            <span
              style={{
                color: '#ffffff',
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                letterSpacing: '-0.02em'
              }}
            >
              MADAN MISHRA
            </span>
          </a>

          {/* Top-Right: Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            
            {/* Nav Links */}
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: isActive ? '#00f0ff' : 'var(--text-muted)',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = isActive ? '#00f0ff' : 'var(--text-muted)'}
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
                          background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                          borderRadius: '2px',
                          boxShadow: '0 0 8px #00f0ff'
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={24} style={{ color: '#00f0ff' }} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#0b0d14',
              borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.9)'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: activeSection === link.href.substring(1) ? '#00f0ff' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

      </header>

      {/* Style overrides for responsive navbar display */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
