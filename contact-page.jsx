/* Contact Page */

function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [topic, setTopic] = React.useState("");

  const topics = [
  "4-Lesson Package",
  "Choosing the right lesson option",
  "General Question"];


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    setError(false);
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/beyondjp.lesson@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          "What can I help you with?": topic,
          message: message,
          _subject: "Beyond Japanese — " + (topic || "Inquiry") + (name ? " from " + name : ""),
          _template: "table",
          _captcha: "false"
        })
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
      e.target.reset();
      setTopic("");
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <main>
        <section className="contact-section" data-screen-label="01 Contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-intro">
                <span className="eyebrow">Contact</span>
                <span className="contact-divider" aria-hidden="true"></span>
                <h1>Let's find the right place to start.</h1>
                <p className="contact-intro-guide">
                  Interested in the 4-Lesson Package?<br />
                  Or simply not sure which lesson option is right for you?
                </p>
                <p className="contact-intro-support">
                  Send me a message and I'll help you find the best next step.
                </p>

                <div className="contact-next">
                  <span className="contact-next-title">What happens next?</span>
                  <ol className="contact-steps">
                    <li>
                      <span className="contact-step-num">1</span>
                      <span className="contact-step-text">Send me a message</span>
                    </li>
                    <li>
                      <span className="contact-step-num">2</span>
                      <span className="contact-step-text">Receive a personal reply within 24 hours</span>
                    </li>
                    <li>
                      <span className="contact-step-num">3</span>
                      <span className="contact-step-text">Choose the lesson option that fits your goals</span>
                    </li>
                  </ol>
                  <p className="contact-next-note">
                    Whether you're planning a trip, starting from zero, or looking for more
                    structured support, I'll help you find the best next step.
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <form onSubmit={handleSubmit}>
                  <div className="contact-field">
                    <label htmlFor="name">Name <span className="req">*</span></label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email">Email <span className="req">*</span></label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="topic">What can I help you with? <span className="req">*</span></label>
                    <select
                    id="topic"
                    name="topic"
                    className={"contact-select" + (topic ? "" : " placeholder")}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required>
                      <option value="" disabled>Select an option</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="message">Message <span className="req">*</span></label>
                    <textarea id="message" name="message" placeholder="Tell me a little about your goals, travel plans, or how you'd like to use Japanese." required></textarea>
                  </div>
                  <button type="submit" className="contact-submit" disabled={sending}>
                    {sending ? "Sending…" : "Send Message"} <Icon name="arrowRight" size={18} />
                  </button>
                  <div className="contact-note">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M8.5 12.5l2.5 2.5 4.5-5"></path>
                    </svg>
                    I typically respond within 24 hours.
                  </div>
                  {sent &&
                  <div className="contact-success show">
                      <Icon name="check" size={18} /> Thank you! Your message has been sent.
                    </div>
                  }
                  {error &&
                  <div className="contact-error show">
                      Sorry, something went wrong. Please email beyondjp.lesson@gmail.com directly.
                    </div>
                  }
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactPage />);
