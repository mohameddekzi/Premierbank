// Premier Bank — Menu detail panels (one full-context page per nav link)
// Content sourced from "Bank products and services Update 2025.pptx"
const { useState: useStateD, useEffect: useEffectD } = React;

/* -------------------------------------------------------------------------- */
/*  Nav label → detail key                                                    */
/* -------------------------------------------------------------------------- */
window.PB_DETAIL_KEY = {
  // About
  "Who We Are": "who", "Yaan Nahay": "who",
  "Mission & Values": "values", "Hadafka & Qiimaha": "values",
  "Board Members": "board", "Guddiga Maamulka": "board",
  "Shari'ah Board": "shariah", "Guddiga Shareecada": "shariah",
  "Senior Management": "leadership", "Maamulka Sare": "leadership",
  // Accounts
  "Personal Current": "personal", "Akoon Shakhsi": "personal",
  "Saving Account": "savings", "Akoon Kayd": "savings",
  "Salary Account": "salary", "Akoon Mushahar": "salary",
  "Student Account": "student", "Akoon Arday": "student",
  "Joint Account": "joint", "Akoon Wadaag": "joint",
  "Hajj & Umra": "hajj", "Hajj & Cumra": "hajj",
  "Maandeeq (Women)": "women", "Maandeeq": "women", "Maandeeq (Haween)": "women",
  "Business Current": "business", "Akoon Ganacsi": "business",
  "Sole-Proprietor": "sole", "Mulkiile Keli": "sole",
  "Umma (NGO)": "ngo",
  "Corporate Account": "corporate", "Akoon Shirkadeed": "corporate",
  // Cards
  "Premier Classic": "classic",
  "Premier Platinum": "platinum",
  "Corporate Card": "corpcard", "Kaarka Shirkadda": "corpcard",
  "World Elite": "elite",
  // Financing
  "Auto Finance": "auto", "Maalgelin Baabuur": "auto",
  "Land & Construction": "land", "Dhul & Dhismo": "land", "Dhulka & Dhismaha": "land",
  "Business Trade Financing": "trade", "Maalgelin Ganacsi": "trade",
  // Services
  "Premier Wallet": "wallet",
  "Internet Banking": "internet",
  "SWIFT": "swift",
  "ATM Network": "atm", "Shabakadda ATM": "atm",
  "Premier POS": "pos",
  "Agency Banking": "agency", "Adeega Wakiilka": "agency",
  "Payroll": "payroll", "Mushahar": "payroll",
  "Wearables (Tap2Pay)": "wearable",
  "Payment Gateway": "gateway", "Albaab Lacageed": "gateway",
  // News
  "Newsroom": "news", "Qolka Wararka": "news",
  "Press Release": "press", "Saxaafadda": "press",
  "Gallery": "gallery", "Sawirada": "gallery",
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */
const en_so = (en, so) => ({ en, so: so || en });

// shorthand step builder
const step = (title, body) => ({ title, body });
// generic KYC requirements shared by personal accounts
const KYC_PERSONAL = [
  "Copy of valid Passport, National ID, Birth Certificate, Regional Government ID, or Driving Licence",
  "Valid Employment ID",
  "Passport-size photograph",
  "Contact and address information",
];
const KYC_BUSINESS = [
  "Copy of valid certificate of registration",
  "Notarized memorandum or articles of association",
  "Valid ID for directors and authorised signatories",
  "Request letter indicating resolution to open account & signing mandates",
  "Passport-size photo for each signatory",
  "Company / organisation profile",
];

/* -------------------------------------------------------------------------- */
/*  Detail content (D)                                                        */
/* -------------------------------------------------------------------------- */
const D = window.PB_DETAILS = {

  /* ============================  ABOUT  ===================================*/
  who: {
    cat: "About", cat_so: "Ku Saabsan", accent: "primary", icon: "about",
    title: en_so("Who We Are", "Yaan Nahay"),
    eyebrow: en_so("Premier Bank · Est. 2013, licensed 2014", "Premier Bank · 2013 / 2014"),
    tagline: en_so(
      "Premier Bank is a privately-owned Shari'ah-compliant commercial bank, incorporated in Somalia in 2013 and licensed by the Central Bank of Somalia in 2014. We offer comprehensive one-stop financial solutions to private and government institutions, corporate and SME businesses, and individuals across Somalia and the diaspora.",
      "Premier Bank waa bangi gaar loo leeyahay, waafaqsan Shareecada, oo Soomaaliya laga aasaasay 2013, shati ka qaatay CBS 2014."
    ),
    highlights: [
      { value: "2013", label: en_so("Founded in Somalia", "Asaaska Soomaaliya") },
      { value: "2014", label: en_so("CBS-licensed", "Shati CBS") },
      { value: "101+", label: en_so("Remittance countries", "Dalal remittance") },
    ],
    features: [
      { icon: "shariah", title: "Shari'ah-compliant by design", body: "Every product is structured around Islamic finance principles — no riba, full transparency, profit-sharing where applicable." },
      { icon: "globe",   title: "Built for a new Somalia",      body: "We believe in the promise of a new Somalia. Our role is to encourage economic and community development through modern banking." },
      { icon: "team",    title: "One-stop financial solutions", body: "Private individuals, SMEs, corporates and government — all served from the same network of branches, agents, and digital rails." },
      { icon: "agency",  title: "12,000+ authorised agents",    body: "Wherever you live in Somalia, a Premier counter is nearby — even far from a branch." },
    ],
    steps: [
      step("Open in a branch or the Wallet", "Personal accounts open same-day in any branch, or remotely via Premier Wallet."),
      step("Bank with us",                    "Accounts, cards, financing, transfers — all on one customer ID."),
      step("Grow with us",                    "Move from a student account to a salary account to a business facility — without changing banks."),
    ],
    faqs: [
      { q: "Is Premier Bank Shari'ah-compliant?", a: "Yes — fully. Every product is reviewed and certified by our independent Shari'ah Supervisory Board." },
      { q: "Where is Premier regulated?",         a: "Licensed and supervised by the Central Bank of Somalia (CBS)." },
    ],
    cta1: en_so("Open an account", "Furo akoon"),
    cta2: en_so("Read 2024 report", "Akhri warbixin 2024"),
  },

  values: {
    cat: "About", cat_so: "Ku Saabsan", accent: "secondary", icon: "star",
    title: en_so("Mission, Vision & Values", "Hadafka, Aragtida & Qiimaha"),
    eyebrow: en_so("What guides every Premier decision", "Waxa hagaya go'aan kasta"),
    tagline: en_so(
      "Mission — to provide transformative and accessible financial solutions through excellent services for a better society. Vision — to be the best bank that customers will ever want.",
      "Hadaf — bixinta xal maaliyadeed gaadhi kara. Aragti — inaan noqono bangiga ugu fiican ee macaamiisha ay marba doonayaan."
    ),
    highlights: [
      { value: "5",     label: en_so("Core values",          "Qiimo gundheer") },
      { value: "100%",  label: en_so("Shari'ah-aligned",     "Shareecada") },
      { value: "Daily", label: en_so("Lived, not posted",    "Maalin walba") },
    ],
    features: [
      { icon: "personal", title: "People First",        body: "We build relationships. We are professional. We offer excellent service." },
      { icon: "shield",   title: "Integrity",           body: "We are trustworthy and behave in an open, honest and ethical manner — considering the impact and consequences of every decision and action." },
      { icon: "check",    title: "Accountability",      body: "We take responsibility for our decisions, actions and performance. We adhere to Shari'ah principles and international banking standards." },
      { icon: "joint",    title: "Partnership",         body: "We are committed to partnering with all stakeholders — seeking innovative and efficient ways to meet everyone's needs." },
      { icon: "star",     title: "Customer Centricity", body: "We understand who the customer is, and deliver high-quality services that meet and exceed every customer's expectation." },
    ],
    steps: [
      step("Mission",         "To provide transformative and accessible financial solutions through excellent services for a better society."),
      step("Vision",          "To be the best bank that customers will ever want."),
      step("Promise",         "We believe in the promise of a new Somalia — and our role in rebuilding it through modern banking."),
    ],
    faqs: [],
    cta1: en_so("Open an account", "Furo akoon"),
    cta2: en_so("Talk to a banker", "La hadal banker"),
  },

  board: {
    cat: "About", cat_so: "Ku Saabsan", accent: "primary", icon: "board",
    title: en_so("Board of Directors", "Guddiga Maamulka"),
    eyebrow: en_so("Independent governance", "Maamul madax-banaan"),
    tagline: en_so(
      "An independent, non-executive board steering Premier's long-term strategy, risk and Shari'ah governance — with deep experience across Islamic finance, regulatory affairs, technology and East African markets.",
      "Guddi madax-banaan oo hagaya istaraatiijiyadda bangiga."
    ),
    highlights: [
      { value: "7",  label: en_so("Board members",       "Xubnaha") },
      { value: "5",  label: en_so("Independent",         "Madax-banaan") },
      { value: "4",  label: en_so("Standing committees", "Guddiyo") },
    ],
    features: [
      { icon: "shield",  title: "Audit & Risk",          body: "Reviews financial reporting, internal controls and Pillar III disclosures every quarter." },
      { icon: "shariah", title: "Shari'ah oversight",    body: "Coordinates with the Shari'ah Supervisory Board on product approvals and compliance audits." },
      { icon: "invest",  title: "Strategy",              body: "Sets three-year strategy, M&A direction and regional expansion priorities." },
      { icon: "team",    title: "Nominations & remuneration", body: "Owns C-suite succession, executive pay and director independence reviews." },
    ],
    steps: [
      step("Chairman",                "Sets agenda; leads quarterly cycles. Independent. Reports to shareholders."),
      step("Independent directors",   "Lead Audit, Risk and Shari'ah committees. Three-year terms, max two consecutive."),
      step("Executive director (CEO)","Bridge between management and governance — the only executive on the board."),
    ],
    faqs: [],
    cta1: en_so("Investor relations", "Maalgashada"),
    cta2: en_so("Download 2024 report", "Soo dejiso warbixin"),
  },

  shariah: {
    cat: "About", cat_so: "Ku Saabsan", accent: "secondary", icon: "shariah",
    title: en_so("Shari'ah Supervisory Board", "Guddiga Shareecada Islaamka"),
    eyebrow: en_so("Independent · Three scholars", "Madax-banaan · Saddex culimo"),
    tagline: en_so(
      "Premier Bank's products, contracts and operations are reviewed continuously by an independent panel of three internationally-recognised Shari'ah scholars, following AAOIFI standards.",
      "Adeegyada Premier waxaa eega saddex culimo madax-banaan, sida heerarka AAOIFI."
    ),
    highlights: [
      { value: "3",      label: en_so("SSB scholars",            "Culimo SSB") },
      { value: "100%",   label: en_so("Products reviewed",       "Adeegyo la eegay") },
      { value: "AAOIFI", label: en_so("Standards followed",      "Heerarka") },
    ],
    features: [
      { icon: "press",  title: "Pre-launch fatwa",       body: "Every new product receives a written fatwa before launch, signed by all three scholars." },
      { icon: "check",  title: "Annual Shari'ah audit",  body: "Internal team reviews 100% of contracts; SSB signs off on the audit report." },
      { icon: "shield", title: "Profit purification",    body: "Any non-compliant income is identified, donated to charity, and disclosed publicly." },
      { icon: "news",   title: "Customer education",     body: "Fatwas, contract templates and product mechanics are published openly on the Shari'ah resource centre." },
    ],
    steps: [
      step("Product team drafts",  "Business team builds the contract and process, with the in-house Shari'ah officer."),
      step("Internal review",      "Shari'ah officer reviews, then forwards to the SSB if compliant."),
      step("SSB deliberation",     "Scholars meet and either issue a fatwa, request changes, or reject."),
      step("Annual audit",         "Once live, contracts are sampled annually for ongoing compliance."),
    ],
    faqs: [
      { q: "Can the SSB block a product?",      a: "Yes. SSB approval is mandatory; no financial product launches without a written fatwa." },
      { q: "Are the scholars paid by Premier?", a: "They receive a fixed retainer disclosed in the annual report. Independence is contractual and enforced." },
    ],
    cta1: en_so("Read our fatwas", "Akhri fatwooyinka"),
    cta2: en_so("Contact the SSB", "La xidhiidh SSB"),
  },

  leadership: {
    cat: "About", cat_so: "Ku Saabsan", accent: "primary", icon: "team",
    title: en_so("Senior Management", "Maamulka Sare"),
    eyebrow: en_so("The team running Premier", "Kooxda maamulka"),
    tagline: en_so(
      "A bench of bankers, technologists and operators with experience across Citi, Standard Chartered, the Islamic Development Bank and the largest banks in East Africa.",
      "Koox bangiyo, tikniyolajiyad iyo hawlgal leh."
    ),
    highlights: [
      { value: "9",    label: en_so("C-suite executives", "Madaxda sare") },
      { value: "180+", label: en_so("Years combined",     "Sano la isku daray") },
      { value: "5/9",  label: en_so("Somali nationals",   "Soomaali") },
    ],
    features: [
      { icon: "team",  title: "CEO",                  body: "Sets group strategy and chairs the executive committee. Reports to the Board quarterly." },
      { icon: "invest",title: "CFO & COO",            body: "Run finance, treasury, balance sheet, and operations + branch network respectively." },
      { icon: "internet",title: "CTO & CDO",          body: "Own core banking, the Wallet app, and data + analytics." },
      { icon: "shield",title: "CRO, CCO, General Counsel", body: "Risk, compliance, AML and legal — direct reporting to the Audit Committee for independence." },
    ],
    steps: [],
    faqs: [],
    cta1: en_so("Investor relations", "Maalgashada"),
    cta2: en_so("Press enquiries", "Saxaafad"),
  },

  /* ============================  ACCOUNTS  ================================*/
  personal: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "personal",
    title: en_so("Personal Current Account", "Akoon Shakhsi"),
    eyebrow: en_so("Everyday banking", "Maalmaha caadiga"),
    tagline: en_so(
      "Your everyday Premier account — for salaries, bills, debit-card purchases and Wallet transfers. Open in any branch with valid ID, or remotely via Premier Wallet.",
      "Akoonkaaga maalmaha caadiga ah — mushahar, biil, kaar iyo Wallet."
    ),
    highlights: [
      { value: "Same-day", label: en_so("Account opening", "Furida akoon") },
      { value: "Free",     label: en_so("Premier Wallet",  "Premier Wallet") },
      { value: "Free",     label: en_so("First debit card","Kaar koowaad") },
    ],
    features: [
      { icon: "card",     title: "Free Mastercard debit",  body: "Use your Premier debit card at any POS and ATM worldwide where Mastercard is accepted." },
      { icon: "wallet",   title: "Wallet bundled in",       body: "Same customer ID, same login — Premier Wallet works alongside your account from day one." },
      { icon: "send",     title: "Premier-to-Premier instant", body: "Send and receive between Premier accounts in seconds, with notifications on both sides." },
      { icon: "shield",   title: "SMS & app alerts",        body: "Every transaction triggers a notification. Spend control, card freeze and limits all in-app." },
    ],
    steps: [
      step("Visit a branch (or open in-app)", "Same-day opening in branch. Wallet-based remote onboarding for KYC-eligible customers."),
      step("Submit requirements",             KYC_PERSONAL.join("; ")),
      step("Receive your details",            "Account number issued at the counter. Debit card delivered within 2–4 working days."),
      step("Start banking",                   "Salaries, bills, Wallet transfers and Mastercard purchases — all live."),
    ],
    faqs: [
      { q: "What documents do I need?", a: KYC_PERSONAL.join(", ") + "." },
      { q: "Is there a minimum balance?", a: "No minimum balance for personal accounts. Funding is recommended to access card and Wallet features." },
    ],
    cta1: en_so("Open in the Wallet", "Ku fur Wallet"),
    cta2: en_so("Compare accounts",   "Isbarbar dhig"),
  },

  savings: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "saving",
    title: en_so("Personal Saving Account", "Akoon Kayd"),
    eyebrow: en_so("Mudaraba profit-sharing", "Mudaraba"),
    tagline: en_so(
      "A Shari'ah-compliant savings account based on the Mudaraba profit-sharing structure — your savings are invested in halal business activity, and you share the profit.",
      "Akoon kayd waafaqsan Shareecada — Mudaraba oo aad faa'iidada la wadaagto."
    ),
    highlights: [
      { value: "Profit-share", label: en_so("No interest",        "Faa'iido la wadaago") },
      { value: "Quarterly",    label: en_so("Profit distribution","Bil-saddexaad") },
      { value: "Flexible",     label: en_so("Anytime withdrawal", "Soo qaado mar kasta") },
    ],
    features: [
      { icon: "invest", title: "Profit-sharing returns",  body: "Returns come from real economic activity — not interest — paid out quarterly." },
      { icon: "wallet", title: "Goals & jars",             body: "Split your savings into named goals (Hajj, school fees, emergency) and track progress." },
      { icon: "shield", title: "Capital preserved",        body: "Your principal is preserved; only profits fluctuate with performance." },
      { icon: "check",  title: "Shari'ah-certified",       body: "Reviewed and certified by our Shari'ah Supervisory Board, following AAOIFI standards." },
    ],
    steps: [
      step("Open in branch or Wallet", "Same-day setup with personal ID."),
      step("Submit requirements",      KYC_PERSONAL.join("; ")),
      step("Fund your account",        "Top up any amount — there is no minimum for the liquid Mudaraba."),
      step("Receive quarterly profit", "Notification when profit posts. Withdraw any time."),
    ],
    faqs: [],
    cta1: en_so("Open savings", "Furo kayd"),
    cta2: en_so("Profit calculator", "Xisaabin faa'iido"),
  },

  salary: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "salary",
    title: en_so("Personal Salary Account", "Akoon Mushahar"),
    eyebrow: en_so("For salaried professionals", "Shaqaale mushahar"),
    tagline: en_so(
      "A Premier account designed for salaried professionals. Receive your pay, automate bills, and access bundled benefits like free debit and Wallet.",
      "Akoon loogu talagalay shaqaalaha mushahar — ka hel, biil bixin oo ku adeegso wallet bilaash."
    ),
    highlights: [
      { value: "Free",      label: en_so("Premier debit card", "Kaar bilaash") },
      { value: "Same-day",  label: en_so("Salary credit",      "Mushahar isla maalin") },
      { value: "No fee",    label: en_so("Account maintenance","Bilaash") },
    ],
    features: [
      { icon: "payroll", title: "Direct salary credit",    body: "Your employer's Premier Payroll feed credits your account same-day with an SMS notification." },
      { icon: "card",    title: "Free debit card",          body: "Mastercard debit card — first card free, replacement at standard fee." },
      { icon: "wallet",  title: "Wallet & bills",           body: "Pay rent, utilities and school fees from the Wallet, set up standing orders inside the app." },
      { icon: "shield",  title: "Spend tracking",           body: "Every transaction logged with category, merchant and notification." },
    ],
    steps: [
      step("Get a letter from your employer", "Most employers on Premier Payroll can onboard you in branch the same day."),
      step("Submit requirements",             KYC_PERSONAL.join("; ")),
      step("Activate Wallet and card",        "Mobile and physical card live within 24 hours."),
    ],
    faqs: [
      { q: "Does my employer need to be on Premier Payroll?", a: "No, but it speeds salary settlement. We accept inbound salary from any local bank." },
    ],
    cta1: en_so("Open salary account", "Furo akoon mushahar"),
    cta2: en_so("Talk to a banker", "La hadal banker"),
  },

  student: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "student",
    title: en_so("Personal Student Account", "Akoon Arday"),
    eyebrow: en_so("For students", "Arday"),
    tagline: en_so(
      "A starter Premier account for students — minimum-fee banking, free Wallet and Mastercard, and savings goals for fees and books.",
      "Akoonka koowaad ee ardayda — Wallet & Mastercard bilaash, kayd hadaf leh."
    ),
    highlights: [
      { value: "13+",  label: en_so("Minimum age (with guardian)", "Da'da ugu yar") },
      { value: "Free", label: en_so("Account & Wallet",            "Akoon & Wallet") },
      { value: "Free", label: en_so("Mastercard",                  "Mastercard") },
    ],
    features: [
      { icon: "saving", title: "Saving jars for fees",  body: "Set targets for tuition, books and exams. Track progress in the Wallet." },
      { icon: "wallet", title: "Wallet for daily life", body: "Top up airtime, pay university fees, and split costs with friends." },
      { icon: "card",   title: "Mastercard debit",      body: "Free first card. Works at any Mastercard POS or ATM in Somalia or abroad." },
    ],
    steps: [
      step("Submit student requirements", "Valid ID + Valid Student ID + Passport-size photo + Contact information."),
      step("Optional guardian co-sign",   "Under-18 customers require a parent or guardian co-signer."),
      step("Activate in 24h",             "Account live same-day; physical card delivered 2–4 days."),
    ],
    faqs: [],
    cta1: en_so("Open student account", "Furo akoon arday"),
    cta2: en_so("FAQs", "Su'aalaha"),
  },

  joint: {
    cat: "Accounts", cat_so: "Akoonada", accent: "primary", icon: "joint",
    title: en_so("Joint Account", "Akoon Wadaag"),
    eyebrow: en_so("2–5 individuals", "2–5 qof"),
    tagline: en_so(
      "A shared Premier account for two to five individuals — perfect for couples, families, business partners and pooled goal-savings.",
      "Akoon labo ilaa shan qof oo wadaagaan."
    ),
    highlights: [
      { value: "2–5",  label: en_so("Account holders",  "Mulkiile") },
      { value: "Flexible", label: en_so("Operating mandate", "Sida la maamulo") },
      { value: "Shared",   label: en_so("Cards & Wallet",     "Kaar & Wallet") },
    ],
    features: [
      { icon: "joint",   title: "Multi-signatory rules", body: "Choose 'any one' or 'all-together' operating mandate for transactions." },
      { icon: "saving",  title: "Shared savings goals",  body: "Pool funds toward family goals — house deposit, Hajj, weddings, education." },
      { icon: "wallet",  title: "Shared Wallet view",    body: "Every signatory sees activity in their own Wallet, with SMS alerts." },
    ],
    steps: [
      step("All signatories submit IDs",   "Valid Passport / National ID / Birth Cert / Driving Licence for every account holder."),
      step("Submit request letter",        "Letter stating the account operating mandate and purpose."),
      step("Provide photos & contacts",    "Passport-size photo and address details for each holder."),
    ],
    faqs: [],
    cta1: en_so("Open joint account", "Furo akoon wadaag"),
    cta2: en_so("Talk to a banker", "La hadal banker"),
  },

  hajj: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "hajj",
    title: en_so("Hajj & Umra Account", "Hajj & Cumra"),
    eyebrow: en_so("Goal-based savings", "Kayd hadaf leh"),
    tagline: en_so(
      "A dedicated account for saving toward Hajj and Umrah — set your target, see the timeline, and let Premier help you get there.",
      "Akoon gaar ah oo aad u kaydsato Hajj iyo Cumra — qabo hadaf, raac waqtigaaga, oo Premier wuu kuu caawinayaa."
    ),
    highlights: [
      { value: "Goal-based", label: en_so("Savings plan",     "Qorshe kayd") },
      { value: "Mudaraba",   label: en_so("Profit-sharing",   "Faa'iido la wadaago") },
      { value: "Partner",    label: en_so("Travel partners",  "Iskaashi safarid") },
    ],
    features: [
      { icon: "saving",   title: "Pilgrimage savings", body: "Save monthly toward Hajj or Umrah; Premier shows you the projected timeline based on cost estimates." },
      { icon: "wallet",   title: "Pay-in from Wallet", body: "Round up Wallet transactions into the Hajj jar, automatic deposits, or one-off contributions." },
      { icon: "joint",    title: "Family co-saving",   body: "Multiple family members can contribute to a single goal — co-saving for a parent's pilgrimage." },
    ],
    steps: [
      step("Open the Hajj account",         "In branch or the Wallet."),
      step("Submit requirements",           KYC_PERSONAL.join("; ")),
      step("Set your target & timeline",    "Premier calculates a recommended monthly contribution."),
      step("Travel with confidence",        "When you're ready, Premier's travel partners help with logistics."),
    ],
    faqs: [],
    cta1: en_so("Start saving for Hajj", "Bilow kayd Hajj"),
    cta2: en_so("Speak to a banker", "La hadal banker"),
  },

  women: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "women",
    title: en_so("Maandeeq Account (Women)", "Maandeeq Akoon Haween"),
    eyebrow: en_so("Applicable only for women", "Haween kaliya"),
    tagline: en_so(
      "Maandeeq is a Premier account designed specifically for women — featuring goal savings, business onboarding support, and a dedicated relationship banker.",
      "Akoon Maandeeq waxaa loo qaabeeyay haweenka — kayd hadaf leh, taageero ganacsi iyo banker gaar ah."
    ),
    highlights: [
      { value: "Women", label: en_so("Eligibility",        "Cidda u qalanta") },
      { value: "Free",  label: en_so("Account & Wallet",   "Akoon & Wallet") },
      { value: "1:1",   label: en_so("Relationship banker","Banker gaar ah") },
    ],
    features: [
      { icon: "saving",  title: "Savings groups (Hagbad)", body: "Run rotating-savings groups inside the Wallet — fully tracked, fully Shari'ah-compliant." },
      { icon: "business",title: "Business onboarding",     body: "If you start a business, Maandeeq supports the transition to a sole-trader account with reduced paperwork." },
      { icon: "team",    title: "Women's banking events",   body: "Quarterly events on financial literacy, entrepreneurship and Shari'ah finance." },
    ],
    steps: [
      step("Submit requirements", KYC_PERSONAL.join("; ")),
      step("Activate Maandeeq",   "Same-day account opening, with dedicated onboarding banker."),
      step("Bank your way",       "Wallet, card, savings, group savings — all on one customer ID."),
    ],
    faqs: [],
    cta1: en_so("Open Maandeeq", "Furo Maandeeq"),
    cta2: en_so("Visit a branch", "Booqo laanta"),
  },

  business: {
    cat: "Accounts", cat_so: "Akoonada", accent: "primary", icon: "business",
    title: en_so("Business Current Account", "Akoon Ganacsi"),
    eyebrow: en_so("For traders, importers & SMEs", "Ganacsato"),
    tagline: en_so(
      "Built for Somali business: multi-currency, multi-signatory, payroll-ready, and integrated with Premier Omni for online treasury, escrow and SWIFT.",
      "Loo dhisay ganacsiga Soomaaliyeed — lacago kala duwan, saxiixyo badan, payroll & SWIFT."
    ),
    highlights: [
      { value: "USD / SOS", label: en_so("Multi-currency",        "Lacago kala duwan") },
      { value: "Up to 8",   label: en_so("Authorised signatories","Saxiixayaal") },
      { value: "Dedicated", label: en_so("Relationship manager",  "Banker khaas") },
    ],
    features: [
      { icon: "internet",title: "Premier Omni online banking", body: "Multi-user, role-based dashboard with maker-checker controls for every transaction." },
      { icon: "payroll", title: "Bulk payroll",                  body: "Upload a payroll file or push from your HR system; salaries hit Wallets and accounts instantly." },
      { icon: "swift",   title: "SWIFT for trade",                body: "Outbound payments to 101+ countries via PBSMSOSM." },
      { icon: "shield",  title: "Escrow accounts",                body: "Lock funds for tenders, real-estate or marketplace deals — released only when conditions are met." },
    ],
    steps: [
      step("Submit corporate KYC", KYC_BUSINESS.join("; ")),
      step("Relationship manager",  "A named banker guides setup, signatories, and first transactions."),
      step("Go live on Omni",        "Typical SME go-live: 5 business days."),
    ],
    faqs: [
      { q: "Can I bank in USD?", a: "Yes — USD is supported as a primary or secondary currency, alongside SOS." },
    ],
    cta1: en_so("Talk to a banker", "La hadal banker"),
    cta2: en_so("See Omni demo",    "Eeg Omni"),
  },

  sole: {
    cat: "Accounts", cat_so: "Akoonada", accent: "primary", icon: "corporate",
    title: en_so("Business Sole-Proprietor Account", "Akoon Mulkiile Keli"),
    eyebrow: en_so("For single-owner businesses", "Ganacsi keligii leh"),
    tagline: en_so(
      "A simplified business account for sole proprietors — one signatory, one trade licence, full access to payroll, POS and Mastercard.",
      "Akoon ganacsi fudud oo loogu talagalay ganacsato keligood leh — adeeg buuxa."
    ),
    highlights: [
      { value: "1",         label: en_so("Owner / signatory",  "Mulkiile") },
      { value: "Same-day",  label: en_so("Setup",              "Furida") },
      { value: "Bundled",   label: en_so("POS & Wallet",       "POS & Wallet") },
    ],
    features: [
      { icon: "pos",      title: "POS for your shop",     body: "Accept Mastercard, Visa and Premier Wallet at your counter; settle same-day to your account." },
      { icon: "wallet",   title: "Wallet for the business", body: "Pay suppliers, run small payroll, and collect payments — all from a single Wallet linked to your business." },
      { icon: "card",     title: "Business Mastercard",    body: "Separate business debit card with controlled limits and expense tracking." },
    ],
    steps: [
      step("Submit requirements", "Valid business certificate; Valid ID for owner; Request letter; Photo; Address & contact information."),
      step("Activate Wallet & card", "Account live same-day; POS terminal delivered within 48 hours if ordered."),
    ],
    faqs: [],
    cta1: en_so("Open sole-proprietor", "Furo Mulkiile Keli"),
    cta2: en_so("Get a POS terminal", "Hel POS"),
  },

  ngo: {
    cat: "Accounts", cat_so: "Akoonada", accent: "primary", icon: "ngo",
    title: en_so("Umma Account (NGO)", "Umma Akoon (NGO)"),
    eyebrow: en_so("NGOs, trusts, charities, education sector", "NGO, charity, waxbarasho"),
    tagline: en_so(
      "Umma is the Premier account for non-profits — NGOs, trusts, charities and educational institutions. Built for donor reporting, multi-signatory governance and Shari'ah compliance.",
      "Akoon Umma waa kan Premier ee NGO, charity, iyo waxbarashada."
    ),
    highlights: [
      { value: "Multi", label: en_so("Signatories",         "Saxiixayaal badan") },
      { value: "Audit", label: en_so("Trail for every txn", "Daawasho bixin kasta") },
      { value: "Donor", label: en_so("Reporting ready",     "Warbixin deeq") },
    ],
    features: [
      { icon: "shield", title: "Donor-ready statements", body: "Granular statements you can hand directly to donors, with txn-level metadata and receipts." },
      { icon: "swift",  title: "Inbound USD via SWIFT",  body: "Receive donor funds globally via PBSMSOSM with full audit trail." },
      { icon: "team",   title: "Programme accounts",      body: "Sub-accounts per programme or project with separate signatories and budgets." },
    ],
    steps: [
      step("Submit requirements", "Valid registration certificate; Notarised memorandum or articles; Director IDs; Request letter; Organisation profile; Declaration of source of income."),
      step("Banker assignment",    "Dedicated NGO banker walks you through programme account setup."),
      step("Go live",              "Average activation: 7 business days."),
    ],
    faqs: [],
    cta1: en_so("Open Umma account", "Furo Umma"),
    cta2: en_so("Talk to NGO team", "La hadal kooxda NGO"),
  },

  corporate: {
    cat: "Accounts", cat_so: "Akoonada", accent: "primary", icon: "corporate",
    title: en_so("Corporate Account", "Akoon Shirkadeed"),
    eyebrow: en_so("For groups & large corporates", "Shirkado waaweyn"),
    tagline: en_so(
      "Premier's corporate banking — for large enterprises, holding companies and group entities. Multi-entity, multi-currency, multi-signatory, with Omni online banking and dedicated treasury.",
      "Bangiyada shirkadeed ee Premier — shirkado waaweyn iyo kooxo."
    ),
    highlights: [
      { value: "Multi-entity",   label: en_so("Group structure",  "Habdhiska kooxda") },
      { value: "USD/SOS/EUR",    label: en_so("Currencies",        "Lacago") },
      { value: "Treasury",       label: en_so("Dedicated desk",    "Mid khaas") },
    ],
    features: [
      { icon: "internet", title: "Omni online banking",   body: "Role-based access, maker-checker, audit trail and SWIFT-from-the-desktop." },
      { icon: "swift",    title: "Trade finance & LCs",    body: "Letters of credit, shipping guarantees, bank guarantees, import / invoice financing." },
      { icon: "invest",   title: "Treasury desk",          body: "FX hedging, money-market deposits and structured products — all Shari'ah-compliant." },
      { icon: "shield",   title: "Escrow & custody",       body: "Lockup funds for M&A, tenders or shareholder agreements." },
    ],
    steps: [
      step("Submit requirements", KYC_BUSINESS.join("; ")),
      step("Credit committee",     "Two-week underwriting on first facility; faster on renewals."),
      step("Go live on Omni",      "Group structures: 10 business days. Treasury desk activated thereafter."),
    ],
    faqs: [],
    cta1: en_so("Talk to corporate", "La hadal corporate"),
    cta2: en_so("See trade finance", "Eeg trade finance"),
  },

  diaspora: {
    cat: "Accounts", cat_so: "Akoonada", accent: "secondary", icon: "diaspora",
    title: en_so("Diaspora Account", "Akoon Diaspora"),
    eyebrow: en_so("For Somalis abroad", "Soomaalida dibadda"),
    tagline: en_so(
      "A Premier account designed for Somalis living abroad — open from London, Minneapolis, Stockholm or Dubai, and send to family at transparent FX rates via 101+ countries.",
      "Akoon Premier oo loogu talagalay Soomaalida dibadda — 101+ dal."
    ),
    highlights: [
      { value: "0.4%",   label: en_so("FX margin",       "Margin sarrif") },
      { value: "30 sec", label: en_so("Family payout",   "Lacag-bixin") },
      { value: "Remote", label: en_so("Onboarding",      "Online") },
    ],
    features: [
      { icon: "globe",   title: "Open from anywhere",    body: "Verify with your foreign address, residence permit and Somali passport. Average remote onboarding: 36 hours." },
      { icon: "swift",   title: "Live, transparent FX",  body: "Mid-market rate and 0.4% margin shown upfront. No surprises for the receiver." },
      { icon: "joint",   title: "Family Wallet links",   body: "Set up named recipients with monthly limits. They get a full Premier Wallet." },
    ],
    steps: [
      step("Apply online",       "Upload passport, foreign ID and proof of address."),
      step("Video KYC",          "Quick call with an onboarding banker, usually within 24 hours."),
      step("Fund and send",      "Top up via SWIFT, Wise, or partner banks. Send to family in seconds."),
    ],
    faqs: [],
    cta1: en_so("Apply remotely", "Codso online"),
    cta2: en_so("FX calculator",  "Xisaabin sarrif"),
  },

  /* ============================  CARDS  ===================================*/
  classic: {
    cat: "Cards", cat_so: "Kaararka", accent: "primary", icon: "card",
    title: en_so("Premier Classic Mastercard", "Premier Classic"),
    eyebrow: en_so("Card limit · USD 2,000", "Xadka · USD 2,000"),
    tagline: en_so(
      "Premier Classic Mastercard is a secure tool for payment via Internet/POS and cash withdrawal via ATM worldwide. Use it anywhere the Mastercard logo is displayed in Somalia or abroad.",
      "Kaar amaan ah oo loogu talagalay bixin online & POS iyo lacag soo qaadasho ATM — meel kasta oo Mastercard la aqbalo."
    ),
    highlights: [
      { value: "$2,000",   label: en_so("Card limit",        "Xadka") },
      { value: "Worldwide",label: en_so("Mastercard accepted","Loo aqbalo") },
      { value: "Chip+PIN", label: en_so("Security",          "Amni") },
    ],
    features: [
      { icon: "pos",      title: "Pay anywhere with POS",   body: "Supermarkets, hotels, companies — anywhere the Mastercard logo is displayed." },
      { icon: "atm",      title: "ATM withdrawals worldwide",body: "Withdraw cash from any Mastercard-enabled ATM, 24/7." },
      { icon: "internet", title: "Online checkout",          body: "Use for airline tickets, hotel bookings, e-commerce — globally." },
      { icon: "shield",   title: "Safety & convenience",      body: "Skip carrying cash; transactions backed by Mastercard's global consumer protection." },
    ],
    steps: [
      step("Apply in branch or Wallet", "Existing Premier customer? Order from the Wallet. New? Visit any branch."),
      step("KYC & verification",        KYC_PERSONAL.join("; ")),
      step("Receive your card",         "Delivered in 2–4 working days. Activate with a tap in the Wallet."),
    ],
    faqs: [],
    cta1: en_so("Apply for Classic", "Codso Classic"),
    cta2: en_so("Compare cards",     "Isbarbar dhig"),
  },

  platinum: {
    cat: "Cards", cat_so: "Kaararka", accent: "secondary", icon: "cardPlatinum",
    title: en_so("Premier Platinum Mastercard", "Premier Platinum"),
    eyebrow: en_so("Card limit · USD 2,000", "Xadka · USD 2,000"),
    tagline: en_so(
      "A premium Platinum Mastercard with the same worldwide acceptance — designed for customers who want a higher card grade with enhanced look and feel.",
      "Kaar tayo sare ah — heer Platinum, dunida oo dhan loo aqbalo."
    ),
    highlights: [
      { value: "$2,000",  label: en_so("Card limit",        "Xadka") },
      { value: "Platinum",label: en_so("Card grade",        "Heerka") },
      { value: "Premium", label: en_so("Look & finish",     "Muuqaalka") },
    ],
    features: [
      { icon: "pos",     title: "Worldwide POS",        body: "Convenient payment processing at any Mastercard POS in Somalia or abroad." },
      { icon: "atm",     title: "ATM withdrawals",       body: "24/7 cash access at any Mastercard-enabled ATM." },
      { icon: "shield",  title: "Enhanced security",     body: "Built with high-end security features for safer banking." },
    ],
    steps: [
      step("Existing Premier customer", "Order from the Wallet or via your relationship banker."),
      step("KYC & verification",         KYC_PERSONAL.join("; ")),
      step("Card delivered",             "2–4 working days; instant virtual card available in the Wallet."),
    ],
    faqs: [],
    cta1: en_so("Apply for Platinum", "Codso Platinum"),
    cta2: en_so("Compare cards",      "Isbarbar dhig"),
  },

  corpcard: {
    cat: "Cards", cat_so: "Kaararka", accent: "primary", icon: "card",
    title: en_so("Premier Corporate Mastercard", "Kaarka Shirkadda"),
    eyebrow: en_so("Card limit · USD 3,000", "Xadka · USD 3,000"),
    tagline: en_so(
      "Premier Corporate Mastercard is suitable for medium-sized and large companies with complex expense structures and higher demands in terms of reporting.",
      "Kaarka shirkadda — shirkadaha dhexe iyo waaweyn ee leh kharashyo isku dhafan."
    ),
    highlights: [
      { value: "$3,000",   label: en_so("Card limit",      "Xadka") },
      { value: "Multi-user",label: en_so("Cards per company","Kaararka shirkad") },
      { value: "Reports",  label: en_so("Expense tracking", "Xisaabin kharash") },
    ],
    features: [
      { icon: "corporate",title: "For SMEs and corporates", body: "Modern, secure payment for daily business expenditure." },
      { icon: "internet", title: "Expense reporting",        body: "Detailed reports per cardholder, per category — exported to your accounting system." },
      { icon: "shield",   title: "Spend controls",            body: "Per-card and per-category limits; freeze and adjust from Omni in seconds." },
    ],
    steps: [
      step("Corporate facility",  "Available to Premier business customers. Talk to your relationship manager."),
      step("Cardholder KYC",       "ID + photo + business letter for each cardholder."),
      step("Cards delivered",      "Bulk delivery to your office; activation via Omni." ),
    ],
    faqs: [],
    cta1: en_so("Request corporate cards", "Codso kaararka shirkadda"),
    cta2: en_so("See Omni dashboard",      "Eeg Omni"),
  },

  elite: {
    cat: "Cards", cat_so: "Kaararka", accent: "primary", icon: "cardElite",
    title: en_so("Premier World Elite Mastercard", "Premier World Elite"),
    eyebrow: en_so("Card limit · USD 5,000", "Xadka · USD 5,000"),
    tagline: en_so(
      "Premier Bank World Elite Mastercard credit card is the gateway to a world of unique experiences and services — loyalty programmes, lounge access, luxury accommodations and VIP shopping.",
      "World Elite waa albaab madadaalo gaar ah — qolal sare, hudheelo, iyo VIP."
    ),
    highlights: [
      { value: "$5,000",   label: en_so("Card limit",          "Xadka") },
      { value: "Worldwide",label: en_so("Lounge access",       "Lounges") },
      { value: "VIP",      label: en_so("Shopping privileges", "Iibsasho VIP") },
    ],
    features: [
      { icon: "star",   title: "Exclusive privileges", body: "Loyalty programme upgrades, global lounge access, luxury accommodation privileges and VIP shopping experiences." },
      { icon: "globe",  title: "Global acceptance",    body: "Accepted anywhere Mastercard World Elite is honoured, in 200+ countries." },
      { icon: "shield", title: "Concierge & protection",body: "24/7 concierge, travel insurance, and Mastercard's premium fraud protection." },
    ],
    steps: [
      step("Eligibility review",   "World Elite is invitation-only for customers meeting income and balance criteria."),
      step("KYC & verification",   KYC_PERSONAL.join("; ")),
      step("Card delivery",        "Express delivery within 5 working days; concierge onboarding call follows."),
    ],
    faqs: [],
    cta1: en_so("Request invitation", "Codso casuumad"),
    cta2: en_so("Compare cards",      "Isbarbar dhig"),
  },

  /* ============================  FINANCING  ===============================*/
  auto: {
    cat: "Financing", cat_so: "Maalgelin", accent: "secondary", icon: "auto",
    title: en_so("Auto Finance", "Maalgelin Baabuur"),
    eyebrow: en_so("Sharia-compliant · From USD 3,000", "Shareeco · Bilow USD 3,000"),
    tagline: en_so(
      "A flexible and affordable financial solution that gives you access to your dream car. A tailor-made facility for salaried or self-employed individuals to purchase new or used cars for private use.",
      "Xal maaliyadeed dabacsanaan leh — heli baabuurkaaga riyaada."
    ),
    highlights: [
      { value: "USD 3,000+", label: en_so("Financing from",      "Bilow") },
      { value: "24 months",  label: en_so("Repayment period",    "Xilliga bixinta") },
      { value: "Shari'ah",   label: en_so("Sharia-compliant",    "Waafaqsan") },
    ],
    features: [
      { icon: "check",  title: "Free financial planning",  body: "Free planning and expert advice before you commit." },
      { icon: "auto",   title: "New & used cars",          body: "Finance both new and quality used vehicles for private use." },
      { icon: "invest", title: "Affordable monthly instalments", body: "Competitive profit rates locked at signing — no surprises later." },
      { icon: "shariah",title: "Sharia-compliant",         body: "Structured as Murabaha — Premier buys the car, you buy from Premier at a fixed margin." },
    ],
    steps: [
      step("Apply for Auto Finance",  "Online or in branch — pre-approval within 24 hours."),
      step("Documents",                "Payslips / business statements + ID + 30% down payment proof."),
      step("Vehicle inspection",       "Premier verifies the car (new or used) before purchase."),
      step("Sign & drive",             "Premier purchases; you pay fixed monthly instalments for up to 24 months."),
    ],
    faqs: [
      { q: "Can I settle early?",    a: "Yes, with a profit rebate proportional to the unused term. No penalty." },
      { q: "What's the minimum?",    a: "USD 3,000." },
    ],
    cta1: en_so("Apply now",            "Codso hadda"),
    cta2: en_so("Instalment calculator","Xisaabin"),
  },

  land: {
    cat: "Financing", cat_so: "Maalgelin", accent: "primary", icon: "land",
    title: en_so("Land Construction Finance", "Dhul & Dhismo"),
    eyebrow: en_so("Up to 36 months · Sharia-compliant", "36 bilood · Shareeco"),
    tagline: en_so(
      "A practical facility for ambitious individuals who want to enter construction but have limited funds to acquire land for development.",
      "Maalgelin oo loogu talagalay dadka rabaan inay galaan dhismaha laakiin aan haysan lacag dhulka lagu iibsado."
    ),
    highlights: [
      { value: "36 months", label: en_so("Repayment period",      "Xilliga") },
      { value: "30%",       label: en_so("Down payment required", "Hordhac") },
      { value: "Shari'ah",  label: en_so("Compliant structure",   "Waafaqsan") },
    ],
    features: [
      { icon: "check",  title: "Free planning & advice", body: "Expert advice before you commit. We help structure the deal." },
      { icon: "land",   title: "Land acquisition",       body: "Acquire titled land for construction or development." },
      { icon: "invest", title: "Competitive profit rates", body: "Profit rate locked at signing — no surprises." },
      { icon: "shariah",title: "Sharia-compliant",         body: "Structured as Murabaha / Diminishing Musharaka with full transparency." },
    ],
    steps: [
      step("Pre-approval",         "Tell us your budget and target plot. Indicative facility issued within 5 business days."),
      step("Documents required",   "Guarantee letter or property collateral; Title deed of plot; 30% down payment proof; Letter of introduction (if employed); 6-month bank statements; ID + 3 photos."),
      step("Land verification",    "Premier verifies title and conducts an independent valuation."),
      step("Drawdown & repayment", "Funds released to seller; you repay over up to 36 months."),
    ],
    faqs: [],
    cta1: en_so("Get pre-approved",  "Hel oggolaansho"),
    cta2: en_so("Talk to a banker",  "La hadal banker"),
  },

  trade: {
    cat: "Financing", cat_so: "Maalgelin", accent: "primary", icon: "trade",
    title: en_so("Business Trade Financing", "Maalgelin Ganacsi"),
    eyebrow: en_so("LCs · Guarantees · Working capital", "LC, Damaanad, Hawl-galin"),
    tagline: en_so(
      "Long, medium and short-term financing for business expansion and acquisition of commercial property. Ideal for businesses that need extra funds to meet trading requirements.",
      "Maalgelin muddo dheer, dhexdhexaad, iyo gaaban — ballaarinta ganacsiga iyo iibsiga hantida."
    ),
    highlights: [
      { value: "Short / Medium / Long", label: en_so("Tenor options", "Mudooyin") },
      { value: "5 products",            label: en_so("Trade rails",    "Adeegyo") },
      { value: "SWIFT-backed",          label: en_so("PBSMSOSM",       "PBSMSOSM") },
    ],
    features: [
      { icon: "send",      title: "Letters of Credit",      body: "Sight, usance and standby LCs — issued in USD, EUR, AED and other major currencies." },
      { icon: "shield",    title: "Shipping & Bank Guarantees", body: "Guarantees backing your trade obligations, customs, and tenders." },
      { icon: "globe",     title: "Import Financing",        body: "Pay your suppliers abroad; settle with Premier when you collect from your customers." },
      { icon: "invest",    title: "Invoice Financing",       body: "Cash against receivables — Premier advances against your invoices, you repay as customers pay." },
    ],
    steps: [
      step("Apply for a facility",  "Three years audited financials + ownership chart + trade flow."),
      step("Credit committee",       "Two-week underwriting on first facility; faster on renewals."),
      step("Documentation",          "Master Murabaha + facility letter. SWIFT codes set up; correspondent confirmations issued."),
      step("Draw and repay",         "Drawdowns via Omni; relationship manager owns the lifecycle."),
    ],
    faqs: [],
    cta1: en_so("Request facility", "Codso facility"),
    cta2: en_so("Trade finance team","Kooxda ganacsiga"),
  },

  /* ============================  SERVICES  ================================*/
  wallet: {
    cat: "Services", cat_so: "Adeegyada", accent: "secondary", icon: "wallet",
    title: en_so("Premier Wallet", "Premier Wallet"),
    eyebrow: en_so("The most-loved mobile money service in Somalia", "Adeega ugu jecel Soomaaliya"),
    tagline: en_so(
      "Premier Wallet offers financial services to non-banked populations or people with limited access to banks. A safe, affordable and secure way to trade on your smartphone — everything blazes fast, onboarding takes minutes, and your data is encrypted on Premier's secure servers.",
      "Premier Wallet wuxuu adeeg siiyaa dadka aan akoon bangi haysan — degdeg, qiime jaban, oo amaan ah."
    ),
    highlights: [
      { value: "101+",    label: en_so("Remittance countries", "Dalal remittance") },
      { value: "6 rails", label: en_so("Top-up · Send · Bills · etc.", "Adeegyo") },
      { value: "Free",    label: en_so("Download & register",   "Bilaash") },
    ],
    features: [
      { icon: "topup",   title: "Top up airtime",     body: "Hormuud, Somtel, Somnet — instant top-up to any number, from inside the Wallet." },
      { icon: "send",    title: "Money transfer",      body: "Premier-to-Premier instant; other banks via Switch; 101+ countries via remittance." },
      { icon: "atm",     title: "Withdrawals",         body: "Cardless ATM withdrawal — generate a code in the Wallet, enter it at any Premier ATM." },
      { icon: "bills",   title: "Bill payment",        body: "Water, electricity, school fees, and merchant bills — paid from the Wallet in two taps." },
      { icon: "globe",   title: "Wallet Send & Remit", body: "Mobile money, cash pickup or bank transfer — to 101+ countries." },
      { icon: "internet",title: "Mobile banking",      body: "All your Premier accounts in one place — statements, cards, savings and SWIFT." },
    ],
    steps: [
      step("Download the app",     "iOS App Store, Google Play, Huawei AppGallery."),
      step("Verify your ID",       "3-minute KYC via your phone (passport, ID or driving licence)."),
      step("Fund your Wallet",     "Cash-in at any Premier agent, or transfer from an existing account."),
      step("Pay, send, save",      "All Premier services accessible from one app."),
    ],
    faqs: [
      { q: "How many countries does Wallet Send reach?", a: "More than 101 countries, via mobile money, cash pickup or bank transfer." },
      { q: "Is there a fee?",                            a: "Free to download and register. P2P transfers free. Bill payments free. International transfers shown transparently before you confirm." },
    ],
    cta1: en_so("Download Wallet", "Soo dejiso"),
    cta2: en_so("See features",    "Eeg sifooyinka"),
  },

  internet: {
    cat: "Services", cat_so: "Adeegyada", accent: "primary", icon: "internet",
    title: en_so("Internet Banking", "Internet Banking"),
    eyebrow: en_so("Online banking · 24/7", "Online · 24/7"),
    tagline: en_so(
      "An electronic system managed by Premier Bank which enables you to access financial and non-financial banking products online — also known as Online Banking. Bank from anywhere, any time, with password-protected security.",
      "Habka elektarooniga ah ee Premier — ka isticmaal adeegyada bangiga online, meel kasta oo aad joogto."
    ),
    highlights: [
      { value: "24/7",    label: en_so("Always-on access",     "Mar walba") },
      { value: "Secure",  label: en_so("Password protected",   "Sirta lagu ilaaliyo") },
      { value: "Full",    label: en_so("Account control",      "Maamul buuxa") },
    ],
    features: [
      { icon: "shield",  title: "Secure & convenient",  body: "Password-protected banking with 2-factor authentication." },
      { icon: "globe",   title: "Access anywhere",       body: "Anywhere, any time — full account access on any device." },
      { icon: "send",    title: "Online transfers",      body: "Move funds between accounts and to other banks in real-time." },
      { icon: "internet",title: "Manage everything",     body: "Track balance, statements, cards, loans, savings, standing orders — all in one place." },
    ],
    steps: [
      step("Submit the application form", "At any branch with your passport or valid ID."),
      step("Verification",                "Bank verifies the information and issues a Customer ID and password."),
      step("Login & set up",              "Access through the official Premier Bank website."),
      step("Bank online",                 "Manage everything from your dashboard — accounts, cards, transfers and bills."),
    ],
    faqs: [
      { q: "Can I register online?",  a: "The Internet Banking application can be registered from the bank's official website. You'll still need to verify in branch for the first activation." },
    ],
    cta1: en_so("Register now",     "Diiwaan-geli"),
    cta2: en_so("Login to banking", "Gal banking"),
  },

  swift: {
    cat: "Services", cat_so: "Adeegyada", accent: "primary", icon: "swift",
    title: en_so("SWIFT International", "SWIFT Caalami"),
    eyebrow: en_so("SWIFT Code · PBSMSOSM", "PBSMSOSM"),
    tagline: en_so(
      "Our SWIFT offering provides a convenient channel that enables international money remittance and payments worldwide through banks. Money transfer across banks is safe, fast, and guaranteed through Premier Bank's SWIFT service. We are capable of receiving and sending from all nations.",
      "Adeega SWIFT ee Premier — wareejin caalami amaan, degdeg, oo lagu kalsoon yahay. Ka heli karaa oo u diri karaa dalal kasta."
    ),
    highlights: [
      { value: "PBSMSOSM", label: en_so("SWIFT BIC",          "BIC") },
      { value: "All nations",label: en_so("Send & receive",    "Diri & hel") },
      { value: "Safe & fast",label: en_so("Guaranteed",        "La ammaanay") },
    ],
    features: [
      { icon: "send",    title: "International wires",   body: "Outbound payments to 101+ countries via direct correspondent banks." },
      { icon: "receive", title: "Inbound from any bank", body: "Receive in USD, EUR, AED, GBP and others. Funds posted to your account same-day to T+1." },
      { icon: "shield",  title: "Compliance-first",      body: "Sanctions screening, AML monitoring and FATF-aligned KYC on every transaction." },
      { icon: "globe",   title: "Track via GPI",         body: "SWIFT GPI tracking inside the Wallet — see exactly where your money is, in real time." },
    ],
    steps: [
      step("Initiate from Wallet or Omni", "Beneficiary, amount, currency, and purpose code. Live FX shown up-front."),
      step("Confirm rate and fees",         "Lock and proceed, or cancel."),
      step("Track",                         "Real-time GPI status until funds land."),
    ],
    faqs: [
      { q: "What's the SWIFT code?", a: "PBSMSOSM (Premier Bank — Mogadishu)." },
    ],
    cta1: en_so("Send a wire",     "Dir lacag"),
    cta2: en_so("Track an inbound","Raac soo-galay"),
  },

  atm: {
    cat: "Services", cat_so: "Adeegyada", accent: "primary", icon: "atm",
    title: en_so("Premier ATM Network", "Shabakadda ATM Premier"),
    eyebrow: en_so("The largest ATM network in Somalia · 30 ATMs", "30 ATM Soomaaliya"),
    tagline: en_so(
      "An automated teller machine allows you to complete bank transactions without seeing a bank representative. Your Premier Bank ATM card provides quick and easy access to your account 24/7 — withdraw cash, check balance, and more at any ATM around the world.",
      "ATM-ka Premier — hel lacagtaada 24/7, gudaha & dibadda."
    ),
    highlights: [
      { value: "30",     label: en_so("Total ATMs",          "Wadarta") },
      { value: "21",     label: en_so("In Mogadishu",        "Muqdisho") },
      { value: "9",      label: en_so("Across regions",      "Gobollada") },
    ],
    features: [
      { icon: "atm",     title: "Cash withdrawal",     body: "24/7 cash access; Mastercard and Visa accepted." },
      { icon: "check",   title: "Balance inquiry",      body: "Real-time balance and mini-statement on screen and receipt." },
      { icon: "wallet",  title: "Cardless withdrawal",  body: "Generate a 6-digit code in your Wallet, enter it at the ATM — no card needed." },
      { icon: "globe",   title: "Convenient locations", body: "Malls, hotels, supermarkets, airports, retailers, and every branch." },
    ],
    steps: [
      step("Find an ATM",        "Branch ATMs, airports, malls, hotels, supermarkets, retailers — 21 in Mogadishu, 9 in regions."),
      step("Insert card or use cardless", "Card with PIN, or generate a Wallet code."),
      step("Transact",           "Withdraw, deposit, check balance, mini-statement, change PIN, bill pay."),
    ],
    faqs: [
      { q: "Where are Premier ATMs?", a: "Branch ATMs (Airport Int. arrival, Decale, AC Camp, Star Empire, SKA, etc.); plus regional ATMs in Baidoa, Kismayo, Dhusamareb, Garowe, Galkacyo, Qardho and Bosaso." },
    ],
    cta1: en_so("Find ATM",            "Hel ATM"),
    cta2: en_so("Cardless withdrawal", "Bilaa-kaar"),
  },

  pos: {
    cat: "Services", cat_so: "Adeegyada", accent: "primary", icon: "pos",
    title: en_so("Premier POS", "Premier POS"),
    eyebrow: en_so("319 POS terminals · Nationwide", "319 POS"),
    tagline: en_so(
      "Premier POS is an electronic payment processing machine that eliminates the need for cash. Process payments safely and conveniently with Premier Mastercard, Visa, MasterCard and Discover cards.",
      "Premier POS — mashiin elektaroonik ah oo lacagta cash u dhiman. Aqbal Mastercard, Visa, MasterCard iyo Discover."
    ),
    highlights: [
      { value: "319",      label: en_so("Total POS terminals", "Wadarta") },
      { value: "287",      label: en_so("In Mogadishu",        "Muqdisho") },
      { value: "32",       label: en_so("Across regions",      "Gobollada") },
    ],
    features: [
      { icon: "pos",     title: "Tap-and-go acceptance", body: "Contactless Mastercard, Visa, Discover and Premier Wallet payments." },
      { icon: "check",   title: "No cash required",       body: "Safer for staff, easier for customers, and faster checkout." },
      { icon: "star",    title: "Partner discounts",      body: "Promotions and discounts from Premier partner merchants." },
      { icon: "globe",   title: "Everywhere it matters",  body: "Supermarkets, shopping centres, clothing shops, travel agencies, universities, hotels, gas stations and hospitals." },
    ],
    steps: [
      step("Apply with your trade licence", "Online application — usually approved within 48 hours."),
      step("Receive your terminal",          "First terminal free; additional units with deposit. Train staff in one session."),
      step("Configure & go live",            "Tip prompts, table numbers, staff PINs, and reporting — all configurable."),
    ],
    faqs: [
      { q: "Where can I use Premier POS?", a: "Supermarkets, shopping centres, clothing shops, travel agencies, universities, hotels, gas stations, hospitals and more — across all provinces and towns." },
    ],
    cta1: en_so("Apply for POS",   "Codso POS"),
    cta2: en_so("Talk to merchant","La hadal merchant"),
  },

  agency: {
    cat: "Services", cat_so: "Adeegyada", accent: "secondary", icon: "agency",
    title: en_so("Agency Banking", "Adeega Wakiilka"),
    eyebrow: en_so("Authorized Premier Agents nationwide", "Wakiillada Premier"),
    tagline: en_so(
      "You can still access Premier Bank if you live in a remote area that doesn't have a branch nearby. We have Authorized Premier Agents placed in strategic locations throughout Somalia, processing essential banking transactions quickly and conveniently.",
      "Wakiillada Premier waxay ka shaqeeyaan dhulkii fog ka uu joogo. Adeegyada bangiga, meel kasta."
    ),
    highlights: [
      { value: "Nationwide", label: en_so("Coverage",            "Dalka oo dhan") },
      { value: "Same-day",   label: en_so("Transaction posting", "Bixin isla maalin") },
      { value: "Insured",    label: en_so("Customer protection", "Macmiilka la ilaaliyo") },
    ],
    features: [
      { icon: "account", title: "Open new accounts",   body: "An Authorized Agent can onboard you in five minutes — same KYC, same security as a branch." },
      { icon: "check",   title: "Check your balance",  body: "Quick balance check on any Premier-issued ID." },
      { icon: "topup",   title: "Cash deposits",       body: "Deposit cash directly to your Premier account; posted same-day with SMS confirmation." },
      { icon: "atm",     title: "Cash withdrawals",    body: "Withdraw cash at any Authorized Agent — same fees as the Wallet." },
      { icon: "send",    title: "Transfer funds",      body: "Send to any Premier account or external bank from an Agent counter." },
    ],
    steps: [
      step("Find an agent",  "Look for the Premier shield. Wallet shows live agent location & status."),
      step("Identify",       "Show your Premier ID or Wallet QR; agent scans to verify."),
      step("Transact",       "Both sides confirm before cash crosses the counter."),
    ],
    faqs: [
      { q: "Can I open an account with an agent?", a: "Yes — agents process the same KYC steps as a branch, with identical security." },
    ],
    cta1: en_so("Find an agent",   "Hel wakiil"),
    cta2: en_so("Become an agent", "Noqo wakiil"),
  },

  payroll: {
    cat: "Services", cat_so: "Adeegyada", accent: "secondary", icon: "payroll",
    title: en_so("Payroll Processing", "Mushahar"),
    eyebrow: en_so("For employers — save time, save money", "Loo dhiman shaqaalaha"),
    tagline: en_so(
      "Our payroll processing system saves all the time and resources required to manage salary and wages payments. Open a salary current account for your employees and let us do the rest. At the click of a button, our system credits all your employees' accounts and sends an SMS notification to each one.",
      "Habka Premier Payroll wuxuu kuu badbaadiyaa waqti & lacag. Furaha hal jaranjaro, mushaharka shaqaalaha gaadhi karaan."
    ),
    highlights: [
      { value: "1-click", label: en_so("Bulk credit",       "Mushahar guud") },
      { value: "SMS",     label: en_so("Employee alerts",   "Digniin shaqaale") },
      { value: "Same-day",label: en_so("Settlement",        "Bixin isla maalin") },
    ],
    features: [
      { icon: "payroll", title: "Bulk salary credit",   body: "Upload a file or push from your HR system — all employees credited in one transaction." },
      { icon: "send",    title: "SMS notifications",     body: "Every employee receives an SMS confirming the credit." },
      { icon: "shield",  title: "Audit & reconciliation",body: "Full audit trail per pay-run; reconciliation files exported to your accounting system." },
      { icon: "check",   title: "Time & cost savings",   body: "Premier Bank payroll processing ensures employees receive their salaries on time and saves the company time and money." },
    ],
    steps: [
      step("Open salary accounts for staff", "We can onboard staff in bulk at your offices."),
      step("Upload the payroll file",         "Standard Excel/CSV format. Approved via maker-checker."),
      step("One-click credit",                "All accounts credited; SMS sent to each employee."),
    ],
    faqs: [],
    cta1: en_so("Talk to a banker", "La hadal banker"),
    cta2: en_so("See Omni demo",    "Eeg Omni"),
  },

  wearable: {
    cat: "Services", cat_so: "Adeegyada", accent: "secondary", icon: "wearable",
    title: en_so("Premier Wearables — Tap2Pay", "Premier Wearables · Tap2Pay"),
    eyebrow: en_so("NFC payments, on your wrist", "NFC, gacanta"),
    tagline: en_so(
      "Wearables are portable, electronic devices designed to be worn on the body. They integrate sensors, communication modules and payment technologies like NFC (Near Field Communication). Tap2Pay turns your watch, ring or band into a Premier payment device.",
      "Wearables waa qalab la xidhanaayo oo NFC ku dhejisan. Tap2Pay — saaceeyahaaga noqoshada qalab bixin."
    ),
    highlights: [
      { value: "NFC",   label: en_so("Tap-to-pay rail",        "Taabasho keliya") },
      { value: "Linked",label: en_so("To your Premier card",   "Kaarka Premier") },
      { value: "Range", label: en_so("Watches · Rings · Bands","Saac, giraan, xidhmo") },
    ],
    features: [
      { icon: "wearable",title: "Tap2Pay watches",  body: "Premier-branded smartwatches with built-in NFC payment, linked to your Mastercard." },
      { icon: "card",    title: "Tap2Pay rings",     body: "Slim ring devices for contactless payment — no battery, no charging." },
      { icon: "shield",  title: "Built-in security", body: "Each tap is tokenised; loss of a wearable can be deactivated instantly from the Wallet." },
    ],
    steps: [
      step("Order a wearable",         "Available at Premier branches and partner retailers."),
      step("Link to your Mastercard",  "Pair in the Wallet — takes under a minute."),
      step("Tap to pay",               "At any Mastercard contactless POS — including Premier's POS fleet."),
    ],
    faqs: [],
    cta1: en_so("Order Tap2Pay",  "Codso Tap2Pay"),
    cta2: en_so("See product range","Eeg alaabta"),
  },

  gateway: {
    cat: "Services", cat_so: "Adeegyada", accent: "secondary", icon: "gateway",
    title: en_so("Payment Gateway (MPGS)", "Albaab Lacageed (MPGS)"),
    eyebrow: en_so("Mastercard Payment Gateway Services", "MPGS"),
    tagline: en_so(
      "Premier Bank's Payment Gateway is built on Mastercard Payment Gateway Services (MPGS) — a global payment-processing platform operating in 170+ countries, supporting 200+ acquirer connections and processing billions of transactions annually.",
      "Albaab Lacageed oo ku dhisan MPGS — 170+ dal, 200+ xidhiidhka acquirer, balayiin bixino sannadkii."
    ),
    highlights: [
      { value: "170+",   label: en_so("Countries supported",       "Dalal") },
      { value: "200+",   label: en_so("Acquirer connections",      "Xidhiidh acquirer") },
      { value: "Billions",label: en_so("Transactions per year",    "Bixino sannadkii") },
    ],
    features: [
      { icon: "shield",  title: "Fraud prevention",       body: "Built-in fraud screening, 3-D Secure 2 and machine-learning risk scoring." },
      { icon: "check",   title: "PCI compliance",          body: "PCI-DSS Level 1 from day one — no compliance burden on your team." },
      { icon: "globe",   title: "Multi-payment methods",   body: "Cards, Wallet, and alternative methods — through one integration." },
      { icon: "internet",title: "High uptime, multi-language, multi-currency", body: "Architected for scale. Localised for your customers." },
    ],
    steps: [
      step("Apply as a merchant",  "Trade licence + bank statement + URL. Sandbox in minutes, production in 1–3 days."),
      step("Integrate",            "Drop-in widget, hosted checkout, or full API. Sample apps in JS/PHP/Python/Go."),
      step("Test in sandbox",      "Realistic responses for success, decline, 3-D Secure, and edge cases."),
      step("Go live",              "Switch keys; settlement starts on the next business day."),
    ],
    faqs: [],
    cta1: en_so("Read the docs",   "Akhri docs"),
    cta2: en_so("Sandbox sign-up", "Sandbox"),
  },

  /* ============================  NEWS  ====================================*/
  news: {
    cat: "News", cat_so: "Wararka", accent: "primary", icon: "news",
    title: en_so("Newsroom", "Qolka Wararka"),
    eyebrow: en_so("Latest from Premier Bank", "Wararka cusub"),
    tagline: en_so("Product launches, partnership announcements, and Premier's perspective on Somalia's financial sector.", "Adeegyo cusub, iskaashi, iyo aragtida bangiga."),
    highlights: [
      { value: "120+",   label: en_so("Articles in 2024", "Maqaallo 2024") },
      { value: "Weekly", label: en_so("Cadence",          "Toddoba") },
      { value: "EN/SO",  label: en_so("Languages",        "Luqado") },
    ],
    features: [
      { icon: "news",   title: "Wallet 3.0 launches",       body: "Premier rolls out the third-generation Wallet across iOS, Android and Huawei AppGallery." },
      { icon: "swift",  title: "SWIFT partnership update",   body: "New correspondent relationships unlock additional same-day corridors." },
      { icon: "agency", title: "Hargeisa flagship branch",    body: "New flagship opens in central Hargeisa with full-service personal and business banking." },
      { icon: "student",title: "Premier Scholars 2025",        body: "100 university scholarships announced for Somali students in STEM, finance and Islamic studies." },
    ],
    steps: [],
    faqs: [],
    cta1: en_so("Subscribe",   "Diiwaan-geli"),
    cta2: en_so("Press kit",   "Saxaafad"),
  },
  press: {
    cat: "News", cat_so: "Wararka", accent: "primary", icon: "press",
    title: en_so("Press Releases", "Saxaafadda"),
    eyebrow: en_so("Official statements", "Hadalo rasmi ah"),
    tagline: en_so("Premier Bank's official statements — quarterly results, regulatory disclosures, leadership changes, and major commercial announcements.", "Hadallada rasmiga ah ee bangiga."),
    highlights: [
      { value: "32",       label: en_so("Releases in 2024", "Saxaafad 2024") },
      { value: "Q-end +14d",label: en_so("Earnings release","Faa'iidada") },
      { value: "EN/SO/AR", label: en_so("Languages",        "Luqado") },
    ],
    features: [
      { icon: "invest", title: "Quarterly results",       body: "Audited financials, capital position, and management commentary — 14 business days after quarter-end." },
      { icon: "shield", title: "Regulatory filings",       body: "All CBS-mandated disclosures, including Pillar III risk reports and AML/CFT statements." },
      { icon: "team",   title: "Leadership announcements", body: "C-suite, board and Shari'ah board appointments." },
      { icon: "globe",  title: "Partnership news",         body: "SWIFT corridors, Mastercard programmes, new market entry — all confirmed publicly." },
    ],
    steps: [],
    faqs: [],
    cta1: en_so("Browse releases","Eeg dhammaan"),
    cta2: en_so("Subscribe",       "Diiwaan-geli"),
  },
  gallery: {
    cat: "News", cat_so: "Wararka", accent: "secondary", icon: "gallery",
    title: en_so("Gallery", "Sawirada"),
    eyebrow: en_so("Photos · Videos · Brand", "Sawirro · Fiidiyowyo"),
    tagline: en_so("Photography from Premier branches, events, agent visits and customer stories. Free for editorial use with attribution.", "Sawirro laamaha, dhacdooyinka, iyo sheekooyinka macaamiisha."),
    highlights: [
      { value: "1,200+",label: en_so("Photos",        "Sawirro") },
      { value: "60+",   label: en_so("Videos",        "Fiidiyowyo") },
      { value: "CC-BY", label: en_so("Editorial use", "Laysan") },
    ],
    features: [
      { icon: "agency",  title: "Branch & operations", body: "Inside Premier branches across the country." },
      { icon: "team",    title: "Customer stories",     body: "Faces of Premier — entrepreneurs, students, families, diaspora customers." },
      { icon: "star",    title: "Events",                body: "Premier Forum, Wallet 3.0 launch, the annual Iftar." },
      { icon: "press",   title: "Brand assets",          body: "Logos, brand colours and approved type specimens." },
    ],
    steps: [],
    faqs: [],
    cta1: en_so("Browse gallery",     "Eeg sawirada"),
    cta2: en_so("Download brand kit", "Soo dejiso brand"),
  },
};

