const Footer = () => {
  const links = [
    { text: "Home", url: "#home" },
    { text: "Chi sono", url: "#about" },
    { text: "Progetti", url: "#projects" },
    { text: "Servizi", url: "#services" },
    { text: "Contatti", url: "#contact" }
  ];

  const services = [
    { text: "Illustrazioni Digitali", url: "#" },
    { text: "Graphic Design", url: "#" },
    { text: "3D Modeling", url: "#" },
    { text: "UI/UX Design", url: "#" },
    { text: "Brand Identity", url: "#" }
  ];

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#" className="footer-logo"><span>E</span>lena</a>
            <p>Artista digitale e illustratrice con base a Milano. Creo esperienze visive uniche che connettono brand e pubblico.</p>
          </div>

          <div>
            <h3 className="footer-title">Link Utili</h3>
            <ul className="footer-links">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Servizi</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.url}>{service.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Elena Rossi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;