import React from 'react';
import { X, ExternalLink, Calendar, UserCheck, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Thumbnail Preview Banner */}
        <div
          style={{
            width: '100%',
            height: '240px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            position: 'relative'
          }}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem 1rem 0.5rem 1rem',
              background: 'linear-gradient(to top, rgba(14, 19, 34, 0.95), transparent)'
            }}
          />
        </div>

        {/* Header Title & Date */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
              {project.name}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            <Calendar size={15} color="var(--accent-indigo)" />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Role Badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(99, 102, 241, 0.12)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <UserCheck size={15} />
            <span>Role: {project.role}</span>
          </span>
        </div>

        {/* Problem Solved Section */}
        <div style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(6, 182, 212, 0.05)', borderLeft: '3px solid var(--accent-cyan)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={16} /> Problem Solved
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Cpu size={18} color="var(--accent-indigo)" /> Key Features & Capabilities
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.keyFeatures.map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used Tags */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tags.map((tag, i) => (
              <span key={i} className="tag-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={16} />
            <span>Live Demo Preview</span>
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
