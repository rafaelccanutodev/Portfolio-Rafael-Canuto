import React from "react";
import "./CtaSection.css";
 
export default function CtaSection() {
  return (
    <section className="cta-wrapper">
      <div className="cta-card">
        <div className="cta-glow" />
 
        <div className="cta-content">
          <h2 className="cta-title">
            Vamos transformar sua ideia
            <br />
            em um site profissional?
          </h2>
 
          <p className="cta-subtitle">
            Solicite um orçamento sem compromisso e descubra como posso ajudar
            sua empresa a crescer na internet.
          </p>
 
          <a href="https://wa.me/5548996941150" className="cta-button">
            Solicitar orçamento
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
 