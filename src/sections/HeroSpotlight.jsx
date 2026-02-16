import { profile } from "../content/portfolio.jsx";

function HeroSpotlight() {
  // Split name into individual letters for animation
  const nameLetters = profile.name.split("").map((letter, index) => ({
    id: `${letter}-${index}`,
    character: letter,
    delay: 0.32 + index * 0.035,
  }));

  return (
    <section id="home" className="hero-wrap">
      {/* Background orbs for visual effect */}
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <div className="hero-content">
        <p className="hero-greeting">{profile.greeting}</p>

        <h1 className="hero-title">
          {nameLetters.map((letter) => (
            <span key={letter.id} style={{ animationDelay: `${letter.delay}s` }}>
              {letter.character === " " ? "\u00A0" : letter.character}
            </span>
          ))}
        </h1>

  <p className="hero-role">{profile.role}</p>
  <p className="hero-copy">{profile.bio}</p>

        <div className="hero-divider" />

        <div className="hero-cta-row">
          <a href={profile.links.resume} download="Chirag_Sood_Resume.pdf" className="cta-primary">
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

export { HeroSpotlight };
