import { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../img/logo-scs-02.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/ChiSiamo", label: "Chi siamo" },
  { to: "/Iscrizioni", label: "Iscrizioni" },
  { to: "/Collaborazioni", label: "Collaborazioni" },
  { to: "/VecchiCorsi", label: "Vecchi corsi" },
  { to: "/Contatti", label: "Contatti" },
];

const GlobalNavbarScs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      {/* Mobile */}
      <div className="navbar__mobile">
        <button onClick={toggleMenu} className="navbar__menu-btn">
          ☰
        </button>

        <Link to="/" className="navbar__logo">
          <img src={imgLogo} alt="logo" />
        </Link>

        <button className="navbar__login">Login</button>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__header">
          <span>Menu</span>
          <button onClick={closeMenu}>✕</button>
        </div>

        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link to={link.to} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop */}
      <nav className="navbar__desktop">
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default GlobalNavbarScs;