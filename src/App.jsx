import React from "react";
import {
  education,
  experience,
  metrics,
  profile,
  projects,
  skills
} from "./resumeData";


const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5 5 8c1 5 6 10 11 11l3-3-4-3-2 2c-2-1-4-3-5-5l2-2z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-5 7-12a7 7 0 0 0-14 0c0 7 7 12 7 12Z" />
    <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4v10" />
    <path d="m8 10 4 4 4-4" />
    <path d="M5 20h14" />
  </svg>
);

function App() {
  return (
    <main className="site-shell antialiased">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>
          {profile.name}
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.availability}</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#contact">
                <MailIcon />
                Contact
              </a>
              <a className="ghost-action" href={profile.resumeUrl}>
                <DownloadIcon />
                Resume
              </a>
            </div>
          </div>

          {/* <div className="hero-visual" aria-label="Resume profile visual">
            <img src="/profile-mark.svg" alt="" />
            <div className="availability-card">
              <span />
              Available for selective projects
            </div>
          </div> */}
        </div>

        <div className="metrics-strip" aria-label="Career metrics">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band about-band" aria-labelledby="about-title">
        <div className="section-inner two-column">
          <div>
            <p className="section-kicker">Profile</p>
            <h2 id="about-title">Frontend & backend depth with cloud and AI fluency.</h2>
          </div>
          <div className="about-copy">
            <p>
              I work across frontend engineering, observability, cloud-native
              systems, and AI-assisted developer workflows. My strongest work
              sits where product-critical interfaces need performance,
              reliability, and thoughtful automation.
            </p>
            <div className="contact-row">
              <span>
                <PinIcon />
                {profile.location}
              </span>
              <a href={`mailto:${profile.email}`}>
                <MailIcon />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <PhoneIcon />
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band" aria-labelledby="skills-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Stack</p>
            <h2 id="skills-title">Engineering depth across UI, cloud, and AI systems.</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-band timeline-band"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2 id="experience-title">Recent roles and measurable outcomes.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div>
                  <span className="period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band work-band" id="work" aria-labelledby="work-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Selected Work</p>
            <h2 id="work-title">Platforms built for scale, insight, and reliability.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-type">{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band" aria-labelledby="education-title">
        <div className="section-inner two-column">
          <div>
            <p className="section-kicker">Education</p>
            <h2 id="education-title">Formal training and foundations.</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let us build reliable systems with sharp user experience.</h2>
        </div>
        <div className="footer-actions">
          <a className="primary-action" href={`mailto:${profile.email}`}>
            <MailIcon />
            Email
          </a>
          {profile.socials.map((social) => (
            <a className="social-link" href={social.href} key={social.label}>
              {social.label}
              <ArrowIcon />
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
