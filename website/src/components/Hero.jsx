import { useState } from 'react'

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

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

const FEATURES = [
  { icon: <ClockIcon />, line1: 'Доступность 24/7', line2: 'в экстренных ситуациях' },
  { icon: <GlobeIcon />,  line1: 'Консультации на', line2: 'иврите, рус., англ.' },
  { icon: <ScalesIcon />, line1: '25 лет опыта', line2: 'в уголовном праве' },
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  return (
    <section style={{
      minHeight: '100vh',
      background: '#0b1729',
      paddingTop: '72px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 28px',
        height: 'calc(100vh - 72px)',
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── Photo column ─────────────────────── */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
        }}>
          <img
            src="/photo-dorit.png"
            alt="Дорит Гитерман — адвокат"
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              height: '100%',
              width: 'auto',
              maxWidth: 'none',
              display: 'block',
              filter: 'drop-shadow(-6px 0 20px rgba(0,0,0,0.5))',
            }}
          />
        </div>

        {/* ── Content column ───────────────────── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 0 40px 24px',
        }}>

          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: '8px',
            letterSpacing: '-0.5px',
          }}>
            Дорит Гитерман
          </h1>

          {/* Specialty */}
          <h2 style={{
            fontSize: 'clamp(1.3rem, 2.6vw, 2.2rem)',
            fontWeight: 700,
            color: '#6ea8de',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            Адвокат по уголовным делам<br />
            и делам о насилии в семье
          </h2>

          {/* Accent line — same blue gradient as Hebrew */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, #6ea8de 0%, rgba(110,168,222,0.2) 70%, transparent 100%)',
            marginBottom: '22px',
          }} />

          {/* Description */}
          <p style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
            lineHeight: 1.8,
            marginBottom: '28px',
            maxWidth: '500px',
          }}>
            Уголовное право требует глубокого опыта и понимания системы.
            <br />25 лет практики и прецедентных дел — в моменты, когда нет места ошибкам.
          </p>

          {/* Feature cards — 3 equal columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '28px',
          }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(110,168,222,0.12)',
                border: '1px solid rgba(110,168,222,0.3)',
                borderRadius: '12px',
                padding: '18px 12px 14px',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                  {f.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#fff', lineHeight: 1.3 }}>
                  {f.line1}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#6ea8de', marginTop: '4px', lineHeight: 1.3 }}>
                  {f.line2}
                </div>
              </div>
            ))}
          </div>

          {/* Lead form */}
          {sent ? (
            <div style={{ color: '#6ea8de', fontWeight: 600, fontSize: '1rem' }}>
              ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
            </div>
          ) : (
            <>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '12px', fontSize: '0.9rem' }}>
                Хотите бесплатную консультацию?{' '}
                <span style={{ color: '#6ea8de', fontWeight: 500 }}>Оставьте данные, мы перезвоним</span>
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
              >
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
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '14px 24px' }}>
                  Отправить
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #hero-grid { grid-template-columns: 1fr !important; height: auto !important; }
        }
      `}</style>
    </section>
  )
}
