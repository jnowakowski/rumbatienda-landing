// share.jsx — scroll-stack view of all boards (replaces design canvas for easy review)

const Stage = ({ w, h, children, bg }) => {
  const wrapRef = React.useRef(null);
  const innerRef = React.useRef(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const apply = () => {
      const cw = wrap.clientWidth;
      const s = cw / w;
      inner.style.transform = `scale(${s})`;
      wrap.style.height = (h * s) + 'px';
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(wrap);
    window.addEventListener('resize', apply);
    return () => { ro.disconnect(); window.removeEventListener('resize', apply); };
  }, [w, h]);

  return (
    <div ref={wrapRef} style={{
      width: '100%', maxWidth: 1400, margin: '0 auto',
      position: 'relative', overflow: 'hidden', background: bg || 'transparent',
    }}>
      <div ref={innerRef} style={{
        width: w, height: h,
        position: 'absolute', top: 0, left: 0,
        transformOrigin: 'top left',
      }}>
        {children}
      </div>
    </div>
  );
};

const Header = ({ kicker, title, sub, accent, fg, bg }) => (
  <div style={{
    maxWidth: 1400, margin: '0 auto', padding: '64px 32px 32px',
    color: fg, fontFamily: "'Familjen Grotesk', sans-serif",
  }}>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      opacity: 0.7, color: accent,
    }}>{kicker}</div>
    <div style={{
      fontFamily: "'Rubik', sans-serif", fontWeight: 900,
      fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.95,
      letterSpacing: '-0.04em', textTransform: 'lowercase',
      marginTop: 12, color: fg,
    }}>{title}</div>
    {sub && <div style={{
      fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
      fontSize: 'clamp(18px, 2vw, 26px)', lineHeight: 1.35,
      marginTop: 14, color: accent, maxWidth: '60ch',
    }}>{sub}</div>}
  </div>
);

const SectionDivider = ({ label, fg, bg, accent }) => (
  <div style={{
    background: bg, color: fg,
    padding: '40px 32px',
    borderTop: `2px solid ${fg}`,
    borderBottom: `2px solid ${fg}`,
  }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
      <div style={{
        fontFamily: "'Rubik', sans-serif", fontWeight: 900,
        fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em',
        textTransform: 'lowercase',
      }}>{label}</div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: accent,
      }}>scroll ↓</div>
    </div>
  </div>
);

const BoardCard = ({ no, label, w, h, bg, children }) => (
  <div style={{ padding: '24px 16px 64px' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto 14px', padding: '0 16px', display: 'flex', gap: 16, alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
        letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.7,
        color: '#382949',
      }}>{no}</div>
      <div style={{
        fontFamily: "'Familjen Grotesk', sans-serif", fontSize: 14,
        color: '#382949', opacity: 0.85, textAlign: 'right', maxWidth: '60ch',
      }}>{label}</div>
    </div>
    <Stage w={w} h={h} bg={bg}>
      {children}
    </Stage>
  </div>
);

const {
  Board01Cartelera, Board02Flyer90, Board03Fania, Board04Sticker, Board05Sudor,
  Board06Feria, Board07LogoLab, Board07Editorial, Board08Crayon, Board09Cumbia,
  Board10Type, Board11LogoLabV2, BOARD_W, BOARD_H,
} = window;

