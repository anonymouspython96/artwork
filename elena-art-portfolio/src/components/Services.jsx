import { useState, useEffect } from 'react';
import { FaPaintBrush, FaPalette, FaVectorSquare, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: <FaPaintBrush />,
      title: "Illustrazioni Digitali",
      description: "Creazione di illustrazioni personalizzate per libri, editoria, campagne pubblicitarie e progetti personali."
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description: "Progettazione di identità visive, loghi, materiali stampa e digitali per comunicazione efficace."
    },
    {
      icon: <FaVectorSquare />,
      title: "3D Modeling",
      description: "Modellazione 3D per prodotti, personaggi e ambientazioni con texture e rendering di alta qualità."
    },
    {
      icon: <FaMobileAlt />,
      title: "UI/UX Design",
      description: "Progettazione di interfacce utente intuitive ed esperienze digitali coinvolgenti per app e siti web."
    }
  ];

  useEffect(() => {
    const checkScroll = () => {
      const element = document.getElementById('services');
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
    <section className="section services-section" id="services">
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2>I Miei Servizi</h2>
          <p className="section-subtitle">Soluzioni creative su misura per ogni progetto</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-in ${isVisible ? 'visible' : ''}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;