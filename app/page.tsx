import SkillsMarquee from "./components/SkillsMarquee";
import ProjectCard from "./components/ProjectCard";

export default function HomePage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "CSS",
    "HTML",
    "Git",
    "Docker",
    "AWS",
  ];

  const projects = [
    {
      title: "PROJECT_TITLE_1",
      description: "PROJECT_DESCRIPTION_1",
      technologies: ["React", "Next.js", "TypeScript"],
      link: "PROJECT_LINK_1",
      github: "PROJECT_GITHUB_1",
    },
    {
      title: "PROJECT_TITLE_2",
      description: "PROJECT_DESCRIPTION_2",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "PROJECT_LINK_2",
      github: "PROJECT_GITHUB_2",
    },
    {
      title: "PROJECT_TITLE_3",
      description: "PROJECT_DESCRIPTION_3",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      link: "PROJECT_LINK_3",
      github: "PROJECT_GITHUB_3",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" style={{ paddingTop: "var(--spacing-3xl)", minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1>Hi, I'm Chirag</h1>
        <p style={{ fontSize: "1.125rem", marginTop: "var(--spacing-lg)" }}>
          I'm a software developer focused on building clean, reliable web applications.
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
        <h2>About Me</h2>
        <p style={{ marginTop: "var(--spacing-lg)" }}>
          PLACEHOLDER: Add your about content here. This section is part of the single-page layout.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
        <h2>Skills</h2>
        <div style={{ marginTop: "var(--spacing-lg)" }}>
          <SkillsMarquee skills={skills} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
        <h2>Projects</h2>
        <div className="project-grid" style={{ marginTop: "var(--spacing-lg)" }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
        <h2>Contact</h2>
        <p style={{ marginTop: "var(--spacing-lg)" }}>
          PLACEHOLDER: Contact form and details will be added here.
        </p>
      </section>
    </>
  );
}
