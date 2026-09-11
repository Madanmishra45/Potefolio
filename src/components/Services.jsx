import React from 'react';
import { Layout, Server, Database, Code2, Cpu, GitBranch, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Layout, Server, Database, Code2, Cpu, GitBranch
};

const Services = () => {
  return (
    <section id="services" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">ENGINEERING CAPABILITIES</div>
          <h2 className="section-heading">
            DEVELOPMENT <span className="gradient-cyan">SERVICES & SOLUTIONS</span>
          </h2>
          <p className="section-subtext">
            End-to-end software development capabilities across frontend, backend microservices, and database architecture.
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
                className="glass-card spotlight-card"
                style={{
                  padding: '2.2rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f0ff',
                    marginBottom: '1.5rem',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)'
                  }}
                >
                  <IconComponent size={26} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '0.6rem' }}>
                  {service.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
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
