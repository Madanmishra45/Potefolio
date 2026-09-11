import React from 'react';
import { Code, Terminal, ExternalLink, Globe, Award, Trophy, Star } from 'lucide-react';
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
      color: '#ffa116'
    },
    {
      name: 'GitHub',
      handle: 'Madanmishra45',
      url: socialLinks.github,
      stat: '480+ Commits',
      badge: '18+ Repositories',
      description: 'Full-stack software web apps, Java backends, and open source codebases',
      icon: GithubIcon,
      color: 'var(--accent-cyan)'
    },
    {
      name: 'GeeksforGeeks',
      handle: 'Madanmishra45',
      url: socialLinks.geeksforgeeks,
      stat: '1600+ Score',
      badge: 'Top Contributor',
      description: 'Problem-solving track in Core CS, DBMS, OS, and Data Structures',
      icon: Terminal,
      color: '#2f8d46'
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
      color: '#2ec866'
    },
    {
      name: 'LinkedIn',
      handle: 'Madan Mishra',
      url: socialLinks.linkedin,
      stat: '500+ Connections',
      badge: 'Active Profile',
      description: 'Professional networking, career posts, and collaboration',
      icon: LinkedinIcon,
      color: '#0077b5'
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
            Coding & Problem Solving <span className="gradient-text">Profiles</span>
          </h2>
          <p className="section-subtitle">
            My ratings, problem-solving milestones, and developer presence across top platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
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
                  padding: '1.6rem',
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

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid var(--border-color)',
                        color: profile.color
                      }}
                    >
                      {profile.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
                    {profile.name}
                  </h3>

                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.8rem' }}>
                    {profile.stat}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {profile.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>@{profile.handle}</span>
                  <ExternalLink size={15} style={{ color: 'var(--accent-cyan)' }} />
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
