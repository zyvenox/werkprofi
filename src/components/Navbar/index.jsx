import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
          aria-label="WerkProfi Startseite"
        >
          WerkProfi
        </NavLink>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Startseite
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Leistungen
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Über uns
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Kontakt
          </NavLink>
        </nav>

        <NavLink
          to="/contact"
          className="nav-cta"
        >
          Angebot anfragen
        </NavLink>

        <button
          type="button"
          className="menu-button"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen
              ? "Menü schließen"
              : "Menü öffnen"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu"
          aria-label="Mobile Navigation"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            Startseite
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            Leistungen
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            Über uns
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            Kontakt
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mobile-nav-cta"
          >
            Angebot anfragen
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;