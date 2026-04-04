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
    <section style={{ position: 'relative', minHeight: '100vh', paddingTop: '72px', overflow: 'hidden' }}>

      {/* ── CSS library/office background ─────────────────────────── */}

      {/* Base dark navy */}
      <div style={{ position: 'absolute', inset: 0, background: '#06101e', zIndex: 0 }} />

      {/* Shelf rows — horizontal panels suggesting book rows */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        filter: 'blur(4px)',
        background: `
          linear-gradient(0deg,
            transparent 0%,
            transparent 12%,
            rgba(18,38,78,0.55) 12%, rgba(18,38,78,0.55) 12.4%,
            rgba(12,28,60,0.35) 12.4%, rgba(12,28,60,0.35) 17%,
            rgba(18,38,78,0.45) 17%, rgba(18,38,78,0.45) 17.4%,
            transparent 17.4%,

            transparent 28%,
            rgba(16,35,72,0.5) 28%, rgba(16,35,72,0.5) 28.4%,
            rgba(10,25,55,0.3) 28.4%, rgba(10,25,55,0.3) 33%,
            rgba(16,35,72,0.4) 33%, rgba(16,35,72,0.4) 33.4%,
            transparent 33.4%,

            transparent 44%,
            rgba(18,38,78,0.45) 44%, rgba(18,38,78,0.45) 44.4%,
            rgba(12,28,60,0.28) 44.4%, rgba(12,28,60,0.28) 49%,
            rgba(18,38,78,0.38) 49%, rgba(18,38,78,0.38) 49.4%,
            transparent 49.4%,

            transparent 60%,
            rgba(15,33,68,0.4) 60%, rgba(15,33,68,0.4) 60.4%,
            rgba(10,25,55,0.25) 60.4%, rgba(10,25,55,0.25) 65%,
            rgba(15,33,68,0.35) 65%, rgba(15,33,68,0.35) 65.4%,
            transparent 65.4%,

            transparent 76%,
            rgba(14,30,62,0.35) 76%, rgba(14,30,62,0.35) 76.4%,
            rgba(8,22,48,0.2) 76.4%, rgba(8,22,48,0.2) 81%,
            rgba(14,30,62,0.3) 81%, rgba(14,30,62,0.3) 81.4%,
            transparent 81.4%,
            transparent 100%
          )
        `,
      }} />

      {/* Vertical shelf dividers — suggests bookcase columns */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        filter: 'blur(14px)',
        background: `
          linear-gradient(90deg,
            transparent 0%,
            rgba(35,65,130,0.12) 8%, rgba(35,65,130,0.12) 9%,
            transparent 10%,
            transparent 23%,
            rgba(30,58,120,0.09) 24%, rgba(30,58,120,0.09) 25%,
            transparent 26%,
            transparent 38%,
            rgba(32,62,125,0.11) 39%, rgba(32,62,125,0.11) 40%,
            transparent 41%,
            transparent 55%,
            rgba(28,54,112,0.08) 56%, rgba(28,54,112,0.08) 57%,
            transparent 58%,
            transparent 72%,
            rgba(25,50,105,0.07) 73%, rgba(25,50,105,0.07) 74%,
            transparent 75%,
            transparent 100%
          )
        `,
      }} />

      {/* Atmospheric glow — warm-cool light behind where person stands */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 60% 70% at 22% 62%, rgba(22,52,108,0.4) 0%, transparent 65%),
          radial-gradient(ellipse 35% 45% at 18% 18%, rgba(18,42,90,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 25% 30% at 40% 80%, rgba(15,35,75,0.2) 0%, transparent 55%)
        `,
      }} />

      {/* Vignette — dark edges, depth */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 110% 110% at 50% 50%, transparent 35%, rgba(2,6,16,0.75) 100%)
        `,
      }} />

      {/* ── Dark blue overlay — readability + integration ─────── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg, rgba(5,15,35,0.7) 0%, rgba(5,15,35,0.5) 40%, rgba(5,15,35,0.15) 70%)',
      }} />

      {/* ── Person cutout — sharp, anchored bottom-left ─────── */}
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

      {/* ── Content grid ─────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 3,
        maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
        height: 'calc(100vh - 72px)',
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
      }}>

        {/* Left — empty, person sits behind */}
        <div />

        {/* Right — text content */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingLeft: '32px', maxWidth: '520px',
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.6rem)', fontWeight: 900,
            color: '#fff', lineHeight: 1.05, marginBottom: '12px',
          }}>
            Дорит Гитерман
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 2rem)', fontWeight: 700,
            color: '#6ea8de', lineHeight: 1.25, marginBottom: '16px',
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
            lineHeight: 1.75, marginBottom: '24px',
          }}>
            Уголовное право требует глубокого опыта и понимания системы.<br />
            25 лет практики и прецедентных дел — в моменты, когда нет места ошибкам.
          </p>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(110,168,222,0.12)',
                border: '1px solid rgba(110,168,222,0.3)',
                borderRadius: '12px', padding: '20px', textAlign: 'center',
              }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#fff', lineHeight: 1.35 }}>{f.line1}</div>
                <div style={{ fontSize: '0.74rem', color: '#6ea8de', marginTop: '4px', lineHeight: 1.3 }}>{f.line2}</div>
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
              <form onSubmit={e => { e.preventDefault(); setSent(true) }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <input className="form-input" type="text" placeholder="Полное имя *"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  required style={{ flex: '1 1 140px' }} />
                <input className="form-input" type="tel" placeholder="Телефон *"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  required style={{ flex: '1 1 120px' }} />
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
            padding-top: 32px; padding-bottom: 48px;
          }
          section > div[style*="grid-template-columns"] > div:first-child { display: none; }
          section > div[style*="grid-template-columns"] > div:last-child {
            padding-left: 0 !important; max-width: 100% !important;
          }
          section > img[src*="photo-dorit"] { display: none; }
        }
      `}</style>
    </section>
  )
}
