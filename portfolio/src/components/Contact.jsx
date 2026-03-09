import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    // Connectez ici votre service d'envoi (EmailJS, Formspree, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactLinks = [
    { icon: '✉', label: 'Email', value: 'djouyaguengc@email.com', href: 'mailto:djouyaguengc@email.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/cedric', href: '#' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/cedric', href: '#' },
    { icon: '🦊', label: 'GitLab', value: 'gitlab.com/cedric', href: '#' },
  ];

  const inputStyle = {
    width: '100%', background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: '8px', padding: '0.9rem 1.1rem',
    fontFamily: 'var(--font-body)', fontSize: '0.92rem',
    color: 'var(--text)', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.7rem' }}>
            04. CONTACT
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}>
            Travaillons ensemble
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
            Vous avez un projet ? N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left – Info */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                 RETROUVEZ-MOI
              </p>
              {contactLinks.map(({ icon, label, value, href }) => (
                <a key={label} href={href} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.2rem', marginBottom: '0.8rem',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
                  <span style={{ fontSize: '1.1rem', width: 24, textAlign: 'center' }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{label.toUpperCase()}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginTop: '0.1rem' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{
              padding: '1.2rem 1.5rem',
              background: 'rgba(0,229,160,0.06)',
              border: '1px solid rgba(0,229,160,0.2)',
              borderRadius: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', animation: 'glow-pulse 2s infinite' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.08em' }}>DISPONIBLE</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                Ouvert aux opportunités freelance & CDI. Réponse sous 24h.
              </p>
            </div>
          </div>

          {/* Right – Form */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '2.5rem',
          }}>
            {sent ? (
              <div style={{
                textAlign: 'center', padding: '3rem 2rem',
                animation: 'fadeIn 0.5s ease',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Message envoyé !</h3>
                <p style={{ color: 'var(--text-dim)' }}>Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>NOM</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Votre nom"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>EMAIL</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" type="email"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>SUJET</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Objet de votre message"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet..."
                    rows={5} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-body)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <button onClick={handleSubmit} style={{
                  width: '100%', padding: '1rem',
                  background: 'var(--accent)', color: '#000',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem',
                  border: 'none', borderRadius: '8px', cursor: 'pointer',
                  transition: 'all 0.25s', letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(0,229,160,0.35)'; }}
                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none'; }}>
                  Envoyer le message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact > div > div > div:last-child > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
