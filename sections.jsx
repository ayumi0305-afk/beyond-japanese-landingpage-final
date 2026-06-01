/* Beyond Japanese — Section Components */

const BOOK_TRIAL = "https://cal.com/beyond-japanese-lesson/30min";
const BOOK_50MIN = "https://cal.com/beyond-japanese-lesson/50min";

const Icon = ({ name, size = 22, color }) => {
  const icons = {
    plane: <g><path d="M3 12l18-7-7 18-2-8-9-3z" /></g>,
    messageCircle: <g><path d="M21 12a8 8 0 0 1-11.3 7.3L3 21l1.7-6.7A8 8 0 1 1 21 12z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></g>,
    torii: <g><path d="M3 6c4 1 14 1 18 0" /><path d="M3 9h18" /><path d="M6 9v12" /><path d="M18 9v12" /><path d="M9 13h6" /></g>,
    landmark: <g><line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" /></g>,
    handshake: <g><path d="M11 17l2 2a1 1 0 0 0 1.4 0L20 13l-2-2" /><path d="M4 11l5-5a1 1 0 0 1 1.4 0l3 3 1.6-1.6a1 1 0 0 1 1.4 0L20 11" /><path d="M11 17l-3-3a1 1 0 0 1 0-1.4l2-2" /><path d="M4 11l3 3" /></g>,
    chat: <path d="M21 12a8 8 0 0 1-11.3 7.3L3 21l1.7-6.7A8 8 0 1 1 21 12z" />,
    heart: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 7c-2.5 4.5-9.5 9-9.5 9z" />,
    sun: <g><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></g>,
    check: <path d="M5 12l5 5L20 7" />,
    arrowRight: <path d="M5 12h14M13 5l7 7-7 7" />,
    chevron: <path d="M6 9l6 6 6-6" />,
    chevronLeft: <path d="M15 18l-6-6 6-6" />,
    chevronRight: <path d="M9 18l6-6-6-6" />,
    cup: <g><path d="M3 8h13v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" /><path d="M16 10h2a3 3 0 0 1 0 6h-2" /><path d="M7 3v3M11 3v3" /></g>,
    bag: <g><path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z" /><path d="M9 8V5a3 3 0 0 1 6 0v3" /></g>,
    train: <g><rect x="5" y="3" width="14" height="15" rx="3" /><path d="M5 11h14" /><circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" /><path d="M8 21l-1 1M16 21l1 1" /></g>,
    pin: <g><path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></g>,
    shop: <g><path d="M3 9l2-5h14l2 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /><path d="M3 9h18" /></g>,
    leaf: <g><path d="M5 19c8 0 14-6 14-14 0-1 0-1.5-.2-2-5 0-13 2-13 10 0 2 .5 4 1 6z" /><path d="M5 19c2-5 6-9 10-11" /></g>,
    medal: <g><circle cx="12" cy="9" r="6" /><path d="M9.5 14.2 L7.5 21 L12 18.2 L16.5 21 L14.5 14.2" /><path d="M12 6.5l1 2 2.2.2-1.7 1.5.6 2.1L12 11.2 9.9 12.3l.6-2.1L8.8 8.7l2.2-.2z" /></g>,
    users: <g><circle cx="9" cy="8.5" r="3.2" /><path d="M3.5 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5" /><path d="M16 6.2a3 3 0 0 1 0 5.6" /><path d="M17.6 19c0-2.3-1-4-2.6-4.8" /></g>,
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    note: <g><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></g>,
    arrowLeftCircle: <g><circle cx="12" cy="12" r="10" /><path d="M14 8l-4 4 4 4" /></g>,
    arrowRightCircle: <g><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></g>,
    cal: <g><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" style={{ stroke: "rgb(13, 122, 153)" }} /></g>,
    wallet: <g><path d="M3 7h15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a2 2 0 0 1-2-2V7z" style={{ stroke: "rgb(13, 122, 153)" }} /><path d="M3 7V5a2 2 0 0 1 2-2h11" /><circle cx="17" cy="14" r="1.5" /></g>,
    instagram: <g><rect x="3" y="3" width="18" height="18" rx="5" style={{ stroke: "rgb(183, 51, 64)" }} /><circle cx="12" cy="12" r="4" style={{ stroke: "rgb(183, 51, 64)" }} /><circle cx="17.5" cy="6.5" r="1" stroke="none" style={{ fill: "rgb(183, 51, 64)" }} /></g>
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "25px", height: "25px", ...(color ? { stroke: color } : {}) }}>
      {icons[name]}
    </svg>);

};

