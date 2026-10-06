import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              WerkProfi
            </Link>

            <p>
              Zuverlässige Lösungen für moderne
              Gebäudetechnik und technische Dienstleistungen.
            </p>
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>

            <Link to="/">Startseite</Link>
            <Link to="/services">Leistungen</Link>
            <Link to="/about">Über uns</Link>
            <Link to="/contact">Kontakt</Link>
          </div>

          <div className="footer-column">
            <h3>Leistungen</h3>

            <Link to="/services">Elektroinstallation</Link>
            <Link to="/services">Sanitärtechnik</Link>
            <Link to="/services">Heizung</Link>
            <Link to="/services">Wartung & Reparatur</Link>
          </div>

          <div className="footer-column">
            <h3>Kontakt</h3>

            <a href="mailto:info@werkprofi.de">
              info@werkprofi.de
            </a>

            <a href="tel:+491234567890">
              +49 123 4567890
            </a>

            <span>Berlin, Deutschland</span>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 WerkProfi. Alle Rechte vorbehalten.
          </span>

          <div className="footer-legal">
            <Link to="/privacy">Datenschutz</Link>
            <Link to="/imprint">Impressum</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;