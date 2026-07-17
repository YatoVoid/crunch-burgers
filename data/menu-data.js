/* ============================================================
   CRUNCH — Menu data. Items, photos and prices taken from the
   live Wolt menu (wolt.com/az/aze/baku/restaurant/crunch-burger).
   NOTE: prices below are Wolt DELIVERY prices and can run ~15-20%
   above dine-in. Confirm the owner's in-store prices before launch.
   Rendered by js/menu.js in the active language.
   Category `key` drives the anchor id: id="cat-<key>".
   ============================================================ */
window.MENU = [
  {
    category: "burgers",
    name: { az: "Burgerlər", en: "Burgers", ru: "Бургеры" },
    items: [
      {
        id: "crunch",
        name: { az: "Crunch", en: "Crunch", ru: "Crunch" },
        desc: {
          az: "İkiqat smash köftə, cheddar, bulka, turşu, karamelizə soğan, crunch sousu.",
          en: "Double smash patty, cheddar, bun, pickles, caramelized onion, crunch sauce.",
          ru: "Двойная котлета смэш, чеддер, булочка, огурчики, карамелизованный лук, соус crunch."
        },
        price: "13.50 ₼", img: "assets/img/menu/crunch.jpg", tags: ["best"]
      },
      {
        id: "truffle",
        name: { az: "Truffle", en: "Truffle", ru: "Truffle" },
        desc: {
          az: "İkiqat smash köftə, cheddar, bulka, karamelizə soğan, trüf sousu.",
          en: "Double smash patty, cheddar, bun, caramelized onion, truffle sauce.",
          ru: "Двойная котлета смэш, чеддер, булочка, карамелизованный лук, трюфельный соус."
        },
        price: "17.50 ₼", img: "assets/img/menu/truffle.jpg", tags: []
      },
      {
        id: "jalapeno",
        name: { az: "Jalapeño", en: "Jalapeño", ru: "Jalapeño" },
        desc: {
          az: "İkiqat smash köftə, cheddar, bulka, turşu, karamelizə soğan, krem pendir sousu, mal bekon cemi, halapenyo.",
          en: "Double smash patty, cheddar, bun, pickles, caramelized onion, cream cheese sauce, beef bacon jam, jalapeño.",
          ru: "Двойная котлета смэш, чеддер, булочка, огурчики, карамелизованный лук, сливочный соус, джем из говяжьего бекона, халапеньо."
        },
        price: "16.50 ₼", img: "assets/img/menu/jalape-o.jpg", tags: ["hot"]
      }
    ]
  },
  {
    category: "chicken",
    name: { az: "Toyuq", en: "Chicken", ru: "Курица" },
    items: [
      {
        id: "crunchy-canes",
        name: { az: "Crunchy Canes", en: "Crunchy Canes", ru: "Crunchy Canes" },
        desc: {
          az: "Toyuq tenderləri, kartof fri, Texas tost, xüsusi crunch sousu.",
          en: "Chicken tenders, fries, Texas toast, special crunch sauce.",
          ru: "Куриные тендеры, картофель фри, тост по-техасски, специальный соус crunch."
        },
        price: "19.50 ₼", img: "assets/img/menu/crunchy-canes.jpg", tags: ["best"]
      },
      {
        id: "chicken-tenders",
        name: { az: "Chicken Tenders", en: "Chicken Tenders", ru: "Chicken Tenders" },
        desc: {
          az: "Bütöv toyuq zolaqları, un qarışığında qızardılır.",
          en: "Whole chicken strips fried in our flour mix.",
          ru: "Куриные стрипсы из цельного филе в фирменной панировке."
        },
        price: "8.00 ₼", img: "assets/img/menu/chicken-tenders.jpg", tags: ["best"]
      },
      {
        id: "nashville-tenders",
        name: { az: "Nashville Tenders", en: "Nashville Tenders", ru: "Nashville Tenders" },
        desc: {
          az: "Xırtıldayan tenderlər, Nashville tərzi acı ədviyyat, bal ilə.",
          en: "Crispy tenders, Nashville-style hot seasoning, served with honey.",
          ru: "Хрустящие тендеры, острая нэшвиллская приправа, с мёдом."
        },
        price: "9.00 ₼", img: "assets/img/menu/nashville-tenders.jpg", tags: ["hot"]
      },
      {
        id: "chicken-sandwich",
        name: { az: "Chicken Sandwich", en: "Chicken Sandwich", ru: "Chicken Sandwich" },
        desc: {
          az: "Toyuq tenderləri, bulka, kokteyl sousu, cheddar, turşu, kahı.",
          en: "Chicken tenders, bun, cocktail sauce, cheddar, pickles, lettuce.",
          ru: "Куриные тендеры, булочка, коктейльный соус, чеддер, огурчики, салат."
        },
        price: "13.00 ₼", img: "assets/img/menu/chicken-sandwich.jpg", tags: []
      },
      {
        id: "nashville-chicken-sandwich",
        name: { az: "Nashville Chicken Sandwich", en: "Nashville Chicken Sandwich", ru: "Nashville Chicken Sandwich" },
        desc: {
          az: "Toyuq tenderləri, bulka, bal, turşu, crunch sousu.",
          en: "Chicken tenders, bun, honey, pickles, crunch sauce.",
          ru: "Куриные тендеры, булочка, мёд, огурчики, соус crunch."
        },
        price: "13.50 ₼", img: "assets/img/menu/nashville-chicken-sandwich.jpg", tags: ["hot"]
      }
    ]
  },
  {
    category: "sides",
    name: { az: "Kartof və Qəlyanaltılar", en: "Fries & Sides", ru: "Картофель и закуски" },
    items: [
      {
        id: "fries",
        name: { az: "Fries", en: "Fries", ru: "Fries" },
        desc: {
          az: "Dəniz duzu ilə qızılı kartof fri.",
          en: "Golden fries with sea salt.",
          ru: "Золотистый картофель фри с морской солью."
        },
        price: "6.50 ₼", img: "assets/img/menu/fries.jpg", tags: ["best"]
      },
      {
        id: "sweet-potato",
        name: { az: "Sweet Potato", en: "Sweet Potato", ru: "Sweet Potato" },
        desc: {
          az: "Şirin kartofdan hazırlanan fri.",
          en: "Sweet potato fries.",
          ru: "Картофель фри из батата."
        },
        price: "8.50 ₼", img: "assets/img/menu/sweet-potato.jpg", tags: []
      },
      {
        id: "parmesan-truffle",
        name: { az: "Parmesan Truffle", en: "Parmesan Truffle", ru: "Parmesan Truffle" },
        desc: {
          az: "Parmezan və trüf ilə kartof fri.",
          en: "Fries with parmesan and truffle.",
          ru: "Картофель фри с пармезаном и трюфелем."
        },
        price: "11.00 ₼", img: "assets/img/menu/parmesan-truffle.jpg", tags: []
      },
      {
        id: "crunch-style",
        name: { az: "Crunch Style", en: "Crunch Style", ru: "Crunch Style" },
        desc: {
          az: "CRUNCH üslubunda zəngin kartof fri.",
          en: "Loaded fries, CRUNCH style.",
          ru: "Картофель фри по-фирменному, в стиле CRUNCH."
        },
        price: "10.50 ₼", img: "assets/img/menu/crunch-style.jpg", tags: []
      },
      {
        id: "crunch-sauce",
        name: { az: "Crunch Sauce", en: "Crunch Sauce", ru: "Crunch Sauce" },
        desc: {
          az: "İmza sousumuz, 60 ml.",
          en: "Our signature sauce, 60 ml.",
          ru: "Наш фирменный соус, 60 мл."
        },
        price: "1.50 ₼", img: "assets/img/menu/crunch-sauce.jpg", tags: ["best"]
      }
    ]
  },
  {
    category: "pairings",
    name: { az: "Setlər", en: "Pairings", ru: "Комбо" },
    items: [
      {
        id: "crispy-pairing",
        name: { az: "Crispy Pairing", en: "Crispy Pairing", ru: "Crispy Pairing" },
        desc: {
          az: "Chicken Sandwich, kartof fri və 0.5L içki.",
          en: "Chicken sandwich, fries and a 0.5L drink.",
          ru: "Куриный сэндвич, картофель фри и напиток 0.5 л."
        },
        price: "21.00 ₼", img: "assets/img/menu/crispy-pairing.jpg", tags: []
      },
      {
        id: "crunch-pairing",
        name: { az: "Crunch Pairing", en: "Crunch Pairing", ru: "Crunch Pairing" },
        desc: {
          az: "Crunch burger, Crunch Style kartof fri və 0.5L içki.",
          en: "Crunch burger, Crunch Style fries and a 0.5L drink.",
          ru: "Бургер Crunch, картофель Crunch Style и напиток 0.5 л."
        },
        price: "23.00 ₼", img: "assets/img/menu/crunch-pairing.jpg", tags: ["best"]
      },
      {
        id: "truffle-pairing",
        name: { az: "Truffle Pairing", en: "Truffle Pairing", ru: "Truffle Pairing" },
        desc: {
          az: "Truffle burger, Parmesan Truffle kartof fri və 0.5L içki.",
          en: "Truffle burger, Parmesan Truffle fries and a 0.5L drink.",
          ru: "Бургер Truffle, картофель Parmesan Truffle и напиток 0.5 л."
        },
        price: "27.00 ₼", img: "assets/img/menu/truffle-pairing.jpg", tags: []
      }
    ]
  },
  {
    category: "lemonades",
    name: { az: "Limonadlar", en: "Lemonades", ru: "Лимонады" },
    items: [
      {
        id: "lemonade-mango-maracuya",
        name: { az: "Mango & Maracuyá", en: "Mango & Maracuyá", ru: "Манго & Маракуйя" },
        desc: { az: "Təzə limonad, 400 ml.", en: "Fresh lemonade, 400 ml.", ru: "Свежий лимонад, 400 мл." },
        price: "8.00 ₼", img: "assets/img/menu/mango-maracuy-lemonade-400-ml.jpg", tags: []
      },
      {
        id: "lemonade-strawberry",
        name: { az: "Strawberry", en: "Strawberry", ru: "Клубника" },
        desc: { az: "Təzə limonad, 400 ml.", en: "Fresh lemonade, 400 ml.", ru: "Свежий лимонад, 400 мл." },
        price: "8.00 ₼", img: "assets/img/menu/strawberry-lemonade-400-ml.jpg", tags: []
      },
      {
        id: "lemonade-apple-lime",
        name: { az: "Apple & Lime", en: "Apple & Lime", ru: "Яблоко & Лайм" },
        desc: { az: "Təzə limonad, 400 ml.", en: "Fresh lemonade, 400 ml.", ru: "Свежий лимонад, 400 мл." },
        price: "8.00 ₼", img: "assets/img/menu/apple-lime-lemonade-400-ml.jpg", tags: []
      },
      {
        id: "lemonade-coconut-lychee",
        name: { az: "Coconut & Lychee", en: "Coconut & Lychee", ru: "Кокос & Личи" },
        desc: { az: "Təzə limonad, 400 ml.", en: "Fresh lemonade, 400 ml.", ru: "Свежий лимонад, 400 мл." },
        price: "8.00 ₼", img: "assets/img/menu/coconut-lychee-lemonade-400-ml.jpg", tags: []
      }
    ]
  },
  {
    category: "softdrinks",
    name: { az: "Sərinləşdirici İçkilər", en: "Soft Drinks", ru: "Напитки" },
    items: [
      {
        id: "coca-cola",
        name: { az: "Coca-Cola", en: "Coca-Cola", ru: "Coca-Cola" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/coca-cola-330-ml.jpg", tags: []
      },
      {
        id: "coca-cola-zero",
        name: { az: "Coca-Cola Zero", en: "Coca-Cola Zero", ru: "Coca-Cola Zero" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/coca-cola-zero-330-ml.jpg", tags: []
      },
      {
        id: "fanta",
        name: { az: "Fanta", en: "Fanta", ru: "Fanta" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/fanta-330-ml.jpg", tags: []
      },
      {
        id: "sprite",
        name: { az: "Sprite", en: "Sprite", ru: "Sprite" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/sprite-330-ml.jpg", tags: []
      },
      {
        id: "fuse-tea-peach",
        name: { az: "Fuse Tea Şaftalı", en: "Fuse Tea Peach", ru: "Fuse Tea Персик" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/fuse-tea-ice-tea-aftal-330-ml.jpg", tags: []
      },
      {
        id: "fuse-tea-mango-pineapple",
        name: { az: "Fuse Tea Manqo-Ananas", en: "Fuse Tea Mango-Pineapple", ru: "Fuse Tea Манго-Ананас" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/fuse-tea-ice-tea-manqo-ananas-330-ml.jpg", tags: []
      },
      {
        id: "fuse-tea-lemon",
        name: { az: "Fuse Tea Limon", en: "Fuse Tea Lemon", ru: "Fuse Tea Лимон" },
        desc: { az: "330 ml", en: "330 ml", ru: "330 мл" },
        price: "4.00 ₼", img: "assets/img/menu/fuse-tea-ice-tea-limon-330-ml.jpg", tags: []
      },
      {
        id: "sirab-sparkling",
        name: { az: "Sirab Qazlı", en: "Sirab Sparkling", ru: "Sirab Газированная" },
        desc: { az: "500 ml", en: "500 ml", ru: "500 мл" },
        price: "2.00 ₼", img: "assets/img/menu/sirab-qazl-500-ml.jpg", tags: []
      },
      {
        id: "sirab-still",
        name: { az: "Sirab Qazsız", en: "Sirab Still", ru: "Sirab Негазированная" },
        desc: { az: "500 ml", en: "500 ml", ru: "500 мл" },
        price: "2.00 ₼", img: "assets/img/menu/sirab-qazs-z-500-ml.jpg", tags: []
      }
    ]
  },
  {
    category: "coffee",
    name: { az: "Qəhvə", en: "Coffee", ru: "Кофе" },
    items: [
      {
        id: "americano",
        name: { az: "Americano", en: "Americano", ru: "Американо" },
        desc: { az: "", en: "", ru: "" },
        price: "5.00 ₼", img: "assets/img/menu/americano.jpg", tags: []
      },
      {
        id: "latte",
        name: { az: "Latte", en: "Latte", ru: "Латте" },
        desc: { az: "", en: "", ru: "" },
        price: "6.00 ₼", img: "assets/img/menu/latte.jpg", tags: []
      },
      {
        id: "cappuccino",
        name: { az: "Cappuccino", en: "Cappuccino", ru: "Капучино" },
        desc: { az: "", en: "", ru: "" },
        price: "6.00 ₼", img: "assets/img/menu/cappuccino.jpg", tags: []
      },
      {
        id: "flat-white",
        name: { az: "Flat White", en: "Flat White", ru: "Флэт Уайт" },
        desc: { az: "", en: "", ru: "" },
        price: "6.50 ₼", img: "assets/img/menu/flat-white.jpg", tags: []
      },
      {
        id: "raf",
        name: { az: "Raf", en: "Raf", ru: "Раф" },
        desc: { az: "", en: "", ru: "" },
        price: "7.00 ₼", img: "assets/img/menu/raf.jpg", tags: []
      },
      {
        id: "caramel-macchiato",
        name: { az: "Caramel Macchiato", en: "Caramel Macchiato", ru: "Карамель Макиато" },
        desc: { az: "", en: "", ru: "" },
        price: "6.50 ₼", img: "assets/img/menu/caramel-machiato.jpg", tags: []
      },
      {
        id: "ice-americano",
        name: { az: "Ice Americano", en: "Ice Americano", ru: "Айс Американо" },
        desc: { az: "", en: "", ru: "" },
        price: "7.00 ₼", img: "assets/img/menu/ice-americano.jpg", tags: []
      },
      {
        id: "ice-latte",
        name: { az: "Ice Latte", en: "Ice Latte", ru: "Айс Латте" },
        desc: { az: "", en: "", ru: "" },
        price: "7.50 ₼", img: "assets/img/menu/ice-latte.jpg", tags: []
      }
    ]
  }
];
