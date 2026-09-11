import React from 'react';
import { Star, GitFork, ExternalLink, Code2, Activity, GitCommit } from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubData } from '../data/portfolioData';

// Generate 44 weeks x 7 days heatmap blocks
const generateHeatmapData = () => {
  const weeks = [];
  const levels = [
    'rgba(255, 255, 255, 0.04)',
    'rgba(0, 240, 255, 0.3)',
    'rgba(0, 240, 255, 0.65)',
    'rgba(168, 85, 247, 0.9)'
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
    <section id="github" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">OPEN SOURCE ACTIVITY</div>
          <h2 className="section-heading">
            GITHUB <span className="gradient-purple">CONTRIBUTIONS & CODE</span>
          </h2>
          <p className="section-subtext">
            Continuous integration activity, version control commits, and featured open-source repositories.
          </p>
        </div>

        <div className="glass-card spotlight-card" style={{ padding: '2.5rem' }}>
          
          {/* Header Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f0ff',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)'
                }}
              >
                <GithubIcon size={28} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  @{githubData.username}
                </h3>
                <p style={{ color: '#00f0ff', fontSize: '0.88rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                  Active Software Engineer & Open Source Developer
                </p>
              </div>
            </div>

            <a
              href={githubData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cyber-cyan btn-sm"
            >
              <GithubIcon size={16} />
              <span>VISIT GITHUB PROFILE</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ background: 'rgba(8, 10, 16, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Yearly Commits</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#00f0ff', fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>{githubData.contributionsThisYear}</div>
            </div>

            <div style={{ background: 'rgba(8, 10, 16, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Repositories</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#a855f7', fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>{githubData.repositoriesCount}</div>
            </div>

            <div style={{ background: 'rgba(8, 10, 16, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Stars Earned</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#00f0ff', fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>{githubData.featuredRepo.stars}</div>
            </div>

            <div style={{ background: 'rgba(8, 10, 16, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Forks</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>{githubData.featuredRepo.forks}</div>
            </div>
          </div>

          {/* Matrix Heatmap */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                <Activity size={16} style={{ color: '#00f0ff' }} />
                <span>365-DAY CONTRIBUTION MATRIX</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                <span>Less</span>
                <span style={{ width: '10px', height: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: 'rgba(0, 240, 255, 0.3)', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: 'rgba(0, 240, 255, 0.65)', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: 'rgba(168, 85, 247, 0.9)', borderRadius: '2px' }} />
                <span>More</span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(44, 1fr)',
                gap: '3px',
                padding: '1rem',
                background: 'rgba(8, 10, 16, 0.8)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
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

          {/* Featured Repository */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(8, 10, 16, 0.7)',
              border: '1px solid rgba(0, 240, 255, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Code2 size={18} style={{ color: '#00f0ff' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  {githubData.featuredRepo.name}
                </h4>
                <span className="tag-badge" style={{ fontSize: '0.72rem' }}>Public</span>
              </div>

              <a
                href={`${githubData.profileUrl}/${githubData.featuredRepo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', textDecoration: 'none', fontWeight: 700, fontFamily: 'var(--font-mono)' }}
              >
                <span>REPO</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {githubData.featuredRepo.description}
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Star size={14} style={{ color: '#00f0ff' }} />
                {githubData.featuredRepo.stars} Stars
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <GitFork size={14} style={{ color: '#a855f7' }} />
                {githubData.featuredRepo.forks} Forks
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <GitCommit size={14} style={{ color: '#10b981' }} />
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
