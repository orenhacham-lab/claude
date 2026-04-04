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

function App() {
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

export default App
