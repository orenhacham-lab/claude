function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ea8de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

const ACHIEVEMENTS = [
  'Работа в прокуратуре Зиглман под руководством адвоката Эли Зоар ז"ל.',
  'Выступления в районном суде перед судьёй Д-р Ади Азаром ז"ל, сопровождавшим её карьеру до сегодняшнего дня.',
  'Профессиональное взаимодействие с ведущими адвокатами, в т.ч. Тель-Авива и Нацерета, совместная работа над сложными уголовными делами.',
  'Представление уголовных дел и обладателей дел, которые сегодня преподают в правовой академии.',
  'Красные клиенты выбирают Дорит для представления — защита от государственных обвинений и изучение секретных материалов.',
  'Участие в подготовке дела Эхуда Олмерта совместно с адвокатом Эли Зоар ז"ל и адвокатом Рами Касег.',
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--dark)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', alignItems: 'start' }}>

          {/* Left: Bio */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
              Об адвокате<br />
              <span style={{ color: '#6ea8de' }}>Дорит Гитерман</span>
            </h2>
            <div style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, #6ea8de, transparent)', marginBottom: '24px' }} />

            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, marginBottom: '18px', fontSize: '0.97rem' }}>
              Адвокат Дорит Гитерман — опытный уголовный адвокат с 25 годами практики в судах первой инстанции,
              Окружном суде и Верховном суде. Родилась в Беэр-Шеве, переехала в Тель-Авив в 20 лет и с тех пор
              занимается уголовным правом на высшем уровне.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, marginBottom: '18px', fontSize: '0.97rem' }}>
              На протяжении карьеры она сочетает профессиональный опыт и правовую интуицию, развивает острое
              мышление и чёткое юридическое суждение — в том числе по делам с доказательствами, которые кажутся
              несовместимыми с победой.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, marginBottom: '32px', fontSize: '0.97rem' }}>
              Для Дорит уголовное право — это не просто профессия. Это миссия: быть лучшим уголовным адвокатом,
              которым она способна быть.
            </p>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline"
              style={{ fontSize: '0.95rem', padding: '12px 28px' }}
            >
              ← Бесплатная консультация
            </a>
          </div>

          {/* Right: Achievement boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} style={{
                background: 'rgba(15,32,64,0.5)',
                border: '1px solid rgba(110,168,222,0.2)',
                borderRadius: '12px',
                padding: '18px 16px',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <PinIcon />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.84rem', lineHeight: 1.7, paddingRight: '20px' }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about .container > div { grid-template-columns: 1fr !important; }
          #about .container > div > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          #about .container > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
