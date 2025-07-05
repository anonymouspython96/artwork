import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <h3>Caricamento Portfolio</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-sono" element={<AboutPage />} />
          <Route path="/progetti" element={<ProjectsPage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/contatti" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;