/* ============================================================
   CRUNCH — main: nav drawer, sticky header, reveal-on-scroll
   ============================================================ */
(function () {
  "use strict";

  /* — Sticky header shadow — */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* — Mobile drawer — */
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("drawer");
  var scrim = document.querySelector(".scrim");
  if (toggle && drawer && scrim) {
    var lastFocus = null;
    var openIcon = toggle.querySelector(".icon-open");
    var closeIcon = toggle.querySelector(".icon-close");

    function focusables() {
      return drawer.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    }
    function open() {
      lastFocus = document.activeElement;
      drawer.classList.add("is-open"); scrim.classList.add("is-open");
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true"); // CSS animates the icon off this
      var f = focusables(); if (f.length) f[0].focus();
    }
    function close() {
      drawer.classList.remove("is-open"); scrim.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      if (lastFocus) lastFocus.focus();
    }
    function isOpen() { return drawer.classList.contains("is-open"); }

    toggle.addEventListener("click", function () { isOpen() ? close() : open(); });
    scrim.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) {
      if (!isOpen()) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        var f = focusables(); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    // close drawer if resized to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024 && isOpen()) close();
    });
  }

  /* — Reveal on scroll — */
  var reveals = [].slice.call(document.querySelectorAll(".reveal"));
  reveals.forEach(function (el, i) { el.style.transitionDelay = (Math.min(i % 4, 3) * 60) + "ms"; });

  // Reveal anything whose top has reached the lower part of the viewport.
  // This runs on scroll/resize/load as a hard guarantee: a section can never
  // stay hidden once it's scrolled into view (IntersectionObserver alone can
  // miss fast mobile scrolls or elements shifted horizontally in a carousel).
  function showInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.classList.add("is-visible");
        reveals.splice(i, 1); // done — stop tracking it
      }
    }
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  showInView();
  window.addEventListener("scroll", showInView, { passive: true });
  window.addEventListener("resize", showInView);
  window.addEventListener("load", showInView);
})();
