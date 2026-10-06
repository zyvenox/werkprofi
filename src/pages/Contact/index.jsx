import { useState } from "react";
import { Link } from "react-router-dom";

import { sendContactForm } from "../../services/contactService";

import "./Contact.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setIsSuccess(false);
    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name =
        "Der Name muss mindestens 2 Zeichen enthalten.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email =
        "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.projectType) {
      newErrors.projectType =
        "Bitte wählen Sie eine Projektart.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Bitte beschreiben Sie Ihr Projekt.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Bitte geben Sie mindestens 10 Zeichen ein.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSuccess(false);
      setSubmitError("");
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setIsSuccess(false);
    setSubmitError("");

    try {
      await sendContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message.trim(),
      });

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitError(
        "Die Anfrage konnte momentan nicht gesendet werden. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-container">

          <div className="contact-hero-content">
            <span className="section-label">
              Kontakt
            </span>

            <h1>
              Lassen Sie uns
              <span>
                über Ihr Projekt sprechen.
              </span>
            </h1>

            <p>
              Sie haben eine Frage, eine konkrete Anfrage oder
              möchten ein neues Projekt besprechen? Schreiben Sie
              uns. Wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>

        </div>
      </section>

      {/* Content */}
      <section className="contact-content">
        <div className="contact-container">

          <div className="contact-grid">

            {/* Contact Info */}
            <div className="contact-info">

              <span className="contact-overline">
                Direkter Kontakt
              </span>

              <h2>
                Wir sind
                <span>für Sie da.</span>
              </h2>

              <p>
                Erzählen Sie uns kurz, worum es bei Ihrem Projekt
                geht. Je mehr Informationen Sie teilen, desto
                besser können wir Ihre Anfrage einschätzen.
              </p>

              <div className="contact-details">

                <a
                  href="mailto:info@werkprofi.de"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    @
                  </span>

                  <div>
                    <small>E-Mail</small>
                    <strong>
                      info@werkprofi.de
                    </strong>
                  </div>
                </a>

                <a
                  href="tel:+491234567890"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    +
                  </span>

                  <div>
                    <small>Telefon</small>
                    <strong>
                      +49 123 4567890
                    </strong>
                  </div>
                </a>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    ◉
                  </span>

                  <div>
                    <small>Standort</small>
                    <strong>
                      Berlin, Deutschland
                    </strong>
                  </div>
                </div>

              </div>

              <div className="contact-response">
                <span className="response-dot"></span>

                <div>
                  <strong>
                    Schnelle Antwort
                  </strong>

                  <p>
                    Wir beantworten Anfragen so schnell wie möglich.
                  </p>
                </div>
              </div>

              <Link
                to="/services"
                className="contact-services-link"
              >
                Unsere Leistungen ansehen →
              </Link>

            </div>

            {/* Form */}
            <div className="contact-form-wrapper">

              <div className="contact-form-header">
                <span>Anfrage senden</span>

                <p>
                  Füllen Sie das Formular aus und beschreiben Sie
                  kurz Ihr Vorhaben.
                </p>
              </div>

              {isSuccess && (
                <div
                  className="contact-success"
                  role="status"
                  aria-live="polite"
                >
                  <div className="success-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      Anfrage erfolgreich gesendet
                    </strong>

                    <p>
                      Vielen Dank. Wir melden uns
                      schnellstmöglich bei Ihnen.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div
                  className="contact-submit-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {submitError}
                </div>
              )}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* Name + Email */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name
                          ? "name-error"
                          : undefined
                      }
                    />

                    {errors.name && (
                      <span
                        id="name-error"
                        className="form-error"
                        role="alert"
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      E-Mail *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.de"
                      autoComplete="email"
                      inputMode="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email
                          ? "email-error"
                          : undefined
                      }
                    />

                    {errors.email && (
                      <span
                        id="email-error"
                        className="form-error"
                        role="alert"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* Phone + Project Type */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Telefon
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">
                      Projektart *
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      aria-invalid={Boolean(
                        errors.projectType
                      )}
                      aria-describedby={
                        errors.projectType
                          ? "project-type-error"
                          : undefined
                      }
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="Elektroinstallation">
                        Elektroinstallation
                      </option>

                      <option value="Sanitärtechnik">
                        Sanitärtechnik
                      </option>

                      <option value="Heizung">
                        Heizung
                      </option>

                      <option value="Wartung">
                        Wartung & Reparatur
                      </option>

                      <option value="Sonstiges">
                        Sonstiges
                      </option>
                    </select>

                    {errors.projectType && (
                      <span
                        id="project-type-error"
                        className="form-error"
                        role="alert"
                      >
                        {errors.projectType}
                      </span>
                    )}
                  </div>

                </div>

                {/* Budget */}
                <div className="form-group">
                  <label htmlFor="budget">
                    Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Bitte auswählen
                    </option>

                    <option value="unter-500">
                      Unter 500 €
                    </option>

                    <option value="500-1000">
                      500 € – 1.000 €
                    </option>

                    <option value="1000-2500">
                      1.000 € – 2.500 €
                    </option>

                    <option value="2500-5000">
                      2.500 € – 5.000 €
                    </option>

                    <option value="5000+">
                      5.000 €+
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">
                    Nachricht *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Erzählen Sie uns kurz von Ihrem Projekt ..."
                    rows="6"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message
                        ? "message-error"
                        : undefined
                    }
                  />

                  {errors.message && (
                    <span
                      id="message-error"
                      className="form-error"
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting
                    ? "Wird gesendet ..."
                    : "Anfrage senden →"}
                </button>

                <p className="form-note">
                  Mit dem Absenden stimmen Sie der Verarbeitung
                  Ihrer Angaben zur Bearbeitung Ihrer Anfrage zu.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;