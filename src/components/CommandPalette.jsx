import React, { useState, useEffect } from 'react';
import { Search, Hash, Folder, Mail, FileText, Code, ExternalLink, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, socialLinks, projectsData } from '../data/portfolioData';

const CommandPalette = ({ isOpen, onClose, addToast }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { title: 'Home / Hero', icon: Hash, action: () => scrollToId('home') },
    { title: 'About Me', icon: Hash, action: () => scrollToId('about') },
    { title: 'Education Timeline', icon: Hash, action: () => scrollToId('education') },
    { title: 'Technical Skills Matrix', icon: Hash, action: () => scrollToId('skills') },
    { title: 'Featured Projects Showcase', icon: Hash, action: () => scrollToId('projects') },
    { title: 'Work & Leadership Experience', icon: Hash, action: () => scrollToId('experience') },
    { title: 'Certifications & Badges', icon: Hash, action: () => scrollToId('certifications') },
    { title: 'Coding Profiles Stats', icon: Code, action: () => scrollToId('profiles') },
    { title: 'Contact Me', icon: Mail, action: () => scrollToId('contact') },
  ];

  const actions = [
    {
      title: `Copy Email (${personalInfo.email})`,
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        addToast('Email copied to clipboard!', 'success');
      }
    },
    {
      title: 'Download Resume PDF',
      icon: FileText,
      action: () => {
        addToast('Downloading Resume PDF...', 'info');
        window.open(personalInfo.resumeUrl, '_blank');
      }
    },
    {
      title: 'Open GitHub Profile',
      icon: GithubIcon,
      action: () => window.open(socialLinks.github, '_blank')
    },
    {
      title: 'Open LinkedIn Profile',
      icon: LinkedinIcon,
      action: () => window.open(socialLinks.linkedin, '_blank')
    }
  ];

  const filteredProjects = projectsData.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSections = sections.filter(s => s.title.toLowerCase().includes(query.toLowerCase()));
  const filteredActions = actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (act) => {
    act();
    onClose();
  };

  return (
    <div className="cmd-palette-backdrop" onClick={onClose}>
      <div className="cmd-palette-box" onClick={(e) => e.stopPropagation()}>
        {/* Search Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>
          <Search size={20} style={{ color: 'var(--accent-cyan)' }} />
          <input
            type="text"
            placeholder="Type a command, search section, or project..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '1rem',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Body */}
        <div style={{ padding: '0.8rem', maxHeight: '380px', overflowY: 'auto' }}>
          
          {/* Quick Actions */}
          {filteredActions.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', padding: '0.3rem 0.6rem', textTransform: 'uppercase' }}>
                Actions & Quick Links
              </div>
              {filteredActions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelect(item.action)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.6rem 0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      color: 'var(--text-main)',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(6, 182, 212, 0.12)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <IconComponent size={16} style={{ color: 'var(--accent-cyan)' }} />
                    <span style={{ flex: 1 }}>{item.title}</span>
                    <ExternalLink size={14} style={{ color: 'var(--text-dim)' }} />
                  </div>
                );
              })}
            </div>
          )}

          {/* Navigation Sections */}
          {filteredSections.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', padding: '0.3rem 0.6rem', textTransform: 'uppercase' }}>
                Navigation Sections
              </div>
              {filteredSections.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelect(item.action)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.6rem 0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      color: 'var(--text-main)',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.12)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <IconComponent size={16} style={{ color: 'var(--accent-indigo)' }} />
                    <span style={{ flex: 1 }}>{item.title}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Projects Search Results */}
          {filteredProjects.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', padding: '0.3rem 0.6rem', textTransform: 'uppercase' }}>
                Projects ({filteredProjects.length})
              </div>
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelect(() => {
                    window.location.hash = 'projects';
                  })}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(16, 185, 129, 0.12)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-main)';
                  }}
                >
                  <Folder size={16} style={{ color: 'var(--accent-emerald)' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 500 }}>{p.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{p.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Hint */}
        <div style={{ padding: '0.6rem 1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
          <span>Press <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px', color: '#fff' }}>Esc</kbd> to close</span>
          <span><kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px', color: '#fff' }}>Ctrl + K</kbd> anytime</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
