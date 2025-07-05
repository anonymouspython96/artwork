import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>
            Arte Digitale <br />& Illustrazioni <span>Creative</span>
          </h1>
          <p className={`hero-subtitle fade-in ${isVisible ? 'visible' : ''}`}>
            Dove creatività e tecnologia si incontrano per creare esperienze visive uniche
          </p>
          <div className="hero-buttons">
            <Link to="/progetti" className={`btn fade-in ${isVisible ? 'visible' : ''}`}>
              Esplora i progetti
            </Link>
            <Link to="/contatti" className={`btn btn-outline fade-in ${isVisible ? 'visible' : ''}`}>
              Contattami
            </Link>
          </div>
        </div>
      </div>

      <div className={`hero-image fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="hero-image-container">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="main-image"></div>
        </div>
      </div>
    </section>
  );
}