const ShareApp = () => (
  <div style={{ background: '#fff8de', minHeight: '100vh', color: '#382949', fontFamily: "'Familjen Grotesk', sans-serif" }}>

    <Header
      kicker="Rumba · brand exploration · for Julian"
      title={<>ten directions.<br/><span style={{color:'#e84c8a'}}>one logo.</span></>}
      sub="The current AI logo + the Gaceta site lean &ldquo;curated travel mag.&rdquo; The product is nightlife. This is the full range — start at the Logo Lab, then scroll through the ten directions. Open questions about the Colombian illustrative taste are still on the table; this is the type+color foundation we can build illustration on top of."
      fg="#382949" accent="#e84c8a" bg="#fff8de"
    />

    <SectionDivider label="logo lab — pick a wordmark" fg="#382949" bg="#fff2c4" accent="#e84c8a" />

    <BoardCard no="LOGO LAB v2" label="16 wordmark variants — top picks: 01 (heavy lowercase + pink dot), 03 (swoosh underline), 14 (sticker shadow)." w={BOARD_W} h={2100} bg="#fff8de">
      <Board11LogoLabV2 />
    </BoardCard>

    <BoardCard no="LOGO LAB v1" label="(earlier) the original 9-variant exploration — kept for context." w={BOARD_W} h={1850} bg="#fff8de">
      <Board07LogoLab />
    </BoardCard>

    <SectionDivider label="ten design directions" fg="#382949" bg="#fff2c4" accent="#e84c8a" />

    <BoardCard no="01 ★ recommended" label="Feria-aligned — same family as the official Feria de Cali ’68: cream, verde, pink, aubergine. Rubik 900 lowercase. Warm, festive, never pompous." w={BOARD_W} h={BOARD_H} bg="#fff8de">
      <Board06Feria />
    </BoardCard>

    <BoardCard no="02" label="Editorial Suave — warm bilingual magazine. Italic DM Serif Display, cream + terracotta + sage. Apartamento meets Caribe." w={BOARD_W} h={BOARD_H} bg="#f5ecd9">
      <Board07Editorial />
    </BoardCard>

    <BoardCard no="03" label="Crayon Caribe — hand-painted folk art. Tomato, mint, cobalt, saffron. Imperfect on purpose — that’s why it’s warm." w={BOARD_W} h={BOARD_H} bg="#fdf3d8">
      <Board08Crayon />
    </BoardCard>

    <BoardCard no="04" label="Cumbia Stamp — ornate fruit-crate label, 1960s Cali mercado. Heavy serif inside an oval cartouche, saffron + emerald + crimson + indigo." w={BOARD_W} h={BOARD_H} bg="#f3e7c8">
      <Board09Cumbia />
    </BoardCard>

    <BoardCard no="05" label="Type Solo — pure typographic minimalism. One huge wordmark, no decoration, three colors total. The most confident option." w={BOARD_W} h={BOARD_H} bg="#fff8de">
      <Board10Type />
    </BoardCard>

    <BoardCard no="06" label="Cartelera Callejera — torn paste-up street poster, riso misregister, hand-painted. Loud, local." w={BOARD_W} h={BOARD_H} bg="#f1e8d5">
      <Board01Cartelera />
    </BoardCard>

    <BoardCard no="07" label="Flyer '99 — Y2K tropical maximalism. Chrome bevel, photocopy energy, gradient mesh, no apologies." w={BOARD_W} h={BOARD_H} bg="#0e0420">
      <Board02Flyer90 />
    </BoardCard>

    <BoardCard no="08" label="Salsa Brava — 1970s Fania reissue. Heavy serif, photo-grain, the dignity of an LP back-cover." w={BOARD_W} h={BOARD_H} bg="#efe7d4">
      <Board03Fania />
    </BoardCard>

    <BoardCard no="09" label="Sticker Culture — WhatsApp group-chat vernacular. The chat is the brand: stickers, voice notes, sent &amp; received bubbles." w={BOARD_W} h={BOARD_H} bg="#fff9f2">
      <Board04Sticker />
    </BoardCard>

    <BoardCard no="10" label="Sudor · Neon — flash-on-camera nightlife photography, brutalist sans, one acid accent. Photos do the talking." w={BOARD_W} h={BOARD_H} bg="#0a0a0c">
      <Board05Sudor />
    </BoardCard>

    {/* OPEN QUESTION */}
    <div style={{
      background: '#382949', color: '#fff8de', padding: '56px 32px 72px',
      borderTop: `2px solid #382949`,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#f4c324' }}>
          OPEN QUESTION — Julian's flag
        </div>
        <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 4.4vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.04em', textTransform: 'lowercase', marginTop: 14 }}>
          the colombian taste —<br/>
          <span style={{ color: '#e84c8a' }}>illustration, dancing figures, sun.</span>
        </div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 20, marginTop: 18, opacity: 0.92, lineHeight: 1.5, maxWidth: '70ch' }}>
          The 10 directions above are mostly typographic + chromatic. Julian called out that real Latin / Colombian design has flat illustration: dancing figures, a radiating sun, palm leaves, drums — flattened but visible. Next round: add a board built around illustrative iconography in the Cuban-poster / Festival de Cali style, on top of the Feria-aligned palette.
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f4c324', marginTop: 28, opacity: 0.9 }}>
          Open with Julian: which references? which icons make the cut? figure inside the logo, or living next to it as a system?
        </div>
      </div>
    </div>

    <div style={{
      padding: '40px 32px 64px',
      textAlign: 'center', background: '#fff8de', color: '#382949',
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.6 }}>
        Rumba — Brand Directions · 2026
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<ShareApp />);
