import { useState } from 'react'

const FAQS = [
  {
    q: 'Когда нужно обращаться к уголовному адвокату?',
    a: 'В момент подозрения, при открытии дела или перед первым допросом — ранняя консультация может существенно повлиять на ход и исход дела.',
  },
  {
    q: 'Можно ли проконсультироваться ещё до допроса в полиции?',
    a: 'Да, и это очень рекомендуется. Подготовка перед допросом помогает защитить ваши права и избежать ошибок, которые могут усложнить ситуацию.',
  },
  {
    q: 'Ведёте ли вы дела о домашнем насилии?',
    a: 'Да. Мы специализируемся на делах о насилии в семье — как для потерпевших, так и для обвиняемых, в том числе по охранным ордерам, арестам и судебным разбирательствам.',
  },
  {
    q: 'Представляете ли вы на стадии ареста?',
    a: 'Да. Немедленное юридическое представление при аресте критически важно. Мы доступны 24/7 для экстренных случаев.',
  },
  {
    q: 'Каждое дело заканчивается судом?',
    a: 'Нет. Многие дела разрешаются путём переговоров, досудебных соглашений или прекращения уголовного преследования ещё до суда.',
  },
  {
    q: 'Ведёте ли вы все виды уголовных дел?',
    a: 'Мы специализируемся на уголовных делах с акцентом на насилие в семье, охранные ордера, аресты и смежные уголовные вопросы.',
  },
  {
    q: 'Можно ли вести дело конфиденциально?',
    a: 'Да. Профессиональная тайна и конфиденциальность — фундаментальные принципы нашей работы. Все консультации и материалы дела строго конфиденциальны.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ background: 'var(--light-bg)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title on-light">
          <div className="title-deco">
            <div className="title-deco-line" />
            <span className="title-deco-arrow">→</span>
          </div>
          <h2>Вопросы и ответы</h2>
          <div className="title-deco">
            <span className="title-deco-arrow">←</span>
            <div className="title-deco-line" />
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {FAQS.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(12,24,41,0.12)' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '22px 8px', background: 'transparent', border: 'none', cursor: 'pointer',
                  fontFamily: 'Roboto, sans-serif', textAlign: 'left',
                }}
              >
                <span style={{ color: 'var(--dark)', fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}>
                  {item.q}
                </span>
                <span style={{
                  color: open === i ? '#6ea8de' : 'rgba(12,24,41,0.4)',
                  fontSize: '1.4rem', lineHeight: 1, flexShrink: 0, marginLeft: '16px',
                  transition: 'transform 0.2s, color 0.2s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}>
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 8px 22px', color: 'rgba(12,24,41,0.72)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
