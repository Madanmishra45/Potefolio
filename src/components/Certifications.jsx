import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">INDUSTRY CERTIFICATIONS</div>
          <h2 className="section-heading">
            VERIFIED <span className="gradient-purple">CREDENTIALS</span>
          </h2>
          <p className="section-subtext">
            Professional certifications in Cloud Architecture, Java Enterprise Development, and Modern Frontend Engineering.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
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
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a855f7',
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.25)'
                    }}
                  >
                    <Award size={24} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.4rem' }}>
                  {cert.name}
                </h3>

                <div style={{ color: '#00f0ff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {cert.issuer}
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                  Credential ID: {cert.credentialId}
                </div>
              </div>

              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyber-outline btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ShieldCheck size={15} style={{ color: '#00f0ff' }} />
                <span>VERIFY CERTIFICATE</span>
                <ExternalLink size={13} />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
