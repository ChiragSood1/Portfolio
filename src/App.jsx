import { FlowFieldCanvas } from "./components/background/FlowFieldCanvas.jsx";
import { ColorModeProvider } from "./context/color-mode.jsx";
import { HeroSpotlight } from "./sections/HeroSpotlight.jsx";
import { TopNavigation } from "./sections/TopNavigation.jsx";
import { useEffect } from "react";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import PlaceholderSection from "./components/PlaceholderSection.jsx";
import { profile } from "./content/portfolio.jsx";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    if (!sections.length) {
      return;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      sections.forEach((section) => section.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
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
          <AboutSection />
          <PlaceholderSection
            id="experience"
            title="Experience"
            copy={`${profile.focus} Experience section will be rebuilt in the next step.`}
          />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </ColorModeProvider>
  );
}

export default App;
