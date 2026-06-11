/* Beyond Japanese — vanilla interactivity (no framework, no build) */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    initReveal();
    initHero();
    initAbout();
    initPortal();
    initTestimonials();
    initFAQ();
    initContact();
    initNav();
    initHashScroll();
  });

  /* ---- Scroll reveal (bulletproof: never leaves content hidden) ---- */
  function initReveal() {
    var els = [].slice.call(document.querySelectorAll(".section, .hero-content"));
    els.forEach(function (el) { el.classList.add("reveal"); });

    function revealInView() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (el) {
        if (el.classList.contains("in")) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh - 40 && r.bottom > 0) el.classList.add("in");
      });
    }

    // Reveal whatever is already on screen right away.
    revealInView();

    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
        });
      }, { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });
      els.forEach(function (el) { if (!el.classList.contains("in")) obs.observe(el); });
    }

    // Fallbacks so content is never stuck hidden.
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);
    window.addEventListener("load", revealInView);
    setTimeout(revealInView, 200);
    setTimeout(function () { els.forEach(function (el) { el.classList.add("in"); }); }, 2500);
  }

  /* ---- Hero slideshow ---- */
  function initHero() {
    var imgs = document.querySelectorAll(".hero-image .hero-photo");
    if (imgs.length < 2) return;
    var i = 0;
    setInterval(function () {
      imgs[i].classList.remove("active");
      i = (i + 1) % imgs.length;
      imgs[i].classList.add("active");
    }, 5000);
  }

  /* ---- About photo carousel ---- */
  function initAbout() {
    var wrap = document.querySelector(".about-photo");
    if (!wrap) return;
    var imgs = wrap.querySelectorAll(".about-img");
    var dots = wrap.querySelectorAll(".dot");
    if (!imgs.length) return;
    var i = 0, timer;
    function show(n) {
      i = (n + imgs.length) % imgs.length;
      imgs.forEach(function (im, idx) { im.classList.toggle("active", idx === i); });
      dots.forEach(function (d, idx) { d.classList.toggle("active", idx === i); });
    }
    function start() { timer = setInterval(function () { show(i + 1); }, 4800); }
    function reset() { clearInterval(timer); start(); }
    var prev = wrap.querySelector(".about-arrow-prev");
    var next = wrap.querySelector(".about-arrow-next");
    if (prev) prev.addEventListener("click", function () { show(i - 1); reset(); });
    if (next) next.addEventListener("click", function () { show(i + 1); reset(); });
    dots.forEach(function (d, idx) { d.addEventListener("click", function () { show(idx); reset(); }); });
    show(0); start();
  }

  /* ---- Portal dashboard carousel ---- */
  function initPortal() {
    var frame = document.querySelector(".portal-mock-frame");
    if (!frame) return;
    var imgs = frame.querySelectorAll(".mock-img");
    var dots = frame.querySelectorAll(".mock-dot");
    if (!imgs.length) return;
    var i = 0;
    function show(n) {
      i = (n + imgs.length) % imgs.length;
      imgs.forEach(function (im, idx) { im.classList.toggle("active", idx === i); });
      dots.forEach(function (d, idx) { d.classList.toggle("active", idx === i); });
    }
    var prev = frame.querySelector(".mock-nav.prev");
    var next = frame.querySelector(".mock-nav.next");
    if (prev) prev.addEventListener("click", function () { show(i - 1); });
    if (next) next.addEventListener("click", function () { show(i + 1); });
    dots.forEach(function (d, idx) { d.addEventListener("click", function () { show(idx); }); });
    show(0);
  }

  /* ---- Testimonials infinite carousel ---- */
  function initTestimonials() {
    var carousel = document.querySelector(".tcarousel");
    var track = carousel && carousel.querySelector(".tcarousel-track");
    if (!track) return;
    var real = [].slice.call(track.children);
    var total = real.length;
    if (!total) return;
    var dots = [].slice.call(document.querySelectorAll(".tcarousel-dots .tcarousel-dot"));
    var perView, index;

    function buildClones() {
      track.innerHTML = "";
      var lead = real.slice(total - perView);
      var trail = real.slice(0, perView);
      lead.concat(real, trail).forEach(function (n) { track.appendChild(n.cloneNode(true)); });
    }
    function place(anim) {
      track.style.transition = anim ? "" : "none";
      track.style.transform = "translateX(calc(-" + index + " * (100% + 24px) / var(--tpv)))";
      if (!anim) { void track.offsetWidth; track.style.transition = ""; }
    }
    function activeReal() { return ((index - perView) % total + total) % total; }
    function updateDots() {
      var a = activeReal();
      dots.forEach(function (d, idx) { d.classList.toggle("active", idx === a); });
    }
    function go(dir) { index += dir; place(true); updateDots(); }
    function setup() {
      perView = window.innerWidth <= 640 ? 1 : 2;
      carousel.style.setProperty("--tpv", perView);
      buildClones();
      index = perView;
      place(false);
      updateDots();
    }
    track.addEventListener("transitionend", function () {
      if (index >= perView + total) { index -= total; place(false); }
      else if (index < perView) { index += total; place(false); }
      updateDots();
    });
    var prev = carousel.querySelector(".tcarousel-prev");
    var next = carousel.querySelector(".tcarousel-next");
    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });
    dots.forEach(function (d, idx) {
      d.addEventListener("click", function () { index = perView + idx; place(true); updateDots(); });
    });
    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        var pv = window.innerWidth <= 640 ? 1 : 2;
        if (pv !== perView) setup();
      }, 150);
    });
    setup();
  }

  /* ---- FAQ accordion (single open) ---- */
  function initFAQ() {
    var qs = document.querySelectorAll(".faq-q");
    qs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        if (!item) return;
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach(function (o) {
          o.classList.remove("open");
          var b = o.querySelector(".faq-q");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      });
    });
  }

  /* ---- Contact form ---- */
  function initContact() {
    var form = document.querySelector(".contact-card form");
    if (!form) return;
    var select = form.querySelector("#topic");
    if (select) {
      select.addEventListener("change", function () {
        select.classList.toggle("placeholder", !select.value);
      });
    }
    var btn = form.querySelector(".contact-submit");
    var success = form.querySelector(".contact-success");
    var error = form.querySelector(".contact-error");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#message").value.trim();
      var topic = select ? select.value : "";
      if (error) error.classList.remove("show");
      var label = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      fetch("https://formsubmit.co/ajax/beyondjp.lesson@gmail.com", {
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
      }).then(function (res) {
        if (!res.ok) throw new Error("send failed");
        if (success) success.classList.add("show");
        form.reset();
        if (select) select.classList.add("placeholder");
      }).catch(function () {
        if (error) error.classList.add("show");
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.innerHTML = label; }
      });
    });
  }

  /* ---- "Lessons" nav: smooth-scroll when pricing is on this page ---- */
  function initNav() {
    document.querySelectorAll('a[href="index.html#pricing"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var el = document.getElementById("pricing");
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    });
  }

  /* ---- Scroll to hash target on load (offset for sticky header) ---- */
  function initHashScroll() {
    if (!location.hash) return;
    var id = location.hash.slice(1);
    var tries = 0;
    function tryScroll() {
      var t = document.getElementById(id);
      if (t) {
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 92, behavior: "auto" });
        if (tries++ < 8) setTimeout(tryScroll, 120);
      } else if (tries++ < 24) {
        setTimeout(tryScroll, 60);
      }
    }
    setTimeout(tryScroll, 80);
    window.addEventListener("load", tryScroll);
  }
})();
