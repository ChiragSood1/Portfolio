export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "4rem",
        padding: "1.5rem",
        textAlign: "center",
        fontSize: "0.875rem",
        color: "#6b7280",
      }}
    >
      © {new Date().getFullYear()} Chirag. All rights reserved.
    </footer>
  );
}