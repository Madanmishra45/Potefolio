import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate async API contact request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, project inquiry, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '2.5rem' }}>
          
          {/* Contact Details & Cards */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{ display: 'block', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-indigo)'
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone / Mobile</span>
                    <p style={{ fontWeight: 600, color: '#ffffff' }}>
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)'
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Current Location</span>
                    <p style={{ fontWeight: 600, color: '#ffffff' }}>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Connections */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.8rem' }}>Connect on Social Platforms</span>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>
              Send Me a Message
            </h3>

            {/* Success Toast */}
            {submitSuccess && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid var(--accent-emerald)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <CheckCircle2 size={20} />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Name Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: errors.name ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
                {errors.name && (
                  <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: errors.email ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
                {errors.email && (
                  <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Project Inquiry"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: errors.subject ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
                {errors.subject && (
                  <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: errors.message ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          #contact .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
