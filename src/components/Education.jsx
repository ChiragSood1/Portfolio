const educationItems = [
  {
    level: "10th Grade",
    subtitle: "Secondary School Certificate",
    school: "St. Columbus School",
    year: "2022",
    score: "85%",
    iconType: "school",
    isCurrent: false,
  },
  {
    level: "12th Grade",
    subtitle: "Senior Secondary Certificate",
    school: "St. Columbus School",
    year: "2024",
    score: "83%",
    iconType: "school",
    isCurrent: false,
  },
  {
    level: "B.Tech in CSE",
    subtitle: "Bachelor of Technology • Computer Science Engineering",
    school: "Manav Rachna University",
    year: "2024–2028",
    score: "CGPA 8.0",
    iconType: "college",
    progressLabel: "Year 2 of 4",
    progressPercent: 50,
    isCurrent: true,
  },
];

function EducationIcon({ type }) {
  if (type === "college") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8.5L12 4l9 4.5-9 4.5L3 8.5Z" />
        <path d="M7.5 11.3v3.2C7.5 16.5 9.5 18 12 18s4.5-1.5 4.5-3.5v-3.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20h16" />
      <path d="M6 20V10l6-4 6 4v10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function Education() {
  return (
    <section id="education" className="education-section reveal-section">
      <div className="education-shell">
        <header className="education-header">
          <p className="education-eyebrow">My Journey</p>
          <h2>Education</h2>
          <div className="education-header-line" aria-hidden="true" />
        </header>

        <div className="education-timeline" aria-label="Education timeline">
          <div className="education-spine" aria-hidden="true" />
          {educationItems.map((item, index) => {
            const isLeft = index === 0 || index === 2;
            const revealDelay = isLeft ? (index === 0 ? 0.3 : 0.6) : 0.6;

            return (
              <article
                key={`${item.level}-${item.year}`}
                className={`education-item ${isLeft ? "is-left" : "is-right"} ${
                  item.isCurrent ? "is-current" : ""
                }`}
                style={{ "--card-delay": `${revealDelay}s` }}
              >
                <div className="education-card-wrap">
                  <div className="education-card">
                    {item.isCurrent && (
                      <div className="education-status-badge">
                        <span className="education-status-dot" aria-hidden="true" />
                        Pursuing
                      </div>
                    )}

                    <div className="education-card-top">
                      <span className="education-card-icon" aria-hidden="true">
                        <EducationIcon type={item.iconType} />
                      </span>
                      <div>
                        <h3>{item.level}</h3>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>

                    <p className="education-school">
                      <span className="education-school-dot" aria-hidden="true" />
                      {item.school}
                    </p>

                    <div className="education-footer-row">
                      <span className="education-year-pill">{item.year}</span>
                      <span className="education-score">{item.score}</span>
                    </div>

                    {item.isCurrent && (
                      <div className="education-progress">
                        <div className="education-progress-meta">
                          <span>{item.progressLabel}</span>
                          <span>{item.progressPercent}%</span>
                        </div>
                        <div className="education-progress-track" aria-hidden="true">
                          <span
                            className="education-progress-fill"
                            style={{ "--progress-target": `${item.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="education-node-wrap" aria-hidden="true">
                  <span className="education-node" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
