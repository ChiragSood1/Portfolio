import { profile } from "../content/portfolio.js";

function splitName(name) {
  return name.split("").map((character, index) => ({
    id: `${character}-${index}`,
    character,
    delay: 0.32 + index * 0.035,
  }));
}

export function HeroSpotlight() {
  const letters = splitName(profile.name);

  return (
    <section id="home" className="hero-wrap">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <div className="hero-content">
        <p className="hero-greeting">{profile.greeting}</p>

        <h1 className="hero-title">
          {letters.map((entry) => (
            <span key={entry.id} style={{ animationDelay: `${entry.delay}s` }}>
              {entry.character === " " ? "\u00A0" : entry.character}
            </span>
          ))}
        </h1>

        <p className="hero-role">{profile.role}</p>
        <p className="hero-copy">{profile.bio}</p>

        <div className="hero-divider" />

        <div className="hero-cta-row">
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="cta-primary">
            View Resume
          </a>
          <a href="#contact" className="cta-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
