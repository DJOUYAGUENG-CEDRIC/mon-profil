import React, { useState, useEffect } from 'react';

const roles = [
  'Développeur Full Stack',
  'React JS · Spring Boot',
  'Flutter · Django · PHP',
  'Architecte Logiciel',
  'DevOps · Linux Expert',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '0 1.2rem' : '0 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,160,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,160,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '3rem' : '4rem',
        paddingTop: isMobile ? '6rem' : '5rem',
        paddingBottom: isMobile ? '5rem' : '2rem',
      }}>

        {/* ── Photo card (mobile: top center) ── */}
        {isMobile && (
          <div style={{
            animation: 'fadeIn 1s ease 0.2s forwards',
            opacity: 0,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}>
            <PhotoCard size="small" />
          </div>
        )}

        {/* ── Left – Text ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.73rem',
            color: 'var(--accent)', letterSpacing: '0.08em',
            padding: '0.35rem 0.9rem',
            border: '1px solid rgba(0,229,160,0.3)',
            borderRadius: '20px',
            background: 'rgba(0,229,160,0.06)',
            marginBottom: '1.6rem',
            animation: 'fadeUp 0.6s ease 0.1s forwards',
            opacity: 0,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--accent)', display: 'inline-block',
              animation: 'glow-pulse 2s infinite',
              flexShrink: 0,
            }} />
            Disponible pour de nouveaux projets
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: isMobile ? 'clamp(2rem, 9vw, 2.8rem)' : 'clamp(2.4rem, 5vw, 4rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '0.6rem',
            animation: 'fadeUp 0.7s ease 0.2s forwards',
            opacity: 0,
            wordBreak: 'break-word',
          }}>
            DJOUYAGUENG<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>CEDRIC</span>
          </h1>

          {/* Typing role */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: isMobile ? 'clamp(0.85rem, 3.5vw, 1rem)' : 'clamp(0.95rem, 2vw, 1.25rem)',
            color: 'var(--text-dim)',
            marginBottom: '1.6rem',
            minHeight: '2rem',
            animation: 'fadeUp 0.7s ease 0.35s forwards',
            opacity: 0,
          }}>
            <span style={{ color: 'var(--accent2)' }}>&gt; </span>
            {displayed}
            <span style={{ animation: 'blink 0.9s infinite', color: 'var(--accent)' }}>█</span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.02rem',
            color: 'var(--text-dim)',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '2.2rem',
            animation: 'fadeUp 0.7s ease 0.5s forwards',
            opacity: 0,
          }}>
            Développeur Full Stack passionné, 23 ans. Je conçois des applications
            web &amp; mobiles robustes et scalables, du frontend au backend,
            en passant par l'infra Linux &amp; DevOps.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            gap: '0.9rem',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.7s ease 0.65s forwards',
            opacity: 0,
          }}>
            <a href="#projects" style={{
              padding: isMobile ? '0.8rem 1.5rem' : '0.9rem 2rem',
              background: 'var(--accent)',
              color: '#000',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: '0.02em',
              borderRadius: '6px',
              transition: 'all 0.25s',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,229,160,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              Voir mes projets →
            </a>
            <a href="#contact" style={{
              padding: isMobile ? '0.8rem 1.5rem' : '0.9rem 2rem',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.88rem',
              borderRadius: '6px',
              background: 'var(--surface)',
              transition: 'all 0.25s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}>
              Me contacter
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '1.8rem' : '2.5rem',
            marginTop: '3rem',
            animation: 'fadeUp 0.7s ease 0.8s forwards',
            opacity: 0,
            flexWrap: 'wrap',
          }}>
            {[
              { val: '5+', label: 'Langages' },
              { val: '3+', label: "Ans d'exp." },
              { val: '10+', label: 'Projets' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: isMobile ? '1.5rem' : '1.8rem',
                  color: 'var(--accent)', lineHeight: 1,
                }}>{val}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: 'var(--text-muted)', letterSpacing: '0.06em',
                  marginTop: '0.3rem',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right – Photo card (desktop only) ── */}
        {!isMobile && (
          <div style={{
            animation: 'fadeIn 1s ease 0.4s forwards',
            opacity: 0,
            flexShrink: 0,
          }}>
            <PhotoCard size="large" />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.5rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
        color: 'var(--text-muted)', letterSpacing: '0.1em',
        animation: 'fadeIn 1s ease 1.5s forwards', opacity: 0,
      }}>
        SCROLL
        <div style={{
          width: 1, height: 36,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Photo Card — réutilisable (small / large)
───────────────────────────────────────── */
function PhotoCard({ size }) {
  const isLarge = size === 'large';
  const w = isLarge ? 280 : 180;
  const h = isLarge ? 340 : 220;

  return (
    <div style={{
      width: w, height: h,
      position: 'relative',
      animation: 'float 5s ease-in-out infinite',
    }}>
      {/* Corner decorations */}
      {[
        { top: -8, left: -8, borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', width: 24, height: 24 },
        { top: -8, right: -8, borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', width: 24, height: 24 },
        { bottom: -8, left: -8, borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', width: 24, height: 24 },
        { bottom: -8, right: -8, borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', width: 24, height: 24 },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', ...s }} />
      ))}

      {/* Photo area */}
      <div style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(160deg, var(--surface) 0%, var(--surface2) 100%)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '0.8rem', overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Inner glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 20%, rgba(0,229,160,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Scan line animation */}
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden',
          borderRadius: '10px', pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute', left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.15), transparent)',
            animation: 'scanline 4s linear infinite',
          }} />
        </div>

        <img
          src="../../public/cedric-DWEbwTRI.jpg"
          alt="Cedric"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            borderRadius: '10px',
          }}
        />

        {/* Bottom bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.4,
        }} />
      </div>

      {/* Floating badge */}
      <div style={{
        position: 'absolute',
        bottom: isLarge ? -18 : -16,
        right: isLarge ? -18 : -14,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: isLarge ? '0.5rem 0.85rem' : '0.35rem 0.65rem',
        fontFamily: 'var(--font-mono)',
        fontSize: isLarge ? '0.68rem' : '0.6rem',
        color: 'var(--accent)', letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
      }}>
        23 ans · Dschang Cameroun
      </div>

      {/* Top-left skill badge (desktop only) */}
      {isLarge && (
        <div style={{
          position: 'absolute',
          top: -16, left: -20,
          background: 'var(--surface)',
          border: '1px solid rgba(14,165,233,0.4)',
          borderRadius: '8px',
          padding: '0.4rem 0.8rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.63rem',
          color: 'var(--accent2)', letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        }}>
          Full Stack Dev ⚡
        </div>
      )}
    </div>
  );
}