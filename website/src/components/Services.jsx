const SERVICE_ICONS = [
  <svg key="gavel" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2l8 8-2 2-8-8 2-2z"/>
    <path d="M2 22l10-10"/>
    <path d="M5 15l4 4"/>
    <path d="M15 5l4 4"/>
  </svg>,
  <svg key="handcuffs" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="12" r="3"/>
    <circle cx="17" cy="12" r="3"/>
    <path d="M10 12h4"/>
    <path d="M4 12H2"/>
    <path d="M20 12h2"/>
  </svg>,
  <svg key="arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>,
  <svg key="family" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="6" r="3"/>
    <path d="M3 20v-2a6 6 0 0112 0v2"/>
    <circle cx="18" cy="10" r="2"/>
    <path d="M14 20v-1a4 4 0 018 0v1"/>
  </svg>,
  <svg key="heart" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    <polyline points="12 8 10 13 14 13 12 18"/>
  </svg>,
  <svg key="group" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
    <path d="M9 14l2 2 4-4" strokeWidth="1.5"/>
  </svg>,
]

const SERVICES_RU = [
  {
    title: 'Охранные ордера и ограничительные меры',
    desc: 'Правовое сопровождение при получении охранных ордеров и ограничительных мер, нарушении ордеров, в обычных и срочных делах — с акцентом на защиту ваших прав.',
  },
  {
    title: 'Аресты по делам о насилии',
    desc: 'Представление и правовое сопровождение на стадии допроса и в период заключения по делам о насилии. Защита прав подозреваемого и действия по минимизации ущерба.',
  },
  {
    title: 'Домашнее насилие',
    desc: 'Правовое сопровождение после обращений в полицию по делам о насилии в семье: глубокий правовой анализ, учёт мнений всех сторон, защита интересов клиента.',
  },
  {
    title: 'Наркопреступления',
    desc: 'Профессиональная юридическая помощь по делам, связанным с наркотиками. Представление интересов на всех этапах процесса, защита прав клиента и выстраивание сильной линии защиты с учетом всех обстоятельств дела.',
  },
  {
    title: 'Насилие между супругами',
    desc: 'Ведение уголовного дела в обычных и экстренных ситуациях: с учётом доказательной базы, возможностей урегулирования, защита и сохранение интересов клиента.',
  },
  {
    title: 'Угрозы и запугивание',
    desc: 'Управление переговорами, содействие в урегулировании — работа с уголовными обвинениями с целью защиты от наказания и сохранения чистого будущего клиента.',
  },
]

const SERVICES_HE = [
  {
    title: 'צווי הגנה ואמצעים מגבילים',
    desc: 'ליווי משפטי בהוצאת צווי הגנה ואמצעים מגבילים, הפרת צווים, בתיקים רגילים ודחופים — תוך דגש על הגנת זכויותיכם.',
  },
  {
    title: 'מעצרים בעבירות אלימות',
    desc: 'ייצוג וליווי משפטי בשלב החקירה ובמהלך המעצר בתיקי אלימות. הגנה על זכויות החשוד וצעדים למזעור הנזק.',
  },
  {
    title: 'אלימות במשפחה',
    desc: 'ליווי משפטי לאחר פניות למשטרה בתיקי אלימות במשפחה: ניתוח משפטי מעמיק, התחשבות בעמדות כל הצדדים, הגנה על האינטרסים של הלקוח.',
  },
  {
    title: 'עבירות סמים',
    desc: 'סיוע משפטי מקצועי בתיקים הקשורים לסמים. ייצוג בכל שלבי ההליך, הגנה על זכויות הלקוח ובניית קו הגנה חזק בהתחשב בכל נסיבות התיק.',
  },
  {
    title: 'אלימות בין בני זוג',
    desc: 'ניהול תיק פלילי במצבים רגילים ודחופים: בהתחשב בבסיס הראיות, אפשרויות ההסדר, הגנה ושמירה על האינטרסים של הלקוח.',
  },
  {
    title: 'איומים והפחדה',
    desc: 'ניהול משא ומתן, סיוע בהסדרים — עבודה עם כתבי אישום פליליים במטרה להגן על הלקוח מעונש ולשמור על עתידו הנקי.',
  },
]

export default function Services({ lang = 'ru' }) {
  const he = lang === 'he'
  const SERVICES = (he ? SERVICES_HE : SERVICES_RU).map((s, i) => ({ ...s, icon: SERVICE_ICONS[i] }))

  return (
    <section id="services" style={{ background: 'var(--light-bg)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title on-light">
          <div className="title-deco">
            <div className="title-deco-line" />
            <span className="title-deco-arrow">→</span>
          </div>
          <h2>{he ? 'תחומי פעילות' : 'Области практики'}</h2>
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
