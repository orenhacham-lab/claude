import { useState } from 'react'

function PlayIcon() {
  return (
    <div style={{
      width: '56px', height: '56px', borderRadius: '50%',
      background: 'rgba(255,255,255,0.25)',
      backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', transition: 'background 0.2s, transform 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(110,168,222,0.5)'; e.currentTarget.style.transform = 'scale(1.1)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'scale(1)' }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    </div>
  )
}

const MEDIA_PAGES = [
  [
    {
      title: 'За кулисами уголовного мира — политика и уголовное право',
      thumb: '/media-1.jpg',
      bg: '#c2185b',
    },
    {
      title: 'Руководство для потерпевшего — как предотвратить столкновения с полицией?',
      thumb: '/media-2.jpg',
      bg: '#1565c0',
    },
    {
      title: 'Первое бизнес-радио — интервью с адвокатом Дорит Гитерман',
      thumb: '/media-3.jpg',
      bg: '#6a1b9a',
    },
  ],
  [
    {
      title: 'Права подозреваемого на допросе — что важно знать',
      thumb: '/media-4.jpg',
      bg: '#1b5e20',
    },
    {
      title: 'Домашнее насилие: правовые аспекты и защита',
      thumb: '/media-5.jpg',
      bg: '#e65100',
    },
    {
      title: 'Охранный ордер — как получить и как защититься',
      thumb: '/media-6.jpg',
      bg: '#0d47a1',
    },
  ],
]

export default function Media() {
  const [page, setPage] = useState(0)

  return (
    <section id="media" style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title on-dark">
          <div className="title-deco">
            <div className="title-deco-line" />
            <span className="title-deco-arrow">→</span>
          </div>
          <h2>В СМИ</h2>
          <div className="title-deco">
            <span className="title-deco-arrow">←</span>
            <div className="title-deco-line" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {MEDIA_PAGES[page].map((m, i) => (
            <div key={i} style={{
              borderRadius: '14px', overflow: 'hidden',
              position: 'relative', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              aspectRatio: '16/10',
              background: m.bg,
            }}>
              <img
                src={m.thumb}
                alt={m.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 16px',
              }}>
                <PlayIcon />
                <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500, textAlign: 'center', lineHeight: 1.4 }}>
                  {m.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {MEDIA_PAGES.map((_, i) => (
            <button key={i} className={`dot${i === page ? ' active' : ''}`} onClick={() => setPage(i)} aria-label={`Страница ${i + 1}`} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #media .container > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #media .container > div { grid-template-columns: 1fr !important; }
          #media .container > div > div:nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  )
}
