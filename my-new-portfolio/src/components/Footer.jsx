import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const links = [
    { text: "Home", url: "/" },
    { text: "Chi sono", url: "/chi-sono" },
    { text: "Progetti", url: "/progetti" },
    { text: "Servizi", url: "/servizi" },
    { text: "Contatti", url: "/contatti" }
  ];

  const services = [
    { text: "Illustrazioni Digitali", url: "/servizi" },
    { text: "Graphic Design", url: "/servizi" },
    { text: "3D Modeling", url: "/servizi" },
    { text: "UI/UX Design", url: "/servizi" },
    { text: "Brand Identity", url: "/servizi" }
  ];

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <Link to="/" className="footer-logo"><span>E</span>lena</Link>
            <p>Artista digitale e illustratrice con base a Milano. Creo esperienze visive uniche che connettono brand e pubblico attraverso la creatività e l'innovazione.</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Link Utili</h3>
            <ul className="footer-links">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Servizi</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.url}>{service.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contattami</h3>
            <ul className="footer-contact">
              <li>info@elenarossi.art</li>
              <li>+39 123 456 7890</li>
              <li>Via Roma 123, Milano</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Elena Rossi. Tutti i diritti riservati.</p>
          <p>Design e sviluppo con ❤️</p>
        </div>
      </div>
    </footer>
  );
}