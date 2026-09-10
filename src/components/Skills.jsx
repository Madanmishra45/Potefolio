import React, { useState } from 'react';
import { 
  Code2, Terminal, FileCode, Braces, Layout, Atom, Server, Cpu, Globe, Palette, 
  Database, HardDrive, Cloud, GitBranch, CloudRain, Box, Workflow, AppWindow, 
  Code, BoxSelect, Send, TerminalSquare, Layers, Wrench
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Dynamic icon mapping helper
const iconMap = {
  Code2, Terminal, FileCode, Braces, Layout, Atom, Server, Cpu, Globe, Palette, 
  Database, HardDrive, Cloud, GitBranch, CloudRain, Box, Workflow, AppWindow, 
  Code, BoxSelect, Send, TerminalSquare
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'webDev', label: 'Web Development' },
    { id: 'databases', label: 'Databases' },
    { id: 'cloudDevOps', label: 'Cloud & DevOps' },
    { id: 'tools', label: 'Tools & IDEs' }
  ];

  const getLevelBadgeColor = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced': return 'rgba(16, 185, 129, 0.15)';
      case 'intermediate': return 'rgba(6, 182, 212, 0.15)';
      default: return 'rgba(99, 102, 241, 0.15)';
    }
  };

  const getLevelTextColor = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced': return 'var(--accent-emerald)';
      case 'intermediate': return 'var(--accent-cyan)';
      default: return '#a5b4fc';
    }
  };

  // Grouped render helper
  const renderSkillGroup = (categoryKey, groupTitle, categoryIcon) => {
    const list = skillsData[categoryKey];
    if (!list || list.length === 0) return null;
    const CategoryIcon = categoryIcon;

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
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '1.1rem'
          }}
        >
          {list.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
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
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={22} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.2rem' }}>
                    {skill.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      background: getLevelBadgeColor(skill.level),
                      color: getLevelTextColor(skill.level),
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
          <div className="section-badge">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Categorized technical toolkit acquired through academic coursework, projects, and hands-on software development.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                border: activeCategory === cat.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                background: activeCategory === cat.id ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--text-muted)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grids */}
        {(activeCategory === 'all' || activeCategory === 'languages') &&
          renderSkillGroup('languages', 'Programming Languages', Code2)}

        {(activeCategory === 'all' || activeCategory === 'webDev') &&
          renderSkillGroup('webDev', 'Web Development', Layout)}

        {(activeCategory === 'all' || activeCategory === 'databases') &&
          renderSkillGroup('databases', 'Databases & Storage', Database)}

        {(activeCategory === 'all' || activeCategory === 'cloudDevOps') &&
          renderSkillGroup('cloudDevOps', 'Cloud & DevOps', GitBranch)}

        {(activeCategory === 'all' || activeCategory === 'tools') &&
          renderSkillGroup('tools', 'Tools & IDEs', Wrench)}

      </div>
    </section>
  );
};

export default Skills;