const Photo = ({ tone = "green", label }) =>
<div className={`photo-placeholder tone-${tone}`}>
    <span className="photo-label">{label}</span>
  </div>;


const ImgFill = ({ src, alt }) =>
<img src={src} alt={alt} className="img-fill" loading="lazy" />;


// ---- HEADER ----
function Header() {
  return (
    <header className="header" data-screen-label="01 Header">
      <div className="header-inner">
        <a href="index.html" className="logo" aria-label="Beyond Japanese — back to home">
          <img src="images/logo.png" alt="Beyond Japanese" className="logo-img" />
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="about.html">About</a>
          <a href="index.html#pricing">Lessons</a>
          <a href="faq.html">FAQ</a>
          <a href="contact.html">Contact</a>
          <a href="https://www.instagram.com/beyond_japanese.ayumi/" target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
        </nav>
        <a href={BOOK_TRIAL} target="_blank" rel="noopener" className="btn btn-primary btn-sm">Book Your Trial Lesson</a>
      </div>
    </header>);

}

// ---- HERO ----
function Hero() {
  const slides = [
  "images/arashiyama-pond.jpg",
  "images/arashiyama-back.JPG",
  "images/kiyomizu-dera.jpg",
  "images/to-ji.jpg"];

  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="hero" data-screen-label="02 Hero">
      <div className="hero-image" aria-hidden="true">
        {slides.map((src, idx) =>
        <img
          key={src}
          src={src}
          alt=""
          className={`hero-photo${idx === i ? " active" : ""}`}
          loading={idx === 0 ? "eager" : "lazy"} />

        )}
      </div>
      <div className="hero-fade" aria-hidden="true"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Learn Japanese. Connect more deeply.</p>        <h1 className="h-display"><span className="hero-h1-line">Explore Beyond</span><br /><span className="hero-h1-indent hero-h1-line">with Japanese</span></h1>
        <p className="hero-sub">
          Beginner-friendly Japanese lessons for travelers and Japan lovers who want more
          than just phrases — they want connection.
        </p>
        <div className="hero-ctas">
          <a href={BOOK_TRIAL} target="_blank" rel="noopener" className="btn btn-primary">
            Book Your Trial Lesson <Icon name="arrowRight" size={18} />
          </a>
        </div>
        <p className="hero-support">Language changes the way you experience a place.</p>
      </div>
    </section>);

}

// Refined editorial icon set used only by the DesignedFor benefit grid.
// Larger viewBox + thinner strokes give a more boutique-magazine feel.
const BenefitIcon = ({ name }) => {
  const paths = {
    // Tilted paper plane — recognizable PaperPlaneTilt shape
    plane:
    <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 6 L6 22 L20 27 L42 6 Z" />
        <path d="M42 6 L26 42 L20 27 Z" />
        <path d="M20 27 L26 42" />
      </g>,

    // Two overlapping speech bubbles (ChatsCircle)
    messageCircle:
    <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 8 a14 14 0 0 1 12 21 l 1.5 6 a0.8 0.8 0 0 1 -1 1 l -6.2 -1.5 A14 14 0 0 1 18 32" />
        <path d="M30 24 a12 12 0 1 0 -22.5 6 L 6 35.5 a0.8 0.8 0 0 0 1 1 l 5.5 -1.5 A 12 12 0 0 0 30 24 z" />
      </g>,

    // Torii gate — recognizable Japanese shrine gateway
    landmark:
    <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Top crossbar (kasagi) — curves up at ends */}
        <path d="M4 12 C 10 8, 38 8, 44 12" />
        {/* Second crossbar (nuki) */}
        <line x1="9" y1="16" x2="39" y2="16" />
        {/* Central vertical brace (gakuzuka) */}
        <line x1="24" y1="12" x2="24" y2="16" />
        {/* Left post (hashira) */}
        <line x1="12" y1="16" x2="9" y2="42" />
        {/* Right post */}
        <line x1="36" y1="16" x2="39" y2="42" />
      </g>,

    // Two people (Users icon) — for personal guidance
    handshake:
    <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Left person */}
        <circle cx="18" cy="16" r="6" />
        <path d="M6 38 c 0 -7, 5 -12, 12 -12 s 12 5 12 12" />
        {/* Right person — slightly behind */}
        <circle cx="33" cy="13" r="5" />
        <path d="M30 26 c 1 -1, 3 -1.5, 5 -1.5 c 5 0, 8 4, 8 9" />
      </g>

  };
  return (
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
      {paths[name]}
    </svg>);

};

