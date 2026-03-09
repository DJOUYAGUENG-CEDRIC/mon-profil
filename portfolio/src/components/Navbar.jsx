import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about',    label: 'À propos',     num: '01' },
  { href: '#skills',   label: 'Compétences',  num: '02' },
  { href: '#projects', label: 'Projets',      num: '03' },
  { href: '#contact',  label: 'Contact',      num: '04' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('');
  const [isMobile,  setIsMobile]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  // ── Hamburger icon (3 bars → X) ──────────────────────────
  const HamburgerIcon = () => (
    <button
      onClick={() => setMenuOpen(o => !o)}
      aria-label="Toggle menu"
      style={{
        display: isMobile ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        width: 40, height: 40,
        background: 'transparent',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        cursor: 'pointer',
        padding: '8px',
        transition: 'border-color 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Bar 1 */}
      <span style={{
        display: 'block',
        width: '100%', height: '1.5px',
        background: menuOpen ? 'var(--accent)' : 'var(--text)',
        borderRadius: '2px',
        transformOrigin: 'center',
        transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
        transition: 'transform 0.3s ease, background 0.2s',
      }} />
      {/* Bar 2 */}
      <span style={{
        display: 'block',
        width: '100%', height: '1.5px',
        background: menuOpen ? 'var(--accent)' : 'var(--text)',
        borderRadius: '2px',
        opacity: menuOpen ? 0 : 1,
        transform: menuOpen ? 'scaleX(0)' : 'none',
        transition: 'opacity 0.2s, transform 0.3s ease, background 0.2s',
      }} />
      {/* Bar 3 */}
      <span style={{
        display: 'block',
        width: '100%', height: '1.5px',
        background: menuOpen ? 'var(--accent)' : 'var(--text)',
        borderRadius: '2px',
        transformOrigin: 'center',
        transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
        transition: 'transform 0.3s ease, background 0.2s',
      }} />
    </button>
  );

  return (
    <>
      {/* ── Nav bar ─────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || menuOpen ? 'rgba(8,11,16,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(30,45,66,0.7)' : 'none',
        transition: 'background 0.4s ease, border 0.4s ease',
      }}>
        {/* Logo */}
        <a href="#" onClick={() => setMenuOpen(false)} style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
          letterSpacing: '-0.02em', color: 'var(--text)',
          textDecoration: 'none', zIndex: 201,
        }}>
          <span style={{ color: 'var(--accent)' }}>&lt;</span>
          Cedric
          <span style={{ color: 'var(--accent)' }}>&#47;&gt;</span>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{
            display: 'flex', gap: '2.5rem', listStyle: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.05em',
            margin: 0, padding: 0,
          }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}
                  onClick={() => handleNavClick(href)}
                  style={{
                    color: active === href ? 'var(--accent)' : 'var(--text-dim)',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = active === href ? 'var(--accent)' : 'var(--text-dim)'}
                >
                  <span style={{ color: 'var(--accent)', opacity: 0.5 }}>// </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a href="#contact"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
              padding: '0.5rem 1.2rem',
              border: '1px solid var(--accent)',
              borderRadius: '4px',
              color: 'var(--accent)',
              transition: 'all 0.2s',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
          >
            Me contacter
          </a>
        )}

        {/* Hamburger (mobile) */}
        <HamburgerIcon />
      </nav>

      {/* ── Mobile backdrop ─────────────────────────────────── */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 150,
            background: 'rgba(8,11,16,0.5)',
            backdropFilter: 'blur(4px)',
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? 'auto' : 'none',
            transition: 'opacity 0.35s ease',
          }}
        />
      )}

      {/* ── Mobile drawer ───────────────────────────────────── */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0, right: 0,
          width: 'min(85vw, 320px)',
          height: '100dvh',
          zIndex: 190,
          background: 'rgba(13,17,23,0.98)',
          backdropFilter: 'blur(24px)',
          borderLeft: '1px solid var(--border)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem 2rem 2.5rem',
          overflowY: 'auto',
        }}>

          {/* Navigation links */}
          <nav style={{ flex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--text-muted)', letterSpacing: '0.12em',
              marginBottom: '1.5rem',
            }}>
              // NAVIGATION
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map(({ href, label, num }, i) => (
                <li key={href} style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `opacity 0.4s ease ${0.1 + i * 0.07}s, transform 0.4s ease ${0.1 + i * 0.07}s`,
                }}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.1rem 0',
                      borderBottom: '1px solid var(--border)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      color: active === href ? 'var(--accent)' : 'var(--text)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.paddingLeft = '0.5rem'}
                    onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
                  >
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                      color: 'var(--accent)', opacity: 0.6, letterSpacing: '0.06em',
                      minWidth: '1.8rem',
                    }}>
                      {num}.
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1.2rem', letterSpacing: '-0.01em',
                    }}>
                      {label}
                    </span>
                    <span style={{
                      marginLeft: 'auto',
                      color: 'var(--text-muted)', fontSize: '0.9rem',
                      opacity: active === href ? 1 : 0.4,
                    }}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA button */}
          <div style={{
            marginTop: '2.5rem',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.4s ease 0.4s, transform 0.4s ease 0.4s',
          }}>
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              style={{
                display: 'block', textAlign: 'center',
                width: '100%',
                padding: '1rem',
                background: 'var(--accent)',
                color: '#000',
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: '0.95rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Me contacter →
            </a>

            {/* Social links */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '1.5rem',
              marginTop: '1.5rem',
            }}>
              {['GitHub', 'LinkedIn', 'GitLab'].map(name => (
                <a key={name} href="#" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'var(--text-muted)', letterSpacing: '0.06em',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                  {name}
                </a>
              ))}
            </div>

            {/* Footer label */}
            <p style={{
              textAlign: 'center', marginTop: '1.5rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'rgba(100,116,139,0.4)', letterSpacing: '0.06em',
            }}>
              DJOUYAGUENG SADE CEDRIC · 2025
            </p>
          </div>
        </div>
      )}
    </>
  );
}