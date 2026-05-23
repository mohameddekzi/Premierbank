// Premier Bank — chrome (nav, utility bar, ticker, footer, login modal, branch locator)
// Uses PBLogo + Icon from premier-brand.jsx
const { useState, useEffect, useRef } = React;

/* -------------------------------------------------------------------------- */
/*  Utility (top) bar                                                         */
/* -------------------------------------------------------------------------- */
function UtilityBar({ lang, setLang }) {
  return (
    <div className="pb-utility">
      <div className="pb-container pb-utility-inner">
        <div className="pb-utility-left">
          <span><Icon name="phone" size={13} /> +252 61 9999 999</span>
          <span className="pb-util-sep">•</span>
          <span>info@premierbank.so</span>
          <span className="pb-util-sep pb-hide-md">•</span>
          <span className="pb-hide-md">SWIFT · PBSMSOSM</span>
        </div>
        <div className="pb-utility-right">
          <button className={`pb-lang-btn ${lang === "en" ? "is-active" : ""}`} onClick={() => setLang("en")}>EN</button>
          <span className="pb-lang-sep">/</span>
          <button className={`pb-lang-btn ${lang === "so" ? "is-active" : ""}`} onClick={() => setLang("so")}>SO</button>
          <span className="pb-util-sep">•</span>
          <a href="#careers">Careers</a>
          <a href="#help">Help</a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sticky nav                                                                */
/* -------------------------------------------------------------------------- */
function Nav({ lang, setLang, onLogin, onOpenAccount, onOpenDetail }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = window.PB_CONTENT.nav[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`pb-nav ${scrolled ? "is-scrolled" : ""}`}>
      <UtilityBar lang={lang} setLang={setLang} />
      <div className="pb-nav-main">
        <div className="pb-container pb-nav-inner">
          <a href="#" className="pb-nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <PBLogo variant="color" size={36} />
          </a>

          <nav className="pb-nav-items pb-hide-md" onMouseLeave={() => setOpen(null)}>
            {items.map((it, i) => (
              <div
                key={it.label}
                className={`pb-nav-item ${open === i ? "is-open" : ""}`}
                onMouseEnter={() => setOpen(i)}
              >
                <button>{it.label}<span className="pb-caret">▾</span></button>
                {open === i && (
                  <div className="pb-nav-dropdown">
                    <div className="pb-nav-dropdown-grid">
                      {it.items.map((sub) => {
                        const key = window.PB_DETAIL_KEY && window.PB_DETAIL_KEY[sub];
                        return (
                          <button
                            key={sub}
                            type="button"
                            className="pb-nav-dropdown-item"
                            onClick={() => { setOpen(null); onOpenDetail && onOpenDetail(key || sub); }}
                          >
                            <span className="pb-nav-dropdown-dot" />
                            <span>
                              <strong>{sub}</strong>
                              <em>{lang === "en" ? "Learn how it works →" : "Sida ay u shaqeyso →"}</em>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pb-nav-cta">
            <button className="pb-btn pb-btn-ghost pb-hide-md" onClick={onLogin}>
              Internet Banking
            </button>
            <button className="pb-btn pb-btn-primary" onClick={onOpenAccount}>
              {lang === "en" ? "Open Account" : "Furo Akoon"}
            </button>
            <button className="pb-burger pb-show-md" onClick={() => setMobileOpen(!mobileOpen)} aria-label="menu">
              <Icon name={mobileOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="pb-mobile-menu">
          {items.map((it) => (
            <details key={it.label}>
              <summary>{it.label}</summary>
              {it.items.map((s) => {
                const key = window.PB_DETAIL_KEY && window.PB_DETAIL_KEY[s];
                return (
                  <a key={s} href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onOpenDetail && onOpenDetail(key || s); }}>{s}</a>
                );
              })}
            </details>
          ))}
          <button className="pb-btn pb-btn-ghost" onClick={onLogin}>Internet Banking</button>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  FX Ticker                                                                 */
/* -------------------------------------------------------------------------- */
function Ticker() {
  const rates = window.PB_CONTENT.ticker;
  const doubled = [...rates, ...rates, ...rates];
  return (
    <div className="pb-ticker">
      <div className="pb-ticker-label">
        <span className="pb-ticker-pulse" />
        Live FX · {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
      </div>
      <div className="pb-ticker-track">
        <div className="pb-ticker-marquee">
          {doubled.map((r, i) => (
            <div key={i} className="pb-ticker-item">
              <span className="pb-ticker-code">{r.code}</span>
              <span className="pb-ticker-bid">{r.buy}</span>
              <span className="pb-ticker-ask">{r.sell}</span>
              <span className={`pb-ticker-arrow ${r.up ? "up" : "down"}`}>{r.up ? "▲" : "▼"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Phone — Premier Wallet preview                                            */
/* -------------------------------------------------------------------------- */
function WalletPhone({ lang = "en", small = false }) {
  const t = (en, so) => (lang === "en" ? en : so);
  return (
    <div className={`pb-phone ${small ? "is-small" : ""}`}>
      <div className="pb-phone-frame">
        <div className="pb-phone-notch" />
        <div className="pb-phone-screen">
          <div className="pb-phone-status">
            <span>9:41</span>
            <span className="pb-phone-status-icons">●●●●</span>
          </div>
          <div className="pb-phone-greet">
            <div>
              <p>{t("Salaam, Khadra", "Salaam, Khadra")}</p>
              <h4>{t("Premier Wallet", "Premier Wallet")}</h4>
            </div>
            <div className="pb-phone-logo"><LogoMark size={28} variant="color" /></div>
          </div>
          <div className="pb-phone-balance">
            <span>{t("Available balance", "Hadhaaga")}</span>
            <strong>$ 4,820<sup>.50</sup></strong>
            <div className="pb-phone-balance-foot">
              <span>SOS 132,108,400</span>
              <span className="pb-phone-pill">+ 2.4% mo</span>
            </div>
          </div>
          <div className="pb-phone-actions">
            {[
              ["send",    t("Send",   "Dir")],
              ["receive", t("Receive","Hel")],
              ["bills",   t("Bills",  "Biil")],
              ["topup",   t("Top up", "Top up")],
            ].map(([icn, lab]) => (
              <button key={lab}>
                <IconCircle name={icn} size={36} tone="soft-green" />
                {lab}
              </button>
            ))}
          </div>
          <div className="pb-phone-section">
            <span>{t("Recent activity", "Wax dhowaan dhacay")}</span>
            <a>{t("See all", "Eeg dhammaan")}</a>
          </div>
          <div className="pb-phone-tx">
            {[
              { icn: "send",      t: "Turkish Airlines", s: "Travel · 14 Mar",  a: "− $ 412.00", c: "out" },
              { icn: "bills",     t: "Hano Supermarket", s: "Groceries · 13 Mar", a: "− $ 86.40", c: "out" },
              { icn: "receive",   t: t("From Yusuf (Dubai)", "Ka Yusuf (Dubai)"), s: "Diaspora · 12 Mar", a: "+ $ 350.00", c: "in" },
              { icn: "bills",     t: "BENADIR Water",    s: "Bills · 10 Mar",   a: "− $ 12.00",  c: "out" },
            ].map((x, i) => (
              <div key={i} className="pb-phone-tx-row">
                <span className="pb-phone-tx-icon"><Icon name={x.icn} size={16} color={x.c === "in" ? "#6cbe46" : "#0b2f4f"} /></span>
                <div className="pb-phone-tx-meta">
                  <strong>{x.t}</strong>
                  <em>{x.s}</em>
                </div>
                <span className={`pb-phone-tx-amt ${x.c}`}>{x.a}</span>
              </div>
            ))}
          </div>
          <div className="pb-phone-tabbar">
            <span className="active">Home</span>
            <span>Cards</span>
            <span>Pay</span>
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Login modal                                                               */
/* -------------------------------------------------------------------------- */
function LoginModal({ open, onClose }) {
  const [tab, setTab] = useState("personal");
  if (!open) return null;
  return (
    <div className="pb-modal-bg" onClick={onClose}>
      <div className="pb-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pb-modal-close" onClick={onClose}><Icon name="close" size={16} /></button>
        <div className="pb-modal-grid">
          <div className="pb-modal-side">
            <PBLogo variant="white" size={40} />
            <h3>Internet Banking</h3>
            <p>Bank from your desk. SWIFT, payroll, escrow, and statements — all secure, all online.</p>
            <ul>
              <li><Icon name="shield" size={16} /> 256-bit TLS · 2-factor authentication</li>
              <li><Icon name="send" size={16} /> Instant Premier-to-Premier transfers</li>
              <li><Icon name="globe" size={16} /> SWIFT to 101+ countries (PBSMSOSM)</li>
            </ul>
            <span className="pb-modal-trust">Secured by Premier Bank · ISO 27001</span>
          </div>
          <div className="pb-modal-form">
            <div className="pb-modal-tabs">
              <button className={tab === "personal" ? "is-active" : ""} onClick={() => setTab("personal")}>Personal</button>
              <button className={tab === "corporate" ? "is-active" : ""} onClick={() => setTab("corporate")}>Corporate / Omni</button>
            </div>
            <label>
              <span>{tab === "personal" ? "User ID" : "Corporate ID"}</span>
              <input type="text" placeholder={tab === "personal" ? "e.g. 0617XXXXXX" : "PB-CORP-XXXXX"} defaultValue="" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" placeholder="••••••••" defaultValue="" />
            </label>
            <div className="pb-modal-row">
              <label className="pb-checkbox">
                <input type="checkbox" /> <span>Remember this device</span>
              </label>
              <a href="#">Forgot?</a>
            </div>
            <button className="pb-btn pb-btn-primary pb-btn-block" onClick={onClose}>
              Sign in securely
            </button>
            <p className="pb-modal-foot">
              First time? <a>Activate your online banking →</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Branch locator                                                            */
/* -------------------------------------------------------------------------- */
function BranchLocator({ lang }) {
  const branches = window.PB_CONTENT.branches;
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? branches : filter === "intl" ? branches.filter(b => b.intl) : branches.filter(b => !b.intl);

  return (
    <section className="pb-section pb-locator-section" id="locator">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow">{lang === "en" ? "Find us" : "Naga hel"}</span>
          <h2>{lang === "en" ? "40+ branches. 12,000+ agents." : "40+ laan. 12,000+ wakiil."}</h2>
          <p>{lang === "en"
            ? "From Berbera to Kismayo, Hargeisa to London — Premier is wherever Somalia goes."
            : "Berbera ilaa Kismaayo, Hargeysa ilaa London — Premier wuxuu joogaa meel kasta oo Soomaali joogto."}</p>
        </div>

        <div className="pb-locator">
          <div className="pb-locator-list">
            <div className="pb-locator-filter">
              {[["all", "All"], ["dom", "Somalia"], ["intl", "International"]].map(([k, l]) => (
                <button key={k} className={filter === k ? "is-active" : ""} onClick={() => { setFilter(k); setActive(0); }}>{l}</button>
              ))}
            </div>
            <div className="pb-locator-items">
              {filtered.map((b, i) => (
                <button key={b.city} className={`pb-locator-item ${active === i ? "is-active" : ""}`} onClick={() => setActive(i)}>
                  <span className="pb-locator-pin"><Icon name="pin" size={18} color={active === i ? "#6cbe46" : "#0b2f4f"} /></span>
                  <span>
                    <strong>{b.city}</strong>
                    <em>{b.addr}</em>
                  </span>
                  <span className="pb-locator-count">{b.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pb-locator-map">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pb-locator-svg">
              <defs>
                <pattern id="pbgrid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(11,47,79,0.06)" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#pbgrid)" />
              <path
                d="M30 20 Q35 10 50 12 Q66 14 72 22 Q70 32 66 38 Q62 50 58 60 Q56 72 52 82 Q44 88 40 78 Q36 68 38 58 Q32 50 30 38 Q28 28 30 20Z"
                fill="rgba(108,190,70,0.08)"
                stroke="rgba(11,47,79,0.18)"
                strokeWidth="0.3"
              />
            </svg>
            {filtered.map((b, i) => (
              <button
                key={b.city}
                className={`pb-locator-pin-btn ${active === i ? "is-active" : ""} ${b.intl ? "is-intl" : ""}`}
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
                onClick={() => setActive(i)}
              >
                <span className="pb-locator-ping" />
                <span className="pb-locator-dot" />
                {active === i && (
                  <span className="pb-locator-tip">
                    <strong>{b.city}</strong>
                    <em>{b.count} {b.count === 1 ? "branch" : "branches"}</em>
                  </span>
                )}
              </button>
            ))}
            <div className="pb-locator-legend">
              <span><i className="dom" /> Somalia</span>
              <span><i className="intl" /> International</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */
function Footer({ lang }) {
  const cols = [
    { h: "Bank",     links: ["Personal Current", "Saving Account", "Salary Account", "Hajj & Umra", "Premier Wallet"] },
    { h: "Borrow",   links: ["Auto Finance", "Land & Construction", "Business Trade Financing"] },
    { h: "Services", links: ["Premier Mastercard", "ATM Network", "Premier POS", "SWIFT", "Payroll", "Agency Banking", "Payment Gateway"] },
    { h: "Company",  links: ["Who We Are", "Mission & Values", "Board Members", "Shari'ah Board", "Newsroom"] },
    { h: "Help",     links: ["FAQ", "Customer Support", "Terms & Conditions", "Privacy", "Security Statement"] },
  ];
  return (
    <footer className="pb-footer">
      <div className="pb-container">
        <div className="pb-footer-top">
          <div className="pb-footer-brand">
            <PBLogo variant="white-text" size={42} />
            <p>{lang === "en"
              ? "Premier Bank is a Shari'ah-compliant commercial bank incorporated in Somalia in 2013 and licensed by the Central Bank of Somalia in 2014."
              : "Premier Bank waa bangi waafaqsan Shareecada, Soomaaliya laga aasaasay 2013, oo shati ka qaatay CBS 2014."}</p>
            <div className="pb-footer-app">
              <a className="pb-store">
                <span><Icon name="download" size={20} color="#fff" /></span>
                <span><em>Download on the</em><strong>App Store</strong></span>
              </a>
              <a className="pb-store">
                <span><Icon name="play" size={18} color="#fff" /></span>
                <span><em>Get it on</em><strong>Google Play</strong></span>
              </a>
            </div>
            <div className="pb-footer-social">
              {["f","ig","x","in","yt"].map((s) => <a key={s}>{s.toUpperCase()}</a>)}
            </div>
          </div>
          <div className="pb-footer-cols">
            {cols.map((c) => (
              <div key={c.h}>
                <h5>{c.h}</h5>
                {c.links.map((l) => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div className="pb-footer-bottom">
          <div className="pb-footer-trust">
            <span><Icon name="shield" size={12} color="#6cbe46" /> ISO 27001</span>
            <span><Icon name="check" size={12} color="#6cbe46" /> PCI-DSS</span>
            <span><Icon name="shariah" size={12} color="#6cbe46" /> Shari'ah Certified</span>
            <span><Icon name="globe" size={12} color="#6cbe46" /> SWIFT BIC: PBSMSOSM</span>
          </div>
          <p>© {new Date().getFullYear()} Premier Bank Ltd. All rights reserved · Mogadishu · Hargeisa · Dubai · Nairobi · London</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, UtilityBar, Ticker, WalletPhone, LoginModal, BranchLocator, Footer });
