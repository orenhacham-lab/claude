import { useState } from 'react'
import { submitLead } from '../lib/supabase'

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

const FEATURES_RU = [
  { icon: <ClockIcon />, line1: 'Доступность 24/7', line2: 'в экстренных ситуациях' },
  { icon: <GlobeIcon />, line1: 'Консультации на', line2: 'иврите, рус., англ.' },
  { icon: <ScalesIcon />, line1: '25 лет опыта', line2: 'в уголовном праве' },
]

const FEATURES_HE = [
  { icon: <ClockIcon />, line1: 'זמינות 24/7', line2: 'במצבי חירום' },
  { icon: <GlobeIcon />, line1: 'ייעוץ ב', line2: 'עברית, רוסית, אנגלית' },
  { icon: <ScalesIcon />, line1: '25 שנות ניסיון', line2: 'בדיני עונשין' },
]

export default function Hero({ lang = 'ru' }) {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const he = lang === 'he'
  const FEATURES = he ? FEATURES_HE : FEATURES_RU

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)
    const { error } = await submitLead({ full_name: form.name, phone: form.phone, form_source: 'hero' })
    setSubmitting(false)
    if (error) {
      setSubmitError(he ? 'שגיאה בשליחה. נסה שוב מאוחר יותר.' : 'Ошибка отправки. Попробуйте позже.')
      return
    }
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'form_submit_success', full_name: form.name, phone: form.phone, form_source: 'hero' })
    setSent(true)
  }

  return (
    <section id="hero" className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: '72px',
      overflow: 'hidden',
      backgroundColor: '#0b1729',
    }}>

      {/* Content grid — background is continuous behind both columns */}
      <div id="hero-grid" style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
        height: 'calc(100vh - 72px)',
        display: 'grid',
        gridTemplateColumns: he ? '58% 42%' : '42% 58%',
      }}>

        <div style={he ? { order: 2 } : {}} />

        {/* Text content */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingLeft: he ? '0' : '40px',
          paddingRight: he ? '40px' : '0',
          maxWidth: '560px',
          order: he ? 1 : undefined,
          textAlign: he ? 'right' : undefined,
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.6rem)', fontWeight: 900,
            color: '#fff', lineHeight: 1.05, marginBottom: '12px',
          }}>
            {he ? 'דורית גיטרמן' : 'Дорит Гитерман'}
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 2rem)', fontWeight: 700,
            color: '#6ea8de', lineHeight: 1.25, marginBottom: '16px',
          }}>
            {he ? (
              <>עורכת דין לדיני עונשין<br />ואלימות במשפחה</>
            ) : (
              <>Адвокат по уголовным делам<br />и делам о насилии в семье</>
            )}
          </h2>

          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, #6ea8de, rgba(110,168,222,0.15) 70%, transparent)',
            marginBottom: '16px',
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)',
            lineHeight: 1.75, marginBottom: '24px',
          }}>
            {he ? (
              <>הדין הפלילי דורש ניסיון עמוק והבנת המערכת.<br />25 שנות פרקטיקה ותקדימים — ברגעים שאין בהם מקום לטעויות.</>
            ) : (
              <>Уголовное право требует глубокого опыта и понимания системы.<br />25 лет практики и прецедентных дел — в моменты, когда нет места ошибкам.</>
            )}
          </p>

          {/* Feature cards */}
          <div className="hero-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(110,168,222,0.13)',
                border: '1px solid rgba(110,168,222,0.32)',
                borderRadius: '12px', padding: '20px', textAlign: 'center',
                backdropFilter: 'blur(4px)',
              }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#fff', lineHeight: 1.35 }}>{f.line1}</div>
                <div style={{ fontSize: '0.74rem', color: '#6ea8de', marginTop: '4px', lineHeight: 1.3 }}>{f.line2}</div>
              </div>
            ))}
          </div>

          {/* Lead form */}
          {sent ? (
            <div style={{ color: '#6ea8de', fontWeight: 600 }}>
              {he ? '✓ תודה! נחזור אליך בהקדם.' : '✓ Спасибо! Мы свяжемся с вами в ближайшее время.'}
            </div>
          ) : (
            <>
              <p style={{ color: 'rgba(255,255,255,0.62)', marginBottom: '12px', fontSize: '0.88rem' }}>
                {he ? (
                  <>רוצה ייעוץ ראשוני חינם?{' '}<span style={{ color: '#6ea8de', fontWeight: 500 }}>השאר פרטים, נחזור אליך</span></>
                ) : (
                  <>Хотите бесплатную консультацию?{' '}<span style={{ color: '#6ea8de', fontWeight: 500 }}>Оставьте данные, мы перезвоним</span></>
                )}
              </p>
              <form className="hero-form" onSubmit={handleSubmit}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <input className="form-input" type="text" placeholder={he ? 'שם מלא *' : 'Полное имя *'}
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  required style={{ flex: '1 1 140px' }} />
                <input className="form-input" type="tel" placeholder={he ? 'טלפון *' : 'Телефон *'}
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  required style={{ flex: '1 1 120px' }} />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }} disabled={submitting}>
                  {submitting ? '...' : (he ? 'שליחה' : 'Отправить')}
                </button>
              </form>
              {submitError && (
                <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '8px' }}>{submitError}</p>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        .hero-section {
          background-image:
            linear-gradient(to bottom, rgba(255,255,255,0.32), rgba(255,255,255,0) 35%),
            linear-gradient(to right, rgba(5,15,35,0.05) 0%, rgba(5,15,35,0.18) 28%, rgba(5,15,35,0.58) 52%, rgba(5,15,35,0.90) 74%, rgba(5,15,35,0.97) 100%),
            url('/photo-dorit-contact.png');
          background-size: cover;
          background-position: left 48% top 72px;
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .hero-section {
            background-position: 12% center;
            background-image:
              linear-gradient(rgba(5,15,35,0.68), rgba(5,15,35,0.68)),
              url('/photo-dorit-contact.png');
          }
          #hero-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
            padding-top: 32px !important;
            padding-bottom: 52px !important;
          }
          #hero-grid > div:first-child {
            display: none !important;
          }
          #hero-grid > div:last-child {
            padding-left: 0 !important;
            max-width: 100% !important;
          }
          .hero-cards {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .hero-form {
            flex-direction: column !important;
          }
          .hero-form input {
            flex: unset !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-form button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
