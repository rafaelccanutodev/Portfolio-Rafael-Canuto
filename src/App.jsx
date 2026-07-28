import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Cta from './components/CTA'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Differentials />
        <Testimonials />
        <Faq />
        <Cta/>
      </main>

      <a
        href="https://wa.me/5548996941150"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.42 2.98 1.14 4.23L2 22l5.77-1.14A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 17.5c-1.34 0-2.64-.38-3.77-1.1l-.27-.16-3.42.9.92-3.35-.17-.28A8.46 8.46 0 0 1 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5Zm4.64-6.38c-.25-.12-1.47-.72-1.69-.8-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.26.25-.43.08-.17.04-.32-.02-.44-.06-.12-.54-1.31-.74-1.79-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.29-.22.23-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.17 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </a>

      <Footer/>
    </>
  )
}

export default App
