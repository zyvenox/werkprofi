import { Link, useParams } from "react-router-dom";
import { services } from "../../data/services";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="service-details">
        <section className="service-not-found">
          <span className="section-label">
            Service nicht gefunden
          </span>

          <h1>
            Diese Leistung wurde
            <span> nicht gefunden.</span>
          </h1>

          <Link
            to="/services"
            className="service-back-button"
          >
            Zu unseren Leistungen →
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="service-details">

      <section className="service-details-hero">
        <div className="service-details-container">

          <div className="service-details-header">

            <span className="service-details-number">
              {service.number}
            </span>

            <span className="section-label">
              Unsere Leistung
            </span>

            <h1>{service.title}</h1>

            <p>{service.description}</p>

          </div>

        </div>
      </section>

      <section className="service-details-content">
        <div className="service-details-container">

          <div className="service-content-grid">

            <div className="service-main-content">

              <span className="section-label">
                Überblick
              </span>

              <h2>
                Professionelle Lösungen für
                <span> Ihre Anforderungen.</span>
              </h2>

              <p>
                {service.longDescription}
              </p>

              <Link
                to="/contact"
                className="service-contact-button"
              >
                Projekt anfragen →
              </Link>

            </div>

            <div className="service-features">

              <h3>
                Unsere Leistungen
              </h3>

              <div className="service-feature-list">
                {service.features.map((feature) => (
                  <div
                    className="service-feature"
                    key={feature}
                  >
                    <span>✓</span>

                    <p>{feature}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="service-details-bottom">
        <div className="service-details-container">

          <div className="service-bottom-box">

            <div>
              <span className="section-label">
                Ihr Projekt
              </span>

              <h2>
                Sie benötigen diese
                <span> Leistung?</span>
              </h2>

              <p>
                Kontaktieren Sie uns für eine unverbindliche
                Anfrage.
              </p>
            </div>

            <Link
              to="/contact"
              className="service-contact-button"
            >
              Kontakt aufnehmen →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default ServiceDetails;