import React from 'react';
import { GitPullRequest, Star, GitFork, ExternalLink, Code2, Activity, GitCommit } from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubData } from '../data/portfolioData';

// Generate 52 weeks x 7 days heatmap blocks with weighted colors
const generateHeatmapData = () => {
  const weeks = [];
  const levels = [
    'rgba(255, 255, 255, 0.05)', // 0 commits
    'rgba(6, 182, 212, 0.3)',    // 1-2 commits
    'rgba(6, 182, 212, 0.65)',   // 3-5 commits
    'rgba(16, 185, 129, 0.9)'    // 6+ commits
  ];

  for (let w = 0; w < 44; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      let levelIdx = 0;
      if (rand > 0.45) levelIdx = 1;
      if (rand > 0.72) levelIdx = 2;
      if (rand > 0.88) levelIdx = 3;
      days.push(levels[levelIdx]);
    }
    weeks.push(days);
  }
  return weeks;
};

const heatmapWeeks = generateHeatmapData();

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
            GitHub Activity & <span className="gradient-text">Contributions</span>
          </h2>
          <p className="section-subtitle">
            A real-time snapshot of my GitHub version control activity, code repositories, and contribution history.
          </p>
        </div>

        <div className="glass-card spotlight-card" style={{ padding: '2.5rem' }}>
          
          {/* Top Header Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
                }}
              >
                <GithubIcon size={30} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                  @{githubData.username}
                </h3>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Active Contributor & Open Source Developer
                </p>
              </div>
            </div>

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

          {/* Stats Bar Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ background: 'rgba(7, 10, 18, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Commits</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '0.2rem' }}>{githubData.contributionsThisYear}</div>
            </div>

            <div style={{ background: 'rgba(7, 10, 18, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Repositories</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>{githubData.repositoriesCount}</div>
            </div>

            <div style={{ background: 'rgba(7, 10, 18, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stars Earned</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-amber)', marginTop: '0.2rem' }}>{githubData.featuredRepo.stars}</div>
            </div>

            <div style={{ background: 'rgba(7, 10, 18, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Forks</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-indigo)', marginTop: '0.2rem' }}>{githubData.featuredRepo.forks}</div>
            </div>
          </div>

          {/* Contribution Heatmap Grid Visualizer */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                <Activity size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span>365-Day Contribution Matrix</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>Less</span>
                <span style={{ width: '10px', height: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: 'rgba(6, 182, 212, 0.3)', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: 'rgba(6, 182, 212, 0.65)', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: 'rgba(16, 185, 129, 0.9)', borderRadius: '2px' }} />
                <span>More</span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(44, 1fr)',
                gap: '3px',
                padding: '1rem',
                background: 'rgba(7, 10, 18, 0.8)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                overflowX: 'auto'
              }}
            >
              {heatmapWeeks.map((week, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {week.map((color, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        backgroundColor: color,
                        borderRadius: '2px',
                        transition: 'transform 0.15s ease'
                      }}
                      title="Active Contribution"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.4)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Repository Highlight */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(7, 10, 18, 0.7)',
              border: '1px solid var(--border-color-hover)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Code2 size={18} style={{ color: 'var(--accent-cyan)' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                  {githubData.featuredRepo.name}
                </h4>
                <span className="tag-badge" style={{ fontSize: '0.75rem' }}>Public</span>
              </div>

              <a
                href={`${githubData.profileUrl}/${githubData.featuredRepo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}
              >
                <span>Repo</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {githubData.featuredRepo.description}
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Star size={14} style={{ color: 'var(--accent-amber)' }} />
                {githubData.featuredRepo.stars} Stars
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <GitFork size={14} style={{ color: 'var(--accent-indigo)' }} />
                {githubData.featuredRepo.forks} Forks
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <GitCommit size={14} style={{ color: 'var(--accent-emerald)' }} />
                Main Branch Active
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
