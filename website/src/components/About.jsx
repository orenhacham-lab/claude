function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6ea8de" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2l8 8-2 2-1.5-1.5-7 7 .5 3.5-2 2-4-4-4.5 4.5-1.5-1.5 4.5-4.5-4-4 2-2 3.5.5 7-7L14 2z"/>
    </svg>
  )
}

const ACHIEVEMENTS = [
  'Работа в прокуратуре Зиглман под руководством адвоката Эли Зоар Царство небесное.',
  'Выступления в районном суде перед судьёй Д-р Ади Азаром Царство небесное, сопровождавшим её карьеру до сегодняшнего дня.',
  'Профессиональное взаимодействие с ведущими адвокатами Тель-Авива и Нацерета, совместная работа над сложными уголовными делами.',
  'Представление уголовных дел и клиентов, которые сегодня сами преподают в правовой академии.',
  'Клиенты с резонансными делами выбирают Дорит — защита от государственных обвинений и работа с секретными материалами.',
  'Участие в подготовке дела Эхуда Олмерта совместно с адвокатом Эли Зоар Царство небесное и адвокатом Рами Касег.',
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <div className="container">

        {/* Full-width section heading — same as Hebrew design */}
        <div style={{ marginBottom: '12px' }}>
          <h2 style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.2,
          }}>
            Об адвокате{' '}
            <span style={{ color: '#6ea8de' }}>Дорит Гитерман</span>
          </h2>
        </div>
        <div style={{
          width: '100%', height: '2px',
          background: 'linear-gradient(to right, #6ea8de 0%, rgba(110,168,222,0.3) 50%, transparent 100%)',
          marginBottom: '48px',
        }} />

        {/* Two-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'start' }}>

          {/* Left: Bio + CTA */}
          <div className="about-bio-col">
            <div className="about-bio-text">
            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.82, marginBottom: '18px', fontSize: '0.97rem' }}>
              Адвокат Дорит Гитерман — опытный уголовный адвокат с 25 годами практики в судах первой инстанции,
              Окружном суде и Верховном суде Израиля. Родилась в Беэр-Шеве, переехала в Тель-Авив в 20 лет и с тех пор
              занимается уголовным правом на высшем уровне.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.82, marginBottom: '18px', fontSize: '0.97rem' }}>
              На протяжении карьеры она сочетает профессиональный опыт и правовую интуицию, развивает острое
              мышление и чёткое юридическое суждение — включая дела с доказательствами, которые кажутся
              несовместимыми с победой.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.82, marginBottom: '36px', fontSize: '0.97rem' }}>
              Для Дорит уголовное право — это не просто профессия. Это миссия: стать лучшим уголовным адвокатом,
              которым она способна быть.
            </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline about-cta-btn"
              style={{ fontSize: '0.95rem', padding: '13px 30px' }}
            >
              ← Бесплатная консультация
            </a>
          </div>

          {/* Right: Achievement boxes 2×3 */}
          <div className="about-cards-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} style={{
                background: 'rgba(12,24,50,0.6)',
                border: '1px solid rgba(110,168,222,0.18)',
                borderRadius: '12px',
                padding: '16px 14px 16px 14px',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: '11px', right: '11px' }}>
                  <PinIcon />
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.82rem', lineHeight: 1.7,
                  paddingRight: '18px',
                }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about .container > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #about .container > div:last-child > div:last-child { grid-template-columns: 1fr 1fr !important; }
          .about-bio-col { display: contents; }
          .about-cards-col { order: 1; }
          .about-cta-btn { order: 2; margin-top: 0 !important; }
        }
        @media (max-width: 600px) {
          .about-cta-btn { display: inline-flex !important; }
        }
        @media (max-width: 480px) {
          #about .container > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
