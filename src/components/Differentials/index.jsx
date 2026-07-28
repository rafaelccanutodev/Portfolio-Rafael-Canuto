import './differentials.css'

const items = [
  {
    title: 'Design moderno',
    description: 'Visual atual, elegante e alinhado à sua marca.',
    icon: '✨',
  },
  {
    title: 'Alta performance',
    description: 'Carregamento rápido em qualquer dispositivo.',
    icon: '⚡',
  },
  {
    title: 'SEO',
    description: 'Estrutura preparada para ranquear no Google.',
    icon: '🔍',
  },
  {
    title: 'Responsivo',
    description: 'Perfeito no celular, tablet e desktop.',
    icon: '📱',
  },
  {
    title: 'Suporte',
    description: 'Acompanhamento próximo depois da entrega.',
    icon: '🎧',
  },
  {
    title: 'Entrega rápida',
    description: 'Prazos claros e cumpridos do início ao fim.',
    icon: '⏱️',
  },
  {
    title: 'Código limpo',
    description: 'Componentes reutilizáveis e fácil manutenção.',
    icon: '💻',
  },
  {
    title: 'Experiência do usuário',
    description: 'Navegação intuitiva que guia até o contato.',
    icon: '❤️',
  },
]

function Differentials() {
  return (
    <section className="differentials" id="diferenciais">
      <div className="differentials__inner">
        <div className="differentials__header">
          <span className="differentials__eyebrow">Diferenciais</span>
          <h2>Por que trabalhar comigo?</h2>
          <p>Mais que um site bonito: uma ferramenta feita para trazer clientes.</p>
        </div>
        <div className="differentials__grid">
          {items.map((item) => (
            <article key={item.title} className="differentials__card">
              <div className="differentials__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
