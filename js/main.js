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
      toggle.setAttribute("aria-expanded", "true");
      if (openIcon) openIcon.style.display = "none";
      if (closeIcon) closeIcon.style.display = "block";
      var f = focusables(); if (f.length) f[0].focus();
    }
    function close() {
      drawer.classList.remove("is-open"); scrim.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      if (openIcon) openIcon.style.display = "block";
      if (closeIcon) closeIcon.style.display = "none";
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
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.01 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 60) + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
