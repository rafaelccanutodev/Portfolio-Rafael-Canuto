import heroImg from '../../assets/hero.png'
import HeroLaptop from '../../assets/hero-laptop.jpg'
import './hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="hero__eyebrow">Sites modernos que geram resultados</span>
        <h1>
          Desenvolvimento de <span>Sites</span> e <span>Landing Pages</span> Profissionais
        </h1>
        <p>
          Ajudo empresas e profissionais a conquistarem mais clientes através de sites rápidos,
          modernos e desenvolvidos sob medida.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="https://wa.me/5548996941150">
            Solicitar orçamento
          </a>
          <a className="button button--secondary" href="#projetos">
            Ver projetos
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__card">
          <img src={HeroLaptop} alt="Tela de site profissional" />
        </div>
      </div>
    </section>
  )
}

export default Hero
