function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about your next build.</h1>
        <p className="section-description">
          Available for freelance projects, product work, and thoughtful engineering conversations.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-actions">
          <a
            className="contact-button primary-button"
            href="mailto:tomiwapelumi2@gmail.com"
          >
            <span className="button-label">Email</span>
            <span className="button-value">tomiwapelumi2@gmail.com</span>
          </a>

          <a
            className="contact-button secondary-button"
            href="tel:+2349060256522"
          >
            <span className="button-label">Call / WhatsApp</span>
            <span className="button-value">09060256522</span>
          </a>

          <a
            className="contact-button tertiary-button"
            href="https://zoom.us/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="button-label">Book a Zoom call</span>
            <span className="button-value">Schedule a conversation</span>
          </a>
        </div>

        <div className="contact-meta">
          <p>Response time: usually within 24 hours.</p>
          <p>Based in Nigeria, working with clients worldwide.</p>
        </div>
      </div>

      <div className="social-row" aria-label="Social links">
        <a href="https://x.com/tomiwakorole?s=11" target="_blank" rel="noreferrer" className="social-link">
          X
        </a>
        <a href="https://github.com/tomiwakorole" target="_blank" rel="noreferrer" className="social-link">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact