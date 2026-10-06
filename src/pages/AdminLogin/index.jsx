import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCurrentAdmin,
  loginAdmin,
} from "../../services/authService";

import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(true);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        await getCurrentAdmin();
        navigate(
          "/admin/contacts",
          { replace: true }
        );
      } catch {
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, [navigate]);

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      await loginAdmin(
        email.trim(),
        password
      );

      navigate(
        "/admin/contacts",
        { replace: true }
      );
    } catch (error) {
      setError(
        error.data?.message ||
          "Anmeldung fehlgeschlagen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <main className="admin-login-page">
        <div className="admin-login-loading">
          Wird geladen ...
        </div>
      </main>
    );
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-brand">
          <span>WerkProfi</span>
          <small>Admin Bereich</small>
        </div>

        <div className="admin-login-heading">
          <span className="admin-login-label">
            Geschützter Bereich
          </span>

          <h1>
            Admin
            <span>Login.</span>
          </h1>

          <p>
            Melden Sie sich an, um die
            Kontaktanfragen zu verwalten.
          </p>
        </div>

        {error && (
          <div
            className="admin-login-error"
            role="alert"
          >
            {error}
          </div>
        )}

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >
          <div className="admin-login-group">
            <label htmlFor="admin-email">
              E-Mail
            </label>

            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
              placeholder="admin@werkprofi.de"
              autoComplete="email"
              required
            />
          </div>

          <div className="admin-login-group">
            <label htmlFor="admin-password">
              Passwort
            </label>

            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Anmelden ..."
              : "Anmelden →"}
          </button>
        </form>

        <p className="admin-login-footer">
          WerkProfi Admin · Geschützter Zugang
        </p>
      </div>
    </main>
  );
}

export default AdminLogin;