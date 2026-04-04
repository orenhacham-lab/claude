import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '620px',
    }}>
      {/* Layer 1 — same library background as hero, blurred */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/bg-library.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(6px)',
        transform: 'scale(1.08)',
      }} />

      {/* Layer 2 — dark blue overlay, heavier than hero for contact mood */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(5,13,35,0.55) 0%, rgba(5,13,35,0.82) 45%, rgba(5,13,35,0.96) 100%)',
      }} />

      {/* Layer 2b — cool blue tint */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(8,18,55,0.3)',
      }} />

      {/* Layer 3 — person cutout, left side, full section height */}
      <div style={{
        position: 'absolute', zIndex: 2,
        left: 0, bottom: 0,
        width: '42%', height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <img
          src="/photo-dorit.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-30px',
            height: '115%',
            width: 'auto',
            maxWidth: 'none',
          }}
        />
      </div>

      {/* Layer 4 — content grid */}
      <div style={{
        position: 'relative', zIndex: 3,
        maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        minHeight: '620px',
      }}>

        {/* Left — empty, person absolute behind */}
        <div />

        {/* Right — form content */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px 0 80px 40px',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700,
            color: '#fff', lineHeight: 1.3, marginBottom: '12px',
          }}>
            Свяжитесь с нами для{' '}
            <span style={{ color: '#6ea8de' }}>первой бесплатной</span>{' '}
            консультации
          </h2>

          <div style={{
            width: '80px', height: '2px',
            background: 'linear-gradient(to right, #6ea8de, transparent)',
            marginBottom: '18px',
          }} />

          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px', fontSize: '1rem', lineHeight: 1.6 }}>
            Оставьте данные и мы свяжемся с вами в ближайшее время
          </p>

          {sent ? (
            <div style={{
              padding: '24px',
              background: 'rgba(110,168,222,0.15)',
              borderRadius: '12px',
              border: '1px solid rgba(110,168,222,0.3)',
              color: '#6ea8de', fontWeight: 600, fontSize: '1.05rem',
            }}>
              ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '480px' }}>
              <input
                className="form-input-dark" type="text" placeholder="Полное имя *"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="form-input-dark" type="tel" placeholder="Телефон *"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                required
              />
              <button type="submit" className="btn-submit">
                Отправить
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #contact > div[style*="grid"] {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          #contact > div[style*="grid"] > div:first-child { display: none; }
          #contact > div[style*="position: absolute"][style*="width: 42%"] { display: none; }
          #contact > div[style*="grid"] > div:last-child {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
