// Premier Bank — Logo + Icon vector system
// All built from SVG paths, using brand colors. No emoji.

/* -------------------------------------------------------------------------- */
/*  Brand colors                                                              */
/* -------------------------------------------------------------------------- */
const PB_BRAND = {
  navy: "#0b2f4f",
  green: "#6cbe46",
  white: "#ffffff",
  cream: "#f7f4ee",
};

/* -------------------------------------------------------------------------- */
/*  Logo Mark — 5-petal lotus, traced from official Premier Bank logo        */
/*  Variants: "color" | "white" | "navy" | "green"                            */
/* -------------------------------------------------------------------------- */
function LogoMark({ size = 40, variant = "color", className = "" }) {
  const petal = variant === "white" ? "#ffffff"
              : variant === "navy"  ? PB_BRAND.navy
              :                       PB_BRAND.green;
  const stroke = variant === "color" ? PB_BRAND.green
               : variant === "white" ? "#ffffff"
               : variant === "navy"  ? PB_BRAND.navy
               :                       PB_BRAND.green;
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 100 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* back-left petal */}
      <path
        d="M16 64 C10 50 14 36 28 30 C36 38 38 50 34 64 Z"
        fill={petal}
      />
      {/* back-right petal */}
      <path
        d="M84 64 C90 50 86 36 72 30 C64 38 62 50 66 64 Z"
        fill={petal}
      />
      {/* mid-left petal */}
      <path
        d="M30 64 C24 48 28 28 44 22 C50 32 52 50 48 64 Z"
        fill={petal}
        stroke={stroke}
        strokeWidth="0.8"
      />
      {/* mid-right petal */}
      <path
        d="M70 64 C76 48 72 28 56 22 C50 32 48 50 52 64 Z"
        fill={petal}
        stroke={stroke}
        strokeWidth="0.8"
      />
      {/* center petal */}
      <path
        d="M50 64 C44 46 44 26 50 8 C56 26 56 46 50 64 Z"
        fill={petal}
        stroke={stroke}
        strokeWidth="0.8"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Full Logo — mark + wordmark                                               */
