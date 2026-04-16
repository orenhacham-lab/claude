import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Accessibility({ lang = 'ru' }) {
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
            {he ? 'הצהרת נגישות' : 'Декларация доступности'}
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontSize: '0.97rem', maxWidth: '800px' }}>
            {he ? (
              <>
                <p style={{ marginBottom: '24px' }}>
                  אנו מייחסים חשיבות רבה להבטחת גישה שווה למידע ולשירותים עבור כל המשתמשים, כולל אנשים עם מוגבלויות.
                </p>

                <p style={{ marginBottom: '24px' }}>
                  האתר פותח תוך התחשבות בעקרונות הנגישות ושואף לעמוד בסטנדרטים המודרניים של נגישות אתרים.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>האמצעים המיושמים באתר:</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                  <li>מבנה עמודים מותאם</li>
                  <li>ניגודיות צבעים גבוהה</li>
                  <li>תמיכה בניווט מקלדת</li>
                  <li>שימוש בסימון סמנטי</li>
                  <li>טקסטים חלופיים לתמונות</li>
                </ul>

                <p style={{ marginBottom: '24px' }}>
                  למרות מאמצינו, ייתכן שחלק מרכיבי האתר אינם עומדים עדיין במלואם בדרישות הנגישות.
                </p>

                <p style={{ marginBottom: '24px' }}>
                  אם נתקלתם בבעיית נגישות או זקוקים לסיוע נוסף, אנא צרו איתנו קשר:
                </p>

                <p>
                  טלפון: <a href="tel:054-2002707" style={{ color: '#6ea8de' }}>054-2002707</a><br />
                  דוא"ל: <a href="mailto:doritgt@gmail.com" style={{ color: '#6ea8de' }}>doritgt@gmail.com</a>
                </p>

                <p style={{ marginTop: '24px' }}>
                  נשמח לקבל את הערותיכם ונשאף לטפל בבעיה בהקדם האפשרי.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '24px' }}>
                  Мы придаем большое значение обеспечению равного доступа к информации и услугам для всех пользователей, включая людей с ограниченными возможностями.
                </p>

                <p style={{ marginBottom: '24px' }}>
                  Сайт был разработан с учетом принципов доступности и стремится соответствовать современным стандартам веб-доступности.
                </p>

                <h2 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '12px' }}>На сайте реализованы следующие меры:</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
                  <li>Адаптивная структура страниц</li>
                  <li>Контрастные цветовые схемы</li>
                  <li>Поддержка навигации с клавиатуры</li>
                  <li>Использование семантической разметки</li>
                  <li>Альтернативные тексты для изображений</li>
                </ul>

                <p style={{ marginBottom: '24px' }}>
                  Несмотря на наши усилия, возможно, что некоторые элементы сайта еще не полностью соответствуют требованиям доступности.
                </p>

                <p style={{ marginBottom: '24px' }}>
                  Если вы столкнулись с проблемой доступности или нуждаетесь в дополнительной помощи, пожалуйста, свяжитесь с нами:
                </p>

                <p>
                  Телефон: <a href="tel:054-2002707" style={{ color: '#6ea8de' }}>054-2002707</a><br />
                  Email: <a href="mailto:doritgt@gmail.com" style={{ color: '#6ea8de' }}>doritgt@gmail.com</a>
                </p>

                <p style={{ marginTop: '24px' }}>
                  Мы будем рады получить ваши замечания и постараемся устранить проблему в кратчайшие сроки.
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
