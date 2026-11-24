import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo" onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}MCC_Logo.png`} alt="Michael Connolly Contracts" className="site-header__logo-img" />
        </NavLink>

        <nav className={`site-header__nav ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `site-header__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="#contact" className="btn btn-primary site-header__cta" onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
