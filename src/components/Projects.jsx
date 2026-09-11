import React, { useState } from 'react';
import { Eye, ArrowUpRight, Search, Layers } from 'lucide-react';
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
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">03 / SELECTED WORK</div>
          <h2 className="section-heading">
            FEATURED <span className="gradient-purple">PROJECT SHOWCASE</span>
          </h2>
          <p className="section-subtext">
            Full-stack web applications, Java enterprise services, database query engines, and AI platforms built with high standards.
          </p>
        </div>

        {/* Filters & Search Row */}
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeCategory === cat ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.12)',
                  background: activeCategory === cat ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  boxShadow: activeCategory === cat ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

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

        {/* Large Editorial Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredProjects.map((project, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');

            return (
              <div
                key={project.id}
                className="glass-card spotlight-card"
                style={{
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.35s ease'
                }}
              >
                {/* Top Row: Index Number & Date */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#00f0ff'
                  }}
                >
                  <span style={{ fontSize: '1.1rem', letterSpacing: '0.1em' }}>PROJECT // {num}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{project.date}</span>
                </div>

                {/* Main Content Grid: Image + Details */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2.5rem',
                    alignItems: 'center'
                  }}
                  className="project-card-grid"
                >
                  {/* Left Column: Project Thumbnail Showcase */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
                    }}
                    className="project-image-wrapper"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      style={{
                        width: '100%',
                        height: '320px',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(8, 10, 16, 0.2) 0%, rgba(8, 10, 16, 0.85) 100%)'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1.2rem',
                        left: '1.2rem',
                        right: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '4px',
                          background: 'rgba(0, 240, 255, 0.2)',
                          color: '#00f0ff',
                          border: '1px solid rgba(0, 240, 255, 0.4)',
                          backdropFilter: 'blur(8px)'
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: '#a0a5b5'
                        }}
                      >
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Title, Description, Tags, Action Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        color: '#ffffff'
                      }}
                    >
                      {project.name}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.65 }}>
                      {project.shortDescription}
                    </p>

                    <div
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(0, 240, 255, 0.04)',
                        borderLeft: '3px solid #00f0ff',
                        fontSize: '0.86rem',
                        color: '#e2e8f0',
                        lineHeight: 1.5
                      }}
                    >
                      <strong>Impact: </strong>{project.problemSolved}
                    </div>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.8rem' }}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn btn-cyber-cyan btn-sm"
                      >
                        <Eye size={15} />
                        <span>VIEW DETAILS</span>
                      </button>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cyber-outline btn-sm"
                      >
                        <GithubIcon size={15} />
                        <span>GITHUB REPO</span>
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

      <style>{`
        @media (max-width: 900px) {
          .project-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .project-image-wrapper:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Projects;
