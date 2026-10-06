import "./Imprint.css";

function Imprint() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <div className="legal-container">

          <span className="section-label">
            Rechtliche Informationen
          </span>

          <h1>
            Impressum
          </h1>

          <p>
            Angaben zum Betreiber dieser Website.
          </p>

        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">

          <article className="legal-document">

            <section>
              <h2>Angaben gemäß den geltenden Anforderungen</h2>

              <p>
                WerkProfi
                <br />
                Musterstraße 12
                <br />
                10115 Berlin
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2>Kontakt</h2>

              <p>
                Telefon: +49 123 4567890
                <br />
                E-Mail: info@werkprofi.de
              </p>
            </section>

            <section>
              <h2>Verantwortlich für den Inhalt</h2>

              <p>
                Max Mustermann
                <br />
                Berlin, Deutschland
              </p>
            </section>

            <section>
              <h2>Hinweis</h2>

              <p>
                Die hier verwendeten Angaben sind Platzhalter für
                das Portfolio-Projekt und müssen vor einer echten
                Veröffentlichung durch die tatsächlichen Daten
                des Website-Betreibers ersetzt werden.
              </p>
            </section>

          </article>

        </div>
      </section>

    </main>
  );
}

export default Imprint;