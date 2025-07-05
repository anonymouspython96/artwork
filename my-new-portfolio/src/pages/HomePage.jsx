import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import './HomePage.css';

export default function HomePage() {
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
    <div id="home">
      <Hero />
      <div className="placeholder-section">
        <h2>Home Page Content</h2>
        <p>Qui verranno inserite le sezioni del portfolio</p>
      </div>
    </div>
  );
}