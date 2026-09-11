import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = ({ addToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (addToast) addToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (addToast) addToast('Thank you! Your message has been sent successfully.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header with Giant CTA Headline */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>06 / GET IN TOUCH</div>
          <h2
            className="editorial-title"
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.2rem'
            }}
          >
            LET'S BUILD <span className="gradient-purple">SOMETHING GREAT.</span>
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Available for Software Engineering internships, full-stack developer roles, and high-impact project collaborations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '2.5rem' }}>
          
          {/* Left Column: Direct Info & Copy Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card spotlight-card" style={{ padding: '2.2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
                DIRECT CONTACT
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(0, 240, 255, 0.1)',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00f0ff'
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Email Address</span>
                      <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{personalInfo.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-cyber-outline btn-sm"
                    title="Copy Email Address"
                    style={{ padding: '0.45rem 0.75rem' }}
                  >
                    {copiedEmail ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a855f7'
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Location</span>
                    <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{personalInfo.location}</p>
                  </div>
                </div>

                {/* Availability */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981'
                    }}
                  >
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Status</span>
                    <p style={{ fontWeight: 700, color: '#10b981', fontSize: '0.92rem' }}>{personalInfo.availability}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links Box */}
            <div className="glass-card spotlight-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 700 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <GithubIcon size={18} />
                <span>GITHUB</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 700 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <LinkedinIcon size={18} />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card spotlight-card" style={{ padding: '2.4rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
              SEND A DIRECT MESSAGE
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(8, 10, 16, 0.8)',
                      border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                  {errors.name && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{errors.name}</span>}
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(8, 10, 16, 0.8)',
                      border: errors.email ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                  {errors.email && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{errors.email}</span>}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(8, 10, 16, 0.8)',
                    border: errors.subject ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                {errors.subject && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{errors.subject}</span>}
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your role or project opportunity..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(8, 10, 16, 0.8)',
                    border: errors.message ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
                {errors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-cyber-cyan"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSubmitting ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
