import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--dark)', paddingTop: '72px', minHeight: '100vh' }}>
        <div className="container" style={{ padding: '64px 28px 80px' }}>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>
            Политика конфиденциальности
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontSize: '0.97rem', maxWidth: '800px' }}>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
