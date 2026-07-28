import projectImg from '../../assets/hero.png'
import './projects.css'
import SiteImoveis from '../../assets/projects/site-imoveis.png'
import SiteSorveteria from '../../assets/projects/site-sorveteria.png'
import SitePet from '../../assets/projects/site-pet.png'
const projects = [
   {
    title: 'Landing Page Imobiliária',
    description:
      'Site institucional desenvolvido para corretor de imóveis, com foco em apresentação de imóveis, geração de contatos e experiência responsiva.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    image: SiteImoveis,
    link: 'https://landipage-corretor-imoveis-uod6.vercel.app/'
  },
  {
    title: 'Landing Page Sorveteria',
    description:
      'Página moderna para sorveteria com destaque para produtos, experiência visual atrativa e estrutura preparada para conversão de clientes.',
    tags: ['React', 'Vite', 'Stripe'],
    image: SiteSorveteria,
    link: 'https://sorveteria-app-next.vercel.app/'
  },
  {
    title: 'Pet Boutique',
    description:
      'Site responsivo para loja PET com apresentação de serviços, produtos e identidade visual voltada ao público consumidor.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: SitePet,
    link: 'https://pet-boutique-mbx5.vercel.app/'
  }
]

function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="projects__inner">
        <div className="projects__header">
          <span className="projects__eyebrow">Projetos</span>
          <h2>Trabalhos que já estão no ar</h2>
          <p>Uma seleção de projetos criados sob medida para diferentes segmentos.</p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="project-card__link" target='__blank' href={`${project.link}`} aria-label={`Ver projeto ${project.link}`}>
                  Ver Projeto ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
