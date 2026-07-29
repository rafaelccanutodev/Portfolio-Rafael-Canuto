import { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (event, targetId) => {
    event.preventDefault()

    const target = document.getElementById(targetId)

    if (target) {
      const navbarHeight = 78
      const startPosition = window.scrollY
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight
      const distance = targetPosition - startPosition
      const duration = 1200
      let start = null

      const step = (timestamp) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 0.5 - Math.cos(progress * Math.PI) / 2
        window.scrollTo(0, startPosition + distance * eased)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }

    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <div><img src={Logo} className="navbar__logo-circle" alt="Logo Rafael Canuto" /></div>
          <div>
            <p className="navbar__brand-name">Rafael Canuto</p>
          </div>
        </div>

        <button
          type="button"
          className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`navbar__nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#inicio" onClick={(event) => handleNavClick(event, 'inicio')}>Início</a>
          <a href="#sobre" onClick={(event) => handleNavClick(event, 'sobre')}>Sobre</a>
          <a href="#servicos" onClick={(event) => handleNavClick(event, 'servicos')}>Serviços</a>
          <a href="#projetos" onClick={(event) => handleNavClick(event, 'projetos')}>Projetos</a>
          <a href="#faq" onClick={(event) => handleNavClick(event, 'faq')}>FAQ</a>
        </nav>

        <a className="navbar__cta" href="https://wa.me/5548996941150" onClick={() => setIsMenuOpen(false)}>
          Solicitar orçamento
        </a>
      </div>
    </header>
  )
}

export default Navbar
