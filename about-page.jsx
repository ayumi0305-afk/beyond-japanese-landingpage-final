/* About Page */

const BOOK_TRIAL_URL_ABOUT = "https://cal.com/beyond-japanese-lesson/30min";

// Finely-drawn icons on a 48 viewBox — scale up large with a thin elegant stroke.
function AboutIcon({ name }) {
  const paths = {
    medal:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 28.5 L16 42 L22.5 38.5 M27 28.5 L32 42 L25.5 38.5" />
        <path d="M24 4.5 L27 7.7 L31.4 6.9 L31.9 11.2 L35.9 13.1 L33.8 17 L35.9 20.9 L31.9 22.8 L31.4 27.1 L27 26.3 L24 29.5 L21 26.3 L16.6 27.1 L16.1 22.8 L12.1 20.9 L14.2 17 L12.1 13.1 L16.1 11.2 L16.6 6.9 L21 7.7 Z" />
        <circle cx="24" cy="17" r="6.4" />
      </g>,
    pin:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5 a14 14 0 0 1 14 14 c0 9.5-14 24-14 24 S10 28.5 10 19 A14 14 0 0 1 24 5 z" />
        <circle cx="24" cy="19" r="5.4" />
      </g>,
    heart:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 40 C 6 28, 6 14.5, 15 12 C 20.3 10.5, 23 14, 24 17 C 25 14, 27.7 10.5, 33 12 C 42 14.5, 42 28, 24 40 Z" />
      </g>,
    chat:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 12 h26 a3.5 3.5 0 0 1 3.5 3.5 v14 a3.5 3.5 0 0 1 -3.5 3.5 H22 l-8 7 v-7 h-3 a3.5 3.5 0 0 1 -3.5 -3.5 V15.5 A3.5 3.5 0 0 1 11 12 z" />
      </g>,
    cup:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 19 h23 v9 a9 9 0 0 1 -9 9 H19 a9 9 0 0 1 -9 -9 z" />
        <path d="M33 21 h3.5 a4.5 4.5 0 0 1 0 9 H33" />
        <path d="M17 6 q2.5 2.5 0 5 M24 6 q2.5 2.5 0 5 M31 6 q2.5 2.5 0 5" />
      </g>,
    users:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18.5" cy="16" r="6.2" />
        <path d="M7 39 c0-6.3 5.1-11.4 11.5-11.4 S30 32.7 30 39" />
        <path d="M32 11.2 a5 5 0 0 1 0 9.6" />
        <path d="M34 39 c0-5.4-2.3-9.4-6-11" />
      </g>,
    leaf:
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 38 C 27 38, 40 24, 40 7 C 23 7, 10 21, 10 38 Z" />
        <path d="M11 38 C 17 28, 27 17, 35 13" />
      </g>
  };
  return (
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
      {paths[name]}
    </svg>);

}

function AboutPage() {
  const credentials = [
  {
    icon: "medal",
    title: "Certified Japanese Teacher",
    desc: "Official qualification with years of teaching experience."
  },
  {
    icon: "pin",
    title: "Based in Kyoto",
    desc: "Bringing local insights and cultural context to every lesson."
  },
  {
    icon: "heart",
    title: "Lessons for Real Life",
    desc: "Practical, personal, and supportive — designed around your goals."
  }];

  const principles = [
  {
    icon: "chat",
    title: "Language is\nconnection.",
    desc: "Speak with people, not just textbooks."
  },
  {
    icon: "cup",
    title: "Small moments\nmatter.",
    desc: "A simple greeting can change an experience."
  },
  {
    icon: "users",
    title: "Closer to people,\ncloser to Japan.",
    desc: "Language helps you understand the culture behind the words."
  },
  {
    icon: "leaf",
    title: "Learn with\nconfidence.",
    desc: "Progress comes from support, not perfection."
  }];

  const renderTitle = (title) =>
  title.split("\n").map((line, i, arr) =>
  <React.Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
  );

  return (
    <div className="about-page">
      <Header />
      <main>
        {/* Top intro: photo left, text right */}
        <section className="about-intro" data-screen-label="01 About Intro">
          <div className="container">
            <div className="about-intro-grid">
              <div className="about-intro-photo">
                <img src="images/ayumi-arashiyama.JPEG" alt="Ayumi in Kyoto" />
              </div>
              <div className="about-intro-text">
                <span className="about-eyebrow-label">About Beyond Japanese</span>
                <span className="about-divider" aria-hidden="true"></span>
                <h1 className="about-serif" style={{ fontFamily: "\"Plus Jakarta Sans\"", color: "rgb(88, 56, 34)" }}>Japanese learning shaped by real human connection.</h1>
                <p>
                  Beyond Japanese was created for people who want Japan to become more than a destination —
                  a place they can feel connected to through language and culture.
                </p>
                <p>
                  Here, you'll learn practical Japanese for real-life situations with a teacher who understands
                  both the beauty and the everyday life of Japan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story panel: copy left, credentials right */}
        <section className="about-panel" data-screen-label="02 About Story">
          <div className="about-panel-inner">
            <div className="story-grid">
              <div className="story-copy">
                <span className="about-eyebrow-label">Ayumi's Story</span>
                <h2 className="about-serif">Helping you connect with Japan through language.</h2>
                <p>I'm Ayumi, a certified Japanese teacher based in Kyoto.</p>
                <p>
                  I created Beyond Japanese for people who want more than textbook phrases — people who want
                  to feel comfortable, connected, and confident when using Japanese in real life.
                </p>
                <p>
                  My lessons combine practical communication, cultural insight, and personalized support so that
                  learning Japanese becomes part of your everyday journey.
                </p>
              </div>
              <div className="story-credentials">
                {credentials.map((c) =>
                <div className="credential" key={c.title}>
                    <div className="credential-icon" aria-hidden="true">
                      <AboutIcon name={c.icon} />
                    </div>
                    <div className="credential-text">
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section" data-screen-label="03 Philosophy">
          <div className="container">
            <div className="philosophy-head">
              <span className="about-eyebrow-label">Ayumi's Philosophy</span>
              <h2 className="about-serif">
                Language turns places into <span className="underline-accent">memories</span>.
              </h2>
              <p className="philosophy-sub">
                Learning Japanese isn't only about words.<br />
                It's about feeling more connected to the people, places, and moments that make Japan memorable.
              </p>
            </div>
            <div className="philosophy-grid">
              {principles.map((p) =>
              <div className="philosophy-item" key={p.title}>
                  <div className="philosophy-icon" aria-hidden="true">
                    <AboutIcon name={p.icon} />
                  </div>
                  <h3>{renderTitle(p.title)}</h3>
                  <span className="philosophy-rule" aria-hidden="true"></span>
                  <p>{p.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Closing line + CTA */}
        <section className="about-close" data-screen-label="04 About Close">
          <p>I'm honored to be part of your Japanese learning journey.</p>
          <p className="accent">Let's take the next step together.</p>
          <a
            href={BOOK_TRIAL_URL_ABOUT}
            target="_blank"
            rel="noopener"
            className="btn btn-primary">
            Book Your Trial Lesson <Icon name="arrowRight" size={18} />
          </a>
        </section>
      </main>
      <Footer />
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AboutPage />);