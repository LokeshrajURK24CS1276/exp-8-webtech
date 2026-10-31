import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/students", label: "Students" },
  { to: "/register", label: "Register" },
  { to: "/login", label: "Login" }
];

function Navbar() {
  // menu is only toggled on small screens
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        LensArt
      </Link>
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
