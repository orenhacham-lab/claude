import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie_consent'))
  const location = useLocation()
  const he = location.pathname.startsWith('/he')

  if (!visible) return null

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#0c1829',
      borderTop: '1px solid rgba(110,168,222,0.2)',
      padding: '16px 28px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '14px',
    }}>
      <p className="cookie-text" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.5, flex: '1 1 300px', margin: 0 }}>
        {he ? (
          <>אנו משתמשים בעוגיות. המשך השימוש באתר מהווה הסכמה לשימוש בהן בהתאם ל<Link to="/he/privacy" style={{ color: '#6ea8de', textDecoration: 'underline' }}>מדיניות הפרטיות</Link>.</>
        ) : (
          <>Мы используем файлы cookie. Продолжая пользоваться сайтом, вы соглашаетесь с их использованием в соответствии с{' '}<Link to="/privacy" style={{ color: '#6ea8de', textDecoration: 'underline' }}>Политикой конфиденциальности</Link>.</>
        )}
      </p>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            padding: '9px 24px', background: '#6ea8de', color: '#fff',
            borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          {he ? 'אישור' : 'Принять'}
        </button>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .cookie-text { font-size: 13px !important; line-height: 1.4 !important; }
        }
      `}</style>
    </div>
  )
}
