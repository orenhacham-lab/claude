const SERVICES = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Охранные ордера и ограничительные меры',
    desc: 'Правовое сопровождение при получении охранных ордеров и ограничительных мер, нарушении ордеров, в обычных и срочных делах — с акцентом на защиту ваших прав.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'Аресты по делам о насилии',
    desc: 'Представление и правовое сопровождение на стадии допроса и в период заключения по делам о насилии. Защита прав подозреваемого и действия по минимизации ущерба.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Насилие в семье',
    desc: 'Правовое сопровождение после обращений в полицию по делам о насилии в семье: глубокий правовой анализ, учёт мнений всех сторон, защита интересов клиента.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Защита родителей и несовершеннолетних',
    desc: 'Сопровождение в делах, затрагивающих детей и родителей: правовая защита с полным пониманием систем правосудия и социального обеспечения, забота о благополучии всех.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3"/>
      </svg>
    ),
    title: 'Насилие между супругами',
    desc: 'Ведение уголовного дела в обычных и экстренных ситуациях: с учётом доказательной базы, возможностей урегулирования, защита и сохранение интересов клиента.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Угрозы и запугивание в семье',
    desc: 'Управление переговорами, содействие в урегулировании — работа с уголовными обвинениями с целью защиты от наказания и сохранения чистого будущего клиента.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--light-bg)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title on-light">
          <div className="title-deco">
            <div className="title-deco-line" />
            <span className="title-deco-arrow">→</span>
          </div>
          <h2>Области практики</h2>
          <div className="title-deco">
            <span className="title-deco-arrow">←</span>
            <div className="title-deco-line" />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px 28px',
        }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ position: 'relative', marginTop: '36px' }}>
              {/* Icon circle */}
              <div style={{
                width: '68px', height: '68px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #6ea8de, #89bde8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'absolute', top: '-34px', left: '50%', transform: 'translateX(-50%)',
                zIndex: 2, boxShadow: '0 4px 16px rgba(110,168,222,0.4)',
              }}>
                {s.icon}
              </div>
              {/* Card */}
              <div style={{
                background: 'var(--dark)',
                borderRadius: '14px',
                padding: '48px 22px 28px',
                textAlign: 'center',
                height: '100%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '12px', lineHeight: 1.4 }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services .container > div { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #services .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
