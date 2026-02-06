import { FlowFieldCanvas } from "./components/background/FlowFieldCanvas.jsx";
import { profile } from "./content/portfolio.js";
import { ColorModeProvider } from "./context/color-mode.jsx";
import { HeroSpotlight } from "./sections/HeroSpotlight.jsx";
import { TopNavigation } from "./sections/TopNavigation.jsx";

function PlaceholderSection({ id, title, copy }) {
  return (
    <section id={id} className="placeholder-section">
      <div className="placeholder-inner">
        <p className="placeholder-label">{id}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </section>
  );
}

function App() {
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
            copy="About module will cover profile narrative, strengths, and delivery style."
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
            id="about"
            title="About"
            copy="About module will cover profile narrative, strengths, and delivery style."
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
