import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy({ lang = 'ru' }) {
  const he = lang === 'he'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = he ? 'rtl' : 'ltr'
  }, [lang, he])

  return (
    <>
      <Navbar lang={lang} />
      <main style={{ background: 'var(--dark)', paddingTop: '72px', minHeight: '100vh' }}>
        <div className="container" style={{ padding: '64px 28px 80px' }}>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>
            {he ? 'מדיניות פרטיות' : 'Политика конфиденциальности'}
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontSize: '0.97rem', maxWidth: '800px' }}>
            {he ? (
              <>
                <p style={{ marginBottom: '24px' }}>
                  מדיניות פרטיות זו מתארת כיצד מעובדים הנתונים האישיים של משתמשי האתר.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>אילו נתונים אנו אוספים:</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                  <li>שם</li>
                  <li>מספר טלפון</li>
                  <li>כתובת דוא"ל (אם סופקה)</li>
                </ul>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>מטרת איסוף הנתונים:</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                  <li>יצירת קשר עם המשתמש</li>
                  <li>מתן ייעוץ משפטי</li>
                </ul>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>שימוש בכלי ניתוח ופרסום:</h2>
                <p style={{ marginBottom: '24px' }}>
                  האתר עשוי להשתמש בכלי ניתוח ופרסום כגון Google Analytics ו-Google Ads לניתוח התנהגות המשתמשים ושיפור איכות השירותים.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>אחסון והגנה על נתונים:</h2>
                <p style={{ marginBottom: '24px' }}>
                  אנו נוקטים אמצעים סבירים להגנה על הנתונים האישיים של המשתמשים.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>העברת נתונים לצדדים שלישיים:</h2>
                <p style={{ marginBottom: '24px' }}>
                  איננו מעבירים נתונים אישיים לצדדים שלישיים ללא הסכמת המשתמש, למעט במקרים הקבועים בחוק.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>זכויות המשתמש:</h2>
                <p style={{ marginBottom: '24px' }}>
                  למשתמש הזכות לבקש מחיקה או שינוי של הנתונים שלו.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>יצירת קשר:</h2>
                <p>
                  דוא"ל: <a href="mailto:doritgt@gmail.com" style={{ color: '#6ea8de' }}>doritgt@gmail.com</a><br />
                  טלפון: <a href="tel:054-2002707" style={{ color: '#6ea8de' }}>054-2002707</a>
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '24px' }}>
                  Настоящая политика конфиденциальности описывает, как обрабатываются персональные данные пользователей сайта.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Какие данные мы собираем:</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                  <li>Имя</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты (если предоставлен)</li>
                </ul>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Цель сбора данных:</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                  <li>Связь с пользователем</li>
                  <li>Предоставление юридической консультации</li>
                </ul>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Использование аналитики и рекламы:</h2>
                <p style={{ marginBottom: '24px' }}>
                  На сайте могут использоваться инструменты аналитики и рекламы, такие как Google Analytics и Google Ads, для анализа поведения пользователей и улучшения качества услуг.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Хранение и защита данных:</h2>
                <p style={{ marginBottom: '24px' }}>
                  Мы принимаем разумные меры для защиты персональных данных пользователей.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Передача данных третьим лицам:</h2>
                <p style={{ marginBottom: '24px' }}>
                  Мы не передаем персональные данные третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законом.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Права пользователя:</h2>
                <p style={{ marginBottom: '24px' }}>
                  Пользователь имеет право запросить удаление или изменение своих данных.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>Контакты:</h2>
                <p>
                  Email: <a href="mailto:doritgt@gmail.com" style={{ color: '#6ea8de' }}>doritgt@gmail.com</a><br />
                  Телефон: <a href="tel:054-2002707" style={{ color: '#6ea8de' }}>054-2002707</a>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
