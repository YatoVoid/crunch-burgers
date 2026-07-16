/* ============================================================
   CRUNCH — Menu data (placeholder items, swap for real menu)
   Rendered by js/menu.js in the active language.
   Category `key` drives the anchor id: id="cat-<key>".
   ============================================================ */
window.MENU = [
  {
    category: "burgers",
    name: { az: "Burgerlər", en: "Burgers", ru: "Бургеры" },
    items: [
      {
        id: "double-smash",
        name: { az: "Double Smash", en: "Double Smash", ru: "Дабл Смэш" },
        desc: {
          az: "2× əzilmiş köftə, ikiqat cheddar, turşu, CRUNCH sousu.",
          en: "2× smashed patties, double cheddar, pickles, CRUNCH sauce.",
          ru: "2× котлеты смэш, двойной чеддер, огурчики, соус CRUNCH."
        },
        price: "12.90 ₼", tags: ["best"]
      },
      {
        id: "classic-cheese",
        name: { az: "Classic Cheese", en: "Classic Cheese", ru: "Классик Чиз" },
        desc: {
          az: "Əzilmiş köftə, cheddar, soğan, turşu, ev sousu.",
          en: "Smashed patty, cheddar, onion, pickles, house sauce.",
          ru: "Котлета смэш, чеддер, лук, огурчики, фирменный соус."
        },
        price: "8.90 ₼", tags: []
      },
      {
        id: "truffle-shroom",
        name: { az: "Truffle Shroom", en: "Truffle Shroom", ru: "Трюфель Грибной" },
        desc: {
          az: "Köftə, qızardılmış göbələk, trüf mayonezi, isveçrə pendiri.",
          en: "Patty, sautéed mushrooms, truffle mayo, Swiss cheese.",
          ru: "Котлета, жареные грибы, трюфельный майонез, швейцарский сыр."
        },
        price: "13.90 ₼", tags: ["new"]
      },
      {
        id: "fire-smash",
        name: { az: "Fire Smash", en: "Fire Smash", ru: "Файр Смэш" },
        desc: {
          az: "Köftə, halapenyo, acı sous, əridilmiş cheddar.",
          en: "Patty, jalapeños, fire sauce, melted cheddar.",
          ru: "Котлета, халапеньо, острый соус, плавленый чеддер."
        },
        price: "11.90 ₼", tags: ["hot"]
      }
    ]
  },
  {
    category: "chicken",
    name: { az: "Toyuq", en: "Chicken", ru: "Курица" },
    items: [
      {
        id: "crispy-chick",
        name: { az: "Crispy Chick", en: "Crispy Chick", ru: "Криспи Чик" },
        desc: {
          az: "Xırtıldayan toyuq filesi, kələm salatı, sarımsaq sousu.",
          en: "Crispy chicken fillet, slaw, garlic mayo.",
          ru: "Хрустящее куриное филе, капустный салат, чесночный соус."
        },
        price: "10.50 ₼", tags: []
      },
      {
        id: "spicy-chick",
        name: { az: "Spicy Chick", en: "Spicy Chick", ru: "Спайси Чик" },
        desc: {
          az: "Acılı suxarıda toyuq, turşu, sərinlədici ranch sousu.",
          en: "Hot-breaded chicken, pickles, cooling ranch.",
          ru: "Курица в острой панировке, огурчики, охлаждающий ранч."
        },
        price: "10.90 ₼", tags: ["hot"]
      },
      {
        id: "tenders-5",
        name: { az: "Tenders (5 ədəd)", en: "Tenders (5 pc)", ru: "Тендеры (5 шт)" },
        desc: {
          az: "Beş xırtıldayan toyuq zolağı, seçdiyin sousla.",
          en: "Five crunchy chicken strips with a dip of your choice.",
          ru: "Пять хрустящих куриных стрипсов с соусом на выбор."
        },
        price: "9.50 ₼", tags: []
      },
      {
        id: "honey-chick",
        name: { az: "Honey Mustard Chick", en: "Honey Mustard Chick", ru: "Хани Мастард Чик" },
        desc: {
          az: "Xırtıldayan toyuq, bal-xardal sousu, qıtqırt kahı.",
          en: "Crispy chicken, honey-mustard glaze, crisp lettuce.",
          ru: "Хрустящая курица, медово-горчичный соус, свежий салат."
        },
        price: "11.50 ₼", tags: ["new"]
      }
    ]
  },
  {
    category: "sides",
    name: { az: "Qəlyanaltılar", en: "Sides", ru: "Закуски" },
    items: [
      {
        id: "crinkle-fries",
        name: { az: "Crinkle Fries", en: "Crinkle Fries", ru: "Картофель Кринкл" },
        desc: {
          az: "Qızıl sarısı, dalğalı kartof, dəniz duzu ilə.",
          en: "Golden crinkle-cut fries with sea salt.",
          ru: "Золотистый рифлёный картофель с морской солью."
        },
        price: "4.50 ₼", tags: []
      },
      {
        id: "loaded-fries",
        name: { az: "Loaded Fries", en: "Loaded Fries", ru: "Лоудед Фрайс" },
        desc: {
          az: "Kartof, əridilmiş pendir sousu, halapenyo, yaşıl soğan.",
          en: "Fries, melted cheese sauce, jalapeños, spring onion.",
          ru: "Картофель, сырный соус, халапеньо, зелёный лук."
        },
        price: "6.50 ₼", tags: ["best"]
      },
      {
        id: "onion-rings",
        name: { az: "Onion Rings", en: "Onion Rings", ru: "Луковые кольца" },
        desc: {
          az: "Qalın suxarıda soğan halqaları, BBQ sousu ilə.",
          en: "Thick-battered onion rings with BBQ dip.",
          ru: "Луковые кольца в панировке с соусом барбекю."
        },
        price: "5.50 ₼", tags: []
      },
      {
        id: "coleslaw",
        name: { az: "Kələm salatı", en: "Coleslaw", ru: "Коул-слоу" },
        desc: {
          az: "Təzə kələm, yerkökü, yüngül kremli sous.",
          en: "Fresh cabbage, carrot, light creamy dressing.",
          ru: "Свежая капуста, морковь, лёгкая сливочная заправка."
        },
        price: "3.90 ₼", tags: ["veg"]
      }
    ]
  },
  {
    category: "sauces",
    name: { az: "Souslar", en: "Sauces", ru: "Соусы" },
    items: [
      {
        id: "crunch-sauce",
        name: { az: "CRUNCH sousu", en: "CRUNCH Sauce", ru: "Соус CRUNCH" },
        desc: {
          az: "İmza sousumuz — sirri mətbəxdə qalır.",
          en: "Our signature sauce — the secret stays in the kitchen.",
          ru: "Наш фирменный соус — секрет остаётся на кухне."
        },
        price: "1.50 ₼", tags: ["best"]
      },
      {
        id: "garlic-mayo",
        name: { az: "Sarımsaq mayonezi", en: "Garlic Mayo", ru: "Чесночный майонез" },
        desc: {
          az: "Qovrulmuş sarımsaqla kremli mayonez.",
          en: "Creamy mayo with roasted garlic.",
          ru: "Сливочный майонез с запечённым чесноком."
        },
        price: "1.50 ₼", tags: []
      },
      {
        id: "smoky-bbq",
        name: { az: "Hisə verilmiş BBQ", en: "Smoky BBQ", ru: "Копчёный BBQ" },
        desc: {
          az: "Tünd, şirin-hisli barbekü sousu.",
          en: "Deep, sweet-smoky barbecue sauce.",
          ru: "Насыщенный сладко-копчёный соус барбекю."
        },
        price: "1.50 ₼", tags: []
      },
      {
        id: "fire-sauce",
        name: { az: "Fire sousu", en: "Fire Sauce", ru: "Соус Файр" },
        desc: {
          az: "Cəsurlar üçün — fermentləşdirilmiş istiot sousu.",
          en: "For the brave — fermented chilli heat.",
          ru: "Для смелых — ферментированный перечный соус."
        },
        price: "1.50 ₼", tags: ["hot"]
      }
    ]
  },
  {
    category: "drinks",
    name: { az: "İçkilər", en: "Drinks", ru: "Напитки" },
    items: [
      {
        id: "cola",
        name: { az: "Kola 0.33", en: "Cola 0.33", ru: "Кола 0.33" },
        desc: {
          az: "Buz kimi soyuq, şüşə qabda.",
          en: "Ice cold, in a glass bottle.",
          ru: "Ледяная, в стеклянной бутылке."
        },
        price: "2.50 ₼", tags: []
      },
      {
        id: "lemonade",
        name: { az: "Ev limonadı", en: "House Lemonade", ru: "Домашний лимонад" },
        desc: {
          az: "Hər gün təzə sıxılır — limon, nanə, az şəkər.",
          en: "Pressed fresh daily — lemon, mint, light sugar.",
          ru: "Свежевыжатый каждый день — лимон, мята, немного сахара."
        },
        price: "4.50 ₼", tags: ["new"]
      },
      {
        id: "ayran",
        name: { az: "Ayran", en: "Ayran", ru: "Айран" },
        desc: {
          az: "Sərin, duzlu qatıq içkisi.",
          en: "Cool, lightly salted yoghurt drink.",
          ru: "Прохладный, слегка солёный йогуртовый напиток."
        },
        price: "2.00 ₼", tags: []
      },
      {
        id: "shake-vanilla",
        name: { az: "Vanil milkşeyk", en: "Vanilla Milkshake", ru: "Ванильный милкшейк" },
        desc: {
          az: "Qatı, kremli, əsl vanillə çalınır.",
          en: "Thick, creamy, blended with real vanilla.",
          ru: "Густой, сливочный, с настоящей ванилью."
        },
        price: "6.00 ₼", tags: []
      }
    ]
  },
  {
    category: "desserts",
    name: { az: "Desertlər", en: "Desserts", ru: "Десерты" },
    items: [
      {
        id: "brownie",
        name: { az: "Şokoladlı brauni", en: "Choco Brownie", ru: "Шоколадный брауни" },
        desc: {
          az: "İsti, yapışqan brauni — üstündə kakao.",
          en: "Warm, fudgy brownie dusted with cocoa.",
          ru: "Тёплый тягучий брауни, посыпанный какао."
        },
        price: "5.50 ₼", tags: []
      },
      {
        id: "cheesecake",
        name: { az: "Çizkeyk", en: "Cheesecake", ru: "Чизкейк" },
        desc: {
          az: "Kremli Nyu-York çizkeyki, giləmeyvə sousu ilə.",
          en: "Creamy New York cheesecake with berry drizzle.",
          ru: "Нежный нью-йоркский чизкейк с ягодным соусом."
        },
        price: "6.50 ₼", tags: []
      },
      {
        id: "cinnamon-bites",
        name: { az: "Darçınlı tikələr", en: "Cinnamon Bites", ru: "Коричные кусочки" },
        desc: {
          az: "İsti xəmir tikələri, darçın-şəkər qarışığında.",
          en: "Warm dough bites rolled in cinnamon sugar.",
          ru: "Тёплые кусочки теста в коричном сахаре."
        },
        price: "4.90 ₼", tags: ["new"]
      },
      {
        id: "ice-cream",
        name: { az: "Dondurma kasası", en: "Ice Cream Cup", ru: "Мороженое в стакане" },
        desc: {
          az: "İki kürə vanil dondurma, seçimlə şokolad sousu.",
          en: "Two scoops of vanilla, optional chocolate sauce.",
          ru: "Два шарика ванильного, по желанию шоколадный соус."
        },
        price: "3.50 ₼", tags: ["veg"]
      }
    ]
  }
];
