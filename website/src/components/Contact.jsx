import { useState } from 'react'
import { submitLead } from '../lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)
    const { error } = await submitLead({ full_name: form.name, phone: form.phone, form_source: 'contact' })
    setSubmitting(false)
    if (error) { setSubmitError('Ошибка отправки. Попробуйте позже.'); return }
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'form_submit_success', full_name: form.name, phone: form.phone, form_source: 'contact' })
    setSent(true)
  }

  return (
    <section id="contact" style={{
      position: 'relative', overflow: 'hidden', minHeight: '660px',
      backgroundImage: `
        linear-gradient(to right, rgba(5,14,34,0.25) 0%, rgba(5,14,34,0.68) 48%, rgba(5,14,34,0.95) 100%),
        url('/photo-dorit.png'),
        url('/bg-library.svg')
      `,
      backgroundSize: 'cover, auto 100%, cover',
      backgroundPosition: 'center, left bottom, center',
      backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
      backgroundColor: '#050e22',
    }}>

      {/* Content grid */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
        display: 'grid',
        gridTemplateColumns: '44% 56%',
        minHeight: '660px',
      }}>

        <div />

        {/* Right — form content */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '72px 0 72px 40px',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700,
            color: '#fff', lineHeight: 1.3, marginBottom: '14px',
          }}>
            Свяжитесь с нами для{' '}
            <span style={{ color: '#6ea8de' }}>первой бесплатной</span>{' '}
            консультации
          </h2>

          <div style={{
            width: '72px', height: '2px',
            background: 'linear-gradient(to right, #6ea8de, transparent)',
            marginBottom: '18px',
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1rem', lineHeight: 1.65, marginBottom: '28px',
          }}>
            Оставьте данные и мы свяжемся с вами в ближайшее время
          </p>

          {sent ? (
            <div style={{
              padding: '22px 24px',
              background: 'rgba(110,168,222,0.15)',
              borderRadius: '12px',
              border: '1px solid rgba(110,168,222,0.3)',
              color: '#6ea8de', fontWeight: 600, fontSize: '1.05rem',
            }}>
              ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '460px' }}
            >
              <input className="form-input-dark" type="text" placeholder="Полное имя *"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              <input className="form-input-dark" type="tel" placeholder="Телефон *"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
              <button type="submit" className="btn-submit" disabled={submitting}>
                {submitting ? '...' : 'Отправить'}
              </button>
              {submitError && (
                <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '4px' }}>{submitError}</p>
              )}
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div { grid-template-columns: 1fr !important; min-height: auto !important; }
          #contact > div > div:first-child { display: none; }
          #contact > div > div:last-child { padding: 60px 0 !important; }
          #contact::before {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(5, 14, 34, 0.60);
            z-index: 0;
            pointer-events: none;
          }
        }
      `}</style>
    </section>
  )
}
