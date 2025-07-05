import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const navItems = [
  { path: "/", label: "Home", end: true },
  { path: "/chi-sono", label: "Chi sono" },
  { path: "/progetti", label: "Progetti" },
  { path: "/servizi", label: "Servizi" },
  { path: "/contatti", label: "Contatti" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo">
            <span>E</span>lena
          </NavLink>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <button className="mobile-menu-close" onClick={toggleMenu}>
              <FaTimes />
            </button>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                    end={item.end}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}