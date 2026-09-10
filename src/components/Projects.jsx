import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = ['All', 'Web Development', 'Java', 'Database', 'AI/ML'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Key Software <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent full-stack applications, database systems, and academic software engineering projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                border: activeCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                background: activeCategory === cat ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-muted)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Thumbnail Frame */}
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Category Badge overlay */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(7, 10, 18, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {project.name}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem', flex: 1 }}>
                  {project.shortDescription}
                </p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline btn-sm"
                    style={{ gap: '0.4rem' }}
                  >
                    <Eye size={15} />
                    <span>View Details</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-main)',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <GithubIcon size={18} />
                    </a>

                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Expandable Modal Container */}
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
