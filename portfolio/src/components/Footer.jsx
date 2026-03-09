import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 2rem',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--text)' }}>
            <span style={{ color: 'var(--accent)' }}>&lt;</span>Cedric<span style={{ color: 'var(--accent)' }}>&#47;&gt;</span>
          </a>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Développeur Full Stack · Douala, Cameroun 🇨🇲
          </p>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} DJOUYAGUENG SADE CEDRIC
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['GitHub', 'LinkedIn', 'GitLab'].map(link => (
            <a key={link} href="#" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--text-muted)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
