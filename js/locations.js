/* ============================================================
   CRUNCH — Locations renderer: builds store cards from
   data/stores-data.js with a live open/closed badge computed
   in Asia/Baku time. Re-renders on 'langchange'.
   ============================================================ */
(function () {
  "use strict";
  var WOLT = "https://wolt.com/az/aze/baku/restaurant/crunch-burger";
  var root = document.getElementById("stores-root");
  if (!root || !window.STORES) return;

  function lang() {
    return window.CRUNCH_I18N ? window.CRUNCH_I18N.get() : "az";
  }
  function t(key, l) {
    var table = (window.I18N || {})[l] || {};
    return table[key] != null ? table[key] : key;
  }
  function bakuHour() {
    try {
      return parseInt(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Baku", hour12: false, hour: "2-digit"
      }), 10);
    } catch (e) {
      return new Date().getHours(); /* fallback: local time */
    }
  }
  function fmt(h) { return (h < 10 ? "0" + h : h) + ":00"; }

  function render() {
    var l = lang();
    var hour = bakuHour();
    root.innerHTML = "";

    window.STORES.forEach(function (store) {
      var open = hour >= store.openHour && hour < store.closeHour;

      var card = document.createElement("article");
      card.className = "card store-card";

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
      dir.target = "_blank";
      dir.rel = "noopener";
      var dirSpan = document.createElement("span");
      dirSpan.textContent = t("loc.directions", l);
      dir.appendChild(dirSpan);
      row.appendChild(dir);
      var order = document.createElement("a");
      order.className = "btn btn--flame btn--sm";
      order.href = WOLT;
      order.target = "_blank";
      order.rel = "noopener";
      order.textContent = t("cta.order", l);
      row.appendChild(order);
      body.appendChild(row);

      card.appendChild(body);
      root.appendChild(card);
    });
  }

  render();
  document.addEventListener("langchange", render);
})();
