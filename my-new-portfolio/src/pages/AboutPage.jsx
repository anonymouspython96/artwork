import React, { useEffect, useState } from 'react';
import './AboutPage.css';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Chi sono</h2>
          <p className="section-subtitle">Artista digitale e illustratrice con una passione per la creatività senza confini</p>
        </div>

        <div className="about-content">
          <div className={`about-image fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="image-placeholder"></div>
          </div>

          <div className={`about-text fade-in ${isVisible ? 'visible' : ''}`}>
            <h3>Ciao, sono Elena Rossi</h3>
            <p>
              Con oltre 10 anni di esperienza nel settore creativo, ho trasformato la mia passione per l'arte digitale in una carriera di successo. 
              La mia formazione accademica in Belle Arti e Design mi ha fornito una solida base teorica, mentre anni di esperienza pratica mi hanno 
              permesso di affinare uno stile unico che combina tecnica tradizionale e innovazione digitale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}