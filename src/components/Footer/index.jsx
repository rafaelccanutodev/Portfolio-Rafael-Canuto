import React from "react";
import "./footer.css";
import Logo from '../../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <div><img src={Logo} className="navbar__logo-circle" /></div>
            <span className="footer-name">Rafael Canuto</span>
          </div>
          <p className="footer-tagline">Sites modernos que geram resultados.</p>
        </div>

        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#inicio">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="footer-social">
            <a href="https://github.com/rafaelccanutodev" target="__blank" aria-label="GitHub" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rafael-canuto-ti/" target="__blank" aria-label="LinkedIn" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7.5 10v6M7.5 7.5v.01M12 16v-3.5c0-1.1.7-2 2-2s2 .9 2 2V16M12 12.5V16" />
              </svg>
            </a>
            <a href="https://www.instagram.com/rafael_cunhacanuto/" target="__blank" aria-label="Instagram" className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span>© {year} Rafael Canuto. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}