// ---- DESIGNED FOR JAPAN LOVERS ----
function DesignedFor() {
  const items = [
  {
    icon: "icon-plane.png",
    title: "Planning a trip to Japan",
    desc: "Build confidence before you arrive."
  },
  {
    icon: "icon-chats.png",
    title: "Want practical Japanese",
    desc: "Learn language you'll actually use."
  },
  {
    icon: "icon-torii.png",
    title: "Love Japanese culture",
    desc: "Connect more deeply with Japan beyond the guidebooks."
  },
  {
    icon: "icon-users.png",
    title: "Prefer personal guidance",
    desc: "Learn at your own pace with personalized support."
  }];

  return (
    <section className="section section-cream" data-screen-label="03 Designed For">
      <div className="container">
        <div className="section-head designed-head">
          <h2 className="h-section designed-title" style={{ color: "rgb(13, 122, 153)" }}>Designed for Japan lovers and travelers</h2>
          <p className="designed-sub">
            Beyond Japanese is for people who want more than just phrases.<br />
            You'll learn practical Japanese you can use — and enjoy the journey along the way.
          </p>
        </div>
        <div className="benefit-grid">
          {items.map((it) =>
          <article className="benefit-card" key={it.title}>
              <div className="benefit-icon" aria-hidden="true">
                <img src={`images/${it.icon}`} alt="" loading="lazy" />
              </div>
              <div className="benefit-text">
                <h3 className="benefit-title" style={{ color: "rgb(183, 51, 64)" }}>{it.title}</h3>
                <p className="benefit-desc">{it.desc}</p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

// ---- ABOUT AYUMI ----
function AboutAyumi() {
  const photos = [
  { src: "images/ayumi-arashiyama.JPEG", alt: "Ayumi walking through Arashiyama" },
  { src: "images/ayumi-flower.JPG", alt: "Ayumi with flowers" },
  { src: "images/ayumi-kimono.jpg", alt: "Ayumi in kimono" },
  { src: "images/ayumi-kyudo.jpg", alt: "Ayumi practicing kyudo" }];

  const [i, setI] = React.useState(0);
  const go = (dir) => setI((v) => (v + dir + photos.length) % photos.length);
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % photos.length), 4800);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="section section-white" id="about" data-screen-label="04 About Ayumi">
      <div className="container">
        <div className="about">
          <div className="about-photo">
            {photos.map((p, idx) =>
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className={`about-img${idx === i ? " active" : ""}`}
              loading={idx === 0 ? "eager" : "lazy"} />

            )}
            <button className="about-arrow about-arrow-prev" onClick={() => go(-1)} aria-label="Previous photo">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button className="about-arrow about-arrow-next" onClick={() => go(1)} aria-label="Next photo">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <div className="dots">
              {photos.map((_, idx) =>
              <button
                key={idx}
                className={`dot${idx === i ? " active" : ""}`}
                onClick={() => setI(idx)}
                aria-label={`Photo ${idx + 1}`} />

              )}
            </div>
          </div>
          <div className="about-content">
            <span className="about-eyebrow-word" style={{ fontSize: "25px", fontWeight: "500" }}>About</span>
            <span className="about-eyebrow-word" style={{ fontFamily: "\"Plus Jakarta Sans\"", fontWeight: "700", color: "rgb(88, 56, 34)", fontSize: "45px" }}>AYUMI
</span>
            <h2>A certified Japanese teacher and warm learning partner.</h2>
            <p className="lead">
              Ayumi creates calm, personalized lessons where communication matters more
              than perfection. Lessons can include Kyoto life, travel situations, seasonal
              culture, anime, manga, or structured grammar — always at your pace.
            </p>
            <a href="about.html" className="about-link" style={{ color: "rgb(183, 51, 64)" }}>
              Read Ayumi's story <Icon name="arrowRight" size={18} color="rgb(183, 51, 64)" />
            </a>
          </div>
        </div>
      </div>
    </section>);
}

// ---- PRACTICAL JAPANESE ----
function Practical() {
  const scenes = [
  {
    src: "images/cafe.png",
    title: "Cafés & Restaurants",
    desc: "Practice ordering naturally, asking questions politely, and enjoying local dining experiences with confidence."
  },
  {
    src: "images/konbini.jpeg",
    pos: "26% 32%",
    title: "Convenience Stores",
    desc: "Learn useful konbini phrases for checkout, shopping, and everyday situations during your trip."
  },
  {
    src: "images/station.jpeg",
    title: "Transportation & Directions",
    desc: "Navigate Japanese stations, trains, and ticket machines more comfortably and confidently."
  },
  {
    src: "images/street.jpeg",
    pos: "70% center",
    title: "Real Conversations",
    desc: "Build confidence in natural conversations, greetings, and small everyday interactions in Japan."
  }];

  return (
    <section className="section section-cream" id="lessons" data-screen-label="05 Practical Japanese">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Real moments</span>
          <h2 className="h-section" style={{ color: "rgb(88, 56, 34)" }}>Practical Japanese<br />for real moments</h2>
          <p className="lead">Lessons grounded in the everyday Japan you'll actually experience — from konbini counters to quiet train platforms.</p>
        </div>
        <div className="scenes-grid">
          {scenes.map((s) =>
          <article className="scene-card" key={s.title}>
              <img src={s.src} alt="" className="scene-bg" loading="lazy" style={s.pos ? { objectPosition: s.pos } : undefined} />
              <div className="scene-wash" aria-hidden="true"></div>
              <div className="scene-overlay">
                <h3 className="scene-title">{s.title}</h3>
                <p className="scene-desc">{s.desc}</p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

// ---- STUDENT PORTAL ----
function Portal() {
  return (
    <section className="section section-large section-white" data-screen-label="06 Student Portal">
      <div className="container">
        <div className="portal">
          <div className="portal-content">
            <span className="eyebrow">Your ecosystem</span>
            <h2 className="h-section" style={{ color: "rgb(88, 56, 34)" }}>Your Personal<br />Learning Space</h2>
            <p className="lead">
              Say goodbye to scattered notes. Access your personalized curriculum,
              track your progress, and review flashcards in a beautiful, distraction-free dashboard.
            </p>
            <div className="portal-features">
              <div className="portal-feat">
                <span className="portal-check"><Icon name="check" size={14} /></span>
                Real-time progress tracking
              </div>
              <div className="portal-feat">
                <span className="portal-check"><Icon name="check" size={14} /></span>
                Custom digital flashcard sets
              </div>
              <div className="portal-feat">
                <span className="portal-check"><Icon name="check" size={14} /></span>
                Lesson recordings &amp; notes history
              </div>
            </div>
          </div>
          <div className="portal-mock-wrap">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>);

}

function DashboardMock() {
  const slides = [
  { src: "images/1_dashboad.jpg", label: "Dashboard overview" },
  { src: "images/2_anouncement.jpg", label: "Announcements" },
  { src: "images/3_quiz.jpg", label: "Quiz & review" },
  { src: "images/4_spredsheet.jpg", label: "Vocabulary sheet" }];

  const [i, setI] = React.useState(0);
  const go = (dir) =>
  setI((v) => (v + dir + slides.length) % slides.length);
  return (
    <div className="portal-mock-frame">
      <button
        className="mock-nav prev"
        onClick={() => go(-1)}
        aria-label="Previous screen">
        
        <Icon name="chevronLeft" size={22} />
      </button>
      <div className="portal-mock">
        <div className="portal-mock-inner">
          {slides.map((s, idx) =>
          <img
            key={s.src}
            src={s.src}
            alt={s.label}
            className={`mock-img${idx === i ? " active" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"} />

          )}
        </div>
      </div>
      <button
        className="mock-nav next"
        onClick={() => go(1)}
        aria-label="Next screen">
        
        <Icon name="chevronRight" size={22} />
      </button>
      <div className="mock-dots" aria-hidden="true">
        {slides.map((_, idx) =>
        <button
          key={idx}
          className={`mock-dot${idx === i ? " active" : ""}`}
          onClick={() => setI(idx)}
          aria-label={`Screen ${idx + 1}`} />

        )}
      </div>
    </div>);

}

// ---- TESTIMONIALS ----
function Testimonials() {
  const items = [
  {
    q: "Ayumi is an amazing Sensei! She has a lot of patience, is open for questions and she is encouraging! I would recommend Ayumi as your teacher. I hope for more people to have a sensei like Ayumi. Her instructions, material and explanations are easy to follow.",
    name: "Mark", meta: "Netherlands · 3 months"
  },
  {
    q: "Ayumi Sensei has a nice personality, she is fun and so good at teaching. I would recommend her for anyone who wants to learn and enjoy Japanese at the same time. She answers my questions swiftly and loves to learn about my culture, which really makes me happy. 10/10 ⭐",
    name: "Eissa", meta: "UAE · 1.5 years"
  },
  {
    q: "Ayumi is such an amazing teacher. She's patient, calm, and makes every conversation flow so naturally. I enjoy our lessons so much that I often lose track of time. Thanks to her, I can really feel my communication and self-expression improving lesson by lesson.",
    name: "Bernard", meta: "US · 8 months"
  },
  {
    q: "Ayumi-san has been a great tutor; I have no complaints. She is very patient and helpful in lessons and I like her lesson structure.",
    name: "Nate", meta: "US · 1.5 years"
  }];

  const [index, setIndex] = React.useState(0);
  const [perView, setPerView] = React.useState(3);
  const count = items.length;
  const maxIndex = Math.max(0, count - perView);

  React.useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w <= 640 ? 1 : w <= 980 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  React.useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, count - perView)));
  }, [perView, count]);

  const go = (dir) => setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));

  return (
    <section className="section section-cream" data-screen-label="07 Testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">From students</span>
          <h2 className="h-section" style={{ color: "rgb(88, 56, 34)" }}>Real words from real students</h2>
        </div>
        <div className="tcarousel" style={{ "--tpv": perView }}>
          <button className="tcarousel-arrow tcarousel-prev" onClick={() => go(-1)} disabled={index === 0} aria-label="Previous reviews">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>

          <div className="tcarousel-viewport">
            <div className="tcarousel-track" style={{ transform: `translateX(calc(-${index} * (100% + 24px) / var(--tpv)))` }}>
              {items.map((t) =>
              <div className="tcarousel-slide" key={t.name}>
                  <blockquote className="testimonial">
                    <span className="testimonial-mark" aria-hidden="true">"</span>
                    <p className="testimonial-quote">{t.q}</p>
                    <div className="testimonial-by">
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-meta">{t.meta}</div>
                    </div>
                  </blockquote>
                </div>
              )}
            </div>
          </div>

          <button className="tcarousel-arrow tcarousel-next" onClick={() => go(1)} disabled={index === maxIndex} aria-label="Next reviews">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>

        <div className="tcarousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) =>
          <button
            key={i}
            className={"tcarousel-dot" + (i === index ? " active" : "")}
            onClick={() => setIndex(i)}
            aria-label={`Go to page ${i + 1}`} />
          )}
        </div>
      </div>
    </section>);

}

// Editorial step icons for the 50-minute lesson flow.
const StepIcon = ({ name }) => {
  const paths = {
    chats:
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 12 a13 13 0 0 1 11 19.6 L 42.4 38 a0.8 0.8 0 0 1 -1 1 l -6.4 -1.5 A 13 13 0 0 1 19 33" />
        <path d="M30 26 a11 11 0 1 0 -21 4 L 7.5 35 a0.7 0.7 0 0 0 0.9 0.9 L 13 34.5 A 11 11 0 0 0 30 26 z" />
        <circle cx="14" cy="26" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="26" r="1" fill="currentColor" stroke="none" />
        <circle cx="24" cy="26" r="1" fill="currentColor" stroke="none" />
      </g>,

    book:
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 14 C 20 11, 12 10, 6 11 L 6 38 C 12 37, 20 38, 24 41" />
        <path d="M24 14 C 28 11, 36 10, 42 11 L 42 38 C 36 37, 28 38, 24 41" />
        <line x1="24" y1="14" x2="24" y2="41" />
      </g>,

    mic:
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="6" width="12" height="22" rx="6" />
        <path d="M10 24 a14 14 0 0 0 28 0" />
        <line x1="24" y1="38" x2="24" y2="44" />
        <line x1="18" y1="44" x2="30" y2="44" />
      </g>,

    clipboard:
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="28" height="34" rx="3" />
        <rect x="17" y="4" width="14" height="8" rx="2" />
        <line x1="16" y1="22" x2="32" y2="22" />
        <line x1="16" y1="28" x2="32" y2="28" />
        <line x1="16" y1="34" x2="26" y2="34" />
      </g>

  };
  return (
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
      {paths[name]}
    </svg>);

};

// ---- TIMELINE ----
function Timeline() {
  const steps = [
  {
    icon: "chats",
    phase: "01",
    title: "Warm-up Conversation",
    time: "5–10",
    desc: "Settle in with a relaxed chat — no script, no pressure. Just easing into Japanese the way a real conversation actually begins."
  },
  {
    icon: "book",
    phase: "02",
    title: "Learn Useful Japanese",
    time: "15",
    desc: "Pick up phrases you'll genuinely reach for — ordering, asking, connecting — explained simply and tied to situations you'll really meet."
  },
  {
    icon: "mic",
    phase: "03",
    title: "Speaking & Shadowing Practice",
    time: "15–20",
    desc: "The heart of the lesson. Say it out loud, echo natural speech, and feel the words start to land — this is where confidence is built.",
    featured: true
  },
  {
    icon: "clipboard",
    phase: "04",
    title: "Review & Support",
    time: "5–10",
    desc: "Close with a gentle recap and notes to keep, so you leave each lesson knowing exactly what you can already do."
  }];

  return (
    <section className="section section-white" data-screen-label="08 Timeline">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Inside a lesson</span>
          <h2 className="h-section" style={{ color: "rgb(88, 56, 34)" }}>What happens in a<br />50-minute lesson?</h2>
          <p className="lead">Relaxed, practical, and beginner-friendly — here's how the time actually feels, minute by minute.</p>
        </div>
        <div className="journey">
          {steps.map((s) =>
          <div className={"journey-step" + (s.featured ? " featured" : "")} key={s.title}>
              <div className="journey-rail" aria-hidden="true">
                <span className="journey-dot"></span>
                <div className="journey-time">
                  <span className="journey-time-num">{s.time}</span>
                  <span className="journey-time-unit">min</span>
                </div>
              </div>
              <div className="journey-card">
                <div className="journey-card-top">
                  <span className="journey-icon" aria-hidden="true"><StepIcon name={s.icon} /></span>
                </div>
                <div className="journey-card-body">
                  <h3 className="journey-title"><span className="journey-num">{s.phase}</span><span className="journey-sep" aria-hidden="true"> • </span>{s.title}</h3>
                  <p className="journey-desc">{s.desc}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ---- PRICING ----
function Pricing() {
  const tiers = [
  {
    name: "Trial Lesson",
    price: "$15",
    unit: "30 min",
    desc: "Meet Ayumi, discuss your goals, and experience a real Japanese conversation in a relaxed setting.",
    cta: "Start Here",
    href: BOOK_TRIAL
  },
  {
    name: "Single Lesson",
    price: "$35",
    unit: "50 min",
    desc: "A personalized lesson tailored to your travel plans, interests, and conversation goals.",
    cta: "Book a Lesson",
    href: BOOK_50MIN
  },
  {
    name: "4-Lesson Package",
    price: "$130",
    unit: "4 lessons",
    note: "($32.50 per lesson)",
    desc: "Build confidence steadily through consistent practice and personalized guidance.",
    cta: "Start Your Learning Plan",
    href: "contact.html",
    featured: true,
    badge: "Most Popular"
  }];

  return (
    <section className="section section-large section-cream" id="pricing" data-screen-label="09 Pricing">
      <div className="container">
        <header className="pricing-head">
          <span className="eyebrow">Start your journey</span>
          <h2 className="h-section">Choose the learning style<br />that fits your journey.</h2>
          <p className="pricing-sub">
            Start with a trial lesson, book individual sessions when you need them, or build
            confidence through a structured 4-lesson package.
          </p>
        </header>
        <div className="pricing-grid">
          {tiers.map((t) =>
          <article className={`price-card${t.featured ? " featured" : ""}`} key={t.name}>
              <h3 className="price-name" style={{ color: "rgb(88, 56, 34)" }}>{t.name}</h3>
              <div className="price-amount">{t.price}</div>
              <div className="price-unit">{t.unit}</div>
              <div className="price-note">{t.note || "\u00A0"}</div>
              <span className="price-rule" aria-hidden="true"></span>
              <p className="price-desc">{t.desc}</p>
              {t.badge &&
            <span className="price-badge" style={{ fontSize: "14px" }}>{t.badge}</span>
            }
              <a
              className={t.featured ? "price-link price-link-featured" : "price-link"}
              href={t.href}
              target={t.href.startsWith("http") ? "_blank" : undefined}
              rel={t.href.startsWith("http") ? "noopener" : undefined} style={{ color: t.featured ? "rgb(198, 60, 71)" : "rgb(13, 122, 153)" }}>
                {t.cta} <Icon name="arrowRight" size={18} />
              </a>
            </article>
          )}
        </div>
        <div className="pricing-cta">
          <div className="pricing-note">
            <span><Icon name="cal" size={16} /> Trial booking via Cal.com</span>
            <span><Icon name="wallet" size={16} /> Continuing lessons via Wise or PayPal</span>
          </div>
        </div>
      </div>
    </section>);

}

// ---- FAQ ----
function FAQ() {
  const [open, setOpen] = React.useState(-1);
  const items = [
  {
    q: "Do I need to know any Japanese before starting?",
    a: "Not at all. Most students start as complete beginners. I'll begin from where you are — even if that's hiragana from scratch — and build at a pace that feels comfortable."
  },
  {
    q: "How long are the lesson sessions?",
    a: "Trial lessons are 30 minutes so you can meet Ayumi without pressure. Regular private lessons are 50 minutes, which gives time for conversation, learning, and practice without rushing."
  },
  {
    q: "What happens if I need to reschedule?",
    a: "Life happens. You can reschedule up to 24 hours before your lesson at no charge — just send me a message and I'll find a new time that works."
  }];

  return (
    <section className="section section-large section-white" id="faq" data-screen-label="10 FAQ">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section" style={{ color: "rgb(88, 56, 34)" }}>Common Questions</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) =>
          <div className={`faq-item${open === i ? " open" : ""}`} key={it.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{it.q}</span>
                <Icon name="chevron" size={20} />
              </button>
              {open === i && <div className="faq-a">{it.a}</div>}
            </div>
          )}
        </div>
        <div className="faq-more-wrap">
          <a href="faq.html" className="faq-more">
            View More Questions <Icon name="arrowRight" size={16} color="#0d7a99" />
          </a>
        </div>
      </div>
    </section>);

}

// ---- FINAL CTA ----
function FinalCTA() {
  return (
    <section className="final-cta" id="book" data-screen-label="11 Final CTA">
      <div className="final-cta-split">
        <div className="final-cta-photo-pane">
          <img src="images/footer.JPG" alt="" className="final-cta-photo" />
        </div>
        <div className="final-cta-text-pane">
          <div className="final-cta-content">
            <h2>Japan becomes different when you can connect through language.</h2>
            <p className="lead">
              You are not just signing up for Japanese lessons. You are starting a deeper relationship with Japan.
            </p>
            <a href={BOOK_TRIAL} target="_blank" rel="noopener" className="btn btn-cta-light">
              Book Your Trial Lesson <Icon name="arrowRight" size={18} color="#1f5266" />
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ---- FOOTER ----
function Footer() {
  return (
    <footer className="footer" id="contact" data-screen-label="12 Footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="index.html" className="logo" style={{ marginBottom: 0 }}>
              <img src="images/logo.png" alt="Beyond Japanese" className="logo-img" />
            </a>
            <p className="footer-tag">Calm, beginner-friendly Japanese lessons for travelers and Japan lovers — built around real life, not textbooks.</p>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <a href="#about">About</a>
            <a href="index.html#pricing">Lessons</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="terms-policies.html">Terms &amp; Policies</a>
            <a href="legal.html">Legal Notice</a>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <a href="contact.html">Contact Form</a>
            <a href="https://www.instagram.com/beyond_japanese.ayumi/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Beyond Japanese. Based in Kyoto, Japan.</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, {
  Icon, Photo, Header, Hero, DesignedFor, AboutAyumi, Practical,
  Portal, DashboardMock, Testimonials, Timeline, Pricing, FAQ, FinalCTA, Footer
});