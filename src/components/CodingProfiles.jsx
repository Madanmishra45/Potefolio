import React from 'react';
import { Code, Terminal, ExternalLink, Globe, Trophy, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/portfolioData';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      handle: 'Madanmishra45',
      url: socialLinks.leetcode,
      stat: '500+ Solved',
      badge: 'Knight | Top 8%',
      description: 'Data structures, Graph theory, Dynamic Programming & algorithms',
      icon: Code,
      color: '#00f0ff'
    },
    {
      name: 'GitHub',
      handle: 'Madanmishra45',
      url: socialLinks.github,
      stat: '480+ Commits',
      badge: '18+ Repositories',
      description: 'Full-stack web apps, Java backends, and open source codebases',
      icon: GithubIcon,
      color: '#00f0ff'
    },
    {
      name: 'GeeksforGeeks',
      handle: 'Madanmishra45',
      url: socialLinks.geeksforgeeks,
      stat: '1600+ Score',
      badge: 'Top Contributor',
      description: 'Problem-solving track in Core CS, DBMS, OS, and Data Structures',
      icon: Terminal,
      color: '#10b981'
    },
    {
      name: 'CodeChef',
      handle: 'Madanmishra45',
      url: socialLinks.codechef,
      stat: '3★ Rating',
      badge: '1720 Max Rating',
      description: 'Long challenges, Cook-Offs, and speed competitive programming',
      icon: Trophy,
      color: '#a855f7'
    },
    {
      name: 'HackerRank',
      handle: 'Madanmishra45',
      url: socialLinks.hackerrank,
      stat: '5 Gold Badges',
      badge: 'Java & Problem Solving',
      description: 'Domain certifications in Java, SQL, Problem Solving & Python',
      icon: Star,
      color: '#10b981'
    },
    {
      name: 'LinkedIn',
      handle: 'Madan Mishra',
      url: socialLinks.linkedin,
      stat: '500+ Connections',
      badge: 'Active Profile',
      description: 'Professional networking, career updates, and collaboration',
      icon: LinkedinIcon,
      color: '#00f0ff'
    }
  ];

  return (
    <section id="profiles" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">DEVELOPER FOOTPRINT</div>
          <h2 className="section-heading">
            CODING & <span className="gradient-cyan">PROFILES MATRIX</span>
          </h2>
          <p className="section-subtext">
            Ratings, problem-solving milestones, and developer presence across major platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
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
                className="glass-card spotlight-card"
                style={{
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: profile.color,
                        boxShadow: `0 0 15px ${profile.color}25`
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: profile.color
                      }}
                    >
                      {profile.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                    {profile.name}
                  </h3>

                  <div style={{ fontSize: '0.9rem', color: '#00f0ff', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.8rem' }}>
                    {profile.stat}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {profile.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>@{profile.handle}</span>
                  <ExternalLink size={14} style={{ color: '#00f0ff' }} />
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
