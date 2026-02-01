'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const links = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const headerBgColor = isDark ? "rgba(10, 14, 20, 0.5)" : "rgba(250, 250, 248, 0.6)";
  const borderColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "1rem 1.5rem",
        transition: "all var(--transition-base)",
        borderBottom: `1px solid var(--color-border)`,
      }}
    >
      {/* Subtle backdrop with minimal blur for texture visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(3px)",
          backgroundColor: headerBgColor,
          borderBottom: `1px solid ${borderColor}`,
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <Link 
          href="#home" 
          style={{ 
            fontWeight: 700, 
            color: "var(--color-text-primary)",
            fontSize: "1.125rem",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.5px",
            transition: "all var(--transition-fast)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
        >
          Chirag
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <nav>
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      transition: "color var(--transition-fast)",
                      paddingBottom: "3px",
                      borderBottom: "1.5px solid transparent",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent)";
                      e.currentTarget.style.borderBottomColor = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-text-secondary)";
                      e.currentTarget.style.borderBottomColor = "transparent";
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Theme Toggle */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
