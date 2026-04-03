function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{
      background: '#070e1a',
      borderTop: '1px solid rgba(110,168,222,0.1)',
    }}>
      {/* Main footer bar */}
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 28px', flexWrap: 'wrap', gap: '16px',
      }}>
        {/* Social */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Facebook" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <FacebookIcon />
          </a>
        </div>

        {/* Contact info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a href="tel:054-2002707" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#6ea8de'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
          >
            054-2002707
          </a>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
          <a href="mailto:mail@gmail.com" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#6ea8de'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
          >
            mail@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
          © 2025 Дорит Гитерман — Адвокат
        </div>
      </div>
    </footer>
  )
}
