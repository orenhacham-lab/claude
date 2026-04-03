import { useState } from 'react'

function GlobeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}

function ScalesIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

const FEATURES = [
  { icon: <ScalesIcon />, text: '25 лет опыта', sub: 'в уголовном праве' },
  { icon: <GlobeIcon />,  text: 'Ведение дел', sub: 'на русском, иврите, английском' },
  { icon: <ClockIcon />,  text: 'Доступность 24/7', sub: 'в экстренных ситуациях' },
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #08111f 0%, #0c1829 50%, #0e1e35 100%)',
      display: 'flex', alignItems: 'center',
      paddingTop: '72px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle background overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 25% 50%, rgba(14,30,53,0.4) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '40px',
          alignItems: 'center',
          minHeight: 'calc(100vh - 72px)',
          paddingBottom: '40px',
        }}>
          {/* Photo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <div style={{
              width: '100%', maxWidth: '480px',
              aspectRatio: '3/4',
              background: 'linear-gradient(180deg, rgba(110,168,222,0.08) 0%, rgba(10,20,40,0.3) 100%)',
              borderRadius: '20px',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              overflow: 'hidden',
              border: '1px solid rgba(110,168,222,0.15)',
            }}>
              {/* Replace with: <img src="/photo-dorit.png" alt="Дорит Гитерман" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
              <img
                src="/photo-dorit.png"
                alt="Дорит Гитерман — адвокат"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div style={{
                display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: '100%', height: '100%', color: 'rgba(255,255,255,0.25)', fontSize: '0.9rem', gap: '8px',
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(110,168,222,0.3)" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                Фото адвоката
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ paddingTop: '20px' }}>
            {/* Top decorative line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <div style={{ width: '40px', height: '2px', background: 'rgba(110,168,222,0.4)' }} />
              <div style={{ width: '6px', height: '6px', background: '#6ea8de', borderRadius: '50%' }} />
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '12px' }}>
              Дорит Гитерман
            </h1>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#6ea8de', lineHeight: 1.15, marginBottom: '18px' }}>
              Адвокат по уголовным делам
            </h2>

            <div style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, #6ea8de, transparent)', marginBottom: '20px' }} />

            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '500px' }}>
              Уголовное право требует глубокого опыта и понимания системы.
              <br/>25 лет практики и прецедентных дел — в моменты, когда нет места ошибкам.
            </p>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '36px' }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(15,32,64,0.7)',
                  border: '1px solid rgba(110,168,222,0.25)',
                  borderRadius: '14px',
                  padding: '18px 14px',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                }}>
                  <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff', lineHeight: 1.3 }}>{f.text}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6ea8de', marginTop: '4px', lineHeight: 1.3 }}>{f.sub}</div>
                </div>
              ))}
            </div>

            {/* Inline contact form */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px' }}>
              {sent ? (
                <div style={{ color: '#6ea8de', fontWeight: 600, fontSize: '1.05rem' }}>
                  ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
                </div>
              ) : (
                <>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '14px', fontSize: '0.95rem' }}>
                    Хотите бесплатную консультацию?{' '}
                    <span style={{ color: '#6ea8de', fontWeight: 500 }}>Оставьте данные, мы перезвоним</span>
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Полное имя *"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      style={{ flex: '1 1 160px' }}
                    />
                    <input
                      className="form-input"
                      type="tel"
                      placeholder="Телефон *"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                      style={{ flex: '1 1 140px' }}
                    />
                    <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
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
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
