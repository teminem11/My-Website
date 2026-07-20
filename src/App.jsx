import { useEffect, useMemo, useState } from "react";
import "./App.css";

const projects = [
  { name: "Chess OOP", repo: "ChessOOP", type: "Java", year: "2026", featured: true, no: "01", description: "A playable console chess engine built around a clean object model, legal move validation, checkmate detection and automated tests.", tags: ["Java", "OOP", "JUnit", "Algorithms"] },
  { name: "Exchange Bot", repo: "ExchangeTelegramBot", type: "Backend", year: "2026", featured: true, no: "02", description: "A Spring Boot Telegram bot that converts currencies with live reference rates, resilient error handling and testable services.", tags: ["Spring Boot", "Telegram API", "REST", "Java 21"] },
  { name: "String Calculator", repo: "String-Calculator", type: "Java", year: "2026", featured: true, no: "03", description: "A production-minded take on the classic kata: custom delimiters, validation, negative-number reporting and a focused test suite.", tags: ["Java", "TDD", "Maven", "JUnit"] },
  { name: "User Management", repo: "MiniProject_UserManagement", type: "Backend", year: "2026", no: "04", description: "User management application exploring structured backend logic, data handling and maintainable Java architecture.", tags: ["Java", "Backend", "CRUD"] },
  { name: "Calculator", repo: "Calculator", type: "Java", year: "2026", no: "05", description: "A focused calculator application developed to practise reliable input handling and core Java fundamentals.", tags: ["Java", "Logic"] },
  { name: "React Vite Project", repo: "react-vite-project", type: "Frontend", year: "2025", no: "06", description: "A modern frontend experiment built with React and Vite, focused on component structure and responsive UI.", tags: ["React", "Vite", "JavaScript"] },
  { name: "Java Files", repo: "Files-Java-", type: "Java", year: "2025", no: "07", description: "Practical Java file-processing exercises covering persistence, parsing and defensive I/O operations.", tags: ["Java", "File I/O"] },
  { name: "Portfolio", repo: "My-Website", type: "Frontend", year: "2026", no: "08", description: "The site you are viewing: a responsive one-page portfolio with a custom visual system and accessible interactions.", tags: ["React", "CSS", "UX"] },
];

const filters = ["All", "Java", "Backend", "Frontend"];
const skills = [
  "Java", "Spring Boot", "React", "JavaScript", "TypeScript", "REST APIs",
  "SQL", "MongoDB", "Maven", "JUnit", "HTML", "CSS", "Git", "GitHub", "IntelliJ IDEA",
];
const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=artempostnov2203@gmail.com&su=Let%27s%20work%20together";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>;
}

function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.type === filter || project.tags.includes(filter)), [filter]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let idleTimer;

    const onScrollActivity = () => {
      setDarkMode(true);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setDarkMode(false), 650);
    };

    window.addEventListener("scroll", onScrollActivity, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollActivity);
      window.clearTimeout(idleTimer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site-shell ${darkMode ? "dark-shift" : ""}`}>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Artem Postnov, home">AP<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href={emailUrl} target="_blank" rel="noreferrer">Let’s talk <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability"><i /> Available for opportunities <span>Dublin, IE</span></div>
            <p className="eyebrow">Software developer · 2026 portfolio</p>
            <h1 id="hero-title">I turn complex<br />ideas into <em>clear</em><br />digital products.</h1>
            <p className="hero-intro">I’m Artem — a Java-focused software developer building reliable backends and thoughtful interfaces.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a>
              <a className="text-link" href="https://github.com/teminem11" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="portrait-stage">
            <div className="portrait-orbit"><span>BUILD · TEST · LEARN · SHIP · </span></div>
            <div className="portrait-halo" />
            <div className="portrait-images">
              <img src={`${import.meta.env.BASE_URL}artem-pixel.png`} alt="Pixel art portrait of Artem Postnov" />
              <img className="portrait-dark" src={`${import.meta.env.BASE_URL}artem-pixel-demon.png`} alt="" aria-hidden="true" />
            </div>
            <div className="portrait-code">{darkMode ? "AP_666" : "AP_01"}<br /><span>{darkMode ? "SYSTEM / CORRUPTED" : "JAVA / REACT"}</span></div>
          </div>
          <a className="scroll-note" href="#about">Scroll to discover <span>↓</span></a>
        </section>

        <section className="marquee" aria-label="Core skills"><div className="marquee-track">{[0, 1].map((group) => <div className="marquee-group" aria-hidden={group === 1} key={group}>{skills.map((skill) => <span key={`${group}-${skill}`}>{skill}<b>✦</b></span>)}</div>)}</div></section>

        <section className="about section-wrap" id="about">
          <div className="section-index">01 / About</div>
          <div className="about-copy">
            <p className="large-copy">I care about the part users see <span>and</span> the architecture they never have to think about.</p>
            <div className="about-columns">
              <p>I’m a software development student at Griffith College in Dublin, specialising in Java and backend systems while building polished frontend experiences with React.</p>
              <p>My approach is simple: understand the problem, design the smallest clear solution, test the important behaviour, then refine every interaction.</p>
            </div>
          </div>
          <div className="about-stats">
            <div><strong>08</strong><span>Public projects</span></div><div><strong>09</strong><span>Core technologies</span></div><div><strong>100%</strong><span>Curious by default</span></div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="work-heading">
            <div><div className="section-index">02 / Selected work</div><h2>Things I’ve<br />made <em>work.</em></h2></div>
            <p>A growing collection of backend systems, Java exercises and web experiences — each one built to learn something real.</p>
          </div>
          <div className="filters" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <div className="project-list">
            {visibleProjects.map((project) => (
              <article className={`project-row ${project.featured ? "featured" : ""}`} key={project.repo}>
                <div className="project-no">{project.no}</div>
                <div className="project-main"><div className="project-meta"><span>{project.type}</span><span>{project.year}</span>{project.featured && <span className="featured-label">Featured</span>}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <a className="project-link" href={`https://github.com/teminem11/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit section-wrap" id="skills">
          <div className="section-index">03 / Toolkit</div>
          <div className="toolkit-layout"><h2>Tools I use to<br /><em>make it happen.</em></h2><div className="skill-groups">
            <div><span>01</span><h3>Backend</h3><p>Java · Spring Boot · REST APIs · Maven · JUnit</p></div>
            <div><span>02</span><h3>Frontend</h3><p>React · JavaScript · TypeScript · HTML · CSS</p></div>
            <div><span>03</span><h3>Data & workflow</h3><p>SQL · MongoDB · Git · GitHub · IntelliJ IDEA</p></div>
          </div></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-top"><div className="section-index">04 / Contact</div><span className="status"><i /> Open to internships & junior roles</span></div>
          <p className="contact-kicker">Have a challenge in mind?</p>
          <h2>Let’s build something<br /><em>worth using.</em></h2>
          <a className="email-link" href={emailUrl} target="_blank" rel="noreferrer">artempostnov2203@gmail.com <span className="email-action">Email me <ArrowIcon /></span></a>
          <div className="contact-bottom"><div className="socials"><a href="https://github.com/teminem11" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/artem-postnov-409385330/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><p>Based in Dublin, Ireland<br />Working worldwide</p></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Artem Postnov</span><span>Designed & built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
