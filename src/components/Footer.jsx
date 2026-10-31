import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </div>
      <p className="footer-title">&copy; 2026 LensArt Photo Editing Studio &mdash; All Rights Reserved</p>
      <p>Coimbatore, Tamil Nadu &bull; Lokeshraj M &bull; URK24CS1276</p>
    </footer>
  );
}

export default Footer;
