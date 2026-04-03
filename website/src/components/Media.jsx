import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════
// הוסף כאן את לינקי YouTube — מלא את ה-url בכל פריט
// Add YouTube URLs here — paste full YouTube links as `url`
// ═══════════════════════════════════════════════════════════════
const VIDEOS = [
  {
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_1',
    title: 'За кулисами уголовного мира — политика и уголовное право',
  },
  {
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_2',
    title: 'Права подозреваемого на допросе — что важно знать',
  },
  {
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_3',
    title: 'Охранный ордер — как получить и как защититься',
  },
  {
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_4',
    title: 'Домашнее насилие: правовые аспекты и защита',
  },
  {
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_5',
    title: 'Первое бизнес-радио — интервью с адвокатом Дорит Гитерман',
  },
  {
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER_6',
    title: 'Руководство для потерпевшего — как предотвратить столкновения с полицией',
  },
]

// Extract YouTube video ID from any YouTube URL format
function getVideoId(url) {
  if (!url) return null
  const m = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/)
  return m ? m[1] : null
}

function getThumb(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

// Build pages of 3 videos each
function buildPages(videos) {
  const pages = []
  for (let i = 0; i < videos.length; i += 3) {
    pages.push(videos.slice(i, i + 3))
  }
  return pages
}

// ── Play button ───────────────────────────────────────────────
function PlayBtn() {
  return (
    <div style={{
      width: '58px', height: '58px', borderRadius: '50%',
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(6px)',
      border: '2px solid rgba(255,255,255,0.35)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'background 0.2s, transform 0.2s',
      flexShrink: 0,
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <polygon points="6 3 20 12 6 21 6 3"/>
      </svg>
    </div>
  )
}

// ── Video modal ───────────────────────────────────────────────
function VideoModal({ videoId, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '960px', position: 'relative' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-44px', right: '0',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.7)', fontSize: '1.8rem', lineHeight: 1,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          aria-label="Закрыть"
        >
          ✕
        </button>

        {/* Video title */}
        {title && (
          <p style={{
            color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem',
            marginBottom: '12px', textAlign: 'center',
          }}>
            {title}
          </p>
        )}

        {/* iframe */}
        <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

// ── Video card ────────────────────────────────────────────────
function VideoCard({ video, onClick }) {
  const [hovered, setHovered] = useState(false)
  const videoId = getVideoId(video.url)
  const isPlaceholder = !videoId || video.url.includes('PLACEHOLDER')

  return (
    <div
      onClick={!isPlaceholder ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '14px', overflow: 'hidden',
        position: 'relative', cursor: isPlaceholder ? 'default' : 'pointer',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.3)',
        aspectRatio: '16/10',
        background: '#0f2040',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hovered && !isPlaceholder ? 'translateY(-3px)' : 'none',
      }}
    >
      {/* Thumbnail */}
      {videoId && !isPlaceholder ? (
        <img
          src={getThumb(videoId)}
          alt={video.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      ) : (
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #0f2040, #152a4a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(110,168,222,0.3)" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="15" rx="2"/>
            <polyline points="17 2 12 7 7 2"/>
          </svg>
        </div>
      )}

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered && !isPlaceholder
          ? 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 55%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.08) 55%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 16px',
        transition: 'background 0.2s',
      }}>
        <div style={{ transform: hovered && !isPlaceholder ? 'scale(1.12)' : 'scale(1)', transition: 'transform 0.2s' }}>
          <PlayBtn />
        </div>
        <p style={{
          color: '#fff', fontSize: '0.84rem', fontWeight: 500,
          textAlign: 'center', lineHeight: 1.4, margin: 0,
        }}>
          {video.title}
        </p>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function Media() {
  const [page, setPage] = useState(0)
  const [modal, setModal] = useState(null) // { videoId, title }

  const PAGES = buildPages(VIDEOS)

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
          {PAGES[page]?.map((video, i) => (
            <VideoCard
              key={i}
              video={video}
              onClick={() => {
                const id = getVideoId(video.url)
                if (id) setModal({ videoId: id, title: video.title })
              }}
            />
          ))}
        </div>

        {PAGES.length > 1 && (
          <div className="pagination-dots">
            {PAGES.map((_, i) => (
              <button
                key={i}
                className={`dot${i === page ? ' active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Страница ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {modal && (
        <VideoModal
          videoId={modal.videoId}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}

      <style>{`
        @media (max-width: 820px) {
          #media .container > div:first-of-type { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          #media .container > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
