/* ============================================================
   CRUNCH — Menu renderer: builds category rail + item grid
   from data/menu-data.js in the active language.
   Re-renders on 'langchange'. Scroll-spy highlights the rail.
   ============================================================ */
(function () {
  "use strict";
  var WOLT = "https://wolt.com/az/aze/baku/restaurant/crunch-burger";
  var rail = document.getElementById("menu-rail");
  var root = document.getElementById("menu-root");
  if (!rail || !root || !window.MENU) return;

  var spy = null;

  function lang() {
    return window.CRUNCH_I18N ? window.CRUNCH_I18N.get() : "az";
  }
  function t(key, l) {
    var table = (window.I18N || {})[l] || {};
    return table[key] != null ? table[key] : key;
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function render() {
    var l = lang();

    /* — Category rail — */
    rail.innerHTML = "";
    window.MENU.forEach(function (cat) {
      var a = document.createElement("a");
      a.className = "rail-pill";
      a.href = "#cat-" + cat.category;
      a.textContent = cat.name[l] || cat.name.az;
      rail.appendChild(a);
    });

    /* — Category sections + item cards — */
    root.innerHTML = "";
    window.MENU.forEach(function (cat, ci) {
      var section = document.createElement("section");
      section.className = "menu-cat";
      section.id = "cat-" + cat.category;
      section.setAttribute("aria-labelledby", "cat-h-" + cat.category);

      var head = document.createElement("h2");
      head.className = "cat-head";
      head.id = "cat-h-" + cat.category;
      var idx = document.createElement("span");
      idx.className = "cat-index";
      idx.textContent = pad(ci + 1) + " — ";
      head.appendChild(idx);
      head.appendChild(document.createTextNode(cat.name[l] || cat.name.az));
      section.appendChild(head);

      var grid = document.createElement("div");
      grid.className = "product-grid";
      cat.items.forEach(function (item) {
        var card = document.createElement("article");
        card.className = "card menu-item";
        card.style.position = "relative";

        var media = document.createElement("div");
        media.className = "media";
        var img = document.createElement("img");
        img.src = item.img || "assets/img/hero/burger.svg";
        img.alt = item.name[l] || item.name.az;
        img.loading = "lazy";
        img.width = 400; img.height = 225;
        media.appendChild(img);
        card.appendChild(media);

        var body = document.createElement("div");
        body.className = "body";

        var h3 = document.createElement("h3");
        h3.textContent = item.name[l] || item.name.az;
        body.appendChild(h3);

        var descText = item.desc ? (item.desc[l] || item.desc.az) : "";
        if (descText) {
          var desc = document.createElement("p");
          desc.className = "desc";
          desc.textContent = descText;
          body.appendChild(desc);
        }

        if (item.tags && item.tags.length) {
          var tagRow = document.createElement("div");
          tagRow.className = "tag-row";
          item.tags.forEach(function (tag) {
            var b = document.createElement("span");
            b.className = "badge" +
              (tag === "hot" ? " badge--hot" : tag === "veg" ? " badge--veg" : "");
            b.textContent = t("menu.tag." + tag, l);
            tagRow.appendChild(b);
          });
          body.appendChild(tagRow);
        }

        var row = document.createElement("div");
        row.className = "row";
        var price = document.createElement("span");
        price.className = "price";
        price.textContent = item.price;
        row.appendChild(price);
        var btn = document.createElement("a");
        btn.className = "btn btn--flame btn--sm stretch";
        btn.href = WOLT;
        btn.target = "_blank";
        btn.rel = "noopener";
        btn.textContent = t("cta.order", l);
        row.appendChild(btn);
        body.appendChild(row);

        card.appendChild(body);
        grid.appendChild(card);
      });
      section.appendChild(grid);
      root.appendChild(section);
    });

    initSpy();
  }

  /* — Scroll-spy: highlight the rail pill for the visible category — */
  function setActive(id) {
    rail.querySelectorAll(".rail-pill").forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  function initSpy() {
    if (spy) { spy.disconnect(); spy = null; }
    if (!("IntersectionObserver" in window)) return;
    var sections = root.querySelectorAll(".menu-cat");
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActive(en.target.id);
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
    if (sections.length) setActive(sections[0].id);
  }

  render();
  document.addEventListener("langchange", render);
})();
