import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Search } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = ({ activeSection, onOpenCmd, currentTheme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
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
          transition: 'all 0.3s ease',
          background: isScrolled ? 'rgba(7, 7, 7, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          padding: isScrolled ? '1rem 0' : '1.5rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo (Left) */}
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 800,
              fontFamily: 'var(--font-sans)',
              fontSize: '1.15rem',
              letterSpacing: '-0.02em'
            }}
          >
            {personalInfo.name}
          </a>

          {/* Desktop Links (Center) */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                    position: 'relative'
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
                        height: '1px',
                        background: '#ffffff'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Status Badge & Controls (Right) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            
            {/* Status pill matching screenshot */}
            <div
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-sans)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 0 8px #ffffff'
                }}
              />
              <span>Available for selected collaborations</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCmd}
              title="Search (Ctrl+K)"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem 0.75rem',
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Search size={13} style={{ color: '#fff' }} />
              <kbd style={{ fontSize: '0.68rem', background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.3rem', borderRadius: '3px', color: '#fff' }}>⌘K</kbd>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              background: '#0c0c0c',
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
                  color: activeSection === link.href.substring(1) ? '#ffffff' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
