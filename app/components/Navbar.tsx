import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Photos", href: "/photos" },
  ];

  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "1rem 1.5rem",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>
          Chirag
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.95rem",
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