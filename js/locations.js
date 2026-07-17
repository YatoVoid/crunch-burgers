/* ============================================================
   CRUNCH — Locations: store cards + interactive Leaflet map.
   Live open/closed badge in Asia/Baku time. Cards link to map
   markers; geolocation highlights the nearest branch.
   Re-renders on 'langchange'.
   ============================================================ */
(function () {
  "use strict";
  var WOLT = "https://wolt.com/az/aze/baku/restaurant/crunch-burger";
  var root = document.getElementById("stores-root");
  var mapEl = document.getElementById("map");
  if (!root || !window.STORES) return;

  var map = null, markers = {}, cards = {}, nearestId = null;

  function lang() { return window.CRUNCH_I18N ? window.CRUNCH_I18N.get() : "az"; }
  function t(key, l) { var table = (window.I18N || {})[l] || {}; return table[key] != null ? table[key] : key; }
  function bakuHour() {
    try { return parseInt(new Date().toLocaleString("en-US", { timeZone: "Asia/Baku", hour12: false, hour: "2-digit" }), 10); }
    catch (e) { return new Date().getHours(); }
  }
  function fmt(h) { return (h < 10 ? "0" + h : h) + ":00"; }

  function render() {
    var l = lang();
    var hour = bakuHour();
    root.innerHTML = "";
    cards = {};

    window.STORES.forEach(function (store) {
      var open = hour >= store.openHour && hour < store.closeHour;
      var card = document.createElement("article");
      card.className = "card store-card";
      card.dataset.storeId = store.id;
      if (store.id === nearestId) card.classList.add("is-nearest");

      var body = document.createElement("div");
      body.className = "body";

      var top = document.createElement("div");
      top.className = "store-top";
      var h3 = document.createElement("h3");
      h3.textContent = store.name;
      top.appendChild(h3);
      var badge = document.createElement("span");
      badge.className = "badge " + (open ? "badge--open" : "badge--closed");
      badge.textContent = open ? t("loc.openNow", l) : t("loc.closed", l);
      top.appendChild(badge);
      body.appendChild(top);

      if (store.id === nearestId) {
        var near = document.createElement("p");
        near.className = "store-nearest";
        near.textContent = t("loc.nearest", l);
        body.appendChild(near);
      }

      var addr = document.createElement("p");
      addr.className = "desc";
      addr.textContent = store.address[l] || store.address.az;
      body.appendChild(addr);

      var hours = document.createElement("p");
      hours.className = "desc store-hours";
      hours.textContent = store.hoursText[l] || store.hoursText.az;
      body.appendChild(hours);

      var status = document.createElement("p");
      status.className = "store-status";
      status.textContent = open
        ? t("loc.closesAt", l).replace("{time}", fmt(store.closeHour))
        : t("loc.opensAt", l).replace("{time}", fmt(store.openHour));
      body.appendChild(status);

      var row = document.createElement("div");
      row.className = "row";
      var dir = document.createElement("a");
      dir.className = "btn btn--ghost btn--sm";
      dir.href = "https://www.google.com/maps/dir/?api=1&destination=" + store.lat + "," + store.lng;
      dir.target = "_blank"; dir.rel = "noopener";
      var dirSpan = document.createElement("span");
      dirSpan.textContent = t("loc.directions", l);
      dir.appendChild(dirSpan);
      row.appendChild(dir);
      var order = document.createElement("a");
      order.className = "btn btn--flame btn--sm";
      order.href = WOLT; order.target = "_blank"; order.rel = "noopener";
      order.textContent = t("cta.order", l);
      row.appendChild(order);
      body.appendChild(row);

      card.appendChild(body);
      // Focusing a card flies the map to its branch.
      card.addEventListener("click", function (e) {
        if (e.target.closest("a")) return; // let buttons work
        focusStore(store.id);
      });
      root.appendChild(card);
      cards[store.id] = card;
    });
  }

  function focusStore(id) {
    var s = window.STORES.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    if (map && markers[id]) { map.flyTo([s.lat, s.lng], 14, { duration: 0.6 }); markers[id].openPopup(); }
    Object.keys(cards).forEach(function (k) { cards[k].classList.toggle("is-active", k === id); });
    if (cards[id]) cards[id].scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function initMap() {
    if (!mapEl || typeof L === "undefined") return;
    map = L.map(mapEl, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    // Monochrome CRUNCH pin (matches the brand).
    var icon = L.divIcon({ className: "crunch-pin", html: '<span></span>', iconSize: [26, 26], iconAnchor: [13, 26], popupAnchor: [0, -24] });
    var pts = [];
    window.STORES.forEach(function (s) {
      var m = L.marker([s.lat, s.lng], { icon: icon }).addTo(map);
      m.bindPopup("<strong>" + s.name + "</strong><br>" + (s.address[lang()] || s.address.az));
      m.on("click", function () { focusStore(s.id); });
      markers[s.id] = m;
      pts.push([s.lat, s.lng]);
    });
    map.fitBounds(pts, { padding: [40, 40] });
    // Leaflet needs a nudge when it inits inside a flex/hidden container.
    setTimeout(function () { map.invalidateSize(); }, 200);
  }

  // Haversine (km) — pick the closest branch to the visitor.
  function distKm(a, b, c, d) {
    var R = 6371, p = Math.PI / 180;
    var x = 0.5 - Math.cos((c - a) * p) / 2 + Math.cos(a * p) * Math.cos(c * p) * (1 - Math.cos((d - b) * p)) / 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function geolocate() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(function (pos) {
      var best = null, bestD = Infinity;
      window.STORES.forEach(function (s) {
        var d = distKm(pos.coords.latitude, pos.coords.longitude, s.lat, s.lng);
        if (d < bestD) { bestD = d; best = s; }
      });
      if (best) { nearestId = best.id; render(); focusStore(best.id); }
    }, function () {}, { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 });
  }

  render();
  initMap();
  geolocate();
  document.addEventListener("langchange", render);
})();
