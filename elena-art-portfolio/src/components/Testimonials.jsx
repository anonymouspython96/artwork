import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      rating: "★★★★★",
      content: "Elena ha trasformato la nostra identità visiva con un approccio fresco e innovativo. La sua capacità di comprendere le nostre esigenze e tradurle in soluzioni visive è eccezionale.",
      author: {
        name: "Maria Bianchi",
        role: "Direttore Artistico, Galleria Contemporanea",
        avatar: "https://via.placeholder.com/100/6c5ce7/ffffff?text=MB"
      }
    },
    {
      rating: "★★★★★",
      content: "Lavorare con Elena è stata un'esperienza fantastica. Ha portato la nostra campagna pubblicitaria a un livello superiore con le sue illustrazioni uniche e il suo occhio per i dettagli.",
      author: {
        name: "Luca Verdi",
        role: "Marketing Manager, Creative Agency",
        avatar: "https://via.placeholder.com/100/6c5ce7/ffffff?text=LV"
      }
    },
    {
      rating: "★★★★☆",
      content: "Il design del nostro sito web realizzato da Elena ha ricevuto complimenti da tutti i nostri clienti. Professionale, creativa e sempre puntuale.",
      author: {
        name: "Sara Rossi",
        role: "CEO, Tech Startup",
        avatar: "https://via.placeholder.com/100/6c5ce7/ffffff?text=SR"
      }
    }
  ];

  useEffect(() => {
    const checkScroll = () => {
      const element = document.getElementById('testimonials');
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
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2>Feedback</h2>
          <p className="section-subtitle">Cosa dicono i miei clienti e collaboratori</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card fade-in ${isVisible ? 'visible' : ''}`}>
              <div className="rating">{testimonial.rating}</div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.author.avatar} alt={testimonial.author.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author.name}</h4>
                  <p className="author-role">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;