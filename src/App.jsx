import { FlowFieldCanvas } from "./components/background/FlowFieldCanvas.jsx";
import { profile } from "./content/portfolio.jsx";
import { ColorModeProvider } from "./context/color-mode.jsx";
import { HeroSpotlight } from "./sections/HeroSpotlight.jsx";
import { TopNavigation } from "./sections/TopNavigation.jsx";
import { useEffect } from "react";

function PlaceholderSection({ id, title, copy }) {
  return (
    <section id={id} className="placeholder-section">
      <div className="placeholder-inner">
        {!title && <p className="placeholder-label">{id}</p>}
        {title && <h2>{title}</h2>}
        <p dangerouslySetInnerHTML={{ __html: copy }} />
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".placeholder-section"));
    if (!sections.length) {
      return undefined;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      sections.forEach((section) => section.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ColorModeProvider>
      <FlowFieldCanvas />
      <TopNavigation />

      <div className="site-shell">
        <main className="site-main">
          <HeroSpotlight />

          <PlaceholderSection
            id="about"
            title="About"
            copy="My name is <strong>Chirag Sood</strong>, and I am an enthusiastic programmer passionate about building reliable and meaningful software. I am a quick, self-driven learner who enjoys exploring new technologies and solving problems through code. I have a strong interest in web and backend development, with core skills in <strong>Java, Python, and SQL</strong>, and I focus on writing clean, simple, and maintainable code. I am always open to opportunities that support growth as a software engineer."
          />
          <PlaceholderSection
            id="experience"
            title="Experience"
            copy={`${profile.focus} Experience section will be rebuilt in the next step.`}
          />
          <PlaceholderSection
            id="projects"
            title="Projects"
            copy="Projects grid will be implemented next with independent card logic and hover behavior."
          />
          <PlaceholderSection
            id="skills"
            title="Skills"
            copy="Skills section will be added with clean grouping and restrained interactions."
          />
          <PlaceholderSection
            id="contact"
            title="Contact"
            copy="Contact section and footer will be finalized in the final build step."
          />
        </main>
      </div>
    </ColorModeProvider>
  );
}

export default App;
