import { useEffect, useState } from "react";
import { navigationItems, profile } from "../content/portfolio.jsx";
import { useColorMode } from "../context/color-mode.jsx";

// Simple icon components
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 16.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-13.5v2m0 14v2M4 12h2m12 0h2M6.3 6.3l1.4 1.4m8.6 8.6l1.4 1.4M17.7 6.3l-1.4 1.4m-8.6 8.6l-1.4 1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 13.4A8.9 8.9 0 1 1 10.6 3a7.2 7.2 0 0 0 10.4 10.4Z" />
    </svg>
  );
}

// Simple scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }
}

export function TopNavigation() {
  const { isDark, toggleMode } = useColorMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navClassName = isScrolled ? "top-nav top-nav-scrolled" : "top-nav";

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className={navClassName}>
      <div className="top-nav-inner">
        {/* Brand logo */}
        <button
          type="button"
          className="brand-mark"
          onClick={() => {
            setMobileMenuOpen(false);
            scrollToSection("home");
          }}
        >
          {profile.name.split(" ")[0]}
        </button>

        {/* Desktop navigation */}
        <nav className="menu-desktop" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="top-actions">
          {/* Theme toggle */}
          <button
            type="button"
            className="theme-button"
            onClick={toggleMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="menu-button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-sheet"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav-sheet"
        className={mobileMenuOpen ? "menu-mobile open" : "menu-mobile"}
      >
        {navigationItems.map((item) => (
          <a
            key={`mobile-${item.id}`}
            href={`#${item.id}`}
            onClick={(event) => handleNavClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
