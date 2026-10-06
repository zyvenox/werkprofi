import "./Testimonial.css";

function Testimonial({ name, role, text }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars">
        ★★★★★
      </div>

      <p className="testimonial-text">
        “{text}”
      </p>

      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {name.charAt(0)}
        </div>

        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </article>
  );
}

export default Testimonial;