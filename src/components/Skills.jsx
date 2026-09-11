import React, { useState } from 'react';
import { 
  Code2, Terminal, FileCode, Braces, Layout, Atom, Server, Cpu, Globe, Palette, 
  Database, HardDrive, Cloud, GitBranch, CloudRain, Box, Workflow, AppWindow, 
  Code, BoxSelect, Send, TerminalSquare, Layers, Search
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2, Terminal, FileCode, Braces, Layout, Atom, Server, Cpu, Globe, Palette, 
  Database, HardDrive, Cloud, GitBranch, CloudRain, Box, Workflow, AppWindow, 
  Code, BoxSelect, Send, TerminalSquare
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ALL STACK' },
    { id: 'languages', label: 'LANGUAGES' },
    { id: 'webDev', label: 'WEB DEV' },
    { id: 'databases', label: 'DATABASES' },
    { id: 'cloudDevOps', label: 'CLOUD & DEVOPS' },
    { id: 'tools', label: 'TOOLS & IDES' }
  ];

  const getLevelBadgeStyle = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return { color: '#00f0ff', bg: 'rgba(0, 240, 255, 0.1)', border: 'rgba(0, 240, 255, 0.3)' };
      case 'intermediate':
        return { color: '#a855f7', bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.3)' };
      default:
        return { color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.3)' };
    }
  };

  const renderSkillGroup = (categoryKey, groupTitle, CategoryIcon) => {
    const list = skillsData[categoryKey] || [];
    const filtered = list.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filtered.length === 0) return null;

    return (
      <div style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            paddingBottom: '0.6rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <CategoryIcon size={22} color="#00f0ff" />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
            {groupTitle}
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filtered.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const badgeStyle = getLevelBadgeStyle(skill.level);

            return (
              <div
                key={index}
                className="glass-card spotlight-card"
                style={{
                  padding: '1.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: badgeStyle.color,
                    flexShrink: 0,
                    boxShadow: `0 0 15px ${badgeStyle.color}20`
                  }}
                >
                  <IconComponent size={22} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                    {skill.name}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      background: badgeStyle.bg,
                      color: badgeStyle.color,
                      border: `1px solid ${badgeStyle.border}`,
                      display: 'inline-block'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">02 / SKILLS & TECH</div>
          <h2 className="section-heading">
            TECHNICAL <span className="gradient-cyan">STACK & MATRIX</span>
          </h2>
          <p className="section-subtext">
            Programming languages, frameworks, database systems, and developer toolkits I utilize in daily engineering.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem',
            marginBottom: '3rem'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activeCategory === cat.id ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.12)',
                  background: activeCategory === cat.id ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat.id ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(15, 18, 28, 0.7)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              borderRadius: 'var(--radius-full)',
              padding: '0.45rem 1.1rem',
              width: '100%',
              maxWidth: '280px'
            }}
          >
            <Search size={15} style={{ color: '#00f0ff' }} />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '0.85rem',
                width: '100%',
                fontFamily: 'var(--font-sans)'
              }}
            />
          </div>
        </div>

        {/* Render Skill Groups */}
        {(activeCategory === 'all' || activeCategory === 'languages') &&
          renderSkillGroup('languages', 'PROGRAMMING LANGUAGES', Code2)}

        {(activeCategory === 'all' || activeCategory === 'webDev') &&
          renderSkillGroup('webDev', 'WEB & API FRAMEWORKS', Layout)}

        {(activeCategory === 'all' || activeCategory === 'databases') &&
          renderSkillGroup('databases', 'DATABASE MANAGEMENT', Database)}

        {(activeCategory === 'all' || activeCategory === 'cloudDevOps') &&
          renderSkillGroup('cloudDevOps', 'CLOUD & DEVOPS FUNDAMENTALS', Cloud)}

        {(activeCategory === 'all' || activeCategory === 'tools') &&
          renderSkillGroup('tools', 'DEVELOPMENT TOOLS & IDES', AppWindow)}

      </div>
    </section>
  );
};

export default Skills;
