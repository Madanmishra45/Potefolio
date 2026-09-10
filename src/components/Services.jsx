import React from 'react';
import { Layout, Server, Database, Code2, Cpu, GitBranch, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Layout, Server, Database, Code2, Cpu, GitBranch
};

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Technical Scope</span>
          </div>
          <h2 className="section-title">
            What I <span className="gradient-text">Can Do</span>
          </h2>
          <p className="section-subtitle">
            Core software development services, technical capabilities, and engineering solutions I offer.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    marginBottom: '1.5rem'
                  }}
                >
                  <IconComponent size={26} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
                  {service.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
