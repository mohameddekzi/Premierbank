// Premier Bank — main app
const { useState: useStateA, useEffect: useEffectA } = React;

const PB_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#0b2f4f",
  "secondary": "#6cbe46",
  "headline": "",
  "theme": "light",
  "density": "comfortable",
  "language": "en"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(PB_DEFAULTS);
  const [lang, setLang] = useStateA(t.language || "en");
  const [loginOpen, setLoginOpen] = useStateA(false);
  const [detailKey, setDetailKey] = useStateA(null);

  useEffectA(() => { setLang(t.language); }, [t.language]);

  useEffectA(() => {
    document.documentElement.setAttribute("data-pb-theme", t.theme);
    document.documentElement.setAttribute("data-pb-density", t.density);
    document.documentElement.style.setProperty("--pb-primary", t.primary);
    document.documentElement.style.setProperty("--pb-secondary", t.secondary);
    document.documentElement.style.setProperty("--pb-primary-700", shade(t.primary, -0.18));
    document.documentElement.style.setProperty("--pb-primary-300", shade(t.primary, 0.30));
    document.documentElement.style.setProperty("--pb-secondary-700", shade(t.secondary, -0.20));
    document.documentElement.style.setProperty("--pb-secondary-100", tint(t.secondary, 0.85));
  }, [t.theme, t.density, t.primary, t.secondary]);

  const setLangBoth = (l) => { setLang(l); setTweak("language", l); };
  const openDetail = (k) => k && setDetailKey(k);

  return (
    <>
      <Nav
        lang={lang}
        setLang={setLangBoth}
        onLogin={() => setLoginOpen(true)}
        onOpenAccount={() => openDetail("personal")}
        onOpenDetail={openDetail}
      />
      <Ticker />
      <main>
        <HeroSlider lang={lang} customHeadline={t.headline} />
        <StatsBar lang={lang} />
        <Values lang={lang} />
        <AccountsShowcase lang={lang} onOpenDetail={openDetail} />
        <CardsShowcase lang={lang} onOpenDetail={openDetail} />
        <WalletSection lang={lang} />
        <MoreServices lang={lang} onOpenDetail={openDetail} />
        <BranchLocator lang={lang} />
        <Testimonials lang={lang} />
        <SecurityBand lang={lang} />
        <TrustStrip lang={lang} />
        <FAQ lang={lang} />
        <CTACloser lang={lang} />
      </main>
      <Footer lang={lang} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <DetailPanel
        itemKey={detailKey}
        lang={lang}
        onClose={() => setDetailKey(null)}
        onJump={(k) => setDetailKey(k)}
        onOpenAccount={() => setLoginOpen(true)}
      />

      <TweaksPanel title="Tweaks" defaultPosition={{ right: 24, bottom: 24 }} width={300}>
        <TweakSection title="Brand">
          <TweakColor label="Primary navy" value={t.primary}   onChange={(v) => setTweak("primary", v)}
            options={["#0b2f4f", "#0a2540", "#0e3b66", "#1a4a73"]} />
          <TweakColor label="Accent green" value={t.secondary} onChange={(v) => setTweak("secondary", v)}
            options={["#6cbe46", "#4caf50", "#22c55e", "#16a085"]} />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakText label="Headline override (slide 1)" value={t.headline} onChange={(v) => setTweak("headline", v)}
            placeholder="Banking that moves with Somalia." />
        </TweakSection>
        <TweakSection title="Display">
          <TweakRadio label="Theme"   value={t.theme}   onChange={(v) => setTweak("theme", v)}
            options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]} />
          <TweakRadio label="Density" value={t.density} onChange={(v) => setTweak("density", v)}
            options={[{ value: "comfortable", label: "Comfy" }, { value: "compact", label: "Compact" }]} />
          <TweakRadio label="Language" value={t.language} onChange={(v) => { setTweak("language", v); setLang(v); }}
            options={[{ value: "en", label: "EN" }, { value: "so", label: "SO" }]} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

/* color helpers */
function hexToRgb(h) { const x = h.replace("#", ""); return [0, 2, 4].map(i => parseInt(x.substr(i, 2), 16)); }
function rgbToHex(r, g, b) { return "#" + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join(""); }
function shade(hex, amt) { const [r, g, b] = hexToRgb(hex); const f = amt > 0 ? 255 : 0; const m = Math.abs(amt); return rgbToHex(r + (f - r) * m, g + (f - g) * m, b + (f - b) * m); }
function tint(hex, amt) { return shade(hex, amt); }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
