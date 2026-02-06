import { FlowFieldCanvas } from "./components/background/FlowFieldCanvas.jsx";
import { profile } from "./content/portfolio.jsx";
import { ColorModeProvider } from "./context/color-mode.jsx";
import { HeroSpotlight } from "./sections/HeroSpotlight.jsx";
import { TopNavigation } from "./sections/TopNavigation.jsx";
import { useEffect } from "react";

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
                <a href="#" onClick={(event) => event.preventDefault()}>
                  👉 View Repository <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a href="#" onClick={(event) => event.preventDefault()}>
            View More Projects <span aria-hidden="true">→</span>
          </a>
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
          <PlaceholderSection
            id="skills"
            title="Skills"
            copy="Skills section will be added with clean grouping and restrained interactions."
          />
          <PlaceholderSection
            id="contact"
            title="Contact"
            copy="Contact section and footer will be finalized in the final build step."
          />
        </main>
      </div>
    </ColorModeProvider>
  );
}

export default App;
