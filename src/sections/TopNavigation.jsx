import { useEffect, useMemo, useState } from "react";
import { navigationItems, profile } from "../content/portfolio.jsx";
import { useColorMode } from "../context/color-mode.jsx";

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 16.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-13.5v2m0 14v2M4 12h2m12 0h2M6.3 6.3l1.4 1.4m8.6 8.6l1.4 1.4M17.7 6.3l-1.4 1.4m-8.6 8.6l-1.4 1.4" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 13.4A8.9 8.9 0 1 1 10.6 3a7.2 7.2 0 0 0 10.4 10.4Z" />
    </svg>
  );
}

function scrollToSection(sectionId, closeMenu) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  closeMenu();
  window.setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 120);
}

export function TopNavigation() {
  const { isDark, toggleMode } = useColorMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const shellClassName = useMemo(() => {
    if (scrolled) {
      return "top-nav top-nav-scrolled";
    }
    return "top-nav";
  }, [scrolled]);

  return (
    <header className={shellClassName}>
      <div className="top-nav-inner">
        <button
          type="button"
          className="brand-mark"
          onClick={() => scrollToSection("home", () => setOpen(false))}
        >
          {profile.name.split(" ")[0]}
        </button>

        <nav className="menu-desktop" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id, () => setOpen(false));
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <button
            type="button"
            className="theme-button"
            onClick={toggleMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <IconSun /> : <IconMoon />}
          </button>

          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-nav-sheet"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav-sheet" className={open ? "menu-mobile open" : "menu-mobile"}>
        {navigationItems.map((item) => (
          <a
            key={`mobile-${item.id}`}
            href={`#${item.id}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(item.id, () => setOpen(false));
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
