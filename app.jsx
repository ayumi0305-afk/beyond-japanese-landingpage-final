/* Beyond Japanese — App */

function App() {
  // Soft reveal on scroll
  React.useEffect(() => {
    const els = document.querySelectorAll(".section, .hero-content");
    els.forEach((el) => el.classList.add("reveal"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <DesignedFor />
        <AboutAyumi />
        <Practical />
        <Portal />
        <Testimonials />
        <Timeline />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
