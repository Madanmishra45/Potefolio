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
            position: 'relative',
            border: '1px solid rgba(0, 240, 255, 0.25)'
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
              background: 'linear-gradient(to top, #0b0d14, transparent)'
            }}
          />
        </div>

        {/* Header Title & Date */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#00f0ff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
              {project.name}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            <Calendar size={15} color="#a855f7" />
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
              padding: '0.35rem 0.8rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(168, 85, 247, 0.12)',
              color: '#a855f7',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700
            }}
          >
            <UserCheck size={15} />
            <span>ROLE: {project.role}</span>
          </span>
        </div>

        {/* Problem Solved Section */}
        <div style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 240, 255, 0.05)', borderLeft: '3px solid #00f0ff' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#00f0ff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            <ShieldCheck size={16} /> PROBLEM SOLVED & ARCHITECTURE
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            <Cpu size={18} color="#a855f7" /> KEY FEATURES & CAPABILITIES
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.keyFeatures.map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span style={{ color: '#00f0ff', fontWeight: 900 }}>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used Tags */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
            TECHNOLOGIES USED
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
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cyber-cyan btn-sm"
          >
            <ExternalLink size={15} />
            <span>LIVE DEMO PREVIEW</span>
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cyber-outline btn-sm"
          >
            <GithubIcon size={15} />
            <span>GITHUB REPOSITORY</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
