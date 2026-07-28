import { useState } from 'react'
import './faq.css'

const faqs = [
  {
    question: 'Quanto custa um site?',
    answer:
      'O valor depende do escopo. Landing pages começam em faixas mais acessíveis, e sites institucionais ou lojas variam conforme número de páginas e integrações. Envio um orçamento detalhado após a conversa inicial, sem compromisso.',
  },
  {
    question: 'Quanto tempo leva?',
    answer:
      'O prazo varia de acordo com o tamanho e complexidade do projeto. Em geral, uma landing page leve pode sair em até 2 semanas, enquanto sites maiores ficam prontos em 3 a 5 semanas após alinhamento de conteúdo.',
  },
  {
    question: 'Posso usar meu domínio?',
    answer:
      'Sim. Se você já tem um domínio, eu posso configurá-lo para o site. Caso ainda não tenha, também ajudo na compra e registro do endereço ideal para o seu negócio.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Trabalho com sinal inicial e pagamento final após a entrega. Também podemos negociar parcelas ou formas de pagamento que se adaptem ao seu projeto e orçamento.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <span className="faq__eyebrow">FAQ</span>
          <h2>Perguntas frequentes</h2>
          <p>Dúvidas comuns antes de começar um projeto.</p>
        </div>

        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <button
                type="button"
                key={item.question}
                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="faq__summary">
                  <span>{item.question}</span>
                  <span className="faq__icon">{isOpen ? '×' : '+'}</span>
                </div>
                <div className="faq__answer">{item.answer}</div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
