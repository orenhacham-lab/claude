import { useState } from 'react'

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}

function ScalesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"/>
      <path d="M3 10l9-7 9 7"/>
      <path d="M3 14c0 2 1.5 3 3 3s3-1 3-3L6 10z"/>
      <path d="M15 14c0 2 1.5 3 3 3s3-1 3-3L15 10z"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
    </svg>
  )
}

const FEATURES = [
  { icon: <ClockIcon />, line1: 'Доступность 24/7', line2: 'в экстренных ситуациях' },
  { icon: <GlobeIcon />, line1: 'Консультации на', line2: 'иврите, рус., англ.' },
  { icon: <ScalesIcon />, line1: '25 лет опыта', line2: 'в уголовном праве' },
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: '72px',
      overflow: 'hidden',
    }}>

      {/* Layer 1 — blurred background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/photo-dorit-contact.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(6px)',
        transform: 'scale(1.1)',
        zIndex: 0,
      }} />

      {/* Layer 2 — dark blue gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(5,15,35,0.85) 0%, rgba(5,15,35,0.6) 40%, rgba(5,15,35,0.2) 70%)',
        zIndex: 1,
      }} />

      {/* Layer 3 — person image, anchored left */}
      <img
        src="/photo-dorit.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '115%',
          width: 'auto',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content — right side */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 28px',
        height: 'calc(100vh - 72px)',
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
      }}>

        {/* Left cell — empty, person image is absolute behind */}
        <div />

        {/* Right cell — text content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '32px',
          maxWidth: '520px',
        }}>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.6rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: '12px',
          }}>
            Дорит Гитерман
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 2rem)',
            fontWeight: 700,
            color: '#6ea8de',
            lineHeight: 1.25,
            marginBottom: '16px',
          }}>
            Адвокат по уголовным делам<br />
            и делам о насилии в семье
          </h2>

          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, #6ea8de, rgba(110,168,222,0.15) 70%, transparent)',
            marginBottom: '16px',
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)',
            lineHeight: 1.75,
            marginBottom: '24px',
          }}>
            Уголовное право требует глубокого опыта и понимания системы.<br />
            25 лет практики и прецедентных дел — в моменты, когда нет места ошибкам.
          </p>

          {/* Feature cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '24px',
          }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(110,168,222,0.12)',
                border: '1px solid rgba(110,168,222,0.3)',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
              }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                  {f.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#fff', lineHeight: 1.35 }}>
                  {f.line1}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#6ea8de', marginTop: '4px', lineHeight: 1.3 }}>
                  {f.line2}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {sent ? (
            <div style={{ color: '#6ea8de', fontWeight: 600 }}>
              ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
            </div>
          ) : (
            <>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '12px', fontSize: '0.88rem' }}>
                Хотите бесплатную консультацию?{' '}
                <span style={{ color: '#6ea8de', fontWeight: 500 }}>Оставьте данные, мы перезвоним</span>
              </p>
              <form
                onSubmit={e => { e.preventDefault(); setSent(true) }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
              >
                <input
                  className="form-input" type="text" placeholder="Полное имя *"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  required style={{ flex: '1 1 140px' }}
                />
                <input
                  className="form-input" type="tel" placeholder="Телефон *"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  required style={{ flex: '1 1 120px' }}
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Отправить
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          section > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            height: auto !important;
            padding-top: 32px;
            padding-bottom: 48px;
          }
          section > div[style*="grid-template-columns"] > div:first-child {
            display: none;
          }
          section > div[style*="grid-template-columns"] > div:last-child {
            padding-left: 0 !important;
            max-width: 100% !important;
          }
          section > img { display: none; }
        }
      `}</style>
    </section>
  )
}
