import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ number, title, description, slug }) {
  return (
    <article className="service-card">
      <span className="service-number">{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <Link
        to={`/services/${slug}`}
        className="service-card-link"
      >
        Mehr erfahren →
      </Link>
    </article>
  );
}

export default ServiceCard;