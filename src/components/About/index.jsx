import './about.css'
import LogoAbout from '../../assets/logo-about.png'
import Perfil from '../../assets/perfil.jpg'
function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__inner">
        <div className="about__image-wrapper">
          <div className="about__image-circle">
            <img className="about__image-circle" src={Perfil}/>
          </div>
        </div>

        <div className="about__content">
          <span className="about__eyebrow">Quem sou</span>
          <h2>Rafael Canuto</h2>
          <p>
            Sou Rafael Canuto, desenvolvedor e especialista em soluções web.
          </p>
          <p>
            Crio sites modernos, rápidos e responsivos para empresas, profissionais liberais e pequenos negócios que desejam fortalecer sua presença digital.
          </p>
          <p>
            Meu objetivo é transformar ideias em experiências digitais eficientes, com design, tecnologia e estratégia para transmitir credibilidade e gerar melhores resultados para meus clientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
