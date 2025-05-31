import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      id="header"
      className={`${visible ? "visible" : ""} ${scrolled ? "scrolled" : ""}`}
    >
      <div className="left-container">
        <div className="logo">
          <span className="bracket">&lt;</span>
          <Link className="windsong-medium" to="/" onClick={closeMenu}>
            Manshi Rathour
          </Link>
          <span className="bracket">/&gt;</span>
        </div>
      </div>

      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul className="right-container">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? (
          <span className="close-icon">✖</span>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
