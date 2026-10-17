import React, { useEffect, useState } from 'react';

const asset = (file) => process.env.PUBLIC_URL + '/' + encodeURI(file);

const sections = ['home', 'skills', 'projects', 'about'];

const skills = ['HTML & CSS', 'JavaScript', 'React', 'PHP', 'Java', 'Python', 'MongoDB', 'Figma', 'Networking', 'Data Science'];

const projects = [
  {
    title: 'Urban Tastebuds',
    img: 'E-commerce.png',
    tag: 'Website',
    desc: 'Online shop website for a restaurant where customers can browse the menu and order food. Project for our ITPE subject.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://arcenojp.github.io/ITPE-Project-Online-Shop/',
    linkText: 'Open site',
  },
  {
    title: 'POS Desktop App',
    img: 'POS Desktop.png',
    tag: 'Desktop',
    desc: 'Point of sale system for our ITCC121 subject. It has a product list with categories, prices and stock quantity.',
    tech: ['Java', 'Java Swing'],
    link: 'https://github.com/arcenojp/ITCC121-Project--POS-Desktop-Application.git',
    linkText: 'GitHub repo',
  },
  {
    title: 'SariStock POS',
    img: 'SariStock.png',
    tag: 'Website',
    desc: 'A web POS and inventory system for a sari-sari store, so the owner can track sales and stocks.',
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/arcenojp/SariStock-_POS.git',
    linkText: 'GitHub repo',
  },
  {
    title: 'AwesomeTodos',
    img: 'Awesometodos.png',
    tag: 'Website',
    desc: 'Simple to-do list app where you can add and manage tasks. Deployed online using Render.',
    tech: ['JavaScript', 'Render'],
    link: 'https://awesometodoapp-0gjv.onrender.com/',
    linkText: 'Open site',
  },
];

const videos = [
  { title: 'Urban Tastebuds Video', src: 'Urban Tastebuds Video.mp4', role: 'Video presentation of our Urban Tastebuds website. I edited this video.' },
  { title: 'POS Desktop Video', src: 'POS Desktop Video.mp4', role: 'Demo video of our POS Desktop App. I edited the video and did the voice over.' },
];

const competencies = [
  'Install and configure computer systems',
  'Set up computer networks',
  'Set up computer servers',
  'Maintain and repair computer systems and networks',
];

function getAge() {
  const today = new Date();
  const bday = new Date(2006, 0, 29);
  let age = today.getFullYear() - bday.getFullYear();
  if (today < new Date(today.getFullYear(), 0, 29)) age--;
  return age;
}

function App() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [viewImg, setViewImg] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec && window.scrollY >= sec.offsetTop - 150) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) current = 'about';
      setActive(current);
      setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('show'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px' }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!viewImg) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setViewImg(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [viewImg]);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="logo">Alea Ann</a>
        <ul className="nav-links">
          {sections.map((id) => (
            <li key={id}>
              <a href={'#' + id} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="home">
          <img className="profile reveal" src={asset('profile.jpg')} alt="Alea Ann Forcado" width="230" height="230" />
          <div className="reveal">
            <p className="hello">Hello, I'm</p>
            <h1>Alea Ann Forcado</h1>
            <p className="course">BSIT 3 - Section 3 | Western Institute of Technology</p>
            <p>
              I'm a 3rd year IT student. I like making websites and designing in Figma,
              and I'm still learning a lot every sem. This page is where I put my projects.
            </p>
            <div className="buttons">
              <a href="#projects" className="btn">See my projects</a>
              <a href="#about" className="btn outline">About me</a>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2 className="reveal">Skills</h2>
          <p className="sub reveal">Things I've learned and used in school and in my own projects.</p>
          <ul className="skills reveal">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>

          <h3 className="cert-title reveal">Certificate</h3>
          <div className="cert reveal">
            <button type="button" className="cert-img" onClick={() => setViewImg(asset('NC2.jpg'))} aria-label="View NC II certificate">
              <img src={asset('NC2.jpg')} alt="NC II Certificate" loading="lazy" />
            </button>
            <div>
              <strong>NC II in Computer Systems Servicing</strong>
              <p>TESDA (Technical Education and Skills Development Authority)</p>
              <p>Issued: May 2, 2024 | Valid until: May 1, 2029</p>
              <p className="list-title">Core competencies:</p>
              <ul className="competencies">
                {competencies.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="reveal">Projects</h2>
          <p className="sub reveal">Some of the stuff I worked on, mostly school projects.</p>
          <div className="projects">
            {projects.map((p) => (
              <article className="card reveal" key={p.title}>
                <div className="thumb">
                  <img src={asset(p.img)} alt={p.title} loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p className="tech">Made with: {p.tech.join(', ')}</p>
                  <a href={p.link} target="_blank" rel="noreferrer">{p.linkText} →</a>
                </div>
              </article>
            ))}
          </div>

          <h3 className="video-title reveal">Videos</h3>
          <div className="projects">
            {videos.map((v) => (
              <article className="card reveal" key={v.title}>
                <div className="thumb">
                  <video controls preload="metadata" src={asset(v.src)}></video>
                </div>
                <div className="card-body">
                  <h3>{v.title}</h3>
                  <p>{v.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about">
          <h2 className="reveal">About Me</h2>
          <div className="reveal">
            <p>
              Hi! I'm Alea Ann Forcado, 3rd year BSIT student from Western Institute of Technology,
              BSIT 3 Section 3. I have an NC II in Computer Systems Servicing so I started with
              hardware, but now I'm more into web development and UI design.
            </p>
            <p>
              Right now I'm practicing React and trying to get better at backend stuff too.
              I also do video editing for some of our project presentations.
            </p>
          </div>

          <table className="info reveal">
            <tbody>
              <tr><th scope="row">Full Name</th><td>Alea Ann M. Forcado</td></tr>
              <tr><th scope="row">Birthday</th><td>January 29, 2006</td></tr>
              <tr><th scope="row">Age</th><td>{getAge()}</td></tr>
              <tr><th scope="row">Course</th><td>BS Information Technology</td></tr>
              <tr><th scope="row">Year & Section</th><td>BSIT 3 - Section 3</td></tr>
              <tr><th scope="row">School</th><td>Western Institute of Technology</td></tr>
              <tr><th scope="row">Certificate</th><td>NC II Computer Systems Servicing (TESDA)</td></tr>
              <tr><th scope="row">Interests</th><td>Web development, UI/UX design, video editing</td></tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>Alea Ann Forcado | BSIT 3 - Section 3 | {new Date().getFullYear()}</footer>

      <button
        type="button"
        className={'to-top' + (scrolled ? ' visible' : '')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>

      {viewImg && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setViewImg(null)}>
          <img src={viewImg} alt="NC II Certificate" />
        </div>
      )}
    </>
  );
}

export default App;
