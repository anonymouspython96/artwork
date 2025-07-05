import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo"><span>E</span>lena</a>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <button className="mobile-menu-close" onClick={toggleMenu}>
              <FaTimes />
            </button>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={closeMenu}>Chi sono</a></li>
              <li><a href="#projects" className="nav-link" onClick={closeMenu}>Progetti</a></li>
              <li><a href="#services" className="nav-link" onClick={closeMenu}>Servizi</a></li>
              <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contatti</a></li>
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;