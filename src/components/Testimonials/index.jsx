import './testimonials.css'

const testimonials = [
  {
    text: '“O site ficou impecável e em duas semanas já recebi orçamentos pelo formulário. Profissionalismo do começo ao fim.”',
    name: 'Marina Duarte',
    role: 'Duarte Arquitetura',
    initials: 'MD',
  },
  {
    text: '“Finalmente temos uma presença digital que passa credibilidade. O Rafael entendeu exatamente o que precisávamos.”',
    name: 'Carlos Menezes',
    role: 'Menezes Contabilidade',
    initials: 'CM',
  },
  {
    text: '“Rápido, atencioso e caprichoso. Meus agendamentos pelo WhatsApp aumentaram muito depois da landing page.”',
    name: 'Juliana Alves',
    role: 'Studio JA Beauty',
    initials: 'JA',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="testimonials__eyebrow">Depoimentos</span>
          <h2>O que os clientes dizem</h2>
          <p>Resultados reais de quem já colocou o próprio site no ar.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-card__quote">“”</div>
              <p className="testimonial-card__text">{item.text}</p>
              <div className="testimonial-card__meta">
                <div className="testimonial-card__avatar">{item.initials}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
