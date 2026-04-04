import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════
// VIDEOS — עדכן כותרות לפי הצורך / Update titles as needed
// YouTube → modal embed | TikTok → opens in new tab
// ═══════════════════════════════════════════════════════════════
const VIDEOS = [
  {
    type: 'youtube',
    id: 'e3D4BwGsAi8',
    title: 'Уголовное право: опыт, тактика и защита',
  },
  {
    type: 'tiktok',
    url: 'https://vt.tiktok.com/ZSPJsKAmh/',
    title: 'Видео в TikTok — адвокат Дорит Гитерман',
  },
  {
    type: 'youtube',
    id: 'kbL5SORQa-U',
    title: 'Насилие в семье: как защитить свои права',
  },
  {
    type: 'tiktok',
    url: 'https://www.tiktok.com/@dorit_gitterman/video/7481169459005246727',
    id: '7481169459005246727',
    title: 'Советы адвоката | Что делать при аресте',
  },
]

function getYtThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

// ── TikTok icon ──────────────────────────────────────────────
function TikTokIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  )
}

// ── Play button ──────────────────────────────────────────────
function PlayBtn({ hovered }) {
  return (
    <div style={{
      width: '58px', height: '58px', borderRadius: '50%',
      background: hovered ? 'rgba(110,168,222,0.55)' : 'rgba(255,255,255,0.22)',
      backdropFilter: 'blur(6px)',
      border: '2px solid rgba(255,255,255,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'background 0.2s, transform 0.2s',
      transform: hovered ? 'scale(1.12)' : 'scale(1)',
      flexShrink: 0,
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <polygon points="6 3 20 12 6 21 6 3"/>
      </svg>
    </div>
  )
}

// ── Video modal (YouTube only) ───────────────────────────────
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
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '960px', position: 'relative' }}>
        <button
          onClick={onClose}
          aria-label="Закрыть"
          style={{
            position: 'absolute', top: '-48px', right: '0',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.65)', fontSize: '2rem', lineHeight: 1,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
        >
          ✕
        </button>
        {title && (
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', marginBottom: '10px', textAlign: 'center' }}>
            {title}
          </p>
        )}
        <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  )
}

// ── Video card ───────────────────────────────────────────────
function VideoCard({ video, onYouTubeClick }) {
  const [hovered, setHovered] = useState(false)
  const isYT = video.type === 'youtube'

  const handleClick = () => {
    if (isYT) {
      onYouTubeClick()
    } else {
      window.open(video.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '14px', overflow: 'hidden',
        position: 'relative', cursor: 'pointer',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.55)' : '0 4px 20px rgba(0,0,0,0.3)',
        aspectRatio: '16/10',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        background: '#0f2040',
      }}
    >
      {/* Thumbnail */}
      {isYT ? (
        <img
          src={getYtThumb(video.id)}
          alt={video.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => { e.target.style.opacity = '0' }}
        />
      ) : (
        /* TikTok placeholder — branded dark card */
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #010101 0%, #1a1a2e 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ opacity: 0.35 }}>
            <TikTokIcon size={52} />
          </div>
        </div>
      )}

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.18) 55%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.06) 55%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 16px',
        transition: 'background 0.2s',
      }}>
        {/* Top: play or TikTok badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <PlayBtn hovered={hovered} />
          {!isYT && (
            <span style={{
              background: 'rgba(0,0,0,0.55)', color: '#fff',
              fontSize: '0.68rem', padding: '2px 8px', borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(4px)',
            }}>
              TikTok · открыть →
            </span>
          )}
        </div>

        {/* Bottom: title */}
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

// ── Pagination ───────────────────────────────────────────────
const VIDEOS_PER_PAGE = 3

function buildPages(videos) {
  const pages = []
  for (let i = 0; i < videos.length; i += VIDEOS_PER_PAGE) {
    pages.push(videos.slice(i, i + VIDEOS_PER_PAGE))
  }
  return pages
}

// ── Main component ───────────────────────────────────────────
export default function Media() {
  const [page, setPage] = useState(0)
  const [modal, setModal] = useState(null)

  const PAGES = buildPages(VIDEOS)
  const currentVideos = PAGES[page] ?? []

  // For a partial last page: center the remaining videos
  const gridCols = currentVideos.length < VIDEOS_PER_PAGE
    ? `repeat(${currentVideos.length}, minmax(0, 320px))`
    : 'repeat(3, 1fr)'

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: '24px',
          justifyContent: currentVideos.length < VIDEOS_PER_PAGE ? 'center' : 'initial',
        }}>
          {currentVideos.map((video, i) => (
            <VideoCard
              key={i}
              video={video}
              onYouTubeClick={() => setModal({ videoId: video.id, title: video.title })}
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
          #media .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          #media .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
