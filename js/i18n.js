/* ============================================================
   CRUNCH — i18n engine
   AZ is baked into markup (default). This swaps EN/RU pre-paint.
   Fires 'langchange' so page scripts can re-render dynamic data.
   ============================================================ */
(function () {
  "use strict";
  var KEY = "crunch-lang";
  var LANGS = ["az", "en", "ru"];
  var dict = window.I18N || {};

  function get() {
    var s = null;
    try { s = localStorage.getItem(KEY); } catch (e) {}
    return LANGS.indexOf(s) > -1 ? s : "az";
  }
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  function apply(lang) {
    var table = dict[lang] || {};
    document.documentElement.lang = lang;
    // text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table[key] != null) el.textContent = table[key];
      else if (lang !== "az") warn(key);
    });
    // attributes: data-i18n-attr="aria-label:nav.open;title:nav.open"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"); if (p.length !== 2) return;
        var v = table[p[1].trim()];
        if (v != null) el.setAttribute(p[0].trim(), v);
      });
    });
    // language switch state
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.lang === lang));
    });
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  var warned = {};
  function warn(k) { if (!warned[k]) { warned[k] = 1; console.warn("[i18n] missing key:", k); } }

  function set(lang) {
    if (LANGS.indexOf(lang) < 0) return;
    save(lang); apply(lang);
  }

  // apply as early as possible (script is in <head> after strings.js)
  var initial = get();
  if (initial !== "az") apply(initial);
  else document.documentElement.lang = "az";

  // wire the switch once the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    // ensure switch reflects state even for AZ default
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.lang === get()));
      b.addEventListener("click", function () { set(b.dataset.lang); });
    });
  });

  window.CRUNCH_I18N = { set: set, get: get };
})();
