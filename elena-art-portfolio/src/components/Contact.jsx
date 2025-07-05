import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "info@elenarossi.art"
    },
    {
      icon: <FaPhone />,
      title: "Telefono",
      value: "+39 123 456 7890"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Studio",
      value: "Via Roma 123, Milano, Italia"
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaBehance />, url: "#" },
    { icon: <FaLinkedin />, url: "#" }
  ];

  useEffect(() => {
    const checkScroll = () => {
      const element = document.getElementById('contact');
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per il tuo messaggio! Ti risponderò il prima possibile.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2>Contattami</h2>
          <p className="section-subtitle">Pronto per iniziare un nuovo progetto? Scrivimi!</p>
        </div>

        <div className="contact-container">
          <div className={`contact-info fade-in ${isVisible ? 'visible' : ''}`}>
            <h2>Collaboriamo insieme</h2>
            <p>Sono sempre aperta a nuove collaborazioni e progetti stimolanti. Contattami per discutere della tua idea o per richiedere un preventivo.</p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="social-link">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={`contact-form fade-in ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Oggetto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Messaggio</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control" 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">Invia Messaggio</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;