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

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CTABanner />
        <Media />
        <FAQ />
        <Reviews />
        <Contact />
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
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
