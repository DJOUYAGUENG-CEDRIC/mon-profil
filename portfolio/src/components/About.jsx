import React from 'react';

const facts = [
  { icon: '🎂', label: 'Âge', value: '23 ans' },
  { icon: '📍', label: 'Localisation', value: 'Douala, Cameroun' },
  { icon: '🎓', label: 'Spécialité', value: 'Génie Logiciel' },
  { icon: '🌐', label: 'Langues', value: 'Français · Anglais' },
];

const timeline = [
  {
    year: '2024 – Présent',
    title: 'Développeur Full Stack',
    place: 'Freelance & Projets personnels',
    desc: 'Développement d\'applications web & mobiles avec React, Spring Boot, Flutter. ',
    color: 'var(--accent)',
  },
  {
    year: '2022 – 2024',
    title: 'Conception Systèmes Logiciels',
    place: 'Formation avancée',
    desc: 'Au fil de cette année, je me suis pleinement initié aux fondamentaux du génie logiciel et à la maîtrise des bases de données relationnelles, HTML, CSS, JS, aboutissant à la réalisation de mon premier projet concret avec PHP et le framework Laravel.',
    color: 'var(--accent2)',
  },
  {
    year: '2021 – 2022',
    title: 'Initiation au Développement',
    place: 'Premières réalisations',
    desc: 'Maîtrise de Java, PHP.   et exploration de l\'écosystème Linux.',
    color: '#a78bfa',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', position: 'relative' }}>
      {/* Subtle divider */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.7rem' }}>
            01. À PROPOS
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}>
            Qui suis-je ?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Je suis <span style={{ color: 'var(--text)', fontWeight: 500 }}>DJOUYAGUENG SADE CEDRIC</span>, développeur
              Full Stack de 23 ans basé à Dschang, Cameroun. Passionné par la création de logiciels de haute qualité,
              je maîtrise un large spectre de technologies allant du développement frontend React JS au backend Java
              Spring Boot, Django ou PHP.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Expert en environnements <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Linux</span> et
              en administration de serveurs, j'intègre des pratiques DevOps modernes — Docker, CI/CD, Git — dans
              chaque projet. J'ai également un excellent niveau en conception de systèmes logiciels avancés.
            </p>

            {/* Facts grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
              {facts.map(({ icon, label, value }) => (
                <div key={label} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1rem 1.2rem',
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.1rem' }}>{label.toUpperCase()}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Timeline */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '1.8rem' }}>
              // PARCOURS
            </p>
            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: '1px', background: 'linear-gradient(to bottom, var(--accent), transparent)',
              }} />

              {timeline.map(({ year, title, place, desc, color }, i) => (
                <div key={year} style={{
                  paddingLeft: '2rem', marginBottom: '2.2rem', position: 'relative',
                }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: -5, top: 4,
                    width: 11, height: 11, borderRadius: '50%',
                    background: color, boxShadow: `0 0 10px ${color}88`,
                  }} />

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: color, letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    {year}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.2rem' }}>
                    {title}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>{place}</div>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
