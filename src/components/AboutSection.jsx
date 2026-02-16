import { profile } from "../content/portfolio.jsx";

function AboutSection() {
  return (
    <section id="about" className="about-section reveal-section">
      <div className="about-layout">
        <div className="about-media">
          <img
            src="/profile.jpg"
            alt="Chirag Sood"
            className="about-profile-img"
          />
        </div>

        <div className="about-content">
          <p className="about-tag">
            <span aria-hidden="true">●</span> About Me
          </p>
          <h2 className="about-heading">
            Engineering <span>Reliable Backend Systems</span>
          </h2>
          <p className="about-copy">
            I am Chirag Sood, a software engineer who builds reliable backend systems from concept to
            production. I focus on system clarity, performance, and maintainable implementation.
          </p>
          <p className="about-copy">
            With experience across Java, Spring Boot, Python, TypeScript, and SQL, I enjoy turning
            complex requirements into clean, maintainable backend systems that teams can ship and scale.
          </p>

          <div className="about-stats">
            <article className="about-stat-card">
              <p className="about-stat-value">15+</p>
              <p className="about-stat-label">Technologies Known</p>
            </article>
            <article className="about-stat-card">
              <p className="about-stat-value">6+</p>
              <p className="about-stat-label">Projects Built</p>
            </article>
            <article className="about-stat-card">
              <p className="about-stat-value">100+</p>
              <p className="about-stat-label">Contributions</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
