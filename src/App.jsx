import { FlowFieldCanvas } from "./components/background/FlowFieldCanvas.jsx";
import { profile } from "./content/portfolio.jsx";
import { ColorModeProvider } from "./context/color-mode.jsx";
import { HeroSpotlight } from "./sections/HeroSpotlight.jsx";
import { TopNavigation } from "./sections/TopNavigation.jsx";
import { useEffect } from "react";

const skillsMarqueeLine =
  "Java • Python • JavaScript • SQL • HTML5 • CSS3 • Pandas • NumPy • MySQL • Git • GitHub • Postman • VS Code • Jupyter Notebook the data";
const skillsMarqueeItems = skillsMarqueeLine.split(" • ");

function PlaceholderSection({ id, title, copy }) {
  return (
    <section id={id} className="placeholder-section reveal-section">
      <div className="placeholder-inner">
        {!title && <p className="placeholder-label">{id}</p>}
        {title && <h2>{title}</h2>}
        <p dangerouslySetInnerHTML={{ __html: copy }} />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section reveal-section">
      <div className="about-layout">
        <div className="about-media" aria-hidden="true" />

        <div className="about-content">
          <p className="about-tag">
            <span aria-hidden="true">●</span> About Me
          </p>
          <h2 className="about-heading">
            Transforming Ideas into <span>Digital Experiences</span>
          </h2>
          <p className="about-copy">
            I am Chirag Sood, a software engineer who builds reliable interfaces from concept to
            launch. I focus on product clarity, performance, and maintainable implementation.
          </p>
          <p className="about-copy">
            With experience across React, TypeScript, Java, Python, and SQL, I enjoy turning
            complex requirements into polished user-facing systems that teams can ship and scale.
          </p>

          <div className="about-stats">
            <article className="about-stat-card">
              <p className="about-stat-value">10+</p>
              <p className="about-stat-label">Technologies Known</p>
            </article>
            <article className="about-stat-card">
              <p className="about-stat-value">6+</p>
              <p className="about-stat-label">Projects Built</p>
            </article>
            <article className="about-stat-card">
              <p className="about-stat-value">100+ (ongoing)</p>
              <p className="about-stat-label">Contributions</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projectPlaceholders = [
    {
      name: "Student Directory Management System",
      subtitle: "Spring Boot · MySQL · Spring Security",
      description:
        "A REST-first backend application for managing student records with secure role-based access, bulk data handling, and automated reporting for academic performance.",
      highlights: [
        "Full CRUD with pagination and filtering",
        "JWT-based authentication and authorization",
        "Excel import/export and email notifications",
      ],
      stack: ["Spring Boot", "MySQL", "Spring Security", "JPA"],
      repositoryUrl: "#",
    },
    {
      name: "Personal Finance Tracker (CLI)",
      subtitle: "Core Java · Streams · Apache POI",
      description:
        "A command-line application that processes bank statements, categorizes transactions using regex rules, and generates monthly expense summaries for financial analysis.",
      highlights: [
        "CSV parsing and stream-based aggregation",
        "Excel report generation for income vs expenses",
        "High unit-test coverage for reliability",
      ],
      stack: ["Java", "Java Streams", "Apache POI", "JUnit"],
      repositoryUrl: "https://github.com/ChiragSood1/Finance-Tracker-App",
    },
    {
      name: "SmartCheck — Smart Attendance System",
      subtitle: "React · TypeScript · Firebase",
      description:
        "A web-based attendance system that enables students to mark attendance using QR, GPS, and face verification, while providing dashboards and an AI assistant for academic tracking.",
      highlights: [
        "Multi-factor attendance verification (QR, GPS, face recognition)",
        "Real-time dashboard for attendance insights and activity",
        "Rule-based AI assistant with optional cloud integration",
      ],
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
      repositoryUrl: "https://github.com/ChiragSood1/SmartCheck",
    },
  ];

  return (
    <section id="projects" className="projects-section reveal-section">
      <div className="projects-shell">
        <div className="projects-header">
          <h2>Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills in backend systems,
            developer tooling, and modern web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projectPlaceholders.map((project) => (
            <article key={project.name} className="project-showcase-card">
              <h3>{project.name}</h3>
              <p className="project-card-subtitle">{project.subtitle}</p>
              <p className="project-card-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-tech-row" aria-label={`${project.name} technologies`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-action-row">
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (project.repositoryUrl === "#") {
                      event.preventDefault();
                    }
                  }}
                >
                  👉 View Repository <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a href="https://github.com/ChiragSood1" target="_blank" rel="noreferrer">
            View More Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="skills-section reveal-section">
      <div className="skills-shell">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>Core technologies and tools I use to build reliable software.</p>
        </div>

        <div className="skills-marquee" aria-label="Skills marquee">
          <div className="skills-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="skills-marquee-group"
                aria-hidden={groupIndex === 1 ? "true" : undefined}
              >
                {skillsMarqueeItems.map((skill) => (
                  <span key={`${groupIndex}-${skill}`} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const phoneDisplay = profile.phone ?? "+1 000 000 0000";

  return (
    <section id="contact" className="contact-section reveal-section">
      <div className="contact-shell">
        <header className="contact-header">
          <h2>Get In Touch</h2>
          <div className="contact-header-line" aria-hidden="true" />
        </header>

        <div className="contact-grid">
          <div className="contact-left">
            <h3>Let&apos;s Connect</h3>
            <p>Have a project in mind or just want to chat? Feel free to reach out!</p>

            <div className="contact-info-list">
              <article className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v2a2 2 0 0 1-2.18 2a19.77 19.77 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6A19.77 19.77 0 0 1 2.12 3.18A2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-value">{phoneDisplay}</p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2l8 6l8-6" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">{profile.email}</p>
                </div>
              </article>
            </div>

            <div className="contact-social">
              <p>Connect with me</p>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <span aria-hidden="true" />
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" placeholder="Enter your name" />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="Enter your email" />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows={6} placeholder="Enter your message" />

            <button type="submit">
              Send Message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".reveal-section"));
    if (!sections.length) {
      return undefined;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      sections.forEach((section) => section.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ColorModeProvider>
      <FlowFieldCanvas />
      <TopNavigation />

      <div className="site-shell">
        <main className="site-main">
          <HeroSpotlight />

          <AboutSection />
          <PlaceholderSection
            id="experience"
            title="Experience"
            copy={`${profile.focus} Experience section will be rebuilt in the next step.`}
          />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </ColorModeProvider>
  );
}

export default App;
