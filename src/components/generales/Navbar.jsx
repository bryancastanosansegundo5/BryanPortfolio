import { useState } from "react";
import { NavLink } from "react-router-dom";
import cv from "../../assets/Curriculum Vitae - Bryan Castano San Segundo.pdf";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/habilidades", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="modern-nav" aria-label="Navegación principal">
      <ul className="modern-nav__links">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `modern-nav__link ${isActive ? "modern-nav__link--active" : ""}`
              }
              onClick={closeMenu}
            >
              <span>{label}</span>
              <span aria-hidden="true">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="modern-nav__actions">
        <a href={cv} download className="modern-nav__btn modern-nav__btn--solid">
          Descargar CV
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-casta%C3%B1o-san-segundo/"
          target="_blank"
          rel="noopener noreferrer"
          className="modern-nav__btn modern-nav__btn--ghost"
        >
          LinkedIn
        </a>
      </div>

      <button
        type="button"
        className="modern-nav__toggle"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={handleToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={`modern-nav__mobile ${isMenuOpen ? "modern-nav__mobile--open" : ""}`}
      >
        {navItems.map(({ to, label }) => (
          <NavLink key={`mobile-${to}`} to={to} className="modern-nav__mobile-link" onClick={closeMenu}>
            {label}
          </NavLink>
        ))}
        <a href={cv} download className="modern-nav__mobile-link" onClick={closeMenu}>
          Descargar CV
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-casta%C3%B1o-san-segundo/"
          target="_blank"
          rel="noopener noreferrer"
          className="modern-nav__mobile-link"
          onClick={closeMenu}
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