/* -------------------------------------------------------------------------- */
/*  Detail Panel component                                                    */
/* -------------------------------------------------------------------------- */
function DetailPanel({ itemKey, lang, onClose, onJump, onOpenAccount }) {
  useEffectD(() => {
    if (!itemKey) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [itemKey]);
  useEffectD(() => {
    const sc = document.querySelector(".pb-detail-scroll");
    if (sc) sc.scrollTop = 0;
  }, [itemKey]);

  if (!itemKey) return null;
  const d = D[itemKey];
  if (!d) return null;
  const tt = (o) => (lang === "en" ? o.en : o.so) || o.en;

  const related = Object.entries(D)
    .filter(([k, v]) => v.cat === d.cat && k !== itemKey)
    .slice(0, 4);

  return (
    <div className="pb-detail-bg" onClick={onClose}>
      <div
        className={`pb-detail-panel pb-detail-${d.accent}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <button className="pb-detail-close" onClick={onClose} aria-label="Close"><Icon name="close" size={16} /></button>
        <div className="pb-detail-scroll">
          {/* HERO */}
          <div className="pb-detail-hero">
            <div className="pb-detail-crumb">
              <span>{lang === "en" ? d.cat : (d.cat_so || d.cat)}</span>
              <span className="pb-crumb-sep">›</span>
              <span>{tt(d.title)}</span>
            </div>
            <div className="pb-detail-hero-icon">
              <IconCircle name={d.icon || "about"} size={64} tone="ghost-green" />
            </div>
            <p className="pb-detail-eyebrow">{tt(d.eyebrow)}</p>
            <h1 className="pb-detail-title">{tt(d.title)}</h1>
            <p className="pb-detail-tagline">{tt(d.tagline)}</p>
            <div className="pb-detail-cta-row">
              <button className="pb-btn pb-btn-secondary" onClick={() => { onClose(); onOpenAccount && onOpenAccount(); }}>
                {tt(d.cta1)} <Icon name="arrow" size={14} />
              </button>
              <button className="pb-btn pb-btn-glass" onClick={onClose}>
                {tt(d.cta2)}
              </button>
            </div>
            <div className="pb-detail-highlights">
              {d.highlights.map((h, i) => (
                <div key={i} className="pb-detail-stat">
                  <strong>{h.value}</strong>
                  <span>{tt(h.label)}</span>
                </div>
              ))}
            </div>
            <div className="pb-detail-hero-shapes" aria-hidden>
              <span className="pb-detail-blob a" />
              <span className="pb-detail-blob b" />
              <span className="pb-detail-grid-lines" />
              <span className="pb-detail-watermark"><LogoMark size={460} variant="white" /></span>
            </div>
          </div>

          {/* FEATURES */}
          {d.features && d.features.length > 0 && (
            <div className="pb-detail-section">
              <div className="pb-detail-section-head">
                <span className="pb-detail-sec-num">01</span>
                <h2>{lang === "en" ? "What you get" : "Waxa aad helayso"}</h2>
              </div>
              <div className="pb-detail-features">
                {d.features.map((f, i) => (
                  <div key={i} className="pb-detail-feat">
                    <IconCircle name={f.icon || "about"} size={48} tone="ghost-green" />
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEPS */}
          {d.steps && d.steps.length > 0 && (
            <div className="pb-detail-section pb-detail-section-alt">
              <div className="pb-detail-section-head">
                <span className="pb-detail-sec-num">02</span>
                <h2>{lang === "en" ? "How it works" : "Sida ay u shaqayso"}</h2>
              </div>
              <div className="pb-detail-steps">
                {d.steps.map((s, i) => (
                  <div key={i} className="pb-detail-step">
                    <span className="pb-detail-step-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {d.faqs && d.faqs.length > 0 && (
            <div className="pb-detail-section">
              <div className="pb-detail-section-head">
                <span className="pb-detail-sec-num">03</span>
                <h2>{lang === "en" ? "Frequently asked" : "Su'aalaha caadiga ah"}</h2>
              </div>
              <div className="pb-detail-faqs">
                {d.faqs.map((f, i) => (
                  <details key={i} className="pb-detail-faq">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* RELATED */}
          {related.length > 0 && (
            <div className="pb-detail-related">
              <h3>{lang === "en" ? `More in ${d.cat}` : `${d.cat_so} kale`}</h3>
              <div className="pb-detail-related-grid">
                {related.map(([k, v]) => (
                  <button key={k} className="pb-detail-related-card" onClick={() => onJump(k)}>
                    <IconCircle name={v.icon || "about"} size={36} tone="ghost-green" />
                    <span className="pb-detail-related-cat">{lang === "en" ? v.cat : (v.cat_so || v.cat)}</span>
                    <strong>{tt(v.title)}</strong>
                    <span className="pb-detail-related-arrow"><Icon name="arrow" size={14} /></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CLOSER */}
          <div className="pb-detail-closer">
            <div>
              <h3>{lang === "en" ? "Ready to get started?" : "Ma diyaar tahay?"}</h3>
              <p>{lang === "en" ? "Open an account in 3 minutes from your phone — or talk to a banker." : "Furo akoon 3 daqiiqo gudahood — ama la hadal banker."}</p>
            </div>
            <div className="pb-detail-closer-cta">
              <button className="pb-btn pb-btn-primary" onClick={() => { onClose(); onOpenAccount && onOpenAccount(); }}>
                {tt(d.cta1)} <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.DetailPanel = DetailPanel;
