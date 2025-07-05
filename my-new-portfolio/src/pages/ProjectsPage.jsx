import React, { useState } from 'react';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tutti' },
    { id: 'illustration', name: 'Illustrazione' },
    { id: 'design', name: 'Design' },
    { id: 'branding', name: 'Branding' }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>I Miei Progetti</h2>
          <p className="section-subtitle">Una selezione dei lavori più significativi della mia carriera</p>
        </div>

        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <div className="project-item">
            <div className="project-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Progetto 1</h3>
              <p className="project-description">Descrizione del progetto...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}