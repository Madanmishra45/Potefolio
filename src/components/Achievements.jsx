import React from 'react';
import { Trophy, Award, Code2, Star, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">05 / ACHIEVEMENTS & PROFILES</div>
          <h2 className="section-heading">
            COMPETITIVE & <span className="gradient-cyan">HACKATHON MILESTONES</span>
          </h2>
          <p className="section-subtext">
            Recognitions, hackathon podium finishes, competitive coding ranks, and department honors.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-card spotlight-card"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.4rem'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f0ff',
                      boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)'
                    }}
                  >
                    <Trophy size={24} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(168, 85, 247, 0.12)',
                      color: '#a855f7',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      fontWeight: 700
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>

                <div style={{ color: '#00f0ff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {item.event} ({item.date})
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 700, marginTop: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                <Star size={14} /> Verified Milestone
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
