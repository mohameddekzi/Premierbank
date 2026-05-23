// Premier Bank — main page sections
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* -------------------------------------------------------------------------- */
/*  HERO SLIDER — 5 slides, autoplay, dot nav, arrow nav                      */
/* -------------------------------------------------------------------------- */
function HeroSlider({ lang, customHeadline }) {
  const slides = window.PB_CONTENT.heroSlides;
  const [i, setI] = useStateS(0);
  const [paused, setPaused] = useStateS(false);
  const len = slides.length;

  useEffectS(() => {
    if (paused) return;
    const id = setInterval(() => setI((x) => (x + 1) % len), 6000);
    return () => clearInterval(id);
  }, [paused, len]);

  const tt = (o) => (lang === "en" ? o.en : o.so) || o.en;
  const next = () => setI((x) => (x + 1) % len);
  const prev = () => setI((x) => (x - 1 + len) % len);

  return (
    <section
      className="pb-hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      
      <div className="pb-hero-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s, idx) =>
        <HeroSlide key={s.id} slide={s} lang={lang} active={idx === i} customHeadline={idx === 0 ? customHeadline : ""} />
        )}
      </div>

      <button className="pb-hero-arrow pb-hero-arrow-prev" onClick={prev} aria-label="Previous">
        <Icon name="chevronLeft" size={20} />
      </button>
      <button className="pb-hero-arrow pb-hero-arrow-next" onClick={next} aria-label="Next">
        <Icon name="chevronRight" size={20} />
      </button>

      <div className="pb-hero-dots">
        {slides.map((s, idx) =>
        <button
          key={s.id}
          className={`pb-hero-dot ${i === idx ? "is-active" : ""}`}
          onClick={() => setI(idx)}
          aria-label={`Slide ${idx + 1}`}>
          
            <span className="pb-hero-dot-track"><span className="pb-hero-dot-fill" /></span>
            <em>0{idx + 1}</em>
            <strong>{tt(s.eyebrow)}</strong>
          </button>
        )}
      </div>

      <div className="pb-hero-progress">
        <div className="pb-hero-progress-bar" style={{ width: `${(i + 1) / len * 100}%` }} />
      </div>
    </section>);

}

function HeroSlide({ slide, lang, active, customHeadline }) {
  const tt = (o) => (lang === "en" ? o.en : o.so) || o.en;
  const title = customHeadline || tt(slide.title);
  return (
    <div className={`pb-hero-slide pb-hero-slide-${slide.tint}`}>
      <div className="pb-hero-slide-bg" aria-hidden>
        <span className="pb-hero-blob pb-hero-blob-a" />
        <span className="pb-hero-blob pb-hero-blob-b" />
        <span className="pb-hero-gridlines" />
      </div>
      <div className="pb-container pb-hero-slide-grid">
        <div className={`pb-hero-copy ${active ? "is-in" : ""}`}>
          <span className="pb-hero-eyebrow"><Icon name={slide.icon} size={14} /> {tt(slide.eyebrow)}</span>
          <h1 className="pb-h1">{title}</h1>
          <p className="pb-hero-sub">{tt(slide.sub)}</p>
          <div className="pb-hero-ctas">
            <button className="pb-btn pb-btn-secondary pb-btn-lg">{tt(slide.cta)} <Icon name="arrow" size={16} /></button>
            <button className="pb-btn pb-btn-glass pb-btn-lg"><Icon name="play" size={12} /> Watch tour</button>
          </div>
        </div>
        <div className={`pb-hero-art ${active ? "is-in" : ""}`}>
          <HeroArt kind={slide.art} lang={lang} />
        </div>
      </div>
    </div>);

}

/* -------------------------------------------------------------------------- */
/*  HERO ART — per-slide visual                                               */
/* -------------------------------------------------------------------------- */
function HeroArt({ kind, lang }) {
  if (kind === "wallet") return <ArtWallet lang={lang} />;
  if (kind === "card") return <ArtCard />;
  if (kind === "swift") return <ArtSwift />;
  if (kind === "finance") return <ArtFinance />;
  if (kind === "agency") return <ArtAgency />;
  return null;
}

