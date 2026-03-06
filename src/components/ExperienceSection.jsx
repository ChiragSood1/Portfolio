const experienceItems = [
  {
    role: "Campus Crew Ambassador",
    organization: "HackerRank",
    duration: "Jan 2026 - Present",
    context: "Campus Program",
    highlights: [
      "Organized 3+ coding contests and workshops, reaching 200+ students across campus.",
      "Grew campus participation in HackerRank challenges by actively recruiting peers through social media and classroom outreach.",
      "Served as the direct liaison between HackerRank and student community, relaying feedback to improve contest experience.",
    ],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="experience-section reveal-section">
      <div className="experience-shell">
        <header className="experience-header">
          <h2>Experience</h2>
          <div className="experience-header-line" aria-hidden="true" />
        </header>

        <div className="experience-timeline" aria-label="Professional experience timeline">
          <div className="experience-spine" aria-hidden="true" />

          {experienceItems.map((item) => (
            <article key={`${item.role}-${item.duration}`} className="experience-item">
              <span className="experience-node" aria-hidden="true" />

              <div className="experience-card">
                <h3>{item.role}</h3>
                <p className="experience-org">{item.organization}</p>

                <div className="experience-meta">
                  <span>{item.duration}</span>
                  <span>{item.context}</span>
                </div>

                <ul className="experience-points">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
