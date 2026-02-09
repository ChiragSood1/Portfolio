import { profile } from "../content/portfolio.jsx";

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

export default AboutSection;
