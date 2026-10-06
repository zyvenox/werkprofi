import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getContactRequests } from "../../services/contactService";

import { getCurrentAdmin, logoutAdmin } from "../../services/authService";

import "./AdminContacts.css";

function AdminContacts() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  const [adminEmail, setAdminEmail] = useState("");

  const loadContacts = async () => {
    try {
      setIsLoading(true);
      setError("");

      const admin = await getCurrentAdmin();

      setAdminEmail(admin.data?.email || "");

      const response = await getContactRequests();

      setContacts(response.data || []);
    } catch (error) {
      if (error.status === 401) {
        navigate("/admin/login", { replace: true });
        return;
      }

      console.error("Failed to load contact requests:", error);

      setError("Die Anfragen konnten nicht geladen werden.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
    } finally {
      navigate("/admin/login", { replace: true });
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("de-DE", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));
  };

  return (
    <main className="admin-contacts-page">
      <div className="admin-contacts-container">
        <div className="admin-topbar">
          <div>
            <span className="admin-label">WerkProfi Admin</span>

            <h1>Kontaktanfragen</h1>

            <p>Übersicht aller eingegangenen Projektanfragen.</p>
          </div>

          <div className="admin-user-area">
            <span>{adminEmail}</span>

            <button
              type="button"
              className="admin-logout-button"
              onClick={handleLogout}
            >
              Abmelden
            </button>
          </div>
        </div>
        <p>sss</p>
        <div className="admin-summary">
          <div className="admin-summary-card">
            <span>Anfragen insgesamt</span>

            <strong>{contacts.length}</strong>
          </div>

          <div className="admin-summary-card">
            <span>Letzte Anfrage</span>

            <strong>
              {contacts.length > 0
                ? formatDate(contacts[0].createdAt)
                : "Keine"}
            </strong>
          </div>
        </div>

        {isLoading && (
          <div className="admin-state">
            <div className="admin-spinner"></div>

            <p>Anfragen werden geladen ...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="admin-error">
            <strong>Fehler</strong>

            <p>{error}</p>

            <button type="button" onClick={loadContacts}>
              Erneut versuchen
            </button>
          </div>
        )}

        {!isLoading && !error && contacts.length === 0 && (
          <div className="admin-empty">
            <div className="admin-empty-icon">○</div>

            <h2>Noch keine Anfragen</h2>

            <p>
              Sobald jemand das Kontaktformular absendet, erscheint die Anfrage
              hier.
            </p>
          </div>
        )}

        {!isLoading && !error && contacts.length > 0 && (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Kunde</th>
                  <th>Kontakt</th>
                  <th>Projekt</th>
                  <th>Budget</th>
                  <th>Nachricht</th>
                  <th>Datum</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <strong>{contact.name}</strong>
                    </td>

                    <td>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>

                      {contact.phone && (
                        <span className="admin-phone">{contact.phone}</span>
                      )}
                    </td>

                    <td>
                      <span className="admin-project">
                        {contact.projectType}
                      </span>
                    </td>

                    <td>{contact.budget || "—"}</td>

                    <td>
                      <p className="admin-message">{contact.message}</p>
                    </td>

                    <td>
                      <span className="admin-date">
                        {formatDate(contact.createdAt)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

export default AdminContacts;
