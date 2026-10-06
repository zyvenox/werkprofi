import "./Privacy.css";

function Privacy() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <div className="legal-container">

          <span className="section-label">
            Rechtliche Informationen
          </span>

          <h1>
            Datenschutz
          </h1>

          <p>
            Informationen zum Umgang mit personenbezogenen Daten.
          </p>

        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">

          <article className="legal-document">

            <div className="legal-meta">
              <span>Stand</span>
              <strong>2026</strong>
            </div>

            <section>
              <h2>1. Allgemeine Hinweise</h2>

              <p>
                Diese Seite enthält die Datenschutzhinweise für
                die Nutzung dieser Website. Der endgültige Text
                muss vor der Veröffentlichung an die tatsächlichen
                technischen Funktionen und den Betreiber der
                Website angepasst werden.
              </p>
            </section>

            <section>
              <h2>2. Verantwortliche Stelle</h2>

              <p>
                WerkProfi
                <br />
                Berlin, Deutschland
                <br />
                info@werkprofi.de
              </p>
            </section>

            <section>
              <h2>3. Kontaktaufnahme</h2>

              <p>
                Wenn Sie über das Kontaktformular mit uns in
                Verbindung treten, werden die von Ihnen
                eingegebenen Angaben zur Bearbeitung Ihrer
                Anfrage verwendet.
              </p>
            </section>

            <section>
              <h2>4. Technische Daten</h2>

              <p>
                Je nach eingesetzten Diensten können technische
                Informationen wie Browsertyp, Betriebssystem oder
                Zugriffszeit verarbeitet werden. Die konkrete
                Datenschutzerklärung muss an die tatsächlich
                eingesetzte Infrastruktur angepasst werden.
              </p>
            </section>

            <section>
              <h2>5. Änderungen</h2>

              <p>
                Diese Hinweise können angepasst werden, wenn sich
                technische Funktionen oder rechtliche Anforderungen
                ändern.
              </p>
            </section>

          </article>

        </div>
      </section>

    </main>
  );
}

export default Privacy;