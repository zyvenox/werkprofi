import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found-page">
      <div className="not-found-container">

        <div className="not-found-code">
          404
        </div>

        <span className="section-label">
          Seite nicht gefunden
        </span>

        <h1>
          Diese Seite
          <span> existiert nicht.</span>
        </h1>

        <p>
          Die gewünschte Seite konnte nicht gefunden werden.
          Vielleicht wurde die Adresse geändert oder die Seite
          wurde entfernt.
        </p>

        <div className="not-found-actions">
          <Link
            to="/"
            className="not-found-primary"
          >
            Zur Startseite
          </Link>

          <button
            type="button"
            className="not-found-secondary"
            onClick={() => navigate(-1)}
          >
            ← Zurück
          </button>
        </div>

      </div>
    </main>
  );
}

export default NotFound;
