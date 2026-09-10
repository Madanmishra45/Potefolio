import React from 'react';
import { GitPullRequest, Star, GitFork, ExternalLink, Code2, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubData } from '../data/portfolioData';

const GitHubSection = () => {
  return (
    <section id="github" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GithubIcon size={14} />
            <span>Open Source</span>
          </div>
          <h2 className="section-title">
            GitHub & <span className="gradient-text">Contributions</span>
          </h2>
          <p className="section-subtitle">
            A summary of my open-source code repositories, version control activity, and top programming languages.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Left Info Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                >
                  <GithubIcon size={30} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                    @{githubData.username}
                  </h3>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
                    GitHub Developer Activity
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                I actively write clean, structured code and manage development workflows using Git. Explore my featured repository, branches, and code commits on GitHub.
              </p>

              {/* Stats Bar */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Public Repositories</span>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>{githubData.repositoriesCount}</p>
                </div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Yearly Contributions</span>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>{githubData.contributionsThisYear}</p>
                </div>
              </div>

              {/* Action Link */}
              <a
                href={githubData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <GithubIcon size={16} />
                <span>Visit GitHub Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Right Card: Featured Repository Preview */}
            <div
              style={{
                padding: '1.8rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(7, 10, 18, 0.7)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                  Featured Repository
                </span>
                <Code2 size={18} color="var(--accent-indigo)" />
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                {githubData.featuredRepo.name}
              </h4>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                {githubData.featuredRepo.description}
              </p>

              {/* Top Languages Tags */}
              <div style={{ marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.4rem' }}>Top Languages</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {githubData.topLanguages.map((lang, i) => (
                    <span key={i} className="tag-badge">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats */}
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Star size={14} color="var(--accent-amber)" /> {githubData.featuredRepo.stars} Stars
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <GitFork size={14} color="var(--accent-cyan)" /> {githubData.featuredRepo.forks} Forks
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          #github .glass-card > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GitHubSection;
