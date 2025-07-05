import { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Urban Dreams",
      category: "Illustrazione Digitale",
      image: "https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Project+1",
      description: "Serie di illustrazioni digitali che esplorano il rapporto tra spazio urbano e immaginazione...",
      year: "2023",
      client: "Galleria Contemporanea",
      techniques: ["Illustrazione digitale", "Compositing", "Photo manipulation", "Digital painting"]
    },
    {
      id: 2,
      title: "Nature Series",
      category: "Graphic Design",
      image: "https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Project+2",
      description: "Collezione di opere ispirate alla natura con un tocco moderno...",
      year: "2022",
      client: "EcoArt Foundation",
      techniques: ["Vector art", "Color theory", "Pattern design"]
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Project+3",
      description: "Identità visiva completa per un nuovo brand di moda sostenibile...",
      year: "2023",
      client: "GreenStyle",
      techniques: ["Logo design", "Typography", "Brand guidelines"]
    }
  ];

  useEffect(() => {
    const checkScroll = () => {
      const element = document.getElementById('projects');
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

  const openModal = (projectId) => {
    setSelectedProject(projects.find(p => p.id === projectId));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2>Progetti Recenti</h2>
          <p className="section-subtitle">Una selezione dei miei lavori più significativi</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-item fade-in ${isVisible ? 'visible' : ''}`}
              onClick={() => openModal(project.id)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-details">
                <p><strong>Anno:</strong> {selectedProject.year}</p>
                <p><strong>Cliente:</strong> {selectedProject.client}</p>
                <div className="modal-techniques">
                  <strong>Tecniche:</strong>
                  <div className="techniques-list">
                    {selectedProject.techniques.map((tech, index) => (
                      <span key={index} className="technique-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </div>
      )}
    </section>
  );
};

export default Projects;