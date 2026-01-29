export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "6rem",
        padding: "2rem 1.5rem",
        textAlign: "center",
        fontSize: "0.875rem",
        color: "var(--color-text-tertiary)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      © {new Date().getFullYear()} Chirag. All rights reserved.
    </footer>
  );
}