import SkillsMarquee from "./components/SkillsMarquee";
import ProjectCard from "./components/ProjectCard";
import HeroSection from "./components/homepage/hero-section";

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
      {/* Hero Section - Full Viewport */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Main Content Container */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 var(--spacing-lg)",
        }}
      >
        {/* About Section */}
        <section id="about" style={{ 
          paddingTop: "var(--spacing-3xl)", 
          paddingBottom: "var(--spacing-3xl)",
          position: 'relative'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: '1rem',
            zIndex: -1
          }} />
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Left Column - Content */}
            <div>
              <h2 style={{ 
                marginBottom: "var(--spacing-xl)",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                position: 'relative',
                display: 'inline-block'
              }}>
                About Me
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                  borderRadius: '2px'
                }} />
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <p style={{ 
                    margin: 0,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.7,
                    fontSize: '1.05rem'
                  }}>
                    I'm a <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Computer Science student</span> and a <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>Software Engineer-to-be</span>, with a strong interest in developing practical, efficient, and scalable software applications.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <p style={{ 
                    margin: 0,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.7,
                    fontSize: '1.05rem'
                  }}>
                    I have explored various domains in software development and have realized a growing passion for <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>backend development</span> and systems, alongside <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>frontend development</span> as the occasion demands.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <p style={{ 
                    margin: 0,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.7,
                    fontSize: '1.05rem'
                  }}>
                    Currently working on improving my skills in <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Java, Python, SQL</span>, and <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>Data Structures</span>. I believe in code that is as simple as possible, yet no simpler.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {/* Skills Highlight */}
              <div style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '1rem',
                textAlign: 'center',
                width: '100%'
              }}>
                <h3 style={{ 
                  margin: '0 0 1rem 0',
                  color: 'var(--color-accent)',
                  fontSize: '1.2rem',
                  fontWeight: 600
                }}>
                  Core Interests
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  justifyContent: 'center'
                }}>
                  {[
                    'Backend Programming',
                    'Full-Stack Apps', 
                    'Data Management',
                    'Problem Solving'
                  ].map((interest, index) => (
                    <span key={index} style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '2rem',
                      fontSize: '0.85rem',
                      color: 'var(--color-text-primary)',
                      backdropFilter: 'blur(5px)'
                    }}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Philosophy Quote */}
              <div style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderLeft: '4px solid var(--color-accent)',
                borderRadius: '0.5rem',
                fontStyle: 'italic',
                position: 'relative'
              }}>
                <p style={{ 
                  margin: 0,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}>
                  "I think in terms of code that is as simple as possible, yet no simpler, with clarity first, then cleverness."
                </p>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  fontSize: '2rem',
                  color: 'var(--color-accent)',
                  opacity: 0.3
                }}>
                  "
                </div>
              </div>

              {/* Learning Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, var(--color-success) 0%, var(--color-accent) 100%)',
                borderRadius: '2rem',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                <span>Always Learning & Building</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
          <h2 style={{ marginBottom: "var(--spacing-xl)" }}>Skills</h2>
          <div>
            <SkillsMarquee skills={skills} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ paddingTop: "var(--spacing-3xl)", paddingBottom: "var(--spacing-3xl)" }}>
          <h2 style={{ marginBottom: "var(--spacing-xl)" }}>Projects</h2>
          <div className="project-grid">
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
          <h2 style={{ marginBottom: "var(--spacing-xl)" }}>Contact</h2>
          <p style={{ marginTop: 0 }}>
            PLACEHOLDER: Contact form and details will be added here.
          </p>
        </section>
      </main>
    </>
  );
}
