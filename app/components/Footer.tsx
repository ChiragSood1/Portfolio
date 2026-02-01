export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "6rem",
        padding: "3rem 1.5rem",
        textAlign: "center",
        fontSize: "0.8rem",
        color: "var(--color-text-tertiary)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
    >
      © {new Date().getFullYear()} Chirag Sood. All rights reserved.
    </footer>
  );
}
