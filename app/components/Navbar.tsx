import Link from "next/link";

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
        borderBottom: "1px solid #e5e7eb",
        padding: "1rem 1.5rem",
        backgroundColor: "#ffffff",
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
        <Link href="/" style={{ fontWeight: 600 }}>
          Chirag
        </Link>

        <nav>
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "#374151",
                    fontSize: "0.95rem",
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}