/*  Variants: "color" (green mark + navy text on light)                       */
/*           "white" (white mark + white text — for dark bg)                  */
/*           "white-text" (green mark + white text — for navy bg)             */
/*           "mark" (just the symbol)                                         */
/* -------------------------------------------------------------------------- */
function PBLogo({ variant = "color", size = 40, showWord = true, className = "" }) {
  const markVariant = variant === "white" ? "white" : variant === "white-text" ? "green" : "green";
  const textColor = variant === "white" || variant === "white-text" ? "#ffffff" : PB_BRAND.navy;
  if (!showWord || variant === "mark") {
    return <LogoMark size={size} variant={variant === "white" ? "white" : "color"} className={className} />;
  }
  return (
    <div className={`pb-logo ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: Math.round(size * 0.32) }}>
      <LogoMark size={size} variant={variant === "white" ? "white" : "color"} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9 }}>
        <span style={{
          fontFamily: "'Lexend', sans-serif",
          fontWeight: 700,
          fontSize: Math.round(size * 0.52),
          letterSpacing: "-0.04em",
          color: textColor,
          textTransform: "lowercase",
        }}>
          premier bank
        </span>
        <span style={{
          fontFamily: "'Lexend', sans-serif",
          fontWeight: 500,
          fontSize: Math.round(size * 0.22),
          letterSpacing: "0.12em",
          color: textColor,
          opacity: 0.55,
          textTransform: "uppercase",
          marginTop: Math.round(size * 0.12),
        }}>
          Banking made easy
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Icon System — every product/service has a custom SVG icon                 */
/*  Renders in a colored circular container with the icon in brand color.    */
/* -------------------------------------------------------------------------- */
const ICON_PATHS = {
  // ── Accounts ────────────────────────────────────────────────────────────
  account: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3M14 15h3" />
    </g>
  ),
  personal: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6.5 7-6.5s7 3 7 6.5" />
    </g>
  ),
  student: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l9-4 9 4-9 4-9-4z" />
      <path d="M7 12v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4" />
      <path d="M21 10v5" />
    </g>
  ),
  salary: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9v.01M18 15v.01" />
    </g>
  ),
  business: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 12h18" />
      <path d="M11 12v2h2v-2" />
    </g>
  ),
  saving: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11c0-3 2.5-5.5 6-5.5h4c3.5 0 6 2.5 6 5.5v4c0 2-1.5 3.5-3.5 3.5H17l-1 2h-2l-.5-2H10l-.5 2h-2l-1-2H7.5C5.5 18.5 4 17 4 15z" />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <path d="M14 7c0-1 .8-2 2-2" />
    </g>
  ),
  hajj: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V11l7-5 7 5v10" />
      <rect x="9" y="13" width="6" height="8" />
      <path d="M12 4V2M11 2h2" />
    </g>
  ),
  joint: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 20c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M10 20c0-3 2.5-5 6-5s6 2 6 5" />
    </g>
  ),
  women: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M12 12v8M9 17h6" />
    </g>
  ),
  ngo: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-5-7-11a4 4 0 017-2.5A4 4 0 0119 10c0 6-7 11-7 11z" />
    </g>
  ),
  corporate: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="8" height="11" />
      <rect x="13" y="4" width="8" height="16" />
      <path d="M6 13h2M6 16h2M16 8h2M16 11h2M16 14h2M16 17h2" />
    </g>
  ),
  diaspora: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 4 6.5 4 9s-1.5 6-4 9c-2.5-3-4-6.5-4-9s1.5-6 4-9z" />
    </g>
  ),

  // ── Cards ───────────────────────────────────────────────────────────────
  card: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="M2 11h20" />
      <circle cx="17" cy="15.5" r="1.8" />
      <circle cx="19.5" cy="15.5" r="1.8" />
    </g>
  ),
  cardElite: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="M5 11l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3L1 14h3z" transform="translate(4 -1)" />
    </g>
  ),
  cardPlatinum: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <circle cx="12" cy="13" r="2.5" />
      <path d="M9.5 16l-1 3M14.5 16l1 3" />
    </g>
  ),

  // ── Financing ────────────────────────────────────────────────────────────
  auto: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13l2-5c.4-1 1.4-2 2.5-2h9c1.1 0 2.1 1 2.5 2l2 5v5H3z" />
      <circle cx="7" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />
      <path d="M3 13h18" />
    </g>
  ),
  land: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20l5-10 4 4 3-6 6 12z" />
      <circle cx="17" cy="6" r="2" />
    </g>
  ),
  trade: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="11" rx="1" />
      <path d="M3 7L7 3h10l4 4" />
      <path d="M9 12h6M12 14v3" />
    </g>
  ),
  invest: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-5 4 4 8-9" />
      <path d="M14 7h6v6" />
    </g>
  ),

  // ── Digital / Services ───────────────────────────────────────────────────
  wallet: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h12a2 2 0 012 2v1a2 2 0 01-2 2H3" />
      <circle cx="14" cy="12.5" r="1" fill="currentColor" />
    </g>
  ),
  mastercard: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </g>
  ),
  swift: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14.5 0 18" />
      <path d="M12 3c-3 3.5-3 14.5 0 18" />
    </g>
  ),
  internet: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <path d="M2 20h20M9 17v3M15 17v3" />
      <path d="M8 11h2v2M14 11l2 2-2 2" />
    </g>
  ),
  atm: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M9 11h6M10 14l4 1M9 17h6" />
    </g>
  ),
  pos: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="14" rx="1.5" />
      <path d="M7 8h10M7 11h6" />
      <rect x="4" y="17" width="16" height="4" rx="1" />
    </g>
  ),
  agency: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M9 21v-5h6v5" />
      <path d="M2 10h20" />
    </g>
  ),
  payroll: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M7 9h10M7 12h6M7 15h8" />
      <circle cx="17" cy="15" r="1.5" />
    </g>
  ),
  wearable: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="6" width="10" height="12" rx="2" />
      <path d="M9 6V3h6v3M9 18v3h6v-3" />
      <path d="M14 12l-2 0c-1 0-1 1.4 0 1.4M14.5 10.5a2 2 0 010 3M16 9a4 4 0 010 6" />
    </g>
  ),
  gateway: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="10" rx="1.5" />
      <path d="M7 9V6a5 5 0 0110 0v3" />
      <circle cx="12" cy="14" r="1.5" />
      <path d="M12 15.5v2" />
    </g>
  ),
  remittance: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 10c2-2 6-2 8 0M16 14c-2 2-6 2-8 0" />
      <path d="M5 9l3 1-1-3M19 15l-3-1 1 3" />
    </g>
  ),

  // ── About / Generic ──────────────────────────────────────────────────────
  about: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v.01M12 11v6" />
    </g>
  ),
  shariah: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4c-4 0-8 3.5-8 8s4 8 8 8c1.5 0 3-.5 4-1.2-3 1-7-1.5-7-6.8s4-7.8 7-6.8C17 4.5 15.5 4 14 4z" />
      <path d="M16 9l1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L13.5 11.3 15.5 11z" />
    </g>
  ),
  board: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="9" r="2.5" />
      <circle cx="18" cy="9" r="2.5" />
      <circle cx="12" cy="7" r="3" />
      <path d="M2 19c0-2.5 2-4.5 4-4.5s4 2 4 4.5" />
      <path d="M14 19c0-2.5 2-4.5 4-4.5s4 2 4 4.5" />
      <path d="M7 19c0-3 2.5-5.5 5-5.5s5 2.5 5 5.5" />
    </g>
  ),
  team: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="11" r="2.5" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M14 20c.5-2 2-3.5 3-3.5s2.5 1.5 3 3.5" />
    </g>
  ),
  news: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="14" height="16" rx="1" />
      <path d="M7 8h6M7 11h6M7 14h6M7 17h4" />
      <path d="M17 8h4v10a2 2 0 01-2 2h-2" />
    </g>
  ),
  press: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-5 9 5-9 5z" />
      <path d="M7 11v4c0 2 2.5 3.5 5 3.5s5-1.5 5-3.5v-4" />
      <path d="M21 9v6M21 17l-1 3h2z" fill="currentColor" />
    </g>
  ),
  gallery: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M5 18l4-5 4 4 3-2 3 3" />
    </g>
  ),

  // ── Utility ──────────────────────────────────────────────────────────────
  check: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </g>
  ),
  arrow: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </g>
  ),
  phone: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-3 2c1 2.5 2.5 4 5 5l2-3 5 2v4c0 1-1 2-2 2C8 21 3 16 3 6c0-1 1-2 2-2z" />
    </g>
  ),
  shield: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </g>
  ),
  globe: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </g>
  ),
  clock: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
  ),
  star: (
    <g fill="currentColor">
      <path d="M12 3l2.5 6 6.5.6-5 4.4 1.5 6.4L12 17l-5.5 3.4L8 14l-5-4.4 6.5-.6z" />
    </g>
  ),
  download: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M7 11l5 5 5-5M5 20h14" />
    </g>
  ),
  play: (
    <g fill="currentColor"><path d="M7 4l13 8-13 8z" /></g>
  ),
  chevronLeft: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 6l-6 6 6 6" />
    </g>
  ),
  chevronRight: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </g>
  ),
  search: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" /><path d="M16 16l4 4" />
    </g>
  ),
  close: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </g>
  ),
  plus: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </g>
  ),
  menu: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </g>
  ),
  send: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 4L3 11l7 2 2 7z" /><path d="M21 4L11 14" />
    </g>
  ),
  receive: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12V4M4 12h8M4 12L14 2" />
    </g>
  ),
  bills: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </g>
  ),
  topup: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M12 11v6M9 14h6" />
    </g>
  ),
  pin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </g>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Icon component                                                            */
/* -------------------------------------------------------------------------- */
function Icon({ name, size = 24, color, className = "", style }) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ color: color || "currentColor", display: "inline-block", verticalAlign: "middle", ...style }}
      aria-hidden="true"
    >{path}</svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  IconCircle — icon inside a tinted circle (the main UI affordance)        */
/* -------------------------------------------------------------------------- */
function IconCircle({ name, size = 48, tone = "green", className = "" }) {
  // tone: "green" | "navy" | "ghost-green" | "ghost-navy"
  const bg = {
    green: PB_BRAND.green,
    navy: PB_BRAND.navy,
    "ghost-green": "rgba(108,190,70,0.14)",
    "ghost-navy":  "rgba(11,47,79,0.08)",
    "soft-green":  "rgba(108,190,70,0.18)",
    "soft-navy":   "rgba(11,47,79,0.10)",
  }[tone];
  const fg = {
    green: "#ffffff",
    navy: "#ffffff",
    "ghost-green": PB_BRAND.green,
    "ghost-navy":  PB_BRAND.navy,
    "soft-green":  PB_BRAND.green,
    "soft-navy":   PB_BRAND.navy,
  }[tone];
  return (
    <span
      className={`pb-icon-circle ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color: fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon name={name} size={Math.round(size * 0.46)} />
    </span>
  );
}

Object.assign(window, { PB_BRAND, LogoMark, PBLogo, Icon, IconCircle, ICON_PATHS });
