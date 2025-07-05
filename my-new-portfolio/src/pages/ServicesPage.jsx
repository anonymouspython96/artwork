import React from 'react';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Servizi Offerti</h2>
          <p className="section-subtitle">Soluzioni creative su misura per ogni esigenza</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Illustrazioni Digitali</h3>
            <p>Creazione di illustrazioni personalizzate per libri, editoria, campagne pubblicitarie e progetti personali.</p>
          </div>
        </div>
      </div>
    </section>
  );
}