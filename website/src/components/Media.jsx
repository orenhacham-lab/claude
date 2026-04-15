import { useState, useEffect } from 'react'

const VIDEOS = [
  { type: 'tiktok',  url: 'https://www.tiktok.com/@dorit_gitterman/video/7405253878549187847', title: 'Советы адвоката по уголовным делам' },
  { type: 'tiktok',  url: 'https://www.tiktok.com/@dorit_gitterman/video/7481233802313026823', title: 'Права при задержании: что нужно знать' },
  { type: 'tiktok',  url: 'https://www.tiktok.com/@dorit_gitterman/video/7406197391155662098', title: 'Юридическая защита: ваши права и возможности', thumbPosition: 'center top' },
]

function getYtThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

function VideoModal({ videoId, title, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.9)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
    }}>
      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '960px', position: 'relative' }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '-44px', right: 0,
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.7)', fontSize: '1.8rem', lineHeight: 1,
        }}>✕</button>
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

function VideoCard({ video, onYouTubeClick }) {
  const [hovered, setHovered] = useState(false)
  const [tikThumb, setTikThumb] = useState(null)
  const isYT = video.type === 'youtube'

  useEffect(() => {
    if (video.type === 'tiktok') {
      fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(video.url)}`)
        .then(r => r.json())
        .then(d => { if (d.thumbnail_url) setTikThumb(d.thumbnail_url) })
        .catch(() => {})
    }
  }, [video])

  return (
    <div
      onClick={() => isYT ? onYouTubeClick() : window.open(video.url, '_blank', 'noopener,noreferrer')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '16/9',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#0f2040',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.5)' : '0 2px 8px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {/* Thumbnail */}
      {isYT ? (
        <img
          src={getYtThumb(video.id)}
          alt={video.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : tikThumb ? (
        <img
          src={tikThumb}
          alt={video.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: video.thumbPosition || 'center center' }}
        />
      ) : (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #0c1829 0%, #1a2f50 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" fill="rgba(255,255,255,0.3)"/>
          </svg>
        </div>
      )}

      {/* Hover overlay — ONLY on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.2)',
        }} />
      )}

      {/* Play button — white circle, dark triangle, centered exactly */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.2s',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#0c1829">
            <polygon points="7 4 20 12 7 20 7 4"/>
          </svg>
        </div>
      </div>

      {/* Bottom strip — semi-transparent black, ~48px, text left-aligned */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '48px',
        background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center',
        padding: '0 14px',
      }}>
        <p style={{
          color: '#fff',
          fontSize: '0.82rem',
          fontWeight: 500,
          margin: 0,
          lineHeight: 1,
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

const PER_PAGE = 3

export default function Media() {
  const [page, setPage] = useState(0)
  const [modal, setModal] = useState(null)

  const pages = []
  for (let i = 0; i < VIDEOS.length; i += PER_PAGE) pages.push(VIDEOS.slice(i, i + PER_PAGE))
  const current = pages[page] ?? []

  return (
    <section id="media" style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <div className="container">

        {/* Title */}
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

        {/* Cards grid — exactly 3 per row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: current.length === PER_PAGE ? 'repeat(3, 1fr)' : `repeat(${current.length}, 1fr)`,
          gap: '20px',
          maxWidth: current.length < PER_PAGE ? `${(current.length / PER_PAGE) * 100}%` : '100%',
          margin: '0 auto',
        }}>
          {current.map((video, i) => (
            <VideoCard
              key={`${page}-${i}`}
              video={video}
              onYouTubeClick={() => setModal({ videoId: video.id, title: video.title })}
            />
          ))}
        </div>

        {/* Pagination */}
        {pages.length > 1 && (
          <div className="pagination-dots" style={{ marginTop: '28px' }}>
            {pages.map((_, i) => (
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
          #media .container > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; max-width:100% !important; }
        }
        @media (max-width: 540px) {
          #media .container > div:nth-child(2) { grid-template-columns: 1fr !important; max-width:100% !important; }
        }
      `}</style>
    </section>
  )
}
