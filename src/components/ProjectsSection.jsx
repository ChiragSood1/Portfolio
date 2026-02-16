import { profile } from "../content/portfolio.jsx";

function ProjectsSection() {
  const projects = [
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
      repositoryUrl: `${profile.links.github}?tab=repositories`,
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
          {projects.map((project) => (
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
                >
                  View Repository <span aria-hidden="true">→</span>
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

export default ProjectsSection;
