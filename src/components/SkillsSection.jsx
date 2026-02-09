const skillsMarqueeLine =
  "Java • Python • JavaScript • SQL • HTML5 • CSS3 • Pandas • NumPy • MySQL • Git • GitHub • Postman • VS Code • Jupyter Notebook the data";
const skillsMarqueeItems = skillsMarqueeLine.split(" • ");

function SkillsSection() {
  const marqueeGroups = [0, 1];

  return (
    <section id="skills" className="skills-section reveal-section">
      <div className="skills-shell">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>Core technologies and tools I use to build reliable software.</p>
        </div>

        <div className="skills-marquee" aria-label="Skills marquee">
          <div className="skills-marquee-track">
            {marqueeGroups.map((groupIndex) => (
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

export default SkillsSection;
