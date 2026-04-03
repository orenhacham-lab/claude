import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Практика', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'В СМИ', href: '#media' },
  { label: 'Вопросы и ответы', href: '#faq' },
  { label: 'Контакт', href: '#contact' },
]

function ScalesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6ea8de" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"/>
      <path d="M3 10l9-7 9 7"/>
      <path d="M3 14c0 2 1.5 3 3 3s3-1 3-3L6 10z"/>
      <path d="M15 14c0 2 1.5 3 3 3s3-1 3-3L15 10z"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.07-.54a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,20,40,0.97)' : '#0a1525',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid rgba(110,168,222,0.12)',
      transition: 'background 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', gap: '16px' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <ScalesIcon />
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Дорит Гитерман</div>
            <div style={{ fontSize: '0.72rem', color: '#6ea8de', fontWeight: 400, lineHeight: 1.2 }}>Адвокат по уголовным делам</div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'nowrap' }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                style={{
                  color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', padding: '6px 10px',
                  borderRadius: '6px', transition: 'color .2s', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          <a href="tel:054-2002707" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
            <PhoneIcon />
            <span className="phone-text">054-2002707</span>
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }} className="btn-outline" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>
            Консультация
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#fff', display: 'none' }}
            className="hamburger"
            aria-label="Меню"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#0a1525', borderTop: '1px solid rgba(110,168,222,0.15)',
          padding: '16px 28px 24px',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              style={{
                display: 'block', padding: '12px 0',
                color: 'rgba(255,255,255,0.85)', fontSize: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:054-2002707" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6ea8de', marginTop: '16px', fontWeight: 600 }}>
            <PhoneIcon /> 054-2002707
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .phone-text { display: none; }
        }
        @media (max-width: 600px) {
          .btn-outline { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
