import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <p className="section-subtitle">
            Industry and platform-verified certifications demonstrating proficiency in cloud, programming, and web technology.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative Gradient Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo))'
                }}
              />

              <div>
                {/* Header Icon & Issuer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <Award size={24} />
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Calendar size={14} color="var(--accent-indigo)" />
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {cert.name}
                </h3>

                <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Issued by {cert.issuer}
                </p>

                {/* Credential ID */}
                <div style={{ marginBottom: '1.5rem', fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={14} color="var(--accent-emerald)" />
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>

              {/* Verification Button */}
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ width: '100%' }}
              >
                <ExternalLink size={15} />
                <span>Verify Credential</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
