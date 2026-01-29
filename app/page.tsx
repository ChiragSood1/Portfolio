export default function HomePage() {
  return (
    <section
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Hi, I'm Chirag</h1>

      <div style={{ maxWidth: "65ch", marginTop: "2rem" }}>
        <h2>
          I'm a software developer focused on building clean, reliable web
          applications. I enjoy working with modern web technologies and
          continuously improving my problem-solving skills.
        </h2>

        <h2 style={{ marginTop: "1.5rem", fontWeight: 400 }}>
          This portfolio showcases my work and experiments as I grow as a
          developer.
        </h2>
      </div>
    </section>
  );
}
