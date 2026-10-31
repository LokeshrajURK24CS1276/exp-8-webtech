import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = ["Home", "About", "Contact", "Students", "Register", "Login"];

function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu

  return (
    <header className="navbar">
      <span className="brand">LensArt</span>
      <button className="menu-btn" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((name) => (
          <NavLink key={name} to={name === "Home" ? "/" : "/" + name.toLowerCase()} end onClick={() => setOpen(false)}>
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
