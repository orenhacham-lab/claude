import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" style={{
      background: 'linear-gradient(135deg, #0e1e35 0%, #0c1829 50%, #111f3a 100%)',
      padding: '80px 0 0',
      position: 'relative', overflow: 'hidden', minHeight: '600px',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr',
          gap: '60px', alignItems: 'center',
          minHeight: '500px',
        }}>

          {/* Left: office background image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
            <div style={{
              width: '100%', maxWidth: '400px',
              height: '480px',
              position: 'relative',
              borderRadius: '16px 16px 0 0',
              overflow: 'hidden',
            }}>
              <img
                src="/photo-dorit-contact.png"
                alt="Офис адвоката"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ paddingBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700,
              color: '#fff', lineHeight: 1.3, marginBottom: '12px',
            }}>
              Свяжитесь с нами для{' '}
              <span style={{ color: '#6ea8de' }}>первой бесплатной</span>{' '}
              консультации
            </h2>

            <div style={{
              width: '100%', height: '2px',
              background: 'linear-gradient(to right, #6ea8de, transparent)',
              marginBottom: '18px',
            }} />

            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px', fontSize: '1rem' }}>
              Оставьте данные и мы свяжемся с вами в ближайшее время
            </p>

            {sent ? (
              <div style={{
                padding: '24px', background: 'rgba(110,168,222,0.15)',
                borderRadius: '12px', border: '1px solid rgba(110,168,222,0.3)',
                color: '#6ea8de', fontWeight: 600, fontSize: '1.05rem',
              }}>
                ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                <button type="submit" className="btn-submit">Отправить</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          #contact .container > div > div:first-child { display: none; }
        }
      `}</style>
    </section>
  )
}
