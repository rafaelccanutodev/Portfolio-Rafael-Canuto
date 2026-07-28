import './process.css'

const steps = [
  {
    title: 'Conversa inicial',
    description: 'Entendo seu negócio, seu público e o objetivo do site.',
  },
  {
    title: 'Planejamento',
    description: 'Definimos estrutura, seções, conteúdo e referências visuais.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Codifico o site responsivo, rápido e otimizado para SEO.',
  },
  {
    title: 'Aprovação',
    description: 'Você revisa, sugere ajustes e aprovamos a versão final.',
  },
  {
    title: 'Publicação',
    description: 'Publicação com domínio, SSL e acompanhamento pós-entrega.',
  },
]

function Process() {
  return (
    <section className="process" id="processo">
      <div className="process__inner">
        <div className="process__header">
          <span className="process__eyebrow">Processo</span>
          <h2>Como trabalhamos juntos</h2>
          <p>Um fluxo simples e transparente, do primeiro contato até o site no ar.</p>
        </div>

        <div className="process__timeline">
          {steps.map((step, index) => (
            <div key={step.title} className="process__step">
              <div className="process__marker">
                <span>{index + 1}</span>
              </div>
              <article className="process__card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
