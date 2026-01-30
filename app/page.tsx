export default function HomePage() {
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
        <p style={{ marginTop: "var(--spacing-lg)" }}>
          PLACEHOLDER: Skills marquee and list will be added here.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
        <h2>Projects</h2>
        <p style={{ marginTop: "var(--spacing-lg)" }}>
          PLACEHOLDER: Project cards and grid will be added here.
        </p>
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