import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal, Copy, Check, Download, ArrowUpRight, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const codeSnippets = {
  'identity.json': `{
  "developer": "${personalInfo.name}",
  "role": "Full Stack Engineer & Interface Developer",
  "focus": "Visual Systems & Software Architecture",
  "status": "Available for selected collaborations",
  "stack": ["React", "Node.js", "Java", "PostgreSQL"]
}`,
  'manifesto.ts': `export const principles = [
  "Clarity over complexity",
  "Performance & precise typography",
  "Interfaces that feel inevitable"
];`
};

const Hero = ({ addToast }) => {
  const [activeTab, setActiveTab] = useState('identity.json');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    if (addToast) addToast(`Copied ${activeTab}`, 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Editorial Display Typography (From Screenshot) */}
          <div>
            
            {/* Top Minimalist Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>{personalInfo.name}</span>
            </div>

            {/* Giant Editorial Headline */}
            <h1
              className="editorial-headline"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#ffffff',
                marginBottom: '2rem',
                maxWidth: '850px'
              }}
            >
              I build clear identities and digital experiences for ideas that deserve attention.
            </h1>

            {/* Subtitle Paragraph */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.15rem',
                lineHeight: 1.65,
                marginBottom: '3rem',
                maxWidth: '620px',
                fontWeight: 400
              }}
            >
              Independent developer & full-stack engineer focused on visual systems, thoughtful interfaces, and the quiet details that make work feel inevitable.
            </p>

            {/* Monospaced Section Label matching screenshot: ↓ SELECTED WORK, 2024–26 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
                  paddingBottom: '0.3rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'}
              >
                <span>↓ SELECTED WORK, 2024–26</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-outline btn-sm"
              >
                <Download size={14} />
                <span>Resume PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Monochrome High-Contrast IDE Snippet Window */}
          <div>
            <div
              className="glass-card"
              style={{
                background: '#0d0d0d',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  background: '#141414',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {Object.keys(codeSnippets).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        background: activeTab === tab ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                        border: 'none',
                        color: activeTab === tab ? '#ffffff' : 'var(--text-muted)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        cursor: 'pointer'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              {/* Code Display */}
              <div style={{ padding: '1.25rem', background: '#090909' }}>
                <pre
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: '#e2e8f0',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Window Footer */}
              <div
                style={{
                  background: '#141414',
                  padding: '0.5rem 1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span>UTF-8 Monochrome</span>
                <span style={{ color: '#ffffff' }}>● Active</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
