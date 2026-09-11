import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, Search } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = ['All', 'Web Development', 'Java', 'Database', 'AI/ML'];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section" style={{ paddingTop: '4rem' }}>
      <div className="container">
        
        {/* Section Header (Matching Screenshot: SELECTED WORK | 04 Projects) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1.2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '3rem'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}
          >
            SELECTED WORK
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}
          >
            0{filteredProjects.length} projects
          </div>
        </div>

        {/* Category Filters & Search */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeCategory === cat ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: activeCategory === cat ? '#ffffff' : 'transparent',
                  color: activeCategory === cat ? '#070707' : 'var(--text-muted)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 1rem',
              width: '100%',
              maxWidth: '260px'
            }}
          >
            <Search size={15} style={{ color: '#ffffff' }} />
            <input
              type="text"
              placeholder="Search projects..."
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

        {/* Editorial Project Cards Stack (Matching Screenshot 01 Form/Function) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProjects.map((project, idx) => {
            const isLightCard = idx % 2 === 0; // Alternating high-contrast off-white & dark cards
            const num = (idx + 1).toString().padStart(2, '0');

            return (
              <div
                key={project.id}
                style={{
                  background: isLightCard ? '#f4f4f2' : '#121212',
                  color: isLightCard ? '#070707' : '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  border: isLightCard ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Top Row: Index Number & Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    opacity: 0.8
                  }}
                >
                  <span>{num}</span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>{project.date}</span>
                </div>

                {/* Main Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
                  
                  {/* Left Title & Category */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '0.8rem'
                      }}
                    >
                      {project.name}
                    </h3>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        opacity: 0.75,
                        marginBottom: '1.5rem'
                      }}
                    >
                      {project.category} • {project.role}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            background: isLightCard ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)',
                            color: isLightCard ? '#070707' : '#ffffff'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Description & Action Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        opacity: 0.85
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        style={{
                          padding: '0.65rem 1.2rem',
                          borderRadius: 'var(--radius-sm)',
                          border: isLightCard ? '1px solid #070707' : '1px solid #ffffff',
                          background: isLightCard ? '#070707' : '#ffffff',
                          color: isLightCard ? '#ffffff' : '#070707',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <Eye size={15} />
                        <span>View Details</span>
                      </button>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: isLightCard ? '#070707' : '#ffffff',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.88rem',
                          fontWeight: 600
                        }}
                      >
                        <GithubIcon size={16} />
                        <span>Repo</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
