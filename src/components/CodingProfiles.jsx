import React from 'react';
import { Code, Terminal, ExternalLink, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/portfolioData';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      handle: socialLinks.github.split('/').pop() || '[YOUR-USERNAME]',
      url: socialLinks.github,
      description: 'Open source repositories, project codebases & contributions',
      icon: GithubIcon,
      color: 'var(--accent-cyan)'
    },
    {
      name: 'LinkedIn',
      handle: socialLinks.linkedin.split('/').pop() || '[YOUR-PROFILE]',
      url: socialLinks.linkedin,
      description: 'Professional network, career updates & connections',
      icon: LinkedinIcon,
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      handle: socialLinks.leetcode.split('/').pop() || '[YOUR-USERNAME]',
      url: socialLinks.leetcode,
      description: 'Data structures, algorithm problem solving & contest rating',
      icon: Code,
      color: '#ffa116'
    },
    {
      name: 'GeeksforGeeks',
      handle: socialLinks.geeksforgeeks.split('/').pop() || '[YOUR-USERNAME]',
      url: socialLinks.geeksforgeeks,
      description: 'Articles, practice problems & coding score',
      icon: Terminal,
      color: '#2f8d46'
    },
    {
      name: 'CodeChef',
      handle: socialLinks.codechef.split('/').pop() || '[YOUR-USERNAME]',
      url: socialLinks.codechef,
      description: 'Competitive coding contests & star rating',
      icon: Globe,
      color: '#a855f7'
    },
    {
      name: 'HackerRank',
      handle: socialLinks.hackerrank.split('/').pop() || '[YOUR-USERNAME]',
      url: socialLinks.hackerrank,
      description: 'Language domain stars & skill badges',
      icon: Code,
      color: '#2ec866'
    }
  ];

  return (
    <section id="profiles" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Globe size={14} />
            <span>Developer Footprint</span>
          </div>
          <h2 className="section-title">
            Coding & Developer <span className="gradient-text">Profiles</span>
          </h2>
          <p className="section-subtitle">
            Connect with me across competitive programming platforms and professional networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {profiles.map((profile, i) => {
            const IconComponent = profile.icon;
            return (
              <a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: profile.color
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <ExternalLink size={16} color="var(--text-dim)" />
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                    {profile.name}
                  </h3>

                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.8rem' }}>
                    @{profile.handle}
                  </p>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {profile.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.2rem',
                    paddingTop: '0.8rem',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--accent-indigo)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Visit Profile</span> →
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
