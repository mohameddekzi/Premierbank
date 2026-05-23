// Premier Bank — content + bilingual strings (EN / SO)
// Sourced from "Bank products and services Update 2025.pptx"
window.PB_CONTENT = {
  /* ────────────────────────────────────────────────────────────────────── */
  /*  NAV                                                                    */
  /* ────────────────────────────────────────────────────────────────────── */
  nav: {
    en: [
      { label: "About",     items: ["Who We Are", "Mission & Values", "Board Members", "Shari'ah Board", "Senior Management"] },
      { label: "Accounts",  items: ["Personal Current", "Saving Account", "Salary Account", "Student Account", "Joint Account", "Hajj & Umra", "Maandeeq (Women)", "Business Current", "Sole-Proprietor", "Umma (NGO)", "Corporate Account"] },
      { label: "Cards",     items: ["Premier Classic", "Premier Platinum", "Corporate Card", "World Elite"] },
      { label: "Financing", items: ["Auto Finance", "Land & Construction", "Business Trade Financing"] },
      { label: "Services",  items: ["Premier Wallet", "Internet Banking", "SWIFT", "ATM Network", "Premier POS", "Agency Banking", "Payroll", "Wearables (Tap2Pay)", "Payment Gateway"] },
      { label: "News",      items: ["Newsroom", "Press Release", "Gallery"] },
    ],
    so: [
      { label: "Ku Saabsan",   items: ["Yaan Nahay", "Hadafka & Qiimaha", "Guddiga Maamulka", "Guddiga Shareecada", "Maamulka Sare"] },
      { label: "Akoonada",     items: ["Akoon Shakhsi", "Akoon Kayd", "Akoon Mushahar", "Akoon Arday", "Akoon Wadaag", "Hajj & Cumra", "Maandeeq (Haween)", "Akoon Ganacsi", "Mulkiile Keli", "Umma (NGO)", "Akoon Shirkadeed"] },
      { label: "Kaararka",     items: ["Premier Classic", "Premier Platinum", "Kaarka Shirkadda", "World Elite"] },
      { label: "Maalgelin",    items: ["Maalgelin Baabuur", "Dhul & Dhismo", "Maalgelin Ganacsi"] },
      { label: "Adeegyada",    items: ["Premier Wallet", "Internet Banking", "SWIFT", "Shabakadda ATM", "Premier POS", "Adeega Wakiilka", "Mushahar", "Wearables (Tap2Pay)", "Albaab Lacageed"] },
      { label: "Wararka",      items: ["Qolka Wararka", "Saxaafadda", "Sawirada"] },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  /*  HERO SLIDER — 5 slides                                                */
  /* ────────────────────────────────────────────────────────────────────── */
  heroSlides: [
    {
      id: "wallet",
      icon: "wallet",
      eyebrow: { en: "Premier Wallet", so: "Premier Wallet" },
      title: {
        en: "Your bank, in the palm of your hand.",
        so: "Bangigaaga, gacantaada ku jira.",
      },
      sub: {
        en: "Top up, send money, pay bills and bank on the go. The most-loved mobile money service in Somalia.",
        so: "Top-up, lacag dir, biil bixi oo bangiyada mobile-ka. Adeega lacagta mobile-ka ee ugu jecel Soomaaliya.",
      },
      cta: { en: "Download the app", so: "Soo dejiso app-ka" },
      tint: "navy",
      art: "wallet",
    },
    {
      id: "cards",
      icon: "card",
      eyebrow: { en: "Premier Mastercard", so: "Premier Mastercard" },
      title: {
        en: "Pay anywhere Mastercard is accepted.",
        so: "Bixi meel kasta oo Mastercard la aqbalo.",
      },
      sub: {
        en: "Classic, Platinum, Corporate and World Elite — secure cards for payments and ATM withdrawals worldwide.",
        so: "Classic, Platinum, Corporate iyo World Elite — ammaan, dunida oo dhan.",
      },
      cta: { en: "Compare cards", so: "Isbarbar dhig kaararka" },
      tint: "green",
      art: "card",
    },
    {
      id: "swift",
      icon: "swift",
      eyebrow: { en: "SWIFT · Code PBSMSOSM", so: "SWIFT · PBSMSOSM" },
      title: {
        en: "Move money to and from 101+ countries.",
        so: "Lacag u dir oo ka hel 101+ dal.",
      },
      sub: {
        en: "Premier Bank's SWIFT service is safe, fast and guaranteed — capable of receiving and sending from all nations.",
        so: "Adeega SWIFT ee Premier Bank waa amaan, degdeg, oo lagu kalsoon yahay.",
      },
      cta: { en: "Send a wire", so: "Dir lacag" },
      tint: "navy",
      art: "swift",
    },
    {
      id: "finance",
      icon: "auto",
      eyebrow: { en: "Investment & Financing", so: "Maalgelin" },
      title: {
        en: "Drive your dream. Build your future.",
        so: "Wado riyadaada. Dhis mustaqbalkaaga.",
      },
      sub: {
        en: "Auto Finance from USD 3,000, Land & Construction up to 36 months, and Business Trade Financing — all Shari'ah-compliant.",
        so: "Maalgelin baabuur, dhulka & dhismaha, iyo ganacsiga — dhammaan waafaqsan Shareecada.",
      },
      cta: { en: "Apply for finance", so: "Codso maalgelin" },
      tint: "green",
      art: "finance",
    },
    {
      id: "agency",
      icon: "agency",
      eyebrow: { en: "Agency Banking · 12,000+ Agents", so: "Adeega Wakiilka" },
      title: {
        en: "A Premier branch wherever you are.",
        so: "Laanta Premier meel kasta oo aad joogto.",
      },
      sub: {
        en: "Open accounts, deposit, withdraw and transfer at an Authorized Premier Agent — even in remote areas.",
        so: "Akoon fur, lacag soo gali oo soo bixi wakiil Premier kasta — xitaa baadiyaha.",
      },
      cta: { en: "Find an agent", so: "Hel wakiil" },
      tint: "navy",
      art: "agency",
    },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  FX TICKER                                                              */
  /* ────────────────────────────────────────────────────────────────────── */
  ticker: [
    { code: "USD/SOS", buy: "27,150", sell: "27,420", up: true },
    { code: "EUR/USD", buy: "1.0842", sell: "1.0867", up: true },
    { code: "AED/USD", buy: "0.2723", sell: "0.2731", up: false },
    { code: "GBP/USD", buy: "1.2614", sell: "1.2641", up: true },
    { code: "SAR/USD", buy: "0.2666", sell: "0.2674", up: false },
    { code: "TRY/USD", buy: "0.0291", sell: "0.0298", up: true },
    { code: "KES/SOS", buy: "182.40", sell: "184.10", up: true },
    { code: "ETB/USD", buy: "0.0173", sell: "0.0178", up: false },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  VALUES (from PPT slide 4)                                              */
  /* ────────────────────────────────────────────────────────────────────── */
  values: {
    en: [
      { icon: "personal",  title: "People First",        body: "We build relationships. We are professional. We offer excellent service." },
      { icon: "shield",    title: "Integrity",           body: "We are trustworthy and behave in an open, honest and ethical manner — considering the impact of every decision." },
      { icon: "check",     title: "Accountability",      body: "We take responsibility for our decisions, action and performance — adhering to Shari'ah principles and international banking standards." },
      { icon: "joint",     title: "Partnership",         body: "We partner with stakeholders to find new, innovative and efficient ways of meeting needs." },
      { icon: "star",      title: "Customer Centricity", body: "We deliver high-quality services that meet and exceed every customer's expectation." },
    ],
    so: [
      { icon: "personal",  title: "Dadka Marka Hore",   body: "Xidhiidh baan dhisanaa, xirfad leh, oo adeeg fiican bixinaa." },
      { icon: "shield",    title: "Daacadnimo",         body: "Waxaan nahay kuwa la aamini karo, si furan oo akhlaaq leh ayaanu u dhaqannaa." },
      { icon: "check",     title: "Iskaa-mas'uul ahaan",body: "Waxaan mas'uul ka nahay go'aamadayada — Shareecada iyo heerarka caalamiga ayaan raacnaa." },
      { icon: "joint",     title: "Iskaashi",           body: "Iskaashi waxaan la galnaa dhammaan dadka xidhiidhka leh." },
      { icon: "star",      title: "Macaamiil Marka Hore",body: "Adeeg tayo sare leh ayaan siinaa macaamiisha, oo aan filashadooda dhaafino." },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  /*  MORE SERVICES TILES — Blinq-style image-led tiles                      */
  /* ────────────────────────────────────────────────────────────────────── */
  tiles: [
    {
      id: "wallet",
      label: { en: "Premier Wallet", so: "Premier Wallet" },
      blurb: { en: "Top-up, transfer, withdraw, pay bills — all in one app.", so: "Top-up, wareejin, bixin biil — hal app." },
      icon: "wallet",
      bg: "#0b2f4f",
      art: "wallet-phone",
    },
    {
      id: "mastercard",
      label: { en: "Premier Mastercard", so: "Premier Mastercard" },
      blurb: { en: "Classic · Platinum · Corporate · World Elite.", so: "Classic · Platinum · Corporate · World Elite." },
      icon: "card",
      bg: "#e9efe2",
      art: "mastercard",
    },
    {
      id: "atm",
      label: { en: "ATM Network", so: "Shabakadda ATM" },
      blurb: { en: "30 ATMs across Mogadishu and the regions, 24/7.", so: "30 ATM oo Muqdisho iyo gobollada, 24/7." },
      icon: "atm",
      bg: "#0b2f4f",
      art: "atm",
    },
    {
      id: "pos",
      label: { en: "Premier POS", so: "Premier POS" },
      blurb: { en: "319 POS terminals at supermarkets, hotels, airports & more.", so: "319 POS oo supermaketo, hudheelo, airports & wax kale." },
      icon: "pos",
      bg: "#f3edde",
      art: "pos",
    },
    {
      id: "swift",
      label: { en: "SWIFT International", so: "SWIFT Caalami" },
      blurb: { en: "Code PBSMSOSM. Send and receive in 101+ countries.", so: "PBSMSOSM · 101+ dal." },
      icon: "swift",
      bg: "#6cbe46",
      art: "swift",
    },
    {
      id: "wearable",
      label: { en: "Tap2Pay Wearables", so: "Tap2Pay" },
      blurb: { en: "NFC payment rings, watches and bands — tap to pay.", so: "NFC giraan, saac iyo xidhmo — taabasho keliya." },
      icon: "wearable",
      bg: "#1a4a73",
      art: "wearable",
    },
    {
      id: "agency",
      label: { en: "Agency Banking", so: "Adeega Wakiilka" },
      blurb: { en: "Authorized Premier Agents nationwide — even in remote areas.", so: "Wakiillada Premier dalka oo dhan." },
      icon: "agency",
      bg: "#f7f4ee",
      art: "agency",
    },
    {
      id: "gateway",
      label: { en: "Payment Gateway", so: "Albaab Lacageed" },
      blurb: { en: "Mastercard Payment Gateway Services — for online merchants.", so: "MPGS — ganacsato online." },
      icon: "gateway",
      bg: "#6cbe46",
      art: "gateway",
    },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  ACCOUNT GRID                                                           */
  /* ────────────────────────────────────────────────────────────────────── */
  accounts: [
    { id: "personal",    icon: "personal",  name: { en: "Personal Current",   so: "Akoon Shakhsi" },     for: { en: "Everyday banking",       so: "Maalmaha caadiga" } },
    { id: "saving",      icon: "saving",    name: { en: "Saving Account",     so: "Akoon Kayd" },        for: { en: "Profit-sharing savings", so: "Kayd faa'iido leh" } },
    { id: "salary",      icon: "salary",    name: { en: "Salary Account",     so: "Akoon Mushahar" },    for: { en: "Salaried professionals", so: "Shaqaale mushahar" } },
    { id: "student",     icon: "student",   name: { en: "Student Account",    so: "Akoon Arday" },       for: { en: "Students aged 13+",      so: "Arday 13+" } },
    { id: "joint",       icon: "joint",     name: { en: "Joint Account",      so: "Akoon Wadaag" },      for: { en: "2–5 individuals",        so: "2–5 qof" } },
    { id: "hajj",        icon: "hajj",      name: { en: "Hajj & Umra",        so: "Hajj & Cumra" },      for: { en: "Goal-based savings",     so: "Kayd hadaf leh" } },
    { id: "women",       icon: "women",     name: { en: "Maandeeq (Women)",   so: "Maandeeq" },          for: { en: "Women-only account",     so: "Haween kaliya" } },
    { id: "business",    icon: "business",  name: { en: "Business Current",   so: "Akoon Ganacsi" },     for: { en: "Companies & traders",    so: "Shirkado" } },
    { id: "sole",        icon: "corporate", name: { en: "Sole-Proprietor",    so: "Mulkiile Keli" },     for: { en: "Single-owner businesses",so: "Mulkiile keli ah" } },
    { id: "ngo",         icon: "ngo",       name: { en: "Umma (NGO)",         so: "Umma (NGO)" },        for: { en: "NGOs, charities, trusts",so: "NGO & samafal" } },
    { id: "corporate",   icon: "corporate", name: { en: "Corporate Account",  so: "Akoon Shirkadeed" },  for: { en: "Large corporates",       so: "Shirkado waaweyn" } },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  CARDS (from PPT slides 9-14)                                           */
  /* ────────────────────────────────────────────────────────────────────── */
  cards: [
    { id: "classic",  icon: "card",         name: "Classic Mastercard",   limit: "$2,000", desc: { en: "Secure payments via POS and ATM withdrawal worldwide.",              so: "Bixinta POS iyo ATM, dunida oo dhan." }, color: "#0b2f4f" },
    { id: "platinum", icon: "cardPlatinum", name: "Platinum Mastercard",  limit: "$2,000", desc: { en: "Premium debit card with worldwide acceptance.",                       so: "Kaarka tayo sare, dunida oo dhan loo aqbalo." },                       color: "#6cbe46" },
    { id: "corporate",icon: "card",         name: "Corporate Mastercard", limit: "$3,000", desc: { en: "For medium-sized and large companies with complex expenses.",         so: "Shirkadaha dhexe iyo waaweyn ee leh kharashyo isku dhafan." },          color: "#1a4a73" },
    { id: "elite",    icon: "cardElite",    name: "World Elite Mastercard",limit: "$5,000",desc: { en: "Gateway to unique experiences — lounge access, VIP privileges.",     so: "Albaab madadaalo gaar ah — qolal sare iyo VIP." },                     color: "#0a2540" },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  BRANCHES (locator map)                                                */
  /* ────────────────────────────────────────────────────────────────────── */
  branches: [
    { city: "Mogadishu HQ",   addr: "KM4, Wadnaha Street",       x: 56, y: 64, count: 18 },
    { city: "Hargeisa",       addr: "26 June Street",            x: 38, y: 22, count: 7 },
    { city: "Garowe",         addr: "Main Boulevard",            x: 60, y: 36, count: 3 },
    { city: "Bosaso",         addr: "Port Road",                 x: 68, y: 18, count: 4 },
    { city: "Kismayo",        addr: "Central Market",            x: 50, y: 78, count: 2 },
    { city: "Baidoa",         addr: "Towfiiq District",          x: 44, y: 58, count: 2 },
    { city: "Beledweyne",     addr: "Hawl-Wadaag",               x: 52, y: 48, count: 1 },
    { city: "Burco",          addr: "Main Square",               x: 46, y: 26, count: 2 },
    { city: "Berbera",        addr: "Port Free Zone",            x: 44, y: 16, count: 1 },
    { city: "Dubai DIFC",     addr: "Gate Village 7",            x: 76, y: 40, count: 1, intl: true },
    { city: "Nairobi",        addr: "Westlands",                 x: 60, y: 88, count: 1, intl: true },
    { city: "London",         addr: "Canary Wharf",              x: 14, y: 8,  count: 1, intl: true },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  TESTIMONIALS                                                          */
  /* ────────────────────────────────────────────────────────────────────── */
  testimonials: {
    en: [
      { quote: "Premier Wallet changed my shop. I take payments, pay suppliers and run payroll without leaving the counter.", who: "Khadra A.", role: "Shop owner, Mogadishu" },
      { quote: "Sending money home from Dubai used to take three days. Now my mother gets it before I close the app.",        who: "Yusuf I.",  role: "Diaspora customer, UAE" },
      { quote: "The Shari'ah board is the real deal — every product was reviewed transparently. That's why we moved our business here.", who: "Ahmed M.", role: "CEO, importer/exporter" },
      { quote: "I opened my first salary account at 19 with Premier. Five years later they financed my first car.",          who: "Faduma O.", role: "Engineer, Hargeisa" },
      { quote: "The relationship manager actually knows our business. Trade finance approvals in days, not months.",          who: "Mohamed K.", role: "CFO, logistics SME" },
    ],
    so: [
      { quote: "Premier Wallet wuu beddelay dukaankayga. Lacag baan ka qaadaa macaamiisha, oo soo iibiyayaasha ayaan bixiyaa.", who: "Khadra A.", role: "Iibiye, Muqdisho" },
      { quote: "Lacag Dubai uga soo dirka saddex maalmood ayey qaadan jirtay. Hadda hooyaday way heshaa kahor inta aanan xidhin app-ka.", who: "Yusuf I.", role: "Macmiil diaspora, UAE" },
      { quote: "Guddiga Shareecada runtii waa madax-banaan. Sidaas darteed ayaanu ganacsigayaga halkaan u soo wareejinay.",    who: "Ahmed M.", role: "Madaxa shirkad" },
      { quote: "19 jir ahaan baan akoon mushahar furtay Premier. Shanta sano ee la soo dhaafay, hadda gaarigayga way maalgeliyeen.", who: "Faduma O.", role: "Injineer, Hargeysa" },
      { quote: "Maamulayasha runtii way fahmaan ganacsigayaga. Ogolaansho maalmo, ee aan bilo ahayn.",                          who: "Mohamed K.", role: "CFO, ganacsi" },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  /*  STATS                                                                 */
  /* ────────────────────────────────────────────────────────────────────── */
  stats: [
    { value: "2014",   label: { en: "CBS licensed",       so: "Shati CBS" } },
    { value: "101+",   label: { en: "Remittance countries", so: "Dalal remittance" } },
    { value: "319",    label: { en: "POS terminals",      so: "POS terminals" } },
    { value: "30",     label: { en: "ATMs across Somalia",so: "ATM Soomaaliya" } },
    { value: "12,000+",label: { en: "Authorized Agents",  so: "Wakiillo" } },
  ],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  Trust partner labels                                                  */
  /* ────────────────────────────────────────────────────────────────────── */
  trustLogos: ["MASTERCARD", "VISA", "SWIFT", "MPGS", "AAOIFI", "CBS", "ISO 27001", "PCI-DSS"],

  /* ────────────────────────────────────────────────────────────────────── */
  /*  FAQ (general, from PPT and product knowledge)                          */
  /* ────────────────────────────────────────────────────────────────────── */
  faq: {
    en: [
      { q: "How do I open a Premier Bank account?",
        a: "Walk into any Premier branch with your national ID, passport or driving licence — or start in the Premier Wallet app and complete KYC remotely. Personal accounts can be opened the same day." },
      { q: "Is Premier Bank Shari'ah-compliant?",
        a: "Yes. Premier Bank is a privately-owned Shari'ah-compliant commercial bank, incorporated in Somalia in 2013 and licensed by the Central Bank of Somalia in 2014. Every product is certified by our independent Shari'ah Supervisory Board." },
      { q: "What is the Premier Bank SWIFT code?",
        a: "PBSMSOSM. Premier Bank is capable of receiving and sending funds from all nations safely, fast and guaranteed." },
      { q: "What does Premier Wallet cost?",
        a: "Premier Wallet is free to download and free to register. It offers financial services to non-banked populations or people with limited access to banks." },
      { q: "How many countries does the Wallet send to?",
        a: "Premier Wallet supports remittance to more than 101 countries via Mobile Money, Cash Pickup and Bank Transfer." },
      { q: "How many ATMs and POS terminals does Premier operate?",
        a: "30 ATMs (21 in Mogadishu, 9 across regions) and 319 POS terminals (287 in Mogadishu, 32 across regions) — including airports, hotels, supermarkets and retailers." },
    ],
    so: [
      { q: "Sideen u furtaa akoon Premier Bank?",
        a: "Gal laan kasta oo Premier oo wadata kaarka aqoonsiga, baasaboor, ama shatiga gaariga — ama ka bilow Premier Wallet oo dhameystir KYC. Akoon shakhsi maalin la furi karaa." },
      { q: "Ma waafaqsan tahay Shareecada?",
        a: "Haa. Premier Bank waa bangi gaar loo leeyahay, waafaqsan Shareecada, oo Soomaaliya laga aasaasay 2013, shati ka qaatay CBS 2014." },
      { q: "Waa maxay SWIFT code-ka Premier Bank?",
        a: "PBSMSOSM. Premier wuxuu ka heli karaa oo u diri karaa dalal kasta — si amaan, degdeg ah, oo lagu kalsoon yahay." },
      { q: "Premier Wallet imisa qaadan?",
        a: "Bilaash baad ku soo dejisaa oo ku diiwaangelisaa. Wuxuu adeeg siiyaa dadka aan akoon bangi haysan." },
      { q: "Wallet-ka imisa dal ayuu u diri karaa?",
        a: "In ka badan 101 dal — Mobile Money, Cash Pickup iyo Bank Transfer." },
      { q: "Imisa ATM iyo POS ayaad leedahay?",
        a: "30 ATM (21 Muqdisho, 9 gobolada) iyo 319 POS (287 Muqdisho, 32 gobolada)." },
    ],
  },
};
