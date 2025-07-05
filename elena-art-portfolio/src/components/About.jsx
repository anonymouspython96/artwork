import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skills = [
    "Illustrazione Digitale",
    "Graphic Design",
    "3D Modeling",
    "Animazione",
    "Brand Identity",
    "Art Direction"
  ];

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
        <div className="about-content">
          <div className={`about-image fade-in ${isVisible ? 'visible' : ''}`}>
            <img 
              src="https://via.placeholder.com/500x600/6c5ce7/ffffff?text=About+Me" 
              alt="Elena Rossi" 
            />
          </div>

          <div className={`about-text fade-in ${isVisible ? 'visible' : ''}`}>
            <h2>Ciao, sono Elena</h2>
            <p>Artista digitale e illustratrice con base a Milano. Con oltre 10 anni di esperienza nel settore creativo...</p>

            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;