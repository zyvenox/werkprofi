import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../data/services";
import "./Services.css";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Beratung",
    description:
      "Wir besprechen Ihre Anforderungen und klären gemeinsam die nächsten Schritte.",
  },
  {
    id: 2,
    number: "02",
    title: "Planung",
    description:
      "Wir entwickeln eine passende Lösung und planen die Umsetzung transparent.",
  },
  {
    id: 3,
    number: "03",
    title: "Umsetzung",
    description:
      "Unser Team setzt das Projekt zuverlässig und professionell um.",
  },
  {
    id: 4,
    number: "04",
    title: "Abschluss",
    description:
      "Nach der Fertigstellung prüfen wir das Ergebnis und stellen sicher, dass alles passt.",
  },
];

function Services() {
  return (
    <main className="services-page">

      <section className="services-hero">
        <div className="services-container">
          <div className="services-hero-content">

            <span className="section-label">
              Unsere Leistungen
            </span>

            <h1>
              Lösungen, die zu
              <span> Ihren Anforderungen passen.</span>
            </h1>

            <p>
              Entdecken Sie unsere technischen Dienstleistungen
              und erfahren Sie, wie wir Projekte zuverlässig von
              der Planung bis zur Umsetzung begleiten.
            </p>

            <Link
              to="/contact"
              className="services-hero-button"
            >
              Projekt besprechen →
            </Link>

          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="services-container">

          <div className="services-section-heading">
            <div>
              <span className="section-label">
                Was wir anbieten
              </span>

              <h2>
                Unsere wichtigsten
                <span> Leistungen.</span>
              </h2>
            </div>

            <p>
              Von einzelnen Arbeiten bis zu umfassenden
              Projekten bieten wir passende Lösungen für
              unterschiedliche Anforderungen.
            </p>
          </div>

          <div className="services-page-grid">
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

      <section className="process-section">
        <div className="services-container">

          <div className="services-section-heading process-heading">
            <div>
              <span className="section-label">
                Unser Ablauf
              </span>

              <h2>
                Einfach, transparent
                <span> und zuverlässig.</span>
              </h2>
            </div>

            <p>
              Ein klarer Prozess sorgt dafür, dass Sie jederzeit
              wissen, was als Nächstes passiert.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article
                className="process-item"
                key={step.id}
              >
                <span className="process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="services-cta-section">
        <div className="services-container">

          <div className="services-cta-box">

            <div>
              <span className="section-label">
                Ihr Projekt
              </span>

              <h2>
                Sie haben eine konkrete
                <span> Anfrage?</span>
              </h2>

              <p>
                Sprechen Sie mit uns über Ihr Projekt.
                Gemeinsam finden wir die passende Lösung.
              </p>
            </div>

            <Link
              to="/contact"
              className="services-cta-button"
            >
              Kontakt aufnehmen →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;