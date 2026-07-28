import './services.css'

const services = [
  {
    title: 'Landing Pages',
    description:
      'Páginas focadas em conversão, rápidas e criadas para transformar visitas em clientes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
      </svg>
    ),
  },
  {
    title: 'Sites Institucionais',
    description:
      'Presença digital sólida que transmite credibilidade para a sua empresa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16" />
        <path d="M6 20V10h12v10" />
        <path d="M9 20V12h6v8" />
        <path d="M10 7l2-3 2 3" />
      </svg>
    ),
  },
  {
    title: 'Portfólios',
    description:
      'Vitrines elegantes para apresentar seus trabalhos e conquistar novos projetos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 13h8" />
        <path d="M8 17h4" />
      </svg>
    ),
  },
  {
    title: 'Lojas Virtuais',
    description:
      'Catálogos e e-commerces simples de gerenciar e fáceis de comprar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6h15l-1.5 9h-13z" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="18" cy="19" r="1" />
        <path d="M6 6L4 2H2" />
      </svg>
    ),
  },
  {
    title: 'SEO Básico',
    description:
      'Estrutura, metadados e performance otimizados para você aparecer no Google.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Hospedagem e Publicação',
    description:
      'Cuido da publicação em infraestrutura moderna, segura e com SSL incluso.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="10" rx="2" />
        <path d="M4 12h16" />
        <path d="M8 8V5h8v3" />
      </svg>
    ),
  },
  {
    title: 'Domínio Personalizado',
    description:
      'Registro e configuração do seu endereço próprio, com e-mail profissional.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
        <path d="M12 8a4 4 0 0 1 4 4" />
        <path d="M12 12l-2 2" />
      </svg>
    ),
  },
  {
    title: 'Integração com WhatsApp',
    description:
      'Botões e fluxos de contato direto para você falar com o cliente na hora.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.7-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
        <path d="M17 14.6c-.2-.1-1.1-.5-1.3-.6-.3-.1-.5-.1-.7.1-.3.2-1 0-1.3-.1-.3-.1-.5-.3-.7-.5-.2-.2-.8-.8-.8-1.9 0-1.1.9-1.9 1-2.1.1-.2.1-.4 0-.6-.1-.1-.6-1.4-.8-1.6-.2-.2-.4-.1-.6-.1h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.2.2 2 .7 2.3.8.3.1.4.2.5.3.2.1.4.3.3.6 0 .2-.3.8-.4 1.1-.1.3-.2.3-.4.3-.1 0-.3 0-.5-.1-1.4-.7-2.4-2.2-2.7-2.5-.3-.3-.6-.4-.7-.4s-.3 0-.5 0c-.2 0-.5.1-.8.4-.3.3-.9.9-.9 2.1s1 2.4 1.1 2.6c.1.2 1.7 2.7 4.5 3.8.6.2 1 .3 1.3.4.6.1 1.2.1 1.7.1 1.5 0 2.3-1 2.5-2.4.1-.6.1-1.1.1-1.2-.1-.3-.2-.4-.4-.6z" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services__inner">
        <div className="services__header">
          <span className="services__eyebrow">Serviços</span>
          <h2>Tudo que seu negócio precisa para vender online</h2>
          <p>Do primeiro rascunho ao site publicado, com acompanhamento em cada etapa.</p>
        </div>

        <div className="services__grid">
          {services.map((item) => (
            <div key={item.title} className="service-card">
              <div className="service-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
