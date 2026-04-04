import { useState, useEffect } from 'react'

const VIDEOS = [
  {
    type: 'youtube',
    id: 'e3D4BwGsAi8',
    title: 'Уголовное право: стратегия защиты и опыт адвоката',
  },
  {
    type: 'tiktok',
    url: 'https://vt.tiktok.com/ZSPJsKAmh/',
    title: 'Права при задержании: что нужно знать',
  },
  {
    type: 'youtube',
    id: 'kbL5SORQa-U',
    title: 'Насилие в семье: юридическая защита и ваши права',
  },
  {
    type: 'tiktok',
    url: 'https://www.tiktok.com/@dorit_gitterman/video/7481169459005246727',
    title: 'Что делать при аресте: советы уголовного адвоката',
  },
]

function getYtThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

// ── Play button — solid white circle, dark triangle (matches Hebrew original)
function PlayBtn({ hovered }) {
  return (
    <div style={{
      width: '62px', height: '62px', borderRadius: '50%',
      background: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'transform 0.2s, opacity 0.2s',
      transform: hovered ? 'scale(1.1)' : 'scale(1)',
      opacity: hovered ? 1 : 0.92,
      flexShrink: 0,
      boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
    }}>
      {/* Triangle offset slightly right to look centered visually */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0c1829">
        <polygon points="7 4 20 12 7 20 7 4"/>
      </svg>
    </div>
  )
}

// ── Video modal (YouTube only)
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
            position: 'absolute', top: '-44px', right: '0',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.7)', fontSize: '1.8rem', lineHeight: 1,
          }}
        >
          ✕
        </button>
        {title && (
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '10px', textAlign: 'center' }}>
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

// ── Video card — matches Hebrew original structure exactly
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
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        aspectRatio: '16/9',
        background: '#0c1829',
        boxShadow: hovered
          ? '0 8px 28px rgba(0,0,0,0.55)'
          : '0 2px 12px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {/* Thumbnail */}
      {isYT ? (
        <img
          src={getYtThumb(video.id)}
          alt={video.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        /* TikTok — same dark bg as site, no creative gradients */
        <div style={{
          width: '100%', height: '100%',
          background: '#0f2040',
        }} />
      )}

      {/* Hover darkening overlay (not visible at rest) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0)',
        transition: 'background 0.2s',
      }} />

      {/* Play button — centered */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <PlayBtn hovered={hovered} />
      </div>

      {/* Bottom title bar — dark strip, matches Hebrew news lower-third */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.72)',
        padding: '8px 14px',
      }}>
        <p style={{
          color: '#fff',
          fontSize: '0.82rem',
          fontWeight: 500,
          margin: 0,
          lineHeight: 1.35,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {video.title}
        </p>
      </div>
    </div>
  )
}

const VIDEOS_PER_PAGE = 3

function buildPages(videos) {
  const pages = []
  for (let i = 0; i < videos.length; i += VIDEOS_PER_PAGE) {
    pages.push(videos.slice(i, i + VIDEOS_PER_PAGE))
  }
  return pages
}

export default function Media() {
  const [page, setPage] = useState(0)
  const [modal, setModal] = useState(null)

  const PAGES = buildPages(VIDEOS)
  const currentVideos = PAGES[page] ?? []

  const isPartialPage = currentVideos.length < VIDEOS_PER_PAGE

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
          gridTemplateColumns: isPartialPage
            ? `repeat(${currentVideos.length}, 1fr)`
            : 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: isPartialPage
            ? `${(currentVideos.length / 3) * 100}%`
            : '100%',
          margin: '0 auto',
        }}>
          {currentVideos.map((video, i) => (
            <VideoCard
              key={`${page}-${i}`}
              video={video}
              onYouTubeClick={() => setModal({ videoId: video.id, title: video.title })}
            />
          ))}
        </div>

        {PAGES.length > 1 && (
          <div className="pagination-dots" style={{ marginTop: '28px' }}>
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
          #media .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; max-width: 100% !important; }
        }
        @media (max-width: 540px) {
          #media .container > div:nth-child(2) { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
