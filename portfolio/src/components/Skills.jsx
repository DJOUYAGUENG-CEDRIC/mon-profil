import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#00e5a0',
    icon: '◈',
    skills: [
      { name: 'React JS', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: '#0ea5e9',
    icon: '◉',
    skills: [
      { name: 'Spring Boot (Java)', level: 70 },
      { name: 'Django (Python)', level: 70 },
      { name: 'PHP', level: 60 },
    ],
  },
  {
    category: 'DevOps & Infra',
    color: '#f59e0b',
    icon: '◆',
    skills: [
      { name: 'Linux (Admin. serveurs)', level: 60 },
      { name: 'Docker', level: 60 },
      { name: 'Git / GitHub / GitLab', level: 90 },
    ],
  },
  {
    category: 'Architecture',
    color: '#a78bfa',
    icon: '◇',
    skills: [
      { name: 'Conception logicielle', level: 88 },
      { name: 'Microservices', level: 82 },
      { name: 'API REST / GraphQL', level: 90 },
    ],
  },
];

const tools = [
  'React JS', 'Spring Boot', 'Django', 'Flutter','Android studio','PHP',
  'Docker', 'Git', 'GitHub', 'GitLab', 'Linux',
  'Java', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB',
  'VS Code', 'IntelliJ', 'Postman', 'Nginx', 'CI/CD',
];

function SkillBar({ name, level, color, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setWidth(level), delay);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: color }}>{level}%</span>
      </div>
      <div style={{
        height: '5px', background: 'var(--surface2)', borderRadius: '3px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: '3px',
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          width: `${width}%`,
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: `0 0 8px ${color}66`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.7rem' }}>
            02. COMPÉTENCES
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}>
            Stack & Outils
          </h2>
        </div>

        {/* Skill cards grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem', marginBottom: '4rem',
        }}>
          {skillGroups.map(({ category, color, icon, skills }) => (
            <div key={category} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.8rem',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <span style={{ color, fontSize: '1.2rem' }}>{icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                  {category}
                </h3>
              </div>
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} color={color} delay={i * 150} />
              ))}
            </div>
          ))}
        </div>

        {/* Tools cloud */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '12px', padding: '2rem 2.5rem',
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '1.4rem' }}>
            // TECHNOLOGIES & OUTILS
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
            {tools.map((tool) => (
              <span key={tool} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                padding: '0.4rem 0.9rem',
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                borderRadius: '4px', color: 'var(--text-dim)',
                transition: 'all 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(0,229,160,0.06)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)'; e.target.style.background = 'var(--surface2)'; }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
