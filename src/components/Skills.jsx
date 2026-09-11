import React, { useState } from 'react';
import { 
  Code2, Terminal, FileCode, Braces, Layout, Atom, Server, Cpu, Globe, Palette, 
  Database, HardDrive, Cloud, GitBranch, CloudRain, Box, Workflow, AppWindow, 
  Code, BoxSelect, Send, TerminalSquare, Layers, Search, Sparkles
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
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'webDev', label: 'Web Dev' },
    { id: 'databases', label: 'Databases' },
    { id: 'cloudDevOps', label: 'DevOps & Cloud' },
    { id: 'tools', label: 'Tools & IDEs' }
  ];

  const getLevelPercentage = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced': return '90%';
      case 'intermediate': return '75%';
      default: return '60%';
    }
  };

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced': return 'var(--accent-emerald)';
      case 'intermediate': return 'var(--accent-cyan)';
      default: return 'var(--accent-indigo)';
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
      <div style={{ marginBottom: '2.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.2rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <CategoryIcon size={20} color="var(--accent-cyan)" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
            {groupTitle}
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.1rem'
          }}
        >
          {filtered.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const progress = getLevelPercentage(skill.level);
            const levelColor = getLevelColor(skill.level);

            return (
              <div
                key={index}
                className="glass-card spotlight-card"
                style={{
                  padding: '1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: levelColor,
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#ffffff' }}>
                      {skill.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: levelColor, fontWeight: 500 }}>
                      {skill.level} ({progress})
                    </div>
                  </div>
                </div>

                {/* Progress Bar Indicator */}
                <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: progress,
                      height: '100%',
                      background: levelColor,
                      borderRadius: '3px',
                      transition: 'width 0.4s ease-out'
                    }}
                  />
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
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Tech Matrix</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills & Proficiency</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, database architectures, and developer tools I work with.
          </p>
        </div>

        {/* Filter Controls & Live Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activeCategory === cat.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                  background: activeCategory === cat.id ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(16, 23, 42, 0.7)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 1rem',
              width: '100%',
              maxWidth: '260px'
            }}
          >
            <Search size={16} style={{ color: 'var(--accent-cyan)' }} />
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
                width: '100%'
              }}
            />
          </div>

        </div>

        {/* Skill Groups */}
        {(activeCategory === 'all' || activeCategory === 'languages') &&
          renderSkillGroup('languages', 'Programming Languages', Code2)}

        {(activeCategory === 'all' || activeCategory === 'webDev') &&
          renderSkillGroup('webDev', 'Web & API Frameworks', Layout)}

        {(activeCategory === 'all' || activeCategory === 'databases') &&
          renderSkillGroup('databases', 'Database Management', Database)}

        {(activeCategory === 'all' || activeCategory === 'cloudDevOps') &&
          renderSkillGroup('cloudDevOps', 'Cloud & DevOps Fundamentals', Cloud)}

        {(activeCategory === 'all' || activeCategory === 'tools') &&
          renderSkillGroup('tools', 'Development Tools & IDEs', AppWindow)}

      </div>
    </section>
  );
};

export default Skills;
