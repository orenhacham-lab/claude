export default function CTABanner() {
  return (
    <section style={{ background: 'var(--light-bg)', padding: '60px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderRadius: '24px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          minHeight: '380px',
        }}>
          {/* Left: Dark text */}
          <div style={{
            background: 'var(--dark)',
            padding: '52px 48px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '20px' }}>
              Когда уголовный процесс сложен, <br />вам нужен адвокат, который знает{' '}
              <span style={{ color: '#6ea8de' }}>систему изнутри.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.97rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Многолетнее выступление в судах.<br />
              Ответственное, точное и бескомпромиссное представление.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline"
              style={{ alignSelf: 'flex-start' }}
            >
              ← Бесплатная консультация
            </a>
          </div>

          {/* Right: Photo */}
          <div style={{
            background: 'linear-gradient(135deg, #1a2f50, #0c1829)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            overflow: 'hidden', position: 'relative',
          }}>
            <img
              src="/photo-dorit-cta.png"
              alt="Дорит Гитерман"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <div style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              position: 'absolute', inset: 0, color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem', flexDirection: 'column', gap: '8px',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(110,168,222,0.3)" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              Фото
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          section > .container > div { grid-template-columns: 1fr !important; }
          section > .container > div > div:last-child { min-height: 220px; }
        }
      `}</style>
    </section>
  )
}
