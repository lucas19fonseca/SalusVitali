import { useEffect } from "react";
import "./App.css";
import Jr from "./assets/Jr.png"
import Vt from "./assets/Vt.png"
import Tiger from "./assets/Tiger.png"
import Salus from "./assets/Salus.jpg"
// import Busque from "./assets/Busque.png"

function App() {
  useEffect(() => {
    // Smooth scrolling
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const section = document.querySelector(targetId);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return;
      if (window.scrollY > 100) {
        header.style.background = "rgba(45, 90, 61, 0.95)";
      } else {
        header.style.background =
          "linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    e.target.reset();
  };

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <img src={Salus} alt=""  style={{ height: "60px", borderRadius: "100px" }}/>
            </div>
            <span className="logo-text">Salus Vitali</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#partnerships">Parcerias</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Salus Vitali</h1>
          <p className="subtitle">
            Especialistas em Liberação Miofascial e Terapias Corporais
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a href="#contact" className="cta-button">Agende sua Consulta</a>
            <a
              href="https://wa.me/556194384284"
              target="_blank"
              rel="noreferrer"
              className="cta-button secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i class="fa-solid fa-hands"></i></div>
              <h3>Liberação Miofascial</h3>
              <p>
                Técnicas manuais e instrumentais para liberação das tensões musculares e fasciais, promovendo alívio da dor e melhora da mobilidade.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i class="fa-solid fa-fire"></i></div>
              <h3>Ventosaterapia</h3>
              <p>
                Terapia com ventosas que estimula a circulação sanguínea, reduz inflamações e promove o relaxamento muscular profundo.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i class="fa-solid fa-bullseye"></i></div>
              <h3>Dry Needling</h3>
              <p>
                Técnica de punção seca para tratamento de pontos gatilho, proporcionando alívio imediato da dor e melhora da função muscular.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i class="fa-solid fa-bolt"></i></div>
              <h3>TENS - Eletroestimulação</h3>
              <p>
                Estimulação elétrica transcutânea para controle da dor, fortalecimento muscular e aceleração do processo de cicatrização.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i class="fa-solid fa-ruler"></i></div>
              <h3>Avaliação Postural</h3>
              <p>
                Análise completa da postura corporal para identificação de desequilíbrios e desenvolvimento de planos de tratamento personalizados.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i class="fa-solid fa-user"></i></div>
              <h3>Massagem Relaxante</h3>
              <p>
                Massagens terapêuticas para alívio do estresse, redução de tensões e promoção do bem-estar físico e mental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIAS */}
      <section id="partnerships" className="partnerships">
        <div className="container">
          <h2 className="section-title">Nossas Parcerias</h2>
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>
            Oferecemos descontos especiais para alunos das nossas instituições parceiras
          </p>
          <div className="partnerships-grid">
            <div className="partnership-card">
              <div className="partnership-logo jr-integration">
                <img src={Jr} alt="img jr" style={{ height: "120px", borderRadius: "100px" }} />
              </div>
              <h3>JR Integração Esportiva</h3>
              <div className="discount-badge">20% de Desconto</div>
              <p style={{ marginBottom: "1.5rem", color: "#666" }}>
                Alunos ativos na JR Integração têm direito a 20% de desconto nas massagens avulsas!
              </p>
              <a
                href="https://instagram.com/jrintegracaopf"
                target="_blank"
                rel="noreferrer"
                className="partnership-instagram"
              >
                @jrintegracaopf
              </a>
            </div>

            <div className="partnership-card">
              <div className="partnership-logo vt-academy">
                <img src={Vt} alt="img Vt" style={{ height: "120px", borderRadius: "100px"}} />
              </div>
              <h3>VT Academy</h3>
              <div className="discount-badge">20% de Desconto</div>
              <p style={{ marginBottom: "1.5rem", color: "#666" }}>
                Alunos ativos na VT Academy têm direito a 20% de desconto nas massagens avulsas!
              </p>
              <a
                href="https://instagram.com/vtacademy.bsb"
                target="_blank"
                rel="noreferrer"
                className="partnership-instagram"
              >
                @vtacademy.bsb
              </a>
            </div>

            <div className="partnership-card">
              <div className="partnership-logo tiger-futevolei">
                  <img src={Tiger} alt="img tiger" style={{ height: "120px", borderRadius: "100px"}} />
              </div>
              <h3>Tiger Futevôlei</h3>
              <div className="discount-badge">20% de Desconto</div>
              <p style={{ marginBottom: "1.5rem", color: "#666" }}>
                Alunos ativos na Tiger Futevôlei têm direito a 20% de desconto nas massagens avulsas!
              </p>
              <a
                href="https://instagram.com/tigerfutevolei"
                target="_blank"
                rel="noreferrer"
                className="partnership-instagram"
              >
                @tigerfutevolei
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre a Salus Vitali</h2>
              <p>
                A Salus Vitali é uma clínica especializada em terapias corporais e liberação miofascial, dedicada a proporcionar alívio da dor e melhora da qualidade de vida dos nossos pacientes.
              </p>
              <p>
                Nossa equipe de profissionais altamente qualificados utiliza técnicas modernas e comprovadas cientificamente para tratar disfunções musculoesqueléticas, dores crônicas e tensões corporais.
              </p>
              <p>
                Oferecemos um ambiente acolhedor e tratamentos personalizados, sempre priorizando o bem-estar e a recuperação integral de cada paciente.
              </p>
            </div>
            <div className="about-image">
              {/* <img src={Busque} alt="img sobre salus" style={{ height: "52vh", width: "90%", borderRadius: "10px" }} /> */}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-contact">Entre em Contato</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Informações de Contato</h3>
              <div className="contact-item">
                <div className="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Endereço</h4>
                  <p>Brasília, Distrito Federal</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>
                    <a
                      href="https://wa.me/556194384284"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#8fbc8f", textDecoration: "none" }}
                    >
                      (61) 9438-4284
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <p>contato@salusvitali.com.br</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i class="fa-solid fa-clock"></i></div>
                <div>
                  <h4>Horário de Funcionamento</h4>
                  <p>
                    Segunda a Sexta: 8h às 18h
                    <br />Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Seu Nome" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Seu Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Seu Telefone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Sua Mensagem" required></textarea>
                </div>
                <button type="submit" className="cta-button">
                  Enviar Mensagem
                </button>
                <a
                  href="https://wa.me/556194384284"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button secondary"
                  style={{ opacity: 1, animation: "none", marginLeft: 0 }}
                >
                  WhatsApp Direto
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Salus Vitali. Todos os direitos reservados.</p>
          <p>Cuidando da sua saúde com dedicação e profissionalismo.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
