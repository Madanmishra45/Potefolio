import React, { useState } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Cyber Cyan', color: '#06b6d4' },
  { id: 'emerald', name: 'Emerald Tech', color: '#10b981' },
  { id: 'violet', name: 'Electric Violet', color: '#a855f7' },
  { id: 'sunset', name: 'Sunset Neon', color: '#f59e0b' },
];

const ThemeSwitcher = ({ currentTheme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Accent Theme"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-full)',
          padding: '0.45rem',
          color: 'var(--accent-cyan)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        <Palette size={18} />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 12px)',
            right: 0,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color-hover)',
            borderRadius: 'var(--radius-md)',
            padding: '0.6rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), var(--shadow-glow)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            minWidth: '150px',
            zIndex: 1100,
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', padding: '0.2rem 0.4rem', textTransform: 'uppercase' }}>
            Color Accent
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: currentTheme === t.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                border: 'none',
                color: currentTheme === t.id ? '#ffffff' : 'var(--text-muted)',
                padding: '0.4rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.15s ease'
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: t.color,
                  boxShadow: `0 0 8px ${t.color}`
                }}
              />
              <span>{t.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
