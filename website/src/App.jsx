import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Services from './components/Services'
import About from './components/About'
import CTABanner from './components/CTABanner'
import Media from './components/Media'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Privacy from './pages/Privacy'
import Accessibility from './pages/Accessibility'

function Home({ lang = 'ru' }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <>
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <CTABanner lang={lang} />
        <Media lang={lang} />
        <FAQ lang={lang} />
        <Reviews lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home lang="ru" />} />
        <Route path="/he" element={<Home lang="he" />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/he/privacy" element={<Privacy lang="he" />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/he/accessibility" element={<Accessibility lang="he" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
