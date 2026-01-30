'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--spacing-md) var(--spacing-lg)",
        backgroundColor: "var(--color-bg)",
        backdropFilter: "blur(10px)",
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link 
          href="#home" 
          style={{ 
            fontWeight: 600, 
            color: "var(--color-text-primary)",
            fontSize: "1.25rem",
            fontFamily: "var(--font-sans)",
          }}
        >
          Chirag
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-lg)",
          }}
        >
          <nav>
            <ul style={{ display: "flex", gap: "var(--spacing-lg)", listStyle: "none" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      transition: "color var(--transition-fast)",
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}