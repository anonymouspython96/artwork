import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const element = document.getElementById('home');
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
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>Arte Digitale <br />& Illustrazioni</h1>
          <p className={`hero-subtitle fade-in ${isVisible ? 'visible' : ''}`}>
            Dove creatività e tecnologia si incontrano per creare esperienze visive uniche
          </p>
          <a href="#projects" className={`btn fade-in ${isVisible ? 'visible' : ''}`}>Esplora i progetti</a>
        </div>
      </div>

      <div className={`hero-image fade-in ${isVisible ? 'visible' : ''}`}>
        <img 
          src="https://via.placeholder.com/800x600/6c5ce7/ffffff?text=Hero+Image" 
          alt="Opera d'arte di Elena" 
        />
      </div>
    </section>
  );
};

export default Hero;