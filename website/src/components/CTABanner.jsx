export default function CTABanner({ lang = 'ru' }) {
  const he = lang === 'he'

  return (
    <section id="cta-banner" style={{ background: 'var(--light-bg)', padding: '60px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderRadius: '24px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          minHeight: '380px',
        }}>
          {/* Text panel */}
          <div style={{
            background: 'var(--dark)',
            padding: '52px 48px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            textAlign: he ? 'right' : undefined,
          }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '20px' }}>
              {he ? (
                'כשההליך הפלילי מורכז, צריך עורכת דין שמכירה את המערכת לעומק.'
              ) : (
                <>Когда уголовный процесс сложен, <br />вам нужен адвокат, который знает{' '}<span style={{ color: '#6ea8de' }}>систему изнутри.</span></>
              )}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.97rem', lineHeight: 1.7, marginBottom: '32px' }}>
              {he ? (
                <>עשרות שנים של הופעות בבתי משפט.<br />ייצוג אחראי, מדויק ובלתי מתפשר.</>
              ) : (
                <>Многолетнее выступление в судах.<br />Ответственное, точное и бескомпромиссное представление.</>
              )}
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline cta-btn"
              style={{ alignSelf: 'flex-start', ...(he ? { direction: 'ltr' } : {}) }}
            >
              {he ? 'ייעוץ ראשוני חינם ←' : 'Бесплатная консультация →'}
            </a>
          </div>

          {/* Right: Photo — transparent PNG on dark bg */}
          <div style={{
            background: 'linear-gradient(135deg, #1a2f50, #0c1829)',
            overflow: 'hidden', position: 'relative',
            padding: 0, margin: 0,
          }}>
            <img
              src="/photo-dorit-cta.png"
              alt={he ? 'דורית גיטרמן' : 'Дорит Гитерман'}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #cta-banner .container > div { grid-template-columns: 1fr !important; }
          #cta-banner .container > div > div:first-child { padding: 36px 28px !important; }
          #cta-banner .container > div > div:last-child { min-height: 220px; }
          #cta-banner .cta-btn { display: flex !important; align-self: stretch !important; text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
