/* ============================================================
   CRUNCH — Shared geolocation: find the visitor's nearest branch
   and fill any [data-nearest-*] slots. Menu is identical at every
   branch, so this is presentation only (no per-store menu yet).
   ============================================================ */
(function () {
  "use strict";
  if (!window.STORES) return;

  function lang() { return window.CRUNCH_I18N ? window.CRUNCH_I18N.get() : "az"; }
  function distKm(a, b, c, d) {
    var R = 6371, p = Math.PI / 180;
    var x = 0.5 - Math.cos((c - a) * p) / 2 + Math.cos(a * p) * Math.cos(c * p) * (1 - Math.cos((d - b) * p)) / 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function nearest(lat, lng) {
    var best = null, bd = Infinity;
    window.STORES.forEach(function (s) {
      var dkm = distKm(lat, lng, s.lat, s.lng);
      if (dkm < bd) { bd = dkm; best = s; }
    });
    return best;
  }
  function apply(store) {
    var l = lang();
    document.querySelectorAll("[data-nearest-name]").forEach(function (e) { e.textContent = store.name; });
    document.querySelectorAll("[data-nearest-addr]").forEach(function (e) { e.textContent = store.address[l] || store.address.az; });
    document.querySelectorAll("[data-nearest-store]").forEach(function (e) { e.textContent = store.name; });
    document.querySelectorAll("[data-nearest-banner]").forEach(function (e) { e.hidden = false; });
  }

  window.CRUNCH_NEAREST = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      var s = nearest(pos.coords.latitude, pos.coords.longitude);
      if (s) { window.CRUNCH_NEAREST = s; apply(s); }
    }, function () {}, { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 });
  }
  document.addEventListener("langchange", function () { if (window.CRUNCH_NEAREST) apply(window.CRUNCH_NEAREST); });
})();
