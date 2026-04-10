import { useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie_consent'))

  if (!visible) return null

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
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
      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.5, flex: '1 1 300px', margin: 0 }}>
        Мы используем файлы cookie для улучшения работы сайта, анализа трафика и показа рекламы.
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
          Принять
        </button>
        <button
          onClick={decline}
          style={{
            padding: '9px 24px', background: 'transparent', color: 'rgba(255,255,255,0.6)',
            borderRadius: '50px', fontWeight: 500, fontSize: '0.9rem',
            border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          Отклонить
        </button>
      </div>
    </div>
  )
}
