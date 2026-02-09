import { profile } from "../content/portfolio.jsx";

function ContactSection() {
  const phoneDisplay = profile.phone ?? "+1 000 000 0000";

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="contact-section reveal-section">
      <div className="contact-shell">
        <header className="contact-header">
          <h2>Get In Touch</h2>
          <div className="contact-header-line" aria-hidden="true" />
        </header>

        <div className="contact-grid">
          <div className="contact-left">
            <h3>Let&apos;s Connect</h3>
            <p>Have a project in mind or just want to chat? Feel free to reach out!</p>

            <div className="contact-info-list">
              <article className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v2a2 2 0 0 1-2.18 2a19.77 19.77 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6A19.77 19.77 0 0 1 2.12 3.18A2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-value">{phoneDisplay}</p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2l8 6l8-6" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">{profile.email}</p>
                </div>
              </article>
            </div>

            <div className="contact-social">
              <p>Connect with me</p>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <span aria-hidden="true" />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" placeholder="Enter your name" />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="Enter your email" />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows={6} placeholder="Enter your message" />

            <button type="submit">
              Send Message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
