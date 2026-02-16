import { useState } from "react";
import { profile } from "../content/portfolio.jsx";

function ContactSection() {
  const phoneDisplay = profile.phone ?? "+1 000 000 0000";
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");
    const data = new FormData(event.target);
    try {
      const res = await fetch("https://formspree.io/f/mqedbeal", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        event.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://github.com/ChiragSood1"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Enter your name" />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="Enter your email" />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={6} placeholder="Enter your message" />

            <button type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending…" : "Send Message"}
              <span aria-hidden="true">→</span>
            </button>
            {formStatus === "success" && (
              <p className="form-success">Message sent! I'll get back to you soon.</p>
            )}
            {formStatus === "error" && (
              <p className="form-error">Something went wrong. Please email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
