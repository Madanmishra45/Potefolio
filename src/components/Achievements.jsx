import React from 'react';
import { Trophy, Calendar, Sparkles, Star, Medal } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Honors & Honors</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            Recognitions, competition ranks, hackathon accomplishments, and coding milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '1.8rem',
                display: 'flex',
                gap: '1.2rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15))',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-amber)',
                  flexShrink: 0
                }}
              >
                <Trophy size={26} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span
                    style={{
                      padding: '0.15rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(245, 158, 11, 0.12)',
                      color: 'var(--accent-amber)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.category}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {item.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                  {item.event}
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