function ArtWallet({ lang }) {
  return (
    <div className="pb-art pb-art-wallet">
      <WalletPhone lang={lang} small />
      <div className="pb-art-card pb-art-card-tx">
        <IconCircle name="receive" size={36} tone="soft-green" />
        <div>
          <strong>+ $ 350.00</strong>
          <em>From Yusuf · Dubai → Mogadishu</em>
        </div>
      </div>
      <div className="pb-art-card pb-art-card-rating">
        <Icon name="star" size={20} color="#6cbe46" />
        <div>
          <strong>4.8 / 5</strong>
          <em>180k Wallet reviews</em>
        </div>
      </div>
    </div>);

}

function ArtCard() {
  return (
    <div className="pb-art pb-art-card">
      <div className="pb-bcard pb-bcard-elite">
        <div className="pb-bcard-row">
          <PBLogo variant="white" size={30} />
          <span className="pb-bcard-chip" />
        </div>
        <div className="pb-bcard-num">5102  ••••  ••••  4019</div>
        <div className="pb-bcard-foot">
          <span><em>Cardholder</em><strong>KHADRA AHMED</strong></span>
          <span><em>Expires</em><strong>09/28</strong></span>
          <Icon name="mastercard" size={36} color="#fff" />
        </div>
        <span className="pb-bcard-tier">WORLD ELITE</span>
      </div>
      <div className="pb-bcard pb-bcard-platinum">
        <div className="pb-bcard-row">
          <PBLogo variant="white" size={30} />
          <span className="pb-bcard-chip" />
        </div>
        <div className="pb-bcard-num">4827  ••••  ••••  6612</div>
        <div className="pb-bcard-foot">
          <span><em>Cardholder</em><strong>YUSUF IBRAHIM</strong></span>
          <span><em>Expires</em><strong>11/27</strong></span>
          <Icon name="mastercard" size={36} color="#fff" />
        </div>
        <span className="pb-bcard-tier">PLATINUM</span>
      </div>
    </div>);

}

function ArtSwift() {
  return (
    <div className="pb-art pb-art-swift">
      <div className="pb-swift-globe">
        <svg viewBox="0 0 200 200" width="280" height="280">
          <defs>
            <radialGradient id="globe-g" cx="50%" cy="40%">
              <stop offset="0%" stopColor="#6cbe46" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#6cbe46" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#globe-g)" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="80" ry="28" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="80" ry="48" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="48" ry="80" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="28" ry="80" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          {/* hops */}
          {[[50, 60], [140, 55], [170, 110], [60, 150], [110, 135]].map(([cx, cy], i) =>
          <g key={i}>
              <circle cx={cx} cy={cy} r="4" fill="#6cbe46" />
              <circle cx={cx} cy={cy} r="8" fill="none" stroke="#6cbe46" strokeOpacity="0.4">
                <animate attributeName="r" values="4;14" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.6;0" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>
      </div>
      <div className="pb-art-card pb-art-swift-card">
        <em>SWIFT Code</em>
        <strong>PBSMSOSM</strong>
        <span>Premier Bank — Mogadishu</span>
      </div>
      <div className="pb-art-card pb-art-swift-countries">
        <Icon name="globe" size={20} color="#6cbe46" />
        <div>
          <strong>101+ Countries</strong>
          <em>Receive & send worldwide</em>
        </div>
      </div>
    </div>);

}

function ArtFinance() {
  return (
    <div className="pb-art pb-art-finance">
      <div className="pb-finance-mock">
        <div className="pb-finance-head">
          <strong>Auto Finance · Toyota Land Cruiser</strong>
          <span className="pb-pill pb-pill-green">Pre-approved</span>
        </div>
        <div className="pb-finance-grid">
          <div><em>Vehicle</em><strong>$ 62,000</strong></div>
          <div><em>Down (30%)</em><strong>$ 18,600</strong></div>
          <div><em>Term</em><strong>24 mo</strong></div>
          <div><em>Monthly</em><strong>$ 1,809</strong></div>
        </div>
        <div className="pb-finance-bar">
          <div style={{ width: "30%" }}><span>Down</span></div>
          <div style={{ width: "70%" }}><span>Murabaha</span></div>
        </div>
        <p className="pb-finance-note">Profit rate locked · Shari'ah-compliant · Decision in 7 days</p>
      </div>
      <div className="pb-art-card pb-art-finance-tag">
        <IconCircle name="check" size={36} tone="green" />
        <div>
          <strong>Approved in 24h</strong>
          <em>Free planning + expert advice</em>
        </div>
      </div>
    </div>);

}

function ArtAgency() {
  return (
    <div className="pb-art pb-art-agency">
      <div className="pb-agency-map">
        <svg viewBox="0 0 200 200" width="320" height="280">
          <defs>
            <pattern id="agency-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#agency-grid)" />
          <path d="M60 40 Q70 30 100 32 Q130 36 140 50 Q138 80 130 100 Q120 130 110 160 Q90 170 80 150 Q70 130 75 110 Q65 90 65 70 Q60 55 60 40Z" fill="rgba(108,190,70,0.15)" stroke="rgba(108,190,70,0.5)" strokeWidth="1" />
          {/* agent pins */}
          {[[80, 60], [100, 80], [120, 75], [90, 110], [110, 140], [75, 130], [125, 120], [95, 150]].map(([x, y], i) =>
          <g key={i}>
              <circle cx={x} cy={y} r="3" fill="#6cbe46" />
              <circle cx={x} cy={y} r="6" fill="none" stroke="#6cbe46" strokeOpacity="0.5">
                <animate attributeName="r" values="3;10" dur="2.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.6;0" dur="2.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>
      </div>
      <div className="pb-art-card pb-art-agency-tag">
        <IconCircle name="agency" size={36} tone="ghost-green" />
        <div>
          <strong>12,000+ Agents</strong>
          <em>Premier wherever you go</em>
        </div>
      </div>
    </div>);

}

/* -------------------------------------------------------------------------- */
/*  TRUST STRIP                                                               */
/* -------------------------------------------------------------------------- */
function TrustStrip({ lang }) {
  const logos = window.PB_CONTENT.trustLogos;
  return (
    <section className="pb-trust">
      <div className="pb-container">
        <p className="pb-trust-label">
          {lang === "en" ? "Licensed by the Central Bank of Somalia · partners we work with" : "Shati ka leh CBS · macaamiisheenna caalami"}
        </p>
        <div className="pb-trust-grid">
          {logos.map((l) => <span key={l}>{l}</span>)}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  STATS BAR                                                                 */
/* -------------------------------------------------------------------------- */
function StatsBar({ lang }) {
  const stats = window.PB_CONTENT.stats;
  return (
    <section className="pb-stats-bar">
      <div className="pb-container">
        <div className="pb-stats-grid">
          {stats.map((s, i) =>
          <div key={i} className="pb-stat">
              <strong>{s.value}</strong>
              <span>{lang === "en" ? s.label.en : s.label.so}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  VALUES (Mission, Vision, Core Values)                                     */
/* -------------------------------------------------------------------------- */
function Values({ lang }) {
  const list = window.PB_CONTENT.values[lang];
  return (
    <section className="pb-section" id="values">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow">{lang === "en" ? "Mission · Vision · Values" : "Hadafka & Qiimaha"}</span>
          <h2>{lang === "en" ?
            <>The best bank that <em>customers will ever want.</em></> :
            <>Bangiga ugu <em>fiican.</em></>}</h2>
          <p>{lang === "en" ?
            "To provide transformative and accessible financial solutions through excellent service for a better society." :
            "Inaan bixino xal maaliyadeed gaadhi kara dhammaan dadka, si bulsho fiican loo helo."}</p>
        </div>
        <div className="pb-values-grid">
          {list.map((v, i) =>
          <article key={v.title} className="pb-value-card">
              <IconCircle name={v.icon} size={56} tone={i % 2 === 0 ? "ghost-green" : "ghost-navy"} />
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  ACCOUNTS SHOWCASE — visual grid of all 11 account types                   */
/* -------------------------------------------------------------------------- */
function AccountsShowcase({ lang, onOpenDetail }) {
  const list = window.PB_CONTENT.accounts;
  return (
    <section className="pb-section pb-accounts-section" id="accounts">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow">{lang === "en" ? "Account Types" : "Nooca Akoonada"}</span>
          <h2>{lang === "en" ? "An account for every chapter of life." : "Akoon u dhigma marxalad kasta oo noloshaada."}</h2>
          <p>{lang === "en" ?
            "From your first student account to a multi-signatory corporate facility — eleven account types, all Shari'ah-compliant." :
            "Akoon arday ilaa akoon shirkadeed — koob iyo toban nooc, dhammaan waafaqsan Shareecada."}</p>
        </div>
        <div className="pb-accounts-grid">
          {list.map((a) =>
          <button key={a.id} className="pb-account-card" onClick={() => onOpenDetail && onOpenDetail(a.id)}>
              <IconCircle name={a.icon} size={48} tone="ghost-green" />
              <strong>{lang === "en" ? a.name.en : a.name.so}</strong>
              <em>{lang === "en" ? a.for.en : a.for.so}</em>
              <span className="pb-account-arrow"><Icon name="arrow" size={16} /></span>
            </button>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  CARDS SHOWCASE                                                            */
/* -------------------------------------------------------------------------- */
function CardsShowcase({ lang, onOpenDetail }) {
  const list = window.PB_CONTENT.cards;
  return (
    <section className="pb-section pb-cards-section">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow">{lang === "en" ? "Premier Mastercard" : "Premier Mastercard"}</span>
          <h2>{lang === "en" ? "Four cards. One trusted bank." : "Afar kaar. Hal bangi la aaminsan yahay."}</h2>
          <p>{lang === "en" ?
            "Pay anywhere Mastercard is accepted, withdraw from any ATM worldwide. From $2,000 Classic to $5,000 World Elite." :
            "Bixi meel kasta oo Mastercard la aqbalo, ATM caalamka ka dhig. $2,000 Classic ilaa $5,000 World Elite."}</p>
        </div>
        <div className="pb-cards-grid">
          {list.map((c) =>
          <article key={c.id} className="pb-card-tile" style={{ "--card-bg": c.color }}>
              <div className="pb-card-tile-card">
                <div className="pb-bcard pb-bcard-lg" style={{ background: c.color }}>
                  <div className="pb-bcard-row">
                    <PBLogo variant="white" size={26} />
                    <span className="pb-bcard-chip" />
                  </div>
                  <div className="pb-bcard-num">5102  ••••  ••••  {String(1000 + Math.floor(Math.random() * 9000)).padStart(4, "0")}</div>
                  <div className="pb-bcard-foot">
                    <span><em>Limit</em><strong>{c.limit}</strong></span>
                    <Icon name="mastercard" size={32} color="#fff" />
                  </div>
                  <span className="pb-bcard-tier">{c.name.toUpperCase().replace("MASTERCARD", "").trim()}</span>
                </div>
              </div>
              <div className="pb-card-tile-body">
                <h3>{c.name}</h3>
                <p>{lang === "en" ? c.desc.en : c.desc.so}</p>
                <div className="pb-card-tile-meta">
                  <span><Icon name="check" size={14} color="#6cbe46" /> Worldwide acceptance</span>
                  <span><Icon name="check" size={14} color="#6cbe46" /> 24/7 ATM withdrawal</span>
                  <span><Icon name="check" size={14} color="#6cbe46" /> Limit {c.limit}</span>
                </div>
                <button className="pb-link-arrow" onClick={() => onOpenDetail && onOpenDetail(c.id)}>
                  {lang === "en" ? "Apply for this card" : "Codso kaarkan"} <Icon name="arrow" size={14} />
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  WALLET SECTION                                                            */
/* -------------------------------------------------------------------------- */
function WalletSection({ lang }) {
  const tt = (en, so) => lang === "en" ? en : so;
  return (
    <section className="pb-section pb-wallet-section" id="wallet">
      <div className="pb-container">
        <div className="pb-wallet-grid">
          <div className="pb-wallet-copy">
            <span className="pb-eyebrow pb-eyebrow-light">{tt("Premier Wallet", "Premier Wallet")}</span>
            <h2 className="pb-h2-light">{tt("The most-loved mobile money service in Somalia.", "Adeega lacagta mobile-ka ee ugu jecel Soomaaliya.")}</h2>
            <p>{tt(
                "Premier Wallet is a safe, affordable and secure way to bank on your smartphone — for banked and non-banked alike. Top-up, transfer, withdraw, pay bills, and remit to 101+ countries.",
                "Premier Wallet waa hab amaan ah oo qiime jaban — bixi top-up, wareeji, soo qaado, bixi biil oo u dir 101+ dal."
              )}</p>
            <div className="pb-wallet-feat">
              {[
              ["topup", tt("Top-up airtime", "Top-up")],
              ["send", tt("Money transfer", "Lacag wareejin")],
              ["receive", tt("Wallet send", "Wallet send")],
              ["bills", tt("Bill payment", "Bixin biil")],
              ["atm", tt("Withdrawals", "Lacag qaadasho")],
              ["internet", tt("Mobile banking", "Mobile banking")]].
              map(([icn, l]) =>
              <div key={l}>
                  <IconCircle name={icn} size={36} tone="soft-green" />
                  <span>{l}</span>
                </div>
              )}
            </div>
            <div className="pb-hero-ctas">
              <button className="pb-btn pb-btn-secondary pb-btn-lg">{tt("Download Wallet", "Soo dejiso Wallet")}</button>
              <button className="pb-btn pb-btn-glass pb-btn-lg">{tt("See all features", "Eeg dhammaan")} <Icon name="arrow" size={14} /></button>
            </div>
          </div>
          <div className="pb-wallet-visual">
            <WalletPhone lang={lang} />
            <div className="pb-wallet-floater pb-wallet-floater-a">
              <IconCircle name="send" size={32} tone="soft-green" />
              <div>
                <strong>$ 120.00 sent</strong>
                <em>To Hano Supermarket</em>
              </div>
            </div>
            <div className="pb-wallet-floater pb-wallet-floater-b">
              <IconCircle name="globe" size={32} tone="soft-green" />
              <div>
                <strong>101+ countries</strong>
                <em>Mobile money · Cash · Bank</em>
              </div>
            </div>
            <div className="pb-wallet-rating">
              <Icon name="star" size={14} color="#0b2f4f" />
              <strong>4.8</strong>
              <span>180k reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  MORE SERVICES — Blinq-inspired image-led tile grid                        */
/* -------------------------------------------------------------------------- */
function MoreServices({ lang, onOpenDetail }) {
  const tiles = window.PB_CONTENT.tiles;
  // Layout: 4 cols x 2 rows, last cell = "Open account" CTA
  return (
    <section className="pb-section pb-more-services" id="services">
      <div className="pb-container">
        <div className="pb-more-head">
          <div>
            <span className="pb-eyebrow">{lang === "en" ? "More from Premier" : "Wax kale oo Premier"}</span>
            <h2>{lang === "en" ? "Banking, beyond the branch." : "Bangiyada, ka dheer laanta."}</h2>
          </div>
          <p>{lang === "en" ?
            "Every Premier service in one place — built for life in Somalia and for Somalis abroad." :
            "Adeegyada Premier hal meel — loo dhisay nolosha Soomaaliya iyo Soomaalida dibadda."}</p>
        </div>

        <div className="pb-tiles-grid">
          {tiles.map((t) =>
          <button key={t.id} className="pb-tile" style={{ background: t.bg }} onClick={() => onOpenDetail && onOpenDetail(t.id)}>
              <div className="pb-tile-art">
                <TileArt kind={t.art} />
              </div>
              <div className="pb-tile-foot">
                <div>
                  <strong>{lang === "en" ? t.label.en : t.label.so}</strong>
                  <em>{lang === "en" ? t.blurb.en : t.blurb.so}</em>
                </div>
                <span className="pb-tile-arrow"><Icon name="arrow" size={18} /></span>
              </div>
            </button>
          )}
          <button className="pb-tile pb-tile-cta" onClick={() => onOpenDetail && onOpenDetail("personal")}>
            <div className="pb-tile-cta-inner">
              <h3>{lang === "en" ? <>Open my<br />Premier account</> : <>Furo<br />akoon Premier</>}</h3>
              <span className="pb-tile-cta-arrow"><Icon name="arrow" size={22} color="#0b2f4f" /></span>
            </div>
          </button>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  Tile artwork — distinct SVG illustration per tile                         */
/* -------------------------------------------------------------------------- */
function TileArt({ kind }) {
  if (kind === "wallet-phone") {
    return (
      <div className="pb-tile-illus pb-tile-illus-wallet">
        <div className="pb-mini-phone">
          <div className="pb-mini-phone-head"><LogoMark size={14} variant="color" /><span /></div>
          <div className="pb-mini-phone-bal">
            <em>Premier Wallet</em>
            <strong>$ 4,820<sup>.50</sup></strong>
            <span>SOS 132M · +2.4% mo</span>
          </div>
          <div className="pb-mini-phone-acts">
            <span><IconCircle name="send" size={28} tone="soft-green" /><em>Send</em></span>
            <span><IconCircle name="receive" size={28} tone="soft-green" /><em>Receive</em></span>
            <span><IconCircle name="bills" size={28} tone="soft-green" /><em>Bills</em></span>
            <span><IconCircle name="topup" size={28} tone="soft-green" /><em>Top up</em></span>
          </div>
        </div>
      </div>);

  }
  if (kind === "mastercard") {
    return (
      <div className="pb-tile-illus pb-tile-illus-card">
        <div className="pb-mini-card pb-mini-card-front">
          <div className="pb-mini-card-row"><LogoMark size={14} variant="white" /><span className="pb-mini-card-chip" /></div>
          <div className="pb-mini-card-num">5102  ••••  ••••  4019</div>
          <div className="pb-mini-card-foot">
            <span>YUSUF AHMED</span>
            <Icon name="mastercard" size={28} color="#fff" />
          </div>
        </div>
        <div className="pb-mini-card pb-mini-card-back" />
      </div>);

  }
  if (kind === "atm") {
    return (
      <div className="pb-tile-illus pb-tile-illus-atm">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          <rect x="50" y="20" width="100" height="110" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
          <rect x="60" y="30" width="80" height="44" rx="4" fill="#6cbe46" />
          <text x="100" y="55" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="9" fontWeight="600">PREMIER ATM</text>
          <text x="100" y="68" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="7" opacity="0.8">$ 200 · 500 · 1,000</text>
          <rect x="64" y="80" width="16" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="84" y="80" width="16" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="104" y="80" width="16" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="124" y="80" width="16" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="64" y="92" width="76" height="6" rx="1" fill="rgba(255,255,255,0.15)" />
          <rect x="64" y="105" width="76" height="20" rx="2" fill="rgba(255,255,255,0.1)" />
          {/* card */}
          <rect x="135" y="105" width="40" height="24" rx="3" fill="#0b2f4f" transform="rotate(15 155 117)" />
          <rect x="135" y="105" width="40" height="3" fill="#6cbe46" transform="rotate(15 155 117)" />
        </svg>
      </div>);

  }
  if (kind === "pos") {
    return (
      <div className="pb-tile-illus pb-tile-illus-pos">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          <rect x="60" y="15" width="80" height="105" rx="10" fill="#0b2f4f" />
          <rect x="68" y="28" width="64" height="34" rx="3" fill="#6cbe46" />
          <text x="100" y="42" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="8" fontWeight="700">$ 42.50</text>
          <text x="100" y="54" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="6" opacity="0.8">Tap to pay</text>
          {[0, 1, 2, 3].map((r) => [0, 1, 2].map((c) =>
          <rect key={r + '-' + c} x={70 + c * 22} y={70 + r * 11} width="18" height="9" rx="2" fill="rgba(255,255,255,0.18)" />
          ))}
          {/* card hovering */}
          <rect x="20" y="60" width="56" height="34" rx="4" fill="#0b2f4f" transform="rotate(-10 48 77)" />
          <rect x="20" y="60" width="56" height="3" fill="#6cbe46" transform="rotate(-10 48 77)" />
          <circle cx="62" cy="80" r="2" fill="#fff" opacity="0.6" />
          <path d="M70 70 Q75 75 70 80" stroke="#fff" strokeWidth="1" fill="none" opacity="0.6" />
        </svg>
      </div>);

  }
  if (kind === "swift") {
    return (
      <div className="pb-tile-illus pb-tile-illus-swift">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          <circle cx="100" cy="70" r="50" fill="rgba(255,255,255,0.12)" />
          <circle cx="100" cy="70" r="50" fill="none" stroke="#fff" strokeWidth="1" opacity="0.6" />
          <ellipse cx="100" cy="70" rx="50" ry="18" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
          <ellipse cx="100" cy="70" rx="50" ry="30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
          <line x1="50" y1="70" x2="150" y2="70" stroke="#fff" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="20" x2="100" y2="120" stroke="#fff" strokeWidth="1" opacity="0.3" />
          {[[70, 50], [130, 55], [120, 90], [78, 92]].map(([cx, cy], i) =>
          <circle key={i} cx={cx} cy={cy} r="3" fill="#0b2f4f" />
          )}
          <text x="100" y="135" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="9" fontWeight="700" letterSpacing="2">PBSMSOSM</text>
        </svg>
      </div>);

  }
  if (kind === "wearable") {
    return (
      <div className="pb-tile-illus pb-tile-illus-wear">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          {/* watch */}
          <rect x="74" y="20" width="52" height="14" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="74" y="106" width="52" height="14" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="65" y="34" width="70" height="72" rx="12" fill="#0b2f4f" />
          <rect x="72" y="42" width="56" height="56" rx="8" fill="#000" />
          <text x="100" y="62" textAnchor="middle" fill="#6cbe46" fontFamily="Lexend" fontSize="7" fontWeight="700">PREMIER</text>
          <text x="100" y="75" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="11" fontWeight="700">$ 12.40</text>
          <text x="100" y="86" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="6" opacity="0.7">Tap2Pay</text>
          {/* nfc waves */}
          <path d="M140 60 Q148 70 140 80" stroke="#6cbe46" strokeWidth="1.5" fill="none" />
          <path d="M148 56 Q160 70 148 84" stroke="#6cbe46" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M156 52 Q172 70 156 88" stroke="#6cbe46" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      </div>);

  }
  if (kind === "agency") {
    return (
      <div className="pb-tile-illus pb-tile-illus-agency">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          <rect x="20" y="80" width="160" height="50" fill="rgba(11,47,79,0.05)" />
          {/* shop */}
          <rect x="55" y="40" width="90" height="65" fill="#0b2f4f" />
          <rect x="55" y="34" width="90" height="10" fill="#6cbe46" />
          <text x="100" y="42" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="700" fontFamily="Lexend">PREMIER AGENT</text>
          <rect x="65" y="50" width="20" height="16" fill="rgba(255,255,255,0.2)" />
          <rect x="90" y="50" width="20" height="16" fill="rgba(255,255,255,0.2)" />
          <rect x="115" y="50" width="20" height="16" fill="rgba(255,255,255,0.2)" />
          <rect x="90" y="75" width="20" height="30" fill="#6cbe46" />
          <circle cx="106" cy="90" r="1" fill="#0b2f4f" />
          {/* badge */}
          <circle cx="160" cy="55" r="18" fill="#6cbe46" />
          <path d="M155 55l3 3 7-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>);

  }
  if (kind === "gateway") {
    return (
      <div className="pb-tile-illus pb-tile-illus-gw">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          {/* browser window */}
          <rect x="30" y="20" width="140" height="100" rx="8" fill="#fff" />
          <rect x="30" y="20" width="140" height="16" rx="8" fill="rgba(11,47,79,0.85)" />
          <circle cx="40" cy="28" r="2" fill="#ff5f57" />
          <circle cx="48" cy="28" r="2" fill="#ffbd2e" />
          <circle cx="56" cy="28" r="2" fill="#28c840" />
          <rect x="70" y="24" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
          {/* form */}
          <rect x="42" y="50" width="116" height="10" rx="2" fill="rgba(11,47,79,0.08)" />
          <rect x="42" y="66" width="70" height="10" rx="2" fill="rgba(11,47,79,0.08)" />
          <rect x="118" y="66" width="40" height="10" rx="2" fill="rgba(11,47,79,0.08)" />
          <rect x="42" y="82" width="116" height="14" rx="3" fill="#0b2f4f" />
          <text x="100" y="92" textAnchor="middle" fill="#fff" fontFamily="Lexend" fontSize="7" fontWeight="700">PAY $ 248.00</text>
          <text x="100" y="108" textAnchor="middle" fill="rgba(11,47,79,0.6)" fontFamily="Lexend" fontSize="6">Powered by Premier MPGS</text>
        </svg>
      </div>);

  }
  return null;
}

/* -------------------------------------------------------------------------- */
/*  TESTIMONIALS                                                              */
/* -------------------------------------------------------------------------- */
function Testimonials({ lang }) {
  const list = window.PB_CONTENT.testimonials[lang];
  return (
    <section className="pb-section pb-testimonials">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow">{lang === "en" ? "Loved by Somalia" : "Soomaaliya way jeceshahay"}</span>
          <h2>{lang === "en" ? "Their words. Not ours." : "Hadalkooda."}</h2>
        </div>
        <div className="pb-test-grid">
          {list.map((t, i) =>
          <article key={i} className={`pb-test-card pb-test-card-${i % 4}`}>
              <span className="pb-test-quote">"</span>
              <p>{t.quote}</p>
              <div className="pb-test-foot">
                <span className="pb-avatar">{t.who[0]}</span>
                <div>
                  <strong>{t.who}</strong>
                  <em>{t.role}</em>
                </div>
                <span className="pb-stars">
                  {[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="star" size={12} />)}
                </span>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  SECURITY                                                                  */
/* -------------------------------------------------------------------------- */
function SecurityBand({ lang }) {
  const tt = (en, so) => lang === "en" ? en : so;
  const items = [
  { icon: "shield", t: "ISO 27001", s: tt("Information security certified", "Shahaado amni") },
  { icon: "card", t: "PCI-DSS", s: tt("Card processing standard", "Heer ammaan kaarka") },
  { icon: "shariah", t: "Shari'ah Certified", s: tt("Independent supervisory board", "Guddi madax-banaan") },
  { icon: "internet", t: "256-bit TLS", s: tt("End-to-end encryption", "Sirayn buuxda") }];

  return (
    <section className="pb-section pb-security">
      <div className="pb-container">
        <div className="pb-security-grid">
          <div>
            <span className="pb-eyebrow pb-eyebrow-light">{tt("Trust", "Aamin")}</span>
            <h2 className="pb-h2-light">{tt("Your money. Protected by everything that matters.", "Lacagtaada. Lagu ilaaliyay wax kasta oo muhiim ah.")}</h2>
            <p>{tt(
                "Premier is licensed by the Central Bank of Somalia and audited annually. Information security to ISO 27001, card processing to PCI-DSS, and every product reviewed by an independent Shari'ah board.",
                "Premier wuxuu shati ka leeyahay CBS, oo sannadkii la baadhaa. Amni macluumaadeed heer ISO 27001 ah."
              )}</p>
          </div>
          <div className="pb-security-pills">
            {items.map((p) =>
            <div key={p.t} className="pb-security-pill">
                <IconCircle name={p.icon} size={44} tone="soft-green" />
                <strong>{p.t}</strong>
                <em>{p.s}</em>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */
function FAQ({ lang }) {
  const list = window.PB_CONTENT.faq[lang];
  const [open, setOpen] = useStateS(0);
  return (
    <section className="pb-section pb-faq" id="faq">
      <div className="pb-container">
        <div className="pb-faq-grid">
          <div>
            <span className="pb-eyebrow">FAQ</span>
            <h2>{lang === "en" ? "Frequently asked questions" : "Su'aalaha inta badan la weydiiyo"}</h2>
            <p>{lang === "en" ?
              "Can't find the answer? Talk to a Premier banker — we reply within 2 hours, 7 days a week." :
              "Maad heli weyday? Nala soo xidhiidh — 2 saac gudahood baan kuu jawaabnaa."}</p>
            <div className="pb-faq-contact">
              <button className="pb-btn pb-btn-primary">{lang === "en" ? "Talk to a banker" : "La hadal banker"}</button>
              <a href="tel:+252619999999" className="pb-link-arrow"><Icon name="phone" size={14} /> +252 61 9999 999 <Icon name="arrow" size={14} /></a>
            </div>
          </div>
          <div className="pb-faq-list">
            {list.map((q, i) =>
            <details key={q.q} open={open === i} onClick={(e) => {e.preventDefault();setOpen(open === i ? -1 : i);}}>
                <summary>
                  <span>{q.q}</span>
                  <span className="pb-faq-plus"><Icon name={open === i ? "close" : "plus"} size={14} /></span>
                </summary>
                <p>{q.a}</p>
              </details>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------------------- */
/*  CTA CLOSER                                                                */
/* -------------------------------------------------------------------------- */
function CTACloser({ lang }) {
  const tt = (en, so) => lang === "en" ? en : so;
  return (
    <section className="pb-section pb-cta-closer">
      <div className="pb-container">
        <div className="pb-cta-card" style={{ backgroundPosition: "center top", backgroundSize: "cover" }}>
          <div className="pb-cta-card-bg" aria-hidden>
            <LogoMark size={420} variant="white" />
          </div>
          <div className="pb-cta-card-inner">
            <span className="pb-eyebrow pb-eyebrow-light">{tt("Get started", "Bilow")}</span>
            <h2 className="pb-h2-light">{tt("Open your Premier account in under 5 minutes.", "Akoonkaaga Premier 5 daqiiqo ku furo.")}</h2>
            <p>{tt(
                "All you need is a phone, your ID, and a clear photo. Premier Wallet activates the moment your account is approved.",
                "Mobile, kaarka aqoonsiga, iyo sawir cad ayaa kaa kaafi ah."
              )}</p>
            <div className="pb-hero-ctas">
              <button className="pb-btn pb-btn-secondary pb-btn-lg">{tt("Open an account", "Furo akoon")} <Icon name="arrow" size={14} /></button>
              <button className="pb-btn pb-btn-glass pb-btn-lg">{tt("Talk to us", "Nala hadal")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, {
  HeroSlider, HeroSlide, HeroArt,
  TrustStrip, StatsBar, Values,
  AccountsShowcase, CardsShowcase,
  WalletSection, MoreServices, TileArt,
  Testimonials, SecurityBand, FAQ, CTACloser
});