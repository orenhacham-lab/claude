import { useState } from 'react'

function GlobeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}

function ScalesIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"/>
      <path d="M3 10l9-7 9 7"/>
      <path d="M3 14c0 2 1.5 3 3 3s3-1 3-3L6 10z"/>
      <path d="M15 14c0 2 1.5 3 3 3s3-1 3-3L15 10z"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

const FEATURES = [
  { icon: <ScalesIcon />, line1: '25 лет опыта', line2: 'в уголовном праве' },
  { icon: <GlobeIcon />,  line1: 'Ведение дел на', line2: 'иврите, рус., англ.' },
  { icon: <ClockIcon />,  line1: 'Доступность 24/7', line2: 'в экстренных ситуациях' },
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  const HERO_H = 'calc(100vh - 72px)'

  return (
    <section style={{
      minHeight: '100vh',
      background: '#0b1729',
      paddingTop: '72px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dark library overlay — mimics Hebrew bg texture */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 55% 90% at 20% 60%, rgba(8,15,30,0.5) 0%, transparent 65%),
          radial-gradient(ellipse 70% 60% at 80% 40%, rgba(14,26,50,0.6) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, height: HERO_H }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          height: '100%',
        }}>

          {/* ── Photo column ─────────────────────── */}
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            height: '100%',
          }}>
            <img
              src="/photo-dorit.png"
              alt="Дорит Гитерман — адвокат"
              style={{
                height: HERO_H,
                maxHeight: '720px',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                filter: 'drop-shadow(-8px 0 24px rgba(0,0,0,0.55))',
                display: 'block',
              }}
            />
          </div>

          {/* ── Content column ───────────────────── */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '40px 0 40px 8px',
          }}>

            {/* Top micro-decoration */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '2px', background: 'rgba(110,168,222,0.45)', borderRadius: '2px' }} />
              <div style={{ width: '6px', height: '6px', background: '#6ea8de', borderRadius: '50%' }} />
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900, color: '#fff',
              lineHeight: 1.05, marginBottom: '10px',
              letterSpacing: '-0.5px',
            }}>
              Дорит Гитерман
            </h1>

            {/* Specialty */}
            <h2 style={{
              fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)',
              fontWeight: 700, color: '#6ea8de',
              lineHeight: 1.2, marginBottom: '18px',
            }}>
              Адвокат по уголовным делам
            </h2>

            {/* Accent line */}
            <div style={{
              height: '2px',
              background: 'linear-gradient(to right, #6ea8de 0%, rgba(110,168,222,0.3) 60%, transparent 100%)',
              marginBottom: '20px',
            }} />

            {/* Description */}
            <p style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 'clamp(0.9rem, 1.4vw, 1.02rem)',
              lineHeight: 1.75, marginBottom: '30px',
              maxWidth: '490px',
            }}>
              Уголовное право требует глубокого опыта и понимания системы.
              <br />25 лет практики и прецедентных дел — в моменты, когда нет места ошибкам.
            </p>

            {/* Feature cards */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px', marginBottom: '30px',
            }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(10,20,42,0.75)',
                  border: '1px solid rgba(110,168,222,0.22)',
                  borderRadius: '14px',
                  padding: '16px 12px 14px',
                  textAlign: 'center',
                  backdropFilter: 'blur(6px)',
                }}>
                  <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', lineHeight: 1.3 }}>{f.line1}</div>
                  <div style={{ fontSize: '0.72rem', color: '#6ea8de', marginTop: '3px', lineHeight: 1.3 }}>{f.line2}</div>
                </div>
              ))}
            </div>

            {/* Inline lead form */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              {sent ? (
                <div style={{ color: '#6ea8de', fontWeight: 600, fontSize: '1rem' }}>
                  ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
                </div>
              ) : (
                <>
                  <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '13px', fontSize: '0.92rem' }}>
                    Хотите бесплатную консультацию?{' '}
                    <span style={{ color: '#6ea8de', fontWeight: 500 }}>Оставьте данные, мы перезвоним</span>
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                    style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input
                      className="form-input" type="text" placeholder="Полное имя *"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      required style={{ flex: '1 1 150px' }}
                    />
                    <input
                      className="form-input" type="tel" placeholder="Телефон *"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      required style={{ flex: '1 1 130px' }}
                    />
                    <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '14px 26px' }}>
                      Отправить
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #hero-grid { grid-template-columns: 1fr !important; height: auto !important; }
          #hero-photo { display: none !important; }
          #hero-content { padding: 40px 0 50px !important; }
        }
      `}</style>
    </section>
  )
}
