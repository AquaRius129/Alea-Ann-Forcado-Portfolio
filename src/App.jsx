import React, { useEffect } from 'react';

function App() {
  // Intersection Observer for active nav links
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-links a[data-section="${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <nav>
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Portfolio <span>Alea</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home" data-section="home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#skills" data-section="skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" data-section="projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#about" data-section="about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home">
        <div className="home-photo">
          <img src="/profile.jpg" alt="Alea Ann Forcado" />
        </div>
        <div className="home-text">
          <h1>Hi, I'm<br/><span>Alea Ann Forcado</span></h1>
          <p className="tagline">BSIT Student · <em>Western Institute of Technology</em></p>
          <p>I'm currently a 2nd year student still building my skills and eager to grow and improve every day.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">Skills I'm <span>Learning</span></h2>
        <div className="skills-grid">
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Java</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">Figma</span>
          <span className="skill-tag">Data Science</span>
          <span className="skill-tag">Networking</span>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.35C17.25 21.15 21 16.25 21 11V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l5.59-5.58L18 8l-7 7z"/>
            </svg>
          </div>
          <div className="cert-info">
            <span>Certificate Acquired</span>
            <strong>National Certificate II — Computer Systems Servicing</strong>
            <small>TESDA · Technical Education and Skills Development Authority</small>
            <img src="/NC2.jpg" alt="NC2 Certificate" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-thumb">
              <img src="/E-commerce.png" alt="Urban Tastebuds" />
              <span className="badge">GitHub</span>
            </div>
            <div className="project-info">
              <h3>Urban Tastebuds</h3>
              <p>An E-commerce web for a restaurant. <a href="https://arcenojp.github.io/ITPE-Project-Online-Shop/" target="_blank" rel="noreferrer">Live viewing →</a></p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb">
              <img src="/POS Desktop.png" alt="POS Desktop App" />
              <span className="badge">GitHub</span>
            </div>
            <div className="project-info">
              <h3>POS Desktop App</h3>
              <p>A POS app using JavaSwing. <a href="https://github.com/arcenojp/ITCC121-Project--POS-Desktop-Application.git" target="_blank" rel="noreferrer">View on GitHub →</a></p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb">
              <img src="/SariStock.png" alt="SariStock" />
            </div>
            <div className="project-info">
              <h3>SariStock POS</h3>
              <p>A Web POS system built for Sari2 Store. <a href="https://github.com/arcenojp/SariStock-_POS.git" target="_blank" rel="noreferrer">View on GitHub →</a></p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb">
              <img src="/Awesometodos.png" alt="AwesomeTodos" />
              <span className="badge">Render</span>
            </div>
            <div className="project-info">
              <h3>Awesometodos</h3>
              <p>Simple todo app. <a href="https://awesometodoapp-0gjv.onrender.com/" target="_blank" rel="noreferrer">Live View on Render →</a></p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb">
              <video controls src="/Urban Tastebuds Video.mp4"></video>
              <span className="badge">Video</span>
            </div>
            <div className="project-info">
              <h3>Urban Tastebuds Video</h3>
              <p>I'm an editor for this video.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb">
              <video controls src="/POS Desktop Video.mp4"></video>
              <span className="badge">Video</span>
            </div>
            <div className="project-info">
              <h3>POS Desktop Video</h3>
              <p>I'm an editor and doing voice over for this video.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title"><span>About</span> Me</h2>
        <div className="about-inner">
          <p>Hello! I'm <strong>Alea Ann Forcado</strong>, a 2nd year BSIT student at Western Institute of Technology. I'm passionate about technology and design, constantly working to sharpen my skills in web development and UI/UX.</p>
          <p>I enjoy learning new tools and tackling challenges that push me to grow from coding to designing interfaces in Figma.</p>

          <div className="about-detail">
            <div className="about-row"><span className="label">Birthday</span><span className="value">January 29, 2006</span></div>
            <div className="about-row"><span className="label">Age</span><span className="value">20</span></div>
            <div className="about-row"><span className="label">Course</span><span className="value">BS Information Technology</span></div>
            <div className="about-row"><span className="label">School</span><span className="value">Western Institute of Technology</span></div>
            <div className="about-row"><span className="label">Year</span><span className="value">2nd Year</span></div>
            <div className="about-row"><span className="label">Certificate</span><span className="value">NC II — Computer Systems Servicing (TESDA)</span></div>
          </div>
        </div>
      </section>

      <footer>© 2026 Alea Ann Forcado · Portfolio</footer>
    </>
  );
}

export default App;