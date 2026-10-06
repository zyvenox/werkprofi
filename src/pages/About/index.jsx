import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    id: 1,
    number: "01",
    title: "Qualität",
    description:
      "Wir setzen auf saubere Arbeit, durchdachte Lösungen und einen hohen Qualitätsanspruch.",
  },
  {
    id: 2,
    number: "02",
    title: "Zuverlässigkeit",
    description:
      "Absprachen, Termine und transparente Kommunikation sind für uns selbstverständlich.",
  },
      { 
    id: 3,
    
    number: "03",
    title: "Persönlicher Service",
    description:
      "Jedes Projekt beginnt mit einem klaren Verständnis der individuellen Anforderungen.",
  },
  {
    id: 4,
    number: "04",
    title: "Nachhaltigkeit",
    description:
      "Wir bevorzugen langlebige, effiziente und sinnvoll geplante technische Lösungen.",
  },
];

const milestones = [
  {
    id: 1,
    year: "01",
    title: "Analyse",
    description:
      "Wir verstehen zuerst die Anforderungen, den Umfang und die Ziele des Projekts.",
  },
  {
    id: 2,
    year: "02",
    title: "Konzept",
    description:
      "Auf Basis der Anforderungen entwickeln wir eine klare und passende Lösung.",
  },
  {
    id: 3,
    year: "03",
    title: "Umsetzung",
    description:
      "Die geplanten Arbeiten werden strukturiert, zuverlässig und professionell umgesetzt.",
  },
  {
    id: 4,
    year: "04",
    title: "Betreuung",
    description:
      "Auch nach der Umsetzung bleiben wir ansprechbar und unterstützen bei weiteren Anforderungen.",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* ================================================
          Hero
      ================================================= */}

      <section className="about-hero">
        <div className="about-container">

          <div className="about-hero-content">
            <span className="section-label">
              Über WerkProfi
            </span>

            <h1>
              Technik mit Anspruch.
              <span> Service mit Persönlichkeit.</span>
            </h1>

            <p>
              Wir verbinden technische Kompetenz mit klarer
              Kommunikation und modernen Lösungen, die langfristig
              funktionieren.
            </p>

            <div className="about-hero-actions">
              <Link
                to="/contact"
                className="about-primary-button"
              >
                Projekt besprechen →
              </Link>

              <Link
                to="/services"
                className="about-secondary-button"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="about-hero-meta">

            <div className="about-meta-card">
              <span>Unser Anspruch</span>
              <strong>
                Einfach gute
                <br />
                Lösungen.
              </strong>
            </div>

            <div className="about-meta-number">
              <span>WerkProfi</span>
              <strong>01</strong>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================
          Story
      ================================================= */}

      <section className="about-story">
        <div className="about-container">

          <div className="about-story-grid">

            <div className="about-story-visual">

              <div className="story-main-card">
                <div className="story-card-top">
                  <span>WERKPROFI</span>
                  <span>EST. 2026</span>
                </div>

                <div className="story-card-center">
                  <div className="story-symbol">
                    W
                  </div>

                  <span>
                    Präzision in jedem Detail.
                  </span>
                </div>

                <div className="story-card-bottom">
                  <span>TECHNIK</span>
                  <span>SERVICE</span>
                  <span>QUALITÄT</span>
                </div>
              </div>

              <div className="story-floating-badge">
                <span>●</span>
                Persönlich erreichbar
              </div>

            </div>

            <div className="about-story-content">

              <span className="section-label">
                Unsere Geschichte
              </span>

              <h2>
                Klare Prozesse.
                <span>Verlässliche Ergebnisse.</span>
              </h2>

              <p>
                WerkProfi steht für einen modernen Ansatz im Bereich
                technischer Dienstleistungen. Unser Fokus liegt auf
                Lösungen, die nicht nur technisch funktionieren,
                sondern auch verständlich, effizient und langfristig
                sinnvoll sind.
              </p>

              <p>
                Von der ersten Beratung über die Planung bis zur
                Umsetzung achten wir auf klare Abläufe und eine
                professionelle Kommunikation.
              </p>

              <div className="story-highlights">

                <div>
                  <strong>01</strong>
                  <span>Klare Kommunikation</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Saubere Umsetzung</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Langfristige Lösungen</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================
          Values
      ================================================= */}

      <section className="about-values">
        <div className="about-container">

          <div className="about-section-heading">

            <div>
              <span className="section-label">
                Unsere Werte
              </span>

              <h2>
                Was uns bei jeder
                <span> Aufgabe wichtig ist.</span>
              </h2>
            </div>

            <p>
              Gute Arbeit besteht nicht nur aus Technik.
              Vertrauen, Qualität und eine klare Zusammenarbeit
              gehören für uns genauso dazu.
            </p>

          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article
                className="value-card"
                key={value.id}
              >
                <span className="value-number">
                  {value.number}
                </span>

                <div className="value-line"></div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <span className="value-arrow">↗</span>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================
          Timeline
      ================================================= */}

      <section className="about-process">
        <div className="about-container">

          <div className="about-section-heading">

            <div>
              <span className="section-label">
                Unsere Arbeitsweise
              </span>

              <h2>
                Von der Idee bis zur
                <span> fertigen Lösung.</span>
              </h2>
            </div>

            <p>
              Ein strukturierter Ablauf schafft Transparenz
              und sorgt dafür, dass Projekte effizient umgesetzt
              werden.
            </p>

          </div>

          <div className="timeline">

            {milestones.map((milestone, index) => (
              <div
                className="timeline-item"
                key={milestone.id}
              >

                <div className="timeline-marker">
                  <span>{milestone.year}</span>
                </div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <span>
                      Schritt {index + 1}
                    </span>

                    {index !== milestones.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>

                  <h3>{milestone.title}</h3>

                  <p>{milestone.description}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================================================
          CTA
      ================================================= */}

      <section className="about-cta">
        <div className="about-container">

          <div className="about-cta-box">

            <div className="about-cta-content">

              <span className="section-label">
                Gemeinsam starten
              </span>

              <h2>
                Sie haben eine Idee?
                <span>Lassen Sie uns darüber sprechen.</span>
              </h2>

              <p>
                Wir helfen Ihnen dabei, aus Anforderungen
                eine klare und zuverlässige Lösung zu machen.
              </p>

            </div>

            <Link
              to="/contact"
              className="about-cta-button"
            >
              Kontakt aufnehmen →
            </Link>

          </div>

          <p> ssda</p>
             <a href=" asd">sda </a>
        </div>
      </section>

    </main>
  );
}

export default About;