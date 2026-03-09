import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'GoodImmo',
    subtitle: 'site Web de mise  en relation dans le domaine de l\'immobilier',
    tags: ['React', 'Spring Boot', 'MySQL'],
    desc: 'Application web de mise en relation entre acheteurs et vendeurs immobiliers. Frontend React, backend Spring Boot, base de données MySQL.',
    color: '#00e5a0',
    status: 'Production',
    link: '#',              // ← site déployé (frontend)
    repo: 'https://github.com/DJOUYAGUENG-CEDRIC/GoodImmo', // ← GitHub Frontend
    repoBack: 'https://github.com/DJOUYAGUENG-CEDRIC/Backend-GoodImmo', // ← GitHub Backend
  },
  {
    id: 2,
    title: 'Cineroom',
    subtitle: 'Application web et Mobile de streaming camerounaise',
    tags: ['Flutter', 'Django', 'REST API', 'PostgreSQL'],
    desc: 'Application de streaming vidéo pour le marché camerounais developper en microservices. Frontend React Native, backend: Spring boot, nestJs,  ',
    color: '#0ea5e9',
    status: 'En développement',
    link: '#',
    repo: 'https://github.com/DJOUYAGUENG-CEDRIC/services',
    repoBack: '#',
  },
  {
    id: 3,
    title: 'Projet 03',
    subtitle: 'Plateforme DevOps / Infra',
    tags: ['Linux', 'Docker', 'Nginx', 'GitLab CI/CD'],
    desc: 'Pipeline CI/CD complet, configuration Nginx, déploiement automatisé, monitoring de serveurs Linux en production.',
    color: '#f59e0b',
    status: 'Terminé',
    link: '#',
    repo: '#',
    repoBack: '#',
  },
  {
    id: 4,
    title: 'Projet 04',
    subtitle: 'API REST / Microservices',
    tags: ['Java', 'Spring Boot', 'Docker', 'GitHub'],
    desc: 'Architecture orientée microservices avec Spring Boot. Discovery service, API Gateway, communication inter-services.',
    color: '#a78bfa',
    status: 'Terminé',
    link: '#',
    repo: '#',
    repoBack: '#',
  },
];

const statusColors = {
  'Production': '#00e5a0',
  'En développement': '#f59e0b',
  'Terminé': '#64748b',
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.7rem' }}>
            03. PROJETS
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}>
            Mes Réalisations
          </h2>

        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p) => (
            <div key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${hovered === p.id ? p.color : 'var(--border)'}`,
                borderRadius: '12px', padding: '2rem',
                transition: 'all 0.3s', cursor: 'default',
                transform: hovered === p.id ? 'translateY(-4px)' : 'none',
                boxShadow: hovered === p.id ? `0 12px 40px ${p.color}15` : 'none',
                position: 'relative', overflow: 'hidden',
              }}>
              {/* Top glow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                opacity: hovered === p.id ? 1 : 0,
                transition: 'opacity 0.3s',
              }} />

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: p.color, letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
                    {String(p.id).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.1rem' }}>{p.subtitle}</p>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  padding: '0.3rem 0.7rem',
                  background: `${statusColors[p.status]}15`,
                  border: `1px solid ${statusColors[p.status]}40`,
                  borderRadius: '20px', color: statusColors[p.status],
                  letterSpacing: '0.04em',
                }}>
                  {p.status}
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    padding: '0.25rem 0.6rem',
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    borderRadius: '3px', color: 'var(--text-muted)',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>

                {/* Lien site déployé */}
                {p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                    color: p.color, display: 'flex', alignItems: 'center', gap: '0.3rem',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                    ↗ Voir le projet
                  </a>
                )}

                {/* GitHub Frontend */}
                {p.repo && p.repo !== '#' && (
                  <a href={p.repo} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                    color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    ⌥ Frontend
                  </a>
                )}

                {/* GitHub Backend */}
                {p.repoBack && p.repoBack !== '#' && (
                  <a href={p.repoBack} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                    color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent2)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    ⌥ Backend
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #projects .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
