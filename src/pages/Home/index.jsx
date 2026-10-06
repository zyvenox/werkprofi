import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import Testimonial from "../../components/Testimonial";
import { services } from "../../data/services";
import "./Home.css";

const testimonials = [
  {
    id: 1,
    name: "Thomas Weber",
    role: "Geschäftsführer",
    text: "Sehr professioneller Service. Die Arbeiten wurden zuverlässig und schnell umgesetzt.",
  },
  {
    id: 2,
    name: "Anna Schneider",
    role: "Immobilienverwaltung",
    text: "Klare Kommunikation und eine saubere Umsetzung. Wir waren mit dem Ergebnis sehr zufrieden.",
  },
  {
    id: 3,
    name: "Michael Fischer",
    role: "Privatkunde",
    text: "Von der ersten Beratung bis zur Fertigstellung hat alles problemlos funktioniert.",
  },
];

function Home() {
  return (
    <main className="home">
      
      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          
          <div className="hero-content">
            <span className="hero-label">
              Ihr zuverlässiger Partner
            </span>

            <h1>
              Moderne Lösungen.
              <span> Professionell umgesetzt.</span>
            </h1>

            <p className="hero-description">
              Wir entwickeln zuverlässige Lösungen für moderne
              Gebäudetechnik und technische Dienstleistungen.
            </p>

            <div className="hero-actions">
              <Link
                to="/contact"
                className="hero-btn hero-btn-primary"
              >
                Angebot anfragen
              </Link>

              <Link
                to="/services"
                className="hero-btn hero-btn-secondary"
              >
                Unsere Leistungen
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <strong>10+</strong>
                <span>Jahre Erfahrung</span>
              </div>

              <div className="trust-item">
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>

              <div className="trust-item">
                <strong>24/7</strong>
                <span>Erreichbarkeit</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
  <div className="hero-dashboard">

    <div className="dashboard-topbar">
      <div className="dashboard-brand">
        WerkProfi
      </div>

      <div className="dashboard-status">
        <span></span>
        Online
      </div>
    </div>

    <div className="dashboard-content">

      <div className="dashboard-heading">
        <div>
          <span>Projektübersicht</span>
          <h3>Technischer Service</h3>
        </div>

        <div className="dashboard-menu">
          •••
        </div>
      </div>

      <div className="dashboard-stats">

        <div className="dashboard-stat">
          <span>Projekte</span>
          <strong>128</strong>
          <small>+12% diesen Monat</small>
        </div>

        <div className="dashboard-stat">
          <span>Kunden</span>
          <strong>94</strong>
          <small>+8% diesen Monat</small>
        </div>

      </div>

      <div className="dashboard-chart">

        <div className="chart-header">
          <span>Aufträge</span>
          <strong>Diese Woche</strong>
        </div>

        <div className="chart-bars">
          <span style={{ height: "38%" }}></span>
          <span style={{ height: "52%" }}></span>
          <span style={{ height: "44%" }}></span>
          <span style={{ height: "68%" }}></span>
          <span style={{ height: "58%" }}></span>
          <span style={{ height: "78%" }}></span>
          <span style={{ height: "92%" }}></span>
        </div>

        <div className="chart-days">
          <span>Mo</span>
          <span>Di</span>
          <span>Mi</span>
          <span>Do</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>So</span>
        </div>

      </div>

      <div className="dashboard-project">
        <div className="project-icon">
          ✓
        </div>

        <div className="project-info">
          <strong>Wartung abgeschlossen</strong>
          <span>Projekt #WP-2841</span>
        </div>

        <span className="project-time">
          09:42
        </span>
      </div>

    </div>
  </div>

  <div className="hero-floating-card">
    <span className="floating-card-icon">✓</span>

    <div>
      <strong>Professioneller Service</strong>
      <p>Zuverlässig & schnell</p>
    </div>
  </div>

  <div className="hero-floating-mini">
    <span>98%</span>
    <p>Kundenzufriedenheit</p>
  </div>
</div>

        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="section-container">
          
          <div className="section-heading">
            <div>
              <span className="section-label">
                Unsere Leistungen
              </span>

              <h2>
                Technik, auf die Sie
                <span> sich verlassen können.</span>
              </h2>
            </div>

            <p>
              Von der Planung bis zur Umsetzung bieten wir
              zuverlässige Lösungen für moderne Gebäude.
            </p>
          </div>

          <div className="services-grid">
  {services.map((service) => (
    <ServiceCard
      key={service.id}
      number={service.number}
      title={service.title}
      description={service.description}
      slug={service.slug}
    />
  ))}
</div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-container">
          
          <div className="why-grid">
            
            <div className="why-content">
              <span className="section-label">
                Warum WerkProfi?
              </span>

              <h2>
                Qualität, Zuverlässigkeit
                <span> und persönlicher Service.</span>
              </h2>

              <p>
                Wir verbinden technische Erfahrung mit modernen
                Lösungen und einem klaren Fokus auf Qualität und
                Kundenzufriedenheit.
              </p>
            </div>

            <div className="benefits-grid">
              
              <div className="benefit-item">
                <div className="benefit-number">01</div>

                <div>
                  <h3>Erfahrung</h3>
                  <p>
                    Langjährige Erfahrung und professionelles
                    Arbeiten bei jedem Projekt.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">02</div>

                <div>
                  <h3>Zuverlässigkeit</h3>
                  <p>
                    Klare Kommunikation, transparente Planung
                    und zuverlässige Umsetzung.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">03</div>

                <div>
                  <h3>Schneller Service</h3>
                  <p>
                    Schnelle Reaktion und lösungsorientierter
                    Support bei technischen Problemen.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">04</div>

                <div>
                  <h3>Faire Lösungen</h3>
                  <p>
                    Individuelle Lösungen passend zu den
                    Anforderungen und dem Budget unserer Kunden.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="section-container">
          
          <div className="stats-grid">

            <div className="stat-item">
              <strong>10+</strong>
              <span>Jahre Erfahrung</span>
            </div>

            <div className="stat-item">
              <strong>500+</strong>
              <span>Erfolgreiche Projekte</span>
            </div>

            <div className="stat-item">
              <strong>98%</strong>
              <span>Zufriedene Kunden</span>
            </div>

            <div className="stat-item">
              <strong>24/7</strong>
              <span>Erreichbarkeit</span>
            </div>

          </div>

        </div>
      </section>
      <section className="testimonials-section">
  <div className="section-container">

    <div className="section-heading testimonials-heading">
      <div>
        <span className="section-label">
          Kundenstimmen
        </span>

        <h2>
          Was unsere Kunden
          <span> sagen.</span>
        </h2>
      </div>

      <p>
        Vertrauen entsteht durch gute Arbeit,
        klare Kommunikation und zuverlässigen Service.
      </p>
    </div>

    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          role={testimonial.role}
          text={testimonial.text}
        />
      ))}
    </div>

  </div>
</section>
<section className="cta-section">
  <div className="section-container">

    <div className="cta-box">
      <div>
        <span className="section-label">
          Kontakt
        </span>

        <h2>
          Sie haben ein Projekt?
          <span> Wir helfen Ihnen gerne.</span>
        </h2>

        <p>
          Sprechen Sie mit uns über Ihr Vorhaben.
          Gemeinsam finden wir die passende Lösung.
        </p>
      </div>

      <Link
        to="/contact"
        className="cta-button"
      >
        Kostenloses Angebot anfragen →
      </Link>
    </div>

  </div>
</section>
    </main>
  );
}

export default Home;