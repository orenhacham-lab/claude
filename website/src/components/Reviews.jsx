import { useState } from 'react'

function GoogleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function Stars() {
  return <span style={{ color: '#FBBC05', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
}

const REVIEWS_PAGES = [
  [
    {
      text: 'Самый профессиональный адвокат, которого я когда-либо встречал. Она добилась наилучшего возможного результата. После получения вознаграждения — поразительный опыт.',
      name: 'Йона Кат',
      time: '9 месяцев назад',
      color: '#8b5cf6',
    },
    {
      text: 'Прежде всего, хочу поблагодарить адвоката за уважение, вежливость и доступность. Это явно не просто работа — потрясающая работа. Высочайший профессионализм. Спасибо за каждый час, за ответы на все вопросы.',
      name: 'Уриэль Тов',
      time: '7 месяцев назад',
      color: '#ef4444',
    },
    {
      text: 'Получил отличный сервис — приятный и профессиональный. Очень спокойно занималась моими делами, была чрезвычайно компетентна и внимательна. Рекомендую!',
      name: 'Надав В.',
      time: '1 месяц назад',
      color: '#22c55e',
    },
  ],
  [
    {
      text: 'Дорит — настоящий профессионал. Она вела моё дело с максимальной ответственностью и полной отдачей. Результат превзошёл все ожидания.',
      name: 'Александр М.',
      time: '3 месяца назад',
      color: '#3b82f6',
    },
    {
      text: 'Очень рекомендую! Объяснила всё чётко и понятно на русском языке. Чувствовалась настоящая поддержка на каждом этапе.',
      name: 'Марина Л.',
      time: '5 месяцев назад',
      color: '#f97316',
    },
    {
      text: 'Обратился в тяжёлой ситуации. Дорит немедленно отреагировала, разобралась в деле и добилась прекращения уголовного преследования.',
      name: 'Роман К.',
      time: '2 месяца назад',
      color: '#14b8a6',
    },
  ],
]

export default function Reviews() {
  const [page, setPage] = useState(0)

  return (
    <section id="reviews" style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title on-dark">
          <div className="title-deco">
            <div className="title-deco-line" />
            <span className="title-deco-arrow">→</span>
          </div>
          <h2>Отзывы</h2>
          <div className="title-deco">
            <span className="title-deco-arrow">←</span>
            <div className="title-deco-line" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {REVIEWS_PAGES[page].map((r, i) => (
            <div key={i} style={{
              background: 'rgba(10,20,45,0.85)',
              border: '1px solid rgba(110,168,222,0.2)',
              borderRadius: '16px',
              padding: '28px 24px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: '280px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <GoogleIcon />
                  <Stars />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7 }}>{r.text}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{r.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.time}</div>
                </div>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1rem', color: '#fff',
                }}>
                  {r.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {REVIEWS_PAGES.map((_, i) => (
            <button key={i} className={`dot${i === page ? ' active' : ''}`} onClick={() => setPage(i)} aria-label={`Страница ${i + 1}`} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #reviews .container > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #reviews .container > div { grid-template-columns: 1fr !important; }
          #reviews .container > div > div:nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  )
}
