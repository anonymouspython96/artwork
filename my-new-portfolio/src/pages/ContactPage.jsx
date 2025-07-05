import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
        <div className="section-header">
          <h2>Contattami</h2>
          <p className="section-subtitle">Pronto per iniziare un nuovo progetto? Scrivimi!</p>
        </div>

        <div className="contact-container">
          <div className="contact-form">
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
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn">Invia Messaggio